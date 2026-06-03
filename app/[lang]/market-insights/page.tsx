import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { blogPosts, isValidLocale, siteData } from '@/lib/content';

interface Props {
  params: { lang: string };
}

export default function MarketInsightsPage({ params }: Props) {
  const locale = isValidLocale(params.lang) ? params.lang : 'en';
  return (
    <div>
      <Header locale={locale} />
      <main className="container py-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{siteData.marketInsights.headline[locale]}</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">{siteData.marketInsights.headline[locale]}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">{siteData.marketInsights.description[locale]}</p>
        </div>

        <section className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
              <h2 className="text-xl font-semibold text-slate-900">{post.title[locale]}</h2>
              <p className="mt-4 text-slate-600">{post.excerpt[locale]}</p>
              <Link href={`#`} className="mt-6 inline-flex text-sm font-semibold text-brand-dark hover:text-brand-gold">
                {locale === 'en' ? 'Read More' : 'Прочети още'}
              </Link>
            </article>
          ))}
        </section>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
