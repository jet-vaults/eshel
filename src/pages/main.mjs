import { SITE, T, FACTS, STATUS, STATUS_PLURAL, FORM } from '../copy.mjs';
import { esc, t, href, picture, preload, tile, form, video, map, crumbs, telHref, statusTag, largest, hasMedia, fig } from '../lib.mjs';

const CITIES = { he: 'חיפה · כרמיאל · נהריה · מגדל העמק · טבריה · רכסים · מעלות-תרשיחא · נופית · עכו · קריית אתא · יקנעם · אלעד', en: 'Haifa · Karmiel · Nahariya · Migdal HaEmek · Tiberias · Rechasim · Ma\'alot-Tarshiha · Nofit · Acre · Kiryat Ata · Yokneam · Elad' };
const HERO_SIZES = '(max-width:900px) 100vw, 58vw';

/* ------------------------------------------------------------------ HOME */
export function home(L, { projects }) {
  const flag = projects.find((p) => p.slug === 'neot-navon');
  const featured = projects.filter((p) => p.featured).sort((a, b) => a.featured - b.featured);
  const [main, ...side] = featured.slice(1, 4); // KAVA large, Elad + Ahuzat Ya'ar beside it
  const more = projects.filter((p) => p.status === 'marketing' && !featured.slice(1, 4).includes(p) && p !== flag);
  const c = {
    he: {
      title: 'אשל הירדן | יזמות, תכנון וביצוע משנת 1994',
      desc: 'קבוצת אשל הירדן משלבת יזמות, תכנון אדריכלי וביצוע תחת קורת גג אחת. קבלן בסיווג ג׳5, פרויקטים למגורים, מסחר ותעסוקה והתחדשות עירונית בצפון ובכל הארץ.',
      h1: ['ליזום.', 'לתכנן.', 'לבצע.'],
      sub: 'קבוצת אשל הירדן משלבת יזמות, תכנון וביצוע תחת קורת גג אחת, משנת 1994.',
      cta1: 'לפרויקטים', cta2: 'התחדשות עירונית',
      scaleH: 'שלושה עשורים של יזמות, תכנון וביצוע.',
      scaleP: 'עיקר הפעילות בצפון הארץ, לצד פרויקטים במרכז. בנייה רוויה, סמי-רוויה, מחיר למשתכן, צמודי קרקע, מסחר ומשרדים.',
      roofH: 'שלוש יכולות. קורת גג אחת.',
      roof: [
        ['יזמות', 'ייזום וקידום פרויקטים למגורים, מסחר ותעסוקה, ומיזמי התחדשות עירונית בהיקף של כ-13,000 יח״ד חדשות.'],
        ['תכנון', 'תכנון אדריכלי ייחודי ויצירתי בתוך החברה, שמביא את הבנייה לרמה גבוהה ובולטת בנוף העירוני.'],
        ['ביצוע', 'חברה קבלנית בסיווג ג׳5, הסיווג הגבוה ביותר ברשם הקבלנים, וזוכת כוכב בטיחות של תוכנית הכוכבים בשיתוף התאחדות הקבלנים.'],
      ],
      roofClose: 'כל צלעות המשולש מתקיימות בתוך החברה. כך מובטח תיאום מלא לאורך כל תהליך הבנייה, מהרעיון ועד המפתח.',
      featH: 'פרויקטים בשיווק',
      urLabel: 'התחדשות עירונית',
      urH: 'קורת גג אחת, מהתכנון ועד מפתח הדירה החדשה.',
      urP: 'כיזם וכקבלן מבצע, אשל הירדן מתנהלת מול הדיירים מהיום הראשון ועד סוף תקופת הבדק של הדירה החדשה.',
      urBig: '~13,000', urBigL: 'יחידות דיור חדשות בפרויקטי התחדשות עירונית',
      urCases: [['יקנעם', 'כ-2,000 יח״ד חדשות'], ['מגדל העמק, קרן היסוד והנשיאים', 'למעלה מ-1,000 יח״ד'], ['חיפה, התורן', 'למעלה מ-1,000 יח״ד']],
      urCta: 'להתחדשות עירונית',
      partnersH: 'שותפים לדרך',
      contactH: 'נשמח לשמוע מכם',
      contactP: 'לשאלות על פרויקט, התחדשות עירונית או שיתוף פעולה.',
    },
    en: {
      title: 'Eshel HaYarden | Development, planning and construction since 1994',
      desc: 'Eshel HaYarden brings development, architectural planning and construction under one roof. A G5-classified contractor building homes, commercial space and urban renewal across northern Israel and beyond.',
      h1: ['Develop.', 'Plan.', 'Build.'],
      sub: 'Since 1994, Eshel HaYarden has brought development, planning and construction under one roof.',
      cta1: 'Our projects', cta2: 'Urban renewal',
      scaleH: 'Three decades of developing, planning and building.',
      scaleP: 'Mostly in northern Israel, with projects in the centre of the country too: apartment buildings, low-rise, government-assisted housing, detached homes, retail and offices.',
      roofH: 'Three disciplines. One roof.',
      roof: [
        ['Development', 'Initiating and advancing residential, retail and employment projects, alongside urban renewal schemes for around 13,000 new homes.'],
        ['Planning', 'Distinctive, in-house architectural design that raises the standard of building and stands out in the cityscape.'],
        ['Construction', 'A G5-classified contractor, the highest classification on Israel\'s Registrar of Contractors, and holder of a Safety Star from the Contractors\' Association programme.'],
      ],
      roofClose: 'Every side of the triangle sits inside the company. That is what keeps every stage coordinated, from the first idea to handing over the keys.',
      featH: 'Now selling',
      urLabel: 'Urban renewal',
      urH: 'One roof, from planning to the keys of your new home.',
      urP: 'As both developer and building contractor, Eshel HaYarden works directly with residents from day one until the end of the new home\'s warranty period.',
      urBig: '~13,000', urBigL: 'new homes in urban renewal projects',
      urCases: [['Yokneam', 'Around 2,000 new homes'], ['Migdal HaEmek, Keren HaYesod and HaNesi\'im', '1,000+ new homes'], ['Haifa, HaToren', '1,000+ new homes']],
      urCta: 'Urban renewal',
      partnersH: 'Partners',
      contactH: 'Talk to us',
      contactP: 'Questions about a project, urban renewal or working together.',
    },
  }[L];

  const partners = ['mohs', 'leumi', 'hapoalim', 'discount', 'fibi', 'jerusalem', 'megid', 'geshem', 'ravitz', 'yedidut', 'horowitz'];
  const partnerNames = { mohs: 'משרד הבינוי והשיכון', leumi: 'בנק לאומי', hapoalim: 'בנק הפועלים', discount: 'בנק דיסקונט', fibi: 'הבנק הבינלאומי', jerusalem: 'בנק ירושלים', megid: 'Megid by Aura', geshem: 'גשם', ravitz: 'רביץ השקעות', yedidut: 'קבוצת ידות', horowitz: 'Horowitz Group' };
  const partnerNamesEn = { mohs: 'Ministry of Construction and Housing', leumi: 'Bank Leumi', hapoalim: 'Bank Hapoalim', discount: 'Discount Bank', fibi: 'First International Bank', jerusalem: 'Bank of Jerusalem', megid: 'Megid by Aura', geshem: 'Geshem', ravitz: 'Ravitz Real Estate Investments', yedidut: 'Yedot Group', horowitz: 'Horowitz Group' };

  const body = `
<section class="hero" aria-labelledby="h1">
  <div class="hero-copy">
    <h1 class="d1" id="h1">${c.h1.map((w) => `<span>${esc(w)}</span>`).join('')}</h1>
    <p class="lead">${esc(c.sub)}</p>
    <div class="actions"><a class="btn" href="${href(L, '/projects/')}">${esc(c.cta1)}</a><a class="link arrow" href="${href(L, '/urban-renewal/')}">${esc(c.cta2)}</a></div>
  </div>
  <div class="hero-media">
    ${picture('neot-navon-0', { alt: `${t(flag.name, L)}, ${t(flag.city, L)}`, sizes: HERO_SIZES, eager: true })}
    <a class="hero-cap" href="${href(L, '/projects/neot-navon/')}"><b>${esc(t(flag.name, L))}, ${esc(t(flag.city, L))}</b>${statusTag(flag.status, L)}<span class="arrow" aria-hidden="true"></span></a>
  </div>
</section>

<section class="sec" aria-labelledby="scale-h">
  <div class="wrap scale">
    <div data-reveal>
      <h2 class="h2" id="scale-h">${esc(c.scaleH)}</h2>
      <p class="lead" style="margin-top:22px">${esc(c.scaleP)}</p>
      <p class="cities">${esc(CITIES[L])}</p>
    </div>
    <dl class="scale-list num">
      ${FACTS.map((f) => `<div data-reveal><dt>${esc(t(f.l, L))}</dt><dd>${fig(t(f.v, L), L)}</dd></div>`).join('')}
    </dl>
  </div>
</section>

<section class="sec sec--mist" aria-labelledby="roof-h">
  <div class="wrap roof">
    <div>
      <div class="roof-mark" aria-hidden="true"><i></i><i></i><i></i></div>
    </div>
    <div>
      <h2 class="h2" id="roof-h" style="margin-bottom:clamp(28px,4vw,52px)">${esc(c.roofH)}</h2>
      <div class="roof-rows">
        ${c.roof.map(([h, p]) => `<div class="roof-row" data-reveal><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join('')}
      </div>
      <p class="roof-close">${esc(c.roofClose)}</p>
    </div>
  </div>
</section>

<section class="sec" aria-labelledby="feat-h">
  <div class="wrap">
    <div class="feat-foot"><h2 class="h2" id="feat-h">${esc(c.featH)}</h2><a class="link arrow" href="${href(L, '/projects/')}">${esc(t(T.allProjects, L))}</a></div>
    <div class="feat">
      <div class="feat-main">${tile(main, L, { sizes: '(max-width:900px) 100vw, 58vw' })}</div>
      <div class="feat-side">${side.map((p) => tile(p, L, { sizes: '(max-width:900px) 100vw, 40vw' })).join('')}</div>
    </div>
    <div class="feat-more">
      ${more.map((p) => `<a href="${href(L, `/projects/${p.slug}/`)}"><b>${esc(t(p.name, L))}</b><span>${esc(t(p.city, L))}${p.note ? ' · ' + esc(t(p.note, L)) : ''}</span></a>`).join('')}
    </div>
  </div>
</section>

<section class="sec sec--navy" aria-labelledby="ur-h">
  <div class="wrap ur">
    <div class="ur-media" data-reveal>${picture('ur-haifa-0', { alt: L === 'he' ? 'הדמיית פרויקט התורן, חיפה' : 'HaToren, Haifa, rendering', sizes: '(max-width:900px) 100vw, 50vw' })}</div>
    <div class="ur-copy">
      <p class="label">${esc(c.urLabel)}</p>
      <h2 class="h2" id="ur-h">${esc(c.urH)}</h2>
      <p class="muted">${esc(c.urP)}</p>
      <div><p class="ur-big num">${fig(c.urBig, L)}</p><p class="muted">${esc(c.urBigL)}</p></div>
      <ul class="ur-list">${c.urCases.map(([a, b]) => `<li><b>${esc(a)}</b><span>${esc(b)}</span></li>`).join('')}</ul>
      <div><a class="btn btn--light" href="${href(L, '/urban-renewal/')}">${esc(c.urCta)}</a></div>
    </div>
  </div>
</section>

<section class="sec" aria-labelledby="partners-h">
  <div class="wrap">
    <h2 class="h3" id="partners-h" style="margin-bottom:28px">${esc(c.partnersH)}</h2>
    <ul class="logos">${partners.map((k) => `<li>${picture('partner-' + k, { alt: L === 'he' ? partnerNames[k] : partnerNamesEn[k], sizes: '160px' })}</li>`).join('')}</ul>
  </div>
</section>

<section class="sec sec--mist" aria-labelledby="contact-h" id="contact">
  <div class="wrap cband">
    <div class="cband-info">
      <h2 class="h2" id="contact-h">${esc(c.contactH)}</h2>
      <p class="muted">${esc(c.contactP)}</p>
      <a class="cband-tel num" href="${telHref(SITE.phone)}">${SITE.phone}</a>
      <dl><div><dt>${esc(t(T.address, L))}</dt><dd>${esc(t(SITE.address, L))} · <a href="${SITE.waze}" rel="noopener" target="_blank">Waze</a></dd></div>
      <div><dt>${esc(t(T.email, L))}</dt><dd><a href="mailto:${SITE.email}">${SITE.email}</a></dd></div></dl>
    </div>
    ${form(L, { id: 'home-form', subject: 'פנייה מאתר אשל הירדן (דף הבית)' })}
  </div>
</section>`;

  const org = {
    '@context': 'https://schema.org', '@type': 'Organization', name: t(SITE.legalName, L), alternateName: [SITE.name.he, SITE.name.en],
    url: SITE.origin + href(L, '/'), logo: SITE.origin + '/assets/brand/icon-512.png', foundingDate: '1994', telephone: SITE.phoneIntl, email: SITE.email,
    address: { '@type': 'PostalAddress', streetAddress: L === 'he' ? 'התעשייה 51' : '51 HaTa\'asiya St.', addressLocality: L === 'he' ? 'נשר' : 'Nesher', postalCode: SITE.zip, addressCountry: 'IL' },
    sameAs: Object.values(SITE.social),
  };
  return { path: '/', title: c.title, homeTitle: true, desc: c.desc, body, image: largest('neot-navon-0'), preload: preload('neot-navon-0', HERO_SIZES), jsonld: [org] };
}

/* ------------------------------------------------------------- PROJECTS HUB */
export function projectsHub(L, { projects }) {
  const order = ['marketing', 'planning', 'occupied'];
  const sorted = [...projects].sort((a, b) => order.indexOf(a.status) - order.indexOf(b.status) || (b.year || 9999) - (a.year || 9999));
  const counts = Object.fromEntries(order.map((s) => [s, projects.filter((p) => p.status === s).length]));
  const c = {
    he: { title: 'פרויקטים', desc: `${projects.length} פרויקטים של אשל הירדן: בשיווק, בתכנון ומאוכלסים, בחיפה, כרמיאל, נהריה, מגדל העמק, טבריה, אלעד ועוד.`, lead: 'מגורים, מסחר ותעסוקה, מצמודי קרקע ועד מגדלים. כל פרויקט מתוכנן ונבנה על ידי החברה עצמה.' },
    en: { title: 'Projects', desc: `${projects.length} Eshel HaYarden projects, now selling, in planning and completed, in Haifa, Karmiel, Nahariya, Migdal HaEmek, Tiberias, Elad and more.`, lead: 'Homes, retail and employment space, from detached houses to towers. Every project is planned and built by the company itself.' },
  }[L];
  const tpl = { he: 'מוצגים {n} פרויקטים', en: 'Showing {n} projects' };
  const body = `
<div class="wrap phead">
  ${crumbs(L, [[t(T.home, L), '/'], [c.title]])}
  <div class="phead-grid"><h1 class="d1">${esc(c.title)}</h1><p class="lead">${esc(c.lead)}</p></div>
</div>
<div class="wrap">
  <div class="filters" data-filter role="group" aria-label="${esc(t(T.filterLabel, L))}">
    <button type="button" data-value="all" aria-pressed="true">${esc(t(STATUS_PLURAL.all, L))}<sup>${projects.length}</sup></button>
    ${order.map((s) => `<button type="button" data-value="${s}" aria-pressed="false">${esc(t(STATUS_PLURAL[s], L))}<sup>${counts[s]}</sup></button>`).join('')}
    <output data-filter-count data-tpl-he="${tpl.he}" data-tpl-en="${tpl.en}" aria-live="polite">${esc(tpl[L].replace('{n}', projects.length))}</output>
  </div>
  <div class="grid">${sorted.map((p) => tile(p, L, { heading: 'h2' })).join('')}</div>
</div>
<div class="sec"></div>`;
  const list = { '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: sorted.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: SITE.origin + href(L, `/projects/${p.slug}/`), name: t(p.name, L) })) };
  return { path: '/projects/', title: c.title, desc: c.desc, body, nav: 'projects', image: largest('kava-0'), jsonld: [list] };
}

/* ------------------------------------------------------------ PROJECT PAGE */
// Gallery tile widths mirror the CSS: every 5th tile spans 8/12 on desktop, every 3rd is full width on phones.
const galSizes = (k) => `(max-width:700px) ${k % 3 === 0 ? '100vw' : '50vw'}, ${k % 5 === 0 ? '62vw' : '31vw'}`;
export function project(p, L, { projects }) {
  const name = t(p.name, L), city = t(p.city, L);
  const n = p.images || 0;
  const alt = (i) => `${name}, ${city}: ${t(T.imageOf, L)} ${i + 1}`;
  const related = projects.filter((q) => q !== p && (q.status === p.status || q.city.en === p.city.en))
    .sort((a, b) => (b.city.en === p.city.en) - (a.city.en === p.city.en)).slice(0, 3);
  const salesNum = p.sales_tel || p.sales;
  const facts = p.facts.map((f) => `<div><dt>${esc(t(f.l, L))}</dt><dd class="num">${fig(L === 'en' && f.ve ? f.ve : f.v, L)}</dd></div>`).join('');
  const aside = [
    [t(T.status, L), statusTag(p.status, L)],
    [t(T.city, L), esc(city)],
    [t(T.type, L), esc(t(p.type, L))],
    p.year && [t(T.completed, L), String(p.year)],
    p.partners && [t(T.partners, L), esc(t(p.partners, L))],
    p.architect && [t(T.architect, L), esc(t(p.architect, L))],
    p.note && [t(T.status, L) === 'Status' ? 'Update' : 'עדכון', `<span class="note">${esc(t(p.note, L))}</span>`],
    salesNum && [t(T.sales, L), `<a href="${telHref(salesNum)}" dir="ltr">${esc(salesNum)}</a>${p.sales_ext ? ` (${t(T.ext, L)} ${p.sales_ext})` : ''}`],
    p.external && [L === 'he' ? 'אתר הפרויקט' : 'Project website', `<a href="${esc(p.external.url)}" rel="noopener" target="_blank">${esc(t(p.external.label, L))}</a>`],
  ].filter(Boolean).map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${v}</dd></div>`).join('');

  const gallery = n > 1
    ? `<section class="sec--tight" aria-labelledby="gal-h"><div class="wrap"><h2 class="h3" id="gal-h" style="margin-bottom:24px">${esc(t(T.gallery, L))}</h2><div class="gal" data-gallery>` +
      Array.from({ length: n - 1 }, (_, k) => k + 1).map((i) => `<a href="${largest(`${p.slug}-${i}`)}" data-full="${largest(`${p.slug}-${i}`)}">${picture(`${p.slug}-${i}`, { alt: alt(i), sizes: galSizes(i - 1) })}</a>`).join('') +
      `</div></div></section>` : '';
  const vids = p.videos?.length
    ? `<section class="sec--tight"><div class="wrap"><div class="vids">${p.videos.map((v) => video(v, L, name)).join('')}</div></div></section>` : '';
  const press = p.press?.length
    ? `<div><h3 class="h3" style="margin:40px 0 14px;font-size:var(--fs-1)">${esc(t(T.inThePress, L))}</h3><ul>${p.press.map((x) => `<li style="margin-bottom:8px"><a class="link arrow" href="${esc(x.url)}" rel="noopener" target="_blank">${esc(t(x.label, L))}</a></li>`).join('')}</ul></div>` : '';

  const body = `
<div class="wrap" style="padding-top:clamp(28px,4vw,56px)">
  ${crumbs(L, [[t(T.home, L), '/'], [t(T.projects, L), '/projects/'], [name]])}
  <div class="p-head">
    <div>
      <h1 class="d1">${esc(name)}</h1>
      <p class="p-meta">${statusTag(p.status, L)}<span>${esc(city)}</span><span>${esc(t(p.type, L))}</span></p>
    </div>
    <dl class="p-facts">${facts}</dl>
  </div>
</div>
${n ? `<div class="banner">${picture(`${p.slug}-0`, { alt: alt(0), sizes: '100vw', eager: true })}</div>` : ''}

<section class="sec" aria-labelledby="ov-h">
  <div class="wrap p-body">
    <div>
      <h2 class="h2" id="ov-h">${esc(t(p.lead, L))}</h2>
      <div class="prose">${t(p.body, L).map((x) => `<p>${esc(x)}</p>`).join('')}</div>
      ${press}
    </div>
    <dl class="aside">${aside}</dl>
  </div>
</section>
${gallery}
${vids}
<section class="sec--tight" aria-labelledby="loc-h"><div class="wrap"><h2 class="h3" id="loc-h" style="margin-bottom:20px">${esc(t(T.location, L))}: ${esc(city)}</h2>${map(`${p.city.he}, ישראל`, L, `${name}, ${city}`)}</div></section>

<section class="sec sec--mist" aria-labelledby="int-h" style="margin-top:var(--sp-2)">
  <div class="wrap cband">
    <div class="cband-info">
      <h2 class="h2" id="int-h">${esc(t(T.interested, L))}</h2>
      <p class="muted">${esc(t(T.interestedLead, L))}</p>
      <a class="cband-tel num" href="${telHref(salesNum || SITE.phone)}">${esc(salesNum || SITE.phone)}</a>
    </div>
    ${form(L, { id: 'p-form', subject: `התעניינות בפרויקט ${p.name.he} (${p.city.he})`, fields: `<input type="hidden" name="project" value="${esc(p.name.he)}">` })}
  </div>
</section>

<section class="sec" aria-labelledby="rel-h">
  <div class="wrap">
    <div class="feat-foot"><h2 class="h2" id="rel-h">${esc(t(T.related, L))}</h2><a class="link arrow" href="${href(L, '/projects/')}">${esc(t(T.allProjects, L))}</a></div>
    <div class="grid">${related.map((q) => tile(q, L)).join('')}</div>
  </div>
</section>`;
  const desc = `${name}, ${city}. ${t(p.summary, L)}`;
  const ld = [{
    '@context': 'https://schema.org', '@type': 'Residence', name, description: t(p.summary, L), url: SITE.origin + href(L, `/projects/${p.slug}/`),
    address: { '@type': 'PostalAddress', addressLocality: city, addressCountry: 'IL' }, ...(n ? { image: SITE.origin + largest(`${p.slug}-0`) } : {}),
  }, {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: t(T.home, L), item: SITE.origin + href(L, '/') },
      { '@type': 'ListItem', position: 2, name: t(T.projects, L), item: SITE.origin + href(L, '/projects/') },
      { '@type': 'ListItem', position: 3, name },
    ],
  }];
  return {
    path: `/projects/${p.slug}/`, title: `${name}, ${city}`, desc, body, nav: 'projects', lightbox: n > 1,
    image: n ? largest(`${p.slug}-0`) : undefined, preload: n ? preload(`${p.slug}-0`, '100vw') : '', jsonld: ld,
  };
}

/* ----------------------------------------------------------- URBAN RENEWAL */
export function urban(L) {
  const c = {
    he: {
      title: 'התחדשות עירונית', desc: 'אשל הירדן התחדשות עירונית: יזם וקבלן מבצע תחת קורת גג אחת. כ-13,000 יח״ד חדשות בתכנון, ליווי אישי ושקיפות מול הדיירים, מהתכנון ועד מפתח הדירה החדשה.',
      h1: 'התחדשות עירונית', sub: 'קורת גג אחת, מהתכנון ועד מפתח הדירה החדשה.',
      intro: 'אשל הירדן התחדשות עירונית היא חברה יזמית ומבצעת, החתומה על מיזמים ברחבי הארץ.',
      reasons: [['30+', 'שנות ניסיון מוכח בייזום וביצוע'], ['2 ב-1', 'יתרון כפול: חברה יזמית וגם קבלן מבצע'], ['13,000', 'יחידות דיור חדשות בפרויקטי התחדשות עירונית'], ['אחת', 'קורת גג המלווה את הדייר מתחילת התהליך ועד המפתח']],
      whyH: 'פחות גורמים. יותר שקט.',
      why: ['ברוב המקרים, התחדשות עירונית מייצרת ריבוי גופים המתנהלים מול בעלי הדירות: מחתימים, עורכי דין, שמאים וועדות.', 'אצלנו היזם הוא גם קבלן הביצוע, ומתנהל מול הדיירים מהיום הראשון ועד סוף תקופת הבדק של הדירה החדשה. לרשותכם מעטפת הטבות ופתרונות לאורך כל הדרך.'],
      waysH: 'הדרך שלנו',
      ways: [['שותפות מלאה וליווי צמוד', 'קשר רציף עם הדיירים. איש או אשת קשר מטעם החברה מלווים את הדיירים באופן אישי לאורך כל הפרויקט.'], ['שקיפות מול הדייר', 'החברה מפעילה מערכת הפתוחה לכל דייר, המציגה תמונת מצב רציפה לאורך כל תקופת הפרויקט.'], ['רמת תכנון וביצוע', 'תכנון מדויק בעזרת הטכנולוגיות העדכניות, שמאפשר לקצר משמעותית את לוחות הזמנים וליצור סטנדרט בנייה גבוה יותר.']],
      casesH: 'פרויקטים לדוגמה',
      cases: [
        { id: 'ur-yokneam', n: 6, name: 'יקנעם', sub: 'תוכנית ההתחדשות העירונית הגדולה בצפון', nums: [['~452', 'יח״ד קיימות'], ['~2,000', 'יח״ד חדשות'], ['~97', 'דונם']], text: 'בשכונה הוותיקה בכניסה הצפונית ליקנעם, בסמוך למתחם G. התכנון משלב מבני מגורים בגבהים שונים, מתחם ייעודי לדיור מוגן, שטחי מסחר ותעסוקה, מבני ציבור ושטחים פתוחים נרחבים.' },
        { id: 'ur-migdal', n: 6, name: 'מגדל העמק, קרן היסוד והנשיאים', sub: 'שכונה חדשה בדרום העיר, מול נופי העמק', nums: [['176', 'יח״ד קיימות'], ['1,000+', 'יח״ד חדשות']], text: 'התוכנית מחדשת את המרקם העירוני ויוצרת שכונת מגורים מודרנית, עם מבני מגורים, שטחי מסחר, מבני ציבור, שטחים פתוחים ופיתוח סביבתי רחב.' },
        { id: 'ur-haifa', n: 6, name: 'חיפה, התורן', sub: 'קו ראשון לים, בלב שכונת עין הים', nums: [['~230', 'יח״ד קיימות'], ['1,000+', 'יח״ד חדשות']], text: 'פרויקט המשלב תכנון אדריכלי מתקדם עם אחד המיקומים המבוקשים בעיר: קרבה לחוף הים, פיתוח סביבתי, שטחים ירוקים ומרחבים ציבוריים, המשתלבים באופייה של השכונה.' },
      ],
      perksH: 'כל היתרונות במקום אחד',
      perks: [['בדירה החדשה', ['דירה חדשה ומרווחת', 'מרפסת שמש וממ״ד תקני', 'סטנדרט עשיר ומוקפד', 'חנייה פרטית ומחסן', 'תשתית חדשה, לובי מעוצב ומעלית']], ['לאורך התהליך', ['ערבות חוק מכר', 'ערבות בדק ורישום', 'מימון שכר דירה חודשי לאורך כל התקופה', 'מימון הובלת התכולה לדירה השכורה ובחזרה', 'מימון שכר טרחת עורך דין ומפקח מטעם הדיירים', 'ניהול וליווי אישי של צוות החברה']]],
      formH: 'בואו נבדוק את הבניין שלכם', formP: 'בעלי דירות ונציגויות: השאירו פרטים ונחזור אליכם.', addr: 'כתובת הבניין', addrHint: 'רחוב, מספר ועיר',
    },
    en: {
      title: 'Urban renewal', desc: 'Eshel HaYarden Urban Renewal: developer and building contractor under one roof. Around 13,000 new homes in planning, with personal support and full transparency for residents.',
      h1: 'Urban renewal', sub: 'One roof, from planning to the keys of your new home.',
      intro: 'Eshel HaYarden Urban Renewal is a developer and contractor with signed projects across Israel.',
      reasons: [['30+', 'years of proven experience in development and construction'], ['2-in-1', 'both the developer and the building contractor'], ['13,000', 'new homes in urban renewal projects'], ['One', 'roof, from the first meeting to the keys']],
      whyH: 'Fewer parties. More peace of mind.',
      why: ['Urban renewal usually means many different bodies dealing with apartment owners: signature collectors, lawyers, appraisers and committees.', 'With us, the developer is also the contractor, working directly with residents from day one until the end of the new home\'s warranty period, with a package of benefits and solutions throughout.'],
      waysH: 'How we work',
      ways: [['Full partnership, close support', 'Continuous contact with residents. A dedicated company representative accompanies residents personally throughout the project.'], ['Transparency for residents', 'The company runs a system open to every resident, giving an up-to-date picture of the project at every stage.'], ['Planning and execution', 'Precise planning with up-to-date technology shortens timelines significantly and raises the standard of construction.']],
      casesH: 'Selected projects',
      cases: [
        { id: 'ur-yokneam', n: 6, name: 'Yokneam', sub: 'The largest urban renewal plan in northern Israel', nums: [['~452', 'existing homes'], ['~2,000', 'new homes'], ['~97', 'dunams']], text: 'In the established neighbourhood at Yokneam\'s northern entrance, next to the G complex. The plan combines residential buildings of varying heights, an assisted-living compound, retail and employment space, public buildings and extensive open space.' },
        { id: 'ur-migdal', n: 6, name: 'Migdal HaEmek, Keren HaYesod and HaNesi\'im', sub: 'A new neighbourhood in the south of the city, overlooking the valley', nums: [['176', 'existing homes'], ['1,000+', 'new homes']], text: 'The plan renews the urban fabric with a modern neighbourhood of residential buildings, retail, public buildings, open spaces and extensive landscaping.' },
        { id: 'ur-haifa', n: 6, name: 'Haifa, HaToren', sub: 'On the seafront, in the heart of Ein HaYam', nums: [['~230', 'existing homes'], ['1,000+', 'new homes']], text: 'Advanced architecture on one of the city\'s most sought-after sites: close to the beach, with landscaping, green spaces and public areas that fit the character of the neighbourhood.' },
      ],
      perksH: 'Everything in one package',
      perks: [['In your new home', ['A new, more spacious apartment', 'A sun balcony and a standard safe room', 'A rich, carefully specified finish', 'Private parking and storage', 'New infrastructure, a designed lobby and a lift']], ['Throughout the process', ['Sale Law guarantee', 'Warranty and registration guarantees', 'Monthly rent covered for the whole period', 'Moving costs covered, out and back', 'Residents\' lawyer and supervisor fees covered', 'Personal management by the company team']]],
      formH: 'Let\'s look at your building', formP: 'Apartment owners and building committees: leave your details and we\'ll get back to you.', addr: 'Building address', addrHint: 'Street, number and city',
    },
  }[L];
  const imgSizes = '(max-width:900px) 100vw, 50vw';
  const body = `
<section class="ur-hero" aria-labelledby="h1">
  <div class="hero-copy">
    ${crumbs(L, [[t(T.home, L), '/'], [c.h1]])}
    <h1 class="d1" id="h1">${esc(c.h1)}</h1>
    <p class="lead">${esc(c.sub)}</p>
    <p class="muted" style="max-width:30em">${esc(c.intro)}</p>
    <div class="actions"><a class="btn" href="#ur-form">${esc(c.formH)}</a></div>
  </div>
  <div class="hero-media">${picture('ur-haifa-1', { alt: L === 'he' ? 'הדמיית פרויקט התורן, חיפה' : 'HaToren, Haifa, rendering', sizes: imgSizes, eager: true })}</div>
</section>
<section class="sec" aria-label="${esc(c.h1)}"><div class="wrap"><ul class="reasons num">${c.reasons.map(([a, b]) => `<li data-reveal><b>${esc(a)}</b><span>${esc(b)}</span></li>`).join('')}</ul></div></section>
<section class="sec sec--mist" aria-labelledby="why-h"><div class="wrap split">
  <div><h2 class="h2" id="why-h">${esc(c.whyH)}</h2></div>
  <div><div class="prose" style="margin-bottom:40px">${c.why.map((x) => `<p>${esc(x)}</p>`).join('')}</div>
  <h3 class="label" style="margin-bottom:14px">${esc(c.waysH)}</h3>
  <ul class="ways">${c.ways.map(([h, p]) => `<li data-reveal><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`).join('')}</ul></div>
</div></section>
<section class="sec" aria-labelledby="cases-h"><div class="wrap">
  <h2 class="h2" id="cases-h" style="margin-bottom:clamp(24px,3vw,40px)">${esc(c.casesH)}</h2>
  <div data-gallery>
  ${c.cases.map((k) => `<article class="case">
    <div class="case-media">${[0, 1, 2].map((i) => `<a href="${largest(`${k.id}-${i}`)}" data-full="${largest(`${k.id}-${i}`)}">${picture(`${k.id}-${i}`, { alt: `${k.name}: ${t(T.imageOf, L)} ${i + 1}`, sizes: i ? '(max-width:900px) 33vw, 20vw' : '(max-width:900px) 66vw, 40vw' })}</a>`).join('')}</div>
    <div><h3 class="h3">${esc(k.name)}</h3><p class="muted" style="margin-top:6px">${esc(k.sub)}</p>
    <dl class="case-nums num">${k.nums.map(([v, l]) => `<div><dt>${esc(l)}</dt><dd>${fig(v, L)}</dd></div>`).join('')}</dl>
    <p style="color:var(--ink-2)">${esc(k.text)}</p></div>
  </article>`).join('')}
  </div>
</div></section>
<section class="sec sec--navy" aria-labelledby="perks-h"><div class="wrap">
  <h2 class="h2" id="perks-h" style="margin-bottom:clamp(28px,4vw,52px)">${esc(c.perksH)}</h2>
  <div class="perks">${c.perks.map(([h, items]) => `<div><h3>${esc(h)}</h3><ul>${items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>`).join('')}</div>
</div></section>
<section class="sec sec--mist" id="ur-form" aria-labelledby="urf-h"><div class="wrap cband">
  <div class="cband-info"><h2 class="h2" id="urf-h">${esc(c.formH)}</h2><p class="muted">${esc(c.formP)}</p><a class="cband-tel num" href="${telHref(SITE.phone)}">${SITE.phone}</a></div>
  ${form(L, { id: 'ur-f', subject: 'פנייה בנושא התחדשות עירונית', fields: `<div class="field field--full"><label for="ur-f-addr">${esc(c.addr)}</label><input id="ur-f-addr" name="building_address" autocomplete="street-address" aria-describedby="ur-f-addr-h"><span class="hint" id="ur-f-addr-h">${esc(c.addrHint)}</span></div>` })}
</div></section>`;
  return { path: '/urban-renewal/', title: c.title, desc: c.desc, body, nav: 'urban', lightbox: true, image: largest('ur-haifa-1'), preload: preload('ur-haifa-1', imgSizes) };
}
