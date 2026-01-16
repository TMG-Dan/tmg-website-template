# Quickstart: TMG Website Template

Get the base template running locally in under 5 minutes.

## Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager
- Git

## Required Accounts

Create accounts on these services before starting:

| Service | URL | Purpose | Free Tier |
|---------|-----|---------|-----------|
| **GitHub** | https://github.com | Code hosting | Unlimited |
| **Vercel** | https://vercel.com | Website hosting | Hobby plan |
| **Turso** | https://turso.tech | Database | 500 DBs, 9GB |
| **Resend** | https://resend.com | Email delivery | 3,000/month |

### Getting Your API Keys

1. **Turso Database**:
   - Go to https://turso.tech and sign up (use GitHub)
   - Click **Create Database** → name it for your project
   - Go to the database → **Connect** tab
   - Copy the `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN`

2. **Resend API Key**:
   - Go to https://resend.com and sign up
   - Go to **API Keys** → **Create API Key**
   - Copy the key (starts with `re_`)

## Setup Steps

### 1. Clone the Template

Clone with your client's project name (replace `my-client-site` with actual name):

```bash
git clone https://github.com/the-marketing-guys/tmg-website-template.git my-client-site
cd my-client-site
```

### 2. Disconnect from Template Repository

Remove the link to the template repo so you can create your own:

```bash
git remote remove origin
git branch -M main
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Set Up Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values:

```env
# Payload CMS (generate a random 32+ char string)
PAYLOAD_SECRET=your-super-secret-key-at-least-32-characters

# Turso Database (get from turso.tech dashboard)
TURSO_DATABASE_URL=libsql://your-database.turso.io
TURSO_AUTH_TOKEN=your-auth-token

# Resend (get from resend.com dashboard)
RESEND_API_KEY=re_your_api_key
CONTACT_EMAIL=notifications@yourdomain.com

# Site URL (for SEO and sitemap)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 5. Start the Development Server

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
| `npm run db:push` | Push schema changes to Turso |

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

### Database connection fails
- Verify `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN` are correct
- Check Turso dashboard for database status

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
