import Link from "next/link";
import { home, type Language } from "@/content/home";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguagePicker } from "@/components/language-picker";

export function SiteHeader({ lang, path = "" }: { lang: Language; path?: string }) {
  const copy = home[lang];
  return <header className="site-header page-width" id="top">
    <Link href={`/${lang}`} className="brand" aria-label={`Yago Jesus — ${{ pt: "Início", en: "Home", es: "Inicio" }[lang]}`}>yago<span className="text-accent">.</span></Link>
    <nav aria-label={copy.navigation} className="header-navigation">
      <Link href={`/${lang}#projects`} className="nav-link">{copy.casesLink}</Link>
      <Link href={`/${lang}#about`} className="nav-link about-nav">{copy.aboutLink}</Link>
      <Link href={`/${lang}#contact`} className="nav-link">{copy.contactLink}</Link>
      <LanguagePicker lang={lang} path={path} />
      <ThemeToggle lang={lang} />
    </nav>
  </header>;
}
