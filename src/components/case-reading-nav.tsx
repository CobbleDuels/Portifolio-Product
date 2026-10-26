import type { Language } from "@/content/home";

const labels = {
  pt: ["Nesta história", "Contexto", "Decisões", "Minha atuação", "Resultados"],
  en: ["In this story", "Context", "Decisions", "My contribution", "Results"],
  es: ["En esta historia", "Contexto", "Decisiones", "Mi contribución", "Resultados"],
};

export function CaseReadingNav({ lang, targets, items }: { lang: Language; targets: readonly string[]; items?: readonly string[] }) {
  const copy = labels[lang];
  return <nav className="case-reading-nav" aria-label={copy[0]}><p className="eyebrow">{copy[0]}</p><ol>{targets.map((target, index) => <li key={target}><a href={`#${target}`}><span aria-hidden="true">0{index + 1}</span>{items?.[index] ?? copy[index + 1]}</a></li>)}</ol></nav>;
}
