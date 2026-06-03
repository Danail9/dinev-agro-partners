import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ContactForm } from '@/components/ContactForm';
import { isValidLocale, siteData } from '@/lib/content';

interface Props {
  params: { lang: string };
}

export default function ContactPage({ params }: Props) {
  const locale = isValidLocale(params.lang) ? params.lang : 'en';
  return (
    <div>
      <Header locale={locale} />
      <main className="container py-20">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{siteData.contact.headline[locale]}</p>
            <h1 className="text-4xl font-semibold text-slate-900">{siteData.contact.headline[locale]}</h1>
            <div className="space-y-3 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
              <p className="font-semibold text-slate-900">{locale === 'en' ? 'Contact Information' : 'Контактна информация'}</p>
              <p className="text-slate-600">{siteData.contact.info.address[locale]}</p>
              <p className="text-slate-600">{siteData.contact.info.phone}</p>
              <p className="text-slate-600">{siteData.contact.info.email}</p>
              <p className="text-slate-600">{siteData.contact.info.hours[locale]}</p>
              <a href={`https://wa.me/359881234567`} className="inline-flex rounded-full bg-brand-gold px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#b57e0f]">
                {locale === 'en' ? 'Chat on WhatsApp' : 'Чат в WhatsApp'}
              </a>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-soft">
              <iframe
                className="h-80 w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1231231231234!2d25.123456!3d42.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDA3JzAwLjAiTiAyNcKwMDcnMDAuMCJF!5e0!3m2!1sen!2sbg!4v0000000000000"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              />
            </div>
          </div>
          <ContactForm locale={locale} />
        </div>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
