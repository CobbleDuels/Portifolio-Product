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
    growthNote: "Métricas independentes: acessos +30% em relação a 2025; retenção +10%. A janela exata da comparação e a coorte de retenção não estão detalhadas.",
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
    growthNote: "Independent metrics: accesses +30% compared with 2025; retention +10%. The exact comparison window and retention cohort are not detailed.",
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
