# TMG Website Template

A modern website template with built-in slash commands for rapid site creation using Claude Code.

## Quick Start

1. Clone this template
2. Run `npm install`
3. Open in VS Code with Claude Code extension
4. Click Claude icon in sidebar
5. Type `/tmg-setup` and follow the prompts

See the full [Setup Guide](docs/SETUP_GUIDE.md) for detailed instructions.

## Slash Commands Included

| Command | What it does |
|---------|--------------|
| `/tmg-setup` | Configure project for client |
| `/tmg-sitemap` | Define pages and navigation |
| `/tmg-designer` | Set colors and styling |
| `/tmg-content` | Generate page content |
| `/tmg-payload-setup` | Configure CMS |
| `/tmg-deploy` | Publish to Vercel |

Optional:
| `/tmg-scrape` | Extract content from existing site |
| `/tmg-developer` | Add custom features |

## Tech Stack

- **Next.js 15** with App Router
- **React 19** + TypeScript
- **Tailwind CSS** + Shadcn UI
- **Payload CMS 3.x** at `/admin`
- **Framer Motion** for animations

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── (frontend)/     # Public pages
│   │   ├── (payload)/      # CMS admin
│   │   └── api/            # API routes
│   ├── components/
│   │   ├── layout/         # Header, Footer
│   │   ├── sections/       # Hero, CTA, Features
│   │   └── ui/             # Buttons, Cards, etc.
│   └── config/
│       ├── site.ts         # Site metadata
│       └── navigation.ts   # Menu items
├── .claude/commands/       # Slash commands
└── payload.config.ts       # CMS config
```

## Development

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Build for production
npm test         # Run tests
```

## CMS Admin

Access at http://localhost:3000/admin

First visit creates admin account.

## Environment Variables

Copy `.env.example` to `.env.local`:

```env
PAYLOAD_SECRET=your-secret-key
DATABASE_URI=file:./payload.db
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Deployment

Use `/tmg-deploy` command, or manually:

1. Push to GitHub
2. Import on Vercel
3. Add environment variables
4. Deploy

## Support

https://github.com/TMG-Dan/tmg-website-template/issues
