import translations from './translations/index.js';

let currentLang = localStorage.getItem('nexus_lang') || 'pl';

// Run app
initApp();

// Also hide loader if something went wrong with the events
window.addEventListener('load', () => {
    const loader = document.getElementById('pageLoader');
    if (loader && !loader.classList.contains('hidden')) {
        loader.classList.add('hidden');
        setTimeout(() => loader.style.display = 'none', 500);
    }
});

function initApp() {
    console.log('initApp started');
    // Initial language setup
    setLanguage(currentLang);

    // Event Delegation for Language Switcher (more robust for subpages)
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.lang-btn');
        if (btn) {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        }
    });

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navRight = document.querySelector('.nav-right');
    const navContainer = document.getElementById('navbar');
    if (mobileToggle && navContainer) {
        mobileToggle.addEventListener('click', () => {
            navContainer.classList.toggle('nav-active');
            mobileToggle.classList.toggle('active');
            if (navRight) navRight.classList.toggle('active');
        });
    }

    // Scroll Header Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Reveal animations
    initRevealAnimations();

    // Force immediate loader removal
    hideLoader();
    
    // Backup loader removal
    setTimeout(hideLoader, 1000);
}

function hideLoader() {
    const loader = document.getElementById('pageLoader');
    if (loader) {
        loader.classList.add('force-hide');
        console.log('Loader hidden triggered with force-hide');
    }
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('nexus_lang', lang);
    document.documentElement.lang = lang === 'ua' ? 'uk' : lang;

    // Update active UI state for buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update Meta Tags
    updateMetaTags(lang);

    // 1. Data-i18n Attribute Update (Standard Strings)
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const parts = key.split('.');
        let val = translations[parts[0]]?.[lang];
        
        if (parts.length > 1 && val) {
            for (let i = 1; i < parts.length; i++) {
                val = val?.[parts[i]];
            }
        }
        
        if (val) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = val;
            } else {
                el.innerHTML = val;
            }
        }
    });

    // 2. Render Dynamic Lists (Cards, Timelines, etc.)
    renderDynamicContent(lang);

    // 3. Update Specialized Sections
    updatePricing(lang);
    
    // 4. Update Cookie Consent (if script exists)
    if (typeof initCookieConsent === 'function') {
        initCookieConsent(lang);
    }
}

function updateMetaTags(lang) {
    const meta = translations.metadata?.[lang];
    if (!meta) return;
    document.title = meta.title;
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', meta.description);
}

function renderDynamicContent(lang) {
    const renderSteps = [
        { name: 'ForWhom', fn: renderForWhomCards },
        { name: 'Modules', fn: renderModulesCards },
        { name: 'Process', fn: renderProcessTimeline },
        { name: 'Cases', fn: renderCasesGrid },
        { name: 'Testimonials', fn: renderTestimonials },
        { name: 'Why', fn: renderWhyCards },
        { name: 'FAQ', fn: renderFAQ },
        { name: 'About', fn: renderAbout },
        { name: 'Portfolio', fn: renderPortfolioGrid },
        { name: 'Services', fn: renderServicesCatalog },
        { name: 'Pricing', fn: updatePricing },
        { name: 'LeadMagnet', fn: renderLeadMagnetChecklist },
        { name: 'ContactForm', fn: renderContactForm }
    ];

    renderSteps.forEach(step => {
        try {
            step.fn(lang);
            console.log(`Render success: ${step.name}`);
        } catch (err) {
            console.warn(`Render failed for ${step.name}:`, err);
        }
    });
}

function renderForWhomCards(lang) {
    const container = document.getElementById('forWhomCards');
    const data = translations.forWhom?.[lang];
    if (!container || !data) return;

    container.innerHTML = data.cards.map((card, i) => `
        <div class="card reveal reveal-delay-${(i % 4) + 1}">
            <div class="card-icon">${card.icon}</div>
            <h3>${card.title}</h3>
            <p>${card.desc}</p>
        </div>
    `).join('');
    observeNewElements(container);
}

function renderModulesCards(lang) {
    const container = document.getElementById('modulesCards');
    const data = translations.modules?.[lang];
    if (!container || !data) return;

    container.innerHTML = data.cards.map((card, i) => `
        <div class="card reveal reveal-delay-${(i % 3) + 1}">
            <div class="card-icon">${card.icon}</div>
            <h3>${card.title}</h3>
            <p>${card.desc}</p>
        </div>
    `).join('');
    observeNewElements(container);
}

function renderProcessTimeline(lang) {
    const container = document.getElementById('processTimeline');
    const data = translations.process?.[lang];
    if (!container || !data) return;

    container.innerHTML = data.steps.map((step, i) => `
        <div class="process-step reveal reveal-delay-${(i % 4) + 1}">
            <div class="process-step-num">${step.num}</div>
            <div class="process-step-content">
                <h3>${step.title}</h3>
                <div class="subtitle">${step.subtitle}</div>
                <p>${step.desc}</p>
            </div>
        </div>
    `).join('');
    observeNewElements(container);
}

function renderCasesGrid(lang) {
    const container = document.getElementById('casesGrid');
    const data = translations.cases?.[lang];
    if (!container || !data) return;

    const labels = {
        pl: { before: 'PRZED', modules: 'CO ZROBILIŚMY', after: 'PO' },
        en: { before: 'BEFORE', modules: 'WHAT WE DID', after: 'AFTER' },
        ua: { before: 'ДО', modules: 'ЩО ЗРОБИЛИ', after: 'ПІСЛЯ' },
    };
    const l = labels[lang] || labels.pl;

    container.innerHTML = data.items.map((item, i) => `
        <div class="case-card reveal reveal-delay-${(i % 3) + 1}">
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

function renderTestimonials(lang) {
    const container = document.getElementById('testimonialsGrid');
    const data = translations.testimonials?.[lang];
    if (!container || !data) return;

    container.innerHTML = data.items.map((item, i) => `
        <div class="testimonial-card reveal reveal-delay-${(i % 3) + 1}">
            <div class="testimonial-stars">★★★★★</div>
            <div class="testimonial-quote">"${item.quote}"</div>
            <div class="testimonial-author">
                <div class="author-avatar">${item.name.charAt(0)}</div>
                <div class="author-info">
                    <div class="name">${item.name}</div>
                    <div class="role">${item.role}</div>
                </div>
            </div>
        </div>
    `).join('');
    observeNewElements(container);
}

function renderWhyCards(lang) {
    const container = document.getElementById('whyCards');
    const data = translations.whyNexus?.[lang];
    if (!container || !data) return;

    container.innerHTML = data.cards.map((card, i) => `
        <div class="card reveal reveal-delay-${(i % 4) + 1}">
            <div class="card-icon">${card.icon}</div>
            <h3>${card.title}</h3>
            <p>${card.desc}</p>
        </div>
    `).join('');
    observeNewElements(container);
}

function renderFAQ(lang) {
    const container = document.getElementById('faqList');
    const data = translations.faq?.[lang];
    if (!container || !data) return;

    container.innerHTML = data.items.map((item, i) => `
        <div class="faq-item reveal reveal-delay-${Math.min(i + 1, 5)}">
            <button class="faq-question" onclick="this.parentElement.classList.toggle('active')">
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

function renderAbout(lang) {
    const pContainer = document.getElementById('aboutParagraphs');
    const teamContainer = document.getElementById('teamContainer');
    const valuesList = document.getElementById('valuesList');
    const data = translations.about?.[lang];
    if (!data) return;

    if (pContainer) {
        pContainer.innerHTML = data.paragraphs.map(p => `<p class="reveal">${p}</p>`).join('');
    }

    if (teamContainer) {
        teamContainer.innerHTML = `
            <div class="team-grid">
                ${data.team.map((member, i) => `
                    <div class="team-card reveal reveal-delay-${i + 1}">
                        <div class="team-header">
                            <div class="team-avatar">${member.name.split(' ').map(n => n[0]).join('')}</div>
                            <div class="team-info">
                                <h4>${member.name}</h4>
                                <div class="team-role">${member.role}</div>
                            </div>
                        </div>
                        <p class="team-bio">${member.bio}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    if (valuesList) {
        valuesList.innerHTML = data.values.map((v, i) => `
            <div class="value-item reveal reveal-delay-${(i % 5) + 1}">
                <div class="value-icon">✓</div>
                <div class="value-content">
                    <h4>${v.title}</h4>
                    <p>${v.desc}</p>
                </div>
            </div>
        `).join('');
    }

    // Ensure animations are observed for the new content
    observeNewElements(document.getElementById('about'));
}

function renderLeadMagnetChecklist(lang) {
    const container = document.querySelector('.checklist-mockup');
    const data = translations.leadMagnet?.[lang];
    if (!container || !data) return;

    container.innerHTML = `
        <div class="checklist-item"><span>✓</span> <span>${data.item1}</span></div>
        <div class="checklist-item"><span>✓</span> <span>${data.item2}</span></div>
        <div class="checklist-item"><span>✓</span> <span>${data.item3}</span></div>
        <div class="checklist-item highlight"><span>⚡</span> <span>${data.item4}</span></div>
    `;
}

function renderPortfolioGrid(lang) {
    const container = document.getElementById('portfolioList');
    const items = translations.portfolioItems?.[lang];
    if (!container || !items) return;

    container.innerHTML = items.map((item, i) => `
        <div class="portfolio-item reveal">
            <img src="${item.img}" alt="${item.title}" class="portfolio-img">
            <div class="portfolio-content">
                <div class="portfolio-category">${item.category}</div>
                <h3 class="portfolio-title">${item.title}</h3>
                <p>${item.challenge}</p>
                <div class="portfolio-stats">
                    ${item.result.stats ? item.result.stats.map(s => `
                        <div class="stat-item">
                            <span class="stat-val">${s.val}</span>
                            <span class="stat-label">${s.label}</span>
                        </div>
                    `).join('') : `
                        <div class="stat-item">
                            <span class="stat-val">${item.result.perc}</span>
                            <span class="stat-label">${item.result.desc}</span>
                        </div>
                    `}
                </div>
                <a href="brief.html" class="btn btn-secondary btn-arrow">${translations.ui?.[lang]?.portfolioCta || 'Wyceń podobny projekt'}</a>
            </div>
        </div>
    `).join('');
    observeNewElements(container);
}

function renderServicesCatalog(lang) {
    const container = document.getElementById('servicesFullGrid');
    const data = translations.servicesFull?.[lang];
    if (!container || !data) return;

    container.innerHTML = data.categories.map((cat, i) => `
        <div class="service-category reveal">
            <h2 class="category-title">${cat.name}</h2>
            <div class="service-modules-grid">
                ${cat.modules.map(mod => `
                    <div class="service-module-card">
                        <div class="module-header">
                            <h4>${mod.title}</h4>
                            <div class="module-price">${mod.price}</div>
                        </div>
                        <p>${mod.desc}</p>
                        <div class="module-footer">
                            <span class="module-time">⏱ ${mod.time}</span>
                            <a href="brief.html" class="btn-text" onclick="addToBrief('${mod.title}')">${translations.ui?.[lang]?.addToBrief || 'Dodaj do briefu +'}</a>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
    observeNewElements(container);
}

function updatePricing(lang) {
    const t = translations.pricing?.[lang];
    if (!t) return;

    const setEl = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = text;
    };

    setEl('pricing-h2', t.h2);
    setEl('pricing-intro', t.intro);
    setEl('pkg2-badge', t.badge);

    Object.keys(t).forEach(key => {
        if (key.startsWith('pkg')) {
            const pkg = t[key];
            setEl(`${key}-name`, pkg.name);
            setEl(`${key}-price`, pkg.price);
            setEl(`${key}-old`, pkg.old);
            // Features update
            for (let i = 1; i <= 5; i++) {
                if (pkg[`f${i}`]) setEl(`${key}-f${i}`, pkg[`f${i}`]);
            }
        }
    });

    const ctaText = t.cta || (translations.ui?.[lang]?.selectPackage || 'Wybieram');
    document.querySelectorAll('[data-i18n="pricing.cta"]').forEach(el => el.innerHTML = ctaText);
}

// ── UTILITIES ────────────────────────────────────────────

function initRevealAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function observeNewElements(container) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    container.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function selectPackage(packageName) {
    const messageField = document.getElementById('message');
    const lang = currentLang || 'pl';
    const prefixes = {
        pl: 'Interesuje mnie zestaw: ',
        en: 'I am interested in the package: ',
        ua: 'Мене цiкавить пакет: '
    };
    if (messageField) {
        messageField.value = `${prefixes[lang] || prefixes.pl}${packageName}\n\n`;
        messageField.scrollIntoView({ behavior: 'smooth' });
        messageField.focus();
    }
}

function closeNav() {
    const navRight = document.querySelector('.nav-right');
    const mobileToggle = document.getElementById('mobileToggle');
    if (navRight) navRight.classList.remove('active');
    if (mobileToggle) mobileToggle.classList.remove('active');
}

function renderContactForm(lang) {
    const data = translations.contact?.[lang]?.form;
    if (!data) return;

    const setOptions = (id, options) => {
        const el = document.getElementById(id);
        if (el && options) {
            el.innerHTML = options.map(opt => `<option value="${opt}">${opt}</option>`).join('');
        }
    };

    setOptions('industry', data.industry_options);
    setOptions('teamSize', data.team_size_options);
    setOptions('budget', data.budget_options);
    setOptions('timeline', data.timeline_options);
    setOptions('source', data.source_options);

    const checkContainer = document.getElementById('servicesCheckboxes');
    if (checkContainer && data.services_checkboxes) {
        checkContainer.innerHTML = data.services_checkboxes.map(svc => `
            <label class="checkbox-item">
                <input type="checkbox" name="services[]" value="${svc}">
                <span>${svc}</span>
            </label>
        `).join('');
    }
}

// Expose to window for HTML onclick handlers
window.selectPackage = selectPackage;
window.closeNav = closeNav;
window.setLanguage = setLanguage;
window.renderContactForm = renderContactForm;
