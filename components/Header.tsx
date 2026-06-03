import Link from 'next/link';
import { Locale, siteData } from '@/lib/content';

const localePaths: Record<Locale, string> = {
  en: '/en',
  bg: '/bg'
};

export function Header({ locale }: { locale: Locale }) {
  return (
    <header className="sticky top-0 z-50 bg-white/95 border-b border-slate-200 backdrop-blur">
      <div className="container flex items-center justify-between gap-6 py-4">
        <Link href={localePaths[locale]} className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-2xl bg-brand-dark text-white grid place-items-center font-semibold">D</div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{siteData.brandName}</p>
            <p className="font-semibold text-slate-900">{siteData.tagline[locale]}</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          {siteData.nav.map((item) => (
            <Link key={item.key} href={`/${locale}${item.href}`} className="transition hover:text-brand-dark">
              {item.label[locale]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href={locale === 'en' ? '/bg' : '/en'} className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 transition hover:border-brand-dark hover:text-brand-dark">
            {locale === 'en' ? 'BG' : 'EN'}
          </Link>
          <Link href={`/${locale}/contact`} className="rounded-full bg-brand-dark px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#174430]">
            {locale === 'en' ? 'Request a Quote' : 'Запитване'}
          </Link>
        </div>
      </div>
    </header>
  );
}
