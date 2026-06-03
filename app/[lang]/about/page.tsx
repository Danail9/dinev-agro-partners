import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { isValidLocale, siteData } from '@/lib/content';

interface Props {
  params: { lang: string };
}

export default function AboutPage({ params }: Props) {
  const locale = isValidLocale(params.lang) ? params.lang : 'en';
  return (
    <div>
      <Header locale={locale} />
      <main className="container py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{siteData.companyStory.headline[locale]}</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900">{siteData.companyStory.headline[locale]}</h1>
            <div className="mt-6 space-y-4 text-slate-600">
              {siteData.companyStory.content[locale].map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-brand-dark/5 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{locale === 'en' ? 'Our Mission' : 'Нашата мисия'}</p>
            <p className="mt-4 text-slate-700">{locale === 'en' ? 'To be the reliable bridge between agricultural producers and market opportunities, delivering transparent execution at every step.' : 'Да бъдем надеждният мост между земеделските производители и пазарните възможности, доставяйки прозрачно изпълнение на всеки етап.'}</p>
          </div>
        </div>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
