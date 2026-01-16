# /tmg-content - Content Generation

Generate and refine website copy and content.

## Prerequisites

- Project initialized via `/tmg-setup`
- Site structure defined via `/tmg-sitemap`
- Design configured via `/tmg-designer`

## Workflow

1. Read existing context:
   - `tmg-config.json` for client details
   - `scraped-content/` if available
   - `src/config/sitemap.json` for pages
2. Prompt for:
   - Target audience
   - Tone of voice (professional, friendly, authoritative)
   - Key selling points / USPs
   - Services or products to highlight
3. Generate content for each page
4. Create SEO metadata

## Output

- Page headlines and body copy populated
- Meta titles and descriptions for SEO
- Content integrated into page components
- `src/content/` directory with structured content files

## Content Types Generated

- Hero headlines and subheadlines
- Service descriptions
- About page narrative
- Call-to-action text
- Contact page copy
- Meta descriptions for all pages

## Next Steps

Suggest running `/tmg-payload-setup` to configure CMS
