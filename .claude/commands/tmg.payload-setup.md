# /tmg-payload-setup - CMS Configuration

Configure Payload CMS with content types needed for the client site.

## Prerequisites

- Project initialized via `/tmg-setup`
- Site structure defined via `/tmg-sitemap`

## Workflow

1. **Assess CMS Needs**
   - Read `tmg-config.json` and `src/config/sitemap.json`
   - Determine which collections the client needs:
     - Blog/News (most sites)
     - Testimonials
     - Team Members
     - Portfolio/Projects
     - Service Areas
     - FAQs
     - Custom collections

2. **Confirm Collections with User**
   Present suggested collections and ask for confirmation:
   ```
   Based on the site structure, I recommend:
   ✓ Blog Posts (for news/updates)
   ✓ Testimonials (for social proof)
   ✓ Team Members (for about page)

   Add or remove any?
   ```

3. **Update Payload Config**

   The base template already has these collections in `payload.config.ts`:
   - Users (authentication)
   - Media (uploads)
   - Pages (static pages)
   - Posts (blog)

   Add additional collections as needed:

   ```typescript
   // Example: Adding Testimonials collection
   {
     slug: 'testimonials',
     admin: {
       useAsTitle: 'clientName',
     },
     fields: [
       { name: 'clientName', type: 'text', required: true },
       { name: 'company', type: 'text' },
       { name: 'quote', type: 'textarea', required: true },
       { name: 'rating', type: 'number', min: 1, max: 5 },
       { name: 'photo', type: 'upload', relationTo: 'media' },
       { name: 'featured', type: 'checkbox', defaultValue: false },
     ],
   }
   ```

4. **Create Frontend Components**

   For each collection, create components to display the data:
   ```
   src/components/cms/
   ├── TestimonialCard.tsx
   ├── TestimonialGrid.tsx
   ├── TeamMemberCard.tsx
   └── FAQAccordion.tsx
   ```

5. **Create API Fetching Utilities**

   Add helpers in `src/lib/payload.ts`:
   ```typescript
   import { getPayload } from 'payload'
   import config from '@payload-config'

   export async function getTestimonials() {
     const payload = await getPayload({ config })
     return payload.find({
       collection: 'testimonials',
       where: { featured: { equals: true } },
       limit: 6,
     })
   }
   ```

6. **Seed Sample Data (Optional)**

   Create sample content so client can see how it looks:
   - 2-3 sample testimonials
   - 2-3 sample blog posts
   - Team member placeholders

7. **Update tmg-config.json**
   Set status to "cms-configured"

## Standard Collections

| Collection | Use Case | Key Fields |
|------------|----------|------------|
| Posts | Blog/News | title, slug, content, excerpt, featuredImage, author, publishedAt |
| Testimonials | Social proof | clientName, company, quote, rating, photo |
| Team | About page | name, role, bio, photo, email, linkedin |
| FAQs | Support | question, answer, category, order |
| Service Areas | Local SEO | name, slug, description, mapEmbed |
| Portfolio | Case studies | title, client, description, images, tags |

## Admin Access

The Payload admin is at `/admin`. First user to visit creates the admin account.

For client handoff:
1. Create their admin account
2. Share login credentials securely
3. Provide brief training on adding content

## Output

- Updated `payload.config.ts` with new collections
- Frontend components for displaying CMS content
- API utilities for fetching data
- Sample content seeded (optional)

## Example Session

```
User: /tmg-payload-setup

Claude: I'll configure the CMS for Acme Plumbing.

Based on the site, I recommend these collections:
✓ Blog Posts (already configured)
✓ Testimonials (for customer reviews)
✓ Team Members (for about page)
✓ Service Areas (for local SEO)

Add or remove any?

User: Looks good, add them

Claude: Configuring collections...
✓ Added Testimonials collection
✓ Added Team Members collection
✓ Added Service Areas collection
✓ Created frontend components
✓ Added API utilities

The admin panel is ready at /admin
Create an account to start adding content.

Run /tmg-deploy when ready to go live.
```

## Next Steps

Suggest running `/tmg-developer` for custom features or `/tmg-deploy` to ship
