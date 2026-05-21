/* ==========================================================================
   PRECISION JIU-JITSU — THE BARRACKS
   Shared scripts: lead modal, nav scroll, marquee, schedule, booking page,
   GSAP scroll reveals, dynamic copyright year, stat counters.
   ========================================================================== */

(function () {
  'use strict';

  // -------- 1. Lucide icons --------
  function initIcons() {
    try {
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    } catch (e) {}
  }

  // -------- 2. Dynamic copyright year --------
  function initYear() {
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  // -------- 3. Nav scroll behavior --------
  function initNavScroll() {
    var nav = document.querySelector('.nav');
    if (!nav) return;
    var toggleScrolled = function () {
      if (window.scrollY > 32) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    toggleScrolled();
    window.addEventListener('scroll', toggleScrolled, { passive: true });
  }

  // -------- 4. Mobile nav toggle --------
  function initMobileNav() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var isOpen = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    nav.querySelectorAll('.nav-mobile a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // -------- 5. Marquee duplication (for seamless loop) --------
  function initMarquee() {
    document.querySelectorAll('.marquee-track').forEach(function (track) {
      if (track.dataset.duplicated === 'true') return;
      var children = Array.from(track.children);
      children.forEach(function (child) {
        track.appendChild(child.cloneNode(true));
      });
      track.dataset.duplicated = 'true';
    });
  }

  // -------- 6. Stat counter animation --------
  function initStatCounters() {
    var counters = document.querySelectorAll('.stat-num[data-target]');
    if (!counters.length || !('IntersectionObserver' in window)) return;

    var animateCounter = function (el) {
      var target = parseFloat(el.dataset.target);
      var suffix = el.dataset.suffix || '';
      var duration = 1200;
      var start = 0;
      var startTime = null;
      var ease = function (t) { return 1 - Math.pow(1 - t, 3); };

      // Pre-build the suffix span once so we can re-use it
      var numNode = el.querySelector('.num-val');
      var suffixNode = el.querySelector('.suffix');
      if (!numNode) {
        el.textContent = '';
        numNode = document.createElement('span');
        numNode.className = 'num-val';
        el.appendChild(numNode);
        if (suffix) {
          suffixNode = document.createElement('span');
          suffixNode.className = 'suffix';
          suffixNode.textContent = suffix;
          el.appendChild(suffixNode);
        }
      }

      var step = function (timestamp) {
        if (!startTime) startTime = timestamp;
        var elapsed = timestamp - startTime;
        var progress = Math.min(elapsed / duration, 1);
        var current = Math.round(start + (target - start) * ease(progress));
        numNode.textContent = String(current);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          entry.target.dataset.animated = 'true';
          animateCounter(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { io.observe(el); });
  }

  // -------- 7. GSAP scroll reveals --------
  function initScrollReveals() {
    if (!window.gsap || !window.ScrollTrigger) return;
    try {
      gsap.registerPlugin(ScrollTrigger);
    } catch (e) { return; }

    gsap.utils.toArray('.fade-in-up').forEach(function (el, idx) {
      gsap.fromTo(el,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          delay: (idx % 3) * 0.08,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true
          }
        }
      );
    });
  }

  // -------- 8. LEAD MODAL --------
  function initLeadModal() {
    var modal = document.getElementById('leadModal');
    if (!modal) return;

    var form = modal.querySelector('form');
    var closeBtns = modal.querySelectorAll('[data-close-modal]');
    var programSelect = modal.querySelector('select[name="program"]');

    var openModal = function (preselectedProgram) {
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (preselectedProgram && programSelect) {
        programSelect.value = preselectedProgram;
      }
      var firstInput = modal.querySelector('input, select');
      if (firstInput) setTimeout(function () { firstInput.focus(); }, 120);
    };

    var closeModal = function () {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    document.addEventListener('click', function (e) {
      var trigger = e.target.closest('[data-cta="lead-modal"]');
      if (trigger) {
        e.preventDefault();
        openModal(trigger.dataset.program || '');
      }
    });

    closeBtns.forEach(function (btn) {
      btn.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });

    var phoneInput = modal.querySelector('input[name="phone"]');
    if (phoneInput) {
      phoneInput.addEventListener('input', function (e) {
        var digits = e.target.value.replace(/\D/g, '').slice(0, 10);
        var out = '';
        if (digits.length > 0) out = '(' + digits.slice(0, 3);
        if (digits.length >= 4) out += ') ' + digits.slice(3, 6);
        if (digits.length >= 7) out += '-' + digits.slice(6);
        e.target.value = out;
      });
    }

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var valid = true;
        form.querySelectorAll('[required]').forEach(function (field) {
          var parent = field.closest('.form-field');
          if (!field.value.trim()) {
            valid = false;
            if (parent) parent.classList.add('has-error');
          } else {
            if (parent) parent.classList.remove('has-error');
          }
        });
        var emailField = form.querySelector('input[type="email"]');
        if (emailField && emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
          valid = false;
          var parent = emailField.closest('.form-field');
          if (parent) parent.classList.add('has-error');
        }
        if (!valid) return;

        var data = Object.fromEntries(new FormData(form).entries());
        try {
          sessionStorage.setItem('leadFormData', JSON.stringify(data));
        } catch (err) {}

        // Meta Pixel — Lead conversion
        if (typeof window.fbq === 'function') {
          window.fbq('track', 'Lead', {
            content_name: data.program || 'lead-modal',
            content_category: 'free-trial'
          });
        }

        // GHL webhook URLs per program (each program fires two webhooks)
        var webhookMap = {
          'adult-bjj': [
            'https://services.leadconnectorhq.com/hooks/WWCuYhXDYLUd3ZAapYIY/webhook-trigger/b182e471-302d-43ee-a57f-7232d2bd300e',
            'https://services.leadconnectorhq.com/hooks/WWCuYhXDYLUd3ZAapYIY/webhook-trigger/d3d4b131-0f4b-458a-8593-ce5d3d7f232d'
          ],
          'kids-bjj-10-14': [
            'https://services.leadconnectorhq.com/hooks/WWCuYhXDYLUd3ZAapYIY/webhook-trigger/407f4901-8ff9-4f00-91a7-2d14c11eb09e',
            'https://services.leadconnectorhq.com/hooks/WWCuYhXDYLUd3ZAapYIY/webhook-trigger/281083ca-f460-4469-8b67-54a4590ab613'
          ],
          'kids-bjj-7-10': [
            'https://services.leadconnectorhq.com/hooks/WWCuYhXDYLUd3ZAapYIY/webhook-trigger/407f4901-8ff9-4f00-91a7-2d14c11eb09e',
            'https://services.leadconnectorhq.com/hooks/WWCuYhXDYLUd3ZAapYIY/webhook-trigger/281083ca-f460-4469-8b67-54a4590ab613'
          ],
          'muay-thai': [
            'https://services.leadconnectorhq.com/hooks/WWCuYhXDYLUd3ZAapYIY/webhook-trigger/50ac1e4d-bcd8-4b26-be86-6038a37571a2',
            'https://services.leadconnectorhq.com/hooks/WWCuYhXDYLUd3ZAapYIY/webhook-trigger/cc72d8aa-adc5-414c-b714-0fe557dc4109'
          ]
        };

        var urls = webhookMap[data.program] || [];
        var payload = JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          program: data.program
        });

        urls.forEach(function(url) {
          fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: payload
          }).catch(function() {});
        });

        window.location.href = 'booking.html?program=' + encodeURIComponent(data.program || '');
      });
    }
  }

  // -------- 9. BOOKING PAGE logic --------
  function initBookingPage() {
    if (!document.body.classList.contains('booking-page')) return;

    var params = new URLSearchParams(window.location.search);
    var program = params.get('program') || 'adult-bjj';

    var showCalendar = function (programId) {
      var calendars = document.querySelectorAll('.booking-calendar');
      var found = false;
      calendars.forEach(function (c) {
        if (c.dataset.program === programId) {
          c.classList.add('active');
          found = true;
        } else {
          c.classList.remove('active');
        }
      });
      if (!found && calendars.length) {
        calendars[0].classList.add('active');
        programId = calendars[0].dataset.program;
      }
      document.querySelectorAll('.program-chip').forEach(function (chip) {
        chip.classList.toggle('active', chip.dataset.program === programId);
      });
    };

    showCalendar(program);

    document.querySelectorAll('.program-chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        showCalendar(chip.dataset.program);
      });
    });

    try {
      var saved = JSON.parse(sessionStorage.getItem('leadFormData') || '{}');
      if (saved.firstName) {
        var greeting = document.querySelector('[data-lead-greeting]');
        if (greeting) {
          greeting.textContent = saved.firstName.toUpperCase() + ', ';
        }
      }
    } catch (err) {}
  }

  // -------- 10. Schedule legend filter --------
  function initScheduleFilter() {
    var legend = document.querySelector('.schedule-legend');
    var days = document.querySelector('.schedule-days');
    if (!legend || !days) return;

    var filterMap = {
      '--gi':        ['class-type-gi', 'class-type-kids-gi'],
      '--no-gi':     ['class-type-no-gi', 'class-type-kids-no-gi'],
      '--muay':      ['class-type-muay-thai'],
      '--wrestling': ['class-type-wrestling']
    };

    var keys = ['--gi', '--no-gi', '--muay', '--wrestling'];
    var activeFilters = {};
    var chips = legend.querySelectorAll('.legend-chip');

    chips.forEach(function (chip) {
      var dot = chip.querySelector('.legend-chip-dot');
      if (!dot) return;
      var key = null;
      for (var i = 0; i < keys.length; i++) {
        if (dot.classList.contains(keys[i])) { key = keys[i]; break; }
      }
      if (!key) return;

      chip.setAttribute('role', 'button');
      chip.setAttribute('tabindex', '0');
      chip.setAttribute('aria-pressed', 'false');
      chip.dataset.filterKey = key;

      chip.addEventListener('click', function () { toggle(chip, key); });
      chip.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle(chip, key);
        }
      });
    });

    function toggle(chip, key) {
      if (activeFilters[key]) {
        delete activeFilters[key];
        chip.classList.remove('is-active');
        chip.setAttribute('aria-pressed', 'false');
      } else {
        activeFilters[key] = true;
        chip.classList.add('is-active');
        chip.setAttribute('aria-pressed', 'true');
      }
      apply();
    }

    function apply() {
      var activeKeys = Object.keys(activeFilters);
      var classes = days.querySelectorAll('.schedule-class');

      if (activeKeys.length === 0) {
        days.classList.remove('is-filtered');
        classes.forEach(function (el) { el.classList.remove('is-dim'); });
        return;
      }

      var keepList = [];
      activeKeys.forEach(function (k) {
        (filterMap[k] || []).forEach(function (c) { keepList.push(c); });
      });

      days.classList.add('is-filtered');
      classes.forEach(function (el) {
        var keep = false;
        for (var i = 0; i < keepList.length; i++) {
          if (el.classList.contains(keepList[i])) { keep = true; break; }
        }
        if (keep) el.classList.remove('is-dim');
        else el.classList.add('is-dim');
      });
    }
  }

  // -------- 11. Magnetic buttons (subtle) --------
  function initMagneticButtons() {
    var buttons = document.querySelectorAll('.btn-primary, .nav-cta');
    buttons.forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = 'translate(' + (x * 0.12) + 'px, ' + (y * 0.12 - 2) + 'px)';
      });
      btn.addEventListener('mouseleave', function () {
        btn.style.transform = '';
      });
    });
  }

  // -------- 12. KIDS LEAD FORM (inline, /kids-jiu-jitsu) --------
  // Page-embedded kids forms. Parent picks the age-banded program from a
  // dropdown (kids-bjj-7-10 or kids-bjj-10-14); same GHL webhooks fire either
  // way, and the redirect routes to the matching calendar on booking.html.
  function initKidsLeadForms() {
    var forms = document.querySelectorAll('form[data-kids-form]');
    if (!forms.length) return;

    var webhookMap = {
      'kids-bjj-7-10': [
        'https://services.leadconnectorhq.com/hooks/WWCuYhXDYLUd3ZAapYIY/webhook-trigger/407f4901-8ff9-4f00-91a7-2d14c11eb09e',
        'https://services.leadconnectorhq.com/hooks/WWCuYhXDYLUd3ZAapYIY/webhook-trigger/281083ca-f460-4469-8b67-54a4590ab613'
      ],
      'kids-bjj-10-14': [
        'https://services.leadconnectorhq.com/hooks/WWCuYhXDYLUd3ZAapYIY/webhook-trigger/407f4901-8ff9-4f00-91a7-2d14c11eb09e',
        'https://services.leadconnectorhq.com/hooks/WWCuYhXDYLUd3ZAapYIY/webhook-trigger/281083ca-f460-4469-8b67-54a4590ab613'
      ]
    };

    var maskPhone = function (input) {
      input.addEventListener('input', function (e) {
        var digits = e.target.value.replace(/\D/g, '').slice(0, 10);
        var out = '';
        if (digits.length > 0) out = '(' + digits.slice(0, 3);
        if (digits.length >= 4) out += ') ' + digits.slice(3, 6);
        if (digits.length >= 7) out += '-' + digits.slice(6);
        e.target.value = out;
      });
    };

    forms.forEach(function (form) {
      var phoneInput = form.querySelector('input[data-phone-mask]');
      if (phoneInput) maskPhone(phoneInput);

      form.addEventListener('submit', function (e) {
        e.preventDefault();

        var valid = true;
        form.querySelectorAll('[required]').forEach(function (field) {
          var parent = field.closest('.form-field');
          if (!field.value.trim()) {
            valid = false;
            if (parent) parent.classList.add('has-error');
          } else {
            if (parent) parent.classList.remove('has-error');
          }
        });

        var emailField = form.querySelector('input[type="email"]');
        if (emailField && emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
          valid = false;
          var emailParent = emailField.closest('.form-field');
          if (emailParent) emailParent.classList.add('has-error');
        }

        if (!valid) {
          var firstError = form.querySelector('.form-field.has-error input, .form-field.has-error select');
          if (firstError) firstError.focus({ preventScroll: false });
          return;
        }

        var data = Object.fromEntries(new FormData(form).entries());
        var program = data.program;

        try {
          sessionStorage.setItem('leadFormData', JSON.stringify(data));
        } catch (err) {}

        // Meta Pixel — Lead conversion
        if (typeof window.fbq === 'function') {
          window.fbq('track', 'Lead', {
            content_name: program,
            content_category: 'kids-free-trial'
          });
        }

        var payload = JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          program: program
        });

        var urls = webhookMap[program] || [];
        urls.forEach(function (url) {
          fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: payload
          }).catch(function () {});
        });

        var submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
          submitBtn.setAttribute('disabled', 'true');
          submitBtn.textContent = 'Sending…';
        }

        window.location.href = 'booking.html?program=' + encodeURIComponent(program);
      });
    });
  }

  // -------- 13. KIDS PAGE — sticky mobile CTA hide-when-form-visible --------
  function initKidsStickyCta() {
    var cta = document.querySelector('.kl-sticky-cta');
    var claim = document.getElementById('claim');
    if (!cta || !claim || !('IntersectionObserver' in window)) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) cta.classList.add('is-hidden');
        else cta.classList.remove('is-hidden');
      });
    }, { threshold: 0.15 });

    io.observe(claim);
  }

  // -------- INIT --------
  function initAll() {
    initIcons();
    initYear();
    initNavScroll();
    initMobileNav();
    initMarquee();
    initStatCounters();
    initScrollReveals();
    initLeadModal();
    initBookingPage();
    initScheduleFilter();
    initMagneticButtons();
    initKidsLeadForms();
    initKidsStickyCta();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
