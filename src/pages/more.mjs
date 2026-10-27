import { SITE, T, FORM, PRESS } from '../copy.mjs';
import { esc, t, href, picture, preload, form, map, crumbs, telHref, largest, hasMedia } from '../lib.mjs';

const head = (L, title, lead, crumb = title) => `
<div class="wrap phead">
  ${crumbs(L, [[t(T.home, L), '/'], [crumb]])}
  <div class="phead-grid"><h1 class="d1">${esc(title)}</h1>${lead ? `<p class="lead">${esc(lead)}</p>` : ''}</div>
</div>`;

/* ------------------------------------------------------------------ ABOUT */
export function about(L) {
  const c = {
    he: {
      title: 'אודות', h1: 'אשל הירדן. משנת 1994.',
      desc: 'קבוצת אשל הירדן פועלת משנת 1994 בתחום היזום והבנייה. יזמות, תכנון אדריכלי וביצוע תחת קורת גג אחת, קבלן בסיווג ג׳5 וזוכת כוכב בטיחות.',
      lead: 'קבוצת אשל הירדן פועלת משנת 1994 בתחום היזום והבנייה בישראל, במודל המאגד את כל מעטפת הבנייה תחת קורת גג אחת: יזמות, תכנון אדריכלי וביצוע בשטח.',
      storyH: 'הסיפור',
      story: [
        ['1994', 'הקבוצה מתחילה לפעול בתחום היזום והבנייה בישראל.'],
        ['קורת גג אחת', 'כל צלעות המשולש החשובות בבנייה מתקיימות בתוך החברה: יזמות, תכנון אדריכלי וביצוע. זהו היתרון שמבטיח תיאום מלא והרמוני בתהליך הבנייה.'],
        ['הצפון', 'עיקר הפעילות מתמקד בפרויקטים בצפון הארץ: הגליל, נהריה, מגדל העמק, כרמיאל, טבריה, חיפה ויוקנעם. בעבר פעלה הקבוצה בבנייה רוויה גם באירופה, והקימה פרויקטים שאוכלסו במספר מדינות.'],
        ['מגוון', 'בנייה רוויה וסמי-רוויה, פרויקטים במחיר למשתכן, צמודי קרקע ושטחי מסחר ומשרדים. עשרות פרויקטים שהקבוצה הקימה ומקימה בארץ ובחו״ל, עם דגש על תכנון אדריכלי ייחודי.'],
        ['התחדשות עירונית', 'הקבוצה מקדמת פרויקטים רבים של התחדשות עירונית, בהיקף של כ-13,000 יחידות דיור חדשות.'],
        ['2023', 'בפברואר 2023 הונפקה החברה בבורסה כחברה פרטית מדווחת בעלת אג״ח.'],
        ['היום', 'הקבוצה מקדמת פרויקטים בשלב ביצוע הכוללים כ-1,000 יחידות דיור, ומרחיבה את פעילותה היזמית לתחום הסיעודי: בתי אבות, דיור מוגן ובית חולים גריאטרי.'],
      ],
      credH: 'הסמכות והכרה',
      creds: [['ג׳5', 'הסיווג הגבוה ביותר של רשם הקבלנים.'], ['כוכב בטיחות', 'הוענק לאחר הכשרה ומבחן ייחודי, במסגרת תוכנית הכוכבים בשיתוף התאחדות הקבלנים.']],
      valuesH: 'הערכים שלנו',
      values: [['ערכים', 'הוגנות, יושרה, מסירות, מקצועיות, יעילות, בטיחות, כבוד ויחס אישי.'], ['ציונות', 'הבחירה בפרויקטים נעשית מתוך ראייה של עשייה ובניין הארץ, מתוך שליחות ומחויבות אישית של כל עובד.'], ['הלקוח במרכז', 'הלקוח בראש סדר העדיפויות. מהיום שבו לקוח בוחר בנו, אנו רואים בו בן משפחה.'], ['ייחודיות', 'תכנון אדריכלי ייחודי ויצירתי, שמביא את הבנייה לרמה גבוהה ובולטת בנוף העירוני.'], ['התחדשות עירונית', 'קורת גג אחת מתחילת התהליך ועד מפתח הדירה החדשה.']],
      cta: 'לפרויקטים שלנו', closeH: 'מהרעיון ועד המפתח.', contact: 'צור קשר',
    },
    en: {
      title: 'About', h1: 'Eshel HaYarden. Since 1994.',
      desc: 'Eshel HaYarden has been developing and building in Israel since 1994, with development, architectural planning and construction under one roof. A G5-classified contractor and Safety Star holder.',
      lead: 'Eshel HaYarden has been active in property development and construction in Israel since 1994, working under one roof across the whole process: development, architectural planning and construction on site.',
      storyH: 'Our story',
      story: [
        ['1994', 'The group begins developing and building in Israel.'],
        ['One roof', 'Every key side of the building triangle sits inside the company: development, architectural planning and construction. That is what keeps the whole process fully coordinated.'],
        ['The north', 'Most of the group\'s work is in northern Israel: the Galilee, Nahariya, Migdal HaEmek, Karmiel, Tiberias, Haifa and Yokneam. In the past it also built apartment projects in Europe, completed and occupied in several countries.'],
        ['Range', 'Apartment buildings, low-rise schemes, government-assisted housing, detached homes, and retail and office space. Dozens of projects built and under way in Israel and abroad, with an emphasis on distinctive architecture.'],
        ['Urban renewal', 'The group is advancing many urban renewal projects, totalling around 13,000 new homes.'],
        ['2023', 'In February 2023 the company issued bonds on the Tel Aviv Stock Exchange as a reporting private company.'],
        ['Today', 'Projects under construction total around 1,000 homes, and the group is extending into senior care: care homes, assisted living and a geriatric hospital.'],
      ],
      credH: 'Credentials',
      creds: [['G5', 'The highest classification on Israel\'s Registrar of Contractors.'], ['Safety Star', 'Awarded after dedicated training and testing, under the Stars programme run with the Israel Builders Association.']],
      valuesH: 'Our values',
      values: [['Principles', 'Fairness, honesty, dedication, professionalism, efficiency, safety, respect and a personal approach.'], ['Zionism', 'We choose projects as part of building the country, out of a sense of mission shared by every employee.'], ['Customers first', 'Our customers come first. From the day a customer chooses us, we treat them as family.'], ['Distinctiveness', 'Distinctive, creative architecture that raises the standard of building in the cityscape.'], ['Urban renewal', 'One roof from the start of the process to the keys of the new home.']],
      cta: 'See our projects', closeH: 'From the first idea to the keys.', contact: 'Contact us',
    },
  }[L];
  const sizes = '100vw';
  const body = `
${head(L, c.h1, c.lead, c.title)}
<div class="banner">${picture('terrace-0', { alt: L === 'he' ? 'פרויקט טרסה, כרמיאל' : 'Terrace, Karmiel', sizes, eager: true })}</div>
<section class="sec" aria-labelledby="story-h"><div class="wrap split">
  <div><h2 class="h2" id="story-h">${esc(c.storyH)}</h2></div>
  <ol class="story">${c.story.map(([a, b]) => `<li data-reveal><b class="num">${esc(a)}</b><p>${esc(b)}</p></li>`).join('')}</ol>
</div></section>
<section class="sec sec--mist" aria-labelledby="cred-h"><div class="wrap split">
  <div><h2 class="h2" id="cred-h">${esc(c.credH)}</h2></div>
  <div class="creds">${c.creds.map(([a, b]) => `<div data-reveal><b>${esc(a)}</b><p>${esc(b)}</p></div>`).join('')}</div>
</div></section>
<section class="sec sec--navy" aria-labelledby="val-h"><div class="wrap">
  <h2 class="h2" id="val-h" style="margin-bottom:clamp(28px,4vw,52px)">${esc(c.valuesH)}</h2>
  <ul class="values">${c.values.map(([a, b]) => `<li data-reveal><h3>${esc(a)}</h3><p>${esc(b)}</p></li>`).join('')}</ul>
</div></section>
<section class="sec"><div class="wrap feat-foot" style="margin:0"><h2 class="h2">${esc(c.closeH)}</h2><div class="actions"><a class="btn" href="${href(L, '/projects/')}">${esc(c.cta)}</a><a class="link arrow" href="${href(L, '/contact/')}">${esc(c.contact)}</a></div></div></section>`;
  return { path: '/about/', title: c.title, desc: c.desc, body, nav: 'about', image: largest('terrace-0'), preload: preload('terrace-0', sizes) };
}

/* -------------------------------------------------------------- RESIDENTS */
export function residents(L, { projects }) {
  const c = {
    he: { title: 'פניות דיירים', desc: 'מוקד פניות הדיירים של אשל הירדן: דיווח על תקלה, שאלה או בקשה בדירה ובבניין. טלפון מזכירות 04-8217171.', lead: 'גרים באחד הפרויקטים שלנו ונתקלתם בבעיה? מלאו את הפרטים ונציג יחזור אליכם בהקדם.', h2: 'פנייה חדשה', unit: 'בניין ודירה', unitHint: 'למשל: בניין 3, דירה 12', subject: 'נושא הפנייה', side: 'אפשר גם כך', sideTel: 'טלפון מזכירות לפניות דיירים', note: 'פנייה זו מיועדת לדיירים בפרויקטים של החברה. לשאלות על פרויקטים בשיווק פנו דרך עמוד הפרויקט.' },
    en: { title: 'Residents', desc: 'Eshel HaYarden residents\' service: report a fault or ask about your apartment or building. Office line +972 4 821 7171.', lead: 'Living in one of our projects and need something fixed? Fill in your details and a representative will get back to you soon.', h2: 'New request', unit: 'Building and apartment', unitHint: 'For example: building 3, apartment 12', subject: 'What is the request about?', side: 'Other ways to reach us', sideTel: 'Residents\' office line', note: 'This form is for residents of our projects. For projects on sale, please use the project page.' },
  }[L];
  const opts = projects.filter((p) => p.status !== 'planning').map((p) => `<option value="${esc(p.name.he + ', ' + p.city.he)}">${esc(t(p.name, L))}, ${esc(t(p.city, L))}</option>`).join('');
  const fields = `<div class="field"><label for="r-project">${esc(t(FORM.project, L))}</label><select id="r-project" name="project" required><option value="">${esc(t(FORM.choose, L))}</option>${opts}<option value="other">${esc(t(FORM.projectOther, L))}</option></select></div>` +
    `<div class="field"><label for="r-unit">${esc(c.unit)}</label><input id="r-unit" name="unit" aria-describedby="r-unit-h"><span class="hint" id="r-unit-h">${esc(c.unitHint)}</span></div>` +
    `<div class="field field--full"><label for="r-subject">${esc(c.subject)}</label><textarea id="r-subject" name="message" rows="5" required></textarea></div>`;
  const body = `
${head(L, c.title, c.lead)}
<section class="sec" style="padding-top:0" aria-labelledby="r-h"><div class="wrap cband">
  <div class="cband-info">
    <h2 class="h3">${esc(c.side)}</h2>
    <dl><div><dt>${esc(c.sideTel)}</dt><dd><a class="cband-tel num" href="${telHref(SITE.phone)}">${SITE.phone}</a></dd></div>
    <div><dt>${esc(t(T.email, L))}</dt><dd><a href="mailto:${SITE.email}">${SITE.email}</a></dd></div>
    <div><dt>${esc(t(T.address, L))}</dt><dd>${esc(t(SITE.address, L))}</dd></div></dl>
    <p class="small">${esc(c.note)}</p>
  </div>
  <div><h2 class="h3" id="r-h" style="margin-bottom:24px">${esc(c.h2)}</h2>
  ${form(L, { id: 'r-form', subject: 'פניית דייר מאתר אשל הירדן', fields, message: false, consent: false })}</div>
</div></section>`;
  return { path: '/residents/', title: c.title, desc: c.desc, body, nav: 'residents' };
}

/* ---------------------------------------------------------------- CONTACT */
export function contact(L) {
  const c = {
    he: { title: 'צור קשר', desc: 'יצירת קשר עם אשל הירדן: 04-8217171, mazkirut@eshelltd.co.il, רחוב התעשייה 51, נשר.', lead: 'משרדי החברה בנשר. נשמח לשמוע מכם בטלפון, בדוא״ל או דרך הטופס.', formH: 'שליחת הודעה', more: 'פניות נוספות', a11y: 'רכז הנגישות', hr: 'משאבי אנוש וקורות חיים', res: 'דיירים בפרויקטים שלנו' },
    en: { title: 'Contact', desc: 'Contact Eshel HaYarden: +972 4 821 7171, mazkirut@eshelltd.co.il, 51 HaTa\'asiya St., Nesher, Israel.', lead: 'Our offices are in Nesher, near Haifa. Call, email or use the form below.', formH: 'Send a message', more: 'Other enquiries', a11y: 'Accessibility coordinator', hr: 'Careers and CVs', res: 'Residents of our projects' },
  }[L];
  const body = `
${head(L, c.title, c.lead)}
<section class="sec--tight" style="padding-top:0"><div class="wrap"><dl class="cinfo">
  <div><dt class="label">${esc(t(T.phone, L))}</dt><dd><a href="${telHref(SITE.phone)}" dir="ltr">${SITE.phone}</a></dd><dd class="small">${esc(t(T.fax, L))}: <span dir="ltr">${SITE.fax}</span></dd></div>
  <div><dt class="label">${esc(t(T.email, L))}</dt><dd><a href="mailto:${SITE.email}">${SITE.email}</a></dd></div>
  <div><dt class="label">${esc(t(T.address, L))}</dt><dd>${esc(t(SITE.address, L))}</dd><dd class="small"><a href="${SITE.waze}" rel="noopener" target="_blank">${esc(t(T.navigate, L))}</a> · <a href="${SITE.gmaps}" rel="noopener" target="_blank">${esc(t(T.openMap, L))}</a></dd></div>
</dl></div></section>
<section class="sec" aria-labelledby="cf-h"><div class="wrap split">
  <div><h2 class="h2" id="cf-h">${esc(c.formH)}</h2>
    <dl class="aside" style="margin-top:36px">
      <div><dt>${esc(c.res)}</dt><dd><a href="${href(L, '/residents/')}">${esc(t(T.residents, L))}</a></dd></div>
      <div><dt>${esc(c.hr)}</dt><dd><a href="mailto:${SITE.hrEmail}">${SITE.hrEmail}</a></dd></div>
      <div><dt>${esc(c.a11y)}</dt><dd>${esc(t(SITE.a11yCoordinator.name, L))}, <a href="mailto:${SITE.a11yCoordinator.email}">${SITE.a11yCoordinator.email}</a></dd></div>
    </dl></div>
  ${form(L, { id: 'c-form', subject: 'פנייה מאתר אשל הירדן (צור קשר)' })}
</div></section>
<section class="sec--tight" style="padding-bottom:var(--sp-1)"><div class="wrap">${map('התעשייה 51, נשר', L, t(SITE.address, L))}</div></section>`;
  const ld = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: t(SITE.legalName, L), telephone: SITE.phoneIntl, email: SITE.email, faxNumber: '+97248214343',
    address: { '@type': 'PostalAddress', streetAddress: L === 'he' ? 'התעשייה 51' : '51 HaTa\'asiya St.', addressLocality: L === 'he' ? 'נשר' : 'Nesher', postalCode: SITE.zip, addressCountry: 'IL' },
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng }, url: SITE.origin + href(L, '/') };
  return { path: '/contact/', title: c.title, desc: c.desc, body, nav: 'contact', jsonld: [ld] };
}

/* ---------------------------------------------------------------- CAREERS */
const JOBS = [
  {
    code: 'JB-2000', title: { he: 'מנהל/ת פרויקט מגורים, אלעד', en: 'Residential Project Manager, Elad' },
    html: {
      he: '<p>לחברת אשל הירדן דרוש/ה מנהל/ת פרויקט מגורים חדש באלעד. הפרויקט הוא חלק ממתחם מגורים, מסחר, תעסוקה ופנאי גדול שנבנה בימים אלה על ידי החברה. ההצטרפות היא מהעלייה לקרקע ועד לאכלוס.</p><h3>התפקיד כולל</h3><ul><li>ניהול מלא של ביצוע הפרויקט תוך עמידה ביעדי בטיחות, איכות, תקציב ולוחות זמנים.</li><li>הובלת כלל פעילות הביצוע באתר, ניהול צוותי העבודה וקבלני המשנה.</li><li>תיאום בין כלל הגורמים המעורבים בפרויקט מטעם החברה.</li></ul><h3>דרישות</h3><ul><li>תואר ראשון בהנדסה אזרחית/בניין (B.Sc.), חובה.</li><li>ניסיון של לפחות 5 שנים בניהול ביצוע בפרויקטי מגורים מטעם חברה קבלנית בסיווג ג׳5.</li><li>ניסיון בניהול צוותים רב-מקצועיים: צוותי ביצוע, קבלני משנה וספקים.</li><li>היכרות מעמיקה עם תקנות הבטיחות והבנייה בישראל.</li><li>ניסיון בניהול ובקרת תקציבים ולוחות זמנים.</li><li>ניסיון בעבודה עם PRIORITY, יתרון.</li></ul>',
      en: '<p>Eshel HaYarden is looking for a project manager for a new residential project in Elad, part of a large residential, retail, employment and leisure complex now under construction. The role runs from groundbreaking to handover.</p><h3>The role</h3><ul><li>Full management of project execution against safety, quality, budget and schedule targets.</li><li>Leading all site activity and managing work crews and subcontractors.</li><li>Coordinating everyone involved in the project on the company\'s behalf.</li></ul><h3>Requirements</h3><ul><li>B.Sc. in civil or building engineering (required).</li><li>At least 5 years managing construction of residential projects for a G5-classified contractor.</li><li>Experience leading multidisciplinary teams: site crews, subcontractors and suppliers.</li><li>In-depth knowledge of Israeli safety and building regulations.</li><li>Experience managing budgets and schedules.</li><li>Experience with PRIORITY is an advantage.</li></ul>',
    },
  },
  {
    code: 'JB-6000', title: { he: 'מנהלי/ות עבודה שלד, חיפה, רכסים ואלעד', en: 'Structural Works Site Managers, Haifa, Rechasim and Elad' },
    html: {
      he: '<p>לחברת אשל הירדן, חברה יזמית קבלנית מובילה בענף הבנייה, דרושים/ות מנהלי/ות עבודה שלד לפרויקטי מגורים חדשים בחיפה, ברכסים ובאלעד.</p><h3>התפקיד כולל</h3><ul><li>ניהול שוטף של אתר הבנייה והובלת עבודות הביצוע.</li><li>אחריות לעמידה בלוחות זמנים, ביעדי ביצוע ובאיכות העבודה.</li><li>ניהול קבלנים, ספקים וקבלני כוח אדם.</li><li>יישום ואכיפה של תקנות הבטיחות וכל הוראת דין רלוונטית.</li></ul><h3>דרישות</h3><ul><li>הסמכה כמנהל/ת עבודה בבניין מטעם משרד העבודה, חובה.</li><li>ניסיון מוכח בניהול עבודות ביצוע מקצה לקצה בפרויקטי בנייה רוויה, חובה.</li><li>ידע מעמיק בשיטות ביצוע, קריאת תוכניות ומפרטים טכניים.</li><li>בקיאות בתקנות הבטיחות ובדרישות הרגולטוריות בענף.</li><li>ניסיון בניהול קבלני משנה וצוותים מרובי ממשקים.</li><li>יכולת ניהול, הובלה וקבלת החלטות תחת לחץ.</li></ul>',
      en: '<p>Eshel HaYarden, a leading developer and contractor, is hiring structural works site managers for new residential projects in Haifa, Rechasim and Elad.</p><h3>The role</h3><ul><li>Day-to-day management of the construction site and leading the works.</li><li>Responsibility for schedule, delivery targets and quality of work.</li><li>Managing contractors, suppliers and labour contractors.</li><li>Implementing and enforcing safety regulations and all relevant legal requirements.</li></ul><h3>Requirements</h3><ul><li>Certified construction site manager (Ministry of Labour), required.</li><li>Proven end-to-end experience managing works on apartment building projects, required.</li><li>In-depth knowledge of construction methods, drawings and technical specifications.</li><li>Thorough knowledge of safety regulations and industry requirements.</li><li>Experience managing subcontractors and multi-interface teams.</li><li>Strong leadership and decision-making under pressure.</li></ul>',
    },
  },
  {
    code: 'JB-4000', title: { he: 'מהנדסי/ות ביצוע, חיפה ורכסים', en: 'Site Engineers, Haifa and Rechasim' },
    html: {
      he: '<p>לחברת אשל הירדן, חברה יזמית קבלנית ותיקה, דרושים/ות מהנדסי/ות ביצוע לפרויקטי מגורים חדשים, משלב השלד ועד מסירת הדירות ללקוחות.</p><h3>התפקיד כולל</h3><ul><li>ניהול ופיקוח על ביצוע העבודות באתר בהתאם ללוחות זמנים, תקציב ודרישות איכות.</li><li>ניהול ותיאום קבלני משנה, ספקים וצוותי עבודה.</li><li>תכנון ובקרת ביצוע, פתרון בעיות הנדסיות בשטח ומתן מענה מקצועי.</li><li>מעקב אחר התקדמות הפרויקט והפקת דוחות התקדמות.</li><li>יישום נהלי בטיחות, איכות ובקרת איכות באתר.</li><li>עבודה שוטפת מול מנהל הפרויקט, המתכננים, היועצים, הפיקוח והרשויות.</li><li>ניהול תהליכי גמר, מסירות דירות, טיפול בליקויים והשלמת הפרויקט.</li></ul><h3>דרישות</h3><ul><li>תואר ראשון בהנדסה אזרחית (B.Sc.), חובה.</li><li>ניסיון של לפחות פרויקט מגורים מלא אחד כמהנדס/ת ביצוע, מהשלד ועד מסירה, חובה.</li><li>ניסיון בעבודה מול קבלני משנה, ספקים ויועצים.</li><li>יכולת ניהול, הובלת צוותים וקבלת החלטות בשטח.</li><li>שליטה בקריאת תוכניות וביישומי Office.</li></ul>',
      en: '<p>Eshel HaYarden, an established developer and contractor, is hiring site engineers for new residential projects, from the structural phase through to handing apartments over to buyers.</p><h3>The role</h3><ul><li>Managing and supervising site works to schedule, budget and quality requirements.</li><li>Managing and coordinating subcontractors, suppliers and crews.</li><li>Planning and controlling execution, solving engineering problems on site.</li><li>Tracking progress and producing progress reports.</li><li>Implementing safety, quality and quality-control procedures.</li><li>Working with the project manager, designers, consultants, supervision and authorities.</li><li>Managing finishing works, handovers, snagging and project completion.</li></ul><h3>Requirements</h3><ul><li>B.Sc. in civil engineering (required).</li><li>At least one full residential project as site engineer, from structure to handover (required).</li><li>Experience working with subcontractors, suppliers and consultants.</li><li>Leadership and on-site decision-making.</li><li>Able to read drawings; proficient in Office.</li></ul>',
    },
  },
];
export function careers(L) {
  const c = {
    he: { title: 'קריירה', h1: 'קריירה באשל הירדן', desc: 'משרות פתוחות באשל הירדן: ניהול פרויקטים, מנהלי עבודה ומהנדסי ביצוע. קורות חיים ל-HR@eshelltd.co.il.', lead: 'מחפשים אנשי מקצוע לפרויקטי מגורים בחיפה, ברכסים ובאלעד.', more: 'לתפקידים נוספים בתחום הנדל״ן, ביזמות, במטה ובביצוע, שלחו קורות חיים ל-', equal: 'המשרות מיועדות לנשים ולגברים כאחד.', apply: 'הגשת מועמדות' },
    en: { title: 'Careers', h1: 'Careers at Eshel HaYarden', desc: 'Open positions at Eshel HaYarden: project management, site management and site engineering. Send your CV to HR@eshelltd.co.il.', lead: 'We are looking for professionals for residential projects in Haifa, Rechasim and Elad.', more: 'For other roles in development, head office and construction, send your CV to ', equal: 'All positions are open to women and men alike. Roles are in Israel and require Hebrew.', apply: 'Apply' },
  }[L];
  const body = `
${head(L, c.h1, c.lead, c.title)}
<section class="sec" style="padding-top:0"><div class="wrap">
  <div class="jobs">${JOBS.map((j, i) => `<details${i === 0 ? ' open' : ''}><summary><b>${esc(t(j.title, L))}</b><span>${j.code}</span></summary><div class="prose">${t(j.html, L)}<p><a class="btn" href="mailto:${SITE.hrEmail}?subject=${encodeURIComponent(j.code + ' ' + j.title.he)}">${esc(c.apply)}</a></p></div></details>`).join('')}</div>
  <p class="lead" style="margin-top:40px">${esc(c.more)}<a href="mailto:${SITE.hrEmail}">${SITE.hrEmail}</a></p>
  <p class="small">${esc(c.equal)}</p>
</div></section>`;
  // No JobPosting structured data: the old site gives no posting dates, and we don't invent them.
  return { path: '/careers/', title: c.title, desc: c.desc, body };
}

/* ------------------------------------------------------------------- NEWS */
const fmtMonth = (ym, L) => new Date(ym + '-01T00:00:00').toLocaleDateString(L === 'he' ? 'he-IL' : 'en-GB', { month: 'long', year: 'numeric' });
export function news(L) {
  const c = {
    he: { title: 'כתבו עלינו', desc: 'אשל הירדן בתקשורת: כתבות על פרויקטים, התחדשות עירונית ופעילות החברה.', lead: 'כתבות ופרסומים על הפרויקטים והפעילות של אשל הירדן.' },
    en: { title: 'Press', desc: 'Eshel HaYarden in the media: coverage of our projects, urban renewal and company news.', lead: 'Media coverage of Eshel HaYarden\'s projects and activity. Most articles are in Hebrew.' },
  }[L];
  const body = `
${head(L, c.title, c.lead)}
<section class="sec" style="padding-top:0"><div class="wrap"><ul class="rows">
${PRESS.map((x) => { const internal = x.url.startsWith('/projects'); const u = internal ? href(L, x.url) : x.url; return `<li><a href="${esc(u)}"${internal ? '' : ' rel="noopener" target="_blank"'}><time datetime="${x.date}">${esc(fmtMonth(x.date, L))}</time><b>${esc(t(x.title, L))}</b><span class="end">${esc(x.outlet || '')}${internal ? '' : ` <span class="sr">${esc(t(T.externalNote, L))}</span>`}</span></a></li>`; }).join('')}
</ul></div></section>`;
  return { path: '/news/', title: c.title, desc: c.desc, body };
}

/* --------------------------------------------------------------- ARTICLES (Hebrew only) */
const fmtDay = (d) => new Date(d + 'T00:00:00').toLocaleDateString('he-IL', { day: 'numeric', month: 'long', year: 'numeric' });
export function articlesHub(articles) {
  const L = 'he';
  const body = `
${head(L, 'מאמרים', 'מדריכים ומידע על רכישת דירה, השקעות נדל״ן, התחדשות עירונית ומגורים בצפון.')}
<section class="sec" style="padding-top:0"><div class="wrap"><div class="acards">
${articles.map((a) => `<article class="tile">${a.image && hasMedia(a.image) ? `<div class="tile-img">${picture(a.image, { alt: a.image_alt || a.title, sizes: '(max-width:600px) 100vw, (max-width:1000px) 50vw, 33vw' })}</div>` : ''}<p class="tile-meta"><time datetime="${a.date}">${fmtDay(a.date)}</time></p><h2 class="tile-name"><a href="/articles/${a.slug}/">${esc(a.title)}</a></h2><p class="tile-sub">${esc(a.excerpt)}</p></article>`).join('')}
</div></div></section>`;
  return { path: '/articles/', title: 'מאמרים', desc: 'מאמרים ומדריכים של אשל הירדן: רכישת דירה, השקעות נדל״ן, התחדשות עירונית ומגורים בצפון.', body, noAlt: true, altFallback: '/news/' };
}
export function article(a) {
  const L = 'he';
  const body = `
<div class="wrap phead" style="padding-bottom:24px">
  ${crumbs(L, [[t(T.home, L), '/'], ['מאמרים', '/articles/'], [a.title]])}
  <h1 class="d1" style="font-size:var(--fs-3);max-width:20em">${esc(a.title)}</h1>
  <p class="p-meta"><time datetime="${a.date}">${fmtDay(a.date)}</time></p>
</div>
${a.image && hasMedia(a.image) ? `<div class="wrap">${picture(a.image, { alt: a.image_alt || a.title, sizes: '(max-width:1360px) 100vw, 1360px', eager: true, cls: 'banner' })}</div>` : ''}
<section class="sec"><div class="wrap"><div class="prose" style="margin-inline:auto">${a.html}</div>
<p style="max-width:42em;margin:48px auto 0"><a class="link arrow" href="/articles/">לכל המאמרים</a></p></div></section>`;
  const ld = { '@context': 'https://schema.org', '@type': 'Article', headline: a.title, datePublished: a.date, inLanguage: 'he', publisher: { '@type': 'Organization', name: SITE.legalName.he }, ...(a.image && hasMedia(a.image) ? { image: SITE.origin + largest(a.image) } : {}) };
  return { path: `/articles/${a.slug}/`, title: a.title, desc: a.description || a.excerpt, body, noAlt: true, altFallback: '/news/', ogType: 'article', image: a.image && hasMedia(a.image) ? largest(a.image) : undefined, preload: a.image && hasMedia(a.image) ? preload(a.image, '(max-width:1360px) 100vw, 1360px') : '', jsonld: [ld] };
}
