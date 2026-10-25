export type AppCaseCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  introduction: string;
  sections: readonly { eyebrow: string; title: string; text: string; chart?: "ratings" | "queue" | "conversion" | "coverage"; items?: readonly { title: string; text: string }[]; metrics?: readonly { value: string; label: string; note: string }[] }[];
};

export const checkInCase = {
  "pt": {
    "metaTitle": "App de Check-in — Yago Jesus",
    "metaDescription": "Um app para entrega de kits esportivos por QR Code ou CPF, com operação online e offline e sincronização posterior.",
    "eyebrow": "02 / OPERAÇÃO · EXPERIÊNCIA",
    "title": "A entrega de kits.\nNa palma da mão.",
    "introduction": "Transformei a demanda de um cliente estratégico em um app dedicado à retirada de kits. Conduzi o produto da definição à publicação; o time entregou consulta por QR Code ou CPF, operação offline e sincronização automática. O aplicativo foi usado em mais de 100 eventos e na entrega de mais de 50 mil kits.",
    "sections": [
      {
        "eyebrow": "O PROBLEMA",
        "title": "Entregar um kit exigia\nmontar uma operação.",
        "text": "Um cliente precisava montar uma estrutura com cronometragem, internet e notebooks acessando o SaaS para entregar kits. O problema estava no esforço necessário para executar a retirada no local: uma tarefa recorrente dependia de um aparato operacional e de conectividade."
      },
      {
        "eyebrow": "CRITÉRIO DE PRODUTO",
        "title": "A entrega não podia\ndepender da conexão.",
        "text": "A necessidade era retirar a dependência de notebooks, acesso ao SaaS e suporte constante do organizador. A proposta foi concentrar no celular a busca por QR Code ou CPF, a conferência dos itens e o registro da retirada. Para funcionar no local do evento, o app precisava continuar operando quando a internet caísse e sincronizar os registros ao reconectar.",
        "items": [
          {
            "title": "Com internet",
            "text": "Registrar a retirada e atualizar o sistema em tempo real."
          },
          {
            "title": "Sem internet",
            "text": "Continuar a checagem e o registro das entregas no aplicativo."
          },
          {
            "title": "Ao reconectar",
            "text": "Enviar automaticamente os registros de quem retirou o kit."
          }
        ]
      },
      {
        "eyebrow": "MINHA ATUAÇÃO COMO PM",
        "title": "Da rotina do cliente\nao produto em campo.",
        "text": "Conduzi entrevistas e apresentações com o cliente para entender a rotina de retirada e coletar feedback. Traduzi a demanda em iniciativa e user stories, validei o design com UX e alinhei o trabalho com o time. Acompanhei a execução e a publicação nas lojas. A engenharia implementou a solução, e a equipe acompanhou o atendimento da operação no lançamento."
      },
      {
        "eyebrow": "TEMPO NA OPERAÇÃO",
        "title": "De 50 para 20–30 minutos\nde espera na fila.",
        "text": "Antes, o atleta podia esperar cerca de 50 minutos para retirar o kit. Falhas de sincronização e alterações que não apareciam atualizadas contribuíam para a fila. Com o aplicativo, a espera passou para 20–30 minutos: o organizador conseguia separar melhor as entregas e apoiar a equipe de atendimento com menos dependência do acesso à plataforma.",
        "chart": "queue"
      },
      {
        "eyebrow": "ADOÇÃO E OPERAÇÃO",
        "title": "Mais de 50 mil kits.\nMais de 100 eventos.",
        "text": "O aplicativo foi utilizado na entrega de mais de 50 mil kits e em mais de 100 eventos. No lançamento, a equipe atendeu todos os chamados da operação no mesmo dia em que foram recebidos. Esses indicadores mostram o uso do produto em campo e o acompanhamento da operação após a entrega. Menos de 5% das tentativas de sincronização apresentaram falhas, tratadas com correções pontuais.",
        "metrics": [
          {
            "value": ">50 mil",
            "label": "kits entregues com o app",
            "note": "Volume de entregas realizadas utilizando o aplicativo."
          },
          {
            "value": ">100",
            "label": "eventos com uso do app",
            "note": "Adoção do aplicativo na operação de retirada de kits."
          },
          {
            "value": "<5%",
            "label": "tentativas de sincronização com falha",
            "note": "Falhas identificadas receberam correções pontuais."
          },
          {
            "value": "No dia",
            "label": "atendimento no lançamento",
            "note": "Todos os chamados da operação foram atendidos pela equipe no mesmo dia."
          }
        ]
      },
      {
        "eyebrow": "ALCANCE DO PRODUTO",
        "title": "Uma demanda específica.\nUso em mais de 100 eventos.",
        "text": "O projeto nasceu de uma necessidade ligada a um cliente estratégico, mas seu uso alcançou mais de 100 eventos. A combinação de consulta simples e continuidade offline atendia uma rotina comum da operação de kits: conferir, entregar e registrar, inclusive com conectividade instável. Esse alcance mostra a aplicação do produto além da demanda inicial."
      }
    ]
  },
  "en": {
    "metaTitle": "Check-in App — Yago Jesus",
    "metaDescription": "A mobile app for sports kit pickup using QR codes or CPF, supporting online and offline operation and subsequent synchronization.",
    "eyebrow": "02 / OPERATIONS · EXPERIENCE",
    "title": "Kit pickup.\nIn the palm of your hand.",
    "introduction": "I turned a strategic client’s request into a dedicated kit-pickup app. I led the product from definition through publication; the team delivered QR-code or CPF lookup, offline operation and automatic synchronization. The app was used at over 100 events to hand out more than 50,000 kits.",
    "sections": [
      {
        "eyebrow": "THE PROBLEM",
        "title": "Handing out a kit meant\nsetting up an operation.",
        "text": "A client needed timing services, internet access and laptops running the SaaS platform to hand out kits. The problem was the effort required to run pickup on site: a recurring task depended on an operational setup and connectivity."
      },
      {
        "eyebrow": "PRODUCT CRITERION",
        "title": "Pickup could not\ndepend on connectivity.",
        "text": "The need was to remove dependency on laptops, SaaS access and constant support from the organizer. The proposal brought QR-code or CPF lookup, item checking and pickup recording together on a phone. To work at an event venue, the app had to keep operating when connectivity dropped and synchronize records upon reconnection.",
        "items": [
          {
            "title": "Online",
            "text": "Record the pickup and update the system in real time."
          },
          {
            "title": "Offline",
            "text": "Continue checking and recording handovers in the app."
          },
          {
            "title": "On reconnection",
            "text": "Automatically upload the records of completed pickups."
          }
        ]
      },
      {
        "eyebrow": "MY CONTRIBUTION AS PM",
        "title": "From the client’s workflow\nto a product in the field.",
        "text": "I conducted client interviews and presentations to understand the pickup workflow and collect feedback. I translated the request into a product initiative and user stories, validated designs with UX and aligned the team. I followed execution and store publication. Engineering implemented the solution, and the team supported operations at launch."
      },
      {
        "eyebrow": "OPERATIONAL TIME",
        "title": "From 50 to 20–30 minutes\nin the pickup queue.",
        "text": "Previously, athletes could wait about 50 minutes to collect a kit. Synchronization failures and changes that did not appear up to date contributed to the queue. With the app, waiting time moved to 20–30 minutes: organizers could better separate handovers and support the pickup team with less dependency on platform access.",
        "chart": "queue"
      },
      {
        "eyebrow": "ADOPTION AND OPERATIONS",
        "title": "Over 50,000 kits.\nMore than 100 events.",
        "text": "The app was used to hand out more than 50,000 kits and at more than 100 events. At launch, the team responded to every operational support request on the day it was received. These indicators show product usage in the field and operational support following delivery. Fewer than 5% of synchronization attempts failed, with targeted fixes applied.",
        "metrics": [
          {
            "value": ">50k",
            "label": "kits handed out using the app",
            "note": "Volume of handovers carried out through the app."
          },
          {
            "value": ">100",
            "label": "events using the app",
            "note": "Adoption of the app in kit-pickup operations."
          },
          {
            "value": "<5%",
            "label": "synchronization attempts that failed",
            "note": "Identified failures received targeted fixes."
          },
          {
            "value": "Same day",
            "label": "support response at launch",
            "note": "The team responded to every operational request on the day it was received."
          }
        ]
      },
      {
        "eyebrow": "PRODUCT REACH",
        "title": "A specific request.\nUsage at over 100 events.",
        "text": "The project began with a strategic client’s need, but its usage reached more than 100 events. Simple lookup and offline continuity supported a recurring kit-pickup workflow: check, hand over and record, including with unstable connectivity. That reach shows the product’s application beyond the original request."
      }
    ]
  },
  "es": {
    "metaTitle": "App de Check-in — Yago Jesus",
    "metaDescription": "Aplicación para la entrega de kits deportivos por QR o CPF, con funcionamiento sin conexión, sincronización automática y uso en más de 100 eventos.",
    "eyebrow": "02 / OPERACIONES · EXPERIENCIA",
    "title": "La entrega de kits.\nEn la palma de la mano.",
    "introduction": "Convertí la necesidad de un cliente estratégico en una app dedicada a la entrega de kits. Lideré el producto desde su definición hasta la publicación; el equipo entregó búsqueda por QR o CPF, funcionamiento offline y sincronización automática. Se utilizó en más de 100 eventos y para entregar más de 50.000 kits.",
    "sections": [
      {
        "eyebrow": "EL PROBLEMA",
        "title": "Entregar un kit exigía\nmontar una operación.",
        "text": "Un cliente necesitaba servicios de cronometraje, conexión a internet y ordenadores con acceso al SaaS para entregar kits. Una tarea recurrente dependía de una infraestructura operativa y de conectividad en el lugar del evento."
      },
      {
        "eyebrow": "CRITERIO DE PRODUCTO",
        "title": "La entrega no podía\ndepender de la conexión.",
        "text": "La necesidad era eliminar la dependencia de ordenadores, acceso al SaaS y soporte constante del organizador. La propuesta reunió en el móvil la búsqueda por QR o CPF (identificador fiscal brasileño), la verificación de artículos y el registro de la entrega. Para funcionar en el evento, la app debía seguir operando al perder la conexión y sincronizar los registros al recuperarla.",
        "items": [
          {
            "title": "Con conexión",
            "text": "Registrar la entrega y actualizar el sistema en tiempo real."
          },
          {
            "title": "Sin conexión",
            "text": "Continuar verificando y registrando entregas en la app."
          },
          {
            "title": "Al reconectar",
            "text": "Enviar automáticamente los registros de las entregas realizadas."
          }
        ]
      },
      {
        "eyebrow": "MI CONTRIBUCIÓN COMO PM",
        "title": "De la rutina del cliente\nal producto en campo.",
        "text": "Realicé entrevistas y presentaciones con el cliente para entender la operación y recoger comentarios. Traduje la demanda en una iniciativa y en historias de usuario, validé el diseño con UX y coordiné el trabajo con el equipo. Acompañé la ejecución y la publicación en las tiendas. Ingeniería implementó la solución y el equipo dio soporte a la operación durante el lanzamiento."
      },
      {
        "eyebrow": "TIEMPO EN LA OPERACIÓN",
        "title": "De 50 a 20–30 minutos\nde espera en la fila.",
        "text": "Antes, el atleta podía esperar unos 50 minutos para recoger el kit. Los fallos de sincronización y los cambios que no aparecían actualizados contribuían a la espera. Con la app, pasó a 20–30 minutos: el organizador podía distribuir mejor las entregas y apoyar al personal con menos dependencia del acceso a la plataforma.",
        "chart": "queue"
      },
      {
        "eyebrow": "ADOPCIÓN Y OPERACIÓN",
        "title": "Más de 50.000 kits.\nMás de 100 eventos.",
        "text": "La aplicación se utilizó para entregar más de 50.000 kits en más de 100 eventos. Durante el lanzamiento, el equipo atendió todas las solicitudes de soporte operativo el mismo día. Menos del 5% de los intentos de sincronización presentaron fallos, abordados con correcciones puntuales.",
        "metrics": [
          {
            "value": ">50.000",
            "label": "kits entregados con la app",
            "note": "Volumen de entregas realizadas mediante la aplicación."
          },
          {
            "value": ">100",
            "label": "eventos que utilizaron la app",
            "note": "Adopción en la operación de recogida de kits."
          },
          {
            "value": "<5%",
            "label": "intentos de sincronización con fallos",
            "note": "Los fallos identificados recibieron correcciones puntuales."
          },
          {
            "value": "En el día",
            "label": "atención durante el lanzamiento",
            "note": "El equipo atendió todas las solicitudes operativas el mismo día."
          }
        ]
      },
      {
        "eyebrow": "ALCANCE DEL PRODUCTO",
        "title": "Una necesidad específica.\nUso en más de 100 eventos.",
        "text": "El proyecto nació de una necesidad de un cliente estratégico, pero su uso llegó a más de 100 eventos. La consulta sencilla y la continuidad offline respondían a una rutina común: verificar, entregar y registrar kits, incluso con conectividad inestable. Ese alcance muestra la aplicación del producto más allá de la demanda inicial."
      }
    ]
  }
} as const;

export const athleteCase = {
  "pt": {
    "metaTitle": "App do Atleta — Yago Jesus",
    "metaDescription": "App do Atleta em React Native: jornada de compra unificada, integração Webrun e evolução das avaliações para 4,5 nas lojas Apple e Android.",
    "eyebrow": "03 / MOBILE · EVOLUÇÃO",
    "title": "Mais que manter um app.\nEvoluir a experiência.",
    "introduction": "Defini uma jornada web de compra dentro do app para superar incompatibilidades entre eventos e evitar manter várias interfaces. Conduzi a evolução com o time, da iniciativa à publicação em React Native. A cobertura de eventos passou de 30% para 100%, e a conversão entre usuários que iniciavam a compra foi de 20% para 70%.",
    "sections": [
      {
        "eyebrow": "O PROBLEMA",
        "title": "A manutenção se tornou\num limite para o produto.",
        "text": "Poucas pessoas do time dominavam .NET MAUI, e implementar novidades era trabalhoso no contexto da equipe. Com a dificuldade de manutenção, os bugs se acumulavam e afetavam a percepção da plataforma de compra. O desafio envolvia tanto a capacidade de evoluir o produto quanto a experiência e a reputação da marca."
      },
      {
        "eyebrow": "DECISÃO DE PRODUTO",
        "title": "Unificar a compra\npara ampliar o catálogo.",
        "text": "Avaliamos construir as telas de compra diretamente no app, mas esse caminho exigiria substituir uma tecnologia em um ponto crítico do legado. Isso ampliaria o prazo em um time que também precisava sustentar o sistema existente. Defini o uso da jornada web dentro do aplicativo: ela já estava quase pronta e precisava de adaptação responsiva. O critério foi reaproveitar o que já funcionava, com menor esforço de implementação e maior alcance para a compra. A cobertura de eventos no app passou de 30% para 100%.",
        "chart": "coverage"
      },
      {
        "eyebrow": "A EVOLUÇÃO DA BASE",
        "title": "Uma base que o time\nconseguisse evoluir.",
        "text": "A experiência também dependia da capacidade de manutenção. Poucas pessoas dominavam .NET MAUI na equipe, e implementar melhorias era trabalhoso. A mudança para React Native respondeu a essa restrição de conhecimento e implementação. A escolha da base técnica estava ligada à continuidade do produto: corrigir problemas e viabilizar novas entregas."
      },
      {
        "eyebrow": "MINHA ATUAÇÃO COMO PM",
        "title": "Conectar a experiência\nà capacidade de entrega.",
        "text": "Assumi a iniciativa de evolução do app e defini a unificação da jornada de compra. Conduzi entrevistas, apresentações e coleta de feedback com clientes; validei o design com UX e traduzi as decisões em user stories para o time. Acompanhei a execução e a publicação nas lojas. A implementação da nova base e das integrações foi uma entrega conjunta com engenharia.",
        "items": [
          { "title": "5 desenvolvedores", "text": "2 atuavam no legado e nas requisições de API; 3 trabalhavam nos projetos com React e novas tecnologias. A evolução do app coexistia com a sustentação do legado." },
          { "title": "6–7 meses", "text": "Da iniciativa à entrega completa da evolução do aplicativo." }
        ]
      },
      {
        "eyebrow": "CONVERSÃO DE COMPRA",
        "title": "De 20% para 70%\nna jornada do app.",
        "text": "A conversão entre quem iniciava a compra no aplicativo ficou em 20% por cerca de um ano e meio. Havia relatos de atletas que precisavam abandonar o app por bugs ou limitações para continuar a jornada em outro lugar. Após a nova versão, a conversão chegou a 70% entre quem iniciava a compra no app.",
        "chart": "conversion"
      },
      {
        "eyebrow": "O ECOSSISTEMA",
        "title": "Da compra ao conteúdo\nesportivo.",
        "text": "Conectamos conteúdo e marketplace ao integrar um blog com o jornalismo esportivo da Webrun, outra marca do grupo. A iniciativa buscava ampliar o contato do atleta com as marcas da empresa e criar mais motivos para usar o app além da compra de inscrições."
      },
      {
        "eyebrow": "CONTEÚDO E RETORNO DO INVESTIMENTO",
        "title": "Mais audiência.\nRetorno no trimestre.",
        "text": "As visualizações das matérias cresceram 50% em relação ao ano anterior, quando a funcionalidade ainda não existia no app. O consumo dos anúncios acompanhou esse crescimento. No acompanhamento do projeto, o investimento em divulgação por ads e na reformulação do aplicativo se pagou no trimestre.",
        "metrics": [
          {
            "value": "+50%",
            "label": "visualizações das matérias",
            "note": "Comparação com o ano anterior à funcionalidade no app."
          },
          {
            "value": "No trimestre",
            "label": "retorno do investimento",
            "note": "Investimento em divulgação por ads e reformulação do aplicativo."
          }
        ]
      },
      {
        "eyebrow": "RESULTADOS EM PRODUÇÃO",
        "title": "Uma experiência melhor,\npercebida pelos clientes.",
        "text": "Com o app React Native e o blog Webrun em produção, recebemos feedback direto de clientes sobre a melhora da experiência. As avaliações, antes entre 3,1 e 3,5, chegaram a 4,5 nas duas lojas. O Play Console registrou falhas/crashes abaixo de 0,1% no Android. São resultados da evolução entregue pelo time; a referência anterior era uma versão acompanhada em 2024/2025, há mais de um ano sem atualização.",
        "metrics": [
          {
            "value": "4,5",
            "label": "avaliação na App Store",
            "note": "Nota alcançada após a evolução do app."
          },
          {
            "value": "4,5",
            "label": "avaliação no Google Play",
            "note": "Nota alcançada após a evolução do app."
          },
          {
            "value": "<0,1%",
            "label": "falhas/crashes no Android",
            "note": "Indicador acompanhado no Google Play Console."
          }
        ],
        "chart": "ratings"
      }
    ]
  },
  "en": {
    "metaTitle": "Athlete App — Yago Jesus",
    "metaDescription": "The Athlete App in React Native: a unified purchase journey, Webrun integration and store ratings improving to 4.5 on Apple and Android.",
    "eyebrow": "03 / MOBILE · EVOLUTION",
    "title": "Beyond maintaining an app.\nEvolving the experience.",
    "introduction": "I defined a web purchase journey within the app to overcome event incompatibilities and avoid maintaining multiple interfaces. I led the evolution with the team, from initiative through publication in React Native. Event coverage increased from 30% to 100%, and conversion among users starting a purchase rose from 20% to 70%.",
    "sections": [
      {
        "eyebrow": "THE PROBLEM",
        "title": "Maintenance became\na product constraint.",
        "text": "Few team members knew .NET MAUI, and implementing new capabilities was cumbersome in that team’s context. With maintenance becoming difficult, bugs accumulated and affected perceptions of the purchasing platform. The challenge concerned both the ability to evolve the product and the experience and reputation of the brand."
      },
      {
        "eyebrow": "PRODUCT DECISION",
        "title": "Unify purchasing\nto expand the catalog.",
        "text": "We considered building purchase screens directly in the app, but that path required replacing technology in a critical part of the legacy system. It would extend delivery time for a team that also had to maintain the existing system. I chose the web purchase journey within the app: it was already largely built and needed responsive adaptation. The criterion was to reuse what already worked, with less implementation effort and broader purchase coverage. Event coverage in the app increased from 30% to 100%.",
        "chart": "coverage"
      },
      {
        "eyebrow": "EVOLVING THE FOUNDATION",
        "title": "A foundation the team\ncould keep improving.",
        "text": "The experience also depended on maintenance capacity. Few people on the team knew .NET MAUI, and implementing improvements was difficult. Moving to React Native addressed that knowledge and implementation constraint. The technical foundation was tied to product continuity: fixing problems and enabling new delivery."
      },
      {
        "eyebrow": "MY CONTRIBUTION AS PM",
        "title": "Connect the experience\nwith delivery capacity.",
        "text": "I took ownership of the app improvement initiative and defined the unified purchase journey. I conducted client interviews, presentations and feedback collection, validated designs with UX and translated decisions into user stories for the team. I followed execution and store publication. The new foundation and integrations were delivered together with engineering.",
        "items": [
          { "title": "5 developers", "text": "2 worked on the legacy system and API requests; 3 worked on React projects and newer technologies. The app improvements ran alongside legacy maintenance." },
          { "title": "6–7 months", "text": "From initiative to full delivery of the app improvements." }
        ]
      },
      {
        "eyebrow": "PURCHASE CONVERSION",
        "title": "From 20% to 70%\nin the app journey.",
        "text": "Conversion among users starting a purchase in the app remained at 20% for about a year and a half. Athletes reported having to leave the app because of bugs or limitations to continue the journey elsewhere. Following the new version, conversion reached 70% among users starting a purchase in the app.",
        "chart": "conversion"
      },
      {
        "eyebrow": "THE ECOSYSTEM",
        "title": "From purchasing to\nsports content.",
        "text": "We connected content and marketplace by integrating a blog with sports journalism from Webrun, another brand in the group. The initiative aimed to broaden athletes’ contact with the company’s brands and give them more reasons to use the app beyond buying event registrations."
      },
      {
        "eyebrow": "CONTENT AND INVESTMENT PAYBACK",
        "title": "More readership.\nPayback within the quarter.",
        "text": "Article views grew by 50% compared with the previous year, before the feature existed in the app. Ad consumption followed that growth. According to project monitoring, the investment in advertising and the app redesign paid for itself within the quarter.",
        "metrics": [
          {
            "value": "+50%",
            "label": "article views",
            "note": "Compared with the year before the in-app feature."
          },
          {
            "value": "Within quarter",
            "label": "investment payback",
            "note": "Investment in advertising and the app redesign."
          }
        ]
      },
      {
        "eyebrow": "RESULTS IN PRODUCTION",
        "title": "An improved experience,\nrecognized by clients.",
        "text": "With the React Native app and Webrun blog in production, clients gave direct feedback about the improved experience. Ratings, previously between 3.1 and 3.5, reached 4.5 in both stores. Play Console reported failures/crashes below 0.1% on Android. These are results of the evolution delivered by the team; the earlier reference was a version monitored during 2024/2025 that had gone over a year without an update.",
        "metrics": [
          {
            "value": "4.5",
            "label": "App Store rating",
            "note": "Rating reached following the app’s evolution."
          },
          {
            "value": "4.5",
            "label": "Google Play rating",
            "note": "Rating reached following the app’s evolution."
          },
          {
            "value": "<0.1%",
            "label": "failures/crashes on Android",
            "note": "Indicator monitored in Google Play Console."
          }
        ],
        "chart": "ratings"
      }
    ]
  },
  "es": {
    "metaTitle": "App del Atleta — Yago Jesus",
    "metaDescription": "Evolución de la App del Atleta: compra unificada, React Native, integración Webrun y conversión del 20% al 70% entre usuarios que iniciaban la compra.",
    "eyebrow": "03 / MOBILE · EVOLUCIÓN",
    "title": "Más que mantener una app.\nMejorar la experiencia.",
    "introduction": "Definí una experiencia de compra web dentro de la app para superar incompatibilidades entre eventos y evitar mantener varias interfaces. Lideré la evolución con el equipo, desde la iniciativa hasta la publicación en React Native. La cobertura de eventos pasó del 30% al 100% y la conversión entre quienes iniciaban la compra, del 20% al 70%.",
    "sections": [
      {
        "eyebrow": "EL PROBLEMA",
        "title": "El mantenimiento se convirtió\nen un límite para el producto.",
        "text": "Pocas personas del equipo dominaban .NET MAUI y desarrollar novedades resultaba costoso en esfuerzo. Las dificultades de mantenimiento provocaban una acumulación de errores que afectaba a la experiencia de compra y a la percepción de la marca. El reto implicaba tanto la capacidad de evolucionar el producto como la experiencia del atleta."
      },
      {
        "eyebrow": "DECISIÓN DE PRODUCTO",
        "title": "Unificar la compra\npara ampliar el catálogo.",
        "text": "Evaluamos construir las pantallas de compra directamente en la app, pero esa opción exigía sustituir una tecnología en un punto crítico del sistema anterior. Eso ampliaría el plazo de un equipo que también debía mantener el sistema existente. Elegí la experiencia web dentro de la app: ya estaba casi lista y necesitaba una adaptación responsive. El criterio fue reutilizar lo que ya funcionaba, con menor esfuerzo de implementación y mayor alcance para la compra. La cobertura de eventos en la app pasó del 30% al 100%.",
        "chart": "coverage"
      },
      {
        "eyebrow": "LA BASE DEL PRODUCTO",
        "title": "Una base que el equipo\npudiera seguir mejorando.",
        "text": "La experiencia también dependía de la capacidad de mantenimiento. Pocas personas del equipo conocían .NET MAUI y resultaba difícil implementar mejoras. El paso a React Native respondió a esa restricción de conocimiento e implementación. La base técnica estaba vinculada a la continuidad del producto: corregir problemas y facilitar nuevas entregas."
      },
      {
        "eyebrow": "MI CONTRIBUCIÓN COMO PM",
        "title": "Conectar la experiencia\ncon la capacidad de entrega.",
        "text": "Asumí la iniciativa de evolución de la app y definí la unificación de la compra. Realicé entrevistas, presentaciones y recogida de comentarios con clientes; validé el diseño con UX y traduje las decisiones en historias de usuario para el equipo. Acompañé la ejecución y la publicación en las tiendas. La nueva base y las integraciones fueron una entrega conjunta con ingeniería.",
        "items": [
          { "title": "5 desarrolladores", "text": "2 trabajaban en el sistema anterior y en las solicitudes de API; 3, en proyectos con React y nuevas tecnologías. La evolución de la app coexistía con el mantenimiento del sistema anterior." },
          { "title": "6–7 meses", "text": "Desde la iniciativa hasta la entrega completa de la evolución de la aplicación." }
        ]
      },
      {
        "eyebrow": "CONVERSIÓN DE COMPRA",
        "title": "Del 20% al 70%\nen la experiencia de la app.",
        "text": "La conversión entre quienes iniciaban la compra en la app se mantuvo en el 20% durante aproximadamente un año y medio. Los atletas relataban que debían salir de la aplicación por errores o limitaciones para continuar la compra en otro lugar. Tras la nueva versión, la conversión alcanzó el 70% entre quienes iniciaban la compra en la app.",
        "chart": "conversion"
      },
      {
        "eyebrow": "EL ECOSISTEMA",
        "title": "De la compra\nal contenido deportivo.",
        "text": "Integramos un blog con periodismo deportivo de Webrun, otra marca del grupo. La iniciativa conectaba contenido y marketplace para ampliar el contacto del atleta con las marcas de la empresa y ofrecer motivos para volver a la app más allá de comprar inscripciones."
      },
      {
        "eyebrow": "CONTENIDO Y RETORNO DE LA INVERSIÓN",
        "title": "Más audiencia.\nRetorno en el trimestre.",
        "text": "Las visualizaciones de artículos crecieron un 50% respecto al año anterior, cuando la funcionalidad aún no existía en la app. El consumo de anuncios acompañó ese crecimiento. Según el seguimiento del proyecto, la inversión en publicidad y en la renovación de la app se recuperó en el trimestre.",
        "metrics": [
          {
            "value": "+50%",
            "label": "visualizaciones de artículos",
            "note": "Comparación con el año anterior a la funcionalidad en la app."
          },
          {
            "value": "En el trimestre",
            "label": "recuperación de la inversión",
            "note": "Inversión en publicidad y en la renovación de la app."
          }
        ]
      },
      {
        "eyebrow": "RESULTADOS EN PRODUCCIÓN",
        "title": "Una experiencia mejor,\npercibida por los clientes.",
        "text": "Con la app en React Native y el blog Webrun en producción, recibimos comentarios directos de clientes sobre la mejora de la experiencia. Las valoraciones, antes entre 3,1 y 3,5, alcanzaron 4,5 en ambas tiendas. Play Console registró fallos/crashes por debajo del 0,1% en Android. Son resultados de la evolución entregada por el equipo; la referencia anterior era una versión observada en 2024/2025 que llevaba más de un año sin actualizarse.",
        "chart": "ratings",
        "metrics": [
          {
            "value": "4,5",
            "label": "valoración en App Store",
            "note": "Valoración alcanzada tras la evolución de la app."
          },
          {
            "value": "4,5",
            "label": "valoración en Google Play",
            "note": "Valoración alcanzada tras la evolución de la app."
          },
          {
            "value": "<0,1%",
            "label": "fallos/crashes en Android",
            "note": "Indicador seguido en Google Play Console."
          }
        ]
      }
    ]
  }
} as const;
