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
    "contactText": "Busco posições de Product Manager ou Product Owner pleno, com interesse em marketplaces, produtos mobile e IA aplicada a produto.",
    "eyebrow": "PRODUCT MANAGER · BACKGROUND EM DESENVOLVIMENTO",
    "headline": [
      "Marketplaces.",
      "Apps.",
      "Produto e código."
    ],
    "introduction": "Sou Yago Jesus, Product Manager e ex-desenvolvedor full stack (C#/.NET). Uso essa base para negociar escopo com Engenharia, avaliar riscos técnicos e propor soluções com IA. Na Ticket Sports, cuidei da compra de inscrições pelos atletas e das ferramentas que os organizadores usam para vender e operar eventos.",
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
        "description": "Na migração para a Ingresse, alinhei com o cliente a venda para grupos pedida perto da abertura. Mais de 10 mil grupos e assessorias compraram pelo módulo, cerca de R$ 10 milhões, e o contrato da São Silvestre foi preservado.",
        "color": "orange"
      },
      {
        "category": "OPERAÇÃO · EXPERIÊNCIA",
        "title": "App de Check-in",
        "subtitle": "Entrega de kits, mesmo sem internet",
        "description": "Um cliente com cerca de 50 eventos e R$ 20 milhões por ano avaliava ir para um concorrente. Com a retirada de kits pelo celular, mesmo sem internet, a fila caiu de 50 para 20–30 minutos e ele renovou por três anos, com exclusividade.",
        "color": "green"
      },
      {
        "category": "MOBILE · EVOLUÇÃO",
        "title": "App do Atleta",
        "subtitle": "Compra unificada e evolução da experiência",
        "description": "O app antigo vendia, mas a experiência era ruim. Em quatro meses lançamos o novo: todas as corridas à venda no app, nota de 3,1 para 4,5 nas lojas e mais que o dobro de atletas mantendo o app depois da prova, num canal que passou de R$ 200 milhões em vendas em 2026.",
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
        "subtitle": "Painéis atualizados todos os dias",
        "description": "Os pedidos de relatórios ao time técnico caíram cerca de 90%. Comercial e Atendimento passaram a consultar GMV e vendas por evento para preparar negociações e investigar variações.",
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
    "footerBuilt": "Construí e mantenho este site em Next.js e TypeScript, com desenvolvimento assistido por IA.",
    "footerCode": "Ver o código",
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
    "contactText": "I’m looking for mid-level Product Manager or Product Owner roles, particularly in marketplaces, mobile products and applied AI.",
    "eyebrow": "PRODUCT MANAGER · DEVELOPMENT BACKGROUND",
    "headline": [
      "Marketplaces.",
      "Mobile apps.",
      "Product and code."
    ],
    "introduction": "I’m Yago Jesus, a Product Manager and former full stack developer (C#/.NET). I use that background to negotiate scope with Engineering, assess technical risk and propose AI-based solutions. At Ticket Sports, I worked on race registration for athletes and the tools organizers use to sell entries and run events.",
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
        "description": "During the migration to Ingresse, I agreed with the client on group sales requested close to launch. More than 10,000 running groups and teams bought through the module, about R$10 million, and the São Silvestre contract was kept.",
        "color": "orange"
      },
      {
        "category": "OPERATIONS · EXPERIENCE",
        "title": "Check-in App",
        "subtitle": "Kit pickup, even offline",
        "description": "A client with about 50 events and R$20 million a year was considering a competitor. With mobile kit pickup that works offline, lines dropped from 50 to 20–30 minutes, and he renewed for three years with exclusivity.",
        "color": "green"
      },
      {
        "category": "MOBILE · EVOLUTION",
        "title": "Athlete App",
        "subtitle": "Unified purchases and an evolving experience",
        "description": "The old app sold, but the experience was poor. In four months we launched the new one: every race on sale in the app, store ratings up from 3.1 to 4.5 and more than twice as many athletes keeping the app after their race, in a channel that passed R$200 million in sales in 2026.",
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
        "subtitle": "Dashboards refreshed daily",
        "description": "Report requests to the technical team fell by about 90%. Sales and Customer Success could consult GMV and event sales to prepare negotiations and investigate changes.",
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
    "footerBuilt": "I built and maintain this site in Next.js and TypeScript, with AI-assisted development.",
    "footerCode": "View the code",
    "backToTop": "Back to top"
  },
  "es": {
    "metaTitle": "Yago Jesus — Product Manager",
    "metaDescription": "Portafolio de Yago Jesus, Product Manager. Casos de marketplace, checkout y aplicaciones móviles en Ticket Sports, con decisiones y resultados medidos.",
    "skip": "Saltar al contenido",
    "navigation": "Navegación principal",
    "language": "Seleccionar idioma",
    "casesLink": "Proyectos",
    "aboutLink": "Sobre mí",
    "contactLink": "Contacto",
    "contactEyebrow": "03 / CONTACTO",
    "contactTitle": "Disponible para oportunidades en producto",
    "contactText": "Busco puestos de Product Manager o Product Owner de nivel intermedio, especialmente en marketplaces, productos móviles e IA aplicada al producto.",
    "eyebrow": "PRODUCT MANAGER · EXPERIENCIA EN DESARROLLO",
    "headline": [
      "Marketplaces.",
      "Apps móviles.",
      "Producto y código."
    ],
    "introduction": "Soy Yago Jesus, Product Manager y exdesarrollador full stack (C#/.NET). Uso esa base para negociar el alcance con Ingeniería, evaluar riesgos técnicos y proponer soluciones con IA. En Ticket Sports trabajé en las inscripciones de los deportistas y en las herramientas que usan los organizadores para vender inscripciones y gestionar eventos.",
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
        "description": "En la migración a Ingresse, acordé con el cliente la venta para grupos solicitada cerca de la apertura. Más de 10.000 grupos y equipos compraron por el módulo, unos R$ 10 millones, y el contrato de la São Silvestre se mantuvo.",
        "color": "orange"
      },
      {
        "category": "OPERACIONES · EXPERIENCIA",
        "title": "App de Check-in",
        "subtitle": "Entrega de kits, incluso sin conexión",
        "description": "Un cliente con unos 50 eventos y R$ 20 millones al año evaluaba irse a un competidor. Con la entrega de kits desde el móvil, incluso sin conexión, la fila bajó de 50 a 20–30 minutos y renovó por tres años, con exclusividad.",
        "color": "green"
      },
      {
        "category": "MOBILE · EVOLUCIÓN",
        "title": "App del Atleta",
        "subtitle": "Compra unificada y evolución de la experiencia",
        "description": "La app anterior vendía, pero la experiencia era mala. En cuatro meses lanzamos la nueva: todas las carreras a la venta en la app, valoración de 3,1 a 4,5 en las tiendas y más del doble de deportistas conservando la app tras la carrera, en un canal que superó los R$ 200 millones en ventas en 2026.",
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
        "subtitle": "Paneles actualizados a diario",
        "description": "Las solicitudes de informes al equipo técnico cayeron cerca de un 90 %. Comercial y Atención al Cliente pudieron consultar el GMV y las ventas para preparar negociaciones e investigar variaciones.",
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
    "footerBuilt": "Construí y mantengo este sitio en Next.js y TypeScript, con desarrollo asistido por IA.",
    "footerCode": "Ver el código",
    "backToTop": "Volver al inicio"
  }
} as const;

