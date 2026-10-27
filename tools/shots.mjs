// Screenshot review helper (dev only).  node tools/shots.mjs <outDir> <base> <path...>
// Takes a mobile (390) and desktop (1440) full-page screenshot of each path.
// PLAYWRIGHT env var points at a playwright package (e.g. the npx cache).
import { createRequire } from 'node:module';
import path from 'node:path';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT);
const [out, base, ...paths] = process.argv.slice(2);
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
const vps = (process.env.VPS || '390x844,1440x900').split(',').map((v) => v.split('x').map(Number));
for (const [w, h] of vps) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: w < 800 ? 2 : 1, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  for (const p of paths) {
    await page.goto(base + p, { waitUntil: 'networkidle' });
    await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); } window.scrollTo(0, 0); });
    await page.waitForLoadState('networkidle');
    await page.evaluate(() => { try { localStorage.setItem('ck', '1'); } catch (e) {} document.getElementById('cookie')?.setAttribute('hidden', ''); });
    const name = (p.replace(/\//g, '_').replace(/^_|_$/g, '') || 'home') + `-${w}`;
    await page.screenshot({ path: path.join(out, name + '.png'), fullPage: process.env.FOLD ? false : true });
  }
  await ctx.close();
}
await browser.close();
console.log('ok');
