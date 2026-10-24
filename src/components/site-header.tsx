import Link from "next/link";
import { home, type Language } from "@/content/home";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader({ lang, path = "" }: { lang: Language; path?: string }) {
  const copy = home[lang];
  return <header className="site-header page-width" id="top">
    <Link href={`/${lang}`} className="brand" aria-label="Yago Jesus — Home">yago<span className="text-accent">.</span></Link>
    <nav aria-label={copy.navigation} className="header-navigation">
      <Link href={`/${lang}#projects`} className="nav-link">{copy.casesLink}</Link>
      <Link href={`/${lang}#about`} className="nav-link about-nav">{copy.aboutLink}</Link>
      <Link href={`/${lang}#contact`} className="nav-link">{copy.contactLink}</Link>
      <div className="language-switch" role="group" aria-label={copy.language}>
        <Link href={`/pt${path}`} hrefLang="pt-BR" lang="pt-BR" aria-label="Português" aria-current={lang === "pt" ? "page" : undefined}>PT</Link>
        <span aria-hidden="true">/</span>
        <Link href={`/en${path}`} hrefLang="en" lang="en" aria-label="English" aria-current={lang === "en" ? "page" : undefined}>EN</Link>
      </div>
      <ThemeToggle lang={lang} />
    </nav>
  </header>;
}
