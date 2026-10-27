import fs from 'node:fs';
import path from 'node:path';
import { SITE, T, FORM, STATUS } from './copy.mjs';

export const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1')), '..');
const MEDIA = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/content/media.out.json'), 'utf8'));

export const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
/** Pick the language variant of a {he, en} value (plain strings pass through). */
export const t = (v, L) => (v && typeof v === 'object' && ('he' in v || 'en' in v) ? v[L] ?? v.he : v ?? '');
/** Localised path: '/about/' -> '/en/about/' for English. */
export const href = (L, p) => (L === 'en' ? '/en' + (p === '/' ? '/' : p) : p);
export const other = (L) => (L === 'he' ? 'en' : 'he');
export const telHref = (n) => 'tel:' + String(n).replace(/[^\d*+#]/g, '');
export const hasMedia = (id) => !!MEDIA[id];

/** Responsive <picture>: AVIF + WebP at every generated width, real dimensions, lazy unless eager. */
export function picture(id, { alt = '', sizes = '100vw', eager = false, cls = '', reveal = false } = {}) {
  const m = MEDIA[id];
  if (!m) throw new Error('Unknown media id: ' + id);
  const set = (ext) => m.widths.map((w) => `/assets/img/${id}-${w}.${ext} ${w}w`).join(', ');
  const fallbackW = m.widths.find((w) => w >= 1080) || m.widths[m.widths.length - 1];
  const h = Math.round((m.h * m.widths[m.widths.length - 1]) / m.w);
  return `<picture${cls ? ` class="${cls}"` : ''}${reveal ? ' data-reveal' : ''}>` +
    `<source type="image/avif" srcset="${set('avif')}" sizes="${sizes}">` +
    `<source type="image/webp" srcset="${set('webp')}" sizes="${sizes}">` +
    `<img src="/assets/img/${id}-${fallbackW}.webp" width="${m.widths[m.widths.length - 1]}" height="${h}" alt="${esc(alt)}"` +
    (eager ? ' fetchpriority="high" decoding="async"' : ' loading="lazy" decoding="async"') + `></picture>`;
}
/** <link rel=preload> for the page's LCP image. */
export function preload(id, sizes) {
  const m = MEDIA[id];
  const set = m.widths.map((w) => `/assets/img/${id}-${w}.avif ${w}w`).join(', ');
  return `<link rel="preload" as="image" type="image/avif" imagesrcset="${set}" imagesizes="${sizes}" fetchpriority="high">`;
}
export const largest = (id) => { const m = MEDIA[id]; return `/assets/img/${id}-${m.widths.find((w) => w >= 1080) || m.widths.at(-1)}.webp`; };

/** Approximate figures are stored as '~250'. Hebrew reads 'כ-250'; English gets a small 'c.' prefix. */
export const fig = (v, L) => (String(v).startsWith('~') ? (L === 'he' ? 'כ-' + esc(String(v).slice(1)) : `<span class="approx">c.</span>${esc(String(v).slice(1))}`) : esc(v));

export const statusTag = (s, L) => `<span class="st st--${s}">${esc(t(STATUS[s], L))}</span>`;

/** A project tile, used on the home page, the hub and as related projects. */
export function tile(p, L, { sizes = '(max-width:600px) 100vw, (max-width:1000px) 50vw, 33vw', heading = 'h3', extra = '' } = {}) {
  const link = href(L, `/projects/${p.slug}/`);
  const img = p.images
    ? `<div class="tile-img" data-reveal>${picture(`${p.slug}-0`, { alt: `${t(p.name, L)}, ${t(p.city, L)}`, sizes })}</div>`
    : `<div class="tile-blank" aria-hidden="true"><span>${esc(t(p.name, L))}</span><small>${esc(t(p.city, L))}</small></div>`;
  return `<article class="tile" data-status="${p.status}"${extra}>${img}` +
    `<div class="tile-meta">${statusTag(p.status, L)}<span>${esc(t(p.city, L))}</span></div>` +
    `<${heading} class="tile-name"><a href="${link}">${esc(t(p.name, L))}</a></${heading}>` +
    `<p class="tile-sub">${esc(t(p.summary, L))}</p>` +
    (p.note ? `<p class="tile-note">${esc(t(p.note, L))}</p>` : '') + `</article>`;
}

/** Contact/lead form. `fields` adds page-specific fields; `subject` routes the email. */
export function form(L, { id, subject, fields = '', consent = true, message = true, dark = false, submit } = {}) {
  const f = (k) => esc(t(FORM[k], L));
  const live = !!SITE.form.key;
  const action = live ? SITE.form.endpoint : href(L, '/contact/');
  return `<form class="form" id="${id}" method="post" action="${action}" ${live ? 'data-ajax' : 'data-offline'} novalidate` +
    ` data-sending="${f('sending')}" data-ok="${f('ok')}" data-err="${f('err')}" data-offline-msg="${f('offline')}">` +
    `<input type="hidden" name="access_key" value="${esc(SITE.form.key)}">` +
    `<input type="hidden" name="subject" value="${esc(subject)}">` +
    `<input type="checkbox" name="botcheck" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">` +
    `<div class="field"><label for="${id}-name">${f('name')}</label><input id="${id}-name" name="name" autocomplete="name" required></div>` +
    `<div class="field"><label for="${id}-phone">${f('phone')}</label><input id="${id}-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" required pattern="[0-9+()\\- ]{9,}"></div>` +
    `<div class="field field--full"><label for="${id}-email">${f('email')} <span class="hint">${f('optional')}</span></label><input id="${id}-email" name="email" type="email" autocomplete="email"></div>` +
    fields +
    (message ? `<div class="field field--full"><label for="${id}-msg">${f('message')} <span class="hint">${f('optional')}</span></label><textarea id="${id}-msg" name="message" rows="4"></textarea></div>` : '') +
    (consent ? `<label class="check"><input type="checkbox" name="marketing_consent" value="yes"><span>${f('consent')}</span></label>` : '') +
    `<div class="form-foot"><button class="btn${dark ? ' btn--light' : ''}" type="submit">${esc(submit || t(FORM.send, L))}</button>` +
    `<p class="form-note">${t(FORM.privacyNote, L)}</p></div>` +
    `<p class="form-status" role="status" tabindex="-1"></p></form>`;
}

/** Click-to-load YouTube (privacy-enhanced domain) with a local poster. */
export function video(id, L, title) {
  const poster = hasMedia(`video-${id}`) ? picture(`video-${id}`, { alt: '', sizes: '(max-width:900px) 100vw, 50vw' }) : '';
  return `<div><div class="embed"><button type="button" data-embed="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" data-title="${esc(title)}" aria-label="${esc(t(T.playVideo, L) + ': ' + title)}">${poster}<span class="play">${esc(t(T.playVideo, L))}</span></button></div><p class="small">${esc(t(T.videoNote, L))}</p></div>`;
}
/** Click-to-load Google map. */
export function map(q, L, title) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(q)}&t=m&z=14&output=embed&hl=${L === 'he' ? 'iw' : 'en'}`;
  return `<div class="embed embed--map"><button type="button" data-embed="${esc(src)}" data-title="${esc(title)}"><span>${esc(t(T.loadMap, L))}</span></button></div>` +
    `<p class="small">${esc(t(T.mapNote, L))} <a href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(q)}" rel="noopener" target="_blank">${esc(t(T.openMap, L))}</a></p>`;
}

export const crumbs = (L, items) => `<nav aria-label="breadcrumb"><ol class="crumbs">` +
  items.map(([label, p]) => (p ? `<li><a href="${href(L, p)}">${esc(label)}</a></li>` : `<li aria-current="page">${esc(label)}</li>`)).join('') + `</ol></nav>`;
