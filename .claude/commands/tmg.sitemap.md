# /tmg-sitemap - Site Structure Definition

Define the site structure and navigation hierarchy.

## Prerequisites

- Project initialized via `/tmg-setup`
- Optional: Content scraped via `/tmg-scrape`

## Workflow

1. Read `tmg-config.json` for industry context
2. Suggest pages based on industry type
3. Prompt for:
   - Required pages (confirm/modify suggestions)
   - Navigation structure (main menu items)
   - Footer links
4. Generate site structure

## Output

- `src/config/sitemap.json` - page structure definition
- Route files created for each page in `src/app/`
- Navigation configuration updated

## Page Templates Available

- Home
- About
- Services (with sub-pages)
- Contact
- Blog (if CMS enabled)
- Area Guides (for location-based businesses)
- Team
- Testimonials
- FAQ

## Next Steps

Suggest running `/tmg-designer` to configure visual design
