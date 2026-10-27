/* Eshel HaYarden - site behaviour. No dependencies. Everything here is progressive:
   the HTML is complete and usable without this file. */
(function () {
  'use strict';
  var d = document, root = d.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var he = root.lang === 'he';

  /* Header state: a sentinel at the top of the page tells us when we've scrolled. */
  var header = d.querySelector('.hdr');
  var sentinel = d.querySelector('.hdr-sentinel');
  if (header && sentinel && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (e) {
      header.classList.toggle('is-scrolled', !e[0].isIntersecting);
    }).observe(sentinel);
  }

  /* Mobile menu */
  var toggle = d.querySelector('.nav-toggle');
  var panel = d.getElementById('mnav');
  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
    root.classList.toggle('menu-open', open);
    if (open) { var f = panel.querySelector('a'); if (f) f.focus(); }
  }
  if (toggle && panel) {
    toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
    d.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.hidden) { setMenu(false); toggle.focus(); }
    });
    panel.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  }

  /* Reveal on enter. Content is visible by default; .js-reveal is only added when motion is allowed. */
  var rev = d.querySelectorAll('[data-reveal]');
  if (!reduce && rev.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    // Anything already on screen is marked visible *before* reveal mode starts, so it never blinks.
    rev.forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('is-in'); else io.observe(el);
    });
    root.classList.add('js-reveal');
  }

  /* Project filter */
  var filter = d.querySelector('[data-filter]');
  if (filter) {
    var items = d.querySelectorAll('[data-status]');
    var count = d.querySelector('[data-filter-count]');
    var btns = filter.querySelectorAll('button[data-value]');
    var apply = function (v, push) {
      var n = 0;
      btns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.value === v)); });
      items.forEach(function (it) {
        var show = v === 'all' || it.dataset.status === v;
        it.hidden = !show; if (show) n++;
      });
      if (count) count.textContent = count.dataset[he ? 'tplHe' : 'tplEn'].replace('{n}', n);
      if (push) {
        var u = new URL(location.href);
        if (v === 'all') u.searchParams.delete('status'); else u.searchParams.set('status', v);
        history.replaceState(null, '', u);
      }
    };
    btns.forEach(function (b) { b.addEventListener('click', function () { apply(b.dataset.value, true); }); });
    var q = new URLSearchParams(location.search).get('status');
    if (q && filter.querySelector('[data-value="' + q + '"]')) apply(q, false);
  }

  /* Gallery lightbox, using the native <dialog>. */
  var gal = d.querySelector('[data-gallery]');
  var dlg = d.getElementById('lightbox');
  if (gal && dlg && dlg.showModal) {
    var links = Array.prototype.slice.call(gal.querySelectorAll('a[data-full]'));
    var img = dlg.querySelector('img'), cap = dlg.querySelector('.lb-count'), idx = 0;
    var show = function (i) {
      idx = (i + links.length) % links.length;
      var a = links[idx];
      img.src = a.dataset.full; img.alt = a.querySelector('img').alt;
      cap.textContent = (idx + 1) + ' / ' + links.length;
    };
    links.forEach(function (a, i) {
      a.addEventListener('click', function (e) { e.preventDefault(); show(i); dlg.showModal(); });
    });
    var step = function (n) { show(idx + (he ? -n : n)); };
    dlg.querySelector('.lb-prev').addEventListener('click', function () { step(-1); });
    dlg.querySelector('.lb-next').addEventListener('click', function () { step(1); });
    dlg.querySelector('.lb-close').addEventListener('click', function () { dlg.close(); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') step(he ? -1 : 1);
      if (e.key === 'ArrowLeft') step(he ? 1 : -1);
    });
  }

  /* Click-to-load embeds (video, maps, social). Nothing third-party loads until asked. */
  d.querySelectorAll('[data-embed]').forEach(function (b) {
    b.addEventListener('click', function () {
      var f = d.createElement('iframe');
      f.src = b.dataset.embed; f.title = b.dataset.title || '';
      f.loading = 'lazy'; f.allow = 'autoplay; fullscreen; picture-in-picture';
      f.setAttribute('allowfullscreen', '');
      var w = b.parentNode; w.replaceChild(f, b); w.classList.add('is-loaded');
    });
  });

  /* Forms: POST as JSON to the form's action. Falls back to normal submit without JS. */
  d.querySelectorAll('form[data-ajax]').forEach(function (form) {
    var status = form.querySelector('.form-status');
    form.addEventListener('submit', function (e) {
      if (!form.checkValidity()) return;
      e.preventDefault();
      var btn = form.querySelector('[type=submit]');
      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = v; });
      btn.disabled = true;
      status.className = 'form-status'; status.textContent = form.dataset.sending;
      fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data)
      }).then(function (r) { return r.json().then(function (j) { return r.ok && j.success !== false; }); })
        .catch(function () { return false; })
        .then(function (ok) {
          btn.disabled = false;
          status.className = 'form-status ' + (ok ? 'is-ok' : 'is-err');
          status.textContent = ok ? form.dataset.ok : form.dataset.err;
          if (ok) form.reset();
          status.focus();
        });
    });
  });

  /* Forms without a delivery key yet: validate, then point people to the phone/email instead of failing. */
  d.querySelectorAll('form[data-offline]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var status = form.querySelector('.form-status');
      status.className = 'form-status is-err';
      status.textContent = form.dataset.offlineMsg;
      status.focus();
    });
  });
  d.querySelectorAll('form[data-ajax]').forEach(function (form) {
    form.addEventListener('submit', function () { form.reportValidity(); }, true);
  });

  /* Cookie notice: a small, dismissible strip. Remembered per browser. */
  var ck = d.getElementById('cookie');
  if (ck) {
    var seen = false;
    try { seen = localStorage.getItem('ck') === '1'; } catch (e) {}
    if (!seen) ck.hidden = false;
    ck.querySelector('button').addEventListener('click', function () {
      ck.hidden = true;
      try { localStorage.setItem('ck', '1'); } catch (e) {}
    });
  }
})();
