/**
 * Cabaña Carapé — Interactive behaviors
 */

const STORAGE_LANG = 'cabana-carape-lang';

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initNav();
  initMobileNav();
  initSmoothScroll();
  initBookingForm();
});

// Language / i18n
function initI18n() {
  const savedLang = localStorage.getItem(STORAGE_LANG);
  const browserLang = navigator.language?.startsWith('es') ? 'es' : 'en';
  const lang = savedLang || browserLang;

  applyTranslations(lang);
  updateLangButtons(lang);
  document.getElementById('htmlRoot')?.setAttribute('lang', lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const newLang = btn.dataset.lang;
      localStorage.setItem(STORAGE_LANG, newLang);
      applyTranslations(newLang);
      updateLangButtons(newLang);
      document.getElementById('htmlRoot')?.setAttribute('lang', newLang);
    });
  });
}

function applyTranslations(lang) {
  const t = translations?.[lang] || translations?.en;
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.placeholder = t[key];
  });
}

function updateLangButtons(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function t(key) {
  const lang = localStorage.getItem(STORAGE_LANG) || (navigator.language?.startsWith('es') ? 'es' : 'en');
  return translations?.[lang]?.[key] || translations?.en?.[key] || key;
}

// Navigation scroll effect
function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const heroHeight = window.innerHeight * 0.8;
    nav.classList.toggle('scrolled', scrollY > heroHeight);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

// Mobile navigation toggle
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', links.classList.contains('open'));
  });

  // Close menu when clicking a link
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => links.classList.remove('open'));
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Booking form handling (Formspree)
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('.form-submit');
    const originalKey = submitBtn.getAttribute('data-i18n');
    submitBtn.textContent = t('booking.sending');
    submitBtn.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        submitBtn.textContent = t('booking.success');
        submitBtn.style.background = '#8b9a7a';
        form.reset();
      } else {
        throw new Error('Error');
      }
    } catch (err) {
      submitBtn.textContent = t('booking.error');
      submitBtn.style.background = '#a63d3d';
    }

    setTimeout(() => {
      submitBtn.textContent = t(originalKey || 'booking.submit');
      submitBtn.style.background = '';
      submitBtn.disabled = false;
    }, 3000);
  });
}
