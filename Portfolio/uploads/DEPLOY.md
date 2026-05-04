# Deploying your portfolio — pick one path

You have a complete, working portfolio site in this folder (`portfolio/`).
It's also packaged as `portfolio_site.zip` (one folder up, in `Job Search/`).
Deploy it to get a public link you can share with employers.

---

## Option A — Netlify Drop (fastest, ~30 seconds, no signup required)

This is the recommended path if you want a link RIGHT NOW.

1. Open https://app.netlify.com/drop in your browser.
2. Drag the `portfolio_deploy/` folder from inside `portfolio_site.zip` onto the page.
   (Unzip the file first; drag the inner folder, not the zip.)
3. Wait ~10 seconds. You'll get a live URL like `https://random-name-12345.netlify.app`.
4. Click "Site settings" → "Change site name" to rename it to something like
   `siddhartha-baniya-portfolio.netlify.app`.
5. Optionally create a free Netlify account so the site stays up permanently
   (anonymous Netlify Drop sites are sometimes pruned after ~24 hours).

That's it. Use the URL on resumes, applications (Reason Brand, Wrist Aficionado, etc.),
and LinkedIn.

---

## Option B — GitHub Pages (more permanent, ~5 minutes)

Best if you want a clean URL like `sidis9.github.io` and a place to keep the site
under version control.

1. Go to https://github.com/new and create a new public repo named exactly:
   `sidis9.github.io` (must match your GitHub username).
2. On the repo page, click "Add file" → "Upload files".
3. Open `portfolio_site.zip` on your computer and unzip it. Inside is a folder
   called `portfolio_deploy/`. Drag the **contents** of that folder (not the
   folder itself) into the GitHub upload area:
   - `index.html`
   - the `projects/` folder
   - the `resume/` folder
4. Scroll down, write a commit message ("Initial portfolio"), click "Commit changes".
5. Go to repo Settings → Pages.
6. Under "Source," select "Deploy from a branch", branch = `main`, folder = `/ (root)`.
   Click Save.
7. Wait 1–2 minutes. Your portfolio will be live at https://sidis9.github.io.

---

## Updating your portfolio later

- **Netlify:** open the same site dashboard, drag a new copy of the folder. Updates instantly.
- **GitHub:** edit files in the repo (or upload new versions). Changes go live in ~1 min.

---

## What's inside

```
portfolio/
├── index.html              ← the homepage
├── projects/               ← case studies as PDFs
│   ├── mala-pasal.pdf
│   ├── fintech-growth.pdf
│   ├── crew-behavioral.pdf
│   ├── customer-analytics.pdf
│   ├── huckberry-retention.pdf
│   └── gorloks-research.pdf
└── resume/
    ├── Siddhartha_Baniya_Resume.pdf
    └── Siddhartha_Baniya_Resume.docx
```

To swap in a newer resume, replace the files in `resume/` with the same filenames
(or update the `<a href>` links in `index.html` lines ~167 and at the bottom of the page).

---

## After it's live

1. Add the URL to your LinkedIn (Edit profile → Contact info → Website).
2. Add the URL to your resume contact line, replacing or adjacent to the GitHub link.
3. Share it on the next application that asks for a portfolio (e.g. Reason Brand).
