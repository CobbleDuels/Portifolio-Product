export const websitePath = "/projects/evolucao-site";

export const websiteCase = {
  pt: {
    metaTitle: "Evolução do site legado — Yago Jesus",
    metaDescription: "Melhoria do site legado, acompanhamento com PostHog e resultados de acessos e retenção.",
    eyebrow: "EVOLUÇÃO DO SITE",
    title: "Melhorar o site.\nAcompanhar a experiência.",
    introduction: "Evolução da experiência do site legado, com acompanhamento de acessos e retenção.",
    text: "Instalamos o PostHog no site para acompanhar acessos e retenção. Os indicadores abaixo se referem ao lançamento e às primeiras semanas dessa evolução do site.",
    note: "Resultados medidos e apurados já na Ingresse. São indicadores do projeto, sem atribuição individual de impacto.",
    comparisonTitle: "Sobre a comparação",
    comparisonText: "O crescimento de acessos tem 2025 como referência. A janela exata da comparação de acessos e a coorte de retenção ainda não estão detalhadas neste relato.",
    metrics: [
      { value: ">500 mil", label: "acessos na semana de lançamento", note: "Volume registrado no site novo nessa semana." },
      { value: "+30%", label: "de acessos em relação a 2025", note: "Crescimento observado nas primeiras semanas do site novo." },
      { value: "+10%", label: "na retenção", note: "Aumento de retenção observado no acompanhamento com PostHog." },
    ],
  },
  en: {
    metaTitle: "Improving the legacy website — Yago Jesus",
    metaDescription: "Legacy website improvements, PostHog tracking and access and retention results.",
    eyebrow: "WEBSITE IMPROVEMENT",
    title: "Improve the site.\nTrack the experience.",
    introduction: "Improving the legacy website experience, with access and retention tracking.",
    text: "We installed PostHog on the site to track accesses and retention. The indicators below refer to the launch and first weeks of this website improvement.",
    note: "Indicators measured and consolidated at Ingresse. These are project results, without attributing impact to an individual.",
    comparisonTitle: "About the comparison",
    comparisonText: "Access growth uses 2025 as its reference. The exact access comparison window and retention cohort are not yet detailed in this account.",
    metrics: [
      { value: ">500k", label: "site accesses during launch week", note: "Volume recorded on the new site during that week." },
      { value: "+30%", label: "in accesses compared with 2025", note: "Growth observed during the first weeks of the new site." },
      { value: "+10%", label: "in retention", note: "Retention increase observed through tracking with PostHog." },
    ],
  },
} as const;
