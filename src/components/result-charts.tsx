import type { Language } from "@/content/home";

const labels = {
  pt: {
    ratingTitle: "Avaliações do App do Atleta",
    scale: "Escala de 0 a 5",
    before: "Antes · faixa",
    after: "Depois",
    ratingNote: "As notas anteriores variavam entre 3,1 e 3,5 nas lojas. Após a evolução, ambas chegaram a 4,5.",
    growthTitle: "Crescimento observado no site",
    growthScale: "Variação relativa (%)",
    accesses: "Acessos",
    retention: "Retenção",
    growthNote: "Nas primeiras semanas do site novo, os acessos cresceram 30% em relação a 2025. O acompanhamento com PostHog também registrou aumento de 10% na retenção.",
  },
  en: {
    ratingTitle: "Athlete App store ratings",
    scale: "Scale from 0 to 5",
    before: "Before · range",
    after: "After",
    ratingNote: "Previous store ratings ranged from 3.1 to 3.5. Following the changes, both stores reached 4.5.",
    growthTitle: "Observed website growth",
    growthScale: "Relative change (%)",
    accesses: "Accesses",
    retention: "Retention",
    growthNote: "During the new website’s first weeks, accesses grew 30% compared with 2025. PostHog tracking also recorded a 10% increase in retention.",
  },
} as const;

export function RatingsChart({ lang, compact = false }: { lang: Language; compact?: boolean }) {
  const copy = labels[lang];
  return <figure className={`result-chart${compact ? " result-chart-compact" : ""}`}>
    <figcaption className="chart-heading"><span>{copy.ratingTitle}</span><span className="chart-scale">{copy.scale}</span></figcaption>
    <div className="chart-row"><span className="chart-label">{copy.before}</span><div className="chart-track" aria-hidden="true"><span className="rating-before" /><span className="rating-range" /></div><span className="chart-value">{lang === "pt" ? "3,1–3,5" : "3.1–3.5"}</span></div>
    <div className="chart-row"><span className="chart-label">{copy.after}</span><div className="chart-track" aria-hidden="true"><span className="rating-after" /></div><span className="chart-value">{lang === "pt" ? "4,5" : "4.5"}</span></div>
    <div className="chart-axis" aria-hidden="true">{[0, 1, 2, 3, 4, 5].map((tick) => <span key={tick}>{tick}</span>)}</div>
    <p className="chart-note">{copy.ratingNote}</p>
  </figure>;
}

export function GrowthChart({ lang }: { lang: Language }) {
  const copy = labels[lang];
  return <figure className="result-chart">
    <figcaption className="chart-heading"><span>{copy.growthTitle}</span><span className="chart-scale">{copy.growthScale}</span></figcaption>
    <div className="chart-row"><span className="chart-label">{copy.accesses}</span><div className="chart-track" aria-hidden="true"><span className="growth-accesses" /></div><span className="chart-value">+30%</span></div>
    <div className="chart-row"><span className="chart-label">{copy.retention}</span><div className="chart-track" aria-hidden="true"><span className="growth-retention" /></div><span className="chart-value">+10%</span></div>
    <div className="chart-axis" aria-hidden="true">{[0, 10, 20, 30].map((tick) => <span key={tick}>{tick}%</span>)}</div>
    <p className="chart-note">{copy.growthNote}</p>
  </figure>;
}

const comparisonLabels = {
  pt: {
    before: "Antes", after: "Depois",
    conversion: { title: "Conversão de compra no app", scale: "Compras concluídas / jornadas iniciadas", before: "20%", after: "70%", note: "Após a nova versão, a conversão de compra no app passou de 20% para 70%, considerando os usuários que iniciavam a jornada de compra." },
    coverage: { title: "Eventos suportados no app", scale: "Cobertura de eventos (%)", before: "30%", after: "100%", note: "Cobertura de eventos reportada no acompanhamento do produto: de 30% para 100% após a evolução do aplicativo." },
    queue: { title: "Tempo de espera na fila de retirada", scale: "Espera em minutos", before: "50 min", after: "20–30 min", note: "Após a adoção do app, a espera na fila de retirada de kits passou de 50 para 20–30 minutos, conforme o acompanhamento da operação." },
  },
  en: {
    before: "Before", after: "After",
    conversion: { title: "In-app purchase conversion", scale: "Completed purchases / journeys started", before: "20%", after: "70%", note: "Following the new version, in-app purchase conversion rose from 20% to 70% among users who started the purchase journey." },
    coverage: { title: "Events supported in the app", scale: "Event coverage (%)", before: "30%", after: "100%", note: "Event coverage reported during product monitoring: from 30% to 100% following the app’s evolution." },
    queue: { title: "Waiting time in the pickup queue", scale: "Wait in minutes", before: "50 min", after: "20–30 min", note: "After app adoption, waiting time in the kit pickup queue fell from 50 to 20–30 minutes, as observed during operations." },
  },
} as const;

export function ComparisonChart({ lang, kind, compact = false }: { lang: Language; kind: "queue" | "conversion" | "coverage"; compact?: boolean }) {
  const labels = comparisonLabels[lang];
  const copy = labels[kind];
  const conversion = kind !== "queue";
  const before = kind === "coverage" ? 30 : conversion ? 20 : 100;
  const after = kind === "coverage" ? 100 : conversion ? 70 : 40;
  const ticks = conversion ? [0, 25, 50, 75, 100] : [0, 10, 20, 30, 40, 50];
  return <figure className={`result-chart comparison-chart${compact ? " result-chart-compact" : ""}`}>
    <figcaption className="chart-heading"><span>{copy.title}</span><span className="chart-scale">{copy.scale}</span></figcaption>
    <div className="chart-row"><span className="chart-label">{labels.before}</span><div className="chart-track" aria-hidden="true"><span className="comparison-before" style={{ width: `${before}%` }} /></div><span className="chart-value">{copy.before}</span></div>
    <div className="chart-row"><span className="chart-label">{labels.after}</span><div className="chart-track" aria-hidden="true"><span style={{ width: `${after}%` }} />{!conversion && <span className="comparison-range" style={{ left: "40%", width: "20%" }} />}</div><span className="chart-value">{copy.after}</span></div>
    <div className="chart-axis" aria-hidden="true">{ticks.map((tick) => <span key={tick}>{tick}{conversion ? "%" : ""}</span>)}</div>
    <p className="chart-note">{copy.note}</p>
  </figure>;
}
