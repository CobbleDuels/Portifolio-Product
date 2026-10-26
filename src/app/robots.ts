import type { MetadataRoute } from "next";
import { canIndex, siteOrigin } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return canIndex
    ? { rules: { userAgent: "*", allow: "/" }, sitemap: `${siteOrigin}/sitemap.xml` }
    : { rules: { userAgent: "*", disallow: "/" } };
}
