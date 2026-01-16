# TMG Website Template

A modern, full-stack website template built with Next.js 15, Payload CMS 3.x, and Tailwind CSS. Designed for rapid deployment of professional business websites.

## Features

- **Next.js 15** with App Router and React Server Components
- **Payload CMS 3.x** embedded admin panel at `/admin`
- **Tailwind CSS** with CSS variable-based theming
- **Shadcn UI** components (Button, Card, Input, etc.)
- **Dark Mode** support with system preference detection
- **Contact Form** with Zod validation and email notifications
- **Blog System** with Lexical rich text editor
- **SEO Optimized** with meta tags, Open Graph, and sitemap support
- **TypeScript** throughout with strict mode enabled
- **Responsive Design** mobile-first approach

## Quick Start

### Prerequisites

- Node.js 18.17+
- npm or pnpm

### Installation

```bash
# Clone the template
git clone https://github.com/the-marketing-guys/tmg-website-template.git my-website
cd my-website

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### CMS Admin

Access the Payload admin panel at [http://localhost:3000/admin](http://localhost:3000/admin).

On first run, you'll be prompted to create an admin user.

## Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (payload)/          # Payload CMS routes
│   │   │   └── admin/          # Admin panel
│   │   ├── api/                # API routes
│   │   ├── blog/               # Blog pages
│   │   ├── contact/            # Contact page
│   │   └── page.tsx            # Homepage
│   ├── components/
│   │   ├── blog/               # Blog components
│   │   ├── forms/              # Form components
│   │   ├── layout/             # Layout components (Header, Footer)
│   │   ├── sections/           # Page sections (Hero, CTA, Features)
│   │   └── ui/                 # Shadcn UI components
│   ├── config/
│   │   ├── navigation.ts       # Navigation items
│   │   ├── site.ts             # Site metadata
│   │   └── theme.ts            # Theme configuration
│   └── lib/
│       ├── email.ts            # Email sending (Resend)
│       ├── seo.ts              # SEO helpers
│       ├── utils.ts            # Utility functions
│       └── validations.ts      # Zod schemas
├── payload.config.ts           # Payload CMS configuration
├── public/                     # Static assets
└── tests/                      # Test files
```

## Configuration

### Site Metadata

Edit `src/config/site.ts` to customize your site's name, description, and URLs:

```typescript
export const siteConfig = {
  name: 'Your Site Name',
  description: 'Your site description',
  url: 'https://your-domain.com',
  // ...
}
```

### Navigation

Edit `src/config/navigation.ts` to customize menu items:

```typescript
export const mainNavItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contact', href: '/contact' },
]
```

### Theme Customization

Edit `src/config/theme.ts` to customize colors and typography:

```typescript
export const themeConfig = {
  colors: {
    primary: {
      light: '221.2 83.2% 53.3%', // HSL format
      dark: '217.2 91.2% 59.8%',
    },
    // ...
  },
  typography: {
    fontFamily: {
      sans: 'Inter, system-ui, sans-serif',
    },
  },
}
```

Colors use HSL format for Tailwind CSS compatibility. The format is `"hue saturation% lightness%"`.

### Environment Variables

Create a `.env.local` file with:

```env
# Payload CMS
PAYLOAD_SECRET=your-secret-key-min-32-chars
DATABASE_URI=file:./payload.db

# Email (Resend)
RESEND_API_KEY=re_xxxxx
CONTACT_EMAIL=your@email.com
FROM_EMAIL=noreply@your-domain.com

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## CMS Collections

The template includes pre-configured Payload CMS collections:

### Users
Admin users with email authentication and roles (admin/editor).

### Media
File uploads for images and PDFs with automatic optimization.

### Pages
Static pages with rich text content and SEO fields.

### Blog Posts
Blog articles with:
- Title, slug, excerpt
- Lexical rich text content
- Featured image
- Author relationship
- Categories
- Draft/Published status

## Development

### Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
npm test           # Run unit tests
npm run test:e2e   # Run E2E tests
```

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Update navigation in `src/config/navigation.ts`

### Adding New Components

1. Create component in appropriate `src/components/` folder
2. Follow existing patterns for props and styling
3. Use Tailwind CSS classes with theme variables

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

### Other Platforms

The template works on any platform supporting Node.js 18+:
- Netlify
- Railway
- DigitalOcean
- AWS/GCP/Azure

Note: Payload CMS requires persistent file storage for SQLite. For serverless platforms, consider using a cloud database.

## Customization

### Adding Shadcn Components

```bash
npx shadcn@latest add [component-name]
```

### Changing Fonts

1. Import font in `src/app/layout.tsx`:
```typescript
import { Roboto } from 'next/font/google'
const roboto = Roboto({ subsets: ['latin'], variable: '--font-sans' })
```

2. Update `tailwind.config.ts` if needed

### Adding New CMS Collections

1. Add collection to `payload.config.ts`
2. Create corresponding frontend pages
3. Run `npm run build` to generate types

## Support

For issues and feature requests, visit:
https://github.com/the-marketing-guys/tmg-website-template/issues

## License

MIT License - feel free to use this template for any project.

---

Built with ❤️ by [The Marketing Guys](https://github.com/the-marketing-guys)
