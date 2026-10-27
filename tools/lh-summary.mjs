// Summarise Lighthouse JSON reports: node tools/lh-summary.mjs <dir>
import fs from 'node:fs';
import path from 'node:path';
const dir = process.argv[2];
const rows = [];
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.report.json')).sort()) {
  const r = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  const c = r.categories, a = r.audits;
  const seo = c.seo;
  // SEO score recomputed without the single noindex-driven audit (preview only).
  const refs = seo.auditRefs.filter((x) => x.weight > 0 && x.id !== 'is-crawlable');
  const w = refs.reduce((s, x) => s + x.weight, 0);
  const seoNoCrawl = Math.round((refs.reduce((s, x) => s + x.weight * (a[x.id].score ?? 1), 0) / w) * 100);
  rows.push({
    page: f.replace('.report.json', ''),
    perf: Math.round(c.performance.score * 100), a11y: Math.round(c.accessibility.score * 100),
    bp: Math.round(c['best-practices'].score * 100), seo: Math.round(seo.score * 100), seoExNoindex: seoNoCrawl,
    FCP: a['first-contentful-paint'].displayValue, LCP: a['largest-contentful-paint'].displayValue,
    TBT: a['total-blocking-time'].displayValue, CLS: a['cumulative-layout-shift'].displayValue, SI: a['speed-index'].displayValue,
    lcpEl: (a['largest-contentful-paint-element']?.details?.items?.[0]?.items?.[0]?.node?.nodeLabel || '').slice(0, 40),
  });
}
console.table(rows);
fs.writeFileSync(path.join(dir, 'summary.json'), JSON.stringify(rows, null, 1));
