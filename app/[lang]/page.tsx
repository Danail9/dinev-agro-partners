import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FeatureCard } from '@/components/FeatureCard';
import { isValidLocale, siteData } from '@/lib/content';

interface Props {
  params: { lang: string };
}

export default function HomePage({ params }: Props) {
  const locale = isValidLocale(params.lang) ? params.lang : 'en';
  const heroHighlights = locale === 'en'
    ? [
      { title: 'Regional Coverage', description: 'Support for growers across Southern Bulgaria.' },
      { title: 'Fast Execution', description: 'Rapid market response and logistics coordination.' },
      { title: 'Trusted Partnerships', description: 'Long-term cooperation with farmers and suppliers.' }
    ]
    : [
      { title: 'Регионално покритие', description: 'Подкрепа за земеделците в Южна България.' },
      { title: 'Бързо изпълнение', description: 'Бърз пазарен отговор и логистична координация.' },
      { title: 'Доверени партньорства', description: 'Дългосрочно сътрудничество с фермери и доставчици.' }
    ];

  const stats = locale === 'en'
    ? [
      { value: '20+', label: 'Years of experience' },
      { value: '200+', label: 'Partner farms' },
      { value: '98%', label: 'On-time deliveries' },
      { value: '100%', label: 'Transparent pricing' }
    ]
    : [
      { value: '20+', label: 'Години опит' },
      { value: '200+', label: 'Партньорски ферми' },
      { value: '98%', label: 'Навременни доставки' },
      { value: '100%', label: 'Прозрачни цени' }
    ];

  return (
    <div>
      <Header locale={locale} />

      <main>
        <section className="relative overflow-hidden bg-hero bg-cover bg-center text-white">
          <div className="absolute inset-0 bg-brand-dark/85" />
          <div className="container relative py-28 sm:py-32">
            <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.4em] text-brand-gold">{siteData.brandName}</p>
                <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">{siteData.hero.headline[locale]}</h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100/90 sm:text-xl">{siteData.hero.subheadline[locale]}</p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-[#b57e0f]">
                    {locale === 'en' ? 'Request a Quote' : 'Запитване'}
                  </Link>
                  <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/20">
                    {locale === 'en' ? 'Contact Us' : 'Свържете се с нас'}
                  </Link>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-soft backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{locale === 'en' ? 'Core Strengths' : 'Основни предимства'}</p>
                <h2 className="mt-4 text-2xl font-semibold text-white">{locale === 'en' ? 'Premium trading backed by local insight.' : 'Премиум търговия, подкрепена от местни знания.'}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-200/90">{locale === 'en' ? 'Built for farmers, processors and distributors who need clear value and reliable execution every season.' : 'Създадено за фермери, преработватели и дистрибутори, които се нуждаят от ясна стойност и надеждно изпълнение всеки сезон.'}</p>
                <div className="mt-8 space-y-4">
                  {heroHighlights.map((item) => (
                    <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100">
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="mt-2 text-slate-200/90">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/10 p-6 text-center text-slate-100 shadow-soft">
                  <p className="text-3xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-200/90">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{locale === 'en' ? 'About Dinev Agro Partners' : 'За Dinev Agro Partners'}</p>
              <h2 className="mt-4 text-4xl font-semibold text-slate-900">{siteData.about.title[locale]}</h2>
              <div className="mt-6 space-y-4 text-slate-600">
                {siteData.about.content[locale].map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-dark/5 px-5 py-3 text-sm font-semibold text-brand-dark shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-gold" />
                {locale === 'en' ? 'Strong market insight for every harvest.' : 'Силно пазарно познание за всяка реколта.'}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
              <img
                src="/images/hero-farm.jpg"
                alt={locale === 'en' ? 'Field and agriculture logistics' : 'Поле и аграрна логистика'}
                className="h-full w-full min-h-[420px] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{locale === 'en' ? 'Field logistics' : 'Полева логистика'}</p>
                <p className="mt-3 max-w-xs text-lg font-semibold text-white">{locale === 'en' ? 'Reliable transport and storage for quality grain flow.' : 'Надежден транспорт и склад за качествен поток от зърно.'}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-dark/5 border-t border-brand-dark/10">
          <div className="container py-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <p className="text-sm uppercase tracking-[0.25em] text-brand-gold">{locale === 'en' ? 'Grain Trading' : 'Зърнена търговия'}</p>
              <p className="mt-4 text-sm text-slate-700">{locale === 'en' ? 'Wheat, corn, barley, sunflower and rapeseed trading for growers and buyers.' : 'Търговия с пшеница, царевица, ечемик, слънчоглед и рапица за производители и купувачи.'}</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <p className="text-sm uppercase tracking-[0.25em] text-brand-gold">{locale === 'en' ? 'Fertilizer Supply' : 'Доставка на торове'}</p>
              <p className="mt-4 text-sm text-slate-700">{locale === 'en' ? 'Nitrogen, NPK, phosphate and potassium fertilizers managed with seasonal planning.' : 'Азотни, NPK, фосфатни и калиеви торове с сезонно планиране.'}</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <p className="text-sm uppercase tracking-[0.25em] text-brand-gold">{locale === 'en' ? 'Market Insights' : 'Пазарни анализи'}</p>
              <p className="mt-4 text-sm text-slate-700">{locale === 'en' ? 'Regular updates on price movements, export opportunities and seasonal trends.' : 'Редовни обновления за ценови движения, износни възможности и сезонни тенденции.'}</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <p className="text-sm uppercase tracking-[0.25em] text-brand-gold">{locale === 'en' ? 'Logistics' : 'Логистика'}</p>
              <p className="mt-4 text-sm text-slate-700">{locale === 'en' ? 'Coordinated delivery, collection and settlement for every transaction.' : 'Координирани доставки, събиране и разплащане за всяка сделка.'}</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 text-slate-100">
          <div className="container py-20">
            <div className="space-y-6 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{locale === 'en' ? 'Why Choose Us' : 'Защо да изберете нас'}</p>
              <h2 className="text-3xl font-semibold text-white">{locale === 'en' ? 'Premium agricultural trading with trusted delivery.' : 'Премиум селскостопанска търговия с доверена доставка.'}</h2>
              <p className="mx-auto max-w-2xl text-slate-400">{locale === 'en' ? 'Our team combines local market insight, full-process support, and proven logistics to deliver value to farmers and agribusiness partners.' : 'Нашият екип съчетава местно пазарно познание, поддръжка през целия процес и доказана логистика, за да достави стойност на фермерите и агропартньорите.'}</p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {siteData.features.map((feature) => (
                <FeatureCard key={feature.title.en} title={feature.title[locale]} description={feature.description[locale]} />
              ))}
            </div>
          </div>
        </section>

        <section className="container py-20">
          <div className="space-y-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{locale === 'en' ? 'How We Work' : 'Как работим'}</p>
            <h2 className="text-3xl font-semibold text-slate-900">{locale === 'en' ? 'Our Business Process' : 'Нашият бизнес процес'}</h2>
            <p className="mx-auto max-w-2xl text-slate-600">{locale === 'en' ? 'A structured, dependable process designed to turn market insight into fast execution and long-term partnership.' : 'Структуриран и надежден процес, предназначен да превърне пазарното познание във бързо изпълнение и дългосрочно партньорство.'}</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {siteData.process.map((step) => (
              <div key={step.step} className="group rounded-[2rem] border border-slate-200 bg-white p-6 text-slate-800 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-brand-dark text-white text-lg font-semibold">{step.step}</div>
                <h3 className="mt-4 text-xl font-semibold">{step.title[locale]}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
