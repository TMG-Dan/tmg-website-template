# /tmg-scrape - Content Extraction

Extract content from an existing client website for migration to the new site.

## Prerequisites

- Project initialized via `/tmg-setup`
- Client's existing website URL (from `tmg-config.json` or user input)

## Workflow

1. **Get Website URL**
   - Check `tmg-config.json` for `existingWebsite`
   - Or ask user for the URL

2. **Discover Pages**
   Use browser tools to:
   - Navigate to the homepage
   - Extract all internal links from navigation
   - Build a list of pages to scrape

3. **Scrape Each Page**
   For each page, use browser tools to:
   - Navigate to the page
   - Use `get_page_text` to extract main content
   - Use `read_page` to get page structure
   - Extract:
     - Page title (from `<title>` or `<h1>`)
     - Meta description
     - Main headings (h1, h2, h3)
     - Body text content
     - Image URLs and alt text
     - Contact information (phone, email, address)

4. **Save Extracted Content**
   Create `content/scraped/` directory with:

   ```
   content/
   └── scraped/
       ├── pages/
       │   ├── home.md
       │   ├── about.md
       │   ├── services.md
       │   └── contact.md
       ├── assets.json      # Image URLs to download
       ├── meta.json        # SEO metadata
       └── summary.json     # Overview of scraped content
   ```

   **Page markdown format:**
   ```markdown
   ---
   title: About Us
   url: https://example.com/about
   meta_description: Learn about our company...
   scraped_at: 2024-01-16
   ---

   # About Us

   [Main content extracted from page...]

   ## Our Team

   [Team section content...]
   ```

5. **Extract Business Information**
   Look for and save:
   - Business name
   - Phone number(s)
   - Email address(es)
   - Physical address
   - Social media links
   - Hours of operation

   Save to `content/scraped/business-info.json`:
   ```json
   {
     "name": "Acme Plumbing",
     "phone": "(555) 123-4567",
     "email": "info@acmeplumbing.com",
     "address": "123 Main St, City, State 12345",
     "social": {
       "facebook": "https://facebook.com/acmeplumbing",
       "instagram": "https://instagram.com/acmeplumbing"
     }
   }
   ```

6. **Update tmg-config.json**
   - Set `hasScrapedContent: true`
   - Add `scrapedPages` count

## Output

- `content/scraped/pages/*.md` - Page content in markdown
- `content/scraped/business-info.json` - Contact/business details
- `content/scraped/meta.json` - SEO metadata from all pages
- `content/scraped/assets.json` - List of images to reference
- `content/scraped/summary.json` - Overview of what was scraped

## Browser Tools Used

- `navigate` - Go to each page
- `get_page_text` - Extract readable text content
- `read_page` - Get page structure and elements
- `computer` (screenshot) - Capture page layouts for reference

## Example Session

```
User: /tmg-scrape

Claude: I'll extract content from the client's existing website.

Found URL in config: https://acmeplumbing.com

Discovering pages...
Found 8 pages:
- Home
- Services
- Residential Plumbing
- Commercial Plumbing
- About Us
- Our Team
- Contact
- Service Areas

Scraping content...
✓ Home - 450 words, 3 images
✓ Services - 320 words, 2 images
✓ Residential Plumbing - 580 words, 4 images
✓ Commercial Plumbing - 420 words, 3 images
✓ About Us - 380 words, 2 images
✓ Our Team - 290 words, 5 images (team photos)
✓ Contact - 120 words, 1 image
✓ Service Areas - 250 words, 1 image

Extracted business info:
- Phone: (555) 123-4567
- Email: info@acmeplumbing.com
- Address: 123 Main St, Anytown, ST 12345

Content saved to content/scraped/

Run /tmg-sitemap next to define the new site structure.
```

## Notes

- Always respect robots.txt
- Don't scrape password-protected pages
- Images are referenced by URL, not downloaded (to avoid copyright issues)
- Content may need editing - this is a starting point

## Next Steps

Suggest running `/tmg-sitemap` to define site structure using scraped content as reference
