# TMG Website Template

A modern website template with built-in slash commands for rapid site creation using Claude Code.

> **Getting Started?** See the [Setup Guide](docs/TESTING_GUIDE.md)

## Quick Start

1. Clone this template with your client name
2. Run `npm install`
3. Create `.env.local` from `.env.example`
4. Open in VS Code with Claude Code extension
5. Click Claude icon, type `/tmg-setup`

## Slash Commands

| Command | What it does |
|---------|--------------|
| `/tmg-setup` | Configure project for client |
| `/tmg-sitemap` | Define pages and navigation |
| `/tmg-designer` | Set colors and styling |
| `/tmg-content` | Generate page content |
| `/tmg-motion` | Add scroll animations |
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
- **Turso** edge database
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
PAYLOAD_SECRET=your-secret-key-min-32-chars
TURSO_DATABASE_URL=libsql://your-db.turso.io
TURSO_AUTH_TOKEN=your-turso-token
RESEND_API_KEY=re_your_api_key
CONTACT_EMAIL=notifications@yourdomain.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Required Accounts

| Service | URL | Free Tier |
|---------|-----|-----------|
| GitHub | github.com | Unlimited |
| Vercel | vercel.com | Hobby plan |
| Turso | turso.tech | 500 DBs, 9GB |
| Resend | resend.com | 3,000/month |

## Deployment

Use `/tmg-deploy` command, or manually:

1. Push to GitHub
2. Import on Vercel
3. Add environment variables
4. Deploy

## Support

https://github.com/TMG-Dan/tmg-website-template/issues
