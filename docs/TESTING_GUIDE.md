# TMG Website Builder - Setup Guide

---

## Install These First (One Time Only)

| Tool | Download | What to do |
|------|----------|------------|
| **VS Code** | https://code.visualstudio.com | Download, install, open it |
| **Node.js** | https://nodejs.org | Click green "LTS" button, install |
| **Git** | https://git-scm.com | Download for your system, install with defaults |

---

## One-Time Setup

Do this once before your first project.

### 1. Open VS Code

### 2. Clone the commands repo
- Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows)
- Type **Git: Clone** and select it
- Paste: `https://github.com/TMG-Dan/TMG_BASE.git`
- Select your **Documents** folder
- Click **No** when asked to open it

### 3. Install Claude Code extension
- Click the **Extensions** icon (4 squares) in the left sidebar
- Search: **Claude Code**
- Click **Install**
- Click the **Claude icon** in the sidebar
- Sign in with your Anthropic account

✅ **Setup complete.** You only do the above once.

---

## Starting a New Client Project

Do this for each new website.

---

### Step 1: Create a folder for the client

**Mac:** Open Finder → Documents → Create folder called `Projects` → Inside that, create folder with client name (e.g. `acme-plumbing`)

**Windows:** Open File Explorer → Documents → Create folder called `Projects` → Inside that, create folder with client name (e.g. `acme-plumbing`)

---

### Step 2: Clone the template into that folder

1. Open **VS Code**
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows)
3. Type **Git: Clone** and select it
4. Paste: `https://github.com/TMG-Dan/tmg-website-template.git`
5. Select the client folder you just made
6. Click **Open** when asked

---

### Step 3: Install dependencies

1. In VS Code, click **Terminal** → **New Terminal**
2. Type this and press Enter:
```
npm install
```
3. Wait for it to finish (takes 1-2 minutes)

---

### Step 4: Open Claude

1. Click the **Claude icon** in the left sidebar of VS Code
2. A chat panel opens - this is where you talk to Claude

---

### Step 5: Type the first command

In the Claude chat, type:
```
/tmg-setup
```

Claude will ask you questions. Answer them:
- Client name → e.g. "Acme Plumbing"
- Industry → e.g. "Plumbing"
- Existing website → e.g. "https://acmeplumbing.com" or "No"

---

### Step 6: Continue with the other commands

After `/tmg-setup` finishes, type each command one at a time:

```
/tmg-sitemap
```
↳ Claude asks what pages you want. Answer, then:

```
/tmg-designer
```
↳ Claude asks about colors/style. Answer, then:

```
/tmg-content
```
↳ Claude generates the page content, then:

```
/tmg-payload-setup
```
↳ Claude sets up the CMS, then:

```
/tmg-deploy
```
↳ Claude publishes the site online

---

## To Preview the Website

At any point, you can see what it looks like:

1. Click **Terminal** → **New Terminal** in VS Code
2. Type: `npm run dev`
3. Open browser to **http://localhost:3000**
4. To stop: Press `Ctrl+C` in the terminal

---

## Quick Reference

| Step | What to do |
|------|------------|
| 1 | Create folder for client |
| 2 | VS Code → Git: Clone → paste template URL → select folder |
| 3 | Terminal → `npm install` |
| 4 | Click Claude icon in sidebar |
| 5 | Type `/tmg-setup` in Claude chat |
| 6 | Type `/tmg-sitemap` |
| 7 | Type `/tmg-designer` |
| 8 | Type `/tmg-content` |
| 9 | Type `/tmg-payload-setup` |
| 10 | Type `/tmg-deploy` |

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| "Git: Clone" doesn't appear | Install Git, restart VS Code |
| "npm not found" | Install Node.js, restart VS Code |
| Commands not recognized | Make sure TMG_BASE was cloned in one-time setup |
| Site won't load | Make sure `npm run dev` is running |
