# TMG Website Builder - Testing Guide

Step-by-step guide to test the complete workflow.

---

## Prerequisites

Before testing, ensure you have:
- [ ] Claude Code extension installed in VS Code
- [ ] TMG_BASE cloned locally
- [ ] GitHub CLI authenticated (`gh auth status`)
- [ ] Node.js 18+ installed (`node --version`)

---

## Test Scenario

**Client:** Acme Plumbing
**Industry:** Plumbing services
**Existing Website:** https://example-plumbing.com (fake URL for testing)

---

## Step 1: Create Test Project Folder

Open Terminal and run:

```bash
mkdir -p ~/Projects/test-acme-plumbing
cd ~/Projects/test-acme-plumbing
code .
```

This opens VS Code in an empty folder.

---

## Step 2: Open Claude Code

In VS Code:
1. Click the Claude icon in the sidebar, OR
2. Press `Cmd+Shift+P` → "Claude: Open Panel"

---

## Step 3: Run /tmg-setup

Type in Claude:
```
/tmg-setup
```

**Expected behavior:**
- Claude asks for client name → Answer: "Acme Plumbing"
- Claude asks for industry → Answer: "Plumbing services"
- Claude asks for existing website → Answer: "https://example-plumbing.com"

**Expected result:**
- Template cloned from GitHub
- `package.json` updated with project name
- `src/config/site.ts` updated with business info
- `tmg-config.json` created
- Dependencies installed
- Git initialized

**Verify:**
```bash
cat tmg-config.json
npm run build
```

---

## Step 4: Run /tmg-sitemap

Type in Claude:
```
/tmg-sitemap
```

**Expected behavior:**
- Claude suggests pages based on industry (plumbing):
  - Home
  - Services
  - Service Areas
  - About
  - Contact
- Claude asks if you want to add/remove pages

**Expected result:**
- Page files created in `src/app/(frontend)/`
- `src/config/navigation.ts` updated
- `src/config/sitemap.json` created

**Verify:**
```bash
ls src/app/\(frontend\)/
cat src/config/navigation.ts
npm run build
```

---

## Step 5: Run /tmg-designer

Type in Claude:
```
/tmg-designer
```

**Option A - Provide a Webflow reference:**
When asked, provide a Webflow template URL like:
```
https://webflow.com/templates/html/flavor-starter-restaurant-website-template
```

**Option B - Manual colors:**
- Primary color: #1e40af (blue)
- Style: Professional, clean

**Expected result:**
- `tailwind.config.ts` updated with colors
- `src/app/globals.css` updated with CSS variables
- `src/config/design.ts` may be created

**Verify:**
```bash
npm run dev
# Open http://localhost:3000 and check colors
```

---

## Step 6: Run /tmg-content

Type in Claude:
```
/tmg-content
```

**Expected behavior:**
- Claude generates content for each page:
  - Headlines
  - Descriptions
  - Service descriptions
  - CTAs

**Expected result:**
- Page files updated with real content
- `src/config/site.ts` updated

**Verify:**
```bash
npm run dev
# Browse all pages and check content
```

---

## Step 7: Run /tmg-payload-setup

Type in Claude:
```
/tmg-payload-setup
```

**Expected behavior:**
- Claude suggests collections:
  - Testimonials
  - Team Members
  - FAQs
- Claude asks for confirmation

**Expected result:**
- `payload.config.ts` updated with new collections
- Frontend components created for displaying data

**Verify:**
```bash
npm run dev
# Go to http://localhost:3000/admin
# Create admin account
# Check collections exist
```

---

## Step 8: Run /tmg-deploy (Optional)

⚠️ **This creates a real GitHub repo and Vercel deployment**

Type in Claude:
```
/tmg-deploy
```

**Expected behavior:**
- Claude runs build check
- Claude asks for repo name
- Claude confirms deployment

**Expected result:**
- GitHub repo created at `TMG-Dan/acme-plumbing-website`
- Vercel deployment triggered
- Preview URL provided

---

## Quick Test Commands

Run these at any point to verify the project:

```bash
# Check build works
npm run build

# Start dev server
npm run dev

# Run tests
npm test

# Check for TypeScript errors
npx tsc --noEmit
```

---

## Common Issues & Fixes

### Issue: "command not found: gh"
```bash
brew install gh
gh auth login
```

### Issue: Build fails with type errors
Share the error with Claude and ask for help.

### Issue: Port 3000 in use
```bash
npm run dev -- -p 3001
```

### Issue: Payload admin has no styles
Check that `src/app/(payload)/layout.tsx` has:
```tsx
import '@payloadcms/next/css'
```

---

## Cleanup After Testing

To remove the test project:

```bash
rm -rf ~/Projects/test-acme-plumbing
```

---

## Expected Final State

After completing all steps, you should have:

```
test-acme-plumbing/
├── node_modules/
├── src/
│   ├── app/
│   │   ├── (frontend)/
│   │   │   ├── page.tsx         # Home
│   │   │   ├── services/        # Services page
│   │   │   ├── service-areas/   # Service Areas page
│   │   │   ├── about/           # About page
│   │   │   ├── contact/         # Contact page
│   │   │   └── blog/            # Blog pages
│   │   └── (payload)/           # CMS admin
│   ├── components/
│   └── config/
│       ├── site.ts              # Client business info
│       ├── navigation.ts        # Nav links
│       └── sitemap.json         # Page list
├── payload.config.ts            # CMS collections
├── tmg-config.json              # Project metadata
└── package.json
```

---

## Notes

- Each `/tmg-*` command builds on the previous
- You can re-run commands to make changes
- The workflow is conversational - Claude asks questions
- If something breaks, share the error with Claude
