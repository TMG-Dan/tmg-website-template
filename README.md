# TMG Website Builder

A website builder system that enables non-technical partners to create professional websites for small local businesses using Claude Code slash commands.

> **Getting Started?** See the [Setup Guide](docs/TESTING_GUIDE.md)

## How It Works

1. Clone the website template
2. Open in VS Code with Claude Code extension
3. Use `/tmg-*` slash commands to build the site
4. Deploy to Vercel

## Slash Commands

| Command | What it does |
|---------|--------------|
| `/tmg-setup` | Configure project for client |
| `/tmg-sitemap` | Define pages and navigation |
| `/tmg-designer` | Set colors and styling |
| `/tmg-content` | Generate page content |
| `/tmg-payload-setup` | Configure CMS |
| `/tmg-deploy` | Publish to Vercel |

Optional commands:
- `/tmg-scrape` - Extract content from existing website
- `/tmg-developer` - Add custom features

## Tech Stack

- **Framework**: Next.js 15 + React 19 + TypeScript
- **Styling**: Tailwind CSS + Shadcn UI
- **CMS**: Payload CMS 3.x (at `/admin`)
- **Animations**: Framer Motion
- **Hosting**: Vercel

## Repository

The website template (with commands included) is at:
https://github.com/TMG-Dan/tmg-website-template

This repo (TMG_BASE) is for development and documentation.

## Quick Start

See the full [Setup Guide](docs/TESTING_GUIDE.md), or:

1. Install VS Code, Node.js, Git
2. Install Claude Code extension in VS Code
3. Clone template: `https://github.com/TMG-Dan/tmg-website-template.git`
4. Run `npm install`
5. Click Claude icon, type `/tmg-setup`
