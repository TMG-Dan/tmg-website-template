# /tmg-setup - Project Initialization

Configure a cloned TMG website template for a new client project.

## Prerequisites

The user should have already:
1. Cloned the template: `git clone https://github.com/TMG-Dan/tmg-website-template.git client-name`
2. Removed the template remote: `git remote remove origin`
3. Installed dependencies: `npm install`
4. Created `.env.local` from `.env.example`

## Workflow

1. **Gather Project Details**
   Ask the user for:
   - Client/business name (e.g., "Acme Plumbing")
   - Client business type/industry
   - Does client have an existing website? (URL if yes)

2. **Configure Project**
   - Update `package.json` with project name
   - Update `src/config/site.ts` with client business name
   - Create `tmg-config.json` with project metadata:
     ```json
     {
       "projectName": "acme-plumbing",
       "clientName": "Acme Plumbing",
       "industry": "plumbing",
       "existingWebsite": "https://old-site.com",
       "createdAt": "2024-01-16",
       "status": "setup"
     }
     ```

3. **Verify Environment**
   Check that `.env.local` exists and has required values:
   - `PAYLOAD_SECRET` - CMS secret key
   - `TURSO_DATABASE_URL` - Turso database URL
   - `TURSO_AUTH_TOKEN` - Turso auth token
   - `RESEND_API_KEY` - Email service key
   - `CONTACT_EMAIL` - Where to send form submissions

4. **Initial Commit**
   ```bash
   git add -A
   git commit -m "Initial commit: {Client Name} website"
   ```

5. **Verify Setup**
   - Run `npm run dev` to confirm template starts
   - Open http://localhost:3000 to verify

## Output

- Configured Next.js project
- `tmg-config.json` with client details
- Git initialized with initial commit
- Dev server running for verification

## Files Modified

- `package.json` - project name
- `src/config/site.ts` - site name, description
- `tmg-config.json` - (new) project configuration

## Next Steps

Based on user responses, suggest:
- If client has existing website → `/tmg-scrape` to extract content
- Otherwise → `/tmg-sitemap` to define site structure

## Example Session

```
User: /tmg-setup

Claude: I'll help you configure this project for your client.

What's the client/business name?
> Acme Plumbing

What industry/business type?
> Plumbing and HVAC services

Does the client have an existing website?
> Yes, https://acmeplumbing.com

Configuring project...
✓ Updated package.json
✓ Updated site configuration
✓ Created tmg-config.json
✓ Verified .env.local exists
✓ Initial commit created

Project configured for Acme Plumbing!

Since they have an existing website, run /tmg-scrape next to extract their content.
```
