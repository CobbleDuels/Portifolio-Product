import Link from "next/link";
import { home, languages, type Language } from "@/content/home";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader({ lang, path = "" }: { lang: Language; path?: string }) {
  const copy = home[lang];
  return <header className="site-header page-width" id="top">
    <Link href={`/${lang}`} className="brand" aria-label={`Yago Jesus — ${{ pt: "Início", en: "Home", es: "Inicio" }[lang]}`}>yago<span className="text-accent">.</span></Link>
    <nav aria-label={copy.navigation} className="header-navigation">
      <Link href={`/${lang}#projects`} className="nav-link">{copy.casesLink}</Link>
      <Link href={`/${lang}#about`} className="nav-link about-nav">{copy.aboutLink}</Link>
      <Link href={`/${lang}#contact`} className="nav-link">{copy.contactLink}</Link>
      <div className="language-switch" role="group" aria-label={copy.language}>
        {languages.map((language) => <Link key={language} href={`/${language}${path}`} hrefLang={language === "pt" ? "pt-BR" : language} lang={language === "pt" ? "pt-BR" : language} aria-label={{ pt: "Português", en: "English", es: "Español" }[language]} aria-current={lang === language ? "page" : undefined}>{language.toUpperCase()}</Link>)}
      </div>
      <ThemeToggle lang={lang} />
    </nav>
  </header>;
}
