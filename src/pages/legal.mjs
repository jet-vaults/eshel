import { SITE, T } from '../copy.mjs';
import { esc, t, href, crumbs } from '../lib.mjs';

const page = (L, title, html, note = '') => `
<div class="wrap phead">
  ${crumbs(L, [[t(T.home, L), '/'], [title]])}
  <h1 class="d1">${esc(title)}</h1>
</div>
<section class="sec" style="padding-top:0"><div class="wrap">${note}<div class="prose">${html}</div></div></section>`;

const courtesy = `<p class="lead" style="margin-bottom:32px">This is a courtesy translation. The <a href="{he}">Hebrew version</a> is the binding text.</p>`;

/* Privacy: the company's Hebrew text, verbatim. Only technical correction: the site address,
   which on the old site was the malformed "https://www.dra-https://eshelltd.co.il/" (flagged in CONTENT_REVIEW.md). */
const PRIVACY_HE = `
<p>לנו באשל הירדן יזום ובנין בע"מ (להלן: <strong>"החברה"</strong>) אכפת מפרטיותך. לכן, אנחנו עושים כל מאמץ על מנת לייצר אתר שיעמוד בסטנדרטים גבוהים של פרטיות. הצהרת פרטיות זו מסדירה את המדיניות שלנו לגבי איסוף, שימוש וגילוי של מידע באתר האינטרנט שלנו, https://eshelltd.co.il/ (להלן: <strong>"האתר"</strong>) וכל תוכן ו/או כתובות דפים נוספים הכלולים תחת האתר.</p>
<p>אם אינך מסכים לתנאי כלשהו בתנאי הצהרת פרטיות זו, אנא הפסק את הגלישה וכל שימוש אחר באתר.</p>
<p>המדיניות מנוסחת בלשון זכר מטעמי נוחות בלבד והינה מתייחסת לכל המינים.</p>
<h2>כללי</h2>
<p>כללי הצהרת פרטיות זו מחייבת, ותחול בכל צפייה, גלישה, העלאת תוכן, וכל שימוש אחר באתר על ידי כל משתמש, ובאמצעות כל אמצעי או מכשיר כלשהו (להלן: <strong>"שימוש"</strong>).</p>
<p>אין חובה חוקית להסכים למסירה או לאיסוף המידע, או להצהרת פרטיות זו, ואתה עושה זאת מרצון, בכל שימוש באתר.</p>
<p>בכל שימוש באתר, הינך מצהיר ומתחייב שאתה בן 18 לפחות, או שאתה משתמש באתר באישור אחד מהוריך (או אפוטרופוס), המסכים להצהרת פרטיות זו במלואה.</p>
<p>האתר עשוי לכלול קישורים לאתרים שאינם בשליטתנו ואשר עשויים לאסוף ולהפיק מידע אודות הגולשים והמשתמשים בהם. כל מסירת מידע וכל שימוש אחר באתרים המקושרים, כפופים לתנאי השימוש ולמדיניות הפרטיות של האתרים המקושרים, ואינם בשליטתנו או באחריותנו.</p>
<h2>המידע שנאסף</h2>
<p><strong>(1) מידע אישי שאתה מוסר לנו במסגרת השימוש האתר</strong>: אנו עשויים לאסוף ולאחסן מידע שסופק על ידך, המזהה אותך או מתייחס אליך באופן אישי, כגון: שמך, פרטי הקשר שלך וכתובת הדוא"ל שלך.</p>
<p><strong>(2) מידע לא אישי שנאסף במסגרת השימוש באתר</strong>: אנו עשויים לאסוף מידע לא אישי אודותיך במהלך הגלישה באתר, כגון: באילו דפים ביקרת באתר שלנו, על אילו קישורים לחצת, סוג דפדפן האינטרנט שלך וכיוצ"ב.</p>
<p><strong>(3) מידע מצדדים שלישיים</strong>: אנו עשויים לקבל מידע אודותיך, מרשתות חברתיות וגופים אחרים, בהתאם לתנאי השימוש של צדדים שלישיים אלה וההרשאות שהגדרת בחשבונותיך.</p>
<p><strong>(4) כל מידע נוסף שהמשתמש מוסר או שמתקבל בקשר עם השימוש בשירותים.</strong></p>
<h2>מאגר המידע</h2>
<p>המידע שייאסף אודותייך יישמר במאגר המידע של החברה (להלן: <strong>"המאגר"</strong>). השימוש באתר ו/או בשירותים המוצעים על ידי החברה במסגרת האתר, מעידים על הסכמתך להצהרת פרטיות זו וכי מידע אודותיך יישמר וינוהל במאגר כאמור. השימוש במידע שבמאגר יעשה בהתאם להוראות הצהרת פרטיות זו או על-פי הוראות כל דין, למטרות המפורטות להלן.</p>
<h2>השימוש במידע</h2>
<p>המידע האישי אודותיך יישמר במאגר, בין היתר, למטרות הבאות:</p>
<ul><li>כדי לאפשר לך להשתמש באתר, בתכנים הכלולים בו ובשירותים שהוא מציע.</li><li>ליצירת קשר כאשר אנחנו סבורים שקיים צורך בכך לצורך מתן השירותים או לקיום הוראה אחרת על-פי דין.</li><li>לספק תמיכה ולטפל בבקשות או בתלונות.</li><li>רישום לניוזלטרים ורישום לחלק מהתוכניות או השירותים המוצעים על ידי החברה, בכפוף לקבלת הסכמות על פי דין.</li><li>על מנת למלא אחר דרישות כל חוק, תקנה או דבר חקיקה אחר וכן על מנת לסייע לרשויות מוסמכות ולכל צד שלישי, כאשר אנחנו סבורים בתום לב כי עלינו לעשות כן.</li></ul>
<p>מבלי לגרוע מהאמור לעיל, אנחנו נהיה רשאים לעשות שימוש במידע שאינו מזהה אותך אישית למטרות לגיטימיות שונות, למשל: לצורך שיפור השירותים והיישומים המוצעים באתר, התאמה של תכנים, שירותים ופרסומות המוצגים באתר, מחקר סטטיסטי לגבי אופן השימוש באתר, בשירותים ובתכנים המוצעים דרכו.</p>
<h2>העברת מידע לצדדים שלישיים ולחו"ל</h2>
<p>אנו עשויים להעביר מידע אודותיך לצדדים שלישיים, לרבות נותני שירותים שונים בישראל ובחו"ל, למטרות ולשימושים המפורטים בהצהרת פרטיות זו וכן לצרכי תמיכה והפעלת האתר (לרבות באמצעות "שירותי ענן", אחסון, תמיכה טכנית, גיבוי ותחזוקת מערכות).</p>
<ul><li><strong>צדדים שלישיים:</strong> השותפים העסקיים שלנו, נותני שירותים, קבלנו משנה, יועצים וכל ישות אחרת שגוף שיפוטי או רגולטורי כלשהו, יורה להעניק להם גישה למידע.</li><li><strong>העברת מידע לגורמים בחו"ל:</strong> בכל מקרה שנעביר מידע אודותיך אל מחוץ לגבולות ישראל, העברת המידע תבוצע בהתאם לחוק ולמדיניות פרטיות זו.</li></ul>
<p><strong>בנוסף, אנו עשויים להעביר מידע לצדדים שלישיים במקרים הבאים:</strong></p>
<ul><li>במקרה שתפר את תנאי האתר, או אם תבצע פעולות כלשהן שנראות כהפרה של החוק.</li><li>על מנת להתאים עבורך תכנים.</li><li>אם נקבל צו שיפוטי או הוראה רגולטורית, המורה לנו למסור את המידע.</li></ul>
<h2>שימוש ב"עוגיות" (Cookies)</h2>
<p>האתר עשוי לעשות שימוש ב-Cookies ("עוגיות") לצורך תפעולו השוטף והתקין, ובכלל זה כדי לאסוף נתונים סטטיסטיים אודות השימוש באתרים, לאימות פרטים, כדי להתאים את האתר להעדפותיך האישיות ולצרכי אבטחת מידע. ה-Cookies מכילות מידע מגוון כדוגמת הדפים שבהם ביקרת, משך הזמן ששהית באתר, מהיכן הגעת אל האתר, מדורים, מידע שאתה מבקש לראות בעת הכניסה לאתר ועוד.</p>
<p>אם אינך מעוניין לקבל Cookies, תוכל להימנע מכך על ידי שינוי ההגדרות בדפדפן שלך. לשם כך אנא העזר בקובץ העזרה של הדפדפן. נטרול ה-Cookies עלול לגרום לכך שלא תוכל להשתמש בחלק מהשירותים והתכונות באתר או באתרי אינטרנט אחרים.</p>
<h2>אבטחת מידע</h2>
<p>החברה נוקטת באמצעים ארגוניים, טכנולוגיים ומנהליים סבירים ומקובלים להגנה על המידע מפני גישה בלתי מורשית, שימוש לרעה, שינוי או חשיפה כלשהי. עם זאת, מערכות ההגנה ואבטחת המידע שלנו אינן חסינות לחלוטין מפני כל חדירה או גישה בלתי מורשית, והן אינן מספקות הגנה מוחלטת. לא נישא באחריות לנזק כלשהו שייגרם לך כתוצאה מחדירה, שימוש בלתי מורשה או גניבת מידע כאמור.</p>
<p>כל שימוש באתר עלול לחשוף אותך למגוון סכנות הכרוכות בשימוש באינטרנט ובכלל זה: חדירה למחשב או לטלפון נייד, וירוסים, תוכנות זדוניות וכיוצ"ב.</p>
<p>אנו ממליצים להתקין תוכנת אבטחה ואמצעי אבטחה נאותים לפני השימוש באתר.</p>
<h2>תקופת שמירת המידע</h2>
<p>המידע יישמר למשך הזמן הדרוש להשגת המטרות המפורטות לעיל או כנדרש על פי חוק.</p>
<h2>זכות לעיין במידע</h2>
<p>על-פי חוק הגנת הפרטיות, התשמ"א-1981 (להלן: <strong>"חוק הגנת הפרטיות"</strong>), כל אדם זכאי לעיין בעצמו, או על ידי בא-כוחו שהרשהו בכתב או על ידי אפוטרופוס, במידע שעליו המוחזק במאגר מידע. אדם שעיין במידע שעליו ומצא שאינו נכון, שלם, ברור או מעודכן, רשאי לפנות לבעל מאגר המידע בבקשה לתקן את המידע או למחקו. אם בעל המאגר סירב, עליו להודיע על כך למבקש באופן ובדרך שנקבעו בתקנות. על סירובו של בעל מאגר מידע לאפשר עיון ועל הודעת סירוב לתקן או למחוק מידע, רשאי מבקש המידע לערער באופן ובדרך שנקבעו בתקנות.</p>
<p>פנייה כזאת יש להפנות לחברה, באמצעות דוא"ל: <a href="mailto:mazkirut@eshelltd.co.il">mazkirut@eshelltd.co.il</a></p>
<p>בנוסף, אם המידע שבמאגר משמש לצורך פניה אישית אליך, אתה זכאי על-פי חוק הגנת הפרטיות לדרוש בכתב שהמידע המתייחס אלייך יימחק ממאגר המידע.</p>
<h2>שינויים בהצהרת הפרטיות</h2>
<p>החברה תהיה רשאית לעדכן הצהרת פרטיות זו מעת לעת. הגרסה המחייבת של הצהרת פרטיות זו היא הגרסה האחרונה המוצגת באתר, ואתה מקבל ומסכים להצהרת הפרטיות לרבות כל הוראותיה, וכל תיקון ועדכון שלה. אם אינך מסכים עם הנוסח המעודכן של ההצהרה, עלייך לחדול מלעשות שימוש נוסף באתר.</p>
<p>אנא עיין בעמוד זה מעת לעת על מנת לבדוק את הגרסה האחרונה והמחייבת ביותר של הצהרת פרטיות זו.</p>
<h2>שונות</h2>
<ul><li>אין במדיניות זו כדי לגרוע מכל זכות הנתונה לחברה לפי כל דין.</li><li>המשתמש אינו רשאי להסב זכויות/חובותיו לפי מדיניות זו. החברה רשאית להסב/להמחות זכויותיה/חובותיה במסגרת שינוי מבני/תאגידי, ובלבד שיוסיפו לחול עקרונות ההגנה הקבועים במדיניות זו.</li></ul>
<h2>הדין החל</h2>
<p>דיני מדינת ישראל. סמכות השיפוט הבלעדית: בתי המשפט במחוז חיפה.</p>
<h2>פרטי התקשרות</h2>
<p>לשאלות ופניות בנושאי פרטיות ומימוש זכויות, אנא צור איתנו קשר בדוא"ל: <a href="mailto:mazkirut@eshelltd.co.il">mazkirut@eshelltd.co.il</a> ו/או בכתובת: רחוב התעשייה 51 נשר, מיקוד: 3660102 ו/או בטלפון: <a href="tel:048217171">04-8217171</a></p>
<p>תאריך עדכון אחרון: ינואר 2026.</p>`;

const PRIVACY_EN = `
<p>At Eshel HaYarden Development &amp; Construction Ltd. (the <strong>"Company"</strong>) we care about your privacy, and we make every effort to run a website that meets high privacy standards. This privacy statement sets out our policy on collecting, using and disclosing information on our website, https://eshelltd.co.il/ (the <strong>"Site"</strong>), and any content or pages under it.</p>
<p>If you do not agree with any term of this privacy statement, please stop browsing and using the Site.</p>
<h2>General</h2>
<p>This privacy statement is binding and applies to every viewing, browsing, uploading of content and any other use of the Site by any user, through any means or device (<strong>"Use"</strong>).</p>
<p>You are under no legal obligation to agree to provide information, to its collection, or to this privacy statement; you do so voluntarily whenever you use the Site.</p>
<p>By using the Site you declare that you are at least 18 years old, or that you use the Site with the consent of a parent or guardian who accepts this privacy statement in full.</p>
<p>The Site may link to sites outside our control that may collect information about their visitors. Any information you provide to, and any use of, linked sites is subject to their own terms and privacy policies, and is not under our control or responsibility.</p>
<h2>Information we collect</h2>
<p><strong>(1) Personal information you give us when using the Site:</strong> we may collect and store information you provide that identifies or relates to you, such as your name, contact details and email address.</p>
<p><strong>(2) Non-personal information collected while you use the Site:</strong> such as which pages you visited, which links you clicked and your browser type.</p>
<p><strong>(3) Information from third parties:</strong> we may receive information about you from social networks and other bodies, according to their terms and the permissions you set in your accounts.</p>
<p><strong>(4) Any other information the user provides or that is received in connection with the services.</strong></p>
<h2>Database</h2>
<p>Information collected about you will be kept in the Company's database (the <strong>"Database"</strong>). Using the Site or the services offered through it indicates your consent to this privacy statement and to your information being kept and managed in the Database. Information will be used in accordance with this statement or as required by law, for the purposes below.</p>
<h2>How we use information</h2>
<ul><li>To let you use the Site, its content and services.</li><li>To contact you when we believe it is needed to provide the services or to comply with the law.</li><li>To provide support and handle requests or complaints.</li><li>To register you for newsletters and some Company programmes or services, subject to consent as required by law.</li><li>To comply with any law or regulation, and to assist competent authorities and third parties when we believe in good faith that we must.</li></ul>
<p>We may also use information that does not identify you personally for legitimate purposes such as improving the Site, tailoring content, services and advertising, and statistical research on how the Site is used.</p>
<h2>Transfers to third parties and abroad</h2>
<p>We may transfer information about you to third parties, including service providers in Israel and abroad, for the purposes in this statement and to support and operate the Site (including cloud, hosting, technical support, backup and maintenance services).</p>
<ul><li><strong>Third parties:</strong> our business partners, service providers, subcontractors, consultants and any entity a judicial or regulatory body instructs us to give access to.</li><li><strong>Transfers abroad:</strong> any transfer of your information outside Israel will be made in accordance with the law and this policy.</li></ul>
<p><strong>We may also transfer information to third parties:</strong> if you breach the Site's terms or appear to act unlawfully; to tailor content for you; or if a court order or regulatory instruction requires it.</p>
<h2>Cookies</h2>
<p>The Site may use cookies for its ordinary operation, including collecting usage statistics, verifying details, adapting the Site to your preferences and for information security. You can refuse cookies by changing your browser settings; disabling them may prevent some features from working.</p>
<h2>Information security</h2>
<p>The Company takes reasonable and accepted organisational, technological and administrative measures to protect information against unauthorised access, misuse, alteration or disclosure. However, no system is completely immune to intrusion, and we will not be liable for damage caused by intrusion, unauthorised use or theft of information. Any use of the internet exposes you to risks such as viruses and malicious software; we recommend appropriate security software.</p>
<h2>Retention</h2>
<p>Information is kept for as long as needed for the purposes above or as required by law.</p>
<h2>Your right to access information</h2>
<p>Under the Protection of Privacy Law, 5741-1981, every person may inspect information about them held in a database, personally or through an authorised representative or guardian, and request that inaccurate, incomplete, unclear or outdated information be corrected or deleted. Requests should be sent to <a href="mailto:mazkirut@eshelltd.co.il">mazkirut@eshelltd.co.il</a>. If the information is used to contact you personally, you may also demand in writing that it be deleted.</p>
<h2>Changes</h2>
<p>The Company may update this statement from time to time. The binding version is the latest one published on the Site.</p>
<h2>Governing law</h2>
<p>The laws of the State of Israel. Exclusive jurisdiction: the courts of the Haifa district.</p>
<h2>Contact</h2>
<p>For privacy questions and requests: <a href="mailto:mazkirut@eshelltd.co.il">mazkirut@eshelltd.co.il</a>, 51 HaTa'asiya St., Nesher 3660102, Israel, or +972 4 821 7171.</p>
<p>Last updated: January 2026 (Hebrew original).</p>`;

export function privacy(L) {
  const title = t(T.privacy, L);
  const html = L === 'he' ? PRIVACY_HE : PRIVACY_EN;
  return { path: '/privacy/', title, desc: L === 'he' ? 'מדיניות הפרטיות של אשל הירדן יזום ובנין בע״מ.' : 'Privacy policy of Eshel HaYarden Development & Construction Ltd.', body: page(L, title, html, L === 'en' ? courtesy.replace('{he}', '/privacy/') : '') };
}

/* Accessibility: the company's statement, adapted where it described the old site's third-party
   accessibility plugin (which this site does not use). Changes are listed in CONTENT_REVIEW.md for approval. */
export function accessibility(L) {
  const co = SITE.a11yCoordinator;
  const he = `
<h2>הסדרי נגישות</h2>
<p>חברת אשל הירדן יזום ובנין בע"מ נוקטת את מירב המאמצים ומשקיעה משאבים רבים על מנת לספק לכל לקוחותיה שירות שוויוני, מכובד, נגיש ומקצועי. בהתאם לחוק שוויון זכויות לאנשים עם מוגבלויות תשנ"ח-1998 ולתקנות שהותקנו מכוחו, מושקעים מאמצים ומשאבים רבים בביצוע התאמות הנגישות הנדרשות שיביאו לכך שאדם בעל מוגבלות יוכל לקבל את השירותים הניתנים לכלל הלקוחות, באופן עצמאי ושוויוני.</p>
<h2>מידע על נגישות האתר</h2>
<p>אנחנו באשל הירדן יזום ובנין בע"מ תמיד שואפים לספק לקהל הרחב הגולש באתר תוכן נגיש ככל שניתן. האתר נבנה מחדש מתוך כוונה לעמוד בדרישות תקן ישראלי 5568, המבוסס על הנחיות WCAG ברמה AA, ונבדק בדפדפנים המובילים.</p>
<p>בין היתר: מבנה כותרות וסימון סמנטי, ניווט מלא במקלדת עם סימון מיקוד ברור, קישור "דילוג לתוכן", טקסט חלופי לתמונות, ניגודיות צבעים מספקת, טפסים עם תוויות ברורות והודעות שגיאה, התאמה למסכים בכל גודל, וכיבוד הגדרת "הפחתת תנועה" של מערכת ההפעלה.</p>
<p>באתר תפריט נגישות (הכפתור בפינת המסך) המאפשר הגדלת טקסט, ניגודיות גבוהה, גווני אפור, רקע בהיר, הדגשת קישורים וגופן קריא.</p>
<p>בשל תנאים שאינם בשליטתנו, ייתכנו מקרים בהם לא נהיה מסוגלים לספק את המידע בצורה נגישה, לרבות משום שחלקים מסוימים באתר, כגון תכנים של צדדים שלישיים (מפות וסרטונים), טרם הונגשו במלואם. אנו נעקוב אחר מקרים אלו על מנת שנוכל לספק את הפתרון המתאים.</p>
<p><strong>מסירת מידע בפורמט נגיש:</strong> בהתאם לצורך אנו מעמידים עבור לקוחותינו אפשרות לקבלת מידע בפורמטים נגישים. מסירת המידע הינה ללא עלות ומיועדת עבור אנשים עם מוגבלות בהתאם לצרכיהם הספציפיים ככל האפשר.</p>
<p>במידה שנתקלת בבעיה או תקלה כלשהי בנושא הנגישות, נשמח להתעדכן בכך. אנו נעשה כל מאמץ למצוא פתרון מתאים ולטפל בפנייה בהקדם האפשרי. כדי שנוכל לטפל בבעיה בדרך הטובה ביותר, אנו ממליצים לצרף פרטים מלאים ככל האפשר:</p>
<ol><li>תיאור הבעיה</li><li>מהי הפעולה שניסיתם לבצע?</li><li>באיזה דף גלשתם?</li><li>סוג וגרסה של הדפדפן</li><li>מערכת הפעלה</li><li>סוג הטכנולוגיה המסייעת (במידה והשתמשתם)</li></ol>
<h2>נגישות המשרדים</h2>
<p>משרד ראשי, התעשייה 51, נשר: מקומות חניה נגישים ברחוב הסמוך, כניסה נגישה, עמדת קבלת קהל נגישה, מערכת עזר לשמיעה.</p>
<h2>פרטי רכז הנגישות</h2>
<p>שם רכז הנגישות: ${esc(co.name.he)}<br>טלפון: <a href="tel:048217171">04-8217171</a> שלוחה ${co.ext}<br>דוא"ל: <a href="mailto:${co.email}">${co.email}</a><br>פקס: 04-8214343</p>
<p>הצהרה זו עודכנה באוקטובר 2026, עם השקת האתר החדש.</p>`;
  const en = `
<h2>Our commitment</h2>
<p>Eshel HaYarden Development &amp; Construction Ltd. makes every effort to give all customers equal, respectful, accessible and professional service, in line with the Equal Rights for Persons with Disabilities Law, 5758-1998, and its regulations.</p>
<h2>About this website</h2>
<p>The website has been rebuilt with the aim of meeting Israeli Standard 5568, which is based on the WCAG guidelines at level AA, and has been tested in the main browsers.</p>
<p>This includes semantic structure and headings, full keyboard navigation with a clear focus indicator, a "skip to content" link, text alternatives for images, sufficient colour contrast, clearly labelled forms with error messages, responsive layouts for all screen sizes, and respect for the system "reduce motion" setting.</p>
<p>An accessibility menu (the button in the corner of the screen) lets you enlarge text, increase contrast, switch to greyscale or a light background, highlight links and use a more readable font.</p>
<p>Despite our efforts, some content, such as third-party maps and videos, may not yet be fully accessible. We monitor these cases and work to resolve them.</p>
<p><strong>Information in accessible formats</strong> is available on request, free of charge, for people with disabilities.</p>
<p>If you encounter an accessibility problem, please tell us. It helps to include a description of the problem, what you were trying to do, the page, your browser and version, your operating system and any assistive technology you use.</p>
<h2>Office accessibility</h2>
<p>Head office, 51 HaTa'asiya St., Nesher: accessible parking on the adjacent street, accessible entrance, accessible reception desk and a hearing assistance system.</p>
<h2>Accessibility coordinator</h2>
<p>${esc(co.name.en)}<br>Phone: <a href="tel:+97248217171">+972 4 821 7171</a>, ext. ${co.ext}<br>Email: <a href="mailto:${co.email}">${co.email}</a><br>Fax: +972 4 821 4343</p>
<p>Statement updated October 2026, with the launch of the new website.</p>`;
  const title = t(T.accessibility, L);
  return { path: '/accessibility/', title, desc: L === 'he' ? 'הצהרת הנגישות של אתר אשל הירדן ופרטי רכז הנגישות.' : 'Accessibility statement for the Eshel HaYarden website and accessibility coordinator details.', body: page(L, title, L === 'he' ? he : en, L === 'en' ? courtesy.replace('{he}', '/accessibility/') : '') };
}

export function legal(L) {
  const title = t(T.legal, L);
  const html = L === 'he'
    ? `<h2>דו״ח פומבי, חוק שכר שווה, שנת 2025</h2><p>דו״ח פומבי על פי הוראות סעיף 6ב לחוק שכר שווה לעובדת ולעובד.</p><p><a class="link arrow" href="/assets/files/equal-pay-report-2025.pdf">לצפייה בדו״ח (PDF)</a></p>`
    : `<h2>Equal Pay Law public report, 2025</h2><p>Public report under section 6B of the Equal Pay for Female and Male Employees Law (in Hebrew).</p><p><a class="link arrow" href="/assets/files/equal-pay-report-2025.pdf" hreflang="he">View the report (PDF, Hebrew)</a></p>`;
  return { path: '/legal/', title, desc: L === 'he' ? 'מידע משפטי ודיווחים של אשל הירדן יזום ובנין בע״מ.' : 'Legal information and reports of Eshel HaYarden Development & Construction Ltd.', body: page(L, title, html) };
}

export function notFound(L) {
  const c = L === 'he'
    ? { title: 'העמוד לא נמצא', p: 'ייתכן שהכתובת השתנתה עם השקת האתר החדש.', a: 'לדף הבית', b: 'לפרויקטים' }
    : { title: 'Page not found', p: 'The address may have changed when the new site launched.', a: 'Home', b: 'Projects' };
  const body = `<div class="wrap phead" style="min-height:50vh"><h1 class="d1">${esc(c.title)}</h1><p class="lead" style="margin:22px 0 32px">${esc(c.p)}</p><div class="actions"><a class="btn" href="${href(L, '/')}">${esc(c.a)}</a><a class="link arrow" href="${href(L, '/projects/')}">${esc(c.b)}</a></div></div>`;
  return { path: L === 'he' ? '/404' : '/404', title: c.title, desc: c.p, body };
}
