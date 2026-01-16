# /tmg-content - Content Generation

Generate and populate page content for the website.

## Prerequisites

- Project initialized via `/tmg-setup`
- Site structure defined via `/tmg-sitemap`
- Design configured via `/tmg-designer`
- Optional: Scraped content from `/tmg-scrape`

## Workflow

1. **Load Context**
   - Read `tmg-config.json` for client/industry info
   - Read `src/config/sitemap.json` for page list
   - Check `content/scraped/` for existing content
   - Read `src/config/site.ts` for business details

2. **For Each Page, Generate Content**

   Using scraped content as reference (if available) or generating fresh:

   **Home Page:**
   - Hero headline and subheadline
   - Value proposition bullets
   - Featured services/products
   - Social proof (testimonials snippet)
   - Call-to-action

   **About Page:**
   - Company story/history
   - Mission and values
   - Team introduction
   - Why choose us

   **Services Page:**
   - Service overview
   - Individual service descriptions
   - Benefits and features
   - Pricing indicators (if applicable)

   **Contact Page:**
   - Contact form intro
   - Business hours
   - Location details
   - Map embed placeholder

3. **Create Section Components**

   For each page, populate the appropriate section components:

   ```tsx
   // Example: src/app/(frontend)/page.tsx (Home)
   import { Hero } from '@/components/sections/Hero'
   import { Features } from '@/components/sections/Features'
   import { CTA } from '@/components/sections/CTA'

   export default function HomePage() {
     return (
       <>
         <Hero
           headline="Professional Plumbing Services"
           subheadline="Trusted by homeowners across the region for 25+ years"
           ctaText="Get a Free Quote"
           ctaHref="/contact"
         />
         <Features
           title="Our Services"
           features={[
             { title: 'Emergency Repairs', description: '...' },
             { title: 'Installations', description: '...' },
             // ...
           ]}
         />
         <CTA
           title="Ready to Get Started?"
           description="Contact us today for a free consultation"
           buttonText="Contact Us"
           buttonHref="/contact"
         />
       </>
     )
   }
   ```

4. **Update Site Configuration**

   Update `src/config/site.ts` with generated content:
   ```typescript
   export const siteConfig = {
     name: 'Acme Plumbing',
     description: 'Professional plumbing services for residential and commercial properties.',
     tagline: 'Your trusted plumbing experts since 1998',
     // ...
   }
   ```

5. **Generate SEO Metadata**

   For each page, add appropriate metadata:
   ```tsx
   export const metadata: Metadata = {
     title: 'Professional Plumbing Services | Acme Plumbing',
     description: 'Trusted plumbing services for homes and businesses. Emergency repairs, installations, and maintenance. Call (555) 123-4567.',
   }
   ```

6. **Update tmg-config.json**
   Set status to "content-complete"

## Content Guidelines

- **Tone:** Match client's industry (professional for legal, friendly for retail, etc.)
- **Length:** Concise but informative - web visitors scan, not read
- **SEO:** Include relevant keywords naturally
- **CTAs:** Every page should guide users to take action
- **Authenticity:** Use scraped content as base, enhance don't fabricate

## Output

- Updated page files with content populated
- Updated `src/config/site.ts`
- Section components with real content
- SEO metadata for all pages

## Example Session

```
User: /tmg-content

Claude: I'll generate content for Acme Plumbing's website.

Found scraped content from their existing site. I'll use this as a base and enhance it.

Generating content for 6 pages...

Home Page:
- Headline: "Professional Plumbing You Can Trust"
- Subheadline: "Serving [City] homeowners and businesses since 1998"
- 4 featured services
- 2 testimonial snippets

About Page:
- Company story (expanded from scraped content)
- Core values section
- Team overview

[continues for each page...]

✓ Generated content for all 6 pages
✓ Updated site configuration
✓ Added SEO metadata

Review the content at http://localhost:3000 and let me know if you'd like any changes.

Run /tmg-payload-setup next to configure the CMS.
```

## Next Steps

Suggest running `/tmg-payload-setup` to configure CMS collections, or `/tmg-deploy` if ready to launch
