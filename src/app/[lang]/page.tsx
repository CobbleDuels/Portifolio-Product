import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { home, isLanguage } from "@/content/home";
import { ThemeToggle } from "@/components/theme-toggle";
import { ProductMap } from "@/components/product-map";
import { ProjectVisual } from "@/components/project-visual";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const copy = home[lang];

  return (
    <>
      <a href="#main" className="skip-link">{copy.skip}</a>
      <header className="site-header page-width" id="top">
        <Link href={`/${lang}`} className="brand" aria-label="Yago Jesus — Home">yago<span className="text-accent">.</span></Link>
        <nav aria-label={copy.navigation} className="header-navigation">
          <a href="#projects" className="nav-link">{copy.casesLink}</a>
          <a href="#about" className="nav-link about-nav">{copy.aboutLink}</a>
          <div className="language-switch" role="group" aria-label={copy.language}>
            <Link href="/pt" hrefLang="pt-BR" lang="pt-BR" aria-label="Português" aria-current={lang === "pt" ? "page" : undefined}>PT</Link>
            <span aria-hidden="true">/</span>
            <Link href="/en" hrefLang="en" lang="en" aria-label="English" aria-current={lang === "en" ? "page" : undefined}>EN</Link>
          </div>
          <ThemeToggle lang={lang} />
        </nav>
      </header>

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
                <details><summary>{copy.details}<span aria-hidden="true">+</span></summary><p className="project-detail">{project.detail}</p></details>
                <p className="project-status"><span aria-hidden="true" />{copy.inProgress}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about-section page-width section-anchor" aria-labelledby="about-heading">
          <div><p className="eyebrow">{copy.aboutEyebrow}</p><h2 id="about-heading" className="whitespace-pre-line">{copy.aboutTitle}</h2></div>
          <div className="about-copy"><p>{copy.aboutText}</p></div>
        </section>
      </main>
      <footer className="site-footer page-width"><div><p className="footer-name">Yago Jesus<span className="text-accent">.</span></p><p>{copy.footer}</p></div><a href="#top" className="text-link">{copy.backToTop}<span className="-rotate-90"><Arrow /></span></a></footer>
    </>
  );
}
