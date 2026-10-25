export const websitePath = "/projects/evolucao-site";

export const websiteCase = {
  pt: {
    metaTitle: "Evolução do site legado — Yago Jesus",
    metaDescription: "Evolução do site legado com PostHog: mais de 500 mil acessos na semana de lançamento e acompanhamento de crescimento e retenção.",
    eyebrow: "EVOLUÇÃO DO SITE",
    title: "Evoluir a experiência.\nMedir o comportamento.",
    introduction: "Melhoria do site legado com mais de 500 mil acessos na semana de lançamento e acompanhamento de acessos e retenção com PostHog.",
    text: "Instalamos o PostHog para acompanhar como o público acessava e retornava ao site. A evolução passou a contar com dados de lançamento e das primeiras semanas, com crescimento de acessos em relação a 2025 e aumento de retenção observado.",
    note: "Resultados do projeto medidos e apurados já na Ingresse.",
    comparisonTitle: "Sobre a comparação",
    comparisonText: "Os +30% de acessos usam 2025 como referência. Os +10% representam aumento de retenção. A janela exata do comparativo de acessos e a coorte de retenção não estão detalhadas neste relato.",
    metrics: [
      { value: ">500 mil", label: "acessos na semana de lançamento", note: "Volume registrado no site novo nessa semana." },
      { value: "+30%", label: "de acessos em relação a 2025", note: "Crescimento observado nas primeiras semanas do site novo." },
      { value: "+10%", label: "na retenção", note: "Aumento de retenção observado no acompanhamento com PostHog." },
    ],
  },
  en: {
    metaTitle: "Improving the legacy website — Yago Jesus",
    metaDescription: "Legacy website improvements tracked with PostHog: over 500,000 accesses in launch week, with growth and retention monitoring.",
    eyebrow: "WEBSITE IMPROVEMENT",
    title: "Evolve the experience.\nMeasure user behavior.",
    introduction: "Legacy website improvements with more than 500,000 accesses in launch week and PostHog tracking for accesses and retention.",
    text: "We installed PostHog to track how people accessed and returned to the site. The initiative gained launch and early-week data, showing access growth compared with 2025 and an observed increase in retention.",
    note: "Project results measured and consolidated at Ingresse.",
    comparisonTitle: "About the comparison",
    comparisonText: "The 30% increase in accesses uses 2025 as its reference. The 10% figure represents an increase in retention. The exact access comparison window and retention cohort are not detailed in this account.",
    metrics: [
      { value: ">500k", label: "site accesses during launch week", note: "Volume recorded on the new site during that week." },
      { value: "+30%", label: "in accesses compared with 2025", note: "Growth observed during the first weeks of the new site." },
      { value: "+10%", label: "in retention", note: "Retention increase observed through tracking with PostHog." },
    ],
  },
} as const;
