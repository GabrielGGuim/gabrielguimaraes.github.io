# Gabriel Guimarães — Personal site

> iOS Engineer · 2× WWDC Scholar · Brasília, Brazil

Static personal site, ready to be served from any static host. The current
recommended target is **GitHub Pages** (free, gives you
`gabrielguimaraes.github.io` out of the box, and supports a custom domain
later if you decide to buy one).

---

## 📁 What's in this folder

```
site/
├── index.html         ← main page
├── styles.css         ← theme + layout
├── script.js          ← i18n + interactions
├── 404.html           ← custom 404 page
├── CNAME              ← (optional) custom domain — fill in if you buy one
├── .nojekyll          ← tells GitHub Pages to skip Jekyll (serves files raw)
├── README.md          ← this file
└── assets/
    ├── jobfinder-orig.gif   ← original GIF (5.6 MB, fallback only)
    ├── jobfinder.mp4        ← optimised video (288 KB) ← what the browser loads
    ├── jobfinder.webm       ← optimised video (332 KB) ← what the browser loads
    ├── jobfinder-poster.jpg ← first frame, used as poster / fallback
    ├── avatar.svg           ← (replace with your real photo)
    ├── favicon.svg          ← GG monogram
    └── videos/              ← YouTube thumbnails (replace with real ones)
```

The JobFinder section now uses the real GIF you provided. I converted it to
MP4 + WebM so the page loads **~20× faster** (640 KB total instead of 5.6 MB).
The original GIF is kept as a fallback inside `<video>` for ancient browsers
and as the source of the poster image.

---

## 🚀 Publishing on GitHub Pages (free, with your name)

> Total time: ~10 minutes. Costs: **R$ 0,00**. No Netlify, no Vercel,
> no Cloudflare, nothing. Just GitHub.

### 1. Create the repo

1. Sign in to GitHub as **@GabrielGGuim** (your existing account).
2. Click **+** → **New repository**.
3. Repository name **must** be:
   ```
   gabrielguimaraes.github.io
   ```
   (or `GabrielGGuim.github.io` if you'd rather keep your GitHub handle
   in the URL). This exact name is what unlocks the free `*.github.io`
   subdomain — any other name only gives you an ugly `*.github.io/whatever`
   URL.
4. Visibility: **Public**.
5. Check **Add a README file** (so the repo isn't empty).
6. Click **Create repository**.

### 2. Upload the site files

Two options — pick whichever you prefer:

**Option A — upload via the web (easiest):**
1. On the new repo page, click **Add file** → **Upload files**.
2. Drag the entire contents of this `site/` folder (the files, not the folder
   itself — `index.html`, `styles.css`, `script.js`, `assets/`, etc. should
   land at the root of the repo).
3. Scroll down, click **Commit changes**.

**Option B — push from your terminal (recommended if you code):**
```bash
cd site
git init
git add .
git commit -m "first commit: personal site"
git branch -M main
git remote add origin https://github.com/GabrielGGuim/gabrielguimaraes.github.io.git
git push -u origin main
```

### 3. Turn on GitHub Pages

1. In the repo, go to **Settings** → **Pages** (left sidebar).
2. Under **Source**, choose **Deploy from a branch**.
3. Branch: **main**, folder: **/ (root)**.
4. Click **Save**.

Wait ~1–2 minutes. Your site is now live at:

```
https://gabrielguimaraes.github.io
```

(If you used the username-only variant, it'll be
`https://GabrielGGuim.github.io` instead — pick the one you like.)

### 4. (Optional) Plug a custom `.com` / `.dev` domain

The `*.github.io` URL is free forever, but if you ever want a real
`gabrielguimaraes.com` (or `.dev`, `.me`, `.io`, etc.):

1. **Buy the domain** — cheapest options in BRL:
   - **Porkbun** (porkbun.com) — `.com` around US$ 9 / R$ 45/year, `.dev`
     around US$ 12. Free WHOIS privacy.
   - **Namecheap** (namecheap.com) — similar prices, very popular with devs.
   - **Cloudflare Registrar** (cloudflare.com) — at-cost pricing, no markup,
     `.com` around US$ 9. (Best if you also want to use Cloudflare for DNS
     later — still 100% free for a static site like this.)
2. In your registrar's DNS panel, add the records GitHub tells you to:
   - For `apex` (`gabrielguimaraes.com`): four `A` records pointing to
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
   - For `www`: one `CNAME` record pointing to `gabrielguimaraes.github.io`.
3. Back in GitHub: **Settings → Pages → Custom domain**, type
   `gabrielguimaraes.com` → **Save**. Tick **Enforce HTTPS** once the cert
   provisions (a few minutes).
4. In this `site/` folder, replace the contents of `CNAME` with just:
   ```
   gabrielguimaraes.com
   ```
   and push. (Without this, GitHub won't know which domain to serve.)

---

## 🧪 Test locally before pushing

```bash
cd site
python3 -m http.server 8000
# open http://localhost:8000
```

The site is fully static — no build step, no dependencies, no `node_modules`.
Open `index.html` directly in a browser and it also works (no fetch / CORS
anywhere in the code).

---

## 🛠️ Replacing placeholders

Before you call it done, swap these for real content:

- `assets/avatar.svg` → your real headshot (PNG/JPG works, just change the
  `src` in `index.html`).
- `assets/videos/*.svg` → real YouTube thumbnails. Easiest: grab
  `https://i.ytimg.com/vi/VIDEO_ID/maxresdefault.jpg` and change the `<img src>`
  in `index.html` to `.jpg`.
- `assets/favicon.svg` → optional, replace with anything you like.

---

## 🌍 i18n (EN / PT)

The site ships with a fully translated EN / PT-BR version, switchable from
the top-right of the nav. Choice is persisted in `localStorage` (key:
`gg-lang`) and auto-detected from the browser language on first visit.

To add a new translation string:
1. Add the key in `script.js` under both `I18N.en` and `I18N.pt`.
2. Mark the HTML element with `data-i18n="your.key"` (plain text) or
   `data-i18n-html="your.key"` (when the value contains HTML tags).

---

## 📄 Licence

Code: MIT. Content (text, photos): © Gabriel Guimarães, all rights reserved.
