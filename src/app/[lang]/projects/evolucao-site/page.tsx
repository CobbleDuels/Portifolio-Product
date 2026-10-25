import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { GrowthChart } from "@/components/result-charts";
import { SiteHeader } from "@/components/site-header";
import { home, isLanguage } from "@/content/home";
import { websiteCase, websitePath } from "@/content/website-case";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  return { title: websiteCase[lang].metaTitle, description: websiteCase[lang].metaDescription };
}

export default async function WebsiteCase({ params }: Props) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const copy = websiteCase[lang];
  return <>
    <a href="#main" className="skip-link">{home[lang].skip}</a>
    <SiteHeader lang={lang} path={websitePath} />
    <main id="main" tabIndex={-1} className="case-main page-width">
      <Link href={`/${lang}#projects`} className="text-link case-back"><span className="rotate-180"><Arrow /></span>{home[lang].casesLink}</Link>
      <article>
        <header className="website-hero"><p className="eyebrow">{copy.eyebrow}</p><h1 className="whitespace-pre-line">{copy.title}</h1><p className="case-introduction">{copy.introduction}</p></header>
        <section className="case-scale" aria-labelledby="website-results-heading">
          <h2 id="website-results-heading">{{ pt: "Acessos e retenção", en: "Accesses and retention", es: "Accesos y retención" }[lang]}</h2>
          <p className="case-delivery-intro">{copy.text}</p><p className="case-scale-note">{copy.note}</p>
          <GrowthChart lang={lang} />
          <dl className="case-metrics">{copy.metrics.map((metric) => <div key={metric.label}><dt>{metric.label}</dt><dd className="case-metric-value">{metric.value}</dd><dd className="case-metric-note">{metric.note}</dd></div>)}</dl>
          <div className="case-measurement"><h3>{copy.comparisonTitle}</h3><p>{copy.comparisonText}</p></div>
        </section>
      </article>
    </main>
    <footer className="site-footer page-width"><p className="footer-name">Yago Jesus.</p><Link href={`/${lang}`} className="text-link">{home[lang].backToTop}<Arrow /></Link></footer>
  </>;
}
