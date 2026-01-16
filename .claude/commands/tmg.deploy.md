# /tmg-deploy - Deployment to Production

Deploy the completed website to GitHub and Vercel.

## Prerequisites

- Project fully configured and tested locally (`npm run dev` works)
- GitHub CLI authenticated (`gh auth login`)
- Vercel CLI installed (`npm i -g vercel`)
- All content populated
- CMS configured

## Workflow

1. **Pre-Deployment Checks**
   - Run `npm run build` to verify production build
   - Check for any TypeScript or ESLint errors
   - Verify all environment variables are documented

2. **Gather Deployment Info**
   Ask user for:
   - Repository name (e.g., `acme-plumbing-website`)
   - GitHub organization (default: `TMG-Dan`)
   - Confirm ready to deploy (Yes/No)

3. **Create GitHub Repository**
   ```bash
   gh repo create {org}/{repo-name} --private --source=. --push
   ```

4. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

   Or link to existing Vercel project:
   ```bash
   vercel link
   vercel --prod
   ```

5. **Configure Environment Variables**
   In Vercel dashboard or CLI, set:
   ```
   PAYLOAD_SECRET=<generate-random-string>
   DATABASE_URI=<mongodb-connection-string>
   NEXT_PUBLIC_SITE_URL=https://{project}.vercel.app
   ```

6. **Verify Deployment**
   - Check production URL loads correctly
   - Verify `/admin` panel works
   - Test contact form sends emails
   - Check all pages render properly

7. **Update tmg-config.json**
   ```json
   {
     "status": "deployed",
     "deployedAt": "2024-01-16",
     "githubRepo": "https://github.com/TMG-Dan/acme-plumbing-website",
     "vercelUrl": "https://acme-plumbing.vercel.app",
     "customDomain": null
   }
   ```

## Environment Variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `PAYLOAD_SECRET` | Yes | CMS encryption key (generate with `openssl rand -base64 32`) |
| `DATABASE_URI` | Yes | MongoDB connection string |
| `NEXT_PUBLIC_SITE_URL` | Yes | Production URL for SEO/sitemap |
| `RESEND_API_KEY` | Optional | Email service for contact form |
| `BLOB_READ_WRITE_TOKEN` | Optional | Vercel Blob for media uploads |

## Database Setup

### Option 1: MongoDB Atlas (Recommended)
1. Create free cluster at mongodb.com/atlas
2. Create database user
3. Get connection string
4. Add to Vercel environment variables

### Option 2: Vercel Postgres
1. Add Postgres from Vercel dashboard
2. Environment variables auto-configured

## Output

- GitHub repository created (private)
- Vercel project deployed
- Production URL available
- Environment variables configured

## Post-Deployment Checklist

- [ ] Share preview URL with client for review
- [ ] Create admin account at `/admin`
- [ ] Test contact form submission
- [ ] Verify all images load correctly
- [ ] Check mobile responsiveness
- [ ] Submit sitemap to Google Search Console

## Custom Domain Setup

After client approves:
1. Go to Vercel project → Settings → Domains
2. Add custom domain (e.g., `acmeplumbing.com`)
3. Configure DNS records:
   - A record: `76.76.21.21`
   - CNAME record: `cname.vercel-dns.com`
4. Wait for SSL certificate (automatic)
5. Update `NEXT_PUBLIC_SITE_URL` in Vercel

## Example Session

```
User: /tmg-deploy

Claude: I'll deploy Acme Plumbing's website to production.

Running pre-deployment checks...
✓ Build successful
✓ No TypeScript errors
✓ No ESLint warnings

What should I name the GitHub repository?
> acme-plumbing-website

Creating GitHub repository...
✓ Created TMG-Dan/acme-plumbing-website (private)
✓ Pushed code to repository

Deploying to Vercel...
✓ Project linked to Vercel
✓ Environment variables configured
✓ Deployment triggered

Deployment complete!

Preview URL: https://acme-plumbing-website.vercel.app
GitHub: https://github.com/TMG-Dan/acme-plumbing-website

Next steps:
1. Share preview URL with client
2. Create admin account at /admin
3. After approval, connect custom domain in Vercel dashboard
```

## Continuous Deployment

After initial deployment:
- Every `git push` to `main` triggers auto-deploy
- Pull requests get preview deployments
- Rollback available in Vercel dashboard

## Troubleshooting

### Build fails on Vercel
- Check environment variables are set
- Review build logs for missing dependencies
- Ensure `DATABASE_URI` is accessible from Vercel

### Admin panel not loading
- Verify `PAYLOAD_SECRET` is set
- Check database connection
- Clear browser cache

### Images not loading
- Check Vercel Blob is configured (if using)
- Verify image paths are correct
- Check public folder uploaded correctly
