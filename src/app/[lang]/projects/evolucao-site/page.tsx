import { CaseEnding } from "@/components/case-ending";
import { CaseReadingNav } from "@/components/case-reading-nav";
import { ReadingText } from "@/components/reading-text";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { GrowthChart } from "@/components/result-charts";
import { SiteHeader } from "@/components/site-header";
import { home, isLanguage } from "@/content/home";
import { websiteCase, websitePath } from "@/content/website-case";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  return pageMetadata(lang, websitePath, websiteCase[lang]);
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
        <header className="website-hero"><p className="eyebrow">{copy.eyebrow}</p><h1 className="whitespace-pre-line">{copy.title}</h1><p className="case-introduction"><ReadingText>{copy.introduction}</ReadingText></p></header>
        <CaseReadingNav lang={lang} targets={["website-results-heading", "website-section-0", "website-section-1", "website-section-2"]} items={{ pt: ["Resultados", "Contexto", "Investigação", "Aprendizado"], en: ["Results", "Context", "Investigation", "Learning"], es: ["Resultados", "Contexto", "Investigación", "Aprendizaje"] }[lang]} />
        <figure className="case-product-capture">
          <a href="/images/ticket-sports-site.jpg" target="_blank" rel="noopener noreferrer" aria-label={copy.capture.openLabel}>
            <Image src="/images/ticket-sports-site.jpg" alt={copy.capture.alt} width={1425} height={891} unoptimized loading="eager" fetchPriority="high" />
          </a>
          <figcaption>
            <span>{copy.capture.caption}</span>
            <div className="capture-links">
              <a href="/images/ticket-sports-site.jpg" target="_blank" rel="noopener noreferrer" className="text-link">{copy.capture.openLabel}<Arrow diagonal /></a>
              <a href="https://www.ticketsports.com.br/" target="_blank" rel="noopener noreferrer" className="text-link">{copy.capture.visitLabel}<Arrow diagonal /></a>
            </div>
          </figcaption>
        </figure>
        <section className="case-scale" aria-labelledby="website-results-heading">
          <h2 id="website-results-heading">{{ pt: "Acessos e retenção", en: "Accesses and retention", es: "Accesos y retención" }[lang]}</h2>
          <p className="case-delivery-intro"><ReadingText>{copy.text}</ReadingText></p><p className="case-scale-note">{copy.note}</p>
          <GrowthChart lang={lang} />
          <dl className="case-metrics">{copy.metrics.map((metric) => <div key={metric.label}><dt>{metric.label}</dt><dd className="case-metric-value">{metric.value}</dd><dd className="case-metric-note">{metric.note}</dd></div>)}</dl>
        </section>
        {copy.sections.map((section, index) => <section className="case-context" aria-labelledby={`website-section-${index}`} key={section.eyebrow}>
          <div><p className="eyebrow">{section.eyebrow}</p><h2 id={`website-section-${index}`} className="whitespace-pre-line">{section.title}</h2></div>
          <p><ReadingText>{section.text}</ReadingText></p>
        </section>)}
      </article>
    </main>
    <CaseEnding lang={lang} />
  </>;
}
