import Link from 'next/link';
import { Locale, siteData } from '@/lib/content';

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="container grid gap-8 py-12 md:grid-cols-3">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{siteData.brandName}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">{siteData.tagline[locale]}</p>
        </div>

        <div>
          <p className="font-semibold text-white">{locale === 'en' ? 'Contact' : 'Контакт'}</p>
          <p className="mt-3 text-sm text-slate-300">{siteData.contact.info.address[locale]}</p>
          <p className="mt-2 text-sm text-slate-300">{siteData.contact.info.phone}</p>
          <p className="mt-1 text-sm text-slate-300">{siteData.contact.info.email}</p>
        </div>

        <div>
          <p className="font-semibold text-white">{locale === 'en' ? 'Explore' : 'Навигация'}</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300">
            {siteData.nav.map((item) => (
              <Link key={item.key} href={`/${locale}${item.href}`} className="transition hover:text-white">
                {item.label[locale]}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Dinev Agro Partners. {locale === 'en' ? 'All rights reserved.' : 'Всички права запазени.'}
      </div>
    </footer>
  );
}
