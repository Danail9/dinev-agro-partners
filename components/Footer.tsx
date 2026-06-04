import Link from "next/link";
import { Locale, siteData } from "@/lib/content";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-slate-100 bg-slate-950">
      <div className="container grid gap-10 py-16 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-dark to-brand-light text-white font-bold text-xs">
              D
            </div>
            <p className="text-sm font-bold text-white">{siteData.brandName}</p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            {siteData.tagline[locale]}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            {locale === "en" ? "Contact" : "Контакт"}
          </p>
          <div className="mt-4 space-y-2.5 text-sm text-slate-300">
            <p>{siteData.contact.info.address[locale]}</p>
            <p>{siteData.contact.info.phone}</p>
            <p>{siteData.contact.info.email}</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            {locale === "en" ? "Navigation" : "Навигация"}
          </p>
          <nav className="mt-4 flex flex-col gap-2.5 text-sm text-slate-300">
            {siteData.nav.map((item) => (
              <Link
                key={item.key}
                href={`/${locale}${item.href}`}
                className="transition-colors hover:text-white"
              >
                {item.label[locale]}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-slate-800/60">
        <div className="container flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {siteData.brandName}.{" "}
            {locale === "en"
              ? "All rights reserved."
              : "Всички права запазени."}
          </p>
          <p className="text-xs text-slate-600">
            {locale === "en" ? "Southern Bulgaria" : "Южна България"}
          </p>
        </div>
      </div>
    </footer>
  );
}
