/* ═══════════════════════════════════════════════════════════
   NEXUS.DEV — Advanced Cookie Consent
   ═══════════════════════════════════════════════════════════ */

const cookieTexts = {
  pl: {
    banner: {
      text: 'Ta strona korzysta z plików cookies w celu zapewnienia najlepszej jakości usług.',
      link: 'Polityka prywatności',
      accept: 'Akceptuję',
      reject: 'Odrzuć',
      customize: 'Dostosuj'
    },
    modal: {
      title: 'Ustawienia prywatności',
      desc: 'Szanujemy Twoją prywatność. Możesz zdecydować, które pliki cookies akceptujesz. Pliki niezbędne są wymagane do poprawnego działania strony.',
      save: 'Zapisz moje wybory',
      acceptAll: 'Akceptuj wszystkie',
      catEssential: { title: 'Niezbędne', desc: 'Wymagane do działania strony.' },
      catAnalytics: { title: 'Analityczne', desc: 'Pomagają nam zrozumieć, jak korzystasz ze strony.' },
      catMarketing: { title: 'Marketingowe', desc: 'Pozwalają wyświetlać dopasowane reklamy.' }
    }
  },
  en: {
    banner: {
      text: 'This website uses cookies to ensure the best quality of service.',
      link: 'Privacy Policy',
      accept: 'Accept',
      reject: 'Reject',
      customize: 'Customize'
    },
    modal: {
      title: 'Privacy Settings',
      desc: 'We respect your privacy. You can decide which cookies you accept. Essential cookies are required for the website to function properly.',
      save: 'Save my choices',
      acceptAll: 'Accept all',
      catEssential: { title: 'Essential', desc: 'Required for website operation.' },
      catAnalytics: { title: 'Analytical', desc: 'Help us understand how you use the site.' },
      catMarketing: { title: 'Marketing', desc: 'Allow us to show tailored ads.' }
    }
  },
  ua: {
    banner: {
      text: 'Цей сайт використовує файли cookies для забезпечення найкращої якостi послуг.',
      link: 'Полiтика конфiденцiйностi',
      accept: 'Приймаю',
      reject: 'Вiдхилити',
      customize: 'Налаштувати'
    },
    modal: {
      title: 'Налаштування конфiденцiйностi',
      desc: 'Ми поважаємо вашу конфiденцiйнiсть. Ви можете вирiшити, якi файли cookie ви приймаєте. Необхiднi файли cookie потрiбнi для коректної роботи сайту.',
      save: 'Зберегти вибiр',
      acceptAll: 'Прийняти всi',
      catEssential: { title: 'Необхiднi', desc: 'Потрiбнi для роботи сайту.' },
      catAnalytics: { title: 'Аналiтичнi', desc: 'Допомагають нам зрозумiти, як ви користуєтесь сайтом.' },
      catMarketing: { title: 'Маркетинговi', desc: 'Дозволяють показувати персоналізовану рекламу.' }
    }
  }
};

function initCookieConsent(lang) {
  const banner = document.getElementById('cookieBanner');
  if (!banner) return;

  const data = localStorage.getItem('nexus-cookie-consent');
  let consent = null;
  
  if (data !== null) {
    try {
      consent = JSON.parse(data);
    } catch (e) {
      // Old simple consent detected, ignore to force new granular choice
      consent = null;
    }
  }

  if (consent !== null) {
    banner.style.display = 'none';
    return;
  }

  updateBannerUI(lang);
  injectSettingsModal(lang);
  setTimeout(() => banner.classList.add('show'), 800);
}

function updateBannerUI(lang) {
  const t = cookieTexts[lang]?.banner || cookieTexts.pl.banner;
  document.getElementById('cookieText').innerHTML = `${t.text} <a href="privacy.html">${t.link}</a>`;
  document.getElementById('cookieAccept').textContent = t.accept;
  document.getElementById('cookieReject').textContent = t.reject;
  
  // Find or create customize button
  let customizeBtn = document.getElementById('cookieCustomize');
  if (!customizeBtn) {
    customizeBtn = document.createElement('button');
    customizeBtn.id = 'cookieCustomize';
    customizeBtn.className = 'btn btn-secondary cookie-btn';
    customizeBtn.onclick = showCookieSettings;
    document.querySelector('.cookie-actions').insertBefore(customizeBtn, document.getElementById('cookieReject'));
  }
  customizeBtn.textContent = t.customize;
}

function injectSettingsModal(lang) {
  if (document.getElementById('cookieModal')) return;
  const t = cookieTexts[lang]?.modal || cookieTexts.pl.modal;
  
  const modalHTML = `
    <div id="cookieModal" class="cookie-modal-overlay">
      <div class="cookie-modal">
        <h3>${t.title}</h3>
        <p>${t.desc}</p>
        
        <div class="cookie-options">
          <div class="cookie-option">
            <div class="cookie-opt-info">
              <strong>${t.catEssential.title}</strong>
              <span>${t.catEssential.desc}</span>
            </div>
            <div class="cookie-switch active disabled">
              <input type="checkbox" checked disabled>
              <span class="slider"></span>
            </div>
          </div>
          
          <div class="cookie-option">
            <div class="cookie-opt-info">
              <strong>${t.catAnalytics.title}</strong>
              <span>${t.catAnalytics.desc}</span>
            </div>
            <label class="cookie-switch">
              <input type="checkbox" id="cookieOptAnalytics">
              <span class="slider"></span>
            </label>
          </div>
          
          <div class="cookie-option">
            <div class="cookie-opt-info">
              <strong>${t.catMarketing.title}</strong>
              <span>${t.catMarketing.desc}</span>
            </div>
            <label class="cookie-switch">
              <input type="checkbox" id="cookieOptMarketing">
              <span class="slider"></span>
            </label>
          </div>
        </div>
        
        <div class="cookie-modal-actions">
          <button class="btn btn-secondary" onclick="saveGranularConsent()">${t.save}</button>
          <button class="btn btn-primary" onclick="setCookieConsent(true)">${t.acceptAll}</button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function showCookieSettings() {
  const modal = document.getElementById('cookieModal');
  if (modal) modal.classList.add('show');
}

function saveGranularConsent() {
  const analytics = document.getElementById('cookieOptAnalytics')?.checked || false;
  const marketing = document.getElementById('cookieOptMarketing')?.checked || false;
  
  const consent = {
    essential: true,
    analytics,
    marketing,
    timestamp: new Date().toISOString()
  };
  
  localStorage.setItem('nexus-cookie-consent', JSON.stringify(consent));
  closeAllCookieUI();
}

function setCookieConsent(accepted) {
  const consent = accepted 
    ? { essential: true, analytics: true, marketing: true, timestamp: new Date().toISOString() }
    : { essential: true, analytics: false, marketing: false, timestamp: new Date().toISOString() };
    
  localStorage.setItem('nexus-cookie-consent', JSON.stringify(consent));
  closeAllCookieUI();
}

function closeAllCookieUI() {
  const banner = document.getElementById('cookieBanner');
  const modal = document.getElementById('cookieModal');
  if (banner) banner.classList.remove('show');
  if (modal) modal.classList.remove('show');
  setTimeout(() => {
    if (banner) banner.style.display = 'none';
    if (modal) modal.style.display = 'none';
  }, 400);
}

function hasConsent(category) {
  const data = localStorage.getItem('nexus-cookie-consent');
  if (!data) return false;
  try {
    const consent = JSON.parse(data);
    return !!consent[category];
  } catch (e) {
    return data === 'accepted' && category === 'essential';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('nexus-lang') || 'pl';
  initCookieConsent(lang);
});
