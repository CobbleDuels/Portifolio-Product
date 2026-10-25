import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { SiteHeader } from "@/components/site-header";
import { RatingsChart } from "@/components/result-charts";
import { ProjectVisual } from "@/components/project-visual";
import { home, type Language } from "@/content/home";
import type { AppCaseCopy } from "@/content/app-cases";

export function AppCaseStudy({ lang, path, visual, copy }: { lang: Language; path: string; visual: number; copy: AppCaseCopy }) {
  return <>
    <a href="#main" className="skip-link">{home[lang].skip}</a>
    <SiteHeader lang={lang} path={path} />
    <main id="main" tabIndex={-1} className="case-main page-width">
      <Link href={`/${lang}#projects`} className="text-link case-back"><span className="rotate-180"><Arrow /></span>{home[lang].casesLink}</Link>
      <article>
        <header className="case-hero"><div><p className="eyebrow">{copy.eyebrow}</p><h1 className="whitespace-pre-line">{copy.title}</h1><p className="case-introduction">{copy.introduction}</p></div><ProjectVisual index={visual} lang={lang} /></header>
        {copy.sections.map((section, index) => <section className="app-case-section" aria-labelledby={`section-${index}`} key={section.eyebrow}>
          <div className="case-context"><div><p className="eyebrow">{section.eyebrow}</p><h2 id={`section-${index}`} className="whitespace-pre-line">{section.title}</h2></div><p>{section.text}</p></div>
          {section.metrics && path === "/projects/app-atleta" && <RatingsChart lang={lang} />}
          {section.metrics && <dl className="case-metrics app-case-metrics">{section.metrics.map((metric) => <div key={metric.label}><dt>{metric.label}</dt><dd className="case-metric-value">{metric.value}</dd><dd className="case-metric-note">{metric.note}</dd></div>)}</dl>}
          {section.items && <ol className="app-case-steps">{section.items.map((item, step) => <li key={item.title}><span className="eyebrow" aria-hidden="true">0{step + 1}</span><h3>{item.title}</h3><p>{item.text}</p></li>)}</ol>}
        </section>)}
      </article>
    </main>
    <footer className="site-footer page-width"><p className="footer-name">Yago Jesus.</p><Link href={`/${lang}#contact`} className="text-link">{home[lang].contactLink}<Arrow /></Link></footer>
  </>;
}
