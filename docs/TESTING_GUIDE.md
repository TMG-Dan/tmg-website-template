# TMG Website Builder - Setup Guide

A beginner-friendly guide to get started. No terminal experience needed.

---

## Prerequisites

Download and install these first:

| Tool | Download Link | Notes |
|------|---------------|-------|
| **VS Code** | https://code.visualstudio.com | Code editor - just download and install |
| **Node.js** | https://nodejs.org | Click the big green "LTS" button, run installer |
| **Git** | https://git-scm.com | Download for your system, run installer |
| **GitHub Desktop** | https://desktop.github.com | Makes Git easy - no terminal needed |

---

## Step 1: Clone the Commands Repo

This downloads the slash commands to your computer.

1. Open **GitHub Desktop**
2. Click **File** → **Clone Repository**
3. Click the **URL** tab
4. Paste: `https://github.com/TMG-Dan/TMG_BASE.git`
5. For "Local Path", choose your **Documents** folder
6. Click **Clone**

✅ You now have `TMG_BASE` in your Documents folder.

---

## Step 2: Install Claude Code Extension

1. Open **VS Code**
2. Click the **Extensions** icon in the left sidebar (looks like 4 squares)
   - Or press `Cmd+Shift+X` (Mac) / `Ctrl+Shift+X` (Windows)
3. In the search box, type: **Claude Code**
4. Find "Claude Code" by Anthropic and click **Install**
5. After installing, click the **Claude icon** in the left sidebar
6. Follow the prompts to sign in with your Anthropic account

✅ Claude Code is ready to use.

---

## Step 3: Create a New Client Project

### Part A: Create the project folder

**Mac:**
1. Open **Finder**
2. Go to your **Documents** folder
3. Create a new folder called **Projects** (if it doesn't exist)
4. Inside Projects, create a folder with your client's name (e.g., `acme-plumbing`)

**Windows:**
1. Open **File Explorer**
2. Go to your **Documents** folder
3. Create a new folder called **Projects** (if it doesn't exist)
4. Inside Projects, create a folder with your client's name (e.g., `acme-plumbing`)

### Part B: Clone the template into that folder

1. Open **GitHub Desktop**
2. Click **File** → **Clone Repository**
3. Click the **URL** tab
4. Paste: `https://github.com/TMG-Dan/tmg-website-template.git`
5. For "Local Path", click **Choose...** and select the client folder you just created
6. Click **Clone**

### Part C: Install dependencies

1. Open **VS Code**
2. Click **File** → **Open Folder**
3. Navigate to your client project folder (e.g., `Documents/Projects/acme-plumbing`)
4. Click **Open**
5. In VS Code, click **Terminal** → **New Terminal** (a panel opens at the bottom)
6. Type this and press Enter:
   ```
   npm install
   ```
7. Wait for it to finish (you'll see the cursor come back)

✅ Your project is ready.

---

## Step 4: Open Claude

In VS Code (with your project open):

1. Click the **Claude icon** in the left sidebar
2. The Claude chat panel opens

✅ You can now talk to Claude.

---

## Step 5: Use the Slash Commands

Type these commands in the Claude chat, one at a time:

| Command | What it does |
|---------|--------------|
| `/tmg-setup` | Set up project with client name, industry, etc. |
| `/tmg-sitemap` | Choose which pages the site will have |
| `/tmg-designer` | Pick colors and styling |
| `/tmg-content` | Generate text content for pages |
| `/tmg-payload-setup` | Set up the content management system |
| `/tmg-deploy` | Publish the website online |

### Example Conversation

```
You: /tmg-setup

Claude: What's the client name?

You: Acme Plumbing

Claude: What industry?

You: Plumbing services

Claude: Does the client have an existing website?

You: Yes, https://acmeplumbing.com

Claude: ✓ Project configured for Acme Plumbing!
        Run /tmg-sitemap next.

You: /tmg-sitemap

Claude: Based on a plumbing business, I suggest:
        - Home
        - Services
        - About
        - Contact

        Add or remove any pages?

You: Add a Service Areas page

Claude: ✓ Created 5 pages
        ✓ Updated navigation

        Run /tmg-designer next.
```

Just follow Claude's prompts!

---

## How to Preview Your Site

At any point, you can see what the website looks like:

1. In VS Code, click **Terminal** → **New Terminal**
2. Type this and press Enter:
   ```
   npm run dev
   ```
3. Open your web browser and go to: **http://localhost:3000**
4. To stop the preview, click in the terminal and press `Ctrl+C`

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Claude doesn't recognize `/tmg-setup` | Make sure you cloned TMG_BASE in Step 1. Restart VS Code. |
| "npm not found" | Restart VS Code after installing Node.js |
| Website won't load | Make sure `npm run dev` is running in the terminal |
| Errors when building | Copy the error message, paste it to Claude, and ask for help |

---

## Summary

```
1. Clone TMG_BASE         → GitHub Desktop
2. Install Claude Code    → VS Code Extensions
3. Clone template         → GitHub Desktop into new folder
4. Open project           → VS Code
5. Use /tmg-* commands    → Claude chat
```

No terminal expertise required!
