# /tmg-setup - Project Initialization

Clone the TMG website template and initialize a new client project.

## Workflow

1. Clone `the-marketing-guys/tmg-website-template` to target directory
2. Prompt for project details:
   - Project name / folder name
   - Client business name
   - Industry / business type
   - Does client have existing website? (Yes/No)
3. Install dependencies (`npm install`)
4. Update `package.json` with project name
5. Create `tmg-config.json` with client details
6. Initialize git repository

## Output

- Ready-to-develop Next.js project
- Configuration file at `tmg-config.json`
- Dependencies installed

## Next Steps

Suggest running:
- `/tmg-scrape` if client has existing website
- `/tmg-sitemap` to define site structure
