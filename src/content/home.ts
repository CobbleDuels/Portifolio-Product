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
    "casesIntro": "Da inscrição no celular à retirada de kits sem internet, veja o que decidi com os times e como acompanhamos os resultados.",
    "projects": [
      {
        "category": "PLATAFORMA · ESCALA",
        "title": "Ticket Sports → Ingresse",
        "subtitle": "Migração e São Silvestre",
        "description": "Adaptação da plataforma às necessidades do esporte. Na São Silvestre, a operação movimentou cerca de R$ 40 milhões de GMV em um dia.",
        "color": "orange"
      },
      {
        "category": "OPERAÇÃO · EXPERIÊNCIA",
        "title": "App de Check-in",
        "subtitle": "Entrega de kits, mesmo sem internet",
        "description": "Mais de 50 mil kits em mais de 100 eventos. A espera na fila passou de 50 para 20–30 minutos, com operação online e offline.",
        "color": "green"
      },
      {
        "category": "MOBILE · EVOLUÇÃO",
        "title": "App do Atleta",
        "subtitle": "Compra unificada e evolução da experiência",
        "description": "Catálogo disponível para compra de 30% para 100%, lançamento em 4 meses e ganho de 15 pontos percentuais na retenção em janela de duas semanas.",
        "color": "blue"
      },
      {
        "category": "WEB · EXPERIÊNCIA E DADOS",
        "title": "Evolução do site legado",
        "subtitle": "Experiência e jornada mensurável",
        "description": "Reformulação da homepage, categorias, filtros e descoberta por localização, com crescimento relativo de 12% no engajamento com páginas de eventos.",
        "color": "blue"
      },
      {
        "category": "DADOS · NEGÓCIO",
        "title": "Indicadores para áreas de negócio",
        "subtitle": "Google Data Studio · Atualização D-1",
        "description": "GMV, tiers e indicadores de eventos centralizados com o time de Dados, para consulta de Comercial, CS, RP e Key Accounts.",
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
    "casesIntro": "From mobile registration to offline kit pickup, these cases explain the decisions we made and how we measured the results.",
    "projects": [
      {
        "category": "PLATFORM · SCALE",
        "title": "Ticket Sports → Ingresse",
        "subtitle": "Migration and São Silvestre",
        "description": "Adapting the platform to sports-specific needs. The São Silvestre operation processed about R$ 40 million in GMV in one day.",
        "color": "orange"
      },
      {
        "category": "OPERATIONS · EXPERIENCE",
        "title": "Check-in App",
        "subtitle": "Kit pickup, even offline",
        "description": "Over 50,000 kits across more than 100 events. Queue waiting time moved from 50 to 20–30 minutes, with online and offline operation.",
        "color": "green"
      },
      {
        "category": "MOBILE · EVOLUTION",
        "title": "Athlete App",
        "subtitle": "Unified purchases and an evolving experience",
        "description": "Purchasable catalog expanded from 30% to 100%, launch in 4 months and a 15-percentage-point increase in retention measured over a two-week window.",
        "color": "blue"
      },
      {
        "category": "WEB · EXPERIENCE AND DATA",
        "title": "Improving the legacy website",
        "subtitle": "Experience and a measurable journey",
        "description": "Redesigned homepage, categories, filters and location-based discovery, with a 12% relative increase in event-page engagement.",
        "color": "blue"
      },
      {
        "category": "DATA · BUSINESS",
        "title": "Business intelligence",
        "subtitle": "Google Data Studio · D-1 freshness",
        "description": "GMV, tiers and event indicators centralized with Data for Sales, CS, RP and Key Accounts.",
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
    "casesIntro": "Desde la inscripción por móvil hasta la recogida de kits sin conexión, estos casos explican qué decidimos y cómo medimos los resultados.",
    "projects": [
      {
        "category": "PLATAFORMA · ESCALA",
        "title": "Ticket Sports → Ingresse",
        "subtitle": "Migración y São Silvestre",
        "description": "Adaptación de la plataforma a las necesidades del deporte. La operación de São Silvestre procesó cerca de R$ 40 millones de GMV en un día.",
        "color": "orange"
      },
      {
        "category": "OPERACIONES · EXPERIENCIA",
        "title": "App de Check-in",
        "subtitle": "Entrega de kits, incluso sin conexión",
        "description": "Más de 50.000 kits en más de 100 eventos. La espera en la fila pasó de 50 a 20–30 minutos, con operación online y offline.",
        "color": "green"
      },
      {
        "category": "MOBILE · EVOLUCIÓN",
        "title": "App del Atleta",
        "subtitle": "Compra unificada y evolución de la experiencia",
        "description": "Catálogo disponible para compra del 30% al 100%, lanzamiento en 4 meses y aumento de 15 puntos porcentuales en retención medida en una ventana de dos semanas.",
        "color": "blue"
      },
      {
        "category": "WEB · EXPERIENCIA Y DATOS",
        "title": "Evolución del sitio legado",
        "subtitle": "Experiencia y recorrido medible",
        "description": "Renovación de página de inicio, categorías, filtros y búsqueda por ubicación, con un crecimiento relativo del 12% en interacción con páginas de eventos.",
        "color": "blue"
      },
      {
        "category": "DATOS · NEGOCIO",
        "title": "Indicadores para áreas de negocio",
        "subtitle": "Google Data Studio · Actualización D-1",
        "description": "GMV, niveles e indicadores de eventos centralizados con Datos para Comercial, CS, RP y Key Accounts.",
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

