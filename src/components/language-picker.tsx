"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { isLanguage, languages, type Language } from "@/content/home";
import { detectLanguage, languageCookie, languageNames } from "@/lib/language";

const copy = {
  pt: { label: "Idioma", choose: "Escolha seu idioma", title: "Como você prefere explorar o portfólio?", text: "As mesmas experiências, disponíveis em três idiomas.", suggested: "Sugerido pelo navegador", close: "Continuar em português", note: "Você pode trocar o idioma a qualquer momento no cabeçalho." },
  en: { label: "Language", choose: "Choose your language", title: "How would you like to explore the portfolio?", text: "The same experiences, available in three languages.", suggested: "Suggested by your browser", close: "Continue in English", note: "You can change the language anytime in the header." },
  es: { label: "Idioma", choose: "Elige tu idioma", title: "¿Cómo prefieres explorar el portafolio?", text: "Las mismas experiencias, disponibles en tres idiomas.", suggested: "Sugerido por tu navegador", close: "Continuar en español", note: "Puedes cambiar el idioma en cualquier momento en la cabecera." },
};

function remember(language: Language) {
  try { localStorage.setItem(languageCookie, language); } catch { /* The links still work without storage. */ }
  try { document.cookie = `${languageCookie}=${language}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`; } catch { /* Explicit language links remain usable when cookies are blocked. */ }
}

function hasPreference() {
  try { if (isLanguage(localStorage.getItem(languageCookie) || "")) return true; } catch { /* Try the essential preference cookie instead. */ }
  try { return /(?:^|; )yago-portfolio-language=(pt|en|es)(?:;|$)/.test(document.cookie); } catch { return false; }
}

export function LanguagePicker({ lang, path }: { lang: Language; path: string }) {
  const menu = useRef<HTMLDetailsElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [suggested, setSuggested] = useState<Language>(lang);
  const [welcome, setWelcome] = useState(false);
  const welcomeCopy = copy[suggested];

  useEffect(() => {
    if (!hasPreference()) {
      setSuggested(detectLanguage(navigator.languages, lang));
      setWelcome(true);
    }
  }, [lang]);

  useEffect(() => {
    if (welcome && !dialog.current?.open) {
      dialog.current?.showModal();
      dialog.current?.querySelector<HTMLAnchorElement>(".suggested-language")?.focus();
    }
    return () => { if (dialog.current?.open) dialog.current.close(); };
  }, [welcome]);

  function dismiss() {
    remember(lang);
    dialog.current?.close();
    setWelcome(false);
  }

  function choose(event: MouseEvent<HTMLAnchorElement>, language: Language) {
    remember(language);
    const destination = new URL(location.href);
    destination.pathname = `/${language}${path}`;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      event.currentTarget.href = destination.href;
      return;
    }
    event.preventDefault();
    menu.current?.removeAttribute("open");
    if (language === lang) { dismiss(); return; }
    location.assign(destination.href);
  }

  return <>
    <details className="language-picker" ref={menu} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false; }} onKeyDown={event => { if (event.key === "Escape") { menu.current?.removeAttribute("open"); menu.current?.querySelector("summary")?.focus(); } }}>
      <summary aria-label={`${copy[lang].label}: ${languageNames[lang]}`}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></svg>
        <span className="language-picker-label">{copy[lang].label}</span><strong>{languageNames[lang]}</strong><span aria-hidden="true">⌄</span>
      </summary>
      <nav className="language-menu" aria-label={copy[lang].choose}>
        {languages.map(language => <a key={language} href={`/${language}${path}`} hrefLang={language === "pt" ? "pt-BR" : language} lang={language === "pt" ? "pt-BR" : language} aria-current={lang === language ? "page" : undefined} onClick={event => choose(event, language)}>{languageNames[language]}<span aria-hidden="true">{lang === language ? "✓" : "↗"}</span></a>)}
      </nav>
    </details>
    <dialog className="language-welcome" ref={dialog} aria-labelledby="language-welcome-title" aria-describedby="language-welcome-description" onCancel={dismiss}>
      <p className="eyebrow">PORTUGUÊS · ENGLISH · ESPAÑOL</p>
      <h2 id="language-welcome-title">{welcomeCopy.title}</h2>
      <p id="language-welcome-description">{welcomeCopy.text}</p>
      <div className="welcome-language-options">
        {languages.map(language => <a key={language} href={`/${language}${path}`} lang={language === "pt" ? "pt-BR" : language} hrefLang={language === "pt" ? "pt-BR" : language} className={language === suggested ? "suggested-language" : undefined} onClick={event => choose(event, language)}><strong>{languageNames[language]}</strong>{language === suggested && <span>{welcomeCopy.suggested}</span>}<span aria-hidden="true">↗</span></a>)}
      </div>
      <button className="language-welcome-continue" type="button" onClick={dismiss}>{copy[lang].close}</button>
      <p className="language-welcome-note">{welcomeCopy.note}</p>
    </dialog>
  </>;
}
