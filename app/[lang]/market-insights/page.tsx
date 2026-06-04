import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { blogPosts, isValidLocale, siteData } from "@/lib/content";

interface Props {
  params: Promise<{ lang: string }>;
}

export default async function MarketInsightsPage({ params }: Props) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : "en";

  const topics =
    locale === "en"
      ? [
          "Grain Prices",
          "Export Markets",
          "Seasonal Trends",
          "Fertilizer Costs",
          "Policy Updates",
          "Weather Impact",
        ]
      : [
          "Цени на зърно",
          "Износни пазари",
          "Сезонни тенденции",
          "Цени на торове",
          "Политически обновления",
          "Влияние на времето",
        ];

  return (
    <div className="min-h-screen">
      <Header locale={locale} />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-brand-dark">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,160,23,0.1),transparent_50%)]" />
          <div className="container relative py-20 sm:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="section-label !bg-white/10 !text-brand-gold-light border border-white/10">
                  {locale === "en"
                    ? "Market Intelligence"
                    : "Пазарно разузнаване"}
                </div>
                <h1 className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {siteData.marketInsights.headline[locale]}
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                  {siteData.marketInsights.description[locale]}
                </p>
                <Link
                  href={`/${locale}/contact`}
                  className="btn-gold mt-8 !px-8 !py-4"
                >
                  {locale === "en" ? "Subscribe to Updates" : "Абонирайте се"}
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
                  {locale === "en"
                    ? "Topics We Cover"
                    : "Теми, които покриваме"}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {topics.map((topic) => (
                    <span
                      key={topic}
                      className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-20 sm:py-28">
          <div className="container">
            <div className="text-center">
              <div className="section-label mx-auto">
                {locale === "en" ? "Latest Insights" : "Последни анализи"}
              </div>
              <h2 className="section-heading mt-5">
                {locale === "en"
                  ? "Stay ahead of the market"
                  : "Бъдете крачка пред пазара"}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
                {locale === "en"
                  ? "Regular updates on pricing, export opportunities, and seasonal trends to help you make informed decisions."
                  : "Редовни обновления за цени, износни възможности и сезонни тенденции за информирани решения."}
              </p>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, i) => (
                <article
                  key={post.slug}
                  className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-soft transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-brand-dark/10"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-dark/5 text-sm font-bold text-brand-dark">
                    📊
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900 group-hover:text-brand-dark transition-colors">
                    {post.title[locale]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {post.excerpt[locale]}
                  </p>
                  <span className="mt-5 inline-flex items-center text-xs font-semibold text-brand-dark opacity-0 transition-opacity group-hover:opacity-100">
                    {locale === "en" ? "Read more" : "Прочети още"}
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
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="border-y border-slate-100 bg-slate-50/50 py-20 sm:py-28">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <div className="section-label mx-auto">
                {locale === "en" ? "How It Works" : "Как работи"}
              </div>
              <h2 className="section-heading mt-5">
                {locale === "en"
                  ? "Market data you can act on"
                  : "Пазарни данни, по които можете да действате"}
              </h2>
              <p className="mt-4 text-lg text-slate-500">
                {locale === "en"
                  ? "Our team monitors regional and international agricultural markets daily, distilling complex data into clear, actionable insights for our partners."
                  : "Нашият екип следи регионалните и международните аграрни пазари ежедневно, превръщайки сложни данни в ясни и приложими анализи за нашите партньори."}
              </p>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-3">
              {(locale === "en"
                ? [
                    {
                      step: "01",
                      title: "Data Collection",
                      desc: "We gather pricing, trade volume, and trend data from multiple reliable sources.",
                    },
                    {
                      step: "02",
                      title: "Analysis",
                      desc: "Our experts interpret the data in context of regional conditions and global factors.",
                    },
                    {
                      step: "03",
                      title: "Delivery",
                      desc: "You receive clear reports and recommendations tailored to your situation.",
                    },
                  ]
                : [
                    {
                      step: "01",
                      title: "Събиране на данни",
                      desc: "Събираме данни за цени, обеми и тенденции от множество надеждни източници.",
                    },
                    {
                      step: "02",
                      title: "Анализ",
                      desc: "Нашите експерти интерпретират данните в контекста на регионални и глобални фактори.",
                    },
                    {
                      step: "03",
                      title: "Доставка",
                      desc: "Получавате ясни доклади и препоръки, съобразени с вашата ситуация.",
                    },
                  ]
              ).map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-slate-100 bg-white p-7 shadow-soft text-center"
                >
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-brand-dark/5 text-sm font-bold text-brand-dark">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>
              ))}
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
                    ? "Want personalized market insights?"
                    : "Искате персонализирани пазарни анализи?"}
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-base text-white/70">
                  {locale === "en"
                    ? "Our team provides tailored reports and pricing consultations for your specific crops and markets."
                    : "Нашият екип предоставя персонализирани доклади и ценови консултации за вашите конкретни култури и пазари."}
                </p>
                <Link
                  href={`/${locale}/contact`}
                  className="btn-gold mt-8 !px-8 !py-4"
                >
                  {locale === "en" ? "Talk to an Expert" : "Говорете с експерт"}
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
