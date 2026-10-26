export type AppCaseCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  introduction: string;
  gallery?: import("@/components/product-gallery").ProductGalleryCopy;
  sections: readonly { eyebrow: string; title: string; text: string; chart?: "ratings" | "queue" | "conversion" | "coverage"; items?: readonly { title: string; text: string }[]; metrics?: readonly { value: string; label: string; note: string }[] }[];
};

export const checkInCase = {
  "pt": {
    "metaTitle": "App de Check-in — Yago Jesus",
    "metaDescription": "Um app para entrega de kits esportivos por QR Code ou CPF, com operação online e offline e sincronização posterior.",
    "eyebrow": "02 / APP DE CHECK-IN · OPERAÇÃO",
    "title": "Entregar kits.\nCom ou sem internet.",
    "introduction": "Conduzi um app de retirada de kits da validação à publicação, com primeira versão entregue em 12 semanas. A demanda chegou pelo CS a partir de um cliente e se conectava à visão de reunir ferramentas para o organizador. O time entregou operação online e offline; o app foi usado em mais de 100 eventos e na entrega de mais de 50 mil kits.",
    "sections": [
      {
        "eyebrow": "DA DEMANDA À VISÃO DE PRODUTO",
        "title": "Da demanda de um cliente\na uma ferramenta para a operação.",
        "text": "A demanda chegou internamente pelo CS, após um cliente perguntar sobre uma facilidade já oferecida por um concorrente. A operação de kits dependia de internet, notebooks e acesso ao SaaS. Apuramos a necessidade e entendemos sua aderência à visão de reunir, em um só ambiente, os produtos que auxiliavam o organizador. Como não havia API pública para esses dados cadastrais e internos, a proposta foi desenvolver a ferramenta dentro do próprio ecossistema."
      },
      {
        "eyebrow": "CRITÉRIO DE PRODUTO",
        "title": "QR Code, CPF e sincronização.\nRetirada que continua offline.",
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
            "text": "Enviar os registros ao servidor, que comparava as retiradas, mantinha o primeiro registro e descartava duplicados, processando apenas os registros ainda pendentes."
          }
        ]
      },
      {
        "eyebrow": "ACESSOS NA OPERAÇÃO",
        "title": "Acesso individual.\nOperação ligada ao organizador.",
        "text": "O sistema já estava preparado para múltiplos usuários. Orientamos o organizador e nosso time a criar acessos individuais vinculados ao organizador e aos pontos de check-in. Assim, cada pessoa podia operar com seu próprio usuário, preservando o acesso principal do cliente. Essa configuração atendia à necessidade de colocar diferentes pessoas na entrega dos kits sem compartilhar o usuário principal."
      },
      {
        "eyebrow": "MINHA ATUAÇÃO COMO PM",
        "title": "Validar com o cliente.\nConduzir da iniciativa à loja.",
        "text": "Conduzi entrevistas e apresentações com o cliente para entender a rotina de retirada e coletar feedback. Traduzi a demanda em iniciativa e user stories, validei o design com UX e alinhei o trabalho com o time. Acompanhei a execução e a publicação nas lojas. A engenharia implementou a solução, e a equipe acompanhou o atendimento da operação no lançamento.",
        "items": [
          {
            "title": "12 semanas",
            "text": "Primeira versão entregue em 3 sprints de 4 semanas, com o produto já validado antes do desenvolvimento."
          },
          {
            "title": "5 desenvolvedores",
            "text": "2 no legado e nas APIs; 3 em React e novas tecnologias. Minha atuação como PM conectava cliente, UX e engenharia."
          }
        ]
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
      }
    ],
    "gallery": {
      "label": "TELAS DO PRODUTO",
      "sourceLabel": "Ver TS Organizador na Google Play",
      "openLabel": "Ampliar imagem",
      "note": "Da seleção do evento ao acompanhamento das retiradas. Interface original em português.",
      "images": [
        {
          "src": "/images/checkin-eventos.webp",
          "alt": "TS Organizador: lista de eventos disponíveis para a operação.",
          "caption": "Selecionar o evento"
        },
        {
          "src": "/images/checkin-atletas.webp",
          "alt": "TS Organizador: busca por atleta, filtros de check-in e indicação de conexão.",
          "caption": "Consultar e registrar a retirada"
        }
      ],
      "sourceUrl": "https://play.google.com/store/apps/details?id=com.ticketsports.checkinapp"
    }
  },
  "en": {
    "metaTitle": "Check-in App — Yago Jesus",
    "metaDescription": "A mobile app for sports kit pickup using QR codes or CPF, supporting online and offline operation and subsequent synchronization.",
    "eyebrow": "02 / CHECK-IN APP · OPERATIONS",
    "title": "Kit pickup.\nWith or without a connection.",
    "introduction": "I led a kit-pickup app from validation through publication, with the first version delivered in 12 weeks. The request came through CS from a client and aligned with the vision of bringing organizer tools together. The team delivered online and offline operation; the app was used at over 100 events to hand out more than 50,000 kits.",
    "sections": [
      {
        "eyebrow": "FROM REQUEST TO PRODUCT VISION",
        "title": "From a client request\nto a tool for event operations.",
        "text": "The request came internally through CS after a client asked about a convenience already offered by a competitor. Kit pickup depended on internet, laptops and SaaS access. We investigated the need and its fit with the vision of bringing organizer tools into one environment. With no public API for that registration and internal data, the proposal was to build the tool within the existing ecosystem."
      },
      {
        "eyebrow": "PRODUCT CRITERION",
        "title": "QR codes, CPF and sync.\nPickup that keeps working offline.",
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
            "text": "Upload records to the server, which compared pickups, kept the first record and discarded duplicates, processing only records still pending."
          }
        ]
      },
      {
        "eyebrow": "OPERATOR ACCESS",
        "title": "Individual access.\nLinked to the organizer.",
        "text": "The system already supported multiple users. We instructed the organizer and our team to create individual accounts linked to the organizer and the check-in points. Each person could operate through their own account while preserving the client’s primary account. This setup allowed different people to hand out kits without sharing the primary account."
      },
      {
        "eyebrow": "MY CONTRIBUTION AS PM",
        "title": "Validate with the client.\nLead from initiative to app store.",
        "text": "I conducted client interviews and presentations to understand the pickup workflow and collect feedback. I translated the request into a product initiative and user stories, validated designs with UX and aligned the team. I followed execution and store publication. Engineering implemented the solution, and the team supported operations at launch.",
        "items": [
          {
            "title": "12 weeks",
            "text": "First version delivered in 3 four-week sprints, with product validation completed before development."
          },
          {
            "title": "5 developers",
            "text": "2 on the legacy system and APIs; 3 on React and newer technologies. My PM role connected the client, UX and engineering."
          }
        ]
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
      }
    ],
    "gallery": {
      "label": "PRODUCT SCREENS",
      "sourceLabel": "View TS Organizador on Google Play",
      "openLabel": "View full image",
      "note": "From event selection to pickup tracking. Original interface in Portuguese.",
      "images": [
        {
          "src": "/images/checkin-eventos.webp",
          "alt": "TS Organizador: list of events available to the operation.",
          "caption": "Select the event"
        },
        {
          "src": "/images/checkin-atletas.webp",
          "alt": "TS Organizador: athlete search, check-in filters and connectivity status.",
          "caption": "Look up and record pickup"
        }
      ],
      "sourceUrl": "https://play.google.com/store/apps/details?id=com.ticketsports.checkinapp"
    }
  },
  "es": {
    "metaTitle": "App de Check-in — Yago Jesus",
    "metaDescription": "Aplicación para la entrega de kits deportivos por QR o CPF, con funcionamiento sin conexión, sincronización automática y uso en más de 100 eventos.",
    "eyebrow": "02 / APP DE CHECK-IN · OPERACIÓN",
    "title": "Entregar kits.\nCon o sin conexión.",
    "introduction": "Lideré una app de recogida de kits desde la validación hasta la publicación, con una primera versión entregada en 12 semanas. La demanda llegó a través de CS desde un cliente y encajaba con la visión de reunir herramientas para el organizador. El equipo entregó funcionamiento online y offline; la app se utilizó en más de 100 eventos y para entregar más de 50.000 kits.",
    "sections": [
      {
        "eyebrow": "DE LA DEMANDA A LA VISIÓN DE PRODUCTO",
        "title": "De la necesidad de un cliente\na una herramienta para la operación.",
        "text": "La demanda llegó internamente a través de CS después de que un cliente preguntara por una facilidad ofrecida por un competidor. La entrega de kits dependía de internet, ordenadores y acceso al SaaS. Investigamos la necesidad y su encaje con la visión de reunir las herramientas del organizador en un solo entorno. Como no había una API pública para esos datos de registro e internos, la propuesta fue desarrollar la herramienta dentro del propio ecosistema."
      },
      {
        "eyebrow": "CRITERIO DE PRODUCTO",
        "title": "QR, CPF y sincronización.\nEntrega que continúa sin conexión.",
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
            "text": "Enviar los registros al servidor, que comparaba las entregas, conservaba el primer registro y descartaba duplicados, procesando solo los registros pendientes."
          }
        ]
      },
      {
        "eyebrow": "ACCESOS EN LA OPERACIÓN",
        "title": "Acceso individual.\nVinculado al organizador.",
        "text": "El sistema ya admitía múltiples usuarios. Indicamos al organizador y a nuestro equipo que crearan accesos individuales vinculados al organizador y a los puntos de check-in. Cada persona podía operar con su propio usuario, preservando el acceso principal del cliente. Esta configuración permitía que distintas personas entregaran kits sin compartir el usuario principal."
      },
      {
        "eyebrow": "MI CONTRIBUCIÓN COMO PM",
        "title": "Validar con el cliente.\nLiderar desde la iniciativa hasta la tienda.",
        "text": "Realicé entrevistas y presentaciones con el cliente para entender la operación y recoger comentarios. Traduje la demanda en una iniciativa y en historias de usuario, validé el diseño con UX y coordiné el trabajo con el equipo. Acompañé la ejecución y la publicación en las tiendas. Ingeniería implementó la solución y el equipo dio soporte a la operación durante el lanzamiento.",
        "items": [
          {
            "title": "12 semanas",
            "text": "Primera versión entregada en 3 sprints de 4 semanas, con el producto ya validado antes del desarrollo."
          },
          {
            "title": "5 desarrolladores",
            "text": "2 en el sistema anterior y las APIs; 3 en React y nuevas tecnologías. Mi función como PM conectaba al cliente, UX e ingeniería."
          }
        ]
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
      }
    ],
    "gallery": {
      "label": "PANTALLAS DEL PRODUCTO",
      "sourceLabel": "Ver TS Organizador en Google Play",
      "openLabel": "Ampliar imagen",
      "note": "Desde la selección del evento hasta el seguimiento de las entregas. Interfaz original en portugués.",
      "images": [
        {
          "src": "/images/checkin-eventos.webp",
          "alt": "TS Organizador: lista de eventos disponibles para la operación.",
          "caption": "Seleccionar el evento"
        },
        {
          "src": "/images/checkin-atletas.webp",
          "alt": "TS Organizador: búsqueda de atletas, filtros de check-in e indicador de conexión.",
          "caption": "Consultar y registrar la entrega"
        }
      ],
      "sourceUrl": "https://play.google.com/store/apps/details?id=com.ticketsports.checkinapp"
    }
  }
} as const;

export const athleteCase = {
  "pt": {
    "metaTitle": "App do Atleta — Yago Jesus",
    "metaDescription": "App do Atleta em React Native: jornada de compra unificada, integração Webrun e evolução das avaliações para 4,5 nas lojas Apple e Android.",
    "eyebrow": "03 / APP DO ATLETA · MOBILE",
    "title": "Unificar a compra.\nAmpliar a experiência.",
    "introduction": "Defini uma jornada web de compra dentro do app para superar incompatibilidades entre eventos e evitar manter várias interfaces. Conduzi a evolução com o time, da iniciativa à publicação em React Native. A cobertura de eventos passou de 30% para 100%, e a conversão entre usuários que iniciavam a compra foi de 20% para 70%.",
    "sections": [
      {
        "eyebrow": "O PROBLEMA",
        "title": "Manutenção limitada.\nA experiência do atleta em risco.",
        "text": "Poucas pessoas do time dominavam .NET MAUI, e implementar novidades era trabalhoso no contexto da equipe. Com a dificuldade de manutenção, os bugs se acumulavam e afetavam a percepção da plataforma de compra. O desafio envolvia tanto a capacidade de evoluir o produto quanto a experiência e a reputação da marca."
      },
      {
        "eyebrow": "DECISÃO DE PRODUTO",
        "title": "Reaproveitar a jornada web.\nAmpliar a cobertura de eventos.",
        "text": "Avaliamos construir as telas de compra diretamente no app, mas esse caminho exigiria substituir uma tecnologia em um ponto crítico do legado. Isso ampliaria o prazo em um time que também precisava sustentar o sistema existente. Defini o uso da jornada web dentro do aplicativo: ela já estava quase pronta e precisava de adaptação responsiva. O critério foi reaproveitar o que já funcionava, com menor esforço de implementação e maior alcance para a compra. A cobertura de eventos no app passou de 30% para 100%.",
        "chart": "coverage"
      },
      {
        "eyebrow": "A EVOLUÇÃO DA BASE",
        "title": "Trocar a base técnica\npara viabilizar a evolução.",
        "text": "A experiência também dependia da capacidade de manutenção. Poucas pessoas dominavam .NET MAUI na equipe, e implementar melhorias era trabalhoso. A mudança para React Native respondeu a essa restrição de conhecimento e implementação. A escolha da base técnica estava ligada à continuidade do produto: corrigir problemas e viabilizar novas entregas."
      },
      {
        "eyebrow": "MINHA ATUAÇÃO COMO PM",
        "title": "Decidir com UX e engenharia.\nConduzir até a publicação.",
        "text": "Assumi a iniciativa de evolução do app e defini a unificação da jornada de compra. Conduzi entrevistas, apresentações e coleta de feedback com clientes; validei o design com UX e traduzi as decisões em user stories para o time. Acompanhei a execução e a publicação nas lojas. A implementação da nova base e das integrações foi uma entrega conjunta com engenharia.",
        "items": [
          {
            "title": "5 desenvolvedores",
            "text": "2 atuavam no legado e nas requisições de API; 3 trabalhavam nos projetos com React e novas tecnologias. A evolução do app coexistia com a sustentação do legado."
          },
          {
            "title": "3–4 meses",
            "text": "Da iniciativa à entrega completa da evolução do aplicativo."
          }
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
        "title": "Integrar o Webrun.\nIr além da compra de inscrições.",
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
            "value": "<0,1%",
            "label": "falhas/crashes no Android",
            "note": "Indicador acompanhado no Google Play Console."
          }
        ],
        "chart": "ratings"
      }
    ],
    "gallery": {
      "label": "O PRODUTO PUBLICADO",
      "sourceLabel": "Ver Ticket Sports na Google Play",
      "openLabel": "Ampliar imagem",
      "note": "Material de apresentação do aplicativo. Interface original em português.",
      "images": [
        {
          "src": "/images/app-atleta-catalogo.webp",
          "alt": "App do Atleta: catálogo de eventos e navegação para notícias, inscrições e perfil.",
          "caption": "Catálogo e navegação do App do Atleta"
        }
      ],
      "sourceUrl": "https://play.google.com/store/apps/details?id=com.br.ticketsports"
    }
  },
  "en": {
    "metaTitle": "Athlete App — Yago Jesus",
    "metaDescription": "The Athlete App in React Native: a unified purchase journey, Webrun integration and store ratings improving to 4.5 on Apple and Android.",
    "eyebrow": "03 / ATHLETE APP · MOBILE",
    "title": "Unify purchasing.\nExpand the experience.",
    "introduction": "I defined a web purchase journey within the app to overcome event incompatibilities and avoid maintaining multiple interfaces. I led the evolution with the team, from initiative through publication in React Native. Event coverage increased from 30% to 100%, and conversion among users starting a purchase rose from 20% to 70%.",
    "sections": [
      {
        "eyebrow": "THE PROBLEM",
        "title": "Limited maintenance.\nThe athlete experience at risk.",
        "text": "Few team members knew .NET MAUI, and implementing new capabilities was cumbersome in that team’s context. With maintenance becoming difficult, bugs accumulated and affected perceptions of the purchasing platform. The challenge concerned both the ability to evolve the product and the experience and reputation of the brand."
      },
      {
        "eyebrow": "PRODUCT DECISION",
        "title": "Reuse the web purchase journey.\nExpand event coverage.",
        "text": "We considered building purchase screens directly in the app, but that path required replacing technology in a critical part of the legacy system. It would extend delivery time for a team that also had to maintain the existing system. I chose the web purchase journey within the app: it was already largely built and needed responsive adaptation. The criterion was to reuse what already worked, with less implementation effort and broader purchase coverage. Event coverage in the app increased from 30% to 100%.",
        "chart": "coverage"
      },
      {
        "eyebrow": "EVOLVING THE FOUNDATION",
        "title": "Change the technical foundation\nto enable product evolution.",
        "text": "The experience also depended on maintenance capacity. Few people on the team knew .NET MAUI, and implementing improvements was difficult. Moving to React Native addressed that knowledge and implementation constraint. The technical foundation was tied to product continuity: fixing problems and enabling new delivery."
      },
      {
        "eyebrow": "MY CONTRIBUTION AS PM",
        "title": "Decide with UX and engineering.\nLead through publication.",
        "text": "I took ownership of the app improvement initiative and defined the unified purchase journey. I conducted client interviews, presentations and feedback collection, validated designs with UX and translated decisions into user stories for the team. I followed execution and store publication. The new foundation and integrations were delivered together with engineering.",
        "items": [
          {
            "title": "5 developers",
            "text": "2 worked on the legacy system and API requests; 3 worked on React projects and newer technologies. The app improvements ran alongside legacy maintenance."
          },
          {
            "title": "3–4 months",
            "text": "From initiative to full delivery of the app improvements."
          }
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
        "title": "Integrate Webrun.\nGo beyond event registration.",
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
            "value": "<0.1%",
            "label": "failures/crashes on Android",
            "note": "Indicator monitored in Google Play Console."
          }
        ],
        "chart": "ratings"
      }
    ],
    "gallery": {
      "label": "THE PUBLISHED PRODUCT",
      "sourceLabel": "View Ticket Sports on Google Play",
      "openLabel": "View full image",
      "note": "App presentation material. Original interface in Portuguese.",
      "images": [
        {
          "src": "/images/app-atleta-catalogo.webp",
          "alt": "Athlete App: event catalog and navigation to news, registrations and profile.",
          "caption": "Athlete App catalog and navigation"
        }
      ],
      "sourceUrl": "https://play.google.com/store/apps/details?id=com.br.ticketsports"
    }
  },
  "es": {
    "metaTitle": "App del Atleta — Yago Jesus",
    "metaDescription": "Evolución de la App del Atleta: compra unificada, React Native, integración Webrun y conversión del 20% al 70% entre usuarios que iniciaban la compra.",
    "eyebrow": "03 / APP DEL ATLETA · MOBILE",
    "title": "Unificar la compra.\nAmpliar la experiencia.",
    "introduction": "Definí una experiencia de compra web dentro de la app para superar incompatibilidades entre eventos y evitar mantener varias interfaces. Lideré la evolución con el equipo, desde la iniciativa hasta la publicación en React Native. La cobertura de eventos pasó del 30% al 100% y la conversión entre quienes iniciaban la compra, del 20% al 70%.",
    "sections": [
      {
        "eyebrow": "EL PROBLEMA",
        "title": "Mantenimiento limitado.\nLa experiencia del atleta en riesgo.",
        "text": "Pocas personas del equipo dominaban .NET MAUI y desarrollar novedades resultaba costoso en esfuerzo. Las dificultades de mantenimiento provocaban una acumulación de errores que afectaba a la experiencia de compra y a la percepción de la marca. El reto implicaba tanto la capacidad de evolucionar el producto como la experiencia del atleta."
      },
      {
        "eyebrow": "DECISIÓN DE PRODUCTO",
        "title": "Reutilizar la compra web.\nAmpliar la cobertura de eventos.",
        "text": "Evaluamos construir las pantallas de compra directamente en la app, pero esa opción exigía sustituir una tecnología en un punto crítico del sistema anterior. Eso ampliaría el plazo de un equipo que también debía mantener el sistema existente. Elegí la experiencia web dentro de la app: ya estaba casi lista y necesitaba una adaptación responsive. El criterio fue reutilizar lo que ya funcionaba, con menor esfuerzo de implementación y mayor alcance para la compra. La cobertura de eventos en la app pasó del 30% al 100%.",
        "chart": "coverage"
      },
      {
        "eyebrow": "LA BASE DEL PRODUCTO",
        "title": "Cambiar la base técnica\npara permitir la evolución.",
        "text": "La experiencia también dependía de la capacidad de mantenimiento. Pocas personas del equipo conocían .NET MAUI y resultaba difícil implementar mejoras. El paso a React Native respondió a esa restricción de conocimiento e implementación. La base técnica estaba vinculada a la continuidad del producto: corregir problemas y facilitar nuevas entregas."
      },
      {
        "eyebrow": "MI CONTRIBUCIÓN COMO PM",
        "title": "Decidir con UX e ingeniería.\nLiderar hasta la publicación.",
        "text": "Asumí la iniciativa de evolución de la app y definí la unificación de la compra. Realicé entrevistas, presentaciones y recogida de comentarios con clientes; validé el diseño con UX y traduje las decisiones en historias de usuario para el equipo. Acompañé la ejecución y la publicación en las tiendas. La nueva base y las integraciones fueron una entrega conjunta con ingeniería.",
        "items": [
          {
            "title": "5 desarrolladores",
            "text": "2 trabajaban en el sistema anterior y en las solicitudes de API; 3, en proyectos con React y nuevas tecnologías. La evolución de la app coexistía con el mantenimiento del sistema anterior."
          },
          {
            "title": "3–4 meses",
            "text": "Desde la iniciativa hasta la entrega completa de la evolución de la aplicación."
          }
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
        "title": "Integrar Webrun.\nIr más allá de la inscripción.",
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
            "value": "<0,1%",
            "label": "fallos/crashes en Android",
            "note": "Indicador seguido en Google Play Console."
          }
        ]
      }
    ],
    "gallery": {
      "label": "EL PRODUCTO PUBLICADO",
      "sourceLabel": "Ver Ticket Sports en Google Play",
      "openLabel": "Ampliar imagen",
      "note": "Material de presentación de la app. Interfaz original en portugués.",
      "images": [
        {
          "src": "/images/app-atleta-catalogo.webp",
          "alt": "App del Atleta: catálogo de eventos y navegación a noticias, inscripciones y perfil.",
          "caption": "Catálogo y navegación de la App del Atleta"
        }
      ],
      "sourceUrl": "https://play.google.com/store/apps/details?id=com.br.ticketsports"
    }
  }
} as const;
