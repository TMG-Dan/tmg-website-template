# Data Model: Base Website Template

**Feature**: 000-base-template
**Date**: 2026-01-16

## Overview

The base template uses a single data store:
- **Payload CMS + Turso** - All data (pages, blog posts, media, users, form submissions)

---

## Payload CMS Collections

### Users (Authentication)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | auto | Unique identifier |
| email | string | yes | Login email (unique) |
| password | string | yes | Hashed password |
| name | string | yes | Display name |
| role | enum | yes | 'admin' or 'editor' |
| createdAt | datetime | auto | Account creation date |
| updatedAt | datetime | auto | Last modification date |

**Access Control:**
- Admin: Full CRUD on all collections
- Editor: Create/edit content, no user management

---

### Pages

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | auto | Unique identifier |
| title | string | yes | Page title |
| slug | string | yes | URL path (unique) |
| metaDescription | string | no | SEO description |
| content | richText | yes | Page content (Lexical editor) |
| featuredImage | relation | no | Reference to Media |
| status | enum | yes | 'draft' or 'published' |
| publishedAt | datetime | no | Publication date |
| createdAt | datetime | auto | Creation timestamp |
| updatedAt | datetime | auto | Last update timestamp |

**Validation:**
- slug: lowercase, alphanumeric with hyphens, max 100 chars
- metaDescription: max 160 chars

---

### BlogPosts

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | auto | Unique identifier |
| title | string | yes | Post title |
| slug | string | yes | URL path (unique) |
| excerpt | string | no | Short summary (max 300 chars) |
| content | richText | yes | Post content (Lexical editor) |
| featuredImage | relation | no | Reference to Media |
| author | relation | yes | Reference to Users |
| categories | array | no | List of category strings |
| status | enum | yes | 'draft' or 'published' |
| publishedAt | datetime | no | Publication date |
| createdAt | datetime | auto | Creation timestamp |
| updatedAt | datetime | auto | Last update timestamp |

**Validation:**
- slug: lowercase, alphanumeric with hyphens, unique
- excerpt: max 300 chars
- categories: max 5 items

**Indexes:**
- by_slug (unique)
- by_status_date (status, publishedAt DESC)

---

### Media

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | auto | Unique identifier |
| filename | string | auto | Original filename |
| mimeType | string | auto | File MIME type |
| filesize | number | auto | File size in bytes |
| width | number | auto | Image width (images only) |
| height | number | auto | Image height (images only) |
| alt | string | no | Alt text for accessibility |
| url | string | auto | Public URL |
| createdAt | datetime | auto | Upload timestamp |

**Validation:**
- mimeType: image/jpeg, image/png, image/gif, image/webp, application/pdf
- filesize: max 10MB

---

### FormSubmissions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | auto | Unique identifier |
| name | string | yes | Submitter's name |
| email | email | yes | Submitter's email |
| phone | string | no | Phone number |
| message | textarea | yes | Message content |
| status | select | yes | 'pending' or 'processed' |
| createdAt | datetime | auto | Submission timestamp |
| updatedAt | datetime | auto | Last update timestamp |

**Validation:**
- email: valid email format
- message: min 10 chars, max 5000 chars
- phone: optional, E.164 format if provided

**Collection Definition:**
```typescript
import { CollectionConfig } from 'payload'

export const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'status', 'createdAt'],
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

---

## Entity Relationships

```
┌─────────────┐     ┌─────────────┐
│    Users    │────<│  BlogPosts  │
│  (author)   │     │             │
└─────────────┘     └──────┬──────┘
                           │
                           │ featuredImage
                           ▼
┌─────────────┐     ┌─────────────┐
│    Pages    │────>│    Media    │
│             │     │             │
└─────────────┘     └─────────────┘

┌─────────────────────────────────┐
│     FormSubmissions (Payload)   │
│  (standalone, no relationships) │
└─────────────────────────────────┘
```

---

## State Transitions

### Content Status (Pages, BlogPosts)

```
┌─────────┐  publish   ┌───────────┐
│  draft  │ ─────────> │ published │
└─────────┘            └───────────┘
     ▲                       │
     │      unpublish        │
     └───────────────────────┘
```

### Form Submission Status

```
┌─────────┐  mark read   ┌───────────┐
│ pending │ ───────────> │ processed │
└─────────┘              └───────────┘
```

---

## Data Retention

| Entity | Retention Policy |
|--------|------------------|
| Users | Indefinite (until deleted by admin) |
| Pages | Indefinite |
| BlogPosts | Indefinite |
| Media | Indefinite (orphan cleanup recommended) |
| FormSubmissions | 1 year (configurable) |

---

## Migration Notes

- Initial setup creates default admin user from environment variables
- Sample content (1 page, 1 blog post) seeded on first run
- Payload handles schema migrations automatically
- Turso database is managed via Payload CMS SQLite adapter
