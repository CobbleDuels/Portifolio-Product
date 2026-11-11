import type { Metadata } from "next";
import { ProjectCover } from "@/components/project-cover";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { CaseEnding } from "@/components/case-ending";
import { ReadingText } from "@/components/reading-text";
import { SiteHeader } from "@/components/site-header";
import { home, isLanguage } from "@/content/home";
import { businessIntelligenceCase, businessIntelligencePath } from "@/content/business-intelligence-case";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  return pageMetadata(lang, businessIntelligencePath, businessIntelligenceCase[lang]);
}

export default async function BusinessIntelligenceCase({ params }: Props) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const copy = businessIntelligenceCase[lang];
  return <>
    <a href="#main" className="skip-link">{home[lang].skip}</a>
    <SiteHeader lang={lang} path={businessIntelligencePath} />
    <main id="main" tabIndex={-1} className="case-main case-main-data page-width">
      <Link href={`/${lang}#projects`} className="text-link case-back"><span className="rotate-180"><Arrow /></span>{home[lang].casesLink}</Link>
      <article>
        <header className="case-hero data-case-hero">
          <div><p className="eyebrow">{copy.eyebrow}</p><h1 className="whitespace-pre-line">{copy.title}</h1><p className="case-introduction"><ReadingText>{copy.introduction}</ReadingText></p></div>
          <ProjectCover index={4} lang={lang} />
        </header>
        <dl className="case-metrics">{copy.metrics.map(metric => <div key={metric.label}><dt>{metric.label}</dt><dd className="case-metric-value">{metric.value}</dd><dd className="case-metric-note">{metric.note}</dd></div>)}</dl>
        {copy.sections.map((section,index) => <section className="case-context website-chapter" key={section.eyebrow} aria-labelledby={`data-section-${index}`}>
          <div><span className="case-chapter-number" aria-hidden="true">{String(index+1).padStart(2,"0")}</span><p className="eyebrow">{section.eyebrow}</p><h2 id={`data-section-${index}`} className="whitespace-pre-line">{section.title}</h2></div>
          <p><ReadingText>{section.text}</ReadingText></p>
        </section>)}
      </article>
    </main>
    <CaseEnding lang={lang} />
  </>;
}
