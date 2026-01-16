# TMG Website Builder - Complete Testing Guide

A complete step-by-step guide to set up your machine and test the TMG workflow from scratch.

---

## Table of Contents

1. [Part 1: Machine Setup](#part-1-machine-setup) (One-time only)
2. [Part 2: Test the Workflow](#part-2-test-the-workflow)
3. [Part 3: Verification & Troubleshooting](#part-3-verification--troubleshooting)

---

# Part 1: Machine Setup

Complete these steps once on your machine. Skip any you've already done.

---

## Step 1.1: Install VS Code

**Download:** https://code.visualstudio.com/

1. Download the Mac version
2. Open the downloaded `.zip` file
3. Drag **Visual Studio Code** to your Applications folder
4. Open VS Code from Applications

**Verify:**
- VS Code opens without errors

---

## Step 1.2: Install Node.js

**Download:** https://nodejs.org/

1. Download the **LTS** version (recommended)
2. Open the downloaded `.pkg` file
3. Follow the installer prompts (accept defaults)
4. Restart Terminal if it was open

**Verify:**
```bash
node --version
# Should show v20.x.x or v18.x.x
```

---

## Step 1.3: Install Homebrew (Mac Package Manager)

Open Terminal (Applications → Utilities → Terminal) and paste:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Important:** After installation, Homebrew shows commands to add it to your PATH. Run those commands! They look like:

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

**Verify:**
```bash
brew --version
# Should show Homebrew 4.x.x
```

---

## Step 1.4: Install GitHub CLI

In Terminal:

```bash
brew install gh
```

**Verify:**
```bash
gh --version
# Should show gh version 2.x.x
```

---

## Step 1.5: Authenticate GitHub CLI

In Terminal:

```bash
gh auth login
```

Follow the prompts:
1. **Where do you use GitHub?** → Select `GitHub.com`
2. **Preferred protocol?** → Select `HTTPS`
3. **Authenticate Git with GitHub credentials?** → Select `Yes`
4. **How would you like to authenticate?** → Select `Login with a web browser`
5. Copy the one-time code shown
6. Press Enter to open browser
7. Paste the code in the browser
8. Click **Authorize**

**Verify:**
```bash
gh auth status
# Should show "Logged in to github.com as YOUR_USERNAME"
```

---

## Step 1.6: Install Vercel CLI

In Terminal:

```bash
npm install -g vercel
```

**Verify:**
```bash
vercel --version
# Should show vercel 39.x.x or similar
```

---

## Step 1.7: Authenticate Vercel CLI

In Terminal:

```bash
vercel login
```

1. Select your login method (GitHub, Email, etc.)
2. Complete authentication in browser
3. Return to Terminal

**Verify:**
```bash
vercel whoami
# Should show your Vercel username
```

---

## Step 1.8: Install Claude Code Extension

1. Open VS Code
2. Click the **Extensions** icon in the left sidebar (or press `Cmd+Shift+X`)
3. Search for **"Claude Code"**
4. Click **Install** on "Claude Code" by Anthropic
5. After installation, click the Claude icon in the left sidebar
6. Follow prompts to sign in with your Anthropic account

**Verify:**
- Claude Code panel opens in VS Code
- You can type messages to Claude

---

## Step 1.9: Clone TMG_BASE Repository

This gives you access to all the `/tmg-*` commands.

In Terminal:

```bash
cd ~/Documents
git clone https://github.com/TMG-Dan/TMG_BASE.git
```

**Verify:**
```bash
ls ~/Documents/TMG_BASE/.claude/commands/
# Should show: tmg.content.md, tmg.deploy.md, tmg.designer.md, etc.
```

---

## Step 1.10: Verify Everything Works

Run this checklist in Terminal:

```bash
# Check all tools are installed
echo "=== Checking installations ==="
node --version && echo "✓ Node.js installed"
npm --version && echo "✓ npm installed"
gh --version && echo "✓ GitHub CLI installed"
vercel --version && echo "✓ Vercel CLI installed"

# Check authentications
echo ""
echo "=== Checking authentications ==="
gh auth status && echo "✓ GitHub authenticated"
vercel whoami && echo "✓ Vercel authenticated"

# Check TMG_BASE
echo ""
echo "=== Checking TMG_BASE ==="
ls ~/Documents/TMG_BASE/.claude/commands/tmg.*.md && echo "✓ TMG commands available"
```

**Expected output:** All items show ✓

---

# Part 2: Test the Workflow

Now test the actual TMG workflow with a fake client project.

---

## Test Scenario

| Field | Value |
|-------|-------|
| Client Name | Acme Plumbing |
| Industry | Plumbing services |
| Existing Website | https://example-plumbing.com |

---

## Step 2.1: Create Test Project Folder

Open Terminal and run:

```bash
mkdir -p ~/Projects/test-acme-plumbing
cd ~/Projects/test-acme-plumbing
code .
```

This creates a folder and opens VS Code in it.

---

## Step 2.2: Open Claude Code Panel

In VS Code:
1. Click the **Claude icon** in the left sidebar, OR
2. Press `Cmd+Shift+P` and type "Claude: Open Panel"

---

## Step 2.3: Run /tmg-setup

Type in the Claude chat:

```
/tmg-setup
```

**Claude will ask:**
- Client name → Type: `Acme Plumbing`
- Industry → Type: `Plumbing services`
- Existing website → Type: `https://example-plumbing.com`

**Wait for Claude to:**
- Clone the template from GitHub
- Update configuration files
- Install dependencies (this takes 1-2 minutes)
- Initialize git

**Verify it worked:**
```bash
# In Terminal, in the project folder:
cat tmg-config.json
# Should show clientName: "Acme Plumbing"

npm run build
# Should complete without errors
```

---

## Step 2.4: Run /tmg-sitemap

Type in Claude:

```
/tmg-sitemap
```

**Claude will:**
- Suggest pages based on industry:
  - Home
  - Services
  - Service Areas
  - About
  - Contact
- Ask if you want to add or remove pages

**Your response:** Accept the suggestions or customize

**Verify it worked:**
```bash
ls src/app/\(frontend\)/
# Should show: about, blog, contact, services, service-areas, page.tsx

cat src/config/navigation.ts
# Should show Services and Service Areas in nav

npm run build
# Should complete without errors
```

---

## Step 2.5: Run /tmg-designer

Type in Claude:

```
/tmg-designer
```

**Option A - Use a Webflow reference:**
When Claude asks, provide a template URL:
```
https://webflow.com/templates/html/flavor-starter-restaurant-website-template
```

**Option B - Specify colors manually:**
- Primary color: `#1e40af` (blue)
- Style: Professional, clean

**Claude will:**
- Analyze the reference (if provided)
- Update Tailwind config with colors
- Update CSS variables

**Verify it worked:**
```bash
npm run dev
# Open http://localhost:3000 in browser
# Check that colors match your choice
# Press Ctrl+C to stop server
```

---

## Step 2.6: Run /tmg-content

Type in Claude:

```
/tmg-content
```

**Claude will:**
- Generate content for each page:
  - Headlines and taglines
  - Service descriptions
  - About page content
  - CTAs

**Verify it worked:**
```bash
npm run dev
# Open http://localhost:3000 in browser
# Browse each page - should have real content
# Press Ctrl+C to stop server
```

---

## Step 2.7: Run /tmg-payload-setup

Type in Claude:

```
/tmg-payload-setup
```

**Claude will suggest collections:**
- Testimonials
- Team Members
- FAQs
- Service Areas

**Your response:** Confirm or customize

**Claude will:**
- Add collections to Payload config
- Create frontend components

**Verify it worked:**
```bash
npm run dev
# Open http://localhost:3000/admin in browser
# Create an admin account (first-time setup)
# Check that collections appear in sidebar
# Press Ctrl+C to stop server
```

---

## Step 2.8: Run /tmg-deploy (Optional)

⚠️ **Warning:** This creates a REAL GitHub repository and Vercel deployment.

Only run this if you want to test deployment:

```
/tmg-deploy
```

**Claude will:**
- Run a build check
- Ask for repository name
- Create GitHub repo
- Deploy to Vercel
- Provide preview URL

**Verify it worked:**
- Visit the Vercel preview URL
- Check all pages load
- Test the `/admin` panel

---

# Part 3: Verification & Troubleshooting

---

## Quick Verification Commands

Run these anytime to check project health:

```bash
# Build the project
npm run build

# Start dev server
npm run dev

# Run tests
npm test

# Check TypeScript
npx tsc --noEmit

# Check what files exist
ls -la src/app/\(frontend\)/
```

---

## Common Issues & Fixes

### "command not found: node"

Node.js not installed. Go back to Step 1.2.

---

### "command not found: gh"

GitHub CLI not installed. Run:
```bash
brew install gh
```

---

### "command not found: vercel"

Vercel CLI not installed. Run:
```bash
npm install -g vercel
```

---

### "gh: Not logged in"

Run:
```bash
gh auth login
```

---

### "/tmg-setup command not recognized"

Claude Code can't find the commands. Make sure:
1. TMG_BASE is cloned to `~/Documents/TMG_BASE`
2. The `.claude/commands/` folder exists
3. Try restarting VS Code

---

### "Port 3000 already in use"

Another app is using port 3000. Use a different port:
```bash
npm run dev -- -p 3001
```

---

### Build fails with TypeScript errors

Copy the error message and paste it to Claude:
```
I got this error when building:
[paste error here]

How do I fix it?
```

---

### Payload admin has no styles

Check `src/app/(payload)/layout.tsx` includes:
```tsx
import '@payloadcms/next/css'
```

---

### npm install fails

Try clearing cache:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## Cleanup After Testing

To delete the test project:

```bash
rm -rf ~/Projects/test-acme-plumbing
```

If you ran `/tmg-deploy`, also delete:
- The GitHub repo at github.com/TMG-Dan/[repo-name]
- The Vercel project at vercel.com/dashboard

---

## Expected Final Project Structure

After completing all steps:

```
test-acme-plumbing/
├── node_modules/
├── public/
│   └── images/
├── src/
│   ├── app/
│   │   ├── (frontend)/
│   │   │   ├── page.tsx              # Home
│   │   │   ├── about/page.tsx        # About
│   │   │   ├── contact/page.tsx      # Contact
│   │   │   ├── services/page.tsx     # Services
│   │   │   ├── service-areas/page.tsx # Service Areas
│   │   │   └── blog/                 # Blog pages
│   │   ├── (payload)/
│   │   │   └── admin/                # CMS admin
│   │   └── api/
│   ├── components/
│   │   ├── layout/                   # Header, Footer, Nav
│   │   ├── sections/                 # Hero, Features, CTA
│   │   ├── ui/                       # Buttons, Cards, etc.
│   │   └── forms/                    # Contact form
│   ├── config/
│   │   ├── site.ts                   # Business info
│   │   ├── navigation.ts             # Nav links
│   │   └── sitemap.json              # Page list
│   └── lib/
│       └── animations.ts             # Framer Motion presets
├── payload.config.ts                 # CMS configuration
├── tailwind.config.ts                # Styling
├── tmg-config.json                   # Project metadata
├── package.json
└── tsconfig.json
```

---

## Success Criteria

Your test is successful if:

- [ ] All 6 commands run without errors
- [ ] `npm run build` passes
- [ ] Dev server starts and pages load
- [ ] Payload admin accessible at `/admin`
- [ ] Navigation shows all pages
- [ ] Content appears on pages (not placeholder text)

---

## Need Help?

If you get stuck:
1. Copy the exact error message
2. Ask Claude: "I got this error: [paste]. How do I fix it?"
3. If Claude can't help, contact Dan
