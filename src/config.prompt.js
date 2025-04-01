import i18n from './i18n.js';

export default [
    {
        type: 'list',
        name: 'provider',
        message: i18n.t('chooseProvider'),
        choices: [
            { name: 'OpenRouter', value: 'https://openrouter.ai/api' },
            { name: 'OpenAI', value: 'https://api.openai.com' },
            { name: 'DeepSeek', value: 'https://api.deepseek.com' },
            { name: 'Local Ollama', value: 'http://localhost:11434' },
            { name: 'Customize OpenAI-compatible BaseUrl', value: 'customize' }
        ]
    },
    {
        type: 'input',
        name: 'baseUrl',
        message: i18n.t('inputBaseUrl'),
        when: answers => answers.provider === 'customize',
        validate: input => {
            if (input.trim() === '') {
                return i18n.t('pleaseInputBaseUrl');
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'apiKey',
        message: i18n.t('inputApiKey')
    },
    {
        type: 'input',
        name: 'model',
        message: i18n.t('inputModel'),
        validate: input => {
            if (input.trim() === '') {
                return i18n.t('pleaseInputModel');
            }
            return true;
        }
    }
]
