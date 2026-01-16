# Research: Base Website Template

**Feature**: 000-base-template
**Date**: 2026-01-16
**Status**: Complete

## Executive Summary

Research confirms all technology choices are viable and well-suited for the requirements. Key decisions:
- Payload CMS 3.x embeds natively in Next.js 14 App Router (no separate backend)
- Turso provides edge SQLite database that integrates with Payload CMS
- Shadcn UI uses CSS variables for effortless theme customization
- All technologies have robust free tiers suitable for client sites

---

## 1. Payload CMS + Next.js Integration

### Decision
Use Payload CMS 3.x embedded directly in Next.js App Router application.

### Rationale
- Payload 3.x has **native Next.js support** - admin panel served from same app
- No separate backend deployment required
- Built-in JWT authentication with HTTP-only cookies
- TypeScript-first with auto-generated types
- Local API for server components (no HTTP round-trips)

### Implementation Pattern

**File Structure:**
```
payload/
├── payload.config.ts      # Main configuration
└── collections/
    ├── Users.ts           # Auth-enabled collection
    ├── Pages.ts           # Static pages
    ├── BlogPosts.ts       # Blog content
    └── Media.ts           # Image uploads
```

**Admin Route Setup (app/(payload)/admin/[[...segments]]/page.tsx):**
```typescript
// Payload automatically handles this route via withPayload plugin
import { AdminPage } from '@payloadcms/next/admin'
export default AdminPage
```

**Local API Usage (Server Components):**
```typescript
import { getPayload } from 'payload'
import config from '@/payload.config'

const payload = await getPayload({ config })
const { docs } = await payload.find({ collection: 'posts' })
```

### Alternatives Considered
| Option | Rejected Because |
|--------|-----------------|
| Sanity | Requires separate hosted backend, complexity |
| Strapi | Needs dedicated server, not embedded |
| Contentful | SaaS pricing, vendor lock-in |

---

## 2. Turso Database Integration

### Decision
Use Turso as the edge SQLite database for Payload CMS.

### Rationale
- **Edge-native** - SQLite at the edge with global replication
- Generous free tier (500 databases, 9GB storage, 1B reads/month)
- Native compatibility with Payload CMS SQLite adapter
- Simple connection via libsql client
- Single database for all data (content AND form submissions)

### Implementation Pattern

**Payload Configuration (payload.config.ts):**
```typescript
import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'

export default buildConfig({
  db: sqliteAdapter({
    client: {
      url: process.env.TURSO_DATABASE_URL!,
      authToken: process.env.TURSO_AUTH_TOKEN,
    },
  }),
  // ... rest of config
})
```

**Form Submission Collection (payload/collections/FormSubmissions.ts):**
```typescript
import { CollectionConfig } from 'payload'

export const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text' },
    { name: 'message', type: 'textarea', required: true },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Processed', value: 'processed' },
      ],
    },
  ],
}
```

**Server Action (Next.js):**
```typescript
'use server'
import { getPayload } from 'payload'
import config from '@/payload.config'

export async function submitContactForm(formData: FormData) {
  const payload = await getPayload({ config })
  return await payload.create({
    collection: 'form-submissions',
    data: {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string || undefined,
      message: formData.get("message") as string,
      status: 'pending',
    },
  })
}
```

### Alternatives Considered
| Option | Rejected Because |
|--------|-----------------|
| Convex | Not compatible with Payload CMS |
| Supabase | More complex setup, Postgres overhead |
| PlanetScale | MySQL-based, additional complexity |
| Local SQLite | No cloud sync, not suitable for production |

---

## 3. Shadcn UI Theming

### Decision
Use CSS variables with centralized theme configuration file.

### Rationale
- CSS variables propagate automatically to all components
- Single file edit changes entire site appearance
- OKLCH color space provides perceptual uniformity
- No component modifications needed for theme changes
- Non-technical users can modify simple config values

### Implementation Pattern

**Theme Configuration (src/config/theme.ts):**
```typescript
export const themeConfig = {
  colors: {
    light: {
      primary: "oklch(0.546 0.245 262.881)",      // Blue
      "primary-foreground": "oklch(0.985 0 0)",   // White
      secondary: "oklch(0.97 0 0)",
      accent: "oklch(0.97 0 0)",
      background: "oklch(1 0 0)",
      foreground: "oklch(0.145 0 0)",
    },
    dark: {
      primary: "oklch(0.707 0.165 254.624)",
      "primary-foreground": "oklch(0.205 0 0)",
      // ... dark mode overrides
    }
  },
  borderRadius: "0.5rem",
  fontFamily: {
    sans: "Inter, system-ui, sans-serif",
    heading: "Inter, system-ui, sans-serif",
  }
}
```

**CSS Variables (globals.css):**
```css
:root {
  --radius: 0.5rem;
  --primary: oklch(0.546 0.245 262.881);
  --primary-foreground: oklch(0.985 0 0);
  /* ... generated from themeConfig */
}

.dark {
  --primary: oklch(0.707 0.165 254.624);
  /* ... dark mode overrides */
}
```

**Usage in Components:**
```typescript
// Shadcn components automatically use CSS variables
<Button className="bg-primary text-primary-foreground">
  Click me
</Button>
```

### Theme Change Propagation
1. Partner edits `themeConfig.colors.light.primary`
2. Build process generates new CSS variables
3. All components using `bg-primary` automatically update
4. No component file changes required

### Alternatives Considered
| Option | Rejected Because |
|--------|-----------------|
| Tailwind inline colors | Requires changing every component |
| styled-components | Additional dependency, runtime overhead |
| CSS Modules per component | No centralized theming |

---

## 4. Email Integration (Resend)

### Decision
Use Resend for transactional email delivery.

### Rationale
- Simple API, one function call to send
- Generous free tier (3,000 emails/month)
- Built for developers, minimal setup
- React Email for templates if needed

### Implementation Pattern

**Email Service (src/lib/email.ts):**
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactNotification(data: {
  name: string
  email: string
  message: string
}) {
  await resend.emails.send({
    from: 'noreply@yourdomain.com',
    to: process.env.CONTACT_EMAIL!,
    subject: `New contact form submission from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    `
  })
}
```

---

## 5. Testing Strategy

### Decision
Vitest + Playwright + Testing Library

### Rationale
- Vitest: Fast, Vite-native, Jest-compatible API
- Playwright: Cross-browser E2E testing
- Testing Library: Component testing without implementation details

### Test Structure
```
tests/
├── unit/
│   ├── lib/validations.test.ts
│   └── lib/email.test.ts
├── integration/
│   └── api/contact.test.ts
└── e2e/
    ├── homepage.spec.ts
    ├── contact-form.spec.ts
    └── admin-login.spec.ts
```

---

## 6. Environment Variables

### Required Variables
```env
# Payload CMS
PAYLOAD_SECRET=your-random-secret-min-32-chars

# Turso Database
TURSO_DATABASE_URL=libsql://your-database.turso.io
TURSO_AUTH_TOKEN=your-auth-token

# Resend (Email)
RESEND_API_KEY=re_your_api_key
CONTACT_EMAIL=client@business.com

# Site
NEXT_PUBLIC_SITE_URL=https://clientsite.com
```

### Template Defaults (.env.example)
- All values use placeholder text
- Partners must configure before deployment
- Local development can use local SQLite file for testing

---

## Research Findings Summary

| Topic | Finding | Confidence |
|-------|---------|------------|
| Payload + Next.js | Native integration, no separate backend | High |
| Turso + Payload | Edge SQLite works seamlessly with Payload CMS | High |
| Shadcn theming | CSS variables auto-propagate to all components | High |
| Resend email | Simple API, generous free tier | High |
| Testing stack | Vitest + Playwright is modern standard | High |

All technologies are production-ready and have been validated for the use case.
