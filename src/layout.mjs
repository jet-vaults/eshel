import { SITE, T, STATUS } from './copy.mjs';
import { esc, t, href, other, telHref } from './lib.mjs';

const NAV = [
  ['projects', '/projects/'],
  ['urban', '/urban-renewal/'],
  ['about', '/about/'],
  ['residents', '/residents/'],
  ['contact', '/contact/'],
];

/**
 * Wraps a page body in the document shell.
 * page: { L, path (language-neutral, e.g. '/about/'), altPath (if the other language differs), title, desc,
 *         body, image (absolute OG image path), preload (html), noAlt (no counterpart), jsonld (array), nav (key) }
 */
export function layout(page, ctx) {
  const { L, path: p, title, desc, body, css, js, build } = { ...page, ...ctx };
  const dir = L === 'he' ? 'rtl' : 'ltr';
  const self = href(L, p);
  const altP = page.altPath ?? p;
  const altHref = page.noAlt ? href(other(L), page.altFallback || '/') : href(other(L), altP);
  const canonical = SITE.origin + self;
  const fullTitle = page.homeTitle ? title : `${title} | ${t(SITE.name, L)}`;
  const og = SITE.origin + (page.image || '/assets/brand/og.jpg');
  const fonts = L === 'he'
    ? `<link rel="preload" href="/assets/fonts/plex-hebrew-400-hebrew.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/assets/fonts/plex-hebrew-300-hebrew.woff2" as="font" type="font/woff2" crossorigin>`
    : `<link rel="preload" href="/assets/fonts/plex-sans-latin-var.woff2" as="font" type="font/woff2" crossorigin>`;
  const alternates = page.noAlt
    ? `<link rel="alternate" hreflang="${L}" href="${canonical}">`
    : `<link rel="alternate" hreflang="he" href="${SITE.origin + href('he', L === 'he' ? p : altP)}"><link rel="alternate" hreflang="en" href="${SITE.origin + href('en', L === 'en' ? p : altP)}"><link rel="alternate" hreflang="x-default" href="${SITE.origin + href('he', L === 'he' ? p : altP)}">`;
  const ld = (page.jsonld || []).map((o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`).join('');

  const navLinks = NAV.map(([k, path]) => {
    const cur = page.nav === k ? ' aria-current="page"' : '';
    return `<a href="${href(L, path)}"${cur}>${esc(t(T[k], L))}</a>`;
  }).join('');

  return `<!doctype html>
<html lang="${L}" dir="${dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(desc)}">
${build.index ? '' : '<meta name="robots" content="noindex, nofollow">\n'}${page.notFound ? '' : `<link rel="canonical" href="${canonical}">\n${alternates}`}
<meta property="og:type" content="${page.ogType || 'website'}">
<meta property="og:site_name" content="${esc(t(SITE.name, L))}">
<meta property="og:locale" content="${L === 'he' ? 'he_IL' : 'en_US'}">
<meta property="og:locale:alternate" content="${L === 'he' ? 'en_US' : 'he_IL'}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${og}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#ffffff">
<link rel="icon" href="/assets/brand/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="/assets/brand/apple-touch-icon.png">
${fonts}
${page.preload || ''}
<style>${css}</style>
${ld}
</head>
<body>
<a class="skip" href="#main">${esc(t(T.skip, L))}</a>
<div class="hdr-sentinel" aria-hidden="true"></div>
<header class="hdr">
<div class="wrap">
<a class="brand" href="${href(L, '/')}" aria-label="${esc(t(SITE.name, L))}, ${esc(t(T.home, L))}"><img src="/assets/brand/logo.webp" width="728" height="120" alt="${esc(t(SITE.name, L))}"></a>
<nav class="nav" aria-label="${L === 'he' ? 'ראשי' : 'Main'}">${navLinks}</nav>
<div class="hdr-tools">
<a class="hdr-tel" href="${telHref(SITE.phone)}">${SITE.phone}</a>
<a class="lang" href="${altHref}" hreflang="${other(L)}" lang="${other(L)}" aria-label="${esc(t(T.langSwitchLabel, L))}">${L === 'he' ? 'EN' : 'עב'}</a>
</div>
<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mnav">${esc(t(T.menu, L))}<i aria-hidden="true"></i></button>
</div>
</header>
<div class="mnav" id="mnav" hidden>
<nav aria-label="${L === 'he' ? 'ראשי' : 'Main'}"><ul>${NAV.map(([k, path]) => `<li><a href="${href(L, path)}">${esc(t(T[k], L))}<span class="arrow" aria-hidden="true"></span></a></li>`).join('')}</ul></nav>
<div class="mnav-foot">
<a href="${telHref(SITE.phone)}" dir="ltr">${SITE.phone}</a>
<a href="mailto:${SITE.email}">${SITE.email}</a>
<a href="${altHref}" hreflang="${other(L)}" lang="${other(L)}">${esc(t(T.langSwitch, L))}</a>
</div>
</div>
<main id="main">
${body}
</main>
${footer(L, ctx)}
<div class="cookie" id="cookie" role="region" aria-label="cookies" hidden><p>${esc(t(T.cookie, L))} <a class="ck-more" href="${href(L, '/privacy/')}">${esc(t(T.privacy, L))}</a></p><button type="button">${esc(t(T.cookieOk, L))}</button></div>
${page.lightbox ? lightbox(L) : ''}
<script src="${js}" defer></script>
<script src="${ctx.a11y}" defer></script>
</body>
</html>`;
}

function lightbox(L) {
  return `<dialog id="lightbox" aria-label="${esc(t(T.gallery, L))}"><figure><img alt=""></figure>` +
    `<button class="lb-close" type="button" aria-label="${esc(t(T.close, L))}">&times;</button>` +
    `<button class="lb-prev" type="button" aria-label="${esc(t(T.lightboxPrev, L))}">&lsaquo;</button>` +
    `<button class="lb-next" type="button" aria-label="${esc(t(T.lightboxNext, L))}">&rsaquo;</button>` +
    `<p class="lb-count" aria-live="polite"></p></dialog>`;
}

function footer(L, ctx) {
  const selling = ctx.projects.filter((p) => p.status === 'marketing').slice(0, 6);
  const y = new Date().getFullYear();
  return `<footer class="ftr">
<div class="wrap">
<div class="ftr-top">
<div class="ftr-brand">
<img src="/assets/brand/logo-light.webp" width="728" height="120" alt="${esc(t(SITE.name, L))}" loading="lazy">
<p class="ftr-tag">${esc(t(T.footerTag, L))}</p>
<p>${esc(t(SITE.address, L))}<br><a href="${telHref(SITE.phone)}" dir="ltr">${SITE.phone}</a><br><a href="mailto:${SITE.email}">${SITE.email}</a></p>
<div class="ftr-social"><a href="${SITE.social.facebook}" rel="noopener" target="_blank">Facebook</a><a href="${SITE.social.instagram}" rel="noopener" target="_blank">Instagram</a><a href="${SITE.social.youtube}" rel="noopener" target="_blank">YouTube</a></div>
</div>
<div><h2>${esc(t(T.footerSite, L))}</h2><ul>
<li><a href="${href(L, '/projects/')}">${esc(t(T.projects, L))}</a></li>
<li><a href="${href(L, '/urban-renewal/')}">${esc(t(T.urban, L))}</a></li>
<li><a href="${href(L, '/about/')}">${esc(t(T.about, L))}</a></li>
<li><a href="${href(L, '/news/')}">${esc(t(T.news, L))}</a></li>
${L === 'he' ? `<li><a href="/articles/">${esc(t(T.articles, L))}</a></li>` : ''}
<li><a href="${href(L, '/careers/')}">${esc(t(T.careers, L))}</a></li>
</ul></div>
<div><h2>${esc(t(T.footerSelling, L))}</h2><ul>
${selling.map((p) => `<li><a href="${href(L, `/projects/${p.slug}/`)}">${esc(t(p.name, L))}, ${esc(t(p.city, L))}</a></li>`).join('')}
</ul></div>
<div><h2>${esc(t(T.footerContact, L))}</h2><ul>
<li><a href="${href(L, '/contact/')}">${esc(t(T.contact, L))}</a></li>
<li><a href="${href(L, '/residents/')}">${esc(t(T.residents, L))}</a></li>
<li><a href="${SITE.waze}" rel="noopener" target="_blank">${esc(t(T.navigate, L))}</a></li>
</ul></div>
</div>
<div class="ftr-bot">
<p>&copy; ${y} ${esc(t(SITE.legalName, L))}. ${esc(t(T.rights, L))}.</p>
<ul>
<li><a href="${href(L, '/accessibility/')}">${esc(t(T.accessibility, L))}</a></li>
<li><a href="${href(L, '/privacy/')}">${esc(t(T.privacy, L))}</a></li>
<li><a href="${href(L, '/legal/')}">${esc(t(T.legal, L))}</a></li>
</ul>
</div>
</div>
</footer>`;
}
