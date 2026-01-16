# /tmg-sitemap - Site Structure Definition

Define the site structure, pages, and navigation hierarchy.

## Prerequisites

- Project initialized via `/tmg-setup`
- Optional: Content scraped via `/tmg-scrape`

## Workflow

1. **Read Project Context**
   - Load `tmg-config.json` for client/industry info
   - Check if scraped content exists in `content/scraped/`

2. **Suggest Pages Based on Industry**

   | Industry | Suggested Pages |
   |----------|----------------|
   | Services (plumbing, HVAC, etc.) | Home, Services, Service Areas, About, Contact, Blog |
   | Restaurant/Cafe | Home, Menu, About, Gallery, Contact, Reservations |
   | Professional (lawyer, accountant) | Home, Services, Team, Case Studies, About, Contact |
   | Retail/E-commerce | Home, Products, About, Contact, Blog |
   | Creative (agency, portfolio) | Home, Work/Portfolio, Services, About, Contact |
   | Healthcare | Home, Services, Team, Patient Info, About, Contact |

3. **Confirm Structure with User**
   - Present suggested pages
   - Ask for additions/removals
   - Define navigation hierarchy (what goes in main menu vs footer)

4. **Generate Pages**
   For each page, create in `src/app/(frontend)/`:
   ```
   src/app/(frontend)/{page-slug}/page.tsx
   ```

   Use the template structure:
   ```tsx
   import type { Metadata } from 'next'

   export const metadata: Metadata = {
     title: '{Page Title}',
     description: '{Page description}',
   }

   export default function {PageName}Page() {
     return (
       <>
         {/* Hero Section */}
         <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
           <div className="container">
             <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
               {Page Title}
             </h1>
           </div>
         </section>

         {/* Content sections to be filled by /tmg-content */}
       </>
     )
   }
   ```

5. **Update Navigation**
   Edit `src/config/navigation.ts`:
   ```typescript
   export const mainNavItems: NavItem[] = [
     { title: 'Home', href: '/' },
     { title: 'Services', href: '/services' },
     // ... generated pages
   ]

   export const footerNavItems: NavItem[] = [
     { title: 'Privacy Policy', href: '/privacy' },
     { title: 'Terms of Service', href: '/terms' },
   ]
   ```

6. **Update Sitemap Config**
   Create `src/config/sitemap.json`:
   ```json
   {
     "pages": [
       { "title": "Home", "slug": "/", "inNav": true },
       { "title": "Services", "slug": "/services", "inNav": true },
       { "title": "About", "slug": "/about", "inNav": true },
       { "title": "Contact", "slug": "/contact", "inNav": true }
     ],
     "generatedAt": "2024-01-16"
   }
   ```

7. **Update tmg-config.json**
   Set status to "sitemap-complete"

## Output

- Page files created in `src/app/(frontend)/`
- `src/config/navigation.ts` updated
- `src/config/sitemap.json` created
- `tmg-config.json` updated

## Page Templates Available

- **Home** - Hero, Features, CTA, Testimonials
- **About** - Story, Team, Values, Timeline
- **Services** - Service list, individual service pages
- **Contact** - Contact form, map, details
- **Blog** - Listing with pagination (uses Payload CMS)
- **Gallery/Portfolio** - Image grid, lightbox
- **Team** - Team member cards
- **FAQ** - Accordion-style questions
- **Testimonials** - Client reviews
- **Service Areas** - Location-based landing pages

## Example Session

```
User: /tmg-sitemap

Claude: I'll help define the site structure for Acme Plumbing.

Based on their industry (plumbing services), I suggest:

Main Pages:
- Home
- Services (with sub-pages for each service)
- Service Areas
- About Us
- Contact
- Blog

Does this look right? Any pages to add or remove?

User: Add a testimonials page, remove blog for now

Claude: Updated structure:
✓ Home
✓ Services
✓ Service Areas
✓ About Us
✓ Testimonials
✓ Contact

Creating pages...
✓ Created 6 page files
✓ Updated navigation config
✓ Generated sitemap.json

Run /tmg-designer next to set the visual style.
```

## Next Steps

Suggest running `/tmg-designer` to configure visual design
