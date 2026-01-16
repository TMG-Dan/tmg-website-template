# /tmg-deploy - Deployment to Production

Deploy the completed website to GitHub and Vercel.

## Prerequisites

- Project fully configured and tested locally
- GitHub CLI authenticated (`gh auth login`)
- Vercel CLI authenticated (`vercel login`)
- Environment variables ready:
  - `CONVEX_DEPLOY_KEY`
  - `RESEND_API_KEY`
  - `PAYLOAD_SECRET`

## Workflow

1. Prompt for:
   - GitHub repository name
   - Confirm deployment (Yes/No)
2. Create new GitHub repository
3. Push code to repository
4. Connect repository to Vercel
5. Configure environment variables
6. Trigger initial deployment

## Output

- GitHub repository created at `the-marketing-guys/{repo-name}`
- Vercel project connected with auto-deploy
- Preview URL available for client review
- Environment variables configured

## Post-Deployment

1. Share preview URL with client for review
2. After approval, connect custom domain manually
3. Future updates: `git push` triggers auto-deploy

## Environment Variables

| Variable | Purpose |
|----------|---------|
| CONVEX_DEPLOY_KEY | Convex database connection |
| RESEND_API_KEY | Email service authentication |
| PAYLOAD_SECRET | CMS encryption key |
| NEXT_PUBLIC_SITE_URL | Base URL for SEO and sitemap |

## Next Steps

- Connect custom domain in Vercel dashboard
- Configure DNS records
- Share `/admin` credentials with client
