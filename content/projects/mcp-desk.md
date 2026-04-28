# MCP Desk

> AI Desktop App

MCP Desk is a polished Electron desktop client for chatting with OpenRouter models and attaching local MCP tools from a personal command-center dashboard.

![MCP Desk hero](https://res.cloudinary.com/diyxwdtjd/image/upload/v1769290224/projects/mcpdesk-pic_u00wtp.png)

- GitHub: https://github.com/debsouryadatta/mcp-desk
- Live: https://github.com/debsouryadatta/mcp-desk/releases
- Tags: Electron, React, TypeScript, MCP, OpenRouter, LangChain, Tailwind CSS

## Overview

MCP Desk is a developer-focused desktop workspace for running AI conversations with optional Model Context Protocol tooling. It is built for people who want a local, configurable AI client instead of juggling separate chat apps, terminal configs, model dashboards, and personal productivity widgets. The app brings chat history, MCP server control, model selection, settings backup, GitHub activity, weather, todos, music, and profile customization into one calm desktop interface.

## Tech Stack

- Frontend: React 19, TypeScript, Tailwind CSS, shadcn/ui, Radix UI, Framer Motion
- Desktop: Electron, Electron Vite, Electron Toolkit
- AI and MCP: LangChain `ChatOpenAI`, OpenRouter API, `easy-mcp-use`, MCP client/agent sessions
- Data and Integrations: localStorage, JSON import/export, GitHub API, Open-Meteo, geocode.maps.co
- Build and Deployment: Vite, pnpm, electron-builder, macOS/Windows/Linux packaging

## Features

### MCP-powered AI chat

Chat with OpenRouter models through a local Electron app, with Markdown-rendered assistant responses and automatic routing between plain AI chat and MCP-enabled tool sessions.

### Tool selection and server control

Configure MCP servers in JSON, choose which tools are active for each chat, preview the enabled server config, and start or stop the MCP session from the chat composer.

### Personal command-center dashboard

Use a customizable dashboard with todos, live clock, weather by location, music playback, photo carousel, profile details, and GitHub activity stats.

### Portable settings

Save profile details, OpenRouter keys, selected models, MCP configuration, playlist data, carousel photos, theme state, and chat history locally, then export or restore everything as a JSON backup.

## Architecture

![MCP Desk architecture](https://res.cloudinary.com/diyxwdtjd/image/upload/v1777205316/projects/8a0f7ee4-d886-4ce6-8ea4-d804591b299a.png)

## Product Images

![MCP Desk screenshot — chat and composer](https://res.cloudinary.com/diyxwdtjd/image/upload/v1747063885/projects/Screenshot_2025-05-12_at_9.01.09_PM_qzcdek.png)
![MCP Desk screenshot — dashboard](https://res.cloudinary.com/diyxwdtjd/image/upload/v1747063832/projects/Screenshot_2025-05-12_at_8.58.32_PM_wzrhyy.png)
![MCP Desk screenshot — tools](https://res.cloudinary.com/diyxwdtjd/image/upload/v1747063832/projects/Screenshot_2025-05-12_at_9.00.07_PM_udninm.png)
![MCP Desk screenshot — settings](https://res.cloudinary.com/diyxwdtjd/image/upload/v1747063832/projects/Screenshot_2025-05-12_at_8.59.59_PM_hdwbio.png)

## CTA

- GitHub: https://github.com/debsouryadatta/mcp-desk
- Download: https://github.com/debsouryadatta/mcp-desk/releases
- Back to Projects: /#projects
