import { auditData } from './data.js';

let currentLang = 'pl';
let currentTheme = 'indigo';

const elements = {
    scoreText: document.getElementById('score-text'),
    scoreCircle: document.getElementById('score-circle'),
    metrics: document.getElementById('metrics-container'),
    keywords: document.getElementById('keywords-body'),
    roadmap: document.getElementById('roadmap-container'),
    langSwitch: document.getElementById('lang-switch'),
    themeSwitch: document.getElementById('theme-switch'),
    heroBadge: document.getElementById('hero-badge'),
    heroTitle: document.getElementById('hero-title'),
    heroSubtitle: document.getElementById('hero-subtitle'),
    metricsTitle: document.getElementById('metrics-title'),
    keywordsTitle: document.getElementById('keywords-title'),
    roadmapTitle: document.getElementById('roadmap-title'),
    ctaText: document.getElementById('cta-text'),
    ctaSubtext: document.getElementById('cta-subtext'),
    ctaBtn: document.querySelector('#cta .btn-premium'),
    themeLink: document.getElementById('theme-link')
};

// Initialization
function initDashboard() {
    // 1. Sync Language from URL or localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && ['pl', 'en', 'ua'].includes(langParam)) {
        currentLang = langParam;
        localStorage.setItem('nexus_lang', langParam);
    } else {
        currentLang = localStorage.getItem('nexus_lang') || 'pl';
    }
    
    // Set active option in dropdown
    elements.langSwitch.value = currentLang;

    // 2. Start "Scanning" sequence
    startScanningEffect();
}

function startScanningEffect() {
    const originalTitle = auditData[currentLang].hero.title;
    elements.heroTitle.textContent = "INITIALIZING NEXUS ENGINE...";
    elements.heroTitle.style.color = "var(--accent-light)";
    
    setTimeout(() => {
        elements.heroTitle.textContent = "SCANNING BIG-DATA DOMAIN...";
        setTimeout(() => {
            elements.heroTitle.style.color = "#fff";
            render();
        }, 800);
    }, 1200);
}

function render() {
    const data = auditData[currentLang];
    
    // Hero
    elements.heroBadge.textContent = data.hero.badge;
    elements.heroTitle.textContent = data.hero.title;
    elements.heroSubtitle.textContent = data.hero.subtitle;
    
    // Animate Score with Ripple Effect
    let currentScore = 0;
    const target = data.hero.targetScore || 85; 
    const step = target / 50; // 50 steps
    
    const interval = setInterval(() => {
        currentScore += step;
        if(currentScore >= target) {
            currentScore = target;
            clearInterval(interval);
            elements.scoreCircle.style.filter = "drop-shadow(0 0 15px var(--accent))";
            elements.scoreCircle.style.transition = "filter 0.5s ease";
        }
        elements.scoreText.textContent = `${Math.floor(currentScore)}%`;
        elements.scoreCircle.setAttribute('stroke-dasharray', `${Math.floor(currentScore)}, 100`);
    }, 30);

    // Metrics with Sequential Reveal
    elements.metricsTitle.textContent = currentLang === 'ua' ? "Показники продуктивностi" : (currentLang === 'pl' ? "Wskaźniki Wydajności" : "Performance Metrics");
    elements.metrics.innerHTML = data.metrics.map((m, i) => `
        <div class="metric-card glass-card reveal" style="transition-delay: ${i * 0.2}s">
            <div class="metric-header">
                <span>${m.label}</span>
                <span class="value">${m.value}%</span>
            </div>
            <div class="metric-bar-bg">
                <div class="metric-bar color-${m.color}" style="width: ${m.value}%"></div>
            </div>
            <p class="desc">${m.desc}</p>
        </div>
    `).join('');

    // Keywords
    elements.keywordsTitle.textContent = currentLang === 'ua' ? "Аналiз ключових слiв" : (currentLang === 'pl' ? "Analiza Słów Kluczowych" : "Keyword Analysis");
    elements.keywords.innerHTML = data.keywords.map(k => `
        <tr>
            <td style="font-weight:600;">${k.term}</td>
            <td class="badge-td"><span class="badge-mini">${k.gap}</span></td>
            <td class="success" style="color:var(--success); font-weight:700;">${k.potential}</td>
        </tr>
    `).join('');

    // Roadmap
    elements.roadmapTitle.textContent = currentLang === 'ua' ? "План дiй на 90 днiв" : (currentLang === 'pl' ? "Plan Działania 90 Dni" : "90-Day Roadmap");
    elements.roadmap.innerHTML = data.roadmap.map(s => `
        <div class="timeline-item">
            <div class="time" style="color:var(--accent-light); font-weight:700;">${s.month}</div>
            <div class="content">${s.task}</div>
        </div>
    `).join('');

    // CTA
    elements.ctaText.textContent = data.cta.text;
    elements.ctaSubtext.textContent = data.cta.subtext;
    if (elements.ctaBtn) elements.ctaBtn.textContent = data.cta.btn;
}

// Controls
elements.langSwitch.addEventListener('change', (e) => {
    currentLang = e.target.value;
    localStorage.setItem('nexus_lang', currentLang);
    render();
});

elements.themeSwitch.addEventListener('change', (e) => {
    currentTheme = e.target.value;
    document.body.className = `theme-${currentTheme} mode-${currentTheme === 'luxury' ? 'slides' : 'scroll'}`;
    
    // Dynamically update stylesheet
    if (elements.themeLink) {
        elements.themeLink.href = `/specimens/seo-audit/css/${currentTheme}.css`;
    }
    
    render();
});

// Initial Render
initDashboard();
console.log("Nexus Audit Engine 3.0: Online.");
