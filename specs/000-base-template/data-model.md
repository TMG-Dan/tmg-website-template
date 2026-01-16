# Data Model: Base Website Template

**Feature**: 000-base-template
**Date**: 2026-01-16

## Overview

The base template uses two data stores:
1. **Payload CMS** - Content management (pages, blog posts, media, users)
2. **Convex** - Real-time data (form submissions)

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

## Convex Database

### FormSubmissions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| _id | Id | auto | Convex document ID |
| _creationTime | number | auto | Creation timestamp (ms) |
| name | string | yes | Submitter's name |
| email | string | yes | Submitter's email |
| phone | string | no | Phone number |
| message | string | yes | Message content |
| submittedAt | number | yes | Submission timestamp (ms) |
| status | union | yes | 'pending' or 'processed' |

**Validation:**
- email: valid email format
- message: min 10 chars, max 5000 chars
- phone: optional, E.164 format if provided

**Indexes:**
- by_status: For filtering pending submissions
- by_date: For sorting by submission date

**Schema Definition:**
```typescript
import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  formSubmissions: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    message: v.string(),
    submittedAt: v.number(),
    status: v.union(v.literal("pending"), v.literal("processed")),
  })
    .index("by_status", ["status"])
    .index("by_date", ["submittedAt"])
})
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
│     FormSubmissions (Convex)    │
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
- No automated migrations - Payload handles schema changes
- Convex schema changes require `npx convex dev` to push
