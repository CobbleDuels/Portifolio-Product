import { CaseEnding } from "@/components/case-ending";
import { CaseReadingNav } from "@/components/case-reading-nav";
import { ReadingText } from "@/components/reading-text";
import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { SiteHeader } from "@/components/site-header";
import { ComparisonChart, RatingsChart } from "@/components/result-charts";
import { ProjectVisual } from "@/components/project-visual";
import { ProductGallery } from "@/components/product-gallery";
import { home, type Language } from "@/content/home";
import type { AppCaseCopy } from "@/content/app-cases";

export function AppCaseStudy({ lang, path, visual, copy }: { lang: Language; path: string; visual: number; copy: AppCaseCopy }) {
  return <>
    <a href="#main" className="skip-link">{home[lang].skip}</a>
    <SiteHeader lang={lang} path={path} />
    <main id="main" tabIndex={-1} className="case-main case-main-app page-width">
      <Link href={`/${lang}#projects`} className="text-link case-back"><span className="rotate-180"><Arrow /></span>{home[lang].casesLink}</Link>
      <article>
        <header className="case-hero"><div><p className="eyebrow">{copy.eyebrow}</p><h1 className="whitespace-pre-line">{copy.title}</h1><p className="case-introduction"><ReadingText>{copy.introduction}</ReadingText></p></div>{copy.gallery ? <ProductGallery copy={copy.gallery} /> : <ProjectVisual index={visual} lang={lang} />}</header>
        <CaseReadingNav lang={lang} targets={["section-0", "section-1", "section-3", `section-${copy.sections.length - 1}`]} />
        {copy.sections.map((section, index) => <section className={`app-case-section${section.chart || section.metrics ? " case-chapter-results" : ""}${index === 3 ? " case-chapter-role" : ""}`} aria-labelledby={`section-${index}`} key={section.eyebrow}>
          <div className="case-context"><div><span className="case-chapter-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><p className="eyebrow">{section.eyebrow}</p><h2 id={`section-${index}`} className="whitespace-pre-line">{section.title}</h2></div><p><ReadingText>{section.text}</ReadingText></p></div>
          {section.chart === "ratings" && <RatingsChart lang={lang} />}
          {(section.chart === "queue" || section.chart === "conversion" || section.chart === "coverage") && <ComparisonChart lang={lang} kind={section.chart} />}
          {section.metrics && <dl className="case-metrics app-case-metrics">{section.metrics.map((metric) => <div key={metric.label}><dt>{metric.label}</dt><dd className="case-metric-value">{metric.value}</dd><dd className="case-metric-note">{metric.note}</dd></div>)}</dl>}
          {section.items && <ol className="app-case-steps">{section.items.map((item, step) => <li key={item.title}><span className="eyebrow" aria-hidden="true">0{step + 1}</span><h3>{item.title}</h3><p><ReadingText>{item.text}</ReadingText></p></li>)}</ol>}
        </section>)}
      </article>
    </main>
    <CaseEnding lang={lang} />
  </>;
}
