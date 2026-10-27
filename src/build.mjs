// Static build: node src/build.mjs   (INDEX=1 for the production, indexable build)
// Writes HTML for every route in Hebrew and English into wwwroot/, plus sitemap, robots, _headers, _redirects.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { ROOT, href } from './lib.mjs';
import { SITE } from './copy.mjs';
import { layout } from './layout.mjs';
import { home, projectsHub, project, urban } from './pages/main.mjs';
import { about, residents, contact, careers, news, articlesHub, article } from './pages/more.mjs';
import { privacy, accessibility, legal, notFound } from './pages/legal.mjs';

const OUT = path.join(ROOT, 'wwwroot');
const read = (p) => JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'));
const projects = read('src/content/projects.json');
const articles = read('src/content/articles.json');
const redirects = read('src/content/redirects.json');
const build = { index: process.env.INDEX === '1' || process.argv.includes('--index') };

const minCss = (s) => s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ').replace(/\s*([{}:;,>])\s*/g, '$1').replace(/;}/g, '}').trim();
const css = minCss(fs.readFileSync(path.join(ROOT, 'src/assets/site.css'), 'utf8'));
const emit = (name, src) => {
  const code = fs.readFileSync(path.join(ROOT, 'src/assets', src), 'utf8');
  const hash = crypto.createHash('sha1').update(code).digest('hex').slice(0, 8);
  const dir = path.join(OUT, 'assets/js');
  fs.mkdirSync(dir, { recursive: true });
  for (const f of fs.readdirSync(dir)) if (f.startsWith(name + '.') && f !== `${name}.${hash}.js`) fs.unlinkSync(path.join(dir, f));
  fs.writeFileSync(path.join(dir, `${name}.${hash}.js`), code);
  return `/assets/js/${name}.${hash}.js`;
};
const ctx = { css, js: emit('site', 'site.js'), a11y: emit('a11y', 'a11y.js'), build, projects };

const pages = [];
for (const L of ['he', 'en']) {
  pages.push([L, home(L, ctx)], [L, projectsHub(L, ctx)], [L, urban(L)], [L, about(L)], [L, residents(L, ctx)],
    [L, contact(L)], [L, careers(L)], [L, news(L)], [L, privacy(L)], [L, accessibility(L)], [L, legal(L)]);
  for (const p of projects) pages.push([L, project(p, L, ctx)]);
}
pages.push(['he', articlesHub(articles)]);
for (const a of articles) pages.push(['he', article(a)]);

let count = 0;
for (const [L, page] of pages) {
  const html = layout({ ...page, L }, ctx);
  const file = path.join(OUT, href(L, page.path), 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  count++;
}
for (const L of ['he', 'en']) {
  const html = layout({ ...notFound(L), L, noAlt: true, altFallback: '/', notFound: true }, ctx).replace('<meta name="robots" content="noindex, nofollow">\n', '').replace('<head>', '<head>\n<meta name="robots" content="noindex">');
  fs.writeFileSync(path.join(OUT, L === 'he' ? '404.html' : 'en/404.html'), html);
}

// sitemap with hreflang pairs
const urls = pages.map(([L, p]) => {
  const loc = SITE.origin + href(L, p.path);
  const alt = p.noAlt ? '' : ['he', 'en'].map((x) => `<xhtml:link rel="alternate" hreflang="${x}" href="${SITE.origin + href(x, p.path)}"/>`).join('');
  return `<url><loc>${loc}</loc>${alt}</url>`;
});
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\n${build.index ? 'Allow: /' : 'Allow: /\n# Preview build: pages carry noindex until approved for production.'}\n\nSitemap: ${SITE.origin}/sitemap.xml\n`);

fs.writeFileSync(path.join(OUT, '_headers'), `/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: SAMEORIGIN
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Strict-Transport-Security: max-age=31536000
${build.index ? '' : '  X-Robots-Tag: noindex, nofollow\n'}
/assets/js/*
  Cache-Control: public, max-age=31536000, immutable
/assets/fonts/*
  Cache-Control: public, max-age=31536000, immutable
/assets/img/*
  Cache-Control: public, max-age=2592000, stale-while-revalidate=604800
/assets/brand/*
  Cache-Control: public, max-age=2592000, stale-while-revalidate=604800
`);

// Old WordPress URLs -> new routes. Old links used lower-case percent-encoding, browsers send upper-case: emit both.
const seen = new Set();
const lines = [];
for (const r of redirects) {
  const enc = encodeURI(r.from.normalize('NFC'));
  for (const v of new Set([enc, enc.replace(/%[0-9A-F]{2}/g, (m) => m.toLowerCase())])) {
    for (const from of new Set([v, v.endsWith('/') ? v.slice(0, -1) : v + '/'])) {
      if (from === '/' || from === '' || seen.has(from) || from === r.to) continue;
      seen.add(from); lines.push(`${from} ${r.to} 301`);
    }
  }
}
fs.writeFileSync(path.join(OUT, '_redirects'), lines.join('\n') + '\n');

console.log(`built ${count} pages (+2 404s), ${lines.length} redirects, index=${build.index}`);
