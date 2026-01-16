# Tasks: Base Website Template

**Input**: Design documents from `/specs/000-base-template/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Tests**: Test tasks are included following the constitution's Test-First Development requirement.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

This is a **Next.js App Router** project with embedded Payload CMS:
- `src/` - Application source code
- `payload/` - Payload CMS collections
- `tests/` - Test files
- `public/` - Static assets

---

## Phase 1: Setup (Project Initialization)

**Purpose**: Initialize the tmg-website-template repository with all dependencies

- [ ] T001 Initialize Next.js 14 project with TypeScript in tmg-website-template/
- [ ] T002 Configure package.json with project name and scripts
- [ ] T003 [P] Create tsconfig.json with strict mode enabled
- [ ] T004 [P] Create next.config.js with Payload plugin integration
- [ ] T005 [P] Initialize Tailwind CSS with tailwind.config.js
- [ ] T006 [P] Create .env.example with all required environment variables
- [ ] T007 [P] Create .gitignore for Node.js, Next.js, and environment files
- [ ] T008 [P] Configure ESLint with eslint.config.js (flat config)
- [ ] T009 [P] Configure Prettier with .prettierrc

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T010 Create src/app/globals.css with CSS variable definitions for theming
- [ ] T011 Create src/lib/utils.ts with cn() helper and common utilities
- [ ] T012 [P] Configure Turso database connection in payload.config.ts
- [ ] T013 [P] Create payload/collections/FormSubmissions.ts for contact form data
- [ ] T014 [P] Create payload/payload.config.ts with base CMS configuration
- [ ] T015 Create src/app/layout.tsx with providers and base HTML structure
- [ ] T016 [P] Create src/config/site.ts with site metadata (name, description, URL)
- [ ] T017 [P] Create src/config/navigation.ts with navigation items structure
- [ ] T018 [P] Install and configure Shadcn UI base components (button, card, input, textarea)

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Partner Clones and Runs Template (Priority: P1) 🎯 MVP

**Goal**: Template starts successfully with `npm install && npm run dev`, displaying homepage with navigation, hero, and footer

**Independent Test**: Clone repo, run `npm install` and `npm run dev`, verify homepage loads at localhost:3000

### Tests for User Story 1

- [ ] T019 [P] [US1] E2E test for homepage load in tests/e2e/homepage.spec.ts
- [ ] T020 [P] [US1] Component test for Header in tests/unit/components/Header.test.tsx
- [ ] T021 [P] [US1] Component test for Footer in tests/unit/components/Footer.test.tsx

### Implementation for User Story 1

- [ ] T022 [P] [US1] Create src/components/layout/Header.tsx with logo and navigation
- [ ] T023 [P] [US1] Create src/components/layout/Footer.tsx with links and copyright
- [ ] T024 [P] [US1] Create src/components/layout/Navigation.tsx with responsive menu
- [ ] T025 [P] [US1] Create src/components/sections/Hero.tsx with headline and CTA
- [ ] T026 [P] [US1] Create src/components/sections/Features.tsx with feature cards
- [ ] T027 [P] [US1] Create src/components/sections/CTA.tsx with call-to-action banner
- [ ] T028 [US1] Create src/app/page.tsx (homepage) composing Hero, Features, CTA sections
- [ ] T029 [US1] Create src/app/about/page.tsx with placeholder about content
- [ ] T030 [US1] Create src/app/not-found.tsx with custom 404 page
- [ ] T031 [US1] Add sample logo and placeholder images to public/images/

**Checkpoint**: User Story 1 complete - template runs and displays homepage

---

## Phase 4: User Story 2 - Client Accesses CMS Admin (Priority: P1)

**Goal**: CMS admin accessible at /admin with authentication, blog post management, and media uploads

**Independent Test**: Navigate to /admin, create admin user, create blog post with image, verify post appears on frontend

### Tests for User Story 2

- [ ] T032 [P] [US2] E2E test for admin login flow in tests/e2e/admin-login.spec.ts
- [ ] T033 [P] [US2] E2E test for blog post creation in tests/e2e/blog-post.spec.ts
- [ ] T034 [P] [US2] Integration test for Payload API in tests/integration/payload-api.test.ts

### Implementation for User Story 2

- [ ] T035 [P] [US2] Create payload/collections/Users.ts with auth configuration
- [ ] T036 [P] [US2] Create payload/collections/Media.ts with upload handling
- [ ] T037 [P] [US2] Create payload/collections/Pages.ts with content fields
- [ ] T038 [P] [US2] Create payload/collections/BlogPosts.ts with all fields from data-model
- [ ] T039 [US2] Update payload/payload.config.ts to register all collections
- [ ] T040 [US2] Create src/app/(payload)/admin/[[...segments]]/page.tsx for admin routes
- [ ] T041 [US2] Create src/app/(payload)/admin/[[...segments]]/not-found.tsx
- [ ] T042 [US2] Create src/app/api/[...slug]/route.ts for Payload REST API
- [ ] T043 [US2] Create src/app/blog/page.tsx with blog listing and pagination
- [ ] T044 [US2] Create src/app/blog/[slug]/page.tsx for individual blog posts
- [ ] T045 [US2] Create src/components/blog/BlogCard.tsx for post previews
- [ ] T046 [US2] Create src/components/blog/BlogContent.tsx for rendering Lexical content
- [ ] T047 [US2] Seed initial admin user and sample blog post via Payload seed script

**Checkpoint**: User Story 2 complete - CMS admin fully functional

---

## Phase 5: User Story 3 - Website Visitor Submits Contact Form (Priority: P2)

**Goal**: Contact form collects data, stores in Payload CMS (Turso), sends email notification via Resend

**Independent Test**: Fill out contact form, submit, verify submission in Payload CMS admin and email received

### Tests for User Story 3

- [ ] T048 [P] [US3] Contract test for form submission API in tests/contract/contact-form.test.ts
- [ ] T049 [P] [US3] Unit test for Zod validation schemas in tests/unit/lib/validations.test.ts
- [ ] T050 [P] [US3] E2E test for contact form submission in tests/e2e/contact-form.spec.ts

### Implementation for User Story 3

- [ ] T051 [P] [US3] Create src/lib/validations.ts with Zod schemas for contact form
- [ ] T052 [P] [US3] Create form submission API route using Payload Local API
- [ ] T053 [P] [US3] Create src/lib/email.ts with Resend email sending function
- [ ] T054 [US3] Create src/components/forms/ContactForm.tsx with validation
- [ ] T055 [US3] Create src/app/contact/page.tsx with ContactForm component
- [ ] T056 [US3] Create src/app/api/contact/route.ts Server Action for form submission
- [ ] T057 [US3] Implement email notification trigger after successful submission
- [ ] T058 [US3] Add form submission success/error toast notifications

**Checkpoint**: User Story 3 complete - contact form working end-to-end

---

## Phase 6: User Story 4 - Partner Configures Visual Design (Priority: P2)

**Goal**: Partner can change colors and fonts by editing single config file, changes reflect across all components

**Independent Test**: Edit primary color in theme config, save, verify all buttons and links update

### Tests for User Story 4

- [ ] T059 [P] [US4] Visual regression test for theme changes in tests/e2e/theme.spec.ts
- [ ] T060 [P] [US4] Unit test for theme config validation in tests/unit/config/theme.test.ts

### Implementation for User Story 4

- [ ] T061 [P] [US4] Create src/config/theme.ts with color palette, typography, spacing config
- [ ] T062 [US4] Update tailwind.config.js to use CSS variables from theme config
- [ ] T063 [US4] Update src/app/globals.css to generate CSS variables from theme
- [ ] T064 [US4] Add Google Fonts loading in src/app/layout.tsx
- [ ] T065 [US4] Update all Shadcn components to use theme CSS variables
- [ ] T066 [US4] Create dark mode toggle in src/components/layout/ThemeToggle.tsx
- [ ] T067 [US4] Document theme customization in README.md

**Checkpoint**: User Story 4 complete - theme customization working

---

## Phase 7: User Story 5 - Website Loads Quickly (Priority: P3)

**Goal**: Lighthouse performance 80+, accessibility 90+, responsive on all devices

**Independent Test**: Run Lighthouse audit, verify scores meet targets

### Tests for User Story 5

- [ ] T068 [P] [US5] Lighthouse CI configuration in tests/lighthouse/lighthouse.config.js
- [ ] T069 [P] [US5] Visual test for mobile responsiveness in tests/e2e/responsive.spec.ts

### Implementation for User Story 5

- [ ] T070 [P] [US5] Optimize images with Next.js Image component across all components
- [ ] T071 [P] [US5] Add loading skeletons for dynamic content in src/components/ui/Skeleton.tsx
- [ ] T072 [P] [US5] Implement lazy loading for below-fold sections
- [ ] T073 [US5] Configure next.config.js for optimal code splitting
- [ ] T074 [US5] Add responsive breakpoints to all layout components
- [ ] T075 [US5] Audit and fix accessibility issues (ARIA labels, contrast, focus states)
- [ ] T076 [US5] Add Web Vitals monitoring with Vercel Analytics

**Checkpoint**: User Story 5 complete - performance targets met

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Final improvements affecting multiple user stories

- [ ] T077 [P] Create comprehensive README.md with setup instructions
- [ ] T078 [P] Create src/lib/seo.ts with generateMetadata helper function
- [ ] T079 [P] Configure next-sitemap for XML sitemap generation
- [ ] T080 Add SEO metadata to all pages using generateMetadata
- [ ] T081 Create sample content for all page types (home, about, blog posts)
- [ ] T082 Run full test suite and fix any failures
- [ ] T083 Validate quickstart.md instructions work end-to-end
- [ ] T084 Security audit: verify no secrets in client bundle
- [ ] T085 Final code cleanup and linting fixes

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-7)**: All depend on Foundational phase completion
  - US1 and US2 are both P1, can run in parallel after foundation
  - US3 and US4 are both P2, can run in parallel after foundation
  - US5 is P3, can run after foundation
- **Polish (Phase 8)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Depends only on Foundational - Homepage basics
- **User Story 2 (P1)**: Depends only on Foundational - CMS admin
- **User Story 3 (P2)**: Depends only on Foundational - Contact form
- **User Story 4 (P2)**: Depends only on Foundational - Theme config
- **User Story 5 (P3)**: Can use components from other stories but is independently testable

### Within Each User Story (TDD Order)

1. Tests MUST be written and FAIL before implementation
2. Models/schemas before services
3. Services/utilities before components
4. Components before pages
5. Pages before integration
6. Story complete before marking done

### Parallel Opportunities

Within each phase, tasks marked [P] can run in parallel:

**Phase 1 (Setup)**: T003, T004, T005, T006, T007, T008, T009 - all parallel
**Phase 2 (Foundational)**: T012, T013, T014, T016, T017, T018 - all parallel
**Phase 3 (US1)**: T019-T021 tests parallel, T022-T027 components parallel
**Phase 4 (US2)**: T032-T034 tests parallel, T035-T038 collections parallel
**Phase 5 (US3)**: T048-T050 tests parallel, T051-T053 services parallel
**Phase 6 (US4)**: T059-T060 tests parallel
**Phase 7 (US5)**: T068-T069 tests parallel, T070-T072 optimizations parallel

---

## Parallel Example: User Story 2 (CMS Admin)

```bash
# Launch all tests for User Story 2 together:
Task: "E2E test for admin login flow in tests/e2e/admin-login.spec.ts"
Task: "E2E test for blog post creation in tests/e2e/blog-post.spec.ts"
Task: "Integration test for Payload API in tests/integration/payload-api.test.ts"

# Then launch all Payload collections in parallel:
Task: "Create payload/collections/Users.ts with auth configuration"
Task: "Create payload/collections/Media.ts with upload handling"
Task: "Create payload/collections/Pages.ts with content fields"
Task: "Create payload/collections/BlogPosts.ts with all fields from data-model"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test homepage loads, navigation works
5. Deploy/demo if ready - minimal working template

### Recommended Full Build Order

1. **Setup + Foundational** (T001-T018) → Project structure ready
2. **User Story 1** (T019-T031) → Homepage working (MVP!)
3. **User Story 2** (T032-T047) → CMS admin working
4. **User Story 3** (T048-T058) → Contact form working
5. **User Story 4** (T059-T067) → Theme customization working
6. **User Story 5** (T068-T076) → Performance optimized
7. **Polish** (T077-T085) → Production ready

### Task Counts

| Phase | Task Range | Count |
|-------|------------|-------|
| Phase 1: Setup | T001-T009 | 9 |
| Phase 2: Foundational | T010-T018 | 9 |
| Phase 3: US1 | T019-T031 | 13 |
| Phase 4: US2 | T032-T047 | 16 |
| Phase 5: US3 | T048-T058 | 11 |
| Phase 6: US4 | T059-T067 | 9 |
| Phase 7: US5 | T068-T076 | 9 |
| Phase 8: Polish | T077-T085 | 9 |
| **TOTAL** | | **85** |

---

## Notes

- [P] tasks = different files, no dependencies - can run in parallel
- [Story] label maps task to specific user story for traceability
- Each user story is independently completable and testable
- TDD: Write tests first, verify they fail, then implement
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- All file paths are relative to tmg-website-template/ repository root
