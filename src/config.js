import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import inquirer from 'inquirer';
import configPrompt from './config.prompt.js';
import i18n from './i18n.js';

/**
 * Configuration command entry
 * @author wuyu
 * @date 2025-04-01
 * @returns {Promise<void>}
 */
async function config() {
    const answers = await inquirer.prompt(configPrompt);

    const baseUrl = answers.baseUrl || answers.provider;
    const apiKey = answers.apiKey;
    const model = answers.model;

    const configContent = await setupConfig(baseUrl, apiKey, model);

    console.log(i18n.t('configSuccess'));
    console.log(configContent);
}

/**
 * Setup configuration file
 * @author wuyu
 * @date 2025-04-01
 * @param {string} baseUrl - API base URL
 * @param {string} apiKey - API key
 * @param {string} model - Model name
 * @returns {Promise<string>} Configuration file content
 */
async function setupConfig(baseUrl, apiKey, model) {
    const homeDir = os.homedir();
    const configDir = path.join(homeDir, '.ai-console');

    await fs.mkdir(configDir, { recursive: true });

    const configPath = path.join(configDir, 'config.json');
    const configContent = JSON.stringify({
        baseUrl,
        apiKey,
        model
    }, null, 2);

    await fs.writeFile(configPath, configContent, 'utf8');

    return configContent;
}

/**
 * Read configuration file
 * @author wuyu
 * @date 2025-04-01
 * @returns {Promise<Object>} Parsed configuration object
 */
async function readConfig() {
    const homeDir = os.homedir();
    const configDir = path.join(homeDir, '.ai-console');
    const configPath = path.join(configDir, 'config.json');

    const configContent = await fs.readFile(configPath, 'utf8');
    
    return JSON.parse(configContent);
}

export { config as default, setupConfig, readConfig }
