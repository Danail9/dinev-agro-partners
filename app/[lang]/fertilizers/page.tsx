import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { isValidLocale, siteData } from "@/lib/content";

interface Props {
  params: Promise<{ lang: string }>;
}

const fertIcons: Record<string, string> = {
  "Nitrogen Fertilizers": "🧪",
  "NPK Fertilizers": "⚗️",
  "Phosphate Fertilizers": "🔬",
  "Potassium Fertilizers": "💎",
};

export default async function FertilizersPage({ params }: Props) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : "en";
  return (
    <div className="min-h-screen">
      <Header locale={locale} />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-brand-dark">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,160,23,0.1),transparent_50%)]" />
          <div className="container relative py-20 sm:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="section-label !bg-white/10 !text-brand-gold-light border border-white/10">
                  {siteData.services.fertilizers.title[locale]}
                </div>
                <h1 className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {locale === "en"
                    ? "Quality Fertilizer Supply"
                    : "Качествено снабдяване с торове"}
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                  {locale === "en"
                    ? "Providing farmers with reliable access to premium fertilizer products, seasonal planning support, and competitive pricing year-round."
                    : "Осигуряваме на фермерите надежден достъп до премиум торни продукти, подкрепа при сезонно планиране и конкурентни цени през цялата година."}
                </p>
                <Link
                  href={`/${locale}/contact`}
                  className="btn-gold mt-8 !px-8 !py-4"
                >
                  {locale === "en"
                    ? "Get Fertilizer Quote"
                    : "Запитване за торове"}
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
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
                  {locale === "en" ? "Why Our Supply" : "Защо нашите торове"}
                </p>
                <div className="mt-5 space-y-3">
                  {siteData.services.fertilizers.benefits[locale].map(
                    (benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                      >
                        <svg
                          className="h-4 w-4 shrink-0 text-brand-gold"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        <span className="text-sm font-medium text-white/90">
                          {benefit}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fertilizer Categories */}
        <section className="py-20 sm:py-28">
          <div className="container">
            <div className="text-center">
              <div className="section-label mx-auto">
                {locale === "en" ? "Products" : "Продукти"}
              </div>
              <h2 className="section-heading mt-5">
                {locale === "en"
                  ? "Fertilizer categories we supply"
                  : "Категории торове, които доставяме"}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
                {locale === "en"
                  ? "From nitrogen to potassium — complete fertilizer solutions tailored to your soil and crop requirements."
                  : "От азот до калий — пълни торни решения, съобразени с вашата почва и нужди на културите."}
              </p>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {siteData.services.fertilizers.categories.map((category) => (
                <div
                  key={category.title.en}
                  className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-soft transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-brand-dark/10"
                >
                  <span className="text-3xl">
                    {fertIcons[category.title.en] || "🧪"}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-slate-900 group-hover:text-brand-dark transition-colors">
                    {category.title[locale]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {category.description[locale]}
                  </p>
                  <Link
                    href={`/${locale}/contact`}
                    className="mt-5 inline-flex items-center text-xs font-semibold text-brand-dark opacity-0 transition-all group-hover:opacity-100"
                  >
                    {locale === "en"
                      ? "Check availability"
                      : "Проверете наличност"}
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
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-y border-slate-100 bg-slate-50/50 py-20 sm:py-28">
          <div className="container">
            <div className="text-center">
              <div className="section-label mx-auto">
                {locale === "en" ? "Our Advantage" : "Нашето предимство"}
              </div>
              <h2 className="section-heading mt-5">
                {locale === "en"
                  ? "What sets our supply apart"
                  : "Какво ни отличава"}
              </h2>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {siteData.services.fertilizers.benefits[locale].map(
                (benefit, i) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-soft"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-dark/5 text-sm font-bold text-brand-dark">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-sm font-medium leading-relaxed text-slate-700">
                      {benefit}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28">
          <div className="container">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-dark to-brand-light p-10 text-center shadow-card sm:p-16">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,160,23,0.15),transparent_60%)]" />
              <div className="relative">
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  {locale === "en"
                    ? "Plan your seasonal fertilizer supply"
                    : "Планирайте сезонната доставка на торове"}
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-base text-white/70">
                  {locale === "en"
                    ? "Contact us early for the best pricing and guaranteed availability for the upcoming season."
                    : "Свържете се с нас навреме за най-добри цени и гарантирана наличност за предстоящия сезон."}
                </p>
                <Link
                  href={`/${locale}/contact`}
                  className="btn-gold mt-8 !px-8 !py-4"
                >
                  {locale === "en" ? "Contact Our Team" : "Свържете се с нас"}
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
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
