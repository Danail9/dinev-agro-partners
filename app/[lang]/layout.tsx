import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { isValidLocale, siteData } from '@/lib/content';

interface Props {
  children: ReactNode;
  params: { lang: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const lang = isValidLocale(params.lang) ? params.lang : 'en';
  return {
    title: `${siteData.brandName} – ${siteData.tagline[lang]}`,
    description: siteData.hero.subheadline[lang],
    keywords: siteData.seoKeywords,
    openGraph: {
      title: siteData.brandName,
      description: siteData.hero.subheadline[lang]
    }
  };
}

export default function LocaleLayout({ children }: Props) {
  return <>{children}</>;
}
