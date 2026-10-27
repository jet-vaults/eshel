# eshel

## Status

| | |
|---|---|
| **Domain** | `https://new.eshelltd.co.il` |
| **Pages URL** | `https://eshel.pages.dev` |
| **Storage mode** | `Standard` (`standard`) |
| **Storage account** | `jetvaults` |
| **Public storage** | `https://jetvaults.blob.core.windows.net/eshel/` |
| **Private storage** | `https://jetvaults.blob.core.windows.net/eshel-private/` |
| **Public container** | `eshel` |
| **Private container** | `eshel-private` |
| **Activated** | Yes |

## CNAME

Create this DNS record with your DNS provider:

| Type | Name | Value |
|------|------|-------|
| CNAME | `new.eshelltd.co.il` | `eshel.pages.dev` |

After DNS propagates, Cloudflare Pages will validate the custom domain and issue SSL. You do not need to run the Activate Site workflow for CNAME sites.

## Development

Only the `wwwroot/` directory is served, and it is **generated**: edit `src/`, then rebuild. Push to `main` and Cloudflare Pages auto-deploys (no build step runs on Cloudflare; the built `wwwroot/` is committed).

```text
src/
  build.mjs            routes, sitemap, robots, _headers, _redirects
  layout.mjs           document shell, header, footer
  lib.mjs              helpers: <picture>, forms, tiles, click-to-load video/map
  copy.mjs             site-wide facts, UI strings (he/en), press list
  pages/               page templates (main, more, legal)
  content/projects.json   one entry per project, localised fields
  content/articles.json   migrated Hebrew articles
  content/redirects.json  old WordPress URLs -> new routes
  content/media.json      which source image becomes which media id
  assets/              site.css (inlined at build), site.js, a11y.js
tools/
  images.py            AVIF + WebP variants (480-1920px) with real dimensions
  check.mjs            QA: links, assets, h1, hreflang, alt text, dashes, placeholders
  select_media.py      one-off image selection from the crawl (_source/, not committed)
```

Commands (Node 20+, Python 3.11+ with Pillow; no npm install needed):

```sh
npm run build        # preview build: every page noindex + X-Robots-Tag
npm run build:prod   # production build: indexable (use only after approval)
npm run check        # QA over wwwroot/
npm run images       # regenerate image variants after changing src/content/media.json
npm run serve        # http://127.0.0.1:8787
```

### Adding or editing a project

Edit `src/content/projects.json` (Hebrew and English fields side by side). Images are `<slug>-0` (hero) to `<slug>-<n-1>`; add their sources to `src/content/media.json`, run `npm run images`, set `"images": n`, then `npm run build`.

### Forms

Forms post to Web3Forms. Put the access key in `SITE.form.key` in `src/copy.mjs` and rebuild. Until a key is set, forms validate and then show the office phone and email instead of failing.

### Going live (production)

1. Get the content in `CONTENT_REVIEW.md` approved.
2. Set `SITE.origin` in `src/copy.mjs` to the final domain (e.g. `https://eshelltd.co.il`).
3. `npm run build:prod && npm run check`, commit, push to `main`.
4. Point the domain at this Pages project (see the CNAME section above, or the apex/nameserver flow for `eshelltd.co.il`).
5. The `_redirects` file already maps every old WordPress URL to its new page (301).
