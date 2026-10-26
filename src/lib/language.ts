import type { Language } from "@/content/home";

export const languageCookie = "yago-portfolio-language";
export const languageNames = { pt: "Português", en: "English", es: "Español" };

export function detectLanguage(preferences: readonly string[], fallback: Language): Language {
  for (const preference of preferences) {
    const base = preference.toLowerCase().split(/[-_]/)[0];
    if (base === "pt" || base === "en" || base === "es") return base;
  }
  return fallback;
}
