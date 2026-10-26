import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      ...["pt", "en", "es"].map(language => ({ source: "/", has: [{ type: "cookie" as const, key: "yago-portfolio-language", value: language }], destination: `/${language}`, permanent: false })),
      ...["en", "es"].map(language => ({ source: "/", has: [{ type: "header" as const, key: "accept-language", value: `${language}(?:[-,;].*)?` }], destination: `/${language}`, permanent: false })),
      { source: "/", destination: "/pt", permanent: false },
    ];
  },
};

export default nextConfig;
