export type AppCaseCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  introduction: string;
  sections: readonly { eyebrow: string; title: string; text: string; items?: readonly { title: string; text: string }[] }[];
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
    "metaDescription": "Da limitação de manutenção em .NET MAUI à evolução em React Native, com visão de marketplace esportivo e integração de conteúdo Webrun.",
    "eyebrow": "03 / MOBILE · EVOLUÇÃO",
    "title": "Mais que manter um app.\nEvoluir a experiência.",
    "introduction": "Uma iniciativa para enfrentar as limitações de manutenção em .NET MAUI e desenvolver a visão de um marketplace esportivo em React Native, conectado ao ecossistema de marcas da empresa.",
    "sections": [
      {
        "eyebrow": "O PROBLEMA",
        "title": "A manutenção se tornou\num limite para o produto.",
        "text": "Poucas pessoas do time dominavam .NET MAUI, e implementar novidades era trabalhoso no contexto da equipe. Com a dificuldade de manutenção, os bugs se acumulavam e afetavam a percepção da plataforma de compra. O desafio envolvia tanto a capacidade de evoluir o produto quanto a experiência e a reputação da marca."
      },
      {
        "eyebrow": "MINHA ATUAÇÃO",
        "title": "Assumir a evolução.\nDar direção ao produto.",
        "text": "Assumi o projeto com a ambição de construir uma experiência de marketplace esportivo na palma da mão. A mudança de tecnologia fazia parte desse caminho: buscávamos uma base que permitisse ao time trabalhar melhor nas melhorias e nos ajustes, em vez de deixar a dificuldade de manutenção limitar o produto."
      },
      {
        "eyebrow": "A EVOLUÇÃO DA BASE",
        "title": ".NET MAUI → React Native.",
        "text": "A iniciativa de migração para React Native respondia às limitações de conhecimento disponível e de implementação que enfrentávamos com a base anterior. A escolha precisava servir à evolução do produto e à capacidade de sustentá-lo. Essas eram restrições daquele projeto e daquele time, sem pressupor que uma tecnologia resolve, por si só, problemas de manutenção."
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
        "eyebrow": "A LEITURA DE PRODUTO",
        "title": "Tecnologia como meio.\nExperiência como direção.",
        "text": "A iniciativa conectava uma restrição interna — a dificuldade de manter e evoluir o app — a uma preocupação externa: a confiança na plataforma de compra. A visão de produto incluía uma nova base tecnológica e a aproximação com conteúdo e outras marcas. Redução de bugs, melhoria de reputação e maior engajamento eram objetivos, sem resultados quantitativos atribuídos a esta iniciativa neste relato."
      }
    ]
  },
  "en": {
    "metaTitle": "Athlete App — Yago Jesus",
    "metaDescription": "From .NET MAUI maintenance constraints to a React Native initiative, with a sports marketplace vision and Webrun content integration.",
    "eyebrow": "03 / MOBILE · EVOLUTION",
    "title": "Beyond maintaining an app.\nEvolving the experience.",
    "introduction": "An initiative to address .NET MAUI maintenance constraints and develop a sports marketplace vision in React Native, connected to the company’s brand ecosystem.",
    "sections": [
      {
        "eyebrow": "THE PROBLEM",
        "title": "Maintenance became\na product constraint.",
        "text": "Few team members knew .NET MAUI, and implementing new capabilities was cumbersome in that team’s context. With maintenance becoming difficult, bugs accumulated and affected perceptions of the purchasing platform. The challenge concerned both the ability to evolve the product and the experience and reputation of the brand."
      },
      {
        "eyebrow": "MY CONTRIBUTION",
        "title": "Take on the evolution.\nGive the product direction.",
        "text": "I took on the project with the ambition of building a sports marketplace experience in the palm of the athlete’s hand. Changing technology was part of that direction: we sought a foundation that would let the team work more effectively on improvements and fixes, rather than allowing maintenance difficulties to constrain the product."
      },
      {
        "eyebrow": "EVOLVING THE FOUNDATION",
        "title": ".NET MAUI → React Native.",
        "text": "The migration initiative to React Native addressed the knowledge and implementation constraints we faced with the previous foundation. The choice had to support product evolution and the team’s ability to maintain it. These were constraints of that project and team; technology alone does not resolve maintenance problems."
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
        "eyebrow": "THE PRODUCT PERSPECTIVE",
        "title": "Technology as a means.\nExperience as the direction.",
        "text": "The initiative connected an internal constraint — difficulty maintaining and evolving the app — with an external concern: trust in the purchasing platform. The product vision included a new technical foundation and closer connections with content and other brands. Fewer bugs, improved reputation and greater engagement were goals, with no quantitative results attributed to this initiative in this account."
      }
    ]
  }
} as const;
