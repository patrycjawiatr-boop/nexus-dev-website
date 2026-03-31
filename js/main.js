/* ═══════════════════════════════════════════════════════════
   NEXUS.DEV — Main JavaScript
   Language switching, dynamic content, animations, form
   ═══════════════════════════════════════════════════════════ */

// ── STATE ────────────────────────────────────────────────
let currentLang = localStorage.getItem('nexus-lang') || 'pl';

// ── PAGE LOADER ──────────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('pageLoader').classList.add('hidden');
  }, 600);
});

// ── INIT ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initNavbar();
  initMobileNav();
  initFAQ();
  initScrollReveal();
  initContactForm();
  renderDynamicContent();
  setLanguage(currentLang);
});

// ═══════════════════════════════════════════════════════════
// LANGUAGE SYSTEM
// ═══════════════════════════════════════════════════════════

function initLanguage() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.dataset.lang === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }

    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
    });
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('nexus-lang', lang);

  // Update HTML lang attribute
  const langMap = { pl: 'pl', en: 'en', ua: 'uk' };
  document.documentElement.lang = langMap[lang] || 'pl';

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const parts = key.split('.');

    // Structure: translations[section][lang][field1][field2]...
    // e.g., "hero.badge" → translations.hero[lang].badge
    // e.g., "contact.form.name" → translations.contact[lang].form.name
    // e.g., "about.founder.name" → translations.about[lang].founder.name
    if (parts.length >= 2) {
      const section = parts[0];
      const fieldPath = parts.slice(1);
      let val = translations[section]?.[lang];
      for (const p of fieldPath) {
        if (val == null) break;
        val = val[p];
      }
      if (val != null && typeof val === 'string') {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = val;
        } else {
          el.textContent = val;
        }
      }
    }
  });

  // Re-render dynamic content
  renderDynamicContent();

  // Update form language field
  const formLang = document.getElementById('formLang');
  if (formLang) formLang.value = lang;

  // Update pricing section (static elements)
  updatePricing(lang);
  renderServicesFull(lang);
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((o, k) => o && o[k], obj);
}

// ═══════════════════════════════════════════════════════════
// DYNAMIC CONTENT RENDERING
// ═══════════════════════════════════════════════════════════

function renderDynamicContent() {
  renderForWhomCards();
  renderModulesCards();
  renderProcessTimeline();
  renderCasesGrid();
  renderTestimonials();
  renderWhyCards();
  renderFAQ();
  renderContactSteps();
  renderContactDetails();
  renderFormSelects();
  renderAbout();
  renderServicesFull(currentLang);
  renderPortfolioItems(currentLang);
}

// ── FOR WHOM CARDS ───────────────────────────────────────
function renderForWhomCards() {
  const container = document.getElementById('forWhomCards');
  const data = translations.forWhom[currentLang];
  if (!container || !data) return;

  container.innerHTML = data.cards.map((card, i) => `
    <div class="card reveal reveal-delay-${i + 1}">
      <div class="card-icon">${card.icon}</div>
      <h3>${card.title}</h3>
      <p>${card.desc}</p>
    </div>
  `).join('');

  // Re-init scroll reveal for new elements
  observeNewElements(container);
}

// ── MODULES CARDS ────────────────────────────────────────
function renderModulesCards() {
  const container = document.getElementById('modulesCards');
  const data = translations.modules[currentLang];
  if (!container || !data) return;

  container.innerHTML = data.cards.map((card, i) => `
    <div class="card reveal reveal-delay-${i + 1}">
      <div class="card-icon">${card.icon}</div>
      <h3>${card.title}</h3>
      <p>${card.desc}</p>
    </div>
  `).join('');

  observeNewElements(container);
}

// ── PROCESS TIMELINE ─────────────────────────────────────
function renderProcessTimeline() {
  const container = document.getElementById('processTimeline');
  const data = translations.process[currentLang];
  if (!container || !data) return;

  container.innerHTML = data.steps.map(step => `
    <div class="process-step">
      <div class="process-step-num">${step.num}</div>
      <div class="process-step-content">
        <h3>${step.title}</h3>
        <div class="subtitle">${step.subtitle}</div>
        <p>${step.desc}</p>
      </div>
    </div>
  `).join('');

  // Observe process steps
  container.querySelectorAll('.process-step').forEach(step => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    observer.observe(step);
  });
}

// ── CASES GRID ───────────────────────────────────────────
function renderCasesGrid() {
  const container = document.getElementById('casesGrid');
  const data = translations.cases[currentLang];
  if (!container || !data) return;

  const labels = {
    pl: { before: 'PRZED', modules: 'CO ZROBILIŚMY', after: 'PO' },
    en: { before: 'BEFORE', modules: 'WHAT WE DID', after: 'AFTER' },
    ua: { before: 'ДО', modules: 'ЩО ЗРОБИЛИ', after: 'ПІСЛЯ' },
  };
  const l = labels[currentLang] || labels.pl;

  container.innerHTML = data.items.map((item, i) => `
    <div class="case-card reveal reveal-delay-${i + 1}">
      <div class="case-badge">${item.type} · ${item.size}</div>

      <div class="case-label before">${l.before}</div>
      <div class="case-text">${item.before}</div>

      <div class="case-divider"></div>

      <div class="case-label modules">${l.modules}</div>
      <div class="case-text" style="color:var(--accent-light); font-weight:500;">${item.modules}</div>

      <div class="case-divider"></div>

      <div class="case-label after">${l.after}</div>
      <div class="case-text" style="color:#51cf66;">${item.after}</div>
    </div>
  `).join('');

  observeNewElements(container);
}

// ── TESTIMONIALS ─────────────────────────────────────────
function renderTestimonials() {
  const container = document.getElementById('testimonialsGrid');
  const data = translations.testimonials[currentLang];
  if (!container || !data) return;

  container.innerHTML = data.items.map((item, i) => `
    <div class="testimonial-card reveal reveal-delay-${i + 1}">
      <div class="testimonial-stars">★★★★★</div>
      <div class="testimonial-quote">"${item.quote}"</div>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${item.name.split(' ').map(n => n[0]).join('')}</div>
        <div class="testimonial-info">
          <div class="name">${item.name}</div>
          <div class="role">${item.role}</div>
        </div>
      </div>
    </div>
  `).join('');

  observeNewElements(container);
}

// ── WHY CARDS ────────────────────────────────────────────
function renderWhyCards() {
  const container = document.getElementById('whyCards');
  const data = translations.whyNexus[currentLang];
  if (!container || !data) return;

  container.innerHTML = data.cards.map((card, i) => `
    <div class="card why-card reveal reveal-delay-${i + 1}">
      <div class="card-icon">${card.icon}</div>
      <h3>${card.title}</h3>
      <p>${card.desc}</p>
    </div>
  `).join('');

  observeNewElements(container);
}

// ── FAQ ──────────────────────────────────────────────────
function renderFAQ() {
  const container = document.getElementById('faqList');
  const data = translations.faq[currentLang];
  if (!container || !data) return;

  container.innerHTML = data.items.map((item, i) => `
    <div class="faq-item reveal reveal-delay-${Math.min(i + 1, 5)}">
      <button class="faq-question" onclick="toggleFaq(this)">
        <span>${item.q}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer">
        <div class="faq-answer-inner">${item.a}</div>
      </div>
    </div>
  `).join('');

  observeNewElements(container);
}

// ── CONTACT STEPS ────────────────────────────────────────
function renderContactSteps() {
  const container = document.getElementById('contactSteps');
  const data = translations.contact[currentLang];
  if (!container || !data) return;

  container.innerHTML = data.steps.map(step => `
    <li>${step}</li>
  `).join('');
}

// ── CONTACT DETAILS ──────────────────────────────────────
function renderContactDetails() {
  const container = document.getElementById('contactDetails');
  const data = translations.contact[currentLang];
  if (!container || !data) return;

  container.innerHTML = `
    <div class="contact-detail">
      <span class="contact-detail-icon">📧</span>
      <a href="mailto:${data.info.email}">${data.info.email}</a>
    </div>
    <div class="contact-detail">
      <span class="contact-detail-icon">📍</span>
      <span>${data.info.location}</span>
    </div>
    <div class="contact-detail">
      <span class="contact-detail-icon">⏰</span>
      <span>${data.info.response}</span>
    </div>
  `;
}

// ── FORM SELECTS & CHECKBOXES ────────────────────────────
function renderFormSelects() {
  const data = translations.contact[currentLang];
  if (!data) return;

  const fillSelect = (id, options) => {
    const el = document.getElementById(id);
    if (!el) return;
    const currentVal = el.value;
    el.innerHTML = options.map((opt, i) => `
      <option value="${i === 0 ? '' : opt}" ${i === 0 ? 'disabled selected' : ''}>${opt}</option>
    `).join('');
    if (currentVal && Array.from(el.options).some(o => o.value === currentVal)) {
      el.value = currentVal;
    }
  };

  fillSelect('industry', data.form.industry_options);
  fillSelect('budget', data.form.budget_options);
  fillSelect('source', data.form.source_options);

  // New fields
  if (data.form.team_size_options) fillSelect('teamSize', data.form.team_size_options);
  if (data.form.timeline_options) fillSelect('timeline', data.form.timeline_options);

  // Services checkboxes
  const checkboxContainer = document.getElementById('servicesCheckboxes');
  if (checkboxContainer && data.form.services_checkboxes) {
    checkboxContainer.innerHTML = data.form.services_checkboxes.map((svc, i) => `
      <label class="form-checkbox">
        <input type="checkbox" name="services[]" value="${svc}">
        <span>${svc}</span>
      </label>
    `).join('');
  }
}

// ── ABOUT ────────────────────────────────────────────────
function renderAbout() {
  const data = translations.about[currentLang];
  if (!data) return;

  const paraContainer = document.getElementById('aboutParagraphs');
  if (paraContainer) {
    paraContainer.innerHTML = data.paragraphs.map(p =>
      `<p style="margin-bottom:16px; font-size:1.05rem;">${p}</p>`
    ).join('');
  }

  const valuesContainer = document.getElementById('valuesList');
  if (valuesContainer) {
    valuesContainer.innerHTML = data.values.map((v, i) => `
      <div class="card reveal reveal-delay-${Math.min(i + 1, 5)}" style="margin-bottom:12px; padding:24px;">
        <h3 style="font-size:1rem; margin-bottom:4px;">${v.title}</h3>
        <p style="font-size:0.9rem;">${v.desc}</p>
      </div>
    `).join('');
    observeNewElements(valuesContainer);
  }
}

// ── PRICING (static elements) ────────────────────────────
function updatePricing(lang) {
  const pricingText = {
    pl: {
      h2: 'Gotowe zestawy na start',
      intro: 'Nie wiesz, od czego zacząć? Wybierz pakiet dopasowany do Twojej sytuacji.',
      badge: 'NAJPOPULARNIEJSZY',
      cta1: 'Wybieram ten pakiet', cta2: 'Wybieram ten pakiet', cta3: 'Wybieram ten pakiet',
      pkg1: { name: '🟢 START Z GWARANCJĄ', price: '2 299 zł', old: '3 397 zł', f: ['Strona wizytówka firmowa', '10 postów social media', 'Audyt procesów', '1 automatyzacja'] },
      pkg2: { name: '🔵 SYSTEM LEADÓW', price: '2 999 zł', old: '4 497 zł', f: ['Landing page sprzedażowy', 'Meta Ads setup', 'Automatyzacja leadów', 'Dashboard leadów', '5 rolek reklamowych'] },
      pkg3: { name: '🟣 PEŁNA AUTOMATYZACJA', price: '3 499 zł', old: '4 896 zł', f: ['2 automatyzacje procesów', 'Bot AI na stronę', 'Dashboard zarządzający', 'Szablon biznesowy Excel', '1 miesiąc retainer'] },
    },
    en: {
      h2: 'Ready-made starter packages',
      intro: "Don't know where to start? Pick a package that fits your situation.",
      badge: 'MOST POPULAR',
      cta1: 'Choose this package', cta2: 'Choose this package', cta3: 'Choose this package',
      pkg1: { name: '🟢 GUARANTEED START', price: '€550', old: '€810', f: ['Business card website', '10 social media posts', 'Process audit', '1 automation'] },
      pkg2: { name: '🔵 LEAD SYSTEM', price: '€720', old: '€1,070', f: ['Sales landing page', 'Meta Ads setup', 'Lead automation', 'Lead dashboard', '5 ad reels'] },
      pkg3: { name: '🟣 FULL AUTOMATION', price: '€840', old: '€1,170', f: ['2 process automations', 'AI Bot for website', 'Management dashboard', 'Business Excel template', '1 month retainer'] },
    },
    ua: {
      h2: 'Готові стартові пакети',
      intro: 'Не знаєте, з чого почати? Оберіть пакет, що підходить під вашу ситуацію.',
      badge: 'НАЙПОПУЛЯРНІШИЙ',
      cta1: 'Обираю цей пакет', cta2: 'Обираю цей пакет', cta3: 'Обираю цей пакет',
      pkg1: { name: '🟢 СТАРТ З ГАРАНТІЄЮ', price: '2 299 zł', old: '3 397 zł', f: ['Сайт-візитка', '10 постів у соцмережах', 'Аудит процесів', '1 автоматизація'] },
      pkg2: { name: '🔵 СИСТЕМА ЛІДІВ', price: '2 999 zł', old: '4 497 zł', f: ['Продажний лендінг', 'Meta Ads налаштування', 'Автоматизація лідів', 'Дашборд лідів', '5 рекламних роликів'] },
      pkg3: { name: '🟣 ПОВНА АВТОМАТИЗАЦІЯ', price: '3 499 zł', old: '4 896 zł', f: ['2 автоматизації процесів', 'AI-бот на сайт', 'Управлінський дашборд', 'Бізнес-шаблон Excel', '1 місяць ретейнер'] },
    },
  };

  const t = pricingText[lang] || pricingText.pl;
  const setEl = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };

  setEl('pricing-h2', t.h2);
  setEl('pricing-intro', t.intro);
  setEl('pkg2-badge', t.badge);

  setEl('pkg1-name', t.pkg1.name); setEl('pkg1-price', t.pkg1.price); setEl('pkg1-old', t.pkg1.old); setEl('pkg1-cta', t.cta1);
  t.pkg1.f.forEach((f, i) => setEl(`pkg1-f${i+1}`, f));

  setEl('pkg2-name', t.pkg2.name); setEl('pkg2-price', t.pkg2.price); setEl('pkg2-old', t.pkg2.old); setEl('pkg2-cta', t.cta2);
  t.pkg2.f.forEach((f, i) => setEl(`pkg2-f${i+1}`, f));

  setEl('pkg3-name', t.pkg3.name); setEl('pkg3-price', t.pkg3.price); setEl('pkg3-old', t.pkg3.old); setEl('pkg3-cta', t.cta3);
  t.pkg3.f.forEach((f, i) => setEl(`pkg3-f${i+1}`, f));
}

// ═══════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════

function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.pageYOffset > 50);
  });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initMobileNav() {
  const toggle = document.getElementById('mobileToggle');
  const links = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('open');
    document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
  });
}

function closeNav() {
  const toggle = document.getElementById('mobileToggle');
  const links = document.getElementById('navLinks');
  toggle.classList.remove('active');
  links.classList.remove('open');
  document.body.style.overflow = '';
}

// ═══════════════════════════════════════════════════════════
// FAQ ACCORDION
// ═══════════════════════════════════════════════════════════

function initFAQ() {}

function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const answer = item.querySelector('.faq-answer');
  const isOpen = item.classList.contains('open');

  document.querySelectorAll('.faq-item.open').forEach(openItem => {
    openItem.classList.remove('open');
    openItem.querySelector('.faq-answer').style.maxHeight = '0';
  });

  if (!isOpen) {
    item.classList.add('open');
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
}

// ═══════════════════════════════════════════════════════════
// SCROLL REVEAL
// ═══════════════════════════════════════════════════════════

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function observeNewElements(container) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  container.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ═══════════════════════════════════════════════════════════
// CONTACT FORM (Formspree + mailto fallback)
// ═══════════════════════════════════════════════════════════

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    // Gather checked services into a single field
    const checkedServices = Array.from(form.querySelectorAll('input[name="services[]"]:checked')).map(cb => cb.value);
    formData.set('services', checkedServices.join(', '));
    formData.delete('services[]');

    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '...';
    submitBtn.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });

      if (response.ok) {
        form.style.display = 'none';
        document.getElementById('formSuccess').classList.add('show');
      } else {
        openMailto(formData);
        form.style.display = 'none';
        document.getElementById('formSuccess').classList.add('show');
      }
    } catch (err) {
      openMailto(formData);
      form.style.display = 'none';
      document.getElementById('formSuccess').classList.add('show');
    }

    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  });
}

function openMailto(formData) {
  const name = formData.get('name') || '';
  const email = formData.get('email') || '';
  const phone = formData.get('phone') || '';
  const company = formData.get('company') || '';
  const industry = formData.get('industry') || '';
  const teamSize = formData.get('team_size') || '';
  const website = formData.get('website') || '';
  const services = formData.get('services') || '';
  const budget = formData.get('budget') || '';
  const timeline = formData.get('timeline') || '';
  const message = formData.get('message') || '';
  const source = formData.get('source') || '';

  const subject = encodeURIComponent(`[nexus.dev] Nowy brief od ${name}`);
  const body = encodeURIComponent(
    `Imię: ${name}\nEmail: ${email}\nTelefon: ${phone}\nFirma: ${company}\nBranża: ${industry}\nZespół: ${teamSize}\nStrona: ${website}\nUsługi: ${services}\nBudżet: ${budget}\nTimeline: ${timeline}\nŹródło: ${source}\n\nOpis sytuacji:\n${message}`
  );

  window.open(`mailto:nextlevelaipoland@gmail.com?subject=${subject}&body=${body}`, '_blank');
}


function renderServicesFull(currentLang) {
  var grid = document.getElementById("servicesFullGrid");
  if (!grid || !translations.servicesFull) return;
  var data = translations.servicesFull[currentLang];
  if (!data || !data.categories) return;
  var html = "";
  for (var i = 0; i < data.categories.length; i++) {
    var cat = data.categories[i];
    var mods = "";
    for (var j = 0; j < cat.modules.length; j++) {
      var m = cat.modules[j];
      mods += "<div class=\"service-module-card\"><div class=\"service-module-header\"><h4>" + m.title + "</h4><div class=\"service-module-meta\"><span class=\"service-time\">" + m.time + "</span><span class=\"service-price\">" + m.price + "</span></div></div><p>" + m.desc + "</p></div>";
    }
    html += "<div class=\"service-category\"><h3 class=\"service-category-name\">" + cat.name + "</h3><div class=\"service-modules-list\">" + mods + "</div></div>";
  }
  grid.innerHTML = html;
}

// ── PACKAGE SELECTION (from pricing) ─────────────────────
function selectPackage(packageName) {
  const messageField = document.getElementById('message');
  if (messageField) {
    messageField.value = `Interesuje mnie pakiet: ${packageName}\n\n`;
    messageField.focus();
  }

  // Add a hidden field so Formspree knows which package
  const form = document.getElementById('contactForm');
  if (form) {
    let hiddenPkg = form.querySelector('input[name="selected_package"]');
    if (!hiddenPkg) {
      hiddenPkg = document.createElement('input');
      hiddenPkg.type = 'hidden';
      hiddenPkg.name = 'selected_package';
      form.appendChild(hiddenPkg);
    }
    hiddenPkg.value = packageName;
  }

  // Brief visual highlight on the form
  const formWrap = document.getElementById('contactFormWrap');
  if (formWrap) {
    formWrap.style.boxShadow = '0 0 40px rgba(108, 92, 231, 0.4)';
    setTimeout(() => { formWrap.style.boxShadow = ''; }, 2000);
  }
}

// ── PORTFOLIO ITEMS ──────────────────────────────────────
function renderPortfolioItems(lang) {
  const container = document.getElementById('portfolioList');
  const items = translations.portfolioItems?.[lang];
  if (!container || !items) return;

  const labels = {
    pl: { challenge: "Wyzwanie", solution: "Rozwiązanie", result: "Wynik" },
    en: { challenge: "Challenge", solution: "Solution", result: "Result" },
    ua: { challenge: "Виклик", solution: "Рiшення", result: "Результат" }
  };
  const l = labels[lang] || labels.pl;

  container.innerHTML = `
    <div class="portfolio-grid">
      ${items.map((item, i) => `
        <div class="portfolio-item reveal">
          <img src="${item.img}" alt="${item.title}" class="portfolio-img">
          <div class="portfolio-content">
            <span class="portfolio-category">${item.category}</span>
            <h2 class="portfolio-title">${item.title}</h2>
            
            <div style="margin-bottom: 20px;">
              <strong style="color:var(--accent-light);">${l.challenge}:</strong>
              <p style="margin-top:8px;">${item.challenge}</p>
            </div>

            <div style="margin-bottom: 20px;">
              <strong style="color:var(--accent-light);">${l.solution}:</strong>
              <p style="margin-top:8px;">${item.solution}</p>
            </div>

            <div class="portfolio-stats">
              ${item.result.stats.map(stat => `
                <div class="stat-item">
                  <span class="stat-val">${stat.val}</span>
                  <span class="stat-label">${stat.label}</span>
                </div>
              `).join('')}
            </div>
            
            <div style="color:#51cf66; font-weight:700; font-size:1.1rem;">
              🚀 ${item.result.desc}: ${item.result.perc}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  observeNewElements(container);
}

function observeNewElements(container) {
  const reveals = container.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  reveals.forEach(el => observer.observe(el));
}
