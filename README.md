# TMG Website Builder

A CLI-based website builder system that enables non-technical partners to create professional websites for small local businesses using Claude Code slash commands.

> **Partner?** Start here: [Partner Guide](docs/PARTNER_GUIDE.md)

## Overview

This repo contains the **development environment** for the TMG Website Builder. It uses:

- **Speckit** workflow for building and iterating on features
- **Claude Code slash commands** (`/tmg-*`) for the partner-facing workflow

## Architecture

### Two Repositories

| Repository | Purpose |
|------------|---------|
| **TMG_BASE** (this repo) | Development environment + slash commands |
| **tmg-website-template** | Next.js template that `/tmg-setup` clones |

### Tech Stack

- **Framework**: Next.js 14 + React + TypeScript
- **Styling**: Tailwind CSS + Shadcn UI + Aceternity/Magic UI
- **Database**: Convex
- **CMS**: Payload CMS (self-hosted at `/admin`)
- **Email**: Resend
- **Hosting**: Vercel

## Slash Commands

| Command | Description |
|---------|-------------|
| `/tmg-setup` | Clone template, initialize new project |
| `/tmg-scrape` | Extract content from existing client website |
| `/tmg-sitemap` | Define site structure and navigation |
| `/tmg-designer` | Configure visual design and styling |
| `/tmg-content` | Generate page copy and content |
| `/tmg-payload-setup` | Configure CMS collections |
| `/tmg-developer` | Add custom features |
| `/tmg-deploy` | Push to GitHub + deploy to Vercel |

## Partner Workflow

```
1. Open VS Code in empty folder
2. /tmg-setup         → Clone template, set up project
3. /tmg-scrape        → (Optional) Extract existing site content
4. /tmg-sitemap       → Define pages and navigation
5. /tmg-designer      → Configure colors, fonts, style
6. /tmg-content       → Generate copy for all pages
7. /tmg-payload-setup → Configure CMS for client
8. /tmg-developer     → (Optional) Custom features
9. /tmg-deploy        → Ship to Vercel
```

## Directory Structure

```
TMG_BASE/
├── .claude/commands/     # Slash command definitions
│   ├── speckit.*.md     # Speckit commands (for building TMG)
│   └── tmg.*.md         # TMG commands (for building client sites)
├── .specify/
│   ├── memory/          # Project constitution
│   └── templates/       # Speckit templates
├── specs/               # Feature specifications
│   ├── 000-base-template/
│   ├── 001-setup-command/
│   └── ...
├── docs/archive/        # Original PRD
└── README.md
```

## Features

| # | Feature | Description |
|---|---------|-------------|
| 000 | Base Template | Next.js + full stack template |
| 001 | /tmg-setup | Project initialization |
| 002 | /tmg-scrape | Content extraction |
| 003 | /tmg-sitemap | Site structure |
| 004 | /tmg-designer | Visual design |
| 005 | /tmg-content | Content generation |
| 006 | /tmg-payload-setup | CMS configuration |
| 007 | /tmg-developer | Custom features |
| 008 | /tmg-deploy | Deployment |

## Development

### Building Features

Use Speckit commands to build each feature:

```
/speckit.specify   → Create specification
/speckit.plan      → Generate implementation plan
/speckit.tasks     → Break into tasks
/speckit.implement → Execute implementation
```

### Build Order

1. **Phase 1**: Feature 000 (Base Template)
2. **Phase 2**: Features 001-004 (MVP Commands)
3. **Phase 3**: Features 005-006 (Content & CMS)
4. **Phase 4**: Features 007-008 (Ship)

## Prerequisites

- VS Code with Claude Code extension
- GitHub CLI (`gh auth login`)
- Vercel CLI (`vercel login`)
- Node.js 18+

## Manual Setup Required

1. Create `tmg-website-template` repository:
   ```bash
   gh repo create the-marketing-guys/tmg-website-template --public
   ```

2. Install GitHub CLI if missing:
   ```bash
   brew install gh
   ```
