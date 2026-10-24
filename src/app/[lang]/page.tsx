import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { contactLinks } from "@/content/contact";
import { home, isLanguage } from "@/content/home";
import { SiteHeader } from "@/components/site-header";
import { websiteCase, websitePath } from "@/content/website-case";
import { migrationPath } from "@/content/migration-case";
import { ProductMap } from "@/components/product-map";
import { ProjectVisual } from "@/components/project-visual";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const copy = home[lang];

  return (
    <>
      <a href="#main" className="skip-link">{copy.skip}</a>
      <SiteHeader lang={lang} />

      <main id="main" tabIndex={-1}>
        <section className="hero page-width" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow flex items-center gap-3"><span className="accent-square" aria-hidden="true" />{copy.eyebrow}</p>
            <h1 id="hero-heading">{copy.headline[0]}<br />{copy.headline[1]}<br /><span className="hero-emphasis">{copy.headline[2]}</span></h1>
            <p className="hero-introduction">{copy.introduction}</p>
            <div className="hero-actions flex flex-wrap items-center gap-x-7 gap-y-5">
              <a href="#projects" className="primary-button">{copy.primaryCta}<Arrow /></a>
              <a href="#about" className="text-link">{copy.secondaryCta}<Arrow diagonal /></a>
            </div>
          </div>
          <ProductMap lang={lang} />
        </section>

        <section id="projects" className="projects-section page-width section-anchor" aria-labelledby="projects-heading">
          <p className="eyebrow">{copy.casesEyebrow}</p>
          <div className="section-heading-grid"><h2 id="projects-heading" className="whitespace-pre-line">{copy.casesTitle}</h2><p className="section-intro">{copy.casesIntro}</p></div>
          <div className="projects-grid">
            {copy.projects.map((project, index) => (
              <article key={project.title} className="project-card">
                <ProjectVisual index={index} lang={lang} />
                <div className="project-body">
                <div className="project-top"><span className="project-number">0{index + 1}</span><span className="project-category">{project.category}</span></div>
                <h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-description">{project.description}</p>
                {index === 0 ? <Link href={`/${lang}${migrationPath}`} className="project-case-link">{copy.casePreview}<Arrow diagonal /></Link> : <details><summary>{copy.details}<span aria-hidden="true">+</span></summary><p className="project-detail">{project.detail}</p></details>}
                <p className="project-status"><span aria-hidden="true" />{copy.inProgress}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="additional-project"><p className="eyebrow">{lang === "pt" ? "OUTRA INICIATIVA" : "ANOTHER INITIATIVE"}</p><Link href={`/${lang}${websitePath}`} className="text-link">{websiteCase[lang].metaTitle.replace(" — Yago Jesus", "")}<Arrow diagonal /></Link><p>{websiteCase[lang].introduction}</p></div>
        </section>

        <section id="about" className="about-section page-width section-anchor" aria-labelledby="about-heading">
          <figure className="about-portrait">
            <div className="about-photo"><Image src="/images/yago-casual-esportivo.webp" alt={copy.portraitAlt} fill sizes="(max-width: 760px) min(340px, calc(100vw - 40px)), 340px" /></div>
            <figcaption><span>Yago Jesus</span><span>Product Manager</span></figcaption>
          </figure>
          <div className="about-content"><p className="eyebrow">{copy.aboutEyebrow}</p><h2 id="about-heading" className="whitespace-pre-line">{copy.aboutTitle}</h2><div className="about-copy"><p>{copy.aboutText}</p></div></div>
        </section>
        <section id="contact" className="contact-section page-width section-anchor" aria-labelledby="contact-heading">
          <div><p className="eyebrow">{copy.contactEyebrow}</p><h2 id="contact-heading">{copy.contactTitle}</h2><p className="contact-introduction">{copy.contactText}</p></div>
          <ul className="contact-links">{contactLinks.map((contact) => <li key={contact.name}><a href={contact.href}><span className="contact-channel">{contact.name}</span><span className="contact-detail">{contact.label}</span><Arrow diagonal /></a></li>)}</ul>
        </section>
      </main>
      <footer className="site-footer page-width"><div><p className="footer-name">Yago Jesus<span className="text-accent">.</span></p><p>{copy.footer}</p></div><a href="#top" className="text-link">{copy.backToTop}<span className="-rotate-90"><Arrow /></span></a></footer>
    </>
  );
}
