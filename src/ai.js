import { readConfig } from './config.js';
import i18n from './i18n.js';

/**
 * AI interaction main function
 * @author wuyu
 * @date 2025-04-01
 * @param {string} question - User question
 * @param {Object} context - Context information
 * @returns {Promise<void>}
 */
export default async function(question, context) {
    let config;
    try {
        config = await readConfig();
    } catch (err) {
        throw new Error(i18n.t('configError'));
    }
    const { baseUrl, apiKey, model, language } = config;
    if (!baseUrl || !model || !language) {
        throw new Error(i18n.t('configError'));
    }

    const headers = {
        'Content-Type': 'application/json'
    };
    if (apiKey) {
        headers['Authorization'] = `Bearer ${apiKey}`;
    }
    const request = new Request(`${baseUrl}/v1/chat/completions`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            model: model,
            messages: [
                {
                    role: 'system',
                    content: `
                    You are a technical expert proficient in ${context.platform} platform terminal commands.
                    Now the user is using terminal commands and you just need to provide a simple and accurate response to solve the user's current problem.
                    Important: Always answer questions in ${language} (unless the user explicitly specifies using another language).
                    `
                },
                {
                    role: 'user',
                    content: question
                }
            ],
            stream: true
        })
    });

    const response = await fetch(request);

    if (!response.ok) {
        throw new Error(await response.text());
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');

    let buffer = '';

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = buffer + decoder.decode(value, { stream: true });
        const chunkArr = chunk.split('\n\n');

        buffer = chunkArr.slice(-1)[0];

        chunkArr.slice(0, chunkArr.length - 1).forEach(event => {
            if (event.startsWith('data: ')) {
                const data = event.slice(6);
                if (data === '[DONE]') {
                    return;
                }
                try {
                    const json = JSON.parse(data);
                    if (json.choices && json.choices.length > 0) {
                        process.stdout.write(json.choices[0].delta.content);
                    }
                } catch (ignored) {}
            }
        });
    }
}
