export type AppCaseCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  introduction: string;
  sections: readonly { eyebrow: string; title: string; text: string; items?: readonly { title: string; text: string }[]; metrics?: readonly { value: string; label: string; note: string }[] }[];
};

export const checkInCase = {
  "pt": {
    "metaTitle": "App de Check-in — Yago Jesus",
    "metaDescription": "Um app para entrega de kits esportivos por QR Code ou CPF, com operação online e offline e sincronização posterior.",
    "eyebrow": "02 / OPERAÇÃO · EXPERIÊNCIA",
    "title": "A entrega de kits.\nNa palma da mão.",
    "introduction": "Transformar uma operação dependente de notebook, acesso ao SaaS e internet em uma experiência móvel dedicada à retirada de kits.",
    "sections": [
      {
        "eyebrow": "O PROBLEMA",
        "title": "Entregar um kit exigia\nmontar uma operação.",
        "text": "A demanda veio de um cliente: para realizar o check-in e entregar os kits, ele precisava organizar um aparato com cronometragem, internet e espaço para notebooks acessarem o sistema. Uma tarefa no local do evento exigia passar pelo SaaS e por uma estrutura que tornava a operação mais trabalhosa."
      },
      {
        "eyebrow": "A PROPOSTA DE PRODUTO",
        "title": "Uma ferramenta dedicada\na quem faz a entrega.",
        "text": "Como time, propusemos um aplicativo específico para essa operação. A proposta também fazia parte de um contrato com um cliente estratégico: responder a uma necessidade concreta e demonstrar atenção à sua realidade. A intenção era permitir que uma pessoa da equipe encontrasse rapidamente o que cada atleta precisava retirar e registrasse a entrega pelo celular."
      },
      {
        "eyebrow": "MINHA ATUAÇÃO COMO PM",
        "title": "Da iniciativa\nà publicação.",
        "text": "Conduzi a iniciativa e as decisões de produto, escrevi as user stories e validei o design com UX. Fiz entrevistas e apresentações com o cliente, coletei feedback e alinhei o trabalho com o time. Acompanhei a execução e a publicação nas lojas. Minha responsabilidade atravessava o ciclo de produto; a construção e a entrega foram realizadas em conjunto com o time."
      },
      {
        "eyebrow": "A JORNADA",
        "title": "Encontrar o atleta.\nConferir e entregar.",
        "text": "O app permitia escanear o QR Code do protocolo ou buscar pelo CPF para consultar o kit e os itens associados à retirada. O foco era levar as informações necessárias para a mão de quem estava atendendo, em uma jornada própria para a entrega de kits."
      },
      {
        "eyebrow": "CONTINUIDADE DA OPERAÇÃO",
        "title": "A conexão podia cair.\nA entrega precisava continuar.",
        "text": "O aplicativo contemplava os dois cenários: com internet, as entregas atualizavam o sistema em tempo real; sem conexão, a equipe continuava registrando as retiradas. Quando o dispositivo voltava a uma rede, os registros eram enviados automaticamente ao sistema.",
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
        "eyebrow": "A LEITURA DE PRODUTO",
        "title": "A operação define\na experiência.",
        "text": "Este projeto partiu de uma necessidade que aparecia no trabalho do cliente. A experiência precisava funcionar onde a retirada acontecia, inclusive com conectividade instável. A proposta de valor estava em concentrar a consulta e o registro da entrega no celular, sem depender de acesso contínuo à internet."
      }
    ]
  },
  "en": {
    "metaTitle": "Check-in App — Yago Jesus",
    "metaDescription": "A mobile app for sports kit pickup using QR codes or CPF, supporting online and offline operation and subsequent synchronization.",
    "eyebrow": "02 / OPERATIONS · EXPERIENCE",
    "title": "Kit pickup.\nIn the palm of your hand.",
    "introduction": "Turning an operation dependent on laptops, SaaS access and internet into a dedicated mobile experience for kit pickup.",
    "sections": [
      {
        "eyebrow": "THE PROBLEM",
        "title": "Handing out a kit meant\nsetting up an operation.",
        "text": "The request came from a client: checking athletes in and handing out kits required coordinating timing services, internet access and space for laptops to access the system. An on-site task depended on the SaaS platform and an operational setup that made it cumbersome."
      },
      {
        "eyebrow": "THE PRODUCT PROPOSAL",
        "title": "A dedicated tool\nfor the pickup team.",
        "text": "As a team, we proposed an app specifically for this operation. The proposal was also part of a contract with a strategic client: addressing a concrete need and demonstrating attention to their situation. The aim was to let a team member quickly find what each athlete needed to collect and record the handover on a phone."
      },
      {
        "eyebrow": "MY CONTRIBUTION AS PM",
        "title": "From initiative\nto publication.",
        "text": "I led the initiative and product decisions, wrote user stories and validated the design with UX. I conducted client interviews and presentations, collected feedback and aligned the work with the team. I followed delivery through to publication in the stores. My responsibility spanned the product lifecycle; implementation and delivery were carried out together with the team."
      },
      {
        "eyebrow": "THE JOURNEY",
        "title": "Find the athlete.\nCheck and hand over.",
        "text": "The app supported scanning the protocol QR code or searching by CPF (Brazilian tax ID) to consult the kit and associated pickup items. The focus was to put the necessary information in the hands of the person serving the athlete, through a dedicated kit-pickup journey."
      },
      {
        "eyebrow": "OPERATIONAL CONTINUITY",
        "title": "The connection could drop.\nPickup had to continue.",
        "text": "The app supported both scenarios: with internet, handovers updated the system in real time; without a connection, the team continued recording pickups. When the device reconnected to a network, the records were automatically sent to the system.",
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
        "eyebrow": "THE PRODUCT PERSPECTIVE",
        "title": "The operation shapes\nthe experience.",
        "text": "This project started with a need in the client’s daily work. The experience had to function where pickup took place, including with unstable connectivity. Its value proposition was to bring lookup and handover records onto a phone without requiring continuous internet access."
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
    "introduction": "Da dificuldade de manutenção em .NET MAUI a um app em React Native entregue em produção, com jornada de compra unificada, conteúdo Webrun e avaliações que chegaram a 4,5 nas duas lojas.",
    "sections": [
      {
        "eyebrow": "O PROBLEMA",
        "title": "A manutenção se tornou\num limite para o produto.",
        "text": "Poucas pessoas do time dominavam .NET MAUI, e implementar novidades era trabalhoso no contexto da equipe. Com a dificuldade de manutenção, os bugs se acumulavam e afetavam a percepção da plataforma de compra. O desafio envolvia tanto a capacidade de evoluir o produto quanto a experiência e a reputação da marca."
      },
      {
        "eyebrow": "MINHA ATUAÇÃO COMO PM",
        "title": "Da iniciativa\nà publicação.",
        "text": "Conduzi a iniciativa e as decisões de produto, escrevi as user stories e validei o design com UX. Fiz entrevistas e apresentações com o cliente, coletei feedback e alinhei o trabalho com o time. Acompanhei a execução e a publicação nas lojas. Minha responsabilidade atravessava o ciclo de produto; a construção e a entrega foram realizadas em conjunto com o time."
      },
      {
        "eyebrow": "A EVOLUÇÃO DA BASE",
        "title": ".NET MAUI → React Native.",
        "text": "A iniciativa de migração para React Native respondia às limitações de conhecimento disponível e de implementação que enfrentávamos com a base anterior. A escolha precisava servir à evolução do produto e à capacidade de sustentá-lo. Essas eram restrições daquele projeto e daquele time, sem pressupor que uma tecnologia resolve, por si só, problemas de manutenção."
      },
      {
        "eyebrow": "UMA DECISÃO MINHA",
        "title": "Uma jornada de compra.\nMais eventos no aplicativo.",
        "text": "Decidi concentrar as compras em uma jornada web dentro do aplicativo, em vez de criar várias interfaces de compra diferentes. No app anterior, precisávamos selecionar quais eventos poderiam aparecer: alguns não eram suportados pela experiência e geravam problemas. A nova abordagem permitiu que mais eventos transitassem pelo app, com as compras passando por um ponto único."
      },
      {
        "eyebrow": "O ECOSSISTEMA",
        "title": "Da compra ao conteúdo\nesportivo.",
        "text": "Também trabalhamos para trazer outras marcas da empresa para dentro do aplicativo. Implementamos um blog que consumia o conteúdo de jornalismo esportivo da Webrun. O objetivo era apresentar a Ticket Sports como parte de um conjunto de marcas e começar a nutrir a relação do atleta com esse ecossistema.",
        "items": [
          {
            "title": "Marketplace esportivo",
            "text": "A visão para a experiência do atleta no aplicativo."
          },
          {
            "title": "Conteúdo Webrun",
            "text": "Integração do blog com o jornalismo esportivo de outra marca do grupo."
          },
          {
            "title": "Conexão entre marcas",
            "text": "Objetivo de ampliar o contato do atleta com o ecossistema da empresa."
          }
        ]
      },
      {
        "eyebrow": "RESULTADOS EM PRODUÇÃO",
        "title": "Uma experiência melhor,\npercebida pelos clientes.",
        "text": "O app em React Native e o blog Webrun foram entregues e estão em produção. Recebemos feedback direto de clientes de que a experiência havia melhorado muito. As notas anteriores nas lojas estavam entre 3,1 e 3,5 e, com a evolução, chegaram a 4,5 tanto na Apple quanto no Android. Esses são resultados do produto e do trabalho do time. A referência anterior era uma versão que estava há mais de um ano sem atualização, acompanhada no período de 2024/2025.",
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
        "items": [
          {
            "title": "Retenção",
            "text": "Aumento observado no acompanhamento do uso do aplicativo."
          },
          {
            "title": "Conteúdo e anúncios",
            "text": "Mais visualizações das matérias do blog e maior consumo dos anúncios exibidos junto ao conteúdo."
          },
          {
            "title": "Catálogo de eventos",
            "text": "Mais eventos passaram a transitar pelo aplicativo, superando restrições da experiência anterior."
          }
        ]
      },
      {
        "eyebrow": "A LEITURA DE PRODUTO",
        "title": "Tecnologia como meio.\nExperiência como direção.",
        "text": "A evolução conectou a capacidade de manutenção do time à experiência de quem compra. Minha decisão de unificar as compras e a entrega conjunta de uma nova base e de conteúdo esportivo ampliaram o escopo do aplicativo. O feedback dos clientes e as avaliações das lojas mostram a percepção dessa experiência, enquanto retenção e consumo de conteúdo ajudam a acompanhar a relação do atleta com o produto."
      }
    ]
  },
  "en": {
    "metaTitle": "Athlete App — Yago Jesus",
    "metaDescription": "The Athlete App in React Native: a unified purchase journey, Webrun integration and store ratings improving to 4.5 on Apple and Android.",
    "eyebrow": "03 / MOBILE · EVOLUTION",
    "title": "Beyond maintaining an app.\nEvolving the experience.",
    "introduction": "From .NET MAUI maintenance constraints to a React Native app delivered to production, with a unified purchase journey, Webrun content and ratings reaching 4.5 in both stores.",
    "sections": [
      {
        "eyebrow": "THE PROBLEM",
        "title": "Maintenance became\na product constraint.",
        "text": "Few team members knew .NET MAUI, and implementing new capabilities was cumbersome in that team’s context. With maintenance becoming difficult, bugs accumulated and affected perceptions of the purchasing platform. The challenge concerned both the ability to evolve the product and the experience and reputation of the brand."
      },
      {
        "eyebrow": "MY CONTRIBUTION AS PM",
        "title": "From initiative\nto publication.",
        "text": "I led the initiative and product decisions, wrote user stories and validated the design with UX. I conducted client interviews and presentations, collected feedback and aligned the work with the team. I followed delivery through to publication in the stores. My responsibility spanned the product lifecycle; implementation and delivery were carried out together with the team."
      },
      {
        "eyebrow": "EVOLVING THE FOUNDATION",
        "title": ".NET MAUI → React Native.",
        "text": "The migration initiative to React Native addressed the knowledge and implementation constraints we faced with the previous foundation. The choice had to support product evolution and the team’s ability to maintain it. These were constraints of that project and team; technology alone does not resolve maintenance problems."
      },
      {
        "eyebrow": "A DECISION I MADE",
        "title": "One purchase journey.\nMore events in the app.",
        "text": "I decided to consolidate purchases into a web-based journey inside the app, rather than build multiple different purchase interfaces. In the previous app, we had to select which events could appear: some were not supported by the experience and caused problems. The new approach allowed more events to be offered through the app, with purchases going through a single point."
      },
      {
        "eyebrow": "THE ECOSYSTEM",
        "title": "From purchasing to\nsports content.",
        "text": "We also worked to bring other company brands into the app. We implemented a blog consuming sports journalism content from Webrun. The aim was to present Ticket Sports as part of a group of brands and begin nurturing the athlete’s relationship with that ecosystem.",
        "items": [
          {
            "title": "Sports marketplace",
            "text": "The vision for the athlete’s experience in the app."
          },
          {
            "title": "Webrun content",
            "text": "Blog integration with sports journalism from another brand in the group."
          },
          {
            "title": "Connected brands",
            "text": "The goal of broadening the athlete’s contact with the company’s ecosystem."
          }
        ]
      },
      {
        "eyebrow": "RESULTS IN PRODUCTION",
        "title": "An improved experience,\nrecognized by clients.",
        "text": "The React Native app and Webrun blog were delivered and are in production. Direct client feedback described a much improved experience. Previous store ratings ranged from 3.1 to 3.5 and, following the evolution, reached 4.5 on both Apple and Android. These are outcomes of the product and the team’s work. The earlier reference was a version that had gone more than a year without an update, monitored during 2024/2025.",
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
        "items": [
          {
            "title": "Retention",
            "text": "An increase observed while monitoring app usage."
          },
          {
            "title": "Content and ads",
            "text": "More blog article views and greater consumption of the ads displayed alongside that content."
          },
          {
            "title": "Event catalog",
            "text": "More events could be offered through the app, overcoming restrictions of the previous experience."
          }
        ]
      },
      {
        "eyebrow": "THE PRODUCT PERSPECTIVE",
        "title": "Technology as a means.\nExperience as the direction.",
        "text": "The evolution connected the team’s ability to maintain the app with the buyer’s experience. My decision to unify purchases and the team’s delivery of a new foundation and sports content expanded the app’s scope. Client feedback and store ratings reflect perceptions of that experience, while retention and content consumption help track the athlete’s relationship with the product."
      }
    ]
  }
} as const;
