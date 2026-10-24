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
        <section className="case-priority" aria-labelledby="case-priority-heading">
          <div><p className="eyebrow">{copy.priorityEyebrow}</p><h2 id="case-priority-heading" className="whitespace-pre-line">{copy.priorityTitle}</h2></div><p>{copy.priorityText}</p>
        </section>
        <section className="case-contribution" aria-labelledby="case-role-heading">
          <p className="eyebrow">{copy.roleEyebrow}</p><h2 id="case-role-heading" className="whitespace-pre-line">{copy.roleTitle}</h2>
          <div className="case-role-grid">
            <div><h3>{copy.individualTitle}</h3><p>{copy.individualText}</p></div>
            <div><h3>{copy.teamTitle}</h3><p>{copy.teamText}</p></div>
          </div>
        </section>
        <section className="case-deliveries" aria-labelledby="case-deliveries-heading">
          <p className="eyebrow">{copy.deliveryEyebrow}</p><h2 id="case-deliveries-heading" className="whitespace-pre-line">{copy.deliveryTitle}</h2><p className="case-delivery-intro">{copy.deliveryIntro}</p>
          <div className="case-capabilities">
            {copy.capabilities.map((capability, index) => <details key={capability.title}>
              <summary><span className="capability-number" aria-hidden="true">0{index + 1}</span><span className="capability-copy"><span className="capability-title">{capability.title}</span><span className="capability-summary">{capability.summary}</span></span><span className="capability-plus" aria-hidden="true">+</span></summary>
              <p>{capability.detail}</p>
            </details>)}
          </div>
        </section>
        <section className="case-cadence" aria-labelledby="case-cadence-heading">
          <div><p className="eyebrow">{copy.cadenceEyebrow}</p><h2 id="case-cadence-heading">{copy.cadenceTitle}</h2><p>{copy.cadenceText}</p></div>
          <ol>{copy.cadenceSteps.map((step, index) => <li key={step}><span aria-hidden="true">0{index + 1}</span>{step}</li>)}</ol>
        </section>
        <section className="case-scale" aria-labelledby="case-scale-heading">
          <h2 id="case-scale-heading" className="eyebrow">{copy.scaleEyebrow}</h2>
          <p className="case-scale-note">{copy.scaleNote}</p>
          <dl className="case-metrics">{copy.metrics.map((metric) => <div key={metric.label}><dt>{metric.label}</dt><dd className="case-metric-value">{metric.value}</dd><dd className="case-metric-note">{metric.note}</dd></div>)}</dl>
          <div className="case-interpretation"><h3>{copy.interpretationTitle}</h3><p>{copy.interpretationText}</p></div>
        </section>
        <section className="case-scale" aria-labelledby="case-launch-heading">
          <p className="eyebrow">{copy.launchEyebrow}</p><h2 id="case-launch-heading" className="case-launch-title whitespace-pre-line">{copy.launchTitle}</h2><p className="case-delivery-intro">{copy.launchText}</p>
          <dl className="case-metrics">{copy.launchMetrics.map((metric) => <div key={metric.label}><dt>{metric.label}</dt><dd className="case-metric-value">{metric.value}</dd><dd className="case-metric-note">{metric.note}</dd></div>)}</dl>
          <div className="case-measurement"><h3>{copy.measurementTitle}</h3><p>{copy.measurementText}</p></div>
        </section>
      </article>
    </main>
    <footer className="site-footer page-width"><p className="footer-name">Yago Jesus.</p><Link href={`/${lang}`} className="text-link">{copy.home}<Arrow /></Link></footer>
  </>;
}
