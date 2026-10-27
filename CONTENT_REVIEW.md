# Eshel HaYarden: content sources and items for client confirmation

Source of truth for every fact on the new site: the live site https://eshelltd.co.il/ as crawled on 2026-10-27
(raw crawl in `_source/`, not committed). Nothing below was invented; where the old site was unclear or
contradictory, the new site either omits the claim or uses the most conservative wording, and the item is listed here.

## A. Company facts used, and where they come from

| Fact on new site | Value | Source on old site |
|---|---|---|
| Active since | 1994 | About (מי אנחנו): "פועלת החל משנת 1994"; Home: "משנת 1994" |
| Contractor classification | ג׳5, the highest | About: "בעלת הסיווג הגבוה ביותר של רשם הקבלנים – ג'5" |
| Safety Star | Stars programme with the Builders Association | About: "כוכב בטיחות של תוכנית הכוכבים בשיתוף התאחדות הקבלנים" |
| Homes occupied | 2,725+ | Home counter (`data-to-value=2725`, suffix "+") |
| Homes in planning | 3,211+ | Home counter (`data-to-value=3211`) |
| Homes under construction | about 1,000 | About: "כ-1,000 יחידות דיור" |
| Urban renewal | about 13,000 new homes | About + Urban renewal page |
| 30+ years | 30+ | Home counter (`data-to-value=30`), Urban renewal ("30 שנות ניסיון") |
| Model | development, architectural planning, construction under one roof | About |
| Regions | Galilee, Nahariya, Migdal HaEmek, Karmiel, Tiberias, Haifa, Yokneam; past projects in Europe | About |
| Bonds | Feb 2023, reporting private company with bonds | About |
| Senior care expansion | care homes, assisted living, geriatric hospital | About |
| Values | ערכים, ציונות, הלקוח במרכז, ייחודיות, התחדשות עירונית | About |
| Urban renewal examples | Yokneam (~97 dunam, ~452 to ~2,000 units), Migdal HaEmek Keren HaYesod/HaNesi'im (176 to 1,000+), Haifa HaToren (~230 to 1,000+) | Urban renewal page |
| Urban renewal benefits (11 items) | as listed | Urban renewal page, "כל היתרונות במקום אחד" |
| Contact | 04-8217171, fax 04-8214343, mazkirut@eshelltd.co.il, HR@eshelltd.co.il, רחוב התעשייה 51 נשר, מיקוד 3660102 | Footer, privacy policy, accessibility statement, careers |
| Accessibility coordinator | ישראל מאיר וייל, ext. 127, israel@eshelltd.co.il | Accessibility statement |

Project facts come from each project's own page (21 projects); see `src/content/projects.json`.

## B. Please confirm (most important first)

1. **Years of activity.** The old meta description says "למעלה מעשרים ושמונה שנים", the counters say 30+, the About page says since 1994. The new site uses "since 1994" and "30+".
2. **"רבבות יחידות דיור".** About says the group delivered "רבבות" (tens of thousands of) homes, but the home counter says 2,725+ occupied. The new site does not repeat "רבבות" until clarified.
3. **Counters still current?** 2,725+ occupied, 3,211+ in planning, about 1,000 under construction, about 13,000 urban renewal.
4. **Project statuses.**
   - רובע אלונים and רובע אלונים צמודי קרקע are under "בשיווק" but say all units are sold (one 128 m² retail unit left). Keep under selling, or move to completed/sold?
   - מגדלי הנשיא is under "מאוכלסים", but the text says it is being occupied now and one penthouse remains.
   - דניה הירוקה, בית עמיחי, רכסים (mixed use), מע״ר רכסים, קריית אתא are shown as "בתכנון", as on the old site.
5. **רובע אלונים neighbourhood name.** The page heading says "קרית רבין", the text says "קרית בגין". The new site avoids naming it.
6. **Elad location sentence** ("3 ק״מ מדרום לראשון לציון ופתח תקווה") looks geographically wrong; omitted.
7. **Partners.** The Elad page shows the Ravitz and "קבוצת ידות" logos. The Kiryat Ata text names "ריביירה צרפת ישראל בע״מ" but the page shows the Ravitz logo. Which is right? English spelling of ידות (used: "Yedot")? The text says "קבוצת מגידו" while the logo reads "MEGID by AURA" (English used: "Megido Group").
8. **Prices** (Ahuzat Ya'ar from ₪3,680,000; Nofim last garden apartment ₪2,300,000) were left out. Publish them?
9. **Sales lines.** *2491 (Ahuzat Ya'ar, Nofim ext. 2), *3569 (HaParsa), *6487 (Migdalei HaNasi), 050-6274196 (Rova Alonim retail; on the old site this button actually dialled "2247*").
10. **Images shared between projects on the old site** (picked by eye for the new site; please confirm):
    - Neot Navon's slider included Rechasim "coming soon" graphics and the Denya aerial; those were removed from Neot Navon.
    - Beit Amichai's page showed the Migdalei HaNasi towers (removed). `2-6.jpg` (building over an arcade with palms) appears on both pages; it is used for Beit Amichai, whose text describes an arcade.
    - Ahuzat Ya'ar's slider included Rova Alonim villa renders; the flat-roof villas are used for Rova Alonim Villas, the red-roof houses for Ahuzat Ya'ar.
    - Rechasim, Ma'ar Rechasim and Kiryat Ata only had "coming soon" overlays; clean renders from the listing pages are used, and Kiryat Ata has no image.
11. **Maps.** Several old map embeds pointed at the wrong city (Denya showed Karmiel, Beit Amichai showed Nahariya, Rechasim showed Haifa). The new site maps each project's city; exact addresses or coordinates would be better.
12. **Pisgat Sagi and Pisgat Machosh** both list 57 units. Correct?
13. **Sheltered housing page** (סיעוד ודיור מוגן) is Lorem ipsum on the old site; not migrated (redirects to /projects/).
14. **Press list.** One item is dated "דצמבר 25, 2026" (future); the PDF was uploaded in Dec 2025, so it is shown as Dec 2025. The item about Sela Binui / Issta / Barel winning a Haifa tender is not obviously about Eshel HaYarden and was left out. English spelling of "אדי ידלין" (used: Adi Yedlin)?
15. **No management/team information** on the old site beyond a 2023 press item. Add a leadership section?
16. **Office hours** are not published anywhere; add?

## C. Legal and consent (wording changes need approval)

- **Privacy policy:** company text kept verbatim. One technical correction: the site address was the malformed `https://www.dra-https://eshelltd.co.il/` (linking to dra-law.com); now `https://eshelltd.co.il/`. The page heading link to `http://G` (also on משפטי and כתבו עלינו) was dropped.
- **English privacy policy and accessibility statement** are courtesy translations; each says the Hebrew version is binding.
- **Accessibility statement:** the old text described the third-party "UA USER ACCESSIBILITY" plugin (F1 help) and stated AA compliance. The new site has no third-party plugin, so that paragraph was replaced with a description of the new site's built-in features and a softened claim ("built with the aim of meeting IS 5568, level AA"). Coordinator details, office accessibility and the reporting checklist are unchanged. Needs the coordinator's approval.
- **Marketing consent checkbox:** kept with the company's verbatim text, but optional on sales/contact forms, and removed from the residents form (a service request should not require marketing consent; the old residents form made it mandatory). Each form now shows a short privacy note instead.
- **Cookie notice:** the new site sets no tracking cookies (only display preferences in local storage), so the notice says exactly that. If analytics or ad pixels are added later, a consent step is needed.
- **Equal pay report 2025** PDF is hosted on the new site (`/assets/files/equal-pay-report-2025.pdf`).

## D. Translation choices to confirm

Project names in English: Neot Navon, KAVA (Mul Arbel), Elad Center, Ahuzat Ya'ar, HaParsa Neighbourhood, Nofim, Rova Alonim, Rova Alonim Villas, Kiryat Ata North, Mixed-use Quarter (Rechasim), Rechasim Business Centre, Green Denya, Beit Amichai, Terrace, Migdalei HaNasi, The Valley, HaShechuna HaLevana, Lev HaPisga, U New, Pisgat Sagi, Pisgat Machosh.
Terms: מחיר למשתכן is "government-assisted housing" (programme name kept in the Terrace text); מחיר מטרה is "target-price"; התחדשות עירונית is "urban renewal"; ג׳5 is "G5"; the value "ערכים" is rendered "Principles".

## E. Articles (Hebrew only, migrated verbatim)

38 articles (37 posts + the מחיר למשתכן page). A duplicate post was merged (old URL redirects). Worth a look before going live: four Sky Park (Elad) posts are promotional with numeric claims; a 2023 price table and 2021 מחיר למשתכן figures are probably out of date; the מחיר למשתכן page has typos ("שלג ג"). English visitors see the press page instead; articles have no English versions.

## F. Before go-live

- Web3Forms access key, and which inbox receives sales, residents and urban-renewal forms.
- Final domain (set `SITE.origin`), then `npm run build:prod`.
