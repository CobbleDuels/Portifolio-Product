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
    "introduction": "Conduzi o desenvolvimento de um app dedicado à entrega de kits, da demanda de um cliente estratégico à publicação. O time levou a operação para o celular, com consulta por QR Code ou CPF e continuidade mesmo sem internet.",
    "sections": [
      {
        "eyebrow": "O PROBLEMA",
        "title": "Entregar um kit exigia\nmontar uma operação.",
        "text": "Um cliente precisava montar uma estrutura com cronometragem, internet e notebooks acessando o SaaS para entregar kits. O problema estava no esforço necessário para executar a retirada no local: uma tarefa recorrente dependia de um aparato operacional e de conectividade."
      },
      {
        "eyebrow": "A PROPOSTA DE PRODUTO",
        "title": "Uma ferramenta dedicada\na quem faz a entrega.",
        "text": "Transformamos essa demanda em um aplicativo específico para a equipe de retirada. A proposta também fazia parte de um contrato com um cliente estratégico. O objetivo era responder a uma necessidade real do organizador e permitir que quem estivesse no atendimento consultasse os itens e registrasse a entrega pelo celular."
      },
      {
        "eyebrow": "MINHA ATUAÇÃO COMO PM",
        "title": "Da iniciativa\nà publicação.",
        "text": "Conduzi o ciclo de produto da iniciativa à publicação nas lojas. Defini as decisões de produto e as user stories, validei o design com UX e fiz entrevistas e apresentações com o cliente. Coletei feedback, alinhei o trabalho com o time e acompanhei a execução até a entrega. O desenvolvimento foi realizado em conjunto com a equipe."
      },
      {
        "eyebrow": "A JORNADA",
        "title": "Encontrar o atleta.\nConferir e entregar.",
        "text": "A equipe podia escanear o QR Code do protocolo ou pesquisar pelo CPF para consultar o kit e os itens da retirada. A jornada reunia as informações necessárias para conferir o que seria entregue e registrar a retirada no próprio celular."
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
        "text": "A continuidade sem internet era central à proposta de valor. A experiência precisava acompanhar a realidade do local de retirada, permitindo ao organizador consultar e registrar kits mesmo com conectividade instável. O projeto mostra como uma demanda de cliente pode orientar um produto dedicado à operação."
      }
    ]
  },
  "en": {
    "metaTitle": "Check-in App — Yago Jesus",
    "metaDescription": "A mobile app for sports kit pickup using QR codes or CPF, supporting online and offline operation and subsequent synchronization.",
    "eyebrow": "02 / OPERATIONS · EXPERIENCE",
    "title": "Kit pickup.\nIn the palm of your hand.",
    "introduction": "I led development of a dedicated kit-pickup app from a strategic client’s request through store publication. The team brought the operation onto a phone, with QR-code or CPF lookup and continuity without internet.",
    "sections": [
      {
        "eyebrow": "THE PROBLEM",
        "title": "Handing out a kit meant\nsetting up an operation.",
        "text": "A client needed timing services, internet access and laptops running the SaaS platform to hand out kits. The problem was the effort required to run pickup on site: a recurring task depended on an operational setup and connectivity."
      },
      {
        "eyebrow": "THE PRODUCT PROPOSAL",
        "title": "A dedicated tool\nfor the pickup team.",
        "text": "We turned that request into an app dedicated to the pickup team. The proposal was also part of a contract with a strategic client. The aim was to address a real organizer need and let the person serving an athlete look up the items and record the handover on a phone."
      },
      {
        "eyebrow": "MY CONTRIBUTION AS PM",
        "title": "From initiative\nto publication.",
        "text": "I led the product lifecycle from initiative through store publication. I drove product decisions and user stories, validated designs with UX and conducted client interviews and presentations. I collected feedback, aligned the team and followed execution through delivery. Development was carried out together with the team."
      },
      {
        "eyebrow": "THE JOURNEY",
        "title": "Find the athlete.\nCheck and hand over.",
        "text": "The team could scan the protocol QR code or search by CPF (Brazilian tax ID) to consult the kit and pickup items. The journey brought together the information needed to check what should be handed over and record pickup on the phone."
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
        "text": "Offline continuity was central to the value proposition. The experience had to fit the pickup location, allowing the organizer to look up and record kits with unstable connectivity. The project shows how a client request can shape a product dedicated to operations."
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
        "text": "Conduzi o ciclo de produto da iniciativa à publicação nas lojas. Defini as decisões de produto e as user stories, validei o design com UX e fiz entrevistas e apresentações com o cliente. Coletei feedback, alinhei o trabalho com o time e acompanhei a execução até a entrega. O desenvolvimento foi realizado em conjunto com a equipe."
      },
      {
        "eyebrow": "A EVOLUÇÃO DA BASE",
        "title": ".NET MAUI → React Native.",
        "text": "A migração para React Native respondeu às restrições de conhecimento disponível e de implementação que enfrentávamos com .NET MAUI. O critério de produto era dar ao time uma base para sustentar a manutenção, os ajustes e a evolução da experiência do atleta."
      },
      {
        "eyebrow": "UMA DECISÃO MINHA",
        "title": "Uma jornada de compra.\nMais eventos no aplicativo.",
        "text": "Defini a unificação das compras em uma jornada web dentro do aplicativo. Isso evitava criar várias interfaces de compra diferentes e permitia ampliar os eventos suportados. Antes, precisávamos selecionar quais eventos poderiam aparecer no app, porque alguns não eram compatíveis com a experiência e geravam problemas."
      },
      {
        "eyebrow": "O ECOSSISTEMA",
        "title": "Da compra ao conteúdo\nesportivo.",
        "text": "Conectamos conteúdo e marketplace ao integrar um blog com o jornalismo esportivo da Webrun, outra marca do grupo. A iniciativa buscava ampliar o contato do atleta com as marcas da empresa e criar mais motivos para usar o app além da compra de inscrições.",
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
        "text": "O projeto reuniu três frentes: uma base que o time pudesse evoluir, uma jornada de compra capaz de suportar mais eventos e conteúdo esportivo para ampliar a relação com o atleta. Meu papel foi conectar essas decisões e conduzir a entrega com o time. As avaliações e o feedback dos clientes trouxeram evidências da experiência percebida após a evolução."
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
        "text": "I led the product lifecycle from initiative through store publication. I drove product decisions and user stories, validated designs with UX and conducted client interviews and presentations. I collected feedback, aligned the team and followed execution through delivery. Development was carried out together with the team."
      },
      {
        "eyebrow": "EVOLVING THE FOUNDATION",
        "title": ".NET MAUI → React Native.",
        "text": "The move to React Native addressed the knowledge and implementation constraints we faced with .NET MAUI. The product criterion was to give the team a foundation for maintenance, fixes and continued evolution of the athlete experience."
      },
      {
        "eyebrow": "A DECISION I MADE",
        "title": "One purchase journey.\nMore events in the app.",
        "text": "I defined a unified web-based purchase journey inside the app. This avoided building multiple purchase interfaces and allowed us to support more events. Previously, we had to select which events could appear in the app because some were incompatible with the experience and caused problems."
      },
      {
        "eyebrow": "THE ECOSYSTEM",
        "title": "From purchasing to\nsports content.",
        "text": "We connected content and marketplace by integrating a blog with sports journalism from Webrun, another brand in the group. The initiative aimed to broaden athletes’ contact with the company’s brands and give them more reasons to use the app beyond buying event registrations.",
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
        "text": "The project brought together three areas: a foundation the team could evolve, a purchase journey supporting more events and sports content to broaden the relationship with athletes. My role was to connect those decisions and lead delivery with the team. Store ratings and client feedback provided evidence of the perceived experience after the changes."
      }
    ]
  }
} as const;
