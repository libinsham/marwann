# MARWANN Charitable Trust — Next.js (App Router)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure
- `app/(main)/layout.jsx` – root layout: fonts, vendor CSS, spacing.css, main.css, preloader, LegacyScripts
- `app/(main)/(home)` – `/` (home header/footer)
- `app/(main)/(site)` – about, our-story, leadership, timeline, legal-recognition, program-areas, active-campaigns, gallery, donate, crowdfunding, volunteer, events, contact
- `app/(main)/(template)` – leftover demo-template pages (blog, camping, project, services, donations, volunteer-details, be-volunteer) with their own header/footer
- `app/(standalone)/inauguration` – standalone page with its own root layout
- `components/` – SiteHeader (active menu via usePathname), footers, LegacyScripts, PageScript
- `public/assets/` – your original css/, img/, js/, vendor/ folders, unchanged (URLs are now /assets/...)

## How the old JS is handled
jQuery, Bootstrap, Swiper, AOS, Fancybox, PureCounter and assets/js/script.js are loaded by
components/LegacyScripts.jsx and re-initialised after every route change. Each page's inline
<script> (contact, donate, gallery, program-areas, volunteer, inauguration) runs via components/PageScript.jsx.

## Admin panel
1. Copy `.env.local.example` to `.env.local` and set `ADMIN_USERNAME` and `ADMIN_PASSWORD`. The first admin account is created from these on first start.
2. `npm install`, then `npm run dev`, and open http://localhost:3000/admin (also linked as "Admin" in the website footer).
3. Sign in with your username and password. Passwords are stored hashed (scrypt) in the database.
4. **Dashboard**: totals, category breakdown, contact details and latest photos at a glance.
5. **Gallery**: add, edit, hide, reorder and delete photos, or bulk-upload many at once. Uploads are resized and converted to WebP.
6. **Site settings**: top-bar text, email, up to 3 phone numbers and the address (header, footer, Contact page).
7. **Account**: change your password (this signs out any other devices). After the first start, the password in `.env.local` is no longer used.

Content is stored in a **SQLite database**: `data/marwann.db` (gallery and settings tables, created automatically on first run).
Uploaded photos are saved as files in `data/uploads/` and served at `/media/...`.
On the very first run the database is filled from `data/gallery.json` (your existing gallery cards); after that the JSON is no longer used.
Set `DATA_DIR` to a persistent folder in production and **back up the whole folder** (`marwann.db` + `uploads/`).
Inspect the data with any SQLite viewer, e.g. DB Browser for SQLite, or `sqlite3 data/marwann.db`.

**Hosting:** this needs a server with a writable, persistent disk (VPS, Docker volume, Render/Railway disk).
Vercel/Netlify serverless hosting will NOT keep uploads; use a hosted database (e.g. Turso/Postgres) + S3/Cloudinary there instead.
