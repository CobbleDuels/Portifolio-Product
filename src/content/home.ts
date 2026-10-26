export const languages = ["pt", "en", "es"] as const;
export type Language = (typeof languages)[number];

export function isLanguage(value: string): value is Language {
  return languages.some((language) => language === value);
}

export const home = {
  "pt": {
    "metaTitle": "Yago Jesus — Product Manager",
    "metaDescription": "Yago Jesus, Product Manager com 3 anos em Produto e trajetória Full Stack .NET/C#. Decisões, entregas e resultados em plataformas, operações e aplicativos.",
    "skip": "Pular para o conteúdo",
    "navigation": "Navegação principal",
    "language": "Selecionar idioma",
    "casesLink": "Projetos",
    "aboutLink": "Sobre mim",
    "contactLink": "Contato",
    "contactEyebrow": "03 / CONTATO",
    "contactTitle": "Vamos conversar sobre o próximo desafio de Produto?",
    "contactText": "Vamos conversar sobre desafios de Produto, oportunidades de trabalho ou os projetos deste portfólio.",
    "eyebrow": "PRODUCT MANAGER · PORTFÓLIO",
    "headline": [
      "Visão de produto.",
      "Base técnica.",
      "Do problema à entrega."
    ],
    "introduction": "Sou Yago Jesus, Product Manager com 3 anos em Produto e trajetória em desenvolvimento Full Stack .NET/C#. Conecto negócio, tecnologia e experiência do usuário para conduzir iniciativas do problema à publicação.",
    "primaryCta": "Conheça os projetos",
    "secondaryCta": "Sobre minha trajetória",
    "casesEyebrow": "01 / PROJETOS SELECIONADOS",
    "casesTitle": "Decisões de produto.\nResultados em equipe.",
    "casesIntro": "Conheça os problemas, as decisões que conduzi e os resultados das entregas do time — em plataformas, operações e experiências digitais.",
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
        "description": "Compra unificada, conteúdo Webrun e conversão de 20% para 70% na jornada do app. Avaliações de 4,5 nas duas lojas.",
        "color": "blue"
      },
      {
        "category": "WEB · EXPERIÊNCIA E DADOS",
        "title": "Evolução do site legado",
        "subtitle": "Experiência e jornada mensurável",
        "description": "Mais de 500 mil acessos na semana de lançamento, acompanhamento com PostHog e investigação do rastreamento da compra no Google e na Meta.",
        "color": "blue"
      }
    ],
    "casePreview": "Ver decisões e resultados",
    "aboutEyebrow": "02 / QUEM É O YAGO",
    "portraitAlt": "Yago Jesus sorrindo, usando óculos e camiseta preta, em um evento.",
    "aboutTitle": "Repertório técnico para decidir.\nVisão de produto para avançar.",
    "aboutText": "Atuei como desenvolvedor Full Stack .NET/C# antes de concentrar minha atuação em Produto. Essa vivência me ajuda a discutir alternativas com engenharia e considerar esforço de implementação, manutenção e restrições técnicas nas decisões. Como PM, conecto esse repertório à escuta de clientes, à validação com UX e aos objetivos do negócio, conduzindo o trabalho do problema à entrega.",
    "aboutNote": "Decisões e planejamento de Produto que contribuíram, junto ao time, para atingir a meta anual de R$ 500 milhões de GMV em 2026 com três meses de antecedência.",
    "backgroundLabel": "Experiência e formação",
    "background": [
      {
        "title": "3 anos em Produto",
        "detail": "Experiência como Product Manager, com atuação entre negócio, tecnologia e experiência do usuário."
      },
      {
        "title": "Desenvolvimento Full Stack · .NET/C#",
        "detail": "Experiência como desenvolvedor na Ticket Sports, conectada hoje à análise de viabilidade e à colaboração com engenharia em Produto."
      },
      {
        "title": "Pós-graduação · PUC-Campinas",
        "detail": "Arquitetura de Software, Ciência de Dados e Cibersegurança",
        "status": "Em andamento · conclusão prevista para fev/2027"
      }
    ],
    "footer": "Produto é conectar as partes.",
    "backToTop": "Voltar ao início"
  },
  "en": {
    "metaTitle": "Yago Jesus — Product Manager",
    "metaDescription": "Yago Jesus, a Product Manager with 3 years in Product and a Full Stack .NET/C# background. Decisions, delivery and outcomes across platforms, operations and apps.",
    "skip": "Skip to content",
    "navigation": "Main navigation",
    "language": "Select language",
    "casesLink": "Projects",
    "aboutLink": "About",
    "contactLink": "Contact",
    "contactEyebrow": "03 / CONTACT",
    "contactTitle": "Let’s talk about the next Product challenge.",
    "contactText": "Let’s discuss Product challenges, career opportunities or the projects in this portfolio.",
    "eyebrow": "PRODUCT MANAGER · PORTFOLIO",
    "headline": [
      "Product vision.",
      "Technical foundation.",
      "From problem to delivery."
    ],
    "introduction": "I’m Yago Jesus, a Product Manager with 3 years in Product and a background in Full Stack .NET/C# development. I connect business, technology and user experience to lead initiatives from problem to launch.",
    "primaryCta": "Discover the projects",
    "secondaryCta": "About my journey",
    "casesEyebrow": "01 / SELECTED PROJECTS",
    "casesTitle": "Product decisions.\nTeam outcomes.",
    "casesIntro": "Explore the problems, the decisions I led and the outcomes the team delivered — across platforms, operations and digital experiences.",
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
        "description": "Unified purchases, Webrun content and purchase conversion from 20% to 70% in the app. Ratings of 4.5 in both stores.",
        "color": "blue"
      },
      {
        "category": "WEB · EXPERIENCE AND DATA",
        "title": "Improving the legacy website",
        "subtitle": "Experience and a measurable journey",
        "description": "Over 500,000 accesses in launch week, tracking through PostHog and investigating purchase tracking in Google and Meta.",
        "color": "blue"
      }
    ],
    "casePreview": "See decisions and results",
    "aboutEyebrow": "02 / ABOUT YAGO",
    "portraitAlt": "Yago Jesus smiling, wearing glasses and a black shirt at an event.",
    "aboutTitle": "Technical insight to decide.\nProduct vision to move forward.",
    "aboutText": "I worked as a Full Stack .NET/C# developer before focusing on Product. That experience helps me discuss alternatives with engineering and consider implementation effort, maintenance and technical constraints in product decisions. As a PM, I connect that knowledge with client interviews, UX validation and business goals, leading work from problem to delivery.",
    "aboutNote": "Product decisions and planning that contributed, alongside the team, to reaching the R$ 500 million annual GMV target in 2026 three months ahead of year-end.",
    "backgroundLabel": "Experience and education",
    "background": [
      {
        "title": "3 years in Product",
        "detail": "Experience as a Product Manager, connecting business, technology and user experience."
      },
      {
        "title": "Full Stack development · .NET/C#",
        "detail": "Development experience at Ticket Sports, now informing feasibility discussions and collaboration with engineering in Product."
      },
      {
        "title": "Postgraduate specialization · PUC-Campinas",
        "detail": "Software Architecture, Data Science and Cybersecurity",
        "status": "In progress · expected completion Feb 2027"
      }
    ],
    "footer": "Product is about connecting the dots.",
    "backToTop": "Back to top"
  },
  "es": {
    "metaTitle": "Yago Jesus — Product Manager",
    "metaDescription": "Yago Jesus, Product Manager con 3 años en Producto y trayectoria Full Stack .NET/C#. Decisiones, entregas y resultados en plataformas, operaciones y aplicaciones.",
    "skip": "Saltar al contenido",
    "navigation": "Navegación principal",
    "language": "Seleccionar idioma",
    "casesLink": "Proyectos",
    "aboutLink": "Sobre mí",
    "contactLink": "Contacto",
    "contactEyebrow": "03 / CONTACTO",
    "contactTitle": "¿Hablamos del próximo desafío de Producto?",
    "contactText": "Hablemos sobre retos de Producto, oportunidades profesionales o los proyectos de este portafolio.",
    "eyebrow": "PRODUCT MANAGER · PORTAFOLIO",
    "headline": [
      "Visión de producto.",
      "Base técnica.",
      "Del problema a la entrega."
    ],
    "introduction": "Soy Yago Jesus, Product Manager con 3 años en Producto y trayectoria en desarrollo Full Stack .NET/C#. Conecto negocio, tecnología y experiencia de usuario para liderar iniciativas desde el problema hasta el lanzamiento.",
    "primaryCta": "Conoce los proyectos",
    "secondaryCta": "Sobre mi trayectoria",
    "casesEyebrow": "01 / PROYECTOS SELECCIONADOS",
    "casesTitle": "Decisiones de producto.\nResultados en equipo.",
    "casesIntro": "Conoce los problemas, las decisiones que lideré y los resultados del equipo — en plataformas, operaciones y experiencias digitales.",
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
        "description": "Compra unificada, contenido Webrun y conversión del 20% al 70% en la app. Valoraciones de 4,5 en ambas tiendas.",
        "color": "blue"
      },
      {
        "category": "WEB · EXPERIENCIA Y DATOS",
        "title": "Evolución del sitio legado",
        "subtitle": "Experiencia y recorrido medible",
        "description": "Más de 500.000 accesos en la semana de lanzamiento, seguimiento con PostHog e investigación del rastreo de compras en Google y Meta.",
        "color": "blue"
      }
    ],
    "casePreview": "Ver decisiones y resultados",
    "aboutEyebrow": "02 / SOBRE YAGO",
    "portraitAlt": "Yago Jesus sonriendo, con gafas y camiseta negra, en un evento.",
    "aboutTitle": "Criterio técnico para decidir.\nVisión de producto para avanzar.",
    "aboutText": "Trabajé como desarrollador Full Stack .NET/C# antes de centrar mi trayectoria en Producto. Esa experiencia me ayuda a discutir alternativas con ingeniería y considerar el esfuerzo de implementación, el mantenimiento y las restricciones técnicas al tomar decisiones. Como PM, conecto ese conocimiento con la escucha de clientes, la validación con UX y los objetivos del negocio, liderando el trabajo desde el problema hasta la entrega.",
    "aboutNote": "Decisiones y planificación de Producto que contribuyeron, junto al equipo, a alcanzar la meta anual de R$ 500 millones de GMV en 2026 tres meses antes del cierre del año.",
    "backgroundLabel": "Experiencia y formación",
    "background": [
      {
        "title": "3 años en Producto",
        "detail": "Experiencia como Product Manager, conectando negocio, tecnología y experiencia de usuario."
      },
      {
        "title": "Desarrollo Full Stack · .NET/C#",
        "detail": "Experiencia como desarrollador en Ticket Sports, que hoy aporta al análisis de viabilidad y a la colaboración con ingeniería en Producto."
      },
      {
        "title": "Posgrado · PUC-Campinas",
        "detail": "Arquitectura de Software, Ciencia de Datos y Ciberseguridad",
        "status": "En curso · finalización prevista en febrero de 2027"
      }
    ],
    "footer": "Producto es conectar las partes.",
    "backToTop": "Volver al inicio"
  }
} as const;
