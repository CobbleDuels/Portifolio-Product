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
    "introduction": "Identificamos uma oportunidade de simplificar a retirada de kits e o risco de perder um organizador de alto valor para um concorrente. Validei o fluxo de retirada com o organizador, e a equipe entregou a primeira versão do app em 12 semanas. Com a entrega, ele renovou o contrato e passou a abrir as inscrições de todos os seus eventos exclusivamente na Ticket Sports.",
    "sections": [
      {
        "eyebrow": "DECISÃO DE PRODUTO",
        "title": "Por que priorizamos a retirada de kits",
        "text": "Já víamos espaço no mercado para integrar a retirada de kits à plataforma de inscrições. O sinal de urgência veio pelo Atendimento. Um organizador de grande peso na receita avaliava migrar para um concorrente que oferecia check-in. Ele disse que ficaria se conseguíssemos atender à sua operação. Priorizamos a iniciativa porque ela respondia ao risco de perder essa conta e podia resolver um problema de outros organizadores: manter os pontos de retirada funcionando mesmo sem internet."
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
        "title": "Como defini o escopo com o organizador",
        "text": "Nas entrevistas e apresentações com o organizador, mapeei o que a equipe precisava fazer no balcão: localizar a inscrição, conferir os itens e registrar a entrega. Usei esse fluxo para definir as histórias de usuário, validar o design com UX e alinhar o escopo com Engenharia. Acompanhei a entrega até a publicação nas lojas.",
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
        "text": "O organizador acompanhou a retirada presencialmente, com apoio do nosso time de Atendimento na implantação. Segundo sua observação no evento, a espera passou de cerca de 50 para 20–30 minutos. Corredores que já conheciam aquelas filas também comentaram que a retirada estava mais rápida.",
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
    "introduction": "We saw an opportunity to simplify race kit pickup and a risk of losing a high-value event organizer to a competitor. I validated the pickup workflow with the organizer, and our team delivered the first version of the app in 12 weeks. That delivery secured a contract renewal and an exclusivity agreement under which the organizer opened registration for every event through Ticket Sports.",
    "sections": [
      {
        "eyebrow": "PRODUCT DECISION",
        "title": "Why we prioritized kit pickup",
        "text": "We had already seen an opportunity to integrate kit pickup into our registration platform. Customer Success brought us a signal that changed the timing. An organizer that accounted for a significant share of revenue was considering a competitor with a check-in tool. The organizer said they would stay if we could meet their operational needs. We prioritized the work because it addressed that immediate risk and could help other organizers keep pickup desks running when connectivity failed."
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
        "title": "How I scoped the workflow with the organizer",
        "text": "In interviews and walkthroughs with the organizer, I mapped what staff needed to do at the desk: find a registration, check the kit contents and record the handover. I used that workflow to write user stories, validate designs with UX and agree on scope with Engineering. I followed delivery through to publication in the app stores.",
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
        "text": "The organizer observed pickup in person while our Customer Success team helped staff adopt the app. The organizer estimated that waits fell from about 50 minutes to 20–30 minutes at the event. Experienced runners who knew those queues also commented that pickup felt faster.",
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
    "introduction": "Vimos una oportunidad para simplificar la recogida de kits y el riesgo de perder a un organizador de alto valor ante un competidor. Validé el flujo de recogida con el organizador y el equipo entregó la primera versión de la app en 12 semanas. Gracias a esa entrega, el organizador renovó el contrato y acordó abrir las inscripciones de todos sus eventos exclusivamente en Ticket Sports.",
    "sections": [
      {
        "eyebrow": "DECISIÓN DE PRODUCTO",
        "title": "Por qué priorizamos la recogida de kits",
        "text": "Ya habíamos identificado una oportunidad para integrar la recogida de kits en la plataforma de inscripciones. A través de Atención al Cliente supimos que un organizador de gran peso en la facturación valoraba cambiarse a un competidor que ofrecía una herramienta de check-in. Nos dijo que se quedaría si podíamos cubrir sus necesidades operativas. Priorizamos la iniciativa porque respondía al riesgo de perder esa cuenta y podía ayudar a otros organizadores a mantener abiertos los puntos de recogida cuando fallaba la conexión."
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
        "title": "Cómo definí el alcance con el organizador",
        "text": "En entrevistas y demostraciones con el organizador, identifiqué qué necesitaba hacer el personal en el mostrador: localizar la inscripción, comprobar los artículos y registrar la entrega. Utilicé ese flujo para redactar historias de usuario, validar el diseño con UX y acordar el alcance con Ingeniería. Acompañé la entrega hasta la publicación en las tiendas de aplicaciones.",
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
        "text": "El organizador observó la recogida en persona, con el apoyo de nuestro equipo de Atención al Cliente durante la implantación. Según su observación en el evento, la espera pasó de unos 50 minutos a 20–30. Corredores que conocían bien aquellas colas también comentaron que la recogida era más rápida.",
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
    "metaDescription": "Como ampliamos a oferta de inscrições no app e acompanhamos o retorno dos atletas após o lançamento.",
    "eyebrow": "03 / APP DO ATLETA · MOBILE",
    "title": "Unificar a compra.\nAmpliar a experiência.",
    "introduction": "Aproximadamente três em cada dez eventos ficavam fora do app, às vezes mais, conforme o calendário de cada organizador. Uma prova em dupla, por exemplo, podia ser vendida no site, mas o app não comportava essa modalidade. Negociei com o CTO reaproveitar o checkout web e, em quatro meses, passamos a oferecer essas inscrições também no app.",
    "sections": [
      {
        "eyebrow": "O PROBLEMA",
        "title": "Manutenção limitada.\nA experiência do atleta em risco.",
        "text": "Mais de 80% das compras aconteciam em experiências mobile, mas a equipe não dominava MAUI, a tecnologia do app anterior. Isso limitava melhorias propostas por Marketing, Comercial e operação. Algumas modalidades precisavam ser ocultadas do calendário por incompatibilidade com a jornada disponível no aplicativo."
      },
      {
        "eyebrow": "DECISÃO DE PRODUTO",
        "title": "Reaproveitar a jornada web.\nAmpliar a cobertura de eventos.",
        "text": "Discutimos reconstruir toda a inscrição no app, mas o prazo, o trabalho de UX/UI e a falta de mapeamento de todas as modalidades tornavam esse escopo inviável. Em conversa com o CTO, decidimos reaproveitar a experiência web de inscrição dentro do app. A decisão reduziu a necessidade de reconstruir fluxos e permitiu oferecer todas as modalidades. Marcamos a origem nas compras para distinguir app e computador no painel. Isso permitiu acompanhar as compras por canal e comparar com o ano anterior enquanto ampliávamos o catálogo e acompanhávamos os erros que chegavam aos atletas."
      },
      {
        "eyebrow": "A EVOLUÇÃO DA BASE",
        "title": "Trocar a base técnica\npara viabilizar a evolução.",
        "text": "A experiência também dependia da capacidade de manutenção. Poucas pessoas dominavam .NET MAUI na equipe, e implementar melhorias era trabalhoso. A mudança para React Native respondeu a essa restrição de conhecimento e implementação. A escolha da base técnica estava ligada à continuidade do produto: corrigir problemas e viabilizar novas entregas."
      },
      {
        "eyebrow": "MINHA ATUAÇÃO COMO PM",
        "title": "Decidir com UX e engenharia.\nConduzir até a publicação.",
        "text": "Conduzi entrevistas com organizadores e atletas e analisei reclamações da App Store e do Google Play. Investigamos a apresentação dos eventos, a edição do cadastro, o acesso ao protocolo de inscrição e a pouca utilidade percebida após a corrida. Traduzi esses achados em requisitos e prioridades, acompanhei refinamentos técnicos e a publicação nas lojas.",
        "items": [
          {
            "title": "1 desenvolvedor dedicado",
            "text": "Outros 3 apoiavam a integração com o legado, de onde vinham os dados dos eventos."
          },
          {
            "title": "4 meses",
            "text": "Da conversa inicial à publicação do aplicativo nas lojas."
          }
        ]
      },
      {
        "eyebrow": "COMPORTAMENTO DOS ATLETAS",
        "title": "Os atletas voltavam para explorar outros eventos?",
        "text": "No PostHog, cruzei o identificador de cada visitante com as URLs acessadas e as datas das visitas. Assim, conseguíamos distinguir a navegação por várias páginas em uma visita de um retorno em outra data. Na comparação com o ano anterior, observamos que os visitantes voltavam mais vezes. Quando um atleta consultava outro evento, havia uma oportunidade de apresentar a próxima prova. A intenção de compra e o efeito sobre o GMV ficaram em aberto."
      },
      {
        "eyebrow": "DECISÃO DE PRODUTO",
        "title": "Por que levar o Webrun para o app?",
        "text": "A liderança pediu que o Webrun, veículo de jornalismo esportivo do grupo, ganhasse visibilidade dentro do app. Já observávamos um crescimento dos acessos pelo celular, muitos vindos de publicações nas redes sociais. Integramos as matérias ao novo app com dois objetivos: dar ao atleta um motivo para voltar entre provas e levar leitores ao Webrun. A integração também abriu um espaço para divulgar promoções e eventos no próprio aplicativo."
      },
      {
        "eyebrow": "AUDIÊNCIA DO WEBRUN",
        "title": "Como acompanhamos o alcance do conteúdo",
        "text": "As matérias do Webrun tiveram 50% mais visualizações do que no ano anterior. Usamos esse dado para acompanhar a audiência do conteúdo. Como as redes sociais também traziam leitores, a comparação anual não isola a contribuição do app.",
        "metrics": [
          {
            "value": "+50%",
            "label": "visualizações das matérias",
            "note": "Comparação com o ano anterior à funcionalidade no app."
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
      },
      {
        "eyebrow": "ENTREGA E PRÓXIMOS PASSOS",
        "title": "Compra e conteúdo entregues.\nEcossistema como direção.",
        "text": "Entregamos o app com a jornada web de compra e o blog da WEBRUN. Ajustes visuais, a integração completa do ecossistema e a avaliação de incorporar o app Ticket Sports ao app Ingresse ficaram como possibilidades futuras. O app tinha mais de 1 milhão de downloads acumulados, um dado de escala do produto, não de usuários ativos ou de aquisições geradas pelo relançamento."
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
    "metaDescription": "How we expanded access to event registrations in the app and tracked athlete retention after launch.",
    "eyebrow": "03 / ATHLETE APP · MOBILE",
    "title": "Unify purchasing.\nExpand the experience.",
    "introduction": "Roughly three in ten events were unavailable in the app, sometimes more depending on each organizer’s calendar. For example, athletes could register as a pair on the website, but the app did not support that category. I agreed with the CTO to reuse web checkout. Within four months, athletes could buy those entries in the app too.",
    "sections": [
      {
        "eyebrow": "THE PROBLEM",
        "title": "Limited maintenance.\nThe athlete experience at risk.",
        "text": "Mobile experiences accounted for over 80% of purchases, but the team lacked experience with MAUI, the previous app’s technology. This limited improvements proposed by Marketing, Sales and operations. Some sports categories had to be hidden from the calendar because the app could not support their registration flows."
      },
      {
        "eyebrow": "PRODUCT DECISION",
        "title": "Reuse the web purchase journey.\nExpand event coverage.",
        "text": "We discussed rebuilding registration entirely inside the app, but timing, UX/UI work and the lack of mapped flows for every sports category made that scope unfeasible. The CTO and I agreed to reuse the web registration experience inside the app. This reduced flow reconstruction and enabled every category to be offered. We tagged purchases by source so the dashboard could distinguish app and desktop transactions. We tracked purchases by channel and compared them with the previous year as we expanded the catalog and monitored errors affecting athletes."
      },
      {
        "eyebrow": "EVOLVING THE FOUNDATION",
        "title": "Change the technical foundation\nto enable product evolution.",
        "text": "The experience also depended on maintenance capacity. Few people on the team knew .NET MAUI, and implementing improvements was difficult. Moving to React Native addressed that knowledge and implementation constraint. The technical foundation was tied to product continuity: fixing problems and enabling new delivery."
      },
      {
        "eyebrow": "MY CONTRIBUTION AS PM",
        "title": "Decide with UX and engineering.\nLead through publication.",
        "text": "I interviewed organizers and athletes and analyzed App Store and Google Play complaints. We investigated event presentation, profile editing, access to registration confirmations and limited usefulness after a race. I translated findings into requirements and priorities and followed technical refinement and app-store publication.",
        "items": [
          {
            "title": "1 dedicated developer",
            "text": "3 others supported integrations with the legacy system that supplied event data."
          },
          {
            "title": "4 months",
            "text": "From the initial discussion to publication in app stores."
          }
        ]
      },
      {
        "eyebrow": "ATHLETE BEHAVIOR",
        "title": "Did athletes come back to explore other events?",
        "text": "In PostHog, I matched visitor IDs with the URLs they opened and the dates of their visits. That let us distinguish browsing several pages in one visit from returning on another date. Compared with the previous year, visitors came back more often. When an athlete viewed another event, we had an opportunity to introduce their next race. Purchase intent and the effect on GMV remained open questions."
      },
      {
        "eyebrow": "PRODUCT DECISION",
        "title": "Why bring Webrun into the app?",
        "text": "Leadership wanted Webrun, the group’s sports publication, to be more visible in the app. Mobile traffic was already rising, and many visits came from social posts. We brought articles into the new app to give athletes a reason to return between races and help Webrun reach readers. The integration also gave Webrun a place to promote offers and events inside the app."
      },
      {
        "eyebrow": "WEBRUN AUDIENCE",
        "title": "How we tracked readership",
        "text": "Webrun articles received 50% more views than in the previous year. We used that figure to track readership. Social media also brought in readers, so the annual comparison cannot isolate the app’s contribution.",
        "metrics": [
          {
            "value": "+50%",
            "label": "article views",
            "note": "Compared with the year before the in-app feature."
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
      },
      {
        "eyebrow": "DELIVERY AND NEXT STEPS",
        "title": "Purchases and content delivered.\nAn ecosystem as the direction.",
        "text": "We delivered the app with the web purchase journey and WEBRUN blog. Visual adjustments, full ecosystem integration and evaluating incorporation into the Ingresse app remained future possibilities. The app had over 1 million cumulative downloads: product scale, not active users or acquisition generated by the relaunch."
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
    "metaDescription": "Cómo ampliamos la oferta de inscripciones en la app y medimos el retorno de los deportistas después del lanzamiento.",
    "eyebrow": "03 / APP DEL ATLETA · MOBILE",
    "title": "Unificar la compra.\nAmpliar la experiencia.",
    "introduction": "Aproximadamente tres de cada diez eventos quedaban fuera de la app, a veces más según el calendario de cada organizador. Por ejemplo, las parejas podían inscribirse en la web, pero la app no admitía esa modalidad. Acordé con el CTO reutilizar el proceso de compra web. En cuatro meses, esas inscripciones también estaban disponibles en la app.",
    "sections": [
      {
        "eyebrow": "EL PROBLEMA",
        "title": "Mantenimiento limitado.\nLa experiencia del atleta en riesgo.",
        "text": "Las experiencias móviles representaban más del 80% de las compras, pero el equipo no dominaba MAUI, la tecnología anterior. Esto limitaba mejoras propuestas por Marketing, Comercial y operaciones. Algunas modalidades debían ocultarse del calendario porque la app no admitía sus procesos de inscripción."
      },
      {
        "eyebrow": "DECISIÓN DE PRODUCTO",
        "title": "Reutilizar la compra web.\nAmpliar la cobertura de eventos.",
        "text": "Valoramos reconstruir toda la inscripción dentro de la app, pero los plazos, el trabajo de UX/UI y la falta de mapeo de todas las modalidades hacían inviable ese alcance. Acordé con el CTO reutilizar el proceso web de inscripción dentro de la app. La decisión redujo la reconstrucción de flujos y permitió ofrecer todas las modalidades. Etiquetamos las compras según su origen para distinguir las de la app de las realizadas desde un ordenador. El panel permitía seguir las compras por canal y compararlas con el año anterior mientras ampliábamos el catálogo y revisábamos los errores que afectaban a los deportistas."
      },
      {
        "eyebrow": "LA BASE DEL PRODUCTO",
        "title": "Cambiar la base técnica\npara permitir la evolución.",
        "text": "La experiencia también dependía de la capacidad de mantenimiento. Pocas personas del equipo conocían .NET MAUI y resultaba difícil implementar mejoras. El paso a React Native respondió a esa restricción de conocimiento e implementación. La base técnica estaba vinculada a la continuidad del producto: corregir problemas y facilitar nuevas entregas."
      },
      {
        "eyebrow": "MI CONTRIBUCIÓN COMO PM",
        "title": "Decidir con UX e ingeniería.\nLiderar hasta la publicación.",
        "text": "Entrevisté a organizadores y deportistas y analicé quejas de App Store y Google Play. Investigamos la presentación de eventos, la edición del perfil, el acceso al comprobante de inscripción y la escasa utilidad después de una carrera. Convertí los hallazgos en requisitos y prioridades y acompañé refinamientos técnicos y publicación en las tiendas.",
        "items": [
          {
            "title": "1 desarrollador dedicado",
            "text": "Otros 3 apoyaban las integraciones con el sistema heredado, origen de los datos de eventos."
          },
          {
            "title": "4 meses",
            "text": "Desde la conversación inicial hasta la publicación en las tiendas."
          }
        ]
      },
      {
        "eyebrow": "COMPORTAMIENTO DE LOS DEPORTISTAS",
        "title": "¿Volvían los deportistas a explorar otros eventos?",
        "text": "En PostHog crucé el identificador de cada visitante con las URL que abría y las fechas de visita. Así distinguíamos la navegación por varias páginas en una visita del regreso en otra fecha. Frente al año anterior, observamos que los visitantes volvían más veces. Cuando un deportista consultaba otro evento, surgía una oportunidad para presentarle su próxima carrera. La intención de compra y el efecto en el GMV quedaron abiertos."
      },
      {
        "eyebrow": "DECISIÓN DE PRODUCTO",
        "title": "¿Por qué integrar Webrun en la app?",
        "text": "La dirección quería dar visibilidad en la app a Webrun, el medio deportivo del grupo. Ya observábamos un aumento del tráfico móvil y muchas visitas llegaban desde publicaciones en redes sociales. Integramos los artículos en la nueva app para dar a los deportistas un motivo para volver entre carreras y acercar lectores a Webrun. La integración también abrió un espacio para difundir promociones y eventos desde la app."
      },
      {
        "eyebrow": "AUDIENCIA DE WEBRUN",
        "title": "Cómo seguimos el alcance del contenido",
        "text": "Los artículos de Webrun recibieron un 50 % más de visualizaciones que el año anterior. Usamos ese dato para seguir la evolución de la audiencia. Las redes sociales también atraían lectores, por lo que la comparación anual no permite aislar el efecto de la app.",
        "metrics": [
          {
            "value": "+50%",
            "label": "visualizaciones de artículos",
            "note": "Comparación con el año anterior a la funcionalidad en la app."
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
      },
      {
        "eyebrow": "ENTREGA Y PRÓXIMOS PASOS",
        "title": "Compra y contenido entregados.\nEl ecosistema como dirección.",
        "text": "Entregamos la app con el proceso web de compra y el blog de WEBRUN. Los ajustes visuales, la integración completa del ecosistema y la posible incorporación a la app Ingresse quedaron como posibilidades futuras. La app tenía más de 1 millón de descargas acumuladas: escala del producto, no usuarios activos ni adquisiciones generadas por el relanzamiento."
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

