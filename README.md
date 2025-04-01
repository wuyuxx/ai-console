# AI Console

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/wuyuxx/ai-console)

Ask AI on the console | terminal. A simple command-line tool to interact with AI models directly from your terminal.



## Features

- Simple command-line interface for AI interactions
- Support for multiple AI providers (OpenAI, OpenRouter, DeepSeek, Local Ollama)
- Customizable API endpoints
- Multi-language support (English, Chinese)
- Streaming responses for real-time feedback

## Installation

```bash
# Install globally
npm install -g ai-console

# Or install locally
npm install ai-console
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
ai what is the capital of France?
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

# Ask a simple question
ai what is the weather like today?

# Get help with a coding problem
ai how do I create a React component that fetches data from an API?

# Get terminal command help
ai how do I find all files modified in the last 24 hours?
```

## License

MIT © [Wuyu](https://github.com/wuyuxx)