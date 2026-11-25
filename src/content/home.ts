export const languages = ["pt", "en", "es"] as const;
export type Language = (typeof languages)[number];

export function isLanguage(value: string): value is Language {
  return languages.some((language) => language === value);
}

export const home = {
  "pt": {
    "metaTitle": "Yago Jesus — Product Manager",
    "metaDescription": "Portfólio de Yago Jesus, Product Manager. Cases de marketplace, checkout e apps na Ticket Sports, com decisões de produto e resultados medidos.",
    "skip": "Pular para o conteúdo",
    "navigation": "Navegação principal",
    "language": "Selecionar idioma",
    "casesLink": "Projetos",
    "aboutLink": "Sobre mim",
    "contactLink": "Contato",
    "contactEyebrow": "03 / CONTATO",
    "contactTitle": "Disponível para oportunidades em Produto",
    "contactText": "Busco posições de Product Manager ou Product Owner pleno, com interesse em marketplaces, pagamentos e produtos mobile.",
    "eyebrow": "PRODUCT MANAGER · PORTFÓLIO",
    "headline": [
      "Marketplaces.",
      "Apps.",
      "Pagamentos."
    ],
    "introduction": "Sou Yago Jesus, Product Manager com experiência em desenvolvimento C#/.NET. Na Ticket Sports, cuidei da compra de inscrições pelos atletas e das ferramentas que os organizadores usam para vender e operar eventos.",
    "primaryCta": "Conheça os projetos",
    "secondaryCta": "Sobre minha trajetória",
    "casesEyebrow": "01 / PROJETOS SELECIONADOS",
    "casesTitle": "Projetos na Ticket Sports",
    "casesIntro": "Na Ticket Sports, nossa principal métrica era o GMV, o valor bruto das inscrições vendidas. Eu priorizava problemas que impediam o atleta de comprar ou colocavam em risco os eventos que os organizadores vendiam pela plataforma.",
    "projects": [
      {
        "category": "PLATAFORMA · ESCALA",
        "title": "Ticket Sports → Ingresse",
        "subtitle": "Migração e São Silvestre",
        "description": "Priorizei as regras de inscrição e a venda para grupos na migração. A São Silvestre movimentou cerca de R$ 40 milhões em um dia na nova plataforma.",
        "color": "orange"
      },
      {
        "category": "OPERAÇÃO · EXPERIÊNCIA",
        "title": "App de Check-in",
        "subtitle": "Entrega de kits, mesmo sem internet",
        "description": "A retirada offline resolveu uma necessidade de um organizador que avaliava sair. Com a entrega, ele renovou e passou a abrir todos os eventos exclusivamente na Ticket Sports.",
        "color": "green"
      },
      {
        "category": "MOBILE · EVOLUÇÃO",
        "title": "App do Atleta",
        "subtitle": "Compra unificada e evolução da experiência",
        "description": "Reaproveitamos o checkout web para oferecer no app modalidades antes restritas ao site. Em quatro meses, o atleta passou a poder comprar essas inscrições também pelo aplicativo.",
        "color": "blue"
      },
      {
        "category": "WEB · EXPERIÊNCIA E DADOS",
        "title": "Evolução do site legado",
        "subtitle": "Experiência e jornada mensurável",
        "description": "Com a nova busca e os filtros, cresceu 12%, em termos relativos, a parcela de visitantes que explorava uma página de evento por mais de três minutos. A confirmação do pagamento era acompanhada à parte.",
        "color": "blue"
      },
      {
        "category": "DADOS · NEGÓCIO",
        "title": "Indicadores para áreas de negócio",
        "subtitle": "Google Data Studio · Atualização D-1",
        "description": "Comercial e Atendimento passaram a consultar o GMV por organizador até o dia anterior para identificar contas em queda, revisar faixas comerciais e decidir onde atuar.",
        "color": "green"
      }
    ],
    "casePreview": "Ver decisões e resultados",
    "aboutEyebrow": "02 / QUEM É O YAGO",
    "portraitAlt": "Yago Jesus sorrindo, usando óculos e camiseta preta, em um evento.",
    "aboutTitle": "Minha trajetória em Produto",
    "aboutText": "Comecei no atendimento e passei pelo desenvolvimento antes de assumir produtos na Ticket Sports. Trabalhar com atletas e organizadores me ajudou a entender onde uma decisão de compra no app afeta a operação no dia da prova.",
    "aboutNote": "Na priorização trimestral, eu discutia com a liderança o impacto para os organizadores, o GMV e o esforço de engenharia.",
    "backgroundLabel": "Experiência e formação",
    "background": [
      {
        "title": "Pagamentos e checkout",
        "detail": "Trabalhei com integrações de cartão e boleto. Analisei 282 tarefas de suporte a pagamentos e estimei um esforço equivalente a 5,2 meses de trabalho de uma pessoa."
      },
      {
        "title": "Desenvolvimento Full Stack · .NET/C#",
        "detail": "Experiência como desenvolvedor na Ticket Sports, conectada hoje à análise de viabilidade e à colaboração com engenharia em Produto."
      },
      {
        "title": "Pós-graduação · PUC-Campinas",
        "detail": "Arquitetura de Software, Ciência de Dados e Cibersegurança",
        "status": "Em andamento · conclusão prevista em 2027"
      }
    ],
    "footer": "Produto é conectar as partes.",
    "backToTop": "Voltar ao início"
  },
  "en": {
    "metaTitle": "Yago Jesus — Product Manager",
    "metaDescription": "Yago Jesus’s product portfolio. Marketplace, checkout and mobile app case studies from Ticket Sports, with product decisions and measured outcomes.",
    "skip": "Skip to content",
    "navigation": "Main navigation",
    "language": "Select language",
    "casesLink": "Projects",
    "aboutLink": "About",
    "contactLink": "Contact",
    "contactEyebrow": "03 / CONTACT",
    "contactTitle": "Open to product roles",
    "contactText": "I’m looking for mid-level Product Manager or Product Owner roles, particularly in marketplaces, payments and mobile products.",
    "eyebrow": "PRODUCT MANAGER · PORTFOLIO",
    "headline": [
      "Marketplaces.",
      "Mobile apps.",
      "Payments."
    ],
    "introduction": "I’m Yago Jesus, a Product Manager with a C#/.NET development background. At Ticket Sports, I worked on race registration for athletes and the tools organizers use to sell entries and run events.",
    "primaryCta": "Discover the projects",
    "secondaryCta": "About my journey",
    "casesEyebrow": "01 / SELECTED PROJECTS",
    "casesTitle": "Projects at Ticket Sports",
    "casesIntro": "At Ticket Sports, our main business metric was GMV, the gross value of registrations sold. I prioritized obstacles that prevented athletes from buying or put organizers’ event sales on the platform at risk.",
    "projects": [
      {
        "category": "PLATFORM · SCALE",
        "title": "Ticket Sports → Ingresse",
        "subtitle": "Migration and São Silvestre",
        "description": "I prioritized registration rules and group sales during the migration. The São Silvestre race processed roughly R$40 million in one day on the new platform.",
        "color": "orange"
      },
      {
        "category": "OPERATIONS · EXPERIENCE",
        "title": "Check-in App",
        "subtitle": "Kit pickup, even offline",
        "description": "Offline kit pickup met the needs of an organizer considering a switch. On delivery, the organizer renewed and agreed to open registration for every event exclusively on Ticket Sports.",
        "color": "green"
      },
      {
        "category": "MOBILE · EVOLUTION",
        "title": "Athlete App",
        "subtitle": "Unified purchases and an evolving experience",
        "description": "We reused web checkout to bring previously web-only event categories into the app. After a four-month release cycle, athletes could buy those registrations in the app as well.",
        "color": "blue"
      },
      {
        "category": "WEB · EXPERIENCE AND DATA",
        "title": "Improving the legacy website",
        "subtitle": "Experience and a measurable journey",
        "description": "Following changes to search and filters, the share of visitors spending over three minutes on an event page rose 12% relative to prior years. We tracked payment confirmation separately.",
        "color": "blue"
      },
      {
        "category": "DATA · BUSINESS",
        "title": "Business intelligence",
        "subtitle": "Google Data Studio · D-1 freshness",
        "description": "Sales and Customer Support used prior-day GMV by organizer to spot declining accounts, review commercial tiers and decide where to follow up.",
        "color": "green"
      }
    ],
    "casePreview": "See decisions and results",
    "aboutEyebrow": "02 / ABOUT YAGO",
    "portraitAlt": "Yago Jesus smiling, wearing glasses and a black shirt at an event.",
    "aboutTitle": "How I got into product",
    "aboutText": "I started in customer support, then moved into software development and product management at Ticket Sports. Working with athletes and organizers showed me how a decision in the purchase flow could affect operations on race day.",
    "aboutNote": "Each quarter, I worked with leadership to weigh the impact on organizers, GMV and engineering effort when setting priorities.",
    "backgroundLabel": "Experience and education",
    "background": [
      {
        "title": "Payments and checkout",
        "detail": "I worked on card and boleto payment integrations. I analyzed 282 payment support tasks and estimated the workload at 5.2 person-months."
      },
      {
        "title": "Full Stack development · .NET/C#",
        "detail": "Development experience at Ticket Sports, now informing feasibility discussions and collaboration with engineering in Product."
      },
      {
        "title": "Postgraduate specialization · PUC-Campinas",
        "detail": "Software Architecture, Data Science and Cybersecurity",
        "status": "In progress · expected completion in 2027"
      }
    ],
    "footer": "Product is about connecting the dots.",
    "backToTop": "Back to top"
  },
  "es": {
    "metaTitle": "Yago Jesus — Product Manager",
    "metaDescription": "Portafolio de Yago Jesus, Product Manager. Casos de marketplace, pagos y aplicaciones móviles en Ticket Sports, con decisiones y resultados medidos.",
    "skip": "Saltar al contenido",
    "navigation": "Navegación principal",
    "language": "Seleccionar idioma",
    "casesLink": "Proyectos",
    "aboutLink": "Sobre mí",
    "contactLink": "Contacto",
    "contactEyebrow": "03 / CONTACTO",
    "contactTitle": "Disponible para oportunidades en producto",
    "contactText": "Busco puestos de Product Manager o Product Owner de nivel intermedio, especialmente en marketplaces, pagos y productos móviles.",
    "eyebrow": "PRODUCT MANAGER · PORTAFOLIO",
    "headline": [
      "Marketplaces.",
      "Apps móviles.",
      "Pagos."
    ],
    "introduction": "Soy Yago Jesus, Product Manager con experiencia en desarrollo C#/.NET. En Ticket Sports trabajé en las inscripciones de los deportistas y en las herramientas que usan los organizadores para vender inscripciones y gestionar eventos.",
    "primaryCta": "Conoce los proyectos",
    "secondaryCta": "Sobre mi trayectoria",
    "casesEyebrow": "01 / PROYECTOS SELECCIONADOS",
    "casesTitle": "Proyectos en Ticket Sports",
    "casesIntro": "En Ticket Sports, nuestra principal métrica era el GMV, el valor bruto de las inscripciones vendidas. Priorizaba los problemas que impedían comprar a los deportistas o ponían en riesgo la venta de eventos de los organizadores en la plataforma.",
    "projects": [
      {
        "category": "PLATAFORMA · ESCALA",
        "title": "Ticket Sports → Ingresse",
        "subtitle": "Migración y São Silvestre",
        "description": "Prioricé las reglas de inscripción y la venta a grupos durante la migración. La carrera São Silvestre movió unos 40 millones de reales en un día en la nueva plataforma.",
        "color": "orange"
      },
      {
        "category": "OPERACIONES · EXPERIENCIA",
        "title": "App de Check-in",
        "subtitle": "Entrega de kits, incluso sin conexión",
        "description": "La recogida sin conexión resolvió una necesidad de un organizador que valoraba cambiar de plataforma. Tras la entrega, renovó y acordó abrir las inscripciones de todos sus eventos exclusivamente en Ticket Sports.",
        "color": "green"
      },
      {
        "category": "MOBILE · EVOLUCIÓN",
        "title": "App del Atleta",
        "subtitle": "Compra unificada y evolución de la experiencia",
        "description": "Reutilizamos el proceso de compra web para incorporar a la app modalidades antes restringidas al sitio. En cuatro meses, los deportistas pudieron comprar también esas inscripciones desde la app.",
        "color": "blue"
      },
      {
        "category": "WEB · EXPERIENCIA Y DATOS",
        "title": "Evolución del sitio legado",
        "subtitle": "Experiencia y recorrido medible",
        "description": "Tras renovar la búsqueda y los filtros, la proporción de visitantes que pasaban más de tres minutos en una página de evento creció un 12 % relativo frente a años anteriores. Medíamos por separado la confirmación del pago.",
        "color": "blue"
      },
      {
        "category": "DATOS · NEGOCIO",
        "title": "Indicadores para áreas de negocio",
        "subtitle": "Google Data Studio · Actualización D-1",
        "description": "Comercial y Atención al Cliente consultaban el GMV por organizador hasta el día anterior para detectar cuentas en descenso, revisar tramos comerciales y decidir dónde intervenir.",
        "color": "green"
      }
    ],
    "casePreview": "Ver decisiones y resultados",
    "aboutEyebrow": "02 / SOBRE YAGO",
    "portraitAlt": "Yago Jesus sonriendo, con gafas y camiseta negra, en un evento.",
    "aboutTitle": "Mi trayectoria en producto",
    "aboutText": "Empecé en atención al cliente y pasé por el desarrollo de software antes de dedicarme a producto en Ticket Sports. Trabajar con deportistas y organizadores me enseñó cómo una decisión en el proceso de compra afecta a la operación el día de la carrera.",
    "aboutNote": "Al definir las prioridades de cada trimestre, valoraba con la dirección el impacto en los organizadores, el GMV y el esfuerzo de ingeniería.",
    "backgroundLabel": "Experiencia y formación",
    "background": [
      {
        "title": "Pagos y checkout",
        "detail": "Trabajé en integraciones de tarjetas y boleto bancario. Analicé 282 tareas de soporte de pagos y estimé una carga equivalente a 5,2 meses de trabajo de una persona."
      },
      {
        "title": "Desarrollo Full Stack · .NET/C#",
        "detail": "Experiencia como desarrollador en Ticket Sports, que hoy aporta al análisis de viabilidad y a la colaboración con ingeniería en Producto."
      },
      {
        "title": "Posgrado · PUC-Campinas",
        "detail": "Arquitectura de Software, Ciencia de Datos y Ciberseguridad",
        "status": "En curso · finalización prevista en 2027"
      }
    ],
    "footer": "Producto es conectar las partes.",
    "backToTop": "Volver al inicio"
  }
} as const;

