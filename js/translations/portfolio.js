export const portfolio = {
  portfolioPage: {
    pl: { badge: "Nasze Realizacje", h1: "Od Chaosu do Systemu", subtitle: "Poniżej znajdziecie wybrane projekty, w których wdrożyliśmy rozwiązania oszczędzające czas i zwiększające zyski naszych klientów." },
    en: { badge: "Our Case Studies", h1: "From Chaos to System", subtitle: "Below are selected projects where we implemented solutions that save time and increase our clients' profits." },
    ua: { badge: "Нашi Кейси", h1: "Вiд Хаосу до Системи", subtitle: "Нижче наведенi вибранi проєкти, де ми впровадили рiшення, що економлять час i збiльшують прибутки." }
  },
  portfolioItems: {
    pl: [
      {
        id: "ecommerce-auto",
        category: "E-commerce / Automatyzacja",
        title: "Automatyzacja procesów dla sklepu odzieżowego",
        img: "img/case-ecommerce.png",
        challenge: "Właściciel tracił 4h dziennie na ręczne wpisywanie zamówień i sprawdzanie stanów magazynowych w trzech różnych systemach.",
        solution: "Wdrożenie centralnego dashboardu integrującego sklep z magazynem i systemem kurierskim. Automatyczne powiadomienia dla klientów o statusie zamówienia.",
        result: {
          perc: "+35%",
          desc: "Wzrost efektywności",
          stats: [
            { val: "20h", label: "Oszczędność czasu / tydz" },
            { val: "Zero", label: "Błędów w wysyłkach" },
            { val: "24/7", label: "Podgląd stanów live" }
          ]
        }
      },
      {
        id: "realestate-ai",
        category: "Real Estate / Strony WWW",
        title: "Nowoczesny portal dla agencji nieruchomości premium",
        img: "img/case-realestate.png",
        challenge: "Stara strona nie pasowała do luksusowych ofert. Brak filtrów i trudny formularz kontaktu zniechęcały klientów.",
        solution: "Projekt strony z naciskiem na user experience, szybkie ładowanie zdjęć 4K i automatyczny system kwalifikacji leadów.",
        result: {
          perc: "+150%",
          desc: "Więcej leadów",
          stats: [
            { val: "2.4s", label: "Czas ładowania" },
            { val: "+40%", label: "Konwersja na mobile" },
            { val: "Gold", label: "UX Standard" }
          ]
        }
      },
      {
        id: "ai-assistant",
        category: "AI / Obsługa Klienta",
        title: "Asystent Sprzedaży AI dla firmy usługowej",
        img: "img/case-ai.png",
        challenge: "Klienci pisali o różnych porach, a zespół nie nadążał z odpowiedziami, tracąc 30% potencjalnych zleceń.",
        solution: "Wdrożenie inteligentnego chatbota AI, który kwalifikuje zapytania i zapisuje klientów bezpośrednio w kalendarzu.",
        result: {
          perc: "-80%",
          desc: "Mniej pracy manualnej",
          stats: [
            { val: "100%", label: "Odpowiedzi 24/7" },
            { val: "+25%", label: "Więcej umówionych wizyt" },
            { val: "AI", label: "Pełna automatyzacja" }
          ]
        }
      },
      {
        id: "strategy-scale",
        category: "Strategia / Skalowanie",
        title: "Pełne uporządkowanie procesów w agencji marketingowej",
        img: "img/case-strategy.png",
        challenge: "Firma rosła, ale chaos w zarządzaniu projektami sprawiał, że marża spadała wraz z każdym nowym klientem.",
        solution: "Opracowanie mapy procesów, wdrożenie jasnych procedur obsługi i zautomatyzowanego raportowania KPI.",
        result: {
          perc: "+45%",
          desc: "Wzrost marży",
          stats: [
            { val: "30 dni", label: "Czas wdrożenia" },
            { val: "100%", label: "Przejrzystość kosztów" },
            { val: "Spokój", label: "Dla właścicieli" }
          ]
        }
      }
    ],
    en: [
      {
        id: "ecommerce-auto",
        category: "E-commerce / Automation",
        title: "Order Process Automation for Apparel Store",
        img: "img/case-ecommerce.png",
        challenge: "Owner lost 4h daily manually syncing orders and inventory across three different systems.",
        solution: "Implemented central dashboard integrating the store with warehouse and couriers. Automatic customer notifications.",
        result: {
          perc: "+35%",
          desc: "Efficiency Growth",
          stats: [
            { val: "20h", label: "Time saved / week" },
            { val: "Zero", label: "Shipping errors" },
            { val: "24/7", label: "Live stock view" }
          ]
        }
      },
      {
        id: "realestate-ai",
        category: "Real Estate / Web Design",
        title: "Modern Portal for Premium Agency",
        img: "img/case-realestate.png",
        challenge: "Old website didn't match luxury listings. Lack of filters and difficult contact forms deterred clients.",
        solution: "Designed UX-focused site with 4K photo optimization and automatic lead qualification system.",
        result: {
          perc: "+150%",
          desc: "More Leads",
          stats: [
            { val: "2.4s", label: "Load time" },
            { val: "+40%", label: "Mobile conversion" },
            { val: "Gold", label: "UX Standard" }
          ]
        }
      },
      {
        id: "ai-assistant",
        category: "AI / Client Service",
        title: "AI Sales Assistant for Service Business",
        img: "img/case-ai.png",
        challenge: "Clients messaged 24/7, and the team couldn't keep up, losing 30% of potential deals.",
        solution: "Implemented an intelligent AI chatbot that qualifies inquiries and books appointments directly into the calendar.",
        result: {
          perc: "-80%",
          desc: "Less manual work",
          stats: [
            { val: "100%", label: "24/7 Responses" },
            { val: "+25%", label: "More booked calls" },
            { val: "AI", label: "Full Automation" }
          ]
        }
      },
      {
        id: "strategy-scale",
        category: "Strategy / Scaling",
        title: "Processes Transformation for Marketing Agency",
        img: "img/case-strategy.png",
        challenge: "Company was growing, but management chaos meant profit margin dropped with every new client.",
        solution: "Developed process maps, implemented clear delivery procedures and automated KPI reporting.",
        result: {
          perc: "+45%",
          desc: "Margin Growth",
          stats: [
            { val: "30 days", label: "Implementation" },
            { val: "100%", label: "Cost clarity" },
            { val: "Peace", label: "For the owners" }
          ]
        }
      }
    ],
    ua: [
      {
        id: "ecommerce-auto",
        category: "E-commerce / Автоматизацiя",
        title: "Автоматизацiя процесiв для магазину одягу",
        img: "img/case-ecommerce.png",
        challenge: "Власник втрачав 4 години на день на ручну синхронiзацiю замовлень.",
        solution: "Впровадження центрального дашборду. Автоматичнi сповiщення.",
        result: { perc: "+35%", desc: "Рiст ефективностi", stats: [{ val: "20 год", label: "Економiя часу" }] }
      },
      {
        id: "realestate-ai",
        category: "Нерухомiсть / Web Design",
        title: "Портал для агентства нерухомостi",
        img: "img/case-realestate.png",
        challenge: "Старий сайт не вiдповiдав рiвню об'єктiв.",
        solution: "Дизайн з акцентом на UX та швидкiсть.",
        result: { perc: "+150%", desc: "Бiльше лiдiв", stats: [{ val: "2.4с", label: "Час завантаження" }] }
      },
      {
        id: "ai-assistant",
        category: "AI / Обслуговування",
        title: "AI Асистент з продажу",
        img: "img/case-ai.png",
        challenge: "Клiєнти писали 24/7, а команда не встигала вiдповiдати.",
        solution: "Розумний чат-бот, який квалiфiкує запити.",
        result: { perc: "-80%", desc: "Менше рутини", stats: [{ val: "100%", label: "Вiдповiдi 24/7" }] }
      },
      {
        id: "strategy-scale",
        category: "Стратегiя / Масштабування",
        title: "Трансформацiя процесiв маркетингової агенцiї",
        img: "img/case-strategy.png",
        challenge: "Хаос в управлiннi проєктами при завеликому рості.",
        solution: "Карта процесiв та автоматизованi звiти KPI.",
        result: { perc: "+45%", desc: "Рiст маржi", stats: [{ val: "30 днiв", label: "Термiн впровадження" }] }
      }
    ]
  }
};
