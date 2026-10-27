// QA over the built site: node tools/check.mjs
// Internal links and assets resolve, one <h1> per page, hreflang targets exist, alt text present,
// no em/en dashes in our copy, no leftover placeholders.
import fs from 'node:fs';
import path from 'node:path';

const OUT = path.resolve('wwwroot');
const files = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) walk(p); else if (f.endsWith('.html')) files.push(p); } })(OUT);

const exists = (url) => {
  const u = decodeURI(url.split('#')[0].split('?')[0]);
  if (!u.startsWith('/')) return true;
  const p = path.join(OUT, u);
  return fs.existsSync(p) && (fs.statSync(p).isFile() || fs.existsSync(path.join(p, 'index.html')));
};
const problems = [];
const add = (f, m) => problems.push(`${path.relative(OUT, f)}: ${m}`);
for (const f of files) {
  const html = fs.readFileSync(f, 'utf8');
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) add(f, `${h1} <h1>`);
  for (const [, u] of html.matchAll(/(?:href|src)="([^"]+)"/g)) if (!/^(https?:|mailto:|tel:|#|data:)/.test(u) && !exists(u)) add(f, `broken ${u}`);
  for (const [, set] of html.matchAll(/srcset="([^"]+)"/g)) for (const part of set.split(',')) { const u = part.trim().split(' ')[0]; if (!exists(u)) add(f, `missing ${u}`); }
  for (const [, h] of html.matchAll(/<link rel="alternate" hreflang="[^"]+" href="https:\/\/[^/]+([^"]+)"/g)) if (!exists(h)) add(f, `hreflang target missing ${h}`);
  for (const m of html.matchAll(/<img(?![^>]*\balt=)[^>]*>/g)) add(f, `img without alt ${m[0].slice(0, 60)}`);
  const text = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ');
  // Migrated articles keep the client's own punctuation verbatim; the dash rule applies to our copy.
  if (!f.includes(path.sep + 'articles' + path.sep) && /[–—]/.test(text)) add(f, `dash: ${text.match(/.{0,30}[–—].{0,30}/)[0].trim()}`);
  const ph = text.match(/.{0,30}(\b(?:lorem|ipsum|TODO)\b|\bundefined\b|\bNaN\b|\[object).{0,30}/);
  if (ph) add(f, `placeholder text: ${ph[0].trim()}`);
  if (!/<html lang="(he|en)" dir="(rtl|ltr)">/.test(html)) add(f, 'lang/dir missing');
}
console.log(`${files.length} pages checked, ${problems.length} problems`);
for (const p of problems.slice(0, 60)) console.log(' - ' + p);
process.exitCode = problems.length ? 1 : 0;
