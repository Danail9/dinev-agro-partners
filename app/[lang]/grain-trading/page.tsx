import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { isValidLocale, siteData } from '@/lib/content';

interface Props {
  params: { lang: string };
}

export default function GrainTradingPage({ params }: Props) {
  const locale = isValidLocale(params.lang) ? params.lang : 'en';
  return (
    <div>
      <Header locale={locale} />
      <main className="container py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{siteData.services.grain.title[locale]}</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900">{locale === 'en' ? 'Grain Trading Solutions' : 'Решения за зърнена търговия'}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{locale === 'en' ? 'We connect agricultural producers with buyers and processors through efficient and transparent grain trading services.' : 'Свързваме земеделските производители с купувачи и преработватели чрез ефективни и прозрачни услуги за зърнена търговия.'}</p>
          </div>
          <div className="rounded-[2rem] bg-brand-dark/5 p-8 text-slate-900 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{locale === 'en' ? 'Need a quote?' : 'Нуждаете се от оферта?'}</p>
            <p className="mt-4 text-sm leading-7 text-slate-700">{locale === 'en' ? 'Contact our grain trading team for a personalized market consultation.' : 'Свържете се с нашия екип за зърнена търговия за персонализирана пазарна консултация.'}</p>
            <Link href={`/${locale}/contact`} className="mt-6 inline-flex rounded-full bg-brand-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#174430]">
              {locale === 'en' ? 'Request Pricing' : 'Изискайте цена'}
            </Link>
          </div>
        </div>

        <section className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {siteData.services.grain.items.map((item) => (
            <div key={item.name.en} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.28em] text-brand-gold">{item.name[locale]}</p>
              <p className="mt-4 text-slate-700">{item.description[locale]}</p>
            </div>
          ))}
        </section>

        <section className="mt-20 rounded-[2rem] bg-brand-dark/5 p-10 shadow-soft">
          <h2 className="text-3xl font-semibold text-slate-900">{locale === 'en' ? 'Grain Trading Services' : 'Услуги за зърнена търговия'}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {siteData.services.grain.services[locale].map((service) => (
              <div key={service} className="rounded-3xl bg-white p-6 text-slate-700 shadow-sm">{service}</div>
            ))}
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
