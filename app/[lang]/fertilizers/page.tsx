import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { isValidLocale, siteData } from '@/lib/content';

interface Props {
  params: { lang: string };
}

export default function FertilizersPage({ params }: Props) {
  const locale = isValidLocale(params.lang) ? params.lang : 'en';
  return (
    <div>
      <Header locale={locale} />
      <main className="container py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{siteData.services.fertilizers.title[locale]}</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900">{locale === 'en' ? 'Quality Fertilizer Supply' : 'Качествено снабдяване с торове'}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{locale === 'en' ? 'Providing farmers with reliable access to premium fertilizer products.' : 'Осигуряваме на фермерите надежден достъп до премиум торни продукти.'}</p>
          </div>
          <div className="rounded-[2rem] bg-brand-dark/5 p-8 text-slate-900 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{locale === 'en' ? 'Seasonal planning' : 'Сезонно планиране'}</p>
            <p className="mt-4 text-sm leading-7 text-slate-700">{siteData.services.fertilizers.benefits[locale].join(', ')}</p>
          </div>
        </div>

        <section className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.services.fertilizers.categories.map((category) => (
            <div key={category.title.en} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.28em] text-brand-gold">{category.title[locale]}</p>
              <p className="mt-4 text-slate-700">{category.description[locale]}</p>
              <button className="mt-6 inline-flex rounded-full bg-brand-dark px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#174430]">
                {locale === 'en' ? 'Availability Inquiry' : 'Запитване за наличност'}
              </button>
            </div>
          ))}
        </section>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
