# TMG Website Builder - Setup Guide

A beginner-friendly guide to get started.

---

## Prerequisites

Download and install these:

| Tool | Download Link | Notes |
|------|---------------|-------|
| **VS Code** | https://code.visualstudio.com | Code editor |
| **Node.js** | https://nodejs.org | Click the green "LTS" button |
| **Git** | https://git-scm.com | Required for cloning - just install with defaults |

**Note:** After installing Git, restart VS Code if it was open.

---

## Step 1: Clone the Commands Repo

This downloads the slash commands to your computer.

1. Open **VS Code**
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows)
3. Type **"Git: Clone"** and select it
4. Paste this URL: `https://github.com/TMG-Dan/TMG_BASE.git`
5. Choose your **Documents** folder as the location
6. When asked "Open cloned repository?", click **No** (we'll use it later)

✅ You now have `TMG_BASE` in your Documents folder.

---

## Step 2: Install Claude Code Extension

1. In VS Code, click the **Extensions** icon in the left sidebar (looks like 4 squares)
2. Search for: **Claude Code**
3. Click **Install**
4. Click the **Claude icon** in the left sidebar
5. Sign in with your Anthropic account

✅ Claude Code is ready.

---

## Step 3: Create a New Client Project

### Part A: Create the project folder

**Mac:**
1. Open **Finder**
2. Go to **Documents**
3. Create a folder called **Projects** (if it doesn't exist)
4. Inside Projects, create a folder with your client's name (e.g., `acme-plumbing`)

**Windows:**
1. Open **File Explorer**
2. Go to **Documents**
3. Create a folder called **Projects** (if it doesn't exist)
4. Inside Projects, create a folder with your client's name (e.g., `acme-plumbing`)

### Part B: Clone the template

1. In VS Code, press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows)
2. Type **"Git: Clone"** and select it
3. Paste: `https://github.com/TMG-Dan/tmg-website-template.git`
4. Select the client folder you just created (e.g., `acme-plumbing`)
5. When asked "Open cloned repository?", click **Open**

### Part C: Install dependencies

1. In VS Code, click **Terminal** → **New Terminal**
2. Type this and press Enter:
   ```
   npm install
   ```
3. Wait for it to finish

✅ Your project is ready.

---

## Step 4: Open Claude

1. Click the **Claude icon** in the left sidebar
2. The chat panel opens

✅ You can now talk to Claude.

---

## Step 5: Use the Slash Commands

Type these commands in order:

| Command | What it does |
|---------|--------------|
| `/tmg-setup` | Configure project for client |
| `/tmg-sitemap` | Choose pages |
| `/tmg-designer` | Pick colors and styling |
| `/tmg-content` | Generate content |
| `/tmg-payload-setup` | Set up CMS |
| `/tmg-deploy` | Publish online |

### Example

```
You: /tmg-setup

Claude: What's the client name?
You: Acme Plumbing

Claude: What industry?
You: Plumbing

Claude: ✓ Configured! Run /tmg-sitemap next.
```

Follow Claude's prompts!

---

## Preview Your Site

1. In VS Code, click **Terminal** → **New Terminal**
2. Type:
   ```
   npm run dev
   ```
3. Open browser to: **http://localhost:3000**
4. Press `Ctrl+C` in terminal to stop

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "Git: Clone" not showing | Install Git from https://git-scm.com and restart VS Code |
| Commands not recognized | Restart VS Code |
| "npm not found" | Restart VS Code after installing Node.js |
| Site won't load | Make sure `npm run dev` is running |

---

## Summary

```
1. Clone TMG_BASE      → VS Code: Git Clone
2. Install Claude Code → VS Code Extensions
3. Create folder       → Finder / File Explorer
4. Clone template      → VS Code: Git Clone
5. npm install         → VS Code Terminal
6. Use /tmg-* commands → Claude chat
```
