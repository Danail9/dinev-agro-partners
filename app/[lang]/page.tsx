import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeatureCard } from "@/components/FeatureCard";
import { isValidLocale, siteData } from "@/lib/content";

interface Props {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : "en";

  const stats =
    locale === "en"
      ? [
          { value: "10+", label: "Years of Experience" },
          { value: "200+", label: "Partner Farms" },
          { value: "98%", label: "On-time Delivery" },
          { value: "100%", label: "Transparent Pricing" },
        ]
      : [
          { value: "10+", label: "Години опит" },
          { value: "200+", label: "Партньорски ферми" },
          { value: "98%", label: "Навременни доставки" },
          { value: "100%", label: "Прозрачни цени" },
        ];

  const services =
    locale === "en"
      ? [
          {
            icon: "🌾",
            title: "Grain Trading",
            description:
              "Wheat, corn, barley, sunflower and rapeseed — competitive markets for growers and buyers.",
            href: `/${locale}/grain-trading`,
          },
          {
            icon: "🧪",
            title: "Fertilizer Supply",
            description:
              "Nitrogen, NPK, phosphate and potassium fertilizers with seasonal planning support.",
            href: `/${locale}/fertilizers`,
          },
          {
            icon: "📊",
            title: "Market Insights",
            description:
              "Price movements, export opportunities, and seasonal trend reports for informed decisions.",
            href: `/${locale}/market-insights`,
          },
          {
            icon: "🚛",
            title: "Logistics",
            description:
              "Coordinated delivery, collection, and settlement for every transaction.",
            href: `/${locale}/contact`,
          },
        ]
      : [
          {
            icon: "🌾",
            title: "Зърнена търговия",
            description:
              "Пшеница, царевица, ечемик, слънчоглед и рапица — конкурентни пазари за производители и купувачи.",
            href: `/${locale}/grain-trading`,
          },
          {
            icon: "🧪",
            title: "Доставка на торове",
            description:
              "Азотни, NPK, фосфатни и калиеви торове със сезонно планиране.",
            href: `/${locale}/fertilizers`,
          },
          {
            icon: "📊",
            title: "Пазарни анализи",
            description:
              "Ценови движения, износни възможности и сезонни тенденции за информирани решения.",
            href: `/${locale}/market-insights`,
          },
          {
            icon: "🚛",
            title: "Логистика",
            description:
              "Координирани доставки, събиране и разплащане за всяка сделка.",
            href: `/${locale}/contact`,
          },
        ];

  return (
    <div className="min-h-screen">
      <Header locale={locale} />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-hero bg-cover bg-center min-h-[85vh] flex items-center">
          {/* Multi-layer overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          <div className="absolute inset-0 bg-brand-dark/20" />
          <div className="container relative py-28 sm:py-36 lg:py-44">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                {locale === "en"
                  ? "Trusted Agricultural Partner"
                  : "Доверен агро партньор"}
              </div>
              <h1 className="mt-7 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
                {siteData.hero.headline[locale]}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                {siteData.hero.subheadline[locale]}
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center rounded-xl bg-brand-gold px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-200 hover:bg-[#b8890f] hover:shadow-2xl hover:-translate-y-0.5"
                >
                  {locale === "en" ? "Request a Quote" : "Запитване"}
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
                <Link
                  href={`/${locale}/about`}
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white/50 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:border-white/80"
                >
                  {locale === "en" ? "Learn More" : "Научете повече"}
                </Link>
              </div>
            </div>

            {/* Stats row inside hero */}
            <div className="mt-16 grid grid-cols-2 gap-3 sm:mt-20 lg:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/15 bg-black/30 px-5 py-5 backdrop-blur-xl"
                >
                  <p className="text-3xl font-bold text-white">{item.value}</p>
                  <p className="mt-1 text-sm font-medium text-white/70">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-20 sm:py-28">
          <div className="container">
            <div className="text-center">
              <div className="section-label mx-auto">
                {locale === "en" ? "Our Services" : "Услуги"}
              </div>
              <h2 className="section-heading mt-5">
                {locale === "en"
                  ? "End-to-end agricultural trading solutions"
                  : "Цялостни решения за агро търговия"}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
                {locale === "en"
                  ? "From grain procurement to fertilizer supply — everything your farm needs under one trusted partnership."
                  : "От закупуване на зърно до доставка на торове — всичко, от което се нуждае вашата ферма, под едно доверено партньорство."}
              </p>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group relative rounded-2xl border border-slate-100 bg-white p-7 shadow-soft transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-brand-dark/10"
                >
                  <span className="text-3xl">{service.icon}</span>
                  <h3 className="mt-4 text-base font-semibold text-slate-900 group-hover:text-brand-dark transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-xs font-semibold text-brand-dark opacity-0 transition-opacity group-hover:opacity-100">
                    {locale === "en" ? "Learn more" : "Научете повече"}
                    <svg
                      className="ml-1 h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="border-y border-slate-100 bg-slate-50/50 py-20 sm:py-28">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div>
                <div className="section-label">
                  {locale === "en" ? "About Us" : "За нас"}
                </div>
                <h2 className="section-heading mt-5">
                  {siteData.about.title[locale]}
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                  {siteData.about.content[locale].map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <Link href={`/${locale}/about`} className="btn-secondary mt-8">
                  {locale === "en"
                    ? "Read Our Story"
                    : "Прочетете нашата история"}
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-card">
                  <img
                    src="/images/wheat.jpg"
                    alt={
                      locale === "en"
                        ? "Field and agriculture logistics"
                        : "Поле и аграрна логистика"
                    }
                    className="h-full w-full min-h-[400px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 rounded-2xl border border-slate-100 bg-white p-5 shadow-card">
                  <p className="text-2xl font-bold text-brand-dark">10+</p>
                  <p className="text-sm text-slate-500">
                    {locale === "en"
                      ? "Years serving Southern Bulgaria"
                      : "Години в Южна България"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 sm:py-28">
          <div className="container">
            <div className="text-center">
              <div className="section-label mx-auto">
                {locale === "en" ? "Why Choose Us" : "Защо нас"}
              </div>
              <h2 className="section-heading mt-5">
                {locale === "en"
                  ? "Built on trust, driven by results"
                  : "Основано на доверие, водено от резултати"}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
                {locale === "en"
                  ? "Our team combines local market insight, full-process support, and proven logistics to deliver value to farmers and agribusiness partners."
                  : "Нашият екип съчетава местно пазарно познание, поддръжка през целия процес и доказана логистика за фермерите и агропартньорите."}
              </p>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {siteData.features.map((feature) => (
                <FeatureCard
                  key={feature.title.en}
                  title={feature.title[locale]}
                  description={feature.description[locale]}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="border-y border-slate-100 bg-brand-dark py-20 sm:py-28">
          <div className="container">
            <div className="text-center">
              <div className="section-label !bg-white/10 !text-brand-gold-light border border-white/10 mx-auto">
                {locale === "en" ? "Our Process" : "Нашият процес"}
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {locale === "en"
                  ? "Simple, transparent, reliable"
                  : "Просто, прозрачно, надеждно"}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
                {locale === "en"
                  ? "A structured process designed to turn market insight into fast execution and long-term partnership."
                  : "Структуриран процес, превръщащ пазарното познание в бързо изпълнение и дългосрочно партньорство."}
              </p>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {siteData.process.slice(0, 4).map((step) => (
                <div
                  key={step.step}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold/20 text-brand-gold-light text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">
                    {step.title[locale]}
                  </h3>
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {siteData.process.slice(4).map((step) => (
                <div
                  key={step.step}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold/20 text-brand-gold-light text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">
                    {step.title[locale]}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-28">
          <div className="container">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-dark to-brand-light p-10 sm:p-16 text-center shadow-card">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,160,23,0.15),transparent_60%)]" />
              <div className="relative">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  {locale === "en"
                    ? "Ready to grow your business?"
                    : "Готови ли сте да развиете бизнеса си?"}
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
                  {locale === "en"
                    ? "Get competitive pricing, reliable logistics, and a trusted partner for every season."
                    : "Получете конкурентни цени, надеждна логистика и доверен партньор за всеки сезон."}
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href={`/${locale}/contact`}
                    className="btn-gold !px-8 !py-4 !text-base"
                  >
                    {locale === "en" ? "Get Started Today" : "Започнете днес"}
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                  <Link
                    href={`/${locale}/about`}
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all duration-200 hover:bg-white/10"
                  >
                    {locale === "en" ? "About Our Team" : "За нашия екип"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
