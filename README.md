# AI Console

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-2.1.0-blue.svg)](https://github.com/wuyuxx/ai-console)
[![中文文档](https://img.shields.io/badge/文档-中文-blue)](README_zh.md)

Console and Terminal Command AI Assistant | A command-line tool designed for developers. Get terminal command help, debugging suggestions and technical support.

Certainly: General Q&A support for non-technical questions

## Features

- Terminal Command Expert: AI assistant optimized for command-line operations
- Automatic platform detection: Works seamlessly across Windows, Linux and macOS
- Supports major AI service providers (OpenAI, OpenRouter, DeepSeek, Local Ollama)
- Customizable API endpoints
- Real-time streaming response
- Multi-language support (English, Chinese)

## Installation

```bash
# Install globally
npm install -g ai-console
```

## Usage

### Configuration

Before using the tool, you need to configure it with your AI provider details:

```bash
ai config
```

This will prompt you to:
1. Choose an AI provider (OpenRouter, OpenAI, DeepSeek, Local Ollama, or custom)
2. Enter your API key (if required)
3. Specify the model name to use

### Asking Questions

Once configured, you can ask questions directly:

```bash
ai How to find all files modified in the last 24 hours?
```

The AI will respond with streaming text directly in your terminal.

## Supported AI Providers

- **OpenRouter** (`https://openrouter.ai/api`)
- **OpenAI** (`https://api.openai.com`)
- **DeepSeek** (`https://api.deepseek.com`)
- **Local Ollama** (`http://localhost:11434`)
- **Custom OpenAI-compatible API** (any compatible endpoint)

## Examples

```bash
# Configure the tool
ai config

# Get terminal command help
ai How to find all files modified in the last 24 hours?

# Debug command issues
ai Why is my git push command failing?

# Learn new commands
ai How to batch rename files in Linux?
```

## License

MIT © [Wuyu](https://github.com/wuyuxx)