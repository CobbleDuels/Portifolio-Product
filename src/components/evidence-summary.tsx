import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { ComparisonChart } from "@/components/result-charts";
import type { Language } from "@/content/home";

const labels = {
  pt: { title: "PRODUTO EM PRÁTICA", experience: "3 anos em Produto", background: "Trajetória Full Stack .NET/C#", gmv: "de GMV em um dia", operation: "Operação São Silvestre", rating: "nas duas lojas", app: "App do Atleta", note: "Resultados das entregas do time. Conheça minha atuação em cada case." },
  en: { title: "PRODUCT WORK IN PRACTICE", experience: "3 years in Product", background: "Full Stack .NET/C# background", gmv: "in GMV in one day", operation: "São Silvestre operation", rating: "in both app stores", app: "Athlete App", note: "Outcomes from the team’s delivery. Explore my role in each case study." },
  es: { title: "PRODUCTO EN LA PRÁCTICA", experience: "3 años en Producto", background: "Trayectoria Full Stack .NET/C#", gmv: "de GMV en un día", operation: "Operación São Silvestre", rating: "en ambas tiendas", app: "App del Atleta", note: "Resultados del trabajo del equipo. Conoce mi contribución en cada caso." },
} as const;

export function EvidenceSummary({ lang }: { lang: Language }) {
  const copy = labels[lang];
  return <aside className="evidence-summary" aria-label={copy.title}>
    <p className="eyebrow evidence-eyebrow">{copy.title}</p>
    <div className="evidence-background"><strong>{copy.experience}</strong><span>{copy.background}</span></div>
    <div className="evidence-results">
      <Link href={`/${lang}/projects/ticket-sports-ingresse`} className="evidence-result"><span className="evidence-value">{{ pt: "~R$ 40 mi", en: "~R$ 40m", es: "~R$ 40 M" }[lang]}</span><span className="evidence-label">{copy.gmv}</span><span className="evidence-source">{copy.operation}<Arrow diagonal /></span></Link>
      <Link href={`/${lang}/projects/app-atleta`} className="evidence-result"><span className="evidence-value">{lang === "en" ? "4.5" : "4,5"}<span className="evidence-unit">/5</span></span><span className="evidence-label">{copy.rating}</span><span className="evidence-source">{copy.app}<Arrow diagonal /></span></Link>
    </div>
    <ComparisonChart lang={lang} kind="conversion" compact />
    <p className="evidence-note">{copy.note}</p>
  </aside>;
}
