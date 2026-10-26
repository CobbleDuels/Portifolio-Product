import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppCaseStudy } from "@/components/app-case-study";
import { isLanguage } from "@/content/home";
import { checkInCase } from "@/content/app-cases";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  return pageMetadata(lang, "/projects/app-check-in", checkInCase[lang]);
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return <AppCaseStudy lang={lang} path="/projects/app-check-in" visual={1} copy={checkInCase[lang]} />;
}
