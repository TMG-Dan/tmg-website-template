# /tmg-payload-setup - CMS Configuration

Configure Payload CMS with required content types.

## Prerequisites

- Project initialized via `/tmg-setup`
- Site structure defined via `/tmg-sitemap`

## Workflow

1. Prompt for:
   - Required post types (blogs, area guides, testimonials, team, FAQs)
   - Custom fields needed for each post type
   - Admin user email for client access
2. Generate Payload collection schemas
3. Configure admin dashboard at `/admin` route
4. Set up form submission storage
5. Import scraped content if available

## Output

- `payload/collections/` - collection schemas
- Admin dashboard accessible at `/admin`
- Form submissions collection configured
- Initial admin user created

## Standard Collections

| Collection | Fields |
|------------|--------|
| Blog Posts | Title, Slug, Featured Image, Content, Excerpt, Author, Published Date, Categories |
| Area Guides | Title, Slug, Location, Featured Image, Content, Map Embed |
| Testimonials | Client Name, Company, Quote, Rating, Photo, Date |
| Team Members | Name, Role, Photo, Bio, Email, LinkedIn |
| Form Submissions | Form Type, Name, Email, Phone, Message, Submitted Date, Status |

## Next Steps

Suggest running `/tmg-developer` for custom features or `/tmg-deploy` to ship
