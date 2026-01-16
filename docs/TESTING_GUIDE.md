# TMG Website Builder - Setup & Testing Guide

Simple 5-step process to get started.

---

## Prerequisites

Install these first if you don't have them:

| Tool | Mac Install | Windows Install |
|------|-------------|-----------------|
| **VS Code** | https://code.visualstudio.com | https://code.visualstudio.com |
| **Node.js** | https://nodejs.org (LTS) | https://nodejs.org (LTS) |
| **Git** | `xcode-select --install` | https://git-scm.com/download/win |
| **GitHub CLI** | `brew install gh` | `winget install GitHub.cli` |

After installing, authenticate GitHub:
```bash
gh auth login
```

---

## Step 1: Clone the Repo with Commands

This repo contains all the `/tmg-*` slash commands.

**Mac:**
```bash
cd ~/Documents
git clone https://github.com/TMG-Dan/TMG_BASE.git
```

**Windows:**
```cmd
cd %USERPROFILE%\Documents
git clone https://github.com/TMG-Dan/TMG_BASE.git
```

---

## Step 2: Install Claude Code Extension

1. Open VS Code
2. Go to Extensions (`Cmd+Shift+X` on Mac / `Ctrl+Shift+X` on Windows)
3. Search for **"Claude Code"**
4. Click **Install**
5. Click the Claude icon in sidebar and sign in

---

## Step 3: Clone the Template

Create a new project folder and clone the website template.

**Mac:**
```bash
mkdir -p ~/Projects/my-client-website
cd ~/Projects/my-client-website
git clone https://github.com/TMG-Dan/tmg-website-template.git .
rm -rf .git
npm install
```

**Windows:**
```cmd
mkdir %USERPROFILE%\Projects\my-client-website
cd %USERPROFILE%\Projects\my-client-website
git clone https://github.com/TMG-Dan/tmg-website-template.git .
rmdir /s /q .git
npm install
```

---

## Step 4: Open in VS Code & Start Claude

```bash
code .
```

Then in VS Code:
- Click the **Claude icon** in the left sidebar
- Or press `Cmd+Shift+P` (Mac) / `Ctrl+Shift+P` (Windows) → "Claude: Open Panel"

---

## Step 5: Use the Slash Commands

Now use the commands in order:

| Command | What it does |
|---------|--------------|
| `/tmg-setup` | Configure project for your client (name, industry, etc.) |
| `/tmg-sitemap` | Define pages and navigation |
| `/tmg-designer` | Set colors and styling |
| `/tmg-content` | Generate page content |
| `/tmg-payload-setup` | Configure CMS collections |
| `/tmg-deploy` | Push to GitHub + deploy to Vercel |

### Example Session

```
You: /tmg-setup

Claude: What's the client name?
You: Acme Plumbing

Claude: What industry?
You: Plumbing services

Claude: Existing website URL?
You: https://acmeplumbing.com

Claude: ✓ Project configured for Acme Plumbing

You: /tmg-sitemap

Claude: I suggest these pages:
- Home
- Services
- About
- Contact

Add or remove any?

You: Add a Service Areas page

Claude: ✓ Created 5 pages
✓ Updated navigation

You: /tmg-designer

Claude: Provide a Webflow template URL for reference, or describe the style you want.

You: Professional, blue and white, clean

Claude: ✓ Updated colors and styling

[continue with other commands...]
```

---

## Verify It's Working

At any point, test the site:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

Press `Ctrl+C` to stop.

---

## Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Commands not recognized | Make sure TMG_BASE is cloned and VS Code is restarted |
| `npm` not found | Install Node.js from https://nodejs.org |
| `gh` not found | Install GitHub CLI (see Prerequisites) |
| Port 3000 in use | Run `npm run dev -- -p 3001` |
| Build errors | Paste error to Claude and ask for help |

---

## Summary

```
1. Clone TMG_BASE         → Gets you the slash commands
2. Install Claude Code    → VS Code extension
3. Clone template         → Start a new project
4. Open Claude            → In VS Code sidebar
5. Use /tmg-* commands    → Build the site
```

That's it!
