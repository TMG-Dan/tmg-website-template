# /tmg-setup - Project Initialization

Clone the TMG website template and initialize a new client project.

## Template Repository

`https://github.com/TMG-Dan/tmg-website-template`

## Workflow

1. **Gather Project Details**
   Ask the user for:
   - Project/client name (e.g., "Acme Plumbing")
   - Target folder location (default: `~/Projects/{project-name-slug}`)
   - Client business type/industry
   - Does client have an existing website? (URL if yes)

2. **Clone Template**
   ```bash
   git clone https://github.com/TMG-Dan/tmg-website-template.git {project-folder}
   cd {project-folder}
   rm -rf .git
   git init
   ```

3. **Configure Project**
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

4. **Install Dependencies**
   ```bash
   npm install
   ```

5. **Initialize Git**
   ```bash
   git add -A
   git commit -m "Initial commit: {Client Name} website"
   ```

6. **Verify Setup**
   - Run `npm run dev` to confirm template starts
   - Open http://localhost:3000 to verify

## Output

- Cloned and configured Next.js project
- `tmg-config.json` with client details
- Dependencies installed
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

Claude: I'll help you set up a new client website.

What's the client/project name?
> Acme Plumbing

Where should I create the project?
> ~/Projects/acme-plumbing (default)

What industry/business type?
> Plumbing and HVAC services

Does the client have an existing website?
> Yes, https://acmeplumbing.com

Creating project...
✓ Cloned template
✓ Updated configuration
✓ Installed dependencies
✓ Git initialized

Project ready at ~/Projects/acme-plumbing

Since they have an existing website, run /tmg-scrape next to extract their content.
```
