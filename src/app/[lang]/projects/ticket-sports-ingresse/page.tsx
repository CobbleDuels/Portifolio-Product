import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { SiteHeader } from "@/components/site-header";
import { ProjectVisual } from "@/components/project-visual";
import { home, isLanguage } from "@/content/home";
import { migrationCase, migrationPath } from "@/content/migration-case";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  const copy = migrationCase[lang];
  return { title: copy.metaTitle, description: copy.metaDescription };
}

export default async function MigrationCase({ params }: Props) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const copy = migrationCase[lang];
  return <>
    <a href="#main" className="skip-link">{home[lang].skip}</a>
    <SiteHeader lang={lang} path={migrationPath} />
    <main id="main" tabIndex={-1} className="case-main page-width">
      <Link href={`/${lang}#projects`} className="text-link case-back"><span className="rotate-180"><Arrow /></span>{copy.back}</Link>
      <article>
        <header className="case-hero">
          <div><p className="eyebrow">{copy.eyebrow}</p><h1 className="whitespace-pre-line">{copy.title}</h1><p className="case-introduction">{copy.introduction}</p><p className="project-status"><span aria-hidden="true" />{copy.status}</p></div>
          <ProjectVisual index={0} lang={lang} />
        </header>
        <section className="case-context" aria-labelledby="case-context-heading">
          <div><p className="eyebrow">{copy.contextEyebrow}</p><h2 id="case-context-heading" className="whitespace-pre-line">{copy.contextTitle}</h2></div><p>{copy.contextText}</p>
        </section>
        <section className="case-scale" aria-labelledby="case-scale-heading">
          <h2 id="case-scale-heading" className="eyebrow">{copy.scaleEyebrow}</h2>
          <dl className="case-metrics">{copy.metrics.map((metric) => <div key={metric.label}><dt>{metric.label}</dt><dd className="case-metric-value">{metric.value}</dd><dd className="case-metric-note">{metric.note}</dd></div>)}</dl>
          <div className="case-interpretation"><h3>{copy.interpretationTitle}</h3><p>{copy.interpretationText}</p></div>
        </section>
        <section className="case-next"><h2>{copy.nextTitle}</h2><p>{copy.nextText}</p></section>
      </article>
    </main>
    <footer className="site-footer page-width"><p className="footer-name">Yago Jesus.</p><Link href={`/${lang}`} className="text-link">{copy.home}<Arrow /></Link></footer>
  </>;
}
