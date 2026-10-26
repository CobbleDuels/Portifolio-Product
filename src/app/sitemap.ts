import type { MetadataRoute } from "next";
import { languages } from "@/content/home";
import { canIndex, contentPaths, languageUrls, siteOrigin } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!canIndex) return [];
  return contentPaths.flatMap(path => languages.map(lang => ({ url: `${siteOrigin}/${lang}${path}`, alternates: { languages: languageUrls(path) } })));
}
