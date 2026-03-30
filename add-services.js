const fs = require('fs');

// 1. Add servicesFull translations
const servicesFull = `
  servicesFull: {
    pl: {
      h2: "Pełna lista usług — od A do Z",
      intro: "Nie mamy jednego pakietu dla wszystkich. Poniżej znajdziesz pełną listę modułów — dobieramy je do tego, co w Twojej firmie naprawdę wymaga naprawy.",
      cta: "Wyceń swój projekt →",
      categories: [
        {
          name: "🎯 Strategia i oferta",
          modules: [
            { title: "Strategia i pozycjonowanie oferty", desc: "Prześwietlamy, co sprzedajesz, komu i za ile. Wycinamy usługi, które nie zarabiają. Budujemy jasne pakiety z cenami.", time: "3-5 dni", price: "od 599 zł" },
            { title: "Audyt startowy (60 min)", desc: "Godzina rozmowy, z której wynikają konkretne listy — co naprawić w pierwszej kolejności i jaki jest plan na 30 dni.", time: "2 dni", price: "399-599 zł" },
            { title: "Strategia Digital 360°", desc: "Kompleksowy audyt strony, social mediów, procesów + mapa priorytetów + 3-miesięczny plan wdrożeń.", time: "5 dni", price: "1 499 zł" }
          ]
        },
        {
          name: "🔄 Procesy",
          modules: [
            { title: "Proces sprzedaży", desc: "Układamy ścieżkę od 'lead się odezwał' do 'podpisaliśmy umowę' — z follow-upami, kwalifikacją i lejkiem.", time: "5-7 dni", price: "od 999 zł" },
            { title: "Proces obsługi / delivery", desc: "Definiujemy, co się dzieje po sprzedaży: kto robi co, kiedy, jakim narzędziem. Koniec z chaosem.", time: "5-10 dni", price: "od 1 299 zł" },
            { title: "Automatyzacja procesów", desc: "Automatyzujemy powtarzalne zadania — maile, follow-upy, raportowanie, synchronizację danych. Oszczędność: 5-15h/tydzień.", time: "3-7 dni", price: "od 699 zł" }
          ]
        },
        {
          name: "🌐 Strona i komunikacja",
          modules: [
            { title: "Strona wizytówka firmowa", desc: "5-7 podstron, responsywny design, SEO, formularz kontaktowy, CMS. Strona, która mówi jasno: dla kogo jesteś, co dajesz, ile kosztuje.", time: "7-10 dni", price: "1 499-2 499 zł" },
            { title: "Landing page sprzedażowy", desc: "Jedna podstrona z mocnym CTA, zoptymalizowana pod reklamy Meta/Google. Teksty pod konwersję.", time: "3-5 dni", price: "999-1 499 zł" },
            { title: "Prosta aplikacja webowa", desc: "Kalkulator cenowy, konfigurator, system rezerwacji, panel klienta — narzędzie, które automatyzuje proces.", time: "14-21 dni", price: "od 3 499 zł" }
          ]
        },
        {
          name: "🤖 AI i automatyzacje",
          modules: [
            { title: "Chatbot na stronę", desc: "Bot obsługuje pytania 24/7, kwalifikuje leady, integruje się z kalendarzem. Gdy sytuacja wymaga człowieka — przekazuje.", time: "5-10 dni", price: "1 299-2 299 zł" },
            { title: "Asystent wewnętrzny AI", desc: "Wyszukiwanie w procedurach, podsumowanie maili i spotkań, pomoc w pisaniu ofert. Jak junior, który zna wszystkie procesy.", time: "7-14 dni", price: "999-1 999 zł" }
          ]
        },
        {
          name: "📊 Liczby i dashboardy",
          modules: [
            { title: "Szablon biznesowy (Excel/Sheets)", desc: "Faktury, zamówienia, CRM w jednym pliku. Automatyczne obliczenia, walidacja danych, gotowe do druku.", time: "2-4 dni", price: "299-599 zł" },
            { title: "Dashboard zarządzający", desc: "KPI w jednym widoku — sprzedaż, leady, koszty, pipeline. Automatyczne pobieranie danych, wykresy, raporty.", time: "4-7 dni", price: "699-1 299 zł" }
          ]
        },
        {
          name: "📈 Marketing i social media",
          modules: [
            { title: "Kampania Meta Ads", desc: "3-5 kreacji, targeting pod lokalny biznes, landing page, optymalizacja pod leady.", time: "7 dni setup", price: "999 zł + budżet" },
            { title: "Kampania Google Ads", desc: "Search + Google Maps pod zapytania lokalne. Landing z formularzem, raportowanie konwersji.", time: "7 dni", price: "1 299 zł + budżet" },
            { title: "Content pack startowy", desc: "10 gotowych rolek/postów, content plan na 30 dni, szablony Canva, instrukcja publikacji.", time: "3 dni", price: "499 zł" },
            { title: "Prowadzenie social media (14 dni test)", desc: "20 postów + 10 rolek + 20 Stories, content calendar, A/B testy, statystyki.", time: "14 dni", price: "999 zł" }
          ]
        }
      ]
    },
    en: {
      h2: "Full Service List — A to Z",
      intro: "We don't have one-size-fits-all packages. Below you'll find our complete module list — we match them to what actually needs fixing in your business.",
      cta: "Get a Quote →",
      categories: [
        {
          name: "🎯 Strategy & Offer",
          modules: [
            { title: "Offer Strategy & Positioning", desc: "We analyze what you sell, to whom, and for how much. Cut unprofitable services. Build clear packages with pricing.", time: "3-5 days", price: "from €140" },
            { title: "Startup Audit (60 min)", desc: "One hour call resulting in concrete lists — what to fix first and a 30-day action plan.", time: "2 days", price: "€95-140" },
            { title: "Digital Strategy 360°", desc: "Comprehensive audit of website, social media, processes + priority map + 3-month implementation plan.", time: "5 days", price: "€350" }
          ]
        },
        {
          name: "🔄 Processes",
          modules: [
            { title: "Sales Process", desc: "We design the path from 'lead reached out' to 'deal signed' — with follow-ups, qualification, and pipeline.", time: "5-7 days", price: "from €235" },
            { title: "Delivery Process", desc: "We define what happens after the sale: who does what, when, with which tool. No more chaos.", time: "5-10 days", price: "from €305" },
            { title: "Process Automation", desc: "We automate repetitive tasks — emails, follow-ups, reporting, data sync. Save 5-15h/week.", time: "3-7 days", price: "from €165" }
          ]
        },
        {
          name: "🌐 Website & Communication",
          modules: [
            { title: "Business Website", desc: "5-7 pages, responsive design, SEO, contact form, CMS. A site that clearly says: who you're for, what you deliver.", time: "7-10 days", price: "€350-590" },
            { title: "Sales Landing Page", desc: "Single page with strong CTA, optimized for Meta/Google ads. Conversion-focused copy.", time: "3-5 days", price: "€235-350" },
            { title: "Simple Web Application", desc: "Price calculator, configurator, booking system, client panel — a tool that automates your process.", time: "14-21 days", price: "from €825" }
          ]
        },
        {
          name: "🤖 AI & Automation",
          modules: [
            { title: "Website Chatbot", desc: "Bot handles questions 24/7, qualifies leads, integrates with calendar. Hands off to humans when needed.", time: "5-10 days", price: "€305-540" },
            { title: "Internal AI Assistant", desc: "Search through procedures, summarize emails and meetings, help write proposals. Like a junior who knows all your processes.", time: "7-14 days", price: "€235-470" }
          ]
        },
        {
          name: "📊 Numbers & Dashboards",
          modules: [
            { title: "Business Template (Excel/Sheets)", desc: "Invoices, orders, CRM in one file. Automatic calculations, data validation, print-ready.", time: "2-4 days", price: "€70-140" },
            { title: "Management Dashboard", desc: "KPIs in one view — sales, leads, costs, pipeline. Auto data pulls, charts, weekly/monthly reports.", time: "4-7 days", price: "€165-305" }
          ]
        },
        {
          name: "📈 Marketing & Social Media",
          modules: [
            { title: "Meta Ads Campaign", desc: "3-5 creatives, local business targeting, landing page, lead optimization.", time: "7 days setup", price: "€235 + ad budget" },
            { title: "Google Ads Campaign", desc: "Search + Google Maps for local queries. Landing with form, conversion tracking.", time: "7 days", price: "€305 + ad budget" },
            { title: "Starter Content Pack", desc: "10 ready reels/posts, 30-day content plan, Canva templates, publishing guide.", time: "3 days", price: "€120" },
            { title: "Social Media Management (14-day trial)", desc: "20 posts + 10 reels + 20 Stories, content calendar, A/B tests, analytics.", time: "14 days", price: "€235" }
          ]
        }
      ]
    },
    ua: {
      h2: "Повний список послуг — вiд А до Я",
      intro: "У нас немає одного пакету для всiх. Нижче — повний список модулiв, якi ми пiдбираємо пiд те, що у вашому бiзнесi потребує ремонту.",
      cta: "Оцiнити проєкт →",
      categories: [
        {
          name: "🎯 Стратегiя та пропозицiя",
          modules: [
            { title: "Стратегiя та позицiонування", desc: "Аналiзуємо, що продаєте, кому i за скiльки. Прибираємо те, що не заробляє. Будуємо чiткi пакети.", time: "3-5 днiв", price: "вiд 599 zl" },
            { title: "Стартовий аудит (60 хв)", desc: "Година розмови, з якої випливають конкретнi списки — що ремонтувати першим i план на 30 днiв.", time: "2 днi", price: "399-599 zl" },
            { title: "Digital Стратегiя 360°", desc: "Комплексний аудит сайту, соцмереж, процесiв + карта прiоритетiв + 3-мiсячний план.", time: "5 днiв", price: "1 499 zl" }
          ]
        },
        {
          name: "🔄 Процеси",
          modules: [
            { title: "Процес продажiв", desc: "Вибудовуємо шлях вiд 'клiєнт звернувся' до 'пiдписали договiр' — з follow-up та воронкою.", time: "5-7 днiв", price: "вiд 999 zl" },
            { title: "Процес обслуговування", desc: "Визначаємо, що вiдбувається пiсля продажу: хто робить що, коли, яким iнструментом.", time: "5-10 днiв", price: "вiд 1 299 zl" },
            { title: "Автоматизацiя процесiв", desc: "Автоматизуємо повторюванi завдання — email, follow-up, звiтнiсть, синхронiзацiю даних.", time: "3-7 днiв", price: "вiд 699 zl" }
          ]
        },
        {
          name: "🌐 Сайт i комунiкацiя",
          modules: [
            { title: "Бiзнес-сайт", desc: "5-7 сторiнок, адаптивний дизайн, SEO, форма контакту, CMS.", time: "7-10 днiв", price: "1 499-2 499 zl" },
            { title: "Продажовий лендiнг", desc: "Одна сторiнка з сильним CTA, оптимiзована пiд рекламу Meta/Google.", time: "3-5 днiв", price: "999-1 499 zl" },
            { title: "Простий веб-додаток", desc: "Калькулятор цiн, конфiгуратор, система бронювання, панель клiєнта.", time: "14-21 день", price: "вiд 3 499 zl" }
          ]
        },
        {
          name: "🤖 AI та автоматизацiя",
          modules: [
            { title: "Чат-бот на сайт", desc: "Бот вiдповiдає на питання 24/7, квалiфiкує лiди, iнтегрується з календарем.", time: "5-10 днiв", price: "1 299-2 299 zl" },
            { title: "Внутрiшнiй AI-асистент", desc: "Пошук у процедурах, резюме листiв i зустрiчей, допомога з пропозицiями.", time: "7-14 днiв", price: "999-1 999 zl" }
          ]
        },
        {
          name: "📊 Цифри та дашборди",
          modules: [
            { title: "Бiзнес-шаблон (Excel/Sheets)", desc: "Рахунки, замовлення, CRM в одному файлi. Автоматичнi розрахунки.", time: "2-4 днi", price: "299-599 zl" },
            { title: "Управлiнський дашборд", desc: "KPI в одному виглядi — продажi, лiди, витрати, pipeline. Автоматичне завантаження.", time: "4-7 днiв", price: "699-1 299 zl" }
          ]
        },
        {
          name: "📈 Маркетинг та соцмережi",
          modules: [
            { title: "Кампанiя Meta Ads", desc: "3-5 креативiв, таргетинг пiд локальний бiзнес, лендiнг, оптимiзацiя пiд лiди.", time: "7 днiв", price: "999 zl + бюджет" },
            { title: "Кампанiя Google Ads", desc: "Search + Google Maps пiд локальнi запити. Лендiнг з формою, трекiнг конверсiй.", time: "7 днiв", price: "1 299 zl + бюджет" },
            { title: "Стартовий контент-пак", desc: "10 готових рiлсiв/постiв, контент-план на 30 днiв, шаблони Canva.", time: "3 днi", price: "499 zl" },
            { title: "Ведення соцмереж (14 днiв тест)", desc: "20 постiв + 10 рiлсiв + 20 Stories, контент-календар, A/B тести.", time: "14 днiв", price: "999 zl" }
          ]
        }
      ]
    }
  },`;

// Read and update translations.js
let tFile = fs.readFileSync('js/translations.js', 'utf8');
// Insert before footerCta
tFile = tFile.replace('  footerCta:', servicesFull + '\n  footerCta:');
fs.writeFileSync('js/translations.js', tFile, 'utf8');

// 2. Update contact section translations to be "brief do wyceny"
tFile = fs.readFileSync('js/translations.js', 'utf8');
tFile = tFile.replace(
  '"Porozmawiajmy o Twojej firmie"',
  '"Wyceń swój projekt — wypełnij brief"'
);
tFile = tFile.replace(
  '"Jedna rozmowa, 30 minut, zero zobowiązań. Opowiesz, jak wygląda Twoja firma dziś — ja powiem, co bym z tym zrobiła."',
  '"Wypełnij krótki brief, a przygotujemy dla Ciebie indywidualną wycenę. Im więcej napiszesz, tym dokładniejszą propozycję dostaniesz."'
);
tFile = tFile.replace(
  '"Co się stanie po wysyłce:"',
  '"Co się stanie po wysłaniu briefu:"'
);
tFile = tFile.replace(
  '"Wyślij i umów rozmowę"',
  '"Wyślij brief i otrzymaj wycenę"'
);
// EN
tFile = tFile.replace(
  "\"Let's talk about your business\"",
  '"Get a Quote — Fill Out the Brief"'
);
// EN intro skipped
tFile = tFile.replace(
  '"What happens after you submit:"',
  '"What happens after you submit the brief:"'
);
tFile = tFile.replace(
  '"Send & Book a Call"',
  '"Send Brief & Get a Quote"'
);
// UA
tFile = tFile.replace(
  '"Поговоримо про ваш бiзнес"',
  '"Оцiнiть свiй проєкт — заповнiть бриф"'
);
fs.writeFileSync('js/translations.js', tFile, 'utf8');

// 3. Add rendering logic for servicesFullGrid to main.js
let mainJs = fs.readFileSync('js/main.js', 'utf8');

const renderServicesCode = `
// ═══ RENDER FULL SERVICES CATALOG ═══
function renderServicesFull(lang) {
  const grid = document.getElementById('servicesFullGrid');
  if (!grid || !translations.servicesFull) return;
  const data = translations.servicesFull[lang];
  if (!data || !data.categories) return;
  
  grid.innerHTML = data.categories.map((cat, ci) => {
    const modulesHtml = cat.modules.map(m => \`
      <div class="service-module-card">
        <div class="service-module-header">
          <h4>\${m.title}</h4>
          <div class="service-module-meta">
            <span class="service-time">⏱ \${m.time}</span>
            <span class="service-price">💰 \${m.price}</span>
          </div>
        </div>
        <p>\${m.desc}</p>
      </div>
    \`).join('');
    
    return \`
      <div class="service-category reveal reveal-delay-\${(ci % 3) + 1}">
        <h3 class="service-category-name">\${cat.name}</h3>
        <div class="service-modules-list">
          \${modulesHtml}
        </div>
      </div>
    \`;
  }).join('');
}
`;

// Insert before the renderDynamicContent function call
mainJs = mainJs.replace(
  'function renderDynamicContent(lang)',
  renderServicesCode + '\nfunction renderDynamicContent(lang)'
);

// Add renderServicesFull call inside renderDynamicContent
mainJs = mainJs.replace(
  'renderValues(lang);',
  'renderValues(lang);\n  renderServicesFull(lang);'
);

fs.writeFileSync('js/main.js', mainJs, 'utf8');

// 4. Add CSS for service categories
let css = fs.readFileSync('css/styles.css', 'utf8');
css += `

/* ═══ FULL SERVICES CATALOG ═══ */
.service-category {
  margin-bottom: 48px;
}
.service-category-name {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
  color: var(--text-primary);
}
.service-modules-list {
  display: grid;
  gap: 16px;
}
.service-module-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 24px;
  transition: border-color 0.3s, transform 0.3s;
}
.service-module-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}
.service-module-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}
.service-module-header h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}
.service-module-meta {
  display: flex;
  gap: 16px;
  flex-shrink: 0;
}
.service-time, .service-price {
  font-size: 0.85rem;
  color: var(--accent-light);
  white-space: nowrap;
}
.service-module-card p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.6;
}

@media (min-width: 768px) {
  .service-modules-list {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
}
`;
fs.writeFileSync('css/styles.css', css, 'utf8');

console.log('Done! Services catalog + brief form added.');
