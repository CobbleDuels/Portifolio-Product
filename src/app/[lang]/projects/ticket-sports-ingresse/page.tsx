import { CaseEnding } from "@/components/case-ending";
import { CaseReadingNav } from "@/components/case-reading-nav";
import { ReadingText } from "@/components/reading-text";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { SiteHeader } from "@/components/site-header";
import { home, isLanguage } from "@/content/home";
import { migrationCase, migrationPath } from "@/content/migration-case";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  const copy = migrationCase[lang];
  return pageMetadata(lang, migrationPath, copy);
}

export default async function MigrationCase({ params }: Props) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const copy = migrationCase[lang];
  return <>
    <a href="#main" className="skip-link">{home[lang].skip}</a>
    <SiteHeader lang={lang} path={migrationPath} />
    <main id="main" tabIndex={-1} className="case-main case-main-migration page-width">
      <Link href={`/${lang}#projects`} className="text-link case-back"><span className="rotate-180"><Arrow /></span>{copy.back}</Link>
      <article>
        <header className="case-hero migration-hero">
          <div><p className="eyebrow">{copy.eyebrow}</p><h1 className="whitespace-pre-line">{copy.title}</h1><p className="case-introduction"><ReadingText>{copy.introduction}</ReadingText></p><p className="project-status"><span aria-hidden="true" />{copy.status}</p></div>
        </header>
        <CaseReadingNav lang={lang} targets={["case-context-heading", "case-priority-heading", "case-role-heading", "case-business-heading"]} />
        <figure className="case-product-capture">
          <a href="/images/sao-silvestre-ingresse.png" target="_blank" rel="noopener noreferrer" aria-label={copy.capture.openLabel}>
            <Image src="/images/sao-silvestre-ingresse.png" alt={copy.capture.alt} width={1892} height={942} unoptimized loading="eager" fetchPriority="high" />
          </a>
          <figcaption>
            <span>{copy.capture.caption}</span>
            <div className="capture-links">
              <a href="/images/sao-silvestre-ingresse.png" target="_blank" rel="noopener noreferrer" className="text-link">{copy.capture.openLabel}<Arrow diagonal /></a>
              <a href="https://saosilvestre.ingresse.com/" target="_blank" rel="noopener noreferrer" className="text-link">{copy.capture.visitLabel}<Arrow diagonal /></a>
            </div>
          </figcaption>
        </figure>
        <dl className="case-brief" aria-label={copy.deliveryContextTitle}>
          {copy.deliveryContext.map((item) => <div key={item.title}><dt>{item.title}</dt><dd><ReadingText>{item.text}</ReadingText></dd></div>)}
        </dl>
        <section className="case-context" aria-labelledby="case-context-heading">
          <div><p className="eyebrow">{copy.contextEyebrow}</p><h2 id="case-context-heading" className="whitespace-pre-line">{copy.contextTitle}</h2></div><p><ReadingText>{copy.contextText}</ReadingText></p>
        </section>
        <section className="case-priority" aria-labelledby="case-transition-heading">
          <div><p className="eyebrow">{copy.transitionEyebrow}</p><h2 id="case-transition-heading" className="whitespace-pre-line">{copy.transitionTitle}</h2></div><p><ReadingText>{copy.transitionText}</ReadingText></p>
        </section>
        <section className="case-priority" aria-labelledby="case-priority-heading">
          <div><p className="eyebrow">{copy.priorityEyebrow}</p><h2 id="case-priority-heading" className="whitespace-pre-line">{copy.priorityTitle}</h2></div><p><ReadingText>{copy.priorityText}</ReadingText></p>
        </section>
        <section className="case-contribution" aria-labelledby="case-role-heading">
          <p className="eyebrow">{copy.roleEyebrow}</p><h2 id="case-role-heading" className="whitespace-pre-line">{copy.roleTitle}</h2>
          <div className="case-role-grid">
            <div><h3>{copy.individualTitle}</h3><p><ReadingText>{copy.individualText}</ReadingText></p></div>
            <div><h3>{copy.teamTitle}</h3><p><ReadingText>{copy.teamText}</ReadingText></p></div>
          </div>
          <div className="case-measurement"><h3>{copy.practiceTitle}</h3><p><ReadingText>{copy.practiceText}</ReadingText></p></div>
        </section>
        <section className="case-contribution" aria-labelledby="case-groups-heading">
          <p className="eyebrow">{copy.groupStory.eyebrow}</p><h2 id="case-groups-heading" className="whitespace-pre-line">{copy.groupStory.title}</h2>
          <p className="case-delivery-intro"><ReadingText>{copy.groupStory.context}</ReadingText></p>
          <div className="case-role-grid">
            <div><h3>{copy.groupStory.researchTitle}</h3><p><ReadingText>{copy.groupStory.researchText}</ReadingText></p></div>
            <div><h3>{copy.groupStory.decisionTitle}</h3><p><ReadingText>{copy.groupStory.decisionText}</ReadingText></p></div>
          </div>
          <div className="case-measurement"><h3>{copy.groupStory.resultTitle}</h3><p><ReadingText>{copy.groupStory.resultText}</ReadingText></p></div>
        </section>
        <section className="case-deliveries" aria-labelledby="case-deliveries-heading">
          <p className="eyebrow">{copy.deliveryEyebrow}</p><h2 id="case-deliveries-heading" className="whitespace-pre-line">{copy.deliveryTitle}</h2><p className="case-delivery-intro"><ReadingText>{copy.deliveryIntro}</ReadingText></p>
          <div className="case-capabilities">
            {copy.capabilities.map((capability, index) => <details key={capability.title}>
              <summary><span className="capability-number" aria-hidden="true">0{index + 1}</span><span className="capability-copy"><span className="capability-title">{capability.title}</span><span className="capability-summary">{capability.summary}</span></span><span className="capability-plus" aria-hidden="true">+</span></summary>
              <p><ReadingText>{capability.detail}</ReadingText></p>
            </details>)}
          </div>
        </section>
        <section className="case-cadence" aria-labelledby="case-cadence-heading">
          <div><p className="eyebrow">{copy.cadenceEyebrow}</p><h2 id="case-cadence-heading">{copy.cadenceTitle}</h2><p><ReadingText>{copy.cadenceText}</ReadingText></p></div>
          <ol>{copy.cadenceSteps.map((step, index) => <li key={step}><span aria-hidden="true">0{index + 1}</span>{step}</li>)}</ol>
        </section>
        <section className="case-scale" aria-labelledby="case-business-heading">
          <p className="eyebrow">{copy.businessEyebrow}</p><h2 id="case-business-heading" className="case-launch-title whitespace-pre-line">{copy.businessTitle}</h2><p className="case-delivery-intro"><ReadingText>{copy.businessText}</ReadingText></p>
          <dl className="case-metrics business-metrics">{copy.businessMetrics.map((metric) => <div key={metric.label}><dt>{metric.label}</dt><dd className="case-metric-value">{metric.value}</dd><dd className="case-metric-note">{metric.note}</dd></div>)}</dl>
        </section>
        <section className="case-scale" aria-labelledby="case-scale-heading">
          <h2 id="case-scale-heading" className="case-launch-title">{copy.scaleEyebrow}</h2>
          <p className="case-scale-note">{copy.scaleNote}</p>
          <dl className="case-metrics">{copy.metrics.map((metric) => <div key={metric.label}><dt>{metric.label}</dt><dd className="case-metric-value">{metric.value}</dd><dd className="case-metric-note">{metric.note}</dd></div>)}</dl>
        </section>

      </article>
    </main>
    <CaseEnding lang={lang} />
  </>;
}
