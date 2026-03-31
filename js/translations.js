const translations = {
  nav: {
    pl: { home: "Strona główna", services: "Usługi", cases: "Realizacje", about: "O mnie", pricing: "Cennik", blog: "FAQ", cta: "Wyceń swój brief" },
    en: { home: "Home", services: "Services", cases: "Case Studies", about: "About", pricing: "Pricing", blog: "FAQ", cta: "Get a Quote" },
    ua: { home: "Головна", services: "Послуги", cases: "Кейси", about: "Про мене", pricing: "Цiни", blog: "FAQ", cta: "Оцiнити проєкт" }
  },
  hero: {
    pl: {
      badge: "Dla firm, które chcą w końcu ogarnąć biznes",
      h1_line1: "Zamieniamy chaos",
      h1_line2: "w Twojej firmie",
      h1_highlight: "w system, który zarabia.",
      subtitle: "Poukładam Ci ofertę, sprzedaż, obsługę klienta i liczby — aby przestać gasić pożary i zacząć budować.",
      cta_primary: "Wyceń swój brief",
      cta_secondary: "Zobacz, jak pracuję"
    },
    en: {
      badge: "For businesses ready to get organized",
      h1_line1: "Turning chaos",
      h1_line2: "in your business",
      h1_highlight: "into a system that earns.",
      subtitle: "I will organize your offer, sales, client service, and numbers - so you can stop firefighting and start building.",
      cta_primary: "Get a Free Quote",
      cta_secondary: "See How I Work"
    },
    ua: {
      badge: "Для бiзнесiв, якi хочуть нарештi навести лад",
      h1_line1: "Перетворюємо хаос",
      h1_line2: "у вашому бiзнесi",
      h1_highlight: "на систему, яка заробляє.",
      subtitle: "Впорядкую вашу пропозицiю, продажi, обслуговування клiєнтiв i цифри - щоб ви перестали гасити пожежi.",
      cta_primary: "Отримати безкоштовну оцiнку",
      cta_secondary: "Дiзнатися бiльше"
    }
  },
  forWhom: {
    pl: {
      h2: "Rozpoznajesz się w tym?",
      intro: "nexus.dev nie jest dla każdego. Pracuję z firmami, które mają konkretny problem do rozwiązania.",
      cards: [
        { title: "Mamy stronę, ale\nzero efektów", desc: "Strona jest, ale nie generuje zapytań. Oferta niejasna, CTA schowane, klient nie wie, co dalej.", icon: "🌐" },
        { title: "Nie wiem, na czym\nzarabiam", desc: "Robisz 10 rzeczy, ale nie wiesz, które przynoszą kasę, a które ją zjadają. Brak kontroli nad liczbami.", icon: "📊" },
        { title: "Sprzedaż to u nas\nloteria", desc: "Leady przychodzą, ale nie masz procesu — jedne zamykasz, inne się gubią. Brak follow-upów.", icon: "🎰" },
        { title: "Po podpisaniu umowy\nzaczyna się chaos", desc: "Obsługa klienta opiera się na pamięci i Excelu. Nikt nie wie, kto za co odpowiada.", icon: "⚡" }
      ]
    },
    en: {
      h2: "Sound familiar?",
      intro: "nexus.dev is not for everyone. I work with businesses that have a specific problem to solve.",
      cards: [
        { title: "We have a website,\nbut zero results", desc: "The website exists but generates no inquiries. Unclear offer, hidden CTAs, visitors don't know what to do next.", icon: "🌐" },
        { title: "I don't know what's\nmaking money", desc: "You do 10 things but don't know which bring revenue and which drain it. No control over numbers.", icon: "📊" },
        { title: "Our sales are\na lottery", desc: "Leads come in, but there's no process - some close, others get lost. No follow-ups, no system.", icon: "🎰" },
        { title: "After signing the contract,\nchaos begins", desc: "Client service depends on memory and spreadsheets. Nobody knows who's responsible for what.", icon: "⚡" }
      ]
    },
    ua: {
      h2: "Впiзнаєте себе?",
      intro: "nexus.dev не для всiх. Я працюю з компанiями, якi мають конкретну проблему для вирiшення.",
      cards: [
        { title: "Ми маємо сайт,\nале нуль результатiв", desc: "Сайт є, але не генерує запитiв. Пропозицiя незрозумiла, CTA прихованi.", icon: "🌐" },
        { title: "Не знаю, на чому\nзаробляю", desc: "Ви робите 10 речей, але не знаєте, якi приносять грошi, а якi витрачають.", icon: "📊" },
        { title: "Продажi у нас -\nлотерея", desc: "Лiди приходять, але процесу немає - однi закриваєте, iншi губляться.", icon: "🎰" },
        { title: "Пiсля пiдписання договору\nпочинається хаос", desc: "Обслуговування клiєнтiв тримається на пам'ятi та Excel. Нiхто не знає, хто за що вiдповiдає.", icon: "⚡" }
      ]
    }
  },
  modules: {
    pl: {
      h2: "Dobieram moduły do Twojej sytuacji",
      intro: "Nie mam jednego pakietu dla wszystkich. Mam zestaw modułów — dobieram je do tego, co u Ciebie naprawdę wymaga naprawy.",
      cta: "Zobacz pełną ofertę",
      cards: [
        { icon: "🎯", title: "Strategia oferty", desc: "Prześwietlam, co sprzedajesz, komu i za ile. Wycinam to, co nie zarabia, wzmacniam to, co ma potencjał." },
        { icon: "📊", title: "Liczby i dashboardy", desc: "Buduję prosty system, w którym widzisz kluczowe wskaźniki bez grzebania w Excelach." },
        { icon: "🔄", title: "Proces sprzedaży", desc: "Układam ścieżkę od 'klient się odezwał' do 'podpisaliśmy umowę' — z follow-upami i lejkiem." },
        { icon: "⚙️", title: "Proces obsługi", desc: "Definiuję, co się dzieje po sprzedaży: kto robi co, kiedy, jakim narzędziem. Koniec z chaosem." },
        { icon: "🌐", title: "Strona i komunikacja", desc: "Projektuję stronę WWW i materiały ofertowe, żeby jasno mówić: dla kogo jesteś, co dajesz, ile to kosztuje." },
        { icon: "🤖", title: "Automatyzacje i AI", desc: "Automatyzuję powtarzalne zadania: follow-upy, raporty, chatboty, integracje między narzędziami." }
      ]
    },
    en: {
      h2: "Building blocks tailored to your situation",
      intro: "I don't have one-size-fits-all packages. I have a set of modules - and I match them to what actually needs fixing.",
      cta: "See Full Offer",
      cards: [
        { icon: "🎯", title: "Offer Strategy", desc: "I analyze what you sell, to whom, and for how much. Cut what doesn't earn, strengthen what has potential." },
        { icon: "📊", title: "Numbers & Dashboards", desc: "I build a simple system where you see key metrics without digging through spreadsheets." },
        { icon: "🔄", title: "Sales Process", desc: "I design the path from 'client reached out' to 'deal signed' - with follow-ups and a pipeline." },
        { icon: "⚙️", title: "Delivery Process", desc: "I define what happens after the sale: who does what, when, with which tool. No more chaos." },
        { icon: "🌐", title: "Website & Communication", desc: "I design websites and sales materials that clearly say: who you're for, what you deliver, how much it costs." },
        { icon: "🤖", title: "Automations & AI", desc: "I automate repetitive tasks: follow-ups, reports, chatbots, integrations between tools." }
      ]
    },
    ua: {
      h2: "Пiдбираємо блоки пiд вашу ситуацiю",
      intro: "У мене немає одного пакету для всiх. Є набiр модулiв - я пiдбираю їх пiд те, що у вас потребує ремонту.",
      cta: "Переглянути повну пропозицiю",
      cards: [
        { icon: "🎯", title: "Стратегiя пропозицiї", desc: "Аналiзую, що ви продаєте, кому i за скiльки. Прибираю те, що не заробляє." },
        { icon: "📊", title: "Цифри та дашборди", desc: "Будую просту систему, де ви бачите ключовi показники без копання в Excel." },
        { icon: "🔄", title: "Процес продажiв", desc: "Вибудовую шлях вiд 'клiєнт звернувся' до 'пiдписали договiр' - з follow-up та воронкою." },
        { icon: "⚙️", title: "Процес обслуговування", desc: "Визначаю, що вiдбувається пiсля продажу: хто робить що, коли, яким iнструментом." },
        { icon: "🌐", title: "Сайт i комунiкацiя", desc: "Проєктую сайт i матерiали, щоб чiтко говорити: для кого ви, що даєте, скiльки це коштує." },
        { icon: "🤖", title: "Автоматизацiя та AI", desc: "Автоматизую повторюванi завдання: follow-up, звiти, чат-боти, iнтеграцiї." }
      ]
    }
  },
  process: {
    pl: {
      h2: "4 kroki od chaosu do systemu",
      intro: "Każda współpraca zaczyna się od rozmowy. Nie sprzedaję nic na siłę — najpierw rozumiem, potem proponuję.",
      cta: "Wyślij swój brief",
      steps: [
        { num: "01", title: "Rozmowa diagnostyczna", subtitle: "bezpłatna · 30 min", desc: "Rozmawiamy o Twojej firmie: co sprzedajesz, jak wygląda sprzedaż, na czym tracisz czas. Ty mówisz — ja słucham." },
        { num: "02", title: "Diagnoza i plan", subtitle: "dokument z propozycją", desc: "Przygotowuję krótki dokument: co wymaga naprawy, jakie moduły proponuję, ile to zajmie i ile kosztuje." },
        { num: "03", title: "Wdrożenie", subtitle: "moduł po module", desc: "Pracuję w cyklach 1-3 tygodniowych. Po każdym etapie masz gotowy, działający element." },
        { num: "04", title: "Wsparcie i rozwój", subtitle: "stałe partnerstwo", desc: "Po wdrożeniu nie znikam. Monitoruję wyniki, optymalizuję i rozwijam system, gdy Twoja firma rośnie." }
      ]
    },
    en: {
      h2: "4 steps from chaos to system",
      intro: "Every collaboration starts with a conversation. I don't sell anything by force - first I understand, then I propose.",
      cta: "Send Your Brief",
      steps: [
        { num: "01", title: "Diagnostic Call", subtitle: "free - 30 min", desc: "We talk about your business: what you sell, how sales work, your pain points. You talk - I listen." },
        { num: "02", title: "Diagnosis & Plan", subtitle: "proposal document", desc: "I prepare a short document: what needs fixing, which modules I propose, timeline, and cost. No surprises." },
        { num: "03", title: "Implementation", subtitle: "module by module", desc: "I work in 1-3 week cycles. After each phase, you have a working element - no waiting months." },
        { num: "04", title: "Support & Growth", subtitle: "ongoing partnership", desc: "After implementation, I don't disappear. I monitor results, optimize, and expand the system as your business grows." }
      ]
    },
    ua: {
      h2: "4 кроки вiд хаосу до системи",
      intro: "Кожна спiвпраця починається з розмови. Я нiчого не продаю силомiць - спочатку розумiю, потiм пропоную.",
      cta: "Надiслати бриф",
      steps: [
        { num: "01", title: "Дiагностичний дзвiнок", subtitle: "безкоштовно - 30 хв", desc: "Розмовляємо про ваш бiзнес: що продаєте, як виглядають продажi. Ви розповiдаєте - я слухаю." },
        { num: "02", title: "Дiагноз i план", subtitle: "документ з пропозицiєю", desc: "Готую короткий документ: що потребує ремонту, якi модулi пропоную, скiльки займе i коштує." },
        { num: "03", title: "Впровадження", subtitle: "модуль за модулем", desc: "Працюю в циклах 1-3 тижнi. Пiсля кожного етапу маєте готовий, працюючий елемент." },
        { num: "04", title: "Пiдтримка i розвиток", subtitle: "постiйне партнерство", desc: "Пiсля впровадження не зникаю. Монiторю результати, оптимiзую i розвиваю систему." }
      ]
    }
  },
  cases: {
    pl: {
      h2: "Co się zmienia, gdy chaos zamienia się w system",
      intro: "Każda firma jest inna. Ale wzorzec jest podobny: przychodzą z bałaganem, wychodzą z planem i narzędziami.",
      cta: "Chcesz podobne wyniki? Wyślij brief",
      items: [
        { type: "Agencja marketingowa", size: "8 osób", before: "20 uslug na stronie, klienci nie wiedzieli co wybrać. Brak CRM, brak follow-upów.", modules: "Strategia oferty > Proces sprzedaży > Dashboard > Strona WWW", after: "5 pakietów z cenami. Pipeline w Notion. Czas zamykania deala skrócony o połowę." },
        { type: "Freelancerka", size: "jednoosobowa działalność", before: "Oferta: robię co klient chce. Brak strony, brak cennika. Praca wieczorami i w weekendy.", modules: "Strategia oferty → Strona wizytówka → Automatyzacja leadów", after: "3 jasne pakiety na stronie. Formularz kwalifikujący. Pierwszy wolny weekend od 2 lat. Przychód +30%." },
        { type: "Software house", size: "12 osób", before: "Po sprzedaży — chaos. Nikt nie wie kto za co odpowiada. Klienci pytają kiedy będzie gotowe.", modules: "Proces delivery → Dashboard realizacji → Automatyzacja raportów", after: "Board realizacyjny w Asanie. Automatyczny update co tydzień. Zespół przestał gasić pożary." }
      ]
    },
    en: {
      h2: "What changes when chaos becomes a system",
      intro: "Every business is different. But the pattern is the same: they come with mess, they leave with a plan and tools that work.",
      cta: "Want similar results? Send a brief",
      items: [
        { type: "Marketing Agency", size: "8 people", before: "20 services on the website, clients didn't know what to choose. No CRM, no follow-ups.", modules: "Offer Strategy > Sales Process > Dashboard > Website", after: "5 clear packages with pricing. Pipeline in Notion. Deal closing time cut in half." },
        { type: "Freelancer", size: "solo business", before: "Offer: I do whatever the client wants. No website, no pricing, no system.", modules: "Offer Strategy > Business Website > Lead Automation", after: "3 clear packages on the website. Qualifying form. First free weekend in 2 years. Revenue +30%." },
        { type: "Software House", size: "12 people", before: "After the sale - chaos. Nobody knows who is responsible for what.", modules: "Delivery Process > Project Dashboard > Report Automation", after: "Project board in Asana. Automatic weekly client updates. Team stopped firefighting." }
      ]
    },
    ua: {
      h2: "Що змiнюється, коли хаос стає системою",
      intro: "Кожен бiзнес iнший. Але патерн однаковий: приходять з безладом, виходять з планом та iнструментами.",
      cta: "Хочете подiбнi результати? Надiшлiть бриф",
      items: [
        { type: "Маркетингова агенцiя", size: "8 осiб", before: "20 послуг на сайтi, клiєнти не знали що обрати. Немає CRM, немає follow-up.", modules: "Стратегiя > Процес продажiв > Дашборд > Сайт", after: "5 чiтких пакетiв з цiнами. Pipeline в Notion. Час закриття угоди скоротився вдвiчi." },
        { type: "Фрiлансер", size: "один бiзнес", before: "Роблю все, що клiєнт захоче. Немає сайту, немає цiн, немає системи.", modules: "Стратегiя > Вiзитка-сайт > Автоматизацiя лiдiв", after: "3 чiткi пакети на сайтi. Квалiфiкацiйна форма. Перший вiльний вихiдний за 2 роки." },
        { type: "Software House", size: "12 осiб", before: "Пiсля продажу - хаос. Нiхто не знає, хто за що вiдповiдає.", modules: "Процес delivery > Дашборд проєктiв > Автоматизацiя звiтiв", after: "Проєктна дошка в Asana. Автоматичний щотижневий апдейт клiєнту." }
      ]
    }
  },
  testimonials: {
    pl: {
      h2: "Co mówią ci, z którymi pracowałam",
      items: [
        { quote: "Myślałem, że muszę zatrudnić dyrektora operacyjnego. Wystarczyło poukładać procesy.", name: "Tomek K.", role: "właściciel software house'u" },
        { quote: "Pierwszy raz widzę w jednym miejscu, ile zarabiam, ile tracę i na czym się skupić.", name: "Ania M.", role: "freelancerka, copywriting" },
        { quote: "Nie sprzedała mi systemu za 50 tysięcy. Pomogła mi ogarnąć firmę za ułamek tego.", name: "Marek S.", role: "właściciel agencji" }
      ]
    },
    en: {
      h2: "What my clients say",
      items: [
        { quote: "I thought I needed to hire a COO. Turns out I just needed to organize my processes.", name: "Tom K.", role: "software house owner" },
        { quote: "For the first time, I see in one place how much I earn, how much I lose, and what to focus on.", name: "Anna M.", role: "freelance copywriter" },
        { quote: "She didn't sell me a system for 50 thousand. She helped me sort out my business for a fraction of that.", name: "Mark S.", role: "agency owner" }
      ]
    },
    ua: {
      h2: "Що кажуть тi, з ким я працювала",
      items: [
        { quote: "Думав, потрiбно найняти операцiйного директора. Виявилося, досить було впорядкувати процеси.", name: "Тарас К.", role: "власник software house" },
        { quote: "Вперше бачу в одному мiсцi, скiльки заробляю, скiльки втрачаю i на чому фокусуватися.", name: "Анна М.", role: "фрiлансерка, копiрайтинг" },
        { quote: "Не продала менi систему за 50 тисяч. Допомогла впорядкувати бiзнес за частку цiєї суми.", name: "Марко С.", role: "власник агенцiї" }
      ]
    }
  },
  whyNexus: {
    pl: {
      h2: "Dlaczego ja, a nie kolejna agencja od wszystkiego",
      cards: [
        { icon: "🔍", title: "Najpierw diagnoza, potem rozwiązanie", desc: "Nie zaczynam od 'zrobimy Ci stronę'. Zaczynam od 'pokaż, jak wygląda Twoja firma dziś' — i dopiero proponuję." },
        { icon: "🧩", title: "Moduły, nie pakiety all in one", desc: "Nie płacisz za to, czego nie potrzebujesz. Dobieram moduły do sytuacji — od jednego do pełnej transformacji." },
        { icon: "🚀", title: "Wyniki, nie raporty", desc: "Nie dostajesz 40-stronicowej prezentacji. Dostajesz działający system, który od razu zmienia to, jak pracujesz." },
        { icon: "💬", title: "Po ludzku, nie korporacyjnie", desc: "Rozmawiamy jak ludzie. Zależy mi na pełnym zrozumieniu tego, co robimy i dlaczego — bez żargonu." }
      ]
    },
    en: {
      h2: "Why me, not another agency for everything",
      cards: [
        { icon: "🔍", title: "Diagnosis first, solution second", desc: "I don't start with 'let's build you a website.' I start with 'show me how your business works today' - then propose what to fix." },
        { icon: "🧩", title: "Modules, not all-in-one packages", desc: "You don't pay for what you don't need. I match the blocks to your situation - from a single module to full transformation." },
        { icon: "🚀", title: "Results, not reports", desc: "You don't get a 40-page presentation. You get a working system that immediately changes how you operate." },
        { icon: "💬", title: "Human, not corporate", desc: "We talk like people. I care that you understand what we're doing and why - no jargon." }
      ]
    },
    ua: {
      h2: "Чому я, а не чергова агенцiя вiд усього",
      cards: [
        { icon: "🔍", title: "Спочатку дiагноз, потiм рiшення", desc: "Не починаю з 'зробимо вам сайт'. Починаю з 'покажiть, як виглядає ваш бiзнес сьогоднi'." },
        { icon: "🧩", title: "Модулi, а не пакети все включено", desc: "Ви не платите за те, що не потрiбно. Пiдбираю блоки пiд ситуацiю." },
        { icon: "🚀", title: "Результати, а не звiти", desc: "Не отримуєте 40-сторiнкову презентацiю. Отримуєте працюючу систему." },
        { icon: "💬", title: "По-людськи, не корпоративно", desc: "Розмовляємо як люди. Менi важливо, щоб ви розумiли - що робимо i навiщо." }
      ]
    }
  },
  faq: {
    pl: {
      h2: "Najczęstsze pytania",
      items: [
        { q: "Ile kosztuje współpraca z nexus.dev?", a: "Zależy od zakresu. Pojedynczy moduł zaczyna się od 499 zł, pakiety startowe od 2299 zł. Dokładną wycenę dostaniesz po bezpłatnej rozmowie." },
        { q: "Dla jakich firm to jest?", a: "Dla małych i średnich firm usługowych (1-50 osób), które mają chaos w ofercie, sprzedaży, obsłudze lub nie widzą swoich liczb." },
        { q: "Ile trwa wdrożenie?", a: "Typowy moduł: 1-3 tygodnie. Pełna transformacja: 4-8 tygodni. Po każdym module masz gotowy, działający element." },
        { q: "Czy muszę mieć jakieś narzędzia na start?", a: "Nie. Dobieram narzędzia do sytuacji — od prostego Notiona po dedykowane systemy." },
        { q: "Co jeśli nie wiem, czego potrzebuję?", a: "Właśnie od tego jest bezpłatna rozmowa diagnostyczna. 30 minut — opowiadasz o firmie, ja zadaję pytania." }
      ]
    },
    en: {
      h2: "Frequently Asked Questions",
      items: [
        { q: "How much does working with nexus.dev cost?", a: "It depends on scope. A single module starts at 120 EUR, starter packages from 550 EUR. Exact quote after a free diagnostic call." },
        { q: "What types of businesses is this for?", a: "Small and mid-sized service businesses (1-50 people) that have chaos in their offer, sales, delivery, or can't see their numbers." },
        { q: "How long does implementation take?", a: "Typical module: 1-3 weeks. Full transformation: 4-8 weeks. After each module, you have a working element." },
        { q: "Do I need any tools to start?", a: "No. I match tools to your situation - from simple Notion to dedicated systems. I don't force any tech stack." },
        { q: "What if I don't know what I need?", a: "That's exactly what the free diagnostic call is for. 30 minutes - you tell me about your business, I ask questions." }
      ]
    },
    ua: {
      h2: "Частi запитання",
      items: [
        { q: "Скiльки коштує робота з nexus.dev?", a: "Залежить вiд обсягу. Один модуль починається вiд 499 zl, стартовi пакети вiд 2299 zl." },
        { q: "Для яких компанiй це пiдходить?", a: "Для малих i середнiх сервiсних компанiй (1-50 осiб), якi мають хаос у пропозицiї, продажах, обслуговуваннi." },
        { q: "Скiльки часу займає впровадження?", a: "Типовий модуль: 1-3 тижнi. Повна трансформацiя: 4-8 тижнiв." },
        { q: "Чи потрiбнi iнструменти для початку?", a: "Нi. Пiдбираю iнструменти пiд ситуацiю - вiд простого Notion до спецiалiзованих систем." },
        { q: "Що якщо я не знаю, чого потребую?", a: "Саме для цього безкоштовний дiагностичний дзвiнок. 30 хвилин." }
      ]
    }
  },
  about: {
    pl: {
      h2: "Nie sprzedaję narzędzi. Pomagam ogarnąć firmę.",
      paragraphs: [
        "nexus.dev powstało z frustracji. Widziałam, jak właściciele firm tonęli w chaosie — mieli klientów, mieli zespół, mieli pomysły — ale brakowało systemu, który to wszystko spina.",
        "Nie buduję wielkich systemów IT za setki tysięcy. Siadam z właścicielem firmy, słucham, co go boli, a potem krok po kroku pomagam to poukładać.",
        "Pracuję modułowo. Dobieram to, co akurat potrzebne. Zawsze: konkretnie, po ludzku, bez korporacyjnego bełkotu."
      ],
      founder: { name: "Patrycja Duk", role: "Founder, nexus.dev", bio: "Strateg biznesowy, projektantka systemów i procesów. Pomagam firmom przejść od chaosu do porządku." },
      values_title: "Czym się kieruję",
      values: [
        { title: "Najpierw zrozumieć, potem działać", desc: "Nie proponuję rozwiązań, zanim nie zrozumiem problemu." },
        { title: "Prostota ponad złożoność", desc: "Najlepsze systemy to te, które ludzie faktycznie używają." },
        { title: "Efekt, nie raport", desc: "Mierzę się wynikami klienta, nie liczbą slajdów." },
        { title: "Modularność", desc: "Klient płaci za to, czego potrzebuje — ani mniej, ani więcej." },
        { title: "Po ludzku", desc: "Mówię normalnym językiem. Jeśli coś nie ma sensu — powiem to wprost." }
      ]
    },
    en: {
      h2: "I don't sell tools. I help you sort out your business.",
      paragraphs: [
        "nexus.dev was born from frustration. I watched business owners drown in chaos - they had clients, teams, ideas - but no system to connect it all.",
        "I don't build massive IT systems for hundreds of thousands. I sit down with the business owner, listen to what hurts, and step by step help organize it.",
        "I work modularly. I pick what's actually needed. Always: specific, human, no corporate nonsense."
      ],
      founder: { name: "Patrycja Duk", role: "Founder, nexus.dev", bio: "Business strategist, systems and process designer. I help companies transition from chaos to order." },
      values_title: "My principles",
      values: [
        { title: "Understand first, act second", desc: "I don't propose solutions before I understand the problem." },
        { title: "Simplicity over complexity", desc: "The best systems are those people actually use." },
        { title: "Outcomes, not reports", desc: "I measure myself by client results, not by slides." },
        { title: "Modularity", desc: "The client pays for what they need - nothing less, nothing more." },
        { title: "Human touch", desc: "I speak plain language. If something doesn't make sense - I say it directly." }
      ]
    },
    ua: {
      h2: "Я не продаю iнструменти. Я допомагаю навести лад у бiзнесi.",
      paragraphs: [
        "nexus.dev народився з фрустрацiї. Я бачила, як власники бiзнесу тонули в хаосi - мали клiєнтiв, команду, iдеї - але не мали системи.",
        "Я не будую масивнi IT-системи за сотнi тисяч. Я сiдаю з власником бiзнесу, слухаю що болить, i крок за кроком допомагаю впорядкувати.",
        "Працюю модульно - як з конструктором. Пiдбираю те, що дiйсно потрiбно."
      ],
      founder: { name: "Patrycja Duk", role: "Засновниця, nexus.dev", bio: "Бiзнес-стратег, дизайнер систем i процесiв." },
      values_title: "Мої принципи",
      values: [
        { title: "Спочатку зрозумiти, потiм дiяти", desc: "Не пропоную рiшень, поки не зрозумiю проблему." },
        { title: "Простота понад складнiсть", desc: "Найкращi системи - тi, якими люди дiйсно користуються." },
        { title: "Результат, а не звiт", desc: "Оцiнюю себе за результатами клiєнта." },
        { title: "Модульнiсть", desc: "Клiєнт платить за те, що потребує." },
        { title: "По-людськи", desc: "Говорю нормальною мовою. Якщо щось не має сенсу - скажу прямо." }
      ]
    }
  },
  contact: {
    pl: {
      h2: "Wyceń swój projekt — wypełnij brief",
      intro: "Wypełnij krótki brief, a przygotujemy dla Ciebie indywidualną wycenę. Im więcej napiszesz, tym dokładniejszą propozycję dostaniesz.",
      steps_title: "Co się stanie po wysłaniu briefu:",
      steps: ["Dostaniesz potwierdzenie na maila w ciągu 5 minut.", "W ciągu 24h odezwę się z indywidualną wyceną.", "Ustalimy szczegóły — przez mail, video lub telefon.", "Dostaniesz propozycję — bez niespodzianek."],
      form: {
        header: "📋 Brief projektowy",
        header_desc: "Im więcej wypełnisz, tym dokładniejszą wycenę otrzymasz.",
        section_contact: "👤 Dane kontaktowe",
        section_business: "🏢 O Twojej firmie",
        section_needs: "🎯 Czego potrzebujesz?",
        section_details: "💬 Szczegóły",
        name: "Imię i nazwisko *", email: "Email *", company: "Nazwa firmy", phone: "Telefon",
        industry: "Branża",
        industry_options: ["Wybierz branżę...", "IT / Software", "Marketing / Agencja", "Usługi lokalne", "E-commerce", "Consulting", "Freelance", "Gastronomia / HoReCa", "Zdrowie / Uroda", "Budownictwo / Remonty", "Inna"],
        team_size: "Wielkość zespołu",
        team_size_options: ["Wybierz...", "1 osoba (freelancer)", "2-5 osób", "6-15 osób", "16-50 osób", "powyżej 50 osób"],
        website: "Adres obecnej strony (jeśli masz)",
        services_label: "Zaznacz, co Cię interesuje (możesz wybrać kilka):",
        services_checkboxes: ["Strategia oferty", "Proces sprzedaży", "Proces obsługi", "Strona WWW / Landing", "Automatyzacje / AI", "Dashboard / Liczby", "Kampanie reklamowe", "Social media", "Chatbot AI", "Nie wiem — potrzebuję diagnozy"],
        budget: "Orientacyjny budżet",
        budget_options: ["Wybierz zakres...", "do 1 000 zł", "1 000 - 3 000 zł", "3 000 - 5 000 zł", "5 000 - 10 000 zł", "powyżej 10 000 zł"],
        timeline: "Kiedy chcesz wystartować?",
        timeline_options: ["Wybierz...", "Jak najszybciej", "W ciągu 2 tygodni", "W ciągu miesiąca", "Za 1-3 miesiące", "Jeszcze nie wiem"],
        message: "Opisz krótko swoją sytuację — co Cię boli, czego szukasz? *",
        source: "Skąd o nas wiesz?",
        source_options: ["Wybierz...", "Google", "Social media", "Polecenie", "Inne"],
        submit: "Wyślij brief i otrzymaj wycenę", success: "Dziękuję! Odezwę się w ciągu 24h z wyceną."
      },
      alt_cta: "Wolisz po prostu napisać?", alt_desc: "Wyślij maila na nextlevelaipoland@gmail.com z krótkim opisem sytuacji.",
      info: { email: "nextlevelaipoland@gmail.com", location: "Zdalnie, cała Polska i nie tylko", response: "Czas odpowiedzi: do 24h" }
    },
    en: {
      h2: "Get a Quote — Fill Out the Brief",
      intro: "Fill out a short brief and we'll prepare a custom quote for you. The more you write, the more accurate the proposal.",
      steps_title: "What happens after you submit the brief:",
      steps: ["You'll get a confirmation email within 5 minutes.", "I'll reach out within 24h with a custom quote.", "We'll discuss details via email, video or phone.", "You'll get a proposal - no surprises."],
      form: {
        header: "📋 Project Brief",
        header_desc: "The more you fill out, the more accurate your quote will be.",
        section_contact: "👤 Contact Info",
        section_business: "🏢 About Your Business",
        section_needs: "🎯 What Do You Need?",
        section_details: "💬 Details",
        name: "Full Name *", email: "Email *", company: "Company Name", phone: "Phone",
        industry: "Industry",
        industry_options: ["Select industry...", "IT / Software", "Marketing / Agency", "Local Services", "E-commerce", "Consulting", "Freelance", "Gastro / HoReCa", "Health / Beauty", "Construction", "Other"],
        team_size: "Team Size",
        team_size_options: ["Select...", "1 person (freelancer)", "2-5 people", "6-15 people", "16-50 people", "over 50 people"],
        website: "Current website URL (if any)",
        services_label: "Select what interests you (multiple):",
        services_checkboxes: ["Offer Strategy", "Sales Process", "Delivery Process", "Website / Landing", "Automations / AI", "Dashboard / Numbers", "Ad Campaigns", "Social Media", "AI Chatbot", "I don't know - need a diagnosis"],
        budget: "Approximate Budget",
        budget_options: ["Select range...", "up to 250 EUR", "250-750 EUR", "750-1250 EUR", "1250-2500 EUR", "over 2500 EUR"],
        timeline: "When do you want to start?",
        timeline_options: ["Select...", "ASAP", "Within 2 weeks", "Within a month", "In 1-3 months", "Not sure yet"],
        message: "Briefly describe your situation — what hurts, what are you looking for? *",
        source: "How did you find us?",
        source_options: ["Select...", "Google", "Social media", "Referral", "Other"],
        submit: "Send Brief & Get a Quote", success: "Thank you! I'll get back to you within 24h with a quote."
      },
      alt_cta: "Prefer to just write?", alt_desc: "Send an email to nextlevelaipoland@gmail.com with a brief description.",
      info: { email: "nextlevelaipoland@gmail.com", location: "Remote, worldwide", response: "Response time: under 24h" }
    },
    ua: {
      h2: "Оцiнiть свiй проєкт — заповнiть бриф",
      intro: "Заповнiть короткий бриф, i ми пiдготуємо для вас iндивiдуальну оцiнку. Чим бiльше напишете, тим точнiшу пропозицiю отримаєте.",
      steps_title: "Що станеться пiсля вiдправки:",
      steps: ["Отримаєте пiдтвердження на email протягом 5 хвилин.", "Протягом 24 годин зв'яжуся з iндивiдуальною оцiнкою.", "Обговоримо деталi — email, вiдео або телефон.", "Отримаєте пропозицiю — без сюрпризiв."],
      form: {
        header: "📋 Проєктний бриф",
        header_desc: "Чим бiльше заповните, тим точнiшу оцiнку отримаєте.",
        section_contact: "👤 Контактнi данi",
        section_business: "🏢 Про ваш бiзнес",
        section_needs: "🎯 Що вам потрiбно?",
        section_details: "💬 Деталi",
        name: "Повне iм'я *", email: "Email *", company: "Назва компанiї", phone: "Телефон",
        industry: "Галузь",
        industry_options: ["Оберiть галузь...", "IT / Software", "Маркетинг / Агенцiя", "Локальнi послуги", "E-commerce", "Консалтинг", "Фрiланс", "Гастро / HoReCa", "Здоров'я / Краса", "Будiвництво", "Iнше"],
        team_size: "Розмiр команди",
        team_size_options: ["Оберiть...", "1 особа (фрiлансер)", "2-5 осiб", "6-15 осiб", "16-50 осiб", "понад 50 осiб"],
        website: "Адреса поточного сайту (якщо є)",
        services_label: "Оберiть, що вас цiкавить (декiлька):",
        services_checkboxes: ["Стратегiя пропозицiї", "Процес продажiв", "Процес обслуговування", "Сайт / Лендiнг", "Автоматизацiя / AI", "Дашборд / Цифри", "Рекламнi кампанiї", "Social media", "AI Чат-бот", "Не знаю — потрiбна дiагностика"],
        budget: "Орiєнтовний бюджет",
        budget_options: ["Оберiть дiапазон...", "до 1 000 zl", "1 000 - 3 000 zł", "3 000 - 5 000 zł", "5 000 - 10 000 zł", "понад 10 000 zl"],
        timeline: "Коли хочете розпочати?",
        timeline_options: ["Оберiть...", "Якнайшвидше", "Протягом 2 тижнiв", "Протягом мiсяця", "За 1-3 мiсяцi", "Ще не знаю"],
        message: "Коротко опишiть свою ситуацiю — що болить, чого шукаєте? *",
        source: "Як ви нас знайшли?",
        source_options: ["Оберiть...", "Google", "Social media", "Рекомендацiя", "Iнше"],
        submit: "Надiслати бриф i отримати оцiнку", success: "Дякую! Зв'яжуся протягом 24 годин з оцiнкою."
      },
      alt_cta: "Волiєте просто написати?", alt_desc: "Надiшлiть листа на nextlevelaipoland@gmail.com з коротким описом ситуацiї.",
      info: { email: "nextlevelaipoland@gmail.com", location: "Вiддалено, весь свiт", response: "Час вiдповiдi: до 24 год" }
    }
  },

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
  },
  footerCta: {
    pl: { h2: "Jeden brief może zmienić to, jak prowadzisz firmę.", subtitle: "Opisz swoją sytuację, a ja powiem Ci, co bym z tym zrobiła. Zero zobowiązań.", cta: "Wyceń swój brief" },
    en: { h2: "One brief can change how you run your business.", subtitle: "Describe your situation and I'll tell you what I'd do about it. Zero obligations.", cta: "Get a Free Quote" },
    ua: { h2: "Один бриф може змiнити те, як ви ведете бiзнес.", subtitle: "Опишiть свою ситуацiю - я скажу, що б зробила. Жодних зобов'язань.", cta: "Отримати безкоштовну оцiнку" }
  },
  footer: {
    pl: { copyright: "2026 nexus.dev - Wszystkie prawa zastrzeżone.", links: { privacy: "Polityka prywatności", terms: "Regulamin" } },
    en: { copyright: "2026 nexus.dev - All rights reserved.", links: { privacy: "Privacy Policy", terms: "Terms & Conditions" } },
    ua: { copyright: "2026 nexus.dev - Усi права захищенi.", links: { privacy: "Полiтика конфiденцiйностi", terms: "Умови використання" } },
    tagline: {
      pl: "Zamieniamy chaos w system, który zarabia.",
      en: "Turning chaos into a system that earns.",
      ua: "Перетворюємо хаос на систему, яка заробляє."
    }
  },
  leadMagnet: {
    pl: {
      badge: "Darmowy zasób",
      h2: "Pobierz Checklistę: 5 Kroków do Automatyzacji Twojej Firmy",
      desc: "Dowiedz się, od czego zacząć wdrażanie AI i automatyzacji, aby odzyskać nawet 15 godzin tygodniowo. Konkretne narzędzia i procesy.",
      cta: "Odbierz checklistę",
      success: "Dziękujemy! Checklista została wysłana na Twój e-mail."
    },
    en: {
      badge: "Free Resource",
      h2: "Download Checklist: 5 Steps to Automate Your Business",
      desc: "Learn where to start with AI and automation to reclaim up to 15 hours per week. Concrete tools and processes.",
      cta: "Get the checklist",
      success: "Thank you! The checklist has been sent to your email."
    },
    ua: {
      badge: "Безкоштовний ресурс",
      h2: "Завантажте чек-лист: 5 крокiв до автоматизацiї вашого бiзнесу",
      desc: "Дiзнайтеся, з чого почати впровадження AI та автоматизацiї, щоб повернути до 15 годин на тиждень.",
      cta: "Отримати чек-лист",
      success: "Дякуємо! Чек-лист надіслано на вашу електронну пошту."
    }
  },
  portfolioPage: {
    pl: { badge: "Nasze Realizacje", h1: "Od Chaosu do Systemu", subtitle: "Poniżej znajdziesz wybrane projekty, w których wdrożyliśmy rozwiązania oszczędzające czas i zwiększające zyski naszych klientów." },
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
            { val: "Spokój", label: "Dla właściciela" }
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
            { val: "Peace", label: "For the owner" }
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
        challenge: "Власник втрачав 4 год на день на ручне введення замовлень i перевiрку залишкiв.",
        solution: "Впровадження центрального дашборду, що iнтегрує магазин iз складом.",
        result: {
          perc: "+35%",
          desc: "Рiст ефективностi",
          stats: [
            { val: "20 год", label: "Економiя / тиждень" },
            { val: "Zero", label: "Помилок у вiдправках" },
            { val: "24/7", label: "Склади наживо" }
          ]
        }
      },
      {
        id: "realestate-ai",
        category: "Нерухомiсть / Web Design",
        title: "Портал для агентства нерухомостi премiум-класу",
        img: "img/case-realestate.png",
        challenge: "Старий сайт не вiдповiдав розкiшним пропозицiям. Складнi форми вiд лякували клiєнтiв.",
        solution: "Проєкт сайту з акцентом на UX та автоматичну квалiфiкацiю лiдiв.",
        result: {
          perc: "+150%",
          desc: "Бiльше лiдiв",
          stats: [
            { val: "2.4s", label: "Час завантаження" },
            { val: "+40%", label: "Мобiльна конверсiя" },
            { val: "Gold", label: "UX Стандарт" }
          ]
        }
      },
      {
        id: "ai-assistant",
        category: "AI / Обслуговування клiєнтiв",
        title: "AI Асистент з продажiв для сервiсного бiзнесу",
        img: "img/case-ai.png",
        challenge: "Команда не встигала вiдповiдати на запити, втрачаючи 30% угод.",
        solution: "Впровадження AI чат-бота, який квалiфiкує клiєнтiв i записує їх у календар.",
        result: {
          perc: "-80%",
          desc: "Менше ручної роботи",
          stats: [
            { val: "100%", label: "Вiдповiдi 24/7" },
            { val: "+25%", label: "Бiльше зустрiчей" },
            { val: "AI", label: "Автоматизацiя" }
          ]
        }
      },
      {
        id: "strategy-scale",
        category: "Стратегiя / Масштабування",
        title: "Наведення ладу в процесах маркетингової агенцiї",
        img: "img/case-strategy.png",
        challenge: "Компанiя росла, але хаос з'їдав маржу.",
        solution: "Розробка карти процесiв та автоматизацiя звiтностi KPI.",
        result: {
          perc: "+45%",
          desc: "Рiст маржi",
          stats: [
            { val: "30 днiв", label: "Впровадження" },
            { val: "100%", label: "Чiткiсть витрат" },
            { val: "Спокiй", label: "Для власника" }
          ]
        }
      }
    ]
  }
};

