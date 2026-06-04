import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
import { isValidLocale, siteData } from "@/lib/content";

interface Props {
  params: Promise<{ lang: string }>;
}

export default async function ContactPage({ params }: Props) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : "en";

  const contactDetails = [
    {
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      label: locale === "en" ? "Address" : "Адрес",
      value: siteData.contact.info.address[locale],
    },
    {
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      label: locale === "en" ? "Phone" : "Телефон",
      value: siteData.contact.info.phone,
    },
    {
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      label: locale === "en" ? "Email" : "Имейл",
      value: siteData.contact.info.email,
    },
    {
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      label: locale === "en" ? "Working Hours" : "Работно време",
      value: siteData.contact.info.hours[locale],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header locale={locale} />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-brand-dark">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.08),transparent_50%)]" />
          <div className="container relative py-16 sm:py-20 text-center">
            <div className="section-label !bg-white/10 !text-brand-gold-light border border-white/10 mx-auto">
              {locale === "en" ? "Get In Touch" : "Свържете се с нас"}
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {siteData.contact.headline[locale]}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/65">
              {locale === "en"
                ? "We're here to help. Reach out for grain pricing, fertilizer orders, or general inquiries."
                : "Тук сме да помогнем. Свържете се за цени на зърно, поръчки на торове или общи запитвания."}
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 sm:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              {/* Left: Info */}
              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-soft">
                  <h2 className="text-lg font-bold text-slate-900">
                    {locale === "en"
                      ? "Contact Information"
                      : "Контактна информация"}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {contactDetails.map((detail) => (
                      <div
                        key={detail.label}
                        className="flex items-start gap-4"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark/5 text-brand-dark">
                          {detail.icon}
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            {detail.label}
                          </p>
                          <p className="mt-0.5 text-sm font-medium text-slate-700">
                            {detail.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-6">
                    <a
                      href="https://wa.me/359881234567"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#25D366]/10 px-5 py-3 text-sm font-semibold text-[#25D366] transition-all hover:bg-[#25D366]/20"
                    >
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      {locale === "en" ? "Chat on WhatsApp" : "Чат в WhatsApp"}
                    </a>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-soft">
                  <iframe
                    className="h-64 w-full"
                    src="https://www.google.com/maps?q=%D1%83%D0%BB.%20%D0%96%D0%B5%D0%BB%D1%8C%D0%BE%20%D0%B2%D0%BE%D0%B9%D0%B2%D0%BE%D0%B4%D0%B0%2013%2C%20%D0%9A%D0%B0%D0%B1%D0%B8%D0%BB%D0%B5%2C%20%D0%AF%D0%BC%D0%B1%D0%BE%D0%BB&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                  />
                </div>
              </div>

              {/* Right: Form */}
              <ContactForm locale={locale} />
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
