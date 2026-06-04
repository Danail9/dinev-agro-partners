"use client";

import Link from "next/link";
import { useState } from "react";
import { Locale, siteData } from "@/lib/content";

const localePaths: Record<Locale, string> = {
  en: "/en",
  bg: "/bg",
};

export function Header({ locale }: { locale: Locale }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="container flex items-center justify-between gap-6 py-3.5">
        <Link
          href={localePaths[locale]}
          className="flex items-center gap-3 group"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-dark to-brand-light text-white font-bold text-sm shadow-soft transition-transform duration-200 group-hover:scale-105">
            D
          </div>
          <div className="block max-w-[120px] sm:max-w-none">
            <p className="truncate text-[12px] font-bold tracking-tight text-slate-900 sm:text-[13px]">
              {siteData.brandName}
            </p>
            <p className="hidden text-[11px] text-slate-500 sm:block">
              {locale === "en"
                ? "Grain & Fertilizer Trading"
                : "Зърно и торове"}
            </p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {siteData.nav.map((item) => (
            <Link
              key={item.key}
              href={`/${locale}${item.href}`}
              className="rounded-lg px-3.5 py-2 text-[13px] font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
            >
              {item.label[locale]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Link
            href={locale === "en" ? "/bg" : "/en"}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 transition-all hover:border-brand-dark/30 hover:text-brand-dark"
          >
            {locale === "en" ? "BG" : "EN"}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 !text-[13px]"
          >
            {locale === "en" ? "Get a Quote" : "Запитване"}
            <svg
              className="ml-1.5 h-3.5 w-3.5"
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

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl">
          <nav className="container flex flex-col py-3">
            {siteData.nav.map((item) => (
              <Link
                key={item.key}
                href={`/${locale}${item.href}`}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-[15px] font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-brand-dark"
              >
                {item.label[locale]}
              </Link>
            ))}
            <Link
              href={`/${locale}/contact`}
              onClick={() => setMenuOpen(false)}
              className="mt-2 btn-primary !justify-center !py-3 !text-[14px]"
            >
              {locale === "en" ? "Get a Quote" : "Запитване"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
