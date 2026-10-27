/* Accessibility menu. Self-contained: injects its own CSS + markup.
   Options match the accessibility statement (/accessibility/). State persists per browser. */
(function () {
  'use strict';
  var KEY = 'eshel-a11y', INK = '#122036', ACCENT = '#3f72b5';
  var LTR = document.documentElement.dir === 'ltr';
  var SIDE = LTR ? 'right' : 'left';
  var css = [
    '#jv-a11y{position:fixed;bottom:16px;' + SIDE + ':16px;z-index:60;font-family:inherit;direction:' + (LTR ? 'ltr' : 'rtl') + '}',
    '#jv-a11y-toggle{display:grid;place-items:center;width:48px;height:48px;border:0;background:' + INK + ';color:#fff;cursor:pointer;transition:background .2s}',
    '#jv-a11y-toggle:hover{background:' + ACCENT + '}',
    '#jv-a11y-toggle svg{width:26px;height:26px}',
    '#jv-a11y-panel{position:absolute;bottom:58px;' + SIDE + ':0;width:300px;max-width:calc(100vw - 32px);background:#fff;border:1px solid #d9dee5;box-shadow:0 18px 48px rgba(18,32,54,.18);padding:18px}',
    '#jv-a11y-panel p{font-weight:500;color:' + INK + ';margin:0 0 12px;font-size:15px}',
    '#jv-a11y-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px}',
    '#jv-a11y-grid button{display:flex;flex-direction:column;align-items:center;gap:4px;font:inherit;font-size:13px;color:' + INK + ';background:#f2f4f7;border:1px solid #d9dee5;padding:10px 6px;cursor:pointer}',
    '#jv-a11y-grid button:hover{border-color:' + INK + '}',
    '#jv-a11y-grid button[aria-pressed="true"]{background:' + INK + ';border-color:' + INK + ';color:#fff}',
    '#jv-a11y-grid button[data-a11y="reset"]{grid-column:1/-1;flex-direction:row;justify-content:center}',
    '#jv-a11y-grid .i{font-size:16px;line-height:1}',
    '#jv-a11y-panel a{display:block;margin-top:12px;text-align:center;font-size:14px;color:' + INK + '}',
    'html.a11y-fontup{font-size:118%}',
    'html.a11y-fontdown{font-size:90%}',
    'html.a11y-gray{--a11y-f:grayscale(1)}',
    'html.a11y-contrast{--a11y-f:contrast(1.4)}',
    'html.a11y-invert{--a11y-f:invert(1) hue-rotate(180deg)}',
    'html[class*="a11y-"] .hdr,html[class*="a11y-"] .mnav,html[class*="a11y-"] main,html[class*="a11y-"] .ftr{filter:var(--a11y-f,none)}',
    'html.a11y-light main,html.a11y-light .sec--navy,html.a11y-light .sec--mist,html.a11y-light .ftr,html.a11y-light .tile-blank{background:#fff!important;color:#111!important}',
    'html.a11y-light main *,html.a11y-light .ftr *{color:#111!important}',
    'html.a11y-light .btn{background:#111!important;color:#fff!important;border-color:#111!important}',
    'html.a11y-light .ftr-brand img{filter:invert(1)}',
    'html.a11y-links a{text-decoration:underline!important;text-underline-offset:3px}',
    'html.a11y-readable body *{font-family:Arial,Helvetica,sans-serif!important;letter-spacing:.02em!important}'
  ].join('\n');
  var B = LTR ? [
    ['fontup', 'A+', 'Bigger text'], ['fontdown', 'A-', 'Smaller text'], ['gray', '▦', 'Greyscale'], ['contrast', '◐', 'High contrast'],
    ['invert', '◑', 'Inverted'], ['light', '☀', 'Light background'], ['links', '⎘', 'Highlight links'], ['readable', 'Aa', 'Readable font'], ['reset', '↺', 'Reset']
  ] : [
    ['fontup', 'א+', 'הגדלת טקסט'], ['fontdown', 'א-', 'הקטנת טקסט'], ['gray', '▦', 'גווני אפור'], ['contrast', '◐', 'ניגודיות גבוהה'],
    ['invert', '◑', 'ניגודיות הפוכה'], ['light', '☀', 'רקע בהיר'], ['links', '⎘', 'הדגשת קישורים'], ['readable', 'אב', 'גופן קריא'], ['reset', '↺', 'איפוס']
  ];
  var groups = [['fontup', 'fontdown'], ['gray', 'contrast', 'invert', 'light']];
  var s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);
  var root = document.createElement('div'); root.id = 'jv-a11y';
  root.innerHTML =
    '<button id="jv-a11y-toggle" type="button" aria-expanded="false" aria-controls="jv-a11y-panel" aria-label="' + (LTR ? 'Accessibility menu' : 'תפריט נגישות') + '">' +
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/></svg></button>' +
    '<div id="jv-a11y-panel" role="dialog" aria-label="' + (LTR ? 'Accessibility settings' : 'הגדרות נגישות') + '" hidden><p>' + (LTR ? 'Accessibility settings' : 'הגדרות נגישות') + '</p><div id="jv-a11y-grid">' +
    B.map(function (b) { return '<button type="button" data-a11y="' + b[0] + '" aria-pressed="false"><span class="i" aria-hidden="true">' + b[1] + '</span><span>' + b[2] + '</span></button>'; }).join('') +
    '</div><a href="' + (LTR ? '/en/accessibility/' : '/accessibility/') + '">' + (LTR ? 'Accessibility statement' : 'הצהרת נגישות') + '</a></div>';
  document.body.appendChild(root);
  var toggle = document.getElementById('jv-a11y-toggle'), panel = document.getElementById('jv-a11y-panel');
  var state = {};
  try { state = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) {}
  function apply() {
    B.forEach(function (b) {
      if (b[0] === 'reset') return;
      var on = !!state[b[0]];
      document.documentElement.classList.toggle('a11y-' + b[0], on);
      root.querySelector('[data-a11y="' + b[0] + '"]').setAttribute('aria-pressed', String(on));
    });
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }
  function open(o) { panel.hidden = !o; toggle.setAttribute('aria-expanded', String(o)); }
  toggle.addEventListener('click', function () { open(panel.hidden); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) { open(false); toggle.focus(); } });
  document.addEventListener('click', function (e) { if (!panel.hidden && !root.contains(e.target)) open(false); });
  root.querySelectorAll('[data-a11y]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var k = btn.getAttribute('data-a11y');
      if (k === 'reset') { state = {}; apply(); return; }
      var on = !state[k];
      if (on) groups.forEach(function (g) { if (g.indexOf(k) > -1) g.forEach(function (x) { state[x] = false; }); });
      state[k] = on; apply();
    });
  });
  apply();
})();
