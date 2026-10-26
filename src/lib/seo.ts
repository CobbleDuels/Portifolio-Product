import type { Metadata } from "next";
import { languages, type Language } from "@/content/home";

export const siteOrigin = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://portifolio-product.vercel.app").origin;
export const canIndex = process.env.VERCEL_ENV === "production" || (!process.env.VERCEL_ENV && process.env.NODE_ENV === "production");
export const contentPaths = ["", "/projects/ticket-sports-ingresse", "/projects/app-check-in", "/projects/app-atleta", "/projects/evolucao-site"] as const;
const locales = { pt: "pt_BR", en: "en_US", es: "es_ES" };

export function languageUrls(path: string) {
  return { "pt-BR": `${siteOrigin}/pt${path}`, en: `${siteOrigin}/en${path}`, es: `${siteOrigin}/es${path}`, "x-default": `${siteOrigin}/pt${path}` };
}

export function pageMetadata(lang: Language, path: string, copy: { metaTitle: string; metaDescription: string }): Metadata {
  const title = path ? copy.metaTitle : {
    pt: "Yago Jesus | Product Manager com experiência em desenvolvimento",
    en: "Yago Jesus | Product Manager with a software development background",
    es: "Yago Jesus | Product Manager con experiencia en desarrollo",
  }[lang];
  const image = { url: `${siteOrigin}/social`, width: 1200, height: 630, alt: "Yago Jesus — Product Manager" };
  return {
    metadataBase: new URL(siteOrigin), title, description: copy.metaDescription,
    authors: [{ name: "Yago Jesus", url: `${siteOrigin}/${lang}` }], creator: "Yago Jesus",
    alternates: { canonical: `${siteOrigin}/${lang}${path}`, languages: languageUrls(path) },
    robots: { index: canIndex, follow: canIndex },
    openGraph: { type: "website", siteName: "Yago Jesus — Product Manager", title, description: copy.metaDescription, url: `${siteOrigin}/${lang}${path}`, locale: locales[lang], alternateLocale: languages.filter(value => value !== lang).map(value => locales[value]), images: [image] },
    twitter: { card: "summary_large_image", title, description: copy.metaDescription, images: [image] },
  };
}

export function profileData(lang: Language) {
  const personId = `${siteOrigin}/#yago-jesus`;
  return {
    "@context": "https://schema.org", "@type": "ProfilePage", url: `${siteOrigin}/${lang}`, inLanguage: lang === "pt" ? "pt-BR" : lang,
    mainEntity: { "@type": "Person", "@id": personId, name: "Yago Jesus", jobTitle: "Product Manager", url: `${siteOrigin}/${lang}`, image: `${siteOrigin}/images/yago-casual-esportivo-hq.webp`, sameAs: ["https://www.linkedin.com/in/yago-jesus-9595a8147/"] },
  };
}
