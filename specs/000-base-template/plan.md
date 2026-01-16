# Implementation Plan: Base Website Template

**Branch**: `000-base-template` | **Date**: 2026-01-16 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/000-base-template/spec.md`

## Summary

Create a production-ready Next.js website template that serves as the foundation for all TMG client websites. The template includes a CMS admin dashboard (Payload CMS at /admin), real-time database (Convex), contact form with email notifications (Resend), and a fully customizable design system (Tailwind + Shadcn UI). Partners clone this template to start new client projects, configure the visual design, and deploy to Vercel.

## Technical Context

**Language/Version**: TypeScript 5.x, Node.js 18+
**Primary Dependencies**: Next.js 14 (App Router), React 18, Tailwind CSS 3.x, Shadcn UI, Payload CMS 3.x, Convex
**Storage**: Convex (real-time database), Payload CMS (content management with built-in SQLite/Postgres adapter)
**Testing**: Vitest (unit), Playwright (E2E), Testing Library (component)
**Target Platform**: Vercel (serverless hosting), modern browsers (Chrome, Firefox, Safari, Edge)
**Project Type**: Web application (Next.js monorepo with embedded CMS)
**Performance Goals**: Lighthouse 80+ mobile, <3s page load, <500ms API response
**Constraints**: Free tier compatible (Convex, Resend, Vercel), no build-time env vars required for template cloning
**Scale/Scope**: Single-tenant per deployment, <10k monthly visitors per client site

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### I. Test-First Development
- **Status**: COMPLIANT
- **Plan**: Tests will be written before implementation for all features
- **Testing Strategy**: Vitest for unit tests, Playwright for E2E, component tests with Testing Library
- **Coverage Targets**: Business logic 80%+, critical paths 100%

### II. Security & Privacy
- **Status**: COMPLIANT
- **Plan**:
  - Payload CMS handles authentication with built-in session management
  - Form inputs validated with Zod schemas (client and server)
  - CSRF protection via Next.js built-in mechanisms
  - Environment variables for all secrets (PAYLOAD_SECRET, RESEND_API_KEY, CONVEX_DEPLOY_KEY)
  - No sensitive data in client bundles

### III. Performance & Scalability
- **Status**: COMPLIANT
- **Plan**:
  - Static generation for marketing pages (SSG)
  - Server components for dynamic content
  - Image optimization via Next.js Image component
  - Code splitting per route
  - Lighthouse CI in deployment pipeline

### IV. Code Quality & Maintainability
- **Status**: COMPLIANT
- **Plan**:
  - ESLint + Prettier enforced via pre-commit hooks
  - TypeScript strict mode enabled
  - Component-based architecture with clear separation
  - Single-purpose utility functions
  - Version-pinned dependencies in package.json

### V. Simplicity & Pragmatism
- **Status**: COMPLIANT
- **Plan**:
  - Use Shadcn UI primitives (copy-paste, no heavy abstraction)
  - Convex provides real-time without custom WebSocket setup
  - Payload CMS embedded in Next.js (no separate backend)
  - Theme config in single tailwind.config.js file
  - No custom framework abstractions

## Project Structure

### Documentation (this feature)

```text
specs/000-base-template/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
│   └── api.yaml         # OpenAPI spec for form submission
└── tasks.md             # Phase 2 output (created by /speckit.tasks)
```

### Source Code (tmg-website-template repository)

```text
tmg-website-template/
├── package.json
├── next.config.js
├── tailwind.config.js        # Theme customization entry point
├── tsconfig.json
├── .env.example              # Required environment variables
├── convex/
│   ├── schema.ts             # Convex database schema
│   ├── formSubmissions.ts    # Form submission mutations/queries
│   └── _generated/           # Convex generated types
├── payload/
│   ├── payload.config.ts     # Payload CMS configuration
│   └── collections/
│       ├── Pages.ts
│       ├── BlogPosts.ts
│       ├── Media.ts
│       └── Users.ts
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with providers
│   │   ├── page.tsx          # Homepage
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx      # Blog listing
│   │   │   └── [slug]/page.tsx
│   │   ├── (admin)/admin/[[...segments]]/page.tsx  # Payload admin
│   │   └── not-found.tsx     # Custom 404
│   ├── components/
│   │   ├── ui/               # Shadcn UI components
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   └── CTA.tsx
│   │   └── forms/
│   │       └── ContactForm.tsx
│   ├── lib/
│   │   ├── utils.ts          # Utility functions
│   │   ├── validations.ts    # Zod schemas
│   │   └── email.ts          # Resend email functions
│   └── config/
│       ├── site.ts           # Site metadata configuration
│       └── navigation.ts     # Navigation structure
├── public/
│   ├── images/
│   └── fonts/
└── tests/
    ├── unit/
    ├── integration/
    └── e2e/
```

**Structure Decision**: Next.js App Router with embedded Payload CMS. Single repository structure where Payload admin is served from the same Next.js application at /admin route. Convex handles real-time data for contact form submissions. This avoids a separate backend service while providing full CMS functionality.

## Complexity Tracking

No violations - all constitution principles satisfied with standard patterns.
