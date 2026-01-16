# Product Requirements Document

## Website Builder CLI System

**Version 1.0 | January 2026**

| Document Owner | Dan / The Marketing Guys |
|----------------|--------------------------|
| Target User | Business Partner (Non-Technical) |
| Status | Draft |

---

## 1. Executive Summary

This document outlines the requirements for a CLI-based website builder system designed to enable a non-technical business partner to create professional websites for small local businesses. The system leverages Claude Code within VS Code, using slash commands to guide the user through a structured workflow from project setup to deployment.

The goal is to simplify website development by abstracting technical complexity behind natural language interactions, while maintaining full control over design, quality, and client deliverables.

## 2. Problem Statement

Building websites currently requires extensive technical knowledge of frameworks, databases, hosting, and deployment pipelines. This creates a barrier for team members who could otherwise contribute to client delivery. Additionally, the lack of standardised workflows leads to inconsistent outputs and inefficient processes.

## 3. Goals & Objectives

- Enable non-technical team members to build professional websites using natural language
- Standardise the website development workflow across all client projects
- Reduce time-to-delivery for small business websites
- Maintain design quality and consistency without requiring design expertise
- Provide clients with a simple CMS for content management post-handover

## 4. Technology Stack

### 4.1 Core Framework

| Technology | Purpose |
|------------|---------|
| Next.js | React framework with SSR/SSG capabilities |
| React | Component-based UI library |
| TypeScript | Type-safe JavaScript for reliability |

### 4.2 Styling & Components

| Technology | Purpose |
|------------|---------|
| Tailwind CSS | Utility-first CSS framework |
| Shadcn UI | Accessible component primitives |
| Aceternity / Magic UI | Elegant, aesthetic component libraries for non-techy look |

### 4.3 Backend & Database

| Technology | Purpose |
|------------|---------|
| Turso | Edge SQLite database with generous free tier |
| Payload CMS | Self-hosted CMS with built-in auth, lives in repo at /admin |

### 4.4 Utilities & Services

| Technology | Purpose |
|------------|---------|
| Resend | Email delivery for contact forms |
| next-seo | SEO meta tags and Open Graph |
| next-sitemap | XML sitemap generation |
| Zod | Schema validation |
| Vercel Analytics | Website analytics |

### 4.5 Deployment

| Technology | Purpose |
|------------|---------|
| GitHub | Version control and repository hosting |
| Vercel | Hosting with automatic preview deployments |

## 5. Slash Command Workflow

The following slash commands guide users through the website development process in a logical sequence. Each command prompts for relevant information and executes the necessary actions.

### 5.1 Command Overview

| Order | Command | Description |
|-------|---------|-------------|
| 1 | /setup | Clone base repo, prompt for project details, initialise environment |
| 2 | /scrape | Extract content from existing client website (optional) |
| 3 | /sitemap | Generate site structure and page hierarchy |
| 4 | /designer | Define visual design, layouts, and component usage |
| 5 | /content | Generate and refine page copy and content |
| 6 | /payload-setup | Configure CMS with post types (blogs, area guides, etc.) |
| 7 | /developer | Add custom features and functionality |
| 8 | /deploy | Push to new GitHub repo and connect to Vercel |

### 5.2 Command Specifications

#### /setup

**Purpose:** Initialise a new website project from the base template.

**Prompts:**
- Project name / folder name
- Client business name
- Industry / business type
- Does client have existing website? (Yes/No)

**Actions:**
- Clone base repository
- Install dependencies (npm install)
- Update package.json with project name
- Create project config file with client details

#### /scrape

**Purpose:** Extract content from an existing client website for migration.

**Prompts:**
- Existing website URL
- Pages to scrape (all / specific pages)

**Actions:**
- Crawl specified pages
- Extract text content, headings, meta data
- Download images and assets
- Store in structured format for use in /content command

#### /sitemap

**Purpose:** Define the site structure and navigation hierarchy.

**Prompts:**
- Required pages (suggestions based on industry)
- Navigation structure (main menu items)
- Footer links

**Actions:**
- Generate page structure file
- Create route files for each page
- Set up navigation component configuration

#### /designer

**Purpose:** Define visual design, layouts, and styling.

**Prompts:**
- Brand colours (primary, secondary, accent)
- Typography preferences (modern, traditional, playful)
- Design style (minimal, bold, elegant, friendly)
- Reference websites or screenshots (optional)

**Actions:**
- Configure Tailwind theme (colours, fonts, spacing)
- Select and configure component library components
- Generate page layouts using selected components

#### /content

**Purpose:** Generate and refine website copy and content.

**Prompts:**
- Target audience
- Tone of voice (professional, friendly, authoritative)
- Key selling points / USPs
- Services or products to highlight

**Actions:**
- Generate page headlines and body copy
- Create meta titles and descriptions for SEO
- Populate content into page components
- Use scraped content as reference if available

#### /payload-setup

**Purpose:** Configure Payload CMS with required content types.

**Prompts:**
- Required post types (blogs, area guides, testimonials, team, FAQs)
- Custom fields needed for each post type
- Admin user email for client access

**Actions:**
- Generate Payload collection schemas
- Configure admin dashboard at /admin route
- Set up form submission storage
- Import scraped content into CMS if available

#### /developer

**Purpose:** Add custom features and functionality beyond standard templates.

**Prompts:**
- Feature description in natural language
- Page or component to modify

**Actions:**
- Implement requested functionality
- Integrate third-party services if needed
- Test and validate implementation

#### /deploy

**Purpose:** Deploy the completed website to production.

**Prompts:**
- GitHub repository name
- Confirm deployment (Yes/No)

**Actions:**
- Create new GitHub repository
- Push code to repository
- Connect repository to Vercel
- Configure environment variables
- Trigger initial deployment to preview URL

## 6. CMS Specification

### 6.1 Payload CMS Configuration

Payload CMS is embedded within the Next.js application, providing clients with a dedicated admin dashboard accessible at /admin. This eliminates the need for separate hosting or third-party CMS services.

**Key Features:**
- Built-in authentication (no separate auth system required)
- Rich text editor for content creation
- Media library for image management
- Form submission storage and viewing
- Custom collection types per project requirements

**Standard Collections:**

| Collection | Fields |
|------------|--------|
| Blog Posts | Title, Slug, Featured Image, Content, Excerpt, Author, Published Date, Categories |
| Area Guides | Title, Slug, Location, Featured Image, Content, Map Embed, Related Properties |
| Testimonials | Client Name, Company, Quote, Rating, Photo, Date |
| Team Members | Name, Role, Photo, Bio, Email, LinkedIn |
| Form Submissions | Form Type, Name, Email, Phone, Message, Submitted Date, Status |

### 6.2 User Permissions

Clients are given limited access to content management only. They cannot modify design, code, or site structure.

| Permission | Client | Developer |
|------------|--------|-----------|
| Create/Edit Content | Yes | Yes |
| Upload Media | Yes | Yes |
| View Form Submissions | Yes | Yes |
| Modify Collections | No | Yes |
| Access Code | No | Yes |

## 7. Deployment Pipeline

### 7.1 Workflow

1. Development occurs locally using Claude Code in VS Code
2. /deploy command creates new GitHub repository
3. Code is pushed to GitHub
4. Vercel automatically deploys to preview URL
5. Client reviews on preview URL
6. Custom domain connected manually once approved
7. Future updates pushed directly to live site

### 7.2 Environment Variables

The following environment variables are configured automatically during deployment:

| Variable | Purpose |
|----------|---------|
| TURSO_DATABASE_URL | Turso database connection URL |
| TURSO_AUTH_TOKEN | Turso authentication token |
| RESEND_API_KEY | Email service authentication |
| PAYLOAD_SECRET | CMS encryption key |
| NEXT_PUBLIC_SITE_URL | Base URL for SEO and sitemap |

## 8. Pre-requisites & Setup

Before the business partner can use the system, the following must be configured:

### 8.1 One-Time Setup (Developer)

- Install VS Code with Claude Code extension
- Configure GitHub CLI authentication (gh auth login)
- Configure Vercel CLI authentication (vercel login)
- Set up base repository on GitHub
- Create shared Turso and Resend accounts

### 8.2 Per-Project Setup

- Client business information
- Brand assets (logo, colours if available)
- Existing website URL (if applicable)
- Content requirements and page list

## 9. Success Metrics

| Metric | Target |
|--------|--------|
| Time to deploy basic site | < 4 hours |
| Technical support requests per project | < 2 |
| Client CMS training time | < 30 minutes |
| Partner confidence level | Can work independently after 3 projects |

## 10. Appendix

### 10.1 Reference Folder

A reference folder will be maintained containing screenshots and links to live websites that demonstrate the target aesthetic. This serves as inspiration during the /designer command workflow.

### 10.2 Component Library Reference

- Shadcn UI: https://ui.shadcn.com
- Aceternity UI: https://ui.aceternity.com
- Magic UI: https://magicui.design

### 10.3 Future Enhancements

- Integration with Google Search Console for automatic sitemap submission
- Automated Lighthouse performance testing
- Multi-language support via i18n
- E-commerce capabilities via Stripe integration
