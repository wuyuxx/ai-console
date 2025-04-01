#!/usr/bin/env node
import { program } from 'commander';
import config from '../src/config.js';
import ai from '../src/ai.js';
import i18n from '../src/i18n.js';

program
    .name('ai')
    .description('Ask AI on the console | terminal')
    .version('1.0.0');

program
    .command('config')
    .description('Configure AI settings')
    .action(async () => {
        try {
            await config();
        } catch (err) {
            console.error(i18n.t('error'), err.message);
        }
    });

program
    .argument('[question...]', 'Question to ask the AI')
    .action(async (args) => {
        try {
            if (args.length === 0) {
                program.help();
            }
            const question = args.join(' ');
            const context = {
                platform: process.platform
            };
            await ai(question, context);
        } catch (err) {
            console.error(i18n.t('error'), err.message);
        }
    });

program.parse();
