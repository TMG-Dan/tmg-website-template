# Starting a New Client Project

Quick reference for creating a new website after one-time setup is complete.

> **First time?** See [SETUP_GUIDE.md](SETUP_GUIDE.md) for initial setup.

---

## 1. Create Turso Database

1. Go to https://turso.tech
2. Click **Create Database**
3. Name it after your client (e.g., `acme-plumbing`)
4. Copy the **Database URL** and **Auth Token**

---

## 2. Clone Template

Open terminal and run:

```bash
cd ~/Documents/Projects
git clone https://github.com/TMG-Dan/tmg-website-template.git client-name
cd client-name
git remote remove origin
npm install
```

Replace `client-name` with your actual client name (e.g., `acme-plumbing`).

---

## 3. Configure Environment

1. Copy `.env.example` to `.env.local`
2. Fill in:

```env
PAYLOAD_SECRET=any-random-string-32-chars-or-more
TURSO_DATABASE_URL=libsql://your-db.turso.io
TURSO_AUTH_TOKEN=your-token-here
RESEND_API_KEY=re_your_key
CONTACT_EMAIL=client@business.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 4. Open in VS Code

```bash
code .
```

Click the **Claude icon** in the sidebar.

---

## 5. Run Commands

Type each command, wait for it to finish:

```
/tmg-setup
/tmg-sitemap
/tmg-designer
/tmg-content
/tmg-motion        (optional)
/tmg-payload-setup
/tmg-deploy
```

---

## Preview Anytime

```bash
npm run dev
```

Open http://localhost:3000

---

## Quick Copy-Paste

```bash
# Replace CLIENT_NAME with actual name
cd ~/Documents/Projects
git clone https://github.com/TMG-Dan/tmg-website-template.git CLIENT_NAME
cd CLIENT_NAME
git remote remove origin
npm install
cp .env.example .env.local
code .
```

Then edit `.env.local` and run `/tmg-setup`.
