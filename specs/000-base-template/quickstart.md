# Quickstart: TMG Website Template

Get the base template running locally in under 5 minutes.

## Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager
- Git

## Setup Steps

### 1. Clone the Template

```bash
git clone https://github.com/the-marketing-guys/tmg-website-template.git my-client-site
cd my-client-site
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values:

```env
# Payload CMS (generate a random 32+ char string)
PAYLOAD_SECRET=your-super-secret-key-at-least-32-characters

# Convex (get from convex.dev dashboard)
NEXT_PUBLIC_CONVEX_URL=https://your-project.convex.cloud

# Resend (get from resend.com dashboard)
RESEND_API_KEY=re_your_api_key
CONTACT_EMAIL=notifications@yourdomain.com

# Site URL (for SEO and sitemap)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Initialize Convex (First Time Only)

```bash
npx convex dev
```

This creates your Convex project and pushes the schema. Keep this terminal running during development for real-time sync.

### 5. Start the Development Server

In a new terminal:

```bash
npm run dev
```

### 6. Access the Site

- **Frontend**: http://localhost:3000
- **CMS Admin**: http://localhost:3000/admin

### 7. Create Admin User

On first visit to `/admin`, you'll be prompted to create your admin account:

1. Go to http://localhost:3000/admin
2. Click "Create First User"
3. Enter email, password, and name
4. You're now logged in and can manage content

## What's Included

### Pages
- `/` - Homepage with hero, features, CTA sections
- `/about` - About page
- `/contact` - Contact form
- `/blog` - Blog listing
- `/blog/[slug]` - Individual blog posts
- `/admin` - CMS admin dashboard

### Components
- `Header` - Navigation with responsive mobile menu
- `Footer` - Footer with links and contact info
- `Hero` - Customizable hero section
- `ContactForm` - Validated contact form with submission handling

### Features
- Responsive design (mobile-first)
- Dark mode support
- SEO meta tags
- XML sitemap generation
- Contact form with email notifications
- Blog with rich text editor
- Media library for images

## Customization

### Changing Colors

Edit the theme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: "oklch(0.546 0.245 262.881)", // Change this
        foreground: "oklch(0.985 0 0)",
      },
      // ... other colors
    }
  }
}
```

Or modify CSS variables directly in `src/app/globals.css`:

```css
:root {
  --primary: oklch(0.546 0.245 262.881);
  /* Change to your brand color */
}
```

### Adding Pages

1. Create a new file in `src/app/your-page/page.tsx`
2. Add the route to navigation in `src/config/navigation.ts`
3. Content is managed via Payload CMS

### Modifying Content Types

Edit Payload collections in `payload/collections/`:
- `Pages.ts` - Static pages
- `BlogPosts.ts` - Blog entries
- `Media.ts` - Images and files
- `Users.ts` - Admin users

## Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npx convex dev` | Start Convex dev sync |
| `npx convex deploy` | Deploy Convex to production |

## Deployment

See the full deployment guide in the `/tmg-deploy` command documentation.

Quick deploy to Vercel:

```bash
# Push to GitHub first
git add .
git commit -m "Initial setup"
git push origin main

# Deploy via Vercel CLI
vercel
```

## Troubleshooting

### Payload admin shows 404
- Make sure the dev server is running
- Check that `PAYLOAD_SECRET` is set in `.env.local`

### Convex mutations fail
- Ensure `npx convex dev` is running in another terminal
- Check `NEXT_PUBLIC_CONVEX_URL` is correct

### Emails not sending
- Verify `RESEND_API_KEY` is valid
- Check Resend dashboard for errors
- Ensure `CONTACT_EMAIL` is a verified domain email

### Styles not updating
- Clear `.next` cache: `rm -rf .next`
- Restart dev server

## Next Steps

1. **Customize design** with `/tmg-designer`
2. **Add content** through the CMS at `/admin`
3. **Configure email** in Resend dashboard
4. **Deploy** with `/tmg-deploy`
