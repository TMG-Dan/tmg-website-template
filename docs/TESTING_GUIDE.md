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

## Step 2: Create Required Accounts

Create free accounts on these services (one-time only):

| Service | URL | Purpose | What You Need |
|---------|-----|---------|---------------|
| **Anthropic** | https://console.anthropic.com | Claude Code AI assistant | Email signup |
| **GitHub** | https://github.com | Code hosting & version control | Email signup |
| **Vercel** | https://vercel.com | Website hosting | Sign up with GitHub |
| **Turso** | https://turso.tech | Database | Sign up with GitHub |
| **Resend** | https://resend.com | Email delivery | Email signup |

**After creating accounts, get these API keys:**

1. **Turso**: Go to Dashboard → Create Database → Copy the database URL and auth token
2. **Resend**: Go to API Keys → Create API Key → Copy the key

Save these somewhere safe - you'll need them for each project.

---

## Step 3: Install Claude Code in VS Code

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

## Step 1: Create a Turso Database

For each new client project, create a new database:

1. Go to https://turso.tech and log in
2. Click **Create Database**
3. Name it after your client (e.g., `acme-plumbing`)
4. Choose a region close to your client's audience
5. Copy the **Database URL** and **Auth Token** - you'll need these later

---

## Step 2: Create a folder for the client

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

## Step 3: Clone the website template

1. Open **VS Code**
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows)
3. Type **Git: Clone** and select it
4. Paste: `https://github.com/TMG-Dan/tmg-website-template.git`
5. Select the client folder you just created
6. When asked "Open cloned repository?" click **Open**

---

## Step 4: Install dependencies

1. In VS Code, click **Terminal** in the top menu
2. Click **New Terminal**
3. A panel opens at the bottom. Type this and press Enter:
```
npm install
```
4. Wait for it to finish (takes 1-2 minutes)

---

## Step 5: Configure Environment Variables

1. In the project folder, find the file `.env.example`
2. Copy it and rename the copy to `.env.local`
3. Open `.env.local` and fill in your values:

```
PAYLOAD_SECRET=make-up-a-long-random-string-here
TURSO_DATABASE_URL=paste-your-turso-url-here
TURSO_AUTH_TOKEN=paste-your-turso-token-here
RESEND_API_KEY=paste-your-resend-key-here
CONTACT_EMAIL=client@theirbusiness.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Step 6: Open Claude

1. Look at the left sidebar in VS Code
2. Click the **Claude icon** (it looks like the Claude logo)
3. A chat panel opens on the right side
4. This is where you'll type commands

---

## Step 7: Run the commands

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

**Command 5 (Optional):**
```
/tmg-motion
```
Claude will ask what animation style you want (subtle, moderate, or dynamic) and apply scroll-triggered animations to all sections.

**Command 6:**
```
/tmg-payload-setup
```
Claude will set up the CMS. Wait for it to finish.

**Command 7:**
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
2. Create accounts: Anthropic, GitHub, Vercel, Turso, Resend
3. Install Claude Code extension in VS Code

## Per Project
1. Create new database in Turso dashboard
2. Create client folder in Documents/Projects
3. VS Code → `Cmd+Shift+P` → Git: Clone → paste template URL
4. Terminal → `npm install`
5. Copy `.env.example` to `.env.local` and fill in values
6. Click Claude icon in sidebar
7. Type `/tmg-setup`
8. Type `/tmg-sitemap`
9. Type `/tmg-designer`
10. Type `/tmg-content`
11. Type `/tmg-motion` (optional - adds animations)
12. Type `/tmg-payload-setup`
13. Type `/tmg-deploy`

---

# Troubleshooting

| Problem | Solution |
|---------|----------|
| Can't find Claude icon | Make sure you installed Claude Code extension (Part 1, Step 3) |
| "Git: Clone" doesn't appear | Install Git and restart VS Code |
| "npm not found" | Install Node.js and restart VS Code |
| Commands like `/tmg-setup` don't work | Make sure you cloned the template (Part 2, Step 3). The commands are included in the template. |
| Website won't load at localhost:3000 | Make sure `npm run dev` is running in the terminal |
| Database connection error | Check your `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN` in `.env.local` |
| "PAYLOAD_SECRET must be provided" | Make sure you created `.env.local` and set `PAYLOAD_SECRET` |
| Emails not sending | Check your `RESEND_API_KEY` is correct and domain is verified in Resend |

---

# Required Accounts Summary

| Service | Free Tier | Used For |
|---------|-----------|----------|
| **Anthropic** | Pay as you go | Claude Code assistant |
| **GitHub** | Unlimited public repos | Code storage |
| **Vercel** | Hobby plan (free) | Website hosting |
| **Turso** | 500 databases, 9GB | Database |
| **Resend** | 3,000 emails/month | Contact form emails |
