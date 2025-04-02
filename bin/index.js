#!/usr/bin/env node
import { createRequire } from 'module';
import { program } from 'commander';
import config from '../src/config.js';
import ai from '../src/ai.js';
import i18n from '../src/i18n.js';

const require = createRequire(import.meta.url);
const pkg = require('../package.json');

program
    .name('ai')
    .description(i18n.t('usage'))
    .version(pkg.version);

program
    .command('config')
    .description(i18n.t('configDescription'))
    .action(async () => {
        try {
            await config();
        } catch (err) {
            console.error(i18n.t('error'), err.message);
        }
    });

program
    .argument('[question...]', i18n.t('questionPrompt'))
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
