import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { isValidLocale, siteData } from "@/lib/content";

interface Props {
  params: Promise<{ lang: string }>;
}

const grainIcons: Record<string, string> = {
  Wheat: "🌾",
  Corn: "🌽",
  Barley: "🌿",
  Sunflower: "🌻",
  Rapeseed: "🟡",
  Oats: "🌾",
};

export default async function GrainTradingPage({ params }: Props) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : "en";
  return (
    <div className="min-h-screen">
      <Header locale={locale} />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-brand-dark">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,160,23,0.1),transparent_50%)]" />
          <div className="container relative py-20 sm:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="section-label !bg-white/10 !text-brand-gold-light border border-white/10">
                  {siteData.services.grain.title[locale]}
                </div>
                <h1 className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {locale === "en"
                    ? "Grain Trading Solutions"
                    : "Решения за зърнена търговия"}
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                  {locale === "en"
                    ? "We connect agricultural producers with buyers and processors through efficient and transparent grain trading services."
                    : "Свързваме земеделските производители с купувачи и преработватели чрез ефективни и прозрачни услуги за зърнена търговия."}
                </p>
                <Link
                  href={`/${locale}/contact`}
                  className="btn-gold mt-8 !px-8 !py-4"
                >
                  {locale === "en" ? "Request Pricing" : "Изискайте цена"}
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
                  {locale === "en" ? "What We Trade" : "Какво търгуваме"}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {siteData.services.grain.items.map((item) => (
                    <span
                      key={item.name.en}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white"
                    >
                      {grainIcons[item.name.en] || "🌱"} {item.name[locale]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grain Items */}
        <section className="py-20 sm:py-28">
          <div className="container">
            <div className="text-center">
              <div className="section-label mx-auto">
                {locale === "en" ? "Commodities" : "Стоки"}
              </div>
              <h2 className="section-heading mt-5">
                {locale === "en"
                  ? "Grains we buy and sell"
                  : "Зърнени култури, които купуваме и продаваме"}
              </h2>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {siteData.services.grain.items.map((item) => (
                <div
                  key={item.name.en}
                  className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-soft transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-brand-dark/10"
                >
                  <span className="text-3xl">
                    {grainIcons[item.name.en] || "🌱"}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-slate-900 group-hover:text-brand-dark transition-colors">
                    {item.name[locale]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {item.description[locale]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="border-y border-slate-100 bg-slate-50/50 py-20 sm:py-28">
          <div className="container">
            <div className="text-center">
              <div className="section-label mx-auto">
                {locale === "en" ? "Our Services" : "Нашите услуги"}
              </div>
              <h2 className="section-heading mt-5">
                {locale === "en"
                  ? "End-to-end grain trading support"
                  : "Цялостна подкрепа за зърнена търговия"}
              </h2>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {siteData.services.grain.services[locale].map((service, i) => (
                <div
                  key={service}
                  className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-soft"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-dark/5 text-sm font-bold text-brand-dark">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-slate-700">
                    {service}
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
                    ? "Need a grain trading consultation?"
                    : "Нуждаете се от консултация за зърнена търговия?"}
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-base text-white/70">
                  {locale === "en"
                    ? "Our team is ready to provide personalized market insight and competitive pricing for your next harvest."
                    : "Нашият екип е готов да предостави персонализиран пазарен анализ и конкурентни цени за следващата ви реколта."}
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
