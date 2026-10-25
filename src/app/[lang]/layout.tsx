import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { home, isLanguage, languages } from "@/content/home";
import "../globals.css";

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  return { title: home[lang].metaTitle, description: home[lang].metaDescription, robots: { index: false, follow: false } };
}

export default async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return <html lang={lang === "pt" ? "pt-BR" : lang} suppressHydrationWarning>
    <head><script dangerouslySetInnerHTML={{ __html: `try{document.documentElement.dataset.theme=localStorage.getItem('yago-portfolio-theme')==='light'?'light':'dark'}catch{document.documentElement.dataset.theme='dark'}` }} /></head>
    <body>{children}</body>
  </html>;
}
