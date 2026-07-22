/* =====================================================
   Gabriel Guimarães — Site interactions + i18n
===================================================== */

(() => {
  /* ---------------------------------------------------
     1. Translations (PT-BR / EN)
  --------------------------------------------------- */
  const I18N = {
    en: {
      'page.title': 'Gabriel Guimarães · iOS Engineer · 2× WWDC Scholar',
      'page.description': 'iOS Engineer with 5+ years building and scaling native Apple applications. Specialist in Swift, SwiftUI, MVVM, and modular architecture. 2× Apple WWDC Scholar.',

      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.videos': 'Videos',
      'nav.blog': 'Blog',
      'nav.hire': 'Hire me',

      'hero.badge.available': 'Available for contract work',
      'hero.badge.location': '🇧🇷 Brasília · Remote worldwide',
      'hero.title.greet': "Hi, I'm",
      'hero.title.name': 'Gabriel',
      'hero.title.dot': '.',
      'hero.title.build': 'I build',
      'hero.title.apps': 'iOS apps',
      'hero.title.that': 'that',
      'hero.title.scale': 'scale',
      'hero.title.dot2': '.',
      'hero.sub': "iOS Engineer · 2× <strong>Apple WWDC Scholar</strong> · Swift &amp; SwiftUI specialist. I've shipped native iOS features for apps used by <strong>100K+ daily users</strong> on the App Store, from greenfield SwiftUI builds to modularised SPM architectures.",
      'hero.cta.primary': "Let's work together",
      'hero.cta.github': 'GitHub',
      'hero.cta.linkedin': 'LinkedIn',
      'hero.stat.years': 'years building<br/>native iOS',
      'hero.stat.wwdc': 'Apple WWDC<br/>Scholar',
      'hero.stat.users': 'daily users on<br/>an app I shipped',
      'hero.stat.repos': 'public repos &amp;<br/>open-source work',
      'hero.scroll': 'Scroll',

      'strip.label': 'Daily driver stack',

      'about.eyebrow': 'About',
      'about.title': 'An iOS engineer who ships — and ships <em>well</em>.',
      'about.p1': "I'm a native iOS developer from Brasília, Brazil, with <strong>5+ years of experience</strong> building and scaling Apple-platform applications used by hundreds of thousands of people every day. I specialise in <strong>Swift</strong>, <strong>SwiftUI</strong>, and modern architecture patterns like MVVM, Clean Architecture and modularisation through Swift Package Manager.",
      'about.p2': "I work fluently across iPhone, iPad, watchOS and tvOS. I've taken products from a blank Xcode project to the App Store in 1.5-week sprints, and I've also rescued legacy Objective-C codebases. I care a lot about clean code, accessibility, performance, and giving every user a great experience.",
      'about.p3': 'I was awarded an <strong>Apple WWDC Scholarship</strong> in both 2020 and 2021, and my work on the Poupatempo app (a public-services platform for the State of São Paulo) was recognised in the Public Sector category at the <strong>Agilidade Brasil 2024 Award</strong>.',

      'experience.eyebrow': 'Experience',
      'experience.title': "Where I've been building.",
      'exp1.role': 'iOS Engineer',
      'exp1.company': '@ G&P / Prodesp',
      'exp1.meta': 'Remote · Feb 2022 – Aug 2025',
      'exp1.b1': 'Launched a native iOS application from scratch with <strong>SwiftUI</strong>, organised into <strong>Swift Package Manager</strong> modules for reusable components and clean separation.',
      'exp1.b2': 'Owned features end-to-end in cross-functional Scrum teams — from spec to App Store release, shipped in <strong>1.5-week sprints</strong>.',
      'exp1.b3': 'Designed reusable networking layers and frameworks, reducing code duplication across projects.',
      'exp1.b4': 'Maintained and modernised existing iOS applications built with <strong>UIKit and Objective-C</strong>.',
      'exp1.b5': 'Contributed to a greenfield SwiftUI + MVVM app serving <strong>100K+ daily active users</strong> across Detran-SP and Poupatempo — government digital services used by millions of Brazilians.',
      'exp2.role': 'iOS Engineer',
      'exp2.company': '@ Apple Developer Academy',
      'exp2.meta': 'Brasília, Brazil · Jan 2019 – Jan 2021',
      'exp2.b1': "Completed Apple's <strong>2-year intensive program</strong> focused on iOS, UX and product thinking.",
      'exp2.b2': "Developed and published <strong>6 applications</strong> on the App Store across iPhone, iPad, watchOS and tvOS.",
      'exp2.b3': 'Applied agile methodologies, version control and architectural patterns in multidisciplinary teams.',
      'exp2.b4': 'Pair-programmed and rapid-prototyped new product ideas to accelerate iteration cycles.',

      'recognition.eyebrow': 'Recognition',
      'recognition.title': "A few things I'm proud of.",
      'rec1.title': 'Agilidade Brasil 2024 — Public Sector',
      'rec1.body': 'Recognised for the <strong>Digital Vehicle Transfer Service (TDV)</strong> shipped inside the Poupatempo app — improving digital access to public services for millions of Brazilians.',
      'rec2.title': 'Apple WWDC Scholar · 2020 & 2021',
      'rec2.body': 'Two-time winner of the <strong>Apple WWDC Scholarship</strong> — selected from thousands of applicants worldwide to attend the Worldwide Developers Conference.',
      'rec3.title': '6 Apps shipped to the App Store',
      'rec3.body': "From iPhone to iPad, watchOS and tvOS — I love the variety of Apple's platforms and have shipped production apps to each of them.",
      'rec4.title': 'Continuous teacher & writer',
      'rec4.body': "I started writing iOS tutorials at the beginning of my journey — partly to teach, mostly to learn. That habit became a blog where I break down Swift, SwiftUI, and software architecture one post at a time.",

      'projects.eyebrow': 'Featured project',
      'projects.title': "The thing I've been pouring the most love into.",
      'jobfinder.tag': 'Swift · SwiftUI · SPM · MVVM',
      'jobfinder.name': 'JobFinder',
      'jobfinder.desc1': 'A modular iOS app for finding and tracking job opportunities — built with <strong>SwiftUI</strong>, organised as a set of independent <strong>Swift Package Manager</strong> modules (<code>ReduxCore</code>, <code>NetworkLayer</code>, <code>VacancyView</code>, <code>Components</code>, <code>MarketPulse</code>) and shipped with a full CI/CD pipeline (Fastlane + Danger + SwiftLint).',
      'jobfinder.desc2': 'The architecture is designed to be modular-by-default: every feature lives in its own package with clear boundaries, reusable UI components and a networking layer that can be tested in isolation. It is the codebase I use to demonstrate how I like to structure production iOS apps.',
      'jobfinder.meta.arch': 'Architecture',
      'jobfinder.meta.arch.v': 'Modular SPM packages',
      'jobfinder.meta.ui': 'UI',
      'jobfinder.meta.ui.v': 'SwiftUI',
      'jobfinder.meta.conc': 'Concurrency',
      'jobfinder.meta.conc.v': 'async/await, Combine',
      'jobfinder.meta.cicd': 'CI/CD',
      'jobfinder.meta.cicd.v': 'Fastlane, Danger, SwiftLint, GitHub Actions',
      'jobfinder.meta.test': 'Testing',
      'jobfinder.meta.test.v': 'Unit tests per module',
      'jobfinder.cta': 'View on GitHub',

      'videos.eyebrow': 'Videos & talks',
      'videos.title': 'Watch me build & explain.',
      'videos.lede': "From WWDC Scholarship submissions to personal projects — short videos where I break down what I learned and what I built.",
      'video1.pill': 'WWDC 2021',
      'video1.title': 'WWDC 2021 Scholarship submission',
      'video1.desc': "My Swift Student Challenge entry for Apple's 2021 Worldwide Developers Conference — a small SwiftUI playground built around a playful idea.",
      'video2.pill': 'WWDC 2020',
      'video2.title': 'WWDC 2020 Scholarship submission',
      'video2.desc': "My very first WWDC Scholarship submission — what got me into Apple's developer community and shaped how I approach playful, polished UI.",
      'video3.pill': 'Final project',
      'video3.title': 'Endia — Final college project (TCC)',
      'video3.desc': 'Endia is the project I built as the final assignment for my Computer Science degree — a problem I cared about, end-to-end, in production-grade Swift.',
      'video4.pill': 'Personal project',
      'video4.title': 'Personal project walkthrough',
      'video4.desc': "A side project I've been building for fun — full of the patterns and tools I reach for in real client work.",
      'video5.pill': 'HiFuture · Project #4',
      'video5.title': 'HiFuture — 4th Apple Developer Academy project',
      'video5.desc': 'HiFuture was my 4th project during the Apple Developer Academy — a glimpse of how I think about product, UX and Swift under tight timelines.',
      'videos.seeall': 'Visit my YouTube channel',

      'writing.eyebrow': 'Writing',
      'writing.title': "Things I've written down.",
      'writing.lede': "I publish tutorials and notes on Swift, SwiftUI, architecture and the iOS developer life. If you've ever struggled to ship something on Apple's platforms, there's probably a post for you.",
      'blog1.title': 'Swift Learning Now',
      'blog1.desc': 'Tutorials on Swift, SwiftUI and iOS development — written for developers who want to ship great apps and deeply understand the tools they use.',
      'blog1.cta': 'Visit the blog',
      'blog2.title': 'Gitutorial',
      'blog2.desc': 'A hands-on, bite-sized course that takes you from git zero to confident — branches, rebases, conflicts and the workflows I actually use every day.',
      'blog2.cta': 'Start the tutorial',

      'skills.eyebrow': 'Toolbelt',
      'skills.title': 'What I reach for.',
      'skills.lang': 'Languages',
      'skills.frameworks': 'Frameworks & SDKs',
      'skills.platforms': 'Platforms',
      'skills.architecture': 'Architecture',
      'skills.concurrency': 'Concurrency',
      'skills.tooling': 'Tooling',
      'skills.workflow': 'Way of working',

      'education.eyebrow': 'Education & languages',
      'education.title': 'The boring-but-important stuff.',
      'education.p1': "🎓 <strong>Bachelor's Degree in Computer Science</strong> — Catholic University of Brasília (UCB), 2018–2021.<br/>Relevant coursework: C, Java, Python, data structures, algorithm analysis, concurrent and distributed programming, software engineering, web programming.",
      'education.p2': '🏅 <strong>Certificate in English</strong> — NZLC (New Zealand Language Centres), Upper-Intermediate (B2).',
      'education.languages': 'Languages:',
      'education.languages.list': 'Portuguese (native), English (B2), Spanish (basic speaking, intermediate listening, basic writing)',

      'contact.eyebrow': 'Get in touch',
      'contact.title': 'Got an iOS project, an architecture question, or a team that needs a senior engineer?',
      'contact.lede': "I'm currently taking on new contract and consulting work — greenfield apps, SwiftUI migrations, modularising legacy codebases, code reviews and mentoring. Let's have a chat.",
      'contact.email': '0609guimaraes@gmail.com',
      'contact.linkedin': 'Connect on LinkedIn',
      'contact.location': 'Brasília, Brazil · remote-friendly worldwide',
      'contact.replies': 'Replies within 24h, business days',

      'footer.brand': 'Gabriel Gonçalves Guimarães',
      'footer.tagline': 'iOS Engineer · 2× WWDC Scholar · Brasília, Brazil',
      'footer.blog': 'Blog',
      'footer.email': 'Email',
      'footer.copyright': '© <span id="year"></span> Gabriel Guimarães · Built with care · Designed to convert.',
    },

    pt: {
      'page.title': 'Gabriel Guimarães · Engenheiro iOS · 2× WWDC Scholar',
      'page.description': 'Engenheiro iOS com 5+ anos construindo e escalando aplicativos nativos Apple. Especialista em Swift, SwiftUI, MVVM e arquitetura modular. 2× Apple WWDC Scholar.',

      'nav.about': 'Sobre',
      'nav.experience': 'Experiência',
      'nav.projects': 'Projetos',
      'nav.videos': 'Vídeos',
      'nav.blog': 'Blog',
      'nav.hire': 'Trabalhe comigo',

      'hero.badge.available': 'Disponível para contrato',
      'hero.badge.location': '🇧🇷 Brasília · Remoto no mundo todo',
      'hero.title.greet': 'Olá, eu sou',
      'hero.title.name': 'Gabriel',
      'hero.title.dot': '.',
      'hero.title.build': 'Eu construo',
      'hero.title.apps': 'apps iOS',
      'hero.title.that': 'que',
      'hero.title.scale': 'escalam',
      'hero.title.dot2': '.',
      'hero.sub': 'Engenheiro iOS · 2× <strong>Apple WWDC Scholar</strong> · especialista em Swift &amp; SwiftUI. Já entreguei funcionalidades nativas em apps que chegaram a <strong>mais de 100 mil usuários diários</strong> na App Store — de projetos greenfield em SwiftUI a arquiteturas modulares com SPM.',
      'hero.cta.primary': 'Vamos trabalhar juntos',
      'hero.cta.github': 'GitHub',
      'hero.cta.linkedin': 'LinkedIn',
      'hero.stat.years': 'anos construindo<br/>iOS nativo',
      'hero.stat.wwdc': 'Apple WWDC<br/>Scholar',
      'hero.stat.users': 'usuários diários<br/>em um app que entreguei',
      'hero.stat.repos': 'repositórios públicos<br/>&amp; open source',
      'hero.scroll': 'Role para baixo',

      'strip.label': 'Stack do dia a dia',

      'about.eyebrow': 'Sobre',
      'about.title': 'Um engenheiro iOS que entrega — e entrega <em>bem</em>.',
      'about.p1': 'Sou desenvolvedor iOS nativo de Brasília, com <strong>mais de 5 anos de experiência</strong> construindo e escalando aplicativos para o ecossistema Apple, usados por centenas de milhares de pessoas todos os dias. Sou especialista em <strong>Swift</strong>, <strong>SwiftUI</strong> e em padrões modernos de arquitetura como MVVM, Clean Architecture e modularização com Swift Package Manager.',
      'about.p2': 'Trabalho bem em iPhone, iPad, watchOS e tvOS. Já tirei produtos do zero até a App Store em sprints de 1,5 semana, e também resgatei codebases legados em Objective-C. Me importo muito com código limpo, acessibilidade, performance e em dar uma boa experiência para o usuário final.',
      'about.p3': 'Fui premiado com uma <strong>bolsa da Apple WWDC</strong> em 2020 e 2021, e meu trabalho no app Poupatempo (plataforma de serviços públicos do Estado de São Paulo) foi reconhecido na categoria Setor Público no <strong>Prêmio Agilidade Brasil 2024</strong>.',

      'experience.eyebrow': 'Experiência',
      'experience.title': 'Onde eu tenho construído.',
      'exp1.role': 'Engenheiro iOS',
      'exp1.company': '@ G&P / Prodesp',
      'exp1.meta': 'Remoto · fev/2022 – ago/2025',
      'exp1.b1': 'Lancei um aplicativo iOS nativo do zero com <strong>SwiftUI</strong>, organizado em módulos de <strong>Swift Package Manager</strong> para componentes reutilizáveis e separação clara de responsabilidades.',
      'exp1.b2': 'Tive ownership de ponta a ponta em times Scrum multifuncionais — da especificação até a publicação na App Store, com entregas em <strong>sprints de 1,5 semana</strong>.',
      'exp1.b3': 'Desenhei camadas de rede e frameworks reutilizáveis, reduzindo duplicação de código entre projetos.',
      'exp1.b4': 'Mantive e modernizei aplicativos iOS legados construídos com <strong>UIKit e Objective-C</strong>.',
      'exp1.b5': 'Contribuí em um app greenfield SwiftUI + MVVM que atende <strong>mais de 100 mil usuários ativos diários</strong> entre Detran-SP e Poupatempo — serviços públicos digitais usados por milhões de brasileiros.',
      'exp2.role': 'Engenheiro iOS',
      'exp2.company': '@ Apple Developer Academy',
      'exp2.meta': 'Brasília, Brasil · jan/2019 – jan/2021',
      'exp2.b1': 'Concluí o <strong>programa intensivo de 2 anos</strong> da Apple, focado em iOS, UX e product thinking.',
      'exp2.b2': 'Desenvolvi e publiquei <strong>6 aplicativos</strong> na App Store, cobrindo iPhone, iPad, watchOS e tvOS.',
      'exp2.b3': 'Apliquei metodologias ágeis, controle de versão e padrões de arquitetura em times multidisciplinares.',
      'exp2.b4': 'Trabalhei em pair programming e prototipação rápida para acelerar ciclos de iteração.',

      'recognition.eyebrow': 'Reconhecimento',
      'recognition.title': 'Coisas que me orgulham.',
      'rec1.title': 'Agilidade Brasil 2024 — Setor Público',
      'rec1.body': 'Reconhecido pelo <strong>Serviço Digital de Transferência de Veículos (TDV)</strong> entregue dentro do app Poupatempo — ampliando o acesso digital a serviços públicos para milhões de brasileiros.',
      'rec2.title': 'Apple WWDC Scholar · 2020 & 2021',
      'rec2.body': 'Duas vezes premiado com a <strong>bolsa da Apple WWDC</strong> — selecionado entre milhares de candidatos do mundo todo para participar da Worldwide Developers Conference.',
      'rec3.title': '6 apps publicados na App Store',
      'rec3.body': 'De iPhone a iPad, watchOS e tvOS — curto a variedade das plataformas Apple e já publiquei apps de produção em cada uma delas.',
      'rec4.title': 'Professor e escritor em construção',
      'rec4.body': 'Comecei a escrever tutoriais de iOS no começo da minha jornada — em parte pra ensinar, mas principalmente pra aprender. Esse hábito virou um blog onde eu destrincho Swift, SwiftUI e arquitetura de software, um post de cada vez.',

      'projects.eyebrow': 'Projeto em destaque',
      'projects.title': 'A coisa na qual eu tenho botado mais carinho.',
      'jobfinder.tag': 'Swift · SwiftUI · SPM · MVVM',
      'jobfinder.name': 'JobFinder',
      'jobfinder.desc1': 'Um app iOS modular pra encontrar e acompanhar vagas de emprego — feito com <strong>SwiftUI</strong>, organizado em módulos independentes de <strong>Swift Package Manager</strong> (<code>ReduxCore</code>, <code>NetworkLayer</code>, <code>VacancyView</code>, <code>Components</code>, <code>MarketPulse</code>) e com pipeline completo de CI/CD (Fastlane + Danger + SwiftLint).',
      'jobfinder.desc2': 'A arquitetura foi pensada pra ser modular por padrão: cada feature mora em seu próprio pacote, com fronteiras claras, componentes de UI reutilizáveis e uma camada de rede que pode ser testada de forma isolada. É o codebase que eu uso pra mostrar como gosto de estruturar apps iOS de produção.',
      'jobfinder.meta.arch': 'Arquitetura',
      'jobfinder.meta.arch.v': 'Módulos SPM',
      'jobfinder.meta.ui': 'UI',
      'jobfinder.meta.ui.v': 'SwiftUI',
      'jobfinder.meta.conc': 'Concorrência',
      'jobfinder.meta.conc.v': 'async/await, Combine',
      'jobfinder.meta.cicd': 'CI/CD',
      'jobfinder.meta.cicd.v': 'Fastlane, Danger, SwiftLint, GitHub Actions',
      'jobfinder.meta.test': 'Testes',
      'jobfinder.meta.test.v': 'Unit tests por módulo',
      'jobfinder.cta': 'Ver no GitHub',

      'videos.eyebrow': 'Vídeos & talks',
      'videos.title': 'Me vê construindo & explicando.',
      'videos.lede': 'Das submissões pra WWDC Scholarship até projetos pessoais — vídeos curtos onde eu explico o que aprendi e o que construí.',
      'video1.pill': 'WWDC 2021',
      'video1.title': 'Submissão WWDC 2021 Scholarship',
      'video1.desc': 'Minha entrada no Swift Student Challenge da WWDC 2021 — um playground SwiftUI pequeno, em torno de uma ideia divertida.',
      'video2.pill': 'WWDC 2020',
      'video2.title': 'Submissão WWDC 2020 Scholarship',
      'video2.desc': 'Minha primeira submissão pra WWDC Scholarship — o que me colocou na comunidade dev da Apple e moldou como eu enxergo UI caprichada e divertida.',
      'video3.pill': 'TCC',
      'video3.title': 'Endia — TCC da faculdade',
      'video3.desc': 'Endia foi o projeto que construí como trabalho de conclusão da faculdade de Ciência da Computação — um problema do qual eu gostava, de ponta a ponta, em Swift de produção.',
      'video4.pill': 'Projeto pessoal',
      'video4.title': 'Walkthrough de projeto pessoal',
      'video4.desc': 'Um side project que venho construindo por diversão — cheio dos padrões e ferramentas que eu uso no trabalho real com clientes.',
      'video5.pill': 'HiFuture · Projeto #4',
      'video5.title': 'HiFuture — 4º projeto da Apple Developer Academy',
      'video5.desc': 'HiFuture foi meu 4º projeto na Apple Developer Academy — um vislumbre de como penso produto, UX e Swift sob prazos apertados.',
      'videos.seeall': 'Visite meu canal no YouTube',

      'writing.eyebrow': 'Escrita',
      'writing.title': 'Coisas que eu deixei escritas.',
      'writing.lede': 'Publiquei tutoriais e anotações sobre Swift, SwiftUI, arquitetura e a vida de dev iOS. Se você já travou tentando entregar algo nas plataformas da Apple, é bem capaz de ter um post pra você.',
      'blog1.title': 'Swift Learning Now',
      'blog1.desc': 'Tutoriais de Swift, SwiftUI e desenvolvimento iOS — escritos pra quem quer entregar apps incríveis e entender de verdade as ferramentas que usa.',
      'blog1.cta': 'Visitar o blog',
      'blog2.title': 'Gitutorial',
      'blog2.desc': 'Um curso curto e mão na massa que leva você do zero ao confiante em git — branches, rebase, conflitos e os workflows que eu uso de verdade no dia a dia.',
      'blog2.cta': 'Começar o tutorial',

      'skills.eyebrow': 'Caixa de ferramentas',
      'skills.title': 'O que eu pego da prateleira.',
      'skills.lang': 'Linguagens',
      'skills.frameworks': 'Frameworks & SDKs',
      'skills.platforms': 'Plataformas',
      'skills.architecture': 'Arquitetura',
      'skills.concurrency': 'Concorrência',
      'skills.tooling': 'Ferramentas',
      'skills.workflow': 'Como trabalho',

      'education.eyebrow': 'Formação & idiomas',
      'education.title': 'A parte chata mas importante.',
      'education.p1': '🎓 <strong>Bacharelado em Ciência da Computação</strong> — Universidade Católica de Brasília (UCB), 2018–2021.<br/>Disciplinas relevantes: C, Java, Python, estrutura de dados, análise de algoritmos, programação concorrente e distribuída, engenharia de software, programação web.',
      'education.p2': '🏅 <strong>Certificado em inglês</strong> — NZLC (New Zealand Language Centres), Upper-Intermediate (B2).',
      'education.languages': 'Idiomas:',
      'education.languages.list': 'português (nativo), inglês (B2), espanhol (conversação básica, compreensão intermediária, escrita básica)',

      'contact.eyebrow': 'Vamos conversar',
      'contact.title': 'Tem um projeto iOS, uma dúvida de arquitetura, ou um time que precisa de um engenheiro sênior?',
      'contact.lede': 'Estou aberto a novos trabalhos de consultoria e contrato — apps greenfield, migrações pra SwiftUI, modularização de codebases legados, code review e mentoria de time. Bora trocar uma ideia.',
      'contact.email': '0609guimaraes@gmail.com',
      'contact.linkedin': 'Conectar no LinkedIn',
      'contact.location': 'Brasília, Brasil · remoto para o mundo todo',
      'contact.replies': 'Resposta em até 24h, dias úteis',

      'footer.brand': 'Gabriel Gonçalves Guimarães',
      'footer.tagline': 'Engenheiro iOS · 2× WWDC Scholar · Brasília, Brasil',
      'footer.blog': 'Blog',
      'footer.email': 'E-mail',
      'footer.copyright': '© <span id="year"></span> Gabriel Guimarães · Feito com cuidado · Pensado pra converter.',
    },
  };

  const STORAGE_KEY = 'gg-lang';
  const SUPPORTED = ['en', 'pt'];

  const getStoredLang = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED.includes(stored)) return stored;
    } catch (_) { /* localStorage might be blocked */ }
    // fall back to browser language
    const browser = (navigator.language || 'en').toLowerCase();
    if (browser.startsWith('pt')) return 'pt';
    return 'en';
  };

  const setStoredLang = (lang) => {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
  };

  /* ---------------------------------------------------
     2. Apply translations to the DOM
  --------------------------------------------------- */
  let currentLang = getStoredLang();

  const t = (key) => {
    const dict = I18N[currentLang] || I18N.en;
    return (key in dict) ? dict[key] : (I18N.en[key] || key);
  };

  const applyTranslations = () => {
    // Plain text
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = t(key);
      if (value !== undefined && value !== null) el.textContent = value;
    });
    // HTML (supports <strong>, <em>, <br/>, <code>, etc.)
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      const value = t(key);
      if (value !== undefined && value !== null) el.innerHTML = value;
    });
    // Attribute translation: data-i18n-attr="attr|key"
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const spec = el.getAttribute('data-i18n-attr');
      if (!spec) return;
      const [attr, key] = spec.split('|');
      const value = t(key);
      if (attr && value) el.setAttribute(attr, value);
    });
    // <html lang>
    document.documentElement.setAttribute('lang', currentLang === 'pt' ? 'pt-BR' : 'en');

    // Update language switcher active state
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const isActive = btn.getAttribute('data-lang') === currentLang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  };

  const setLanguage = (lang) => {
    if (!SUPPORTED.includes(lang) || lang === currentLang) return;
    currentLang = lang;
    setStoredLang(lang);
    applyTranslations();
  };

  /* ---------------------------------------------------
     3. Boot — translations first, then UI
  --------------------------------------------------- */
  // Apply translations as early as possible so users don't see English flash on PT pages.
  applyTranslations();

  // Year in footer
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Language switcher
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang) setLanguage(lang);
    });
  });

  // Mobile nav
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        links.classList.remove('open');
      });
    });
  }

  // Scroll reveal
  const targets = document.querySelectorAll(
    '.section-title, .section-lede, .eyebrow, .timeline-card, .achievement, .video-card, .skill-group, .featured, .blog-card, .cta-card, .hero-text > *, .hero-stats, .visual-card'
  );
  targets.forEach((el) => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  targets.forEach((el) => io.observe(el));

  // Subtle nav background change on scroll
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (!nav) return;
    if (window.scrollY > 40) {
      nav.style.background = 'rgba(7, 7, 26, 0.85)';
    } else {
      nav.style.background = 'rgba(7, 7, 26, 0.55)';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Smooth scroll for hash links (with header offset)
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id && id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const top = target.getBoundingClientRect().top + window.scrollY - 90;
          window.scrollTo({ top, behavior: 'smooth' });
          // Close mobile nav if open
          if (links) links.classList.remove('open');
          if (toggle) toggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // Tilt effect on featured card
  const featured = document.querySelector('.featured-visual');
  if (featured && window.matchMedia('(min-width: 980px)').matches) {
    featured.addEventListener('mousemove', (e) => {
      const r = featured.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      featured.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
    });
    featured.addEventListener('mouseleave', () => {
      featured.style.transform = '';
    });
  }
})();
