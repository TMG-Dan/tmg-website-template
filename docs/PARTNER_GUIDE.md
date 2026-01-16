# TMG Website Builder - Partner Guide

A step-by-step guide for creating client websites using Claude Code.

---

## Table of Contents

1. [One-Time Setup](#one-time-setup)
2. [Starting a New Project](#starting-a-new-project)
3. [The Workflow](#the-workflow)
4. [Command Reference](#command-reference)
5. [Troubleshooting](#troubleshooting)

---

## One-Time Setup

You only need to do this once on your computer.

### Step 1: Install Required Software

#### 1.1 Install VS Code
Download and install from: https://code.visualstudio.com/

#### 1.2 Install Node.js
Download and install Node.js 18 or later from: https://nodejs.org/
- Choose the **LTS** (Long Term Support) version
- Run the installer, accept defaults

Verify installation by opening Terminal and running:
```bash
node --version
```
You should see something like `v20.x.x`

#### 1.3 Install Homebrew (Mac only)
Open Terminal and paste:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After installation, follow the instructions shown to add Homebrew to your PATH.

#### 1.4 Install GitHub CLI
In Terminal:
```bash
brew install gh
```

#### 1.5 Install Vercel CLI
In Terminal:
```bash
npm install -g vercel
```

---

### Step 2: Install Claude Code

#### 2.1 Install Claude Code Extension in VS Code
1. Open VS Code
2. Click the Extensions icon (or press `Cmd+Shift+X`)
3. Search for "Claude Code"
4. Click **Install**

#### 2.2 Sign in to Claude
1. Open the Command Palette (`Cmd+Shift+P`)
2. Type "Claude: Sign In" and select it
3. Follow the prompts to sign in with your Anthropic account

---

### Step 3: Authenticate with GitHub

In Terminal:
```bash
gh auth login
```

Follow the prompts:
1. Select **GitHub.com**
2. Select **HTTPS**
3. Select **Yes** to authenticate with GitHub credentials
4. Select **Login with a web browser**
5. Copy the one-time code shown
6. Press Enter to open browser
7. Paste the code and authorize

Verify it worked:
```bash
gh auth status
```

---

### Step 4: Authenticate with Vercel

In Terminal:
```bash
vercel login
```

Follow the prompts to log in with your Vercel account.

---

### Step 5: Clone TMG_BASE (One Time)

This gives you access to all the TMG commands.

```bash
cd ~/Documents
git clone https://github.com/TMG-Dan/TMG_BASE.git
```

---

## Starting a New Project

### For Each New Client Website:

1. **Create a new folder** for the client project:
   ```bash
   mkdir -p ~/Projects/client-name
   cd ~/Projects/client-name
   ```

2. **Open VS Code** in that folder:
   ```bash
   code .
   ```

3. **Open Claude Code** panel in VS Code:
   - Click the Claude icon in the sidebar, OR
   - Press `Cmd+Shift+P` and type "Claude: Open Panel"

4. **Start the workflow** by typing in Claude:
   ```
   /tmg-setup
   ```

Claude will guide you through the rest!

---

## The Workflow

Here's what each command does:

### `/tmg-setup`
**What it does:** Clones the website template and sets up the project.

**Claude will ask for:**
- Client/project name (e.g., "Acme Plumbing")
- Client's industry (e.g., "plumbing", "restaurant", "law firm")
- Client's existing website URL (if they have one)

**When done:** You'll have a working Next.js project ready to customize.

---

### `/tmg-scrape` (Optional)
**What it does:** Extracts content from the client's existing website.

**Use when:** The client has an existing website and you want to migrate content.

**When done:** Content saved in `content/scraped/` folder for reference.

---

### `/tmg-sitemap`
**What it does:** Defines what pages the website will have.

**Claude will:**
- Suggest pages based on industry (e.g., Home, Services, About, Contact)
- Ask if you want to add or remove any pages
- Create the page files and navigation

**When done:** All pages created, navigation configured.

---

### `/tmg-designer`
**What it does:** Configures the visual design (colors, fonts, styling).

**Best approach:** Provide a Webflow template URL as a reference:
1. Browse https://webflow.com/templates
2. Find a template that matches the client's style
3. Give Claude the URL

**Claude will:**
- Analyze the reference design
- Extract colors, typography, spacing
- Apply to the website

**When done:** Website styled to match the reference.

---

### `/tmg-content`
**What it does:** Generates text content for all pages.

**Claude will:**
- Use scraped content as a base (if available)
- Generate headlines, descriptions, CTAs
- Fill in all page sections

**When done:** All pages have real content.

---

### `/tmg-payload-setup`
**What it does:** Configures the CMS (Content Management System).

**Claude will suggest collections like:**
- Blog Posts
- Testimonials
- Team Members
- FAQs
- Service Areas

**When done:** Client can manage their own content at `/admin`.

---

### `/tmg-developer` (Optional)
**What it does:** Adds custom features beyond the standard template.

**Examples:**
- "Add a booking calendar to the contact page"
- "Add Google Maps to show their location"
- "Create a pricing calculator"
- "Add a before/after image slider"

**Use when:** Client needs something special.

---

### `/tmg-deploy`
**What it does:** Publishes the website to the internet.

**Claude will:**
- Create a private GitHub repository
- Deploy to Vercel
- Provide a preview URL

**When done:** Website is live at `project-name.vercel.app`

---

## Command Reference

| Command | Required? | Purpose |
|---------|-----------|---------|
| `/tmg-setup` | Yes | Initialize project |
| `/tmg-scrape` | Optional | Extract existing content |
| `/tmg-sitemap` | Yes | Define pages |
| `/tmg-designer` | Yes | Configure design |
| `/tmg-content` | Yes | Generate content |
| `/tmg-payload-setup` | Yes | Configure CMS |
| `/tmg-developer` | Optional | Custom features |
| `/tmg-deploy` | Yes | Publish website |

---

## Troubleshooting

### "command not found: gh"
GitHub CLI not installed. Run:
```bash
brew install gh
```

### "command not found: node"
Node.js not installed. Download from https://nodejs.org/

### "command not found: vercel"
Vercel CLI not installed. Run:
```bash
npm install -g vercel
```

### "Authentication required"
You need to log in again:
```bash
gh auth login    # For GitHub
vercel login     # For Vercel
```

### Claude doesn't recognize `/tmg-setup`
Make sure you've cloned TMG_BASE and the `.claude/commands/` folder exists.

The commands are defined in:
```
TMG_BASE/.claude/commands/tmg.*.md
```

### Build errors
Run in Terminal:
```bash
npm run build
```
Share the error message with Claude and ask for help.

### Port already in use
If `npm run dev` fails because port 3000 is in use:
```bash
npm run dev -- -p 3001
```

---

## Quick Start Checklist

Before your first project, verify everything is working:

- [ ] VS Code installed
- [ ] Claude Code extension installed and signed in
- [ ] Node.js installed (`node --version` shows v18+)
- [ ] GitHub CLI installed and authenticated (`gh auth status`)
- [ ] Vercel CLI installed and authenticated (`vercel whoami`)
- [ ] TMG_BASE cloned (`ls ~/Documents/TMG_BASE`)

---

## Example Session

Here's what a typical session looks like:

```
You: /tmg-setup

Claude: I'll help you set up a new client website.

What's the client/project name?

You: Johnson's Plumbing

Claude: What industry is this business in?

You: Plumbing and HVAC services

Claude: Does the client have an existing website?

You: Yes, https://johnsonsplumbing.com

Claude: Creating project...
✓ Cloned template
✓ Updated configuration
✓ Installed dependencies
✓ Git initialized

Project ready! Since they have an existing website,
run /tmg-scrape next to extract their content.

You: /tmg-scrape

Claude: Extracting content from johnsonsplumbing.com...
✓ Found 6 pages
✓ Extracted business info
✓ Saved to content/scraped/

Run /tmg-sitemap next to define the new site structure.

[... continues through workflow ...]
```

---

## Support

If you get stuck:
1. Copy the error message
2. Ask Claude: "I got this error: [paste error]. How do I fix it?"
3. Contact Dan if Claude can't resolve it

---

## Updating TMG_BASE

Periodically pull the latest updates:
```bash
cd ~/Documents/TMG_BASE
git pull
```

This ensures you have the latest command improvements.
