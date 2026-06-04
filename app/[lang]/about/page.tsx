import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { isValidLocale, siteData } from "@/lib/content";

interface Props {
  params: Promise<{ lang: string }>;
}

export default async function AboutPage({ params }: Props) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : "en";
  return (
    <div>
      <Header locale={locale} />
      <main className="container py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src="/images/dd.jpg"
              alt={
                locale === "en"
                  ? "Founder in the wheat field at sunset"
                  : "Основателят в пшеничното поле при залез"
              }
              className="h-full w-full min-h-[420px] object-cover object-top"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">
              {locale === "en"
                ? "The Man Behind the Mission"
                : "Човекът зад мисията"}
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900">
              {locale === "en"
                ? "Rooted in the Land, Driven by Purpose"
                : "Вкоренен в земята, воден от цел"}
            </h1>
            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p>
                {locale === "en"
                  ? "I grew up walking through wheat fields just like the one in this photo — watching the seasons change and learning the rhythm of Bulgarian agriculture from my family."
                  : "Израснах, ходейки през пшеничните полета точно като това на снимката — наблюдавайки как сезоните се сменят и учейки се на ритъма на българското земеделие от семейството ми."}
              </p>
              <p>
                {locale === "en"
                  ? "After 10+ years in the industry, I founded Dinev Agro Partners with one clear goal: to give farmers in Southern Bulgaria a trading partner they can actually trust — someone who speaks their language, understands their challenges, and delivers every single time."
                  : "След 10+ години в индустрията основах Dinev Agro Partners с една ясна цел: да дам на фермерите в Южна България търговски партньор, на когото наистина могат да се доверят — някой, който говори техния език, разбира предизвикателствата им и изпълнява всеки път."}
              </p>
              <p>
                {locale === "en"
                  ? "Today we serve 200+ partner farms with grain trading, fertilizer supply, and market insights. Every handshake matters. Every harvest is personal."
                  : "Днес обслужваме 200+ партньорски ферми с търговия на зърно, доставка на торове и пазарни анализи. Всяко ръкостискане е важно. Всяка реколта е лична."}
              </p>
            </div>
            <div className="mt-8 rounded-2xl bg-brand-dark/5 p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
                {locale === "en" ? "Our Promise" : "Нашето обещание"}
              </p>
              <p className="mt-3 text-slate-700 leading-relaxed">
                {locale === "en"
                  ? "Transparent pricing, reliable logistics, and honest partnership — not just for one season, but for every season ahead."
                  : "Прозрачни цени, надеждна логистика и честно партньорство — не само за един сезон, а за всеки следващ."}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
