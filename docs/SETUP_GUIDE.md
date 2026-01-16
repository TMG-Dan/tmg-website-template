# TMG Website Builder - Setup Guide

---

# Part 1: One-Time Setup

Do this once on your computer. Skip if already done.

---

## Step 1: Install the required software

Download and install these three things:

| Software | Download Link | Instructions |
|----------|---------------|--------------|
| **VS Code** | https://code.visualstudio.com | Download, run installer |
| **Node.js** | https://nodejs.org | Click green "LTS" button, run installer |
| **Git** | https://git-scm.com | Download for your system, run installer with defaults |

---

## Step 2: Install Claude Code in VS Code

1. Open **VS Code**
2. Click the **Extensions** icon in the left sidebar (looks like 4 squares)
3. In the search box, type: **Claude Code**
4. Find "Claude Code" by Anthropic
5. Click **Install**
6. After installing, click the **Claude icon** that appears in the left sidebar
7. Sign in with your Anthropic account

✅ **One-time setup complete!**

---

# Part 2: Creating a Client Website

Do these steps for each new website you build.

---

## Step 1: Create a folder for the client

**Mac:**
- Open **Finder**
- Go to **Documents**
- Create a folder called **Projects** (if it doesn't exist)
- Inside Projects, create a folder with the client name (e.g. `acme-plumbing`)

**Windows:**
- Open **File Explorer**
- Go to **Documents**
- Create a folder called **Projects** (if it doesn't exist)
- Inside Projects, create a folder with the client name (e.g. `acme-plumbing`)

---

## Step 2: Clone the website template

1. Open **VS Code**
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows)
3. Type **Git: Clone** and select it
4. Paste: `https://github.com/TMG-Dan/tmg-website-template.git`
5. Select the client folder you just created
6. When asked "Open cloned repository?" click **Open**

---

## Step 3: Install dependencies

1. In VS Code, click **Terminal** in the top menu
2. Click **New Terminal**
3. A panel opens at the bottom. Type this and press Enter:
```
npm install
```
4. Wait for it to finish (takes 1-2 minutes)

---

## Step 4: Open Claude

1. Look at the left sidebar in VS Code
2. Click the **Claude icon** (it looks like the Claude logo)
3. A chat panel opens on the right side
4. This is where you'll type commands

---

## Step 5: Run the commands

Type each command in the Claude chat, one at a time. Wait for each to finish before typing the next.

**Command 1:**
```
/tmg-setup
```
Claude will ask for client name, industry, etc. Answer the questions.

**Command 2:**
```
/tmg-sitemap
```
Claude will ask what pages you want. Answer, wait for it to finish.

**Command 3:**
```
/tmg-designer
```
Claude will ask about colors and style. Answer, wait for it to finish.

**Command 4:**
```
/tmg-content
```
Claude will generate content for the pages. Wait for it to finish.

**Command 5:**
```
/tmg-payload-setup
```
Claude will set up the CMS. Wait for it to finish.

**Command 6:**
```
/tmg-deploy
```
Claude will publish the website online.

---

## How to Preview the Website

You can preview the site at any point:

1. In VS Code, click **Terminal** → **New Terminal**
2. Type: `npm run dev` and press Enter
3. Open your web browser
4. Go to: **http://localhost:3000**
5. To stop the preview: click in the terminal and press `Ctrl+C`

---

# Quick Reference Card

## One-Time Setup
1. Install VS Code, Node.js, Git
2. Install Claude Code extension in VS Code

## Per Project
1. Create client folder in Documents/Projects
2. VS Code → `Cmd+Shift+P` → Git: Clone → paste template URL
3. Terminal → `npm install`
4. Click Claude icon in sidebar
5. Type `/tmg-setup`
6. Type `/tmg-sitemap`
7. Type `/tmg-designer`
8. Type `/tmg-content`
9. Type `/tmg-payload-setup`
10. Type `/tmg-deploy`

---

# Troubleshooting

| Problem | Solution |
|---------|----------|
| Can't find Claude icon | Make sure you installed Claude Code extension (Part 1, Step 2) |
| "Git: Clone" doesn't appear | Install Git and restart VS Code |
| "npm not found" | Install Node.js and restart VS Code |
| Commands like `/tmg-setup` don't work | Make sure you cloned the template (Part 2, Step 2). The commands are included in the template. |
| Website won't load at localhost:3000 | Make sure `npm run dev` is running in the terminal |
