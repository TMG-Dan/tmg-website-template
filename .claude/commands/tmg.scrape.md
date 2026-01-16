# /tmg-scrape - Content Extraction

Extract content from an existing client website for migration.

## Prerequisites

- Project initialized via `/tmg-setup`
- Client's existing website URL

## Workflow

1. Prompt for:
   - Existing website URL
   - Pages to scrape (all / specific pages)
2. Crawl specified pages
3. Extract:
   - Text content and headings
   - Meta titles and descriptions
   - Images and assets
4. Store in `scraped-content/` directory

## Output

- `scraped-content/pages.json` - structured page content
- `scraped-content/assets/` - downloaded images
- `scraped-content/meta.json` - SEO metadata

## Next Steps

Suggest running `/tmg-sitemap` to define site structure
