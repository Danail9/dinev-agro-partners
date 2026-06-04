import type { Metadata } from "next";
import { ReactNode } from "react";
import { isValidLocale, siteData } from "@/lib/content";

interface Props {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const validLang = isValidLocale(lang) ? lang : "en";
  return {
    title: `${siteData.brandName} – ${siteData.tagline[validLang]}`,
    description: siteData.hero.subheadline[validLang],
    keywords: siteData.seoKeywords,
    openGraph: {
      title: siteData.brandName,
      description: siteData.hero.subheadline[validLang],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  await params;
  return <>{children}</>;
}
