"use client";

import { useState } from "react";

const labels = {
  en: {
    name: "Full Name",
    company: "Company",
    phone: "Phone Number",
    email: "Email Address",
    message: "Your Message",
    submit: "Send Message",
    success: "Your message is ready to send through your email client.",
    formTitle: "Send us a message",
    formDesc:
      "Fill out the form below and we'll get back to you within 24 hours.",
  },
  bg: {
    name: "Име и фамилия",
    company: "Компания",
    phone: "Телефонен номер",
    email: "Имейл адрес",
    message: "Вашето съобщение",
    submit: "Изпрати",
    success: "Съобщението е готово за изпращане чрез вашия имейл клиент.",
    formTitle: "Изпратете ни съобщение",
    formDesc: "Попълнете формата и ще се свържем с вас до 24 часа.",
  },
};

export function ContactForm({ locale }: { locale: "en" | "bg" }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = `Name: ${form.name}%0D%0ACompany: ${form.company}%0D%0APhone: ${form.phone}%0D%0AEmail: ${form.email}%0D%0AMessage: ${form.message}`;
    window.location.href = `mailto:info@dinev-agro-partners.bg?subject=Contact%20Request&body=${body}`;
    setSent(true);
  };

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-soft sm:p-10">
      <h2 className="text-lg font-bold text-slate-900">
        {labels[locale].formTitle}
      </h2>
      <p className="mt-1 text-sm text-slate-500">{labels[locale].formDesc}</p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          {(["name", "company", "phone", "email"] as const).map((field) => (
            <label key={field} className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {labels[locale][field]}
              </span>
              <input
                type={field === "email" ? "email" : "text"}
                required
                value={form[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-brand-dark focus:bg-white focus:ring-2 focus:ring-brand-dark/10"
                placeholder={labels[locale][field]}
              />
            </label>
          ))}
        </div>
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            {labels[locale].message}
          </span>
          <textarea
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="mt-1.5 w-full min-h-[140px] rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-brand-dark focus:bg-white focus:ring-2 focus:ring-brand-dark/10 resize-none"
            placeholder={
              locale === "en"
                ? "Tell us about your needs..."
                : "Разкажете ни за вашите нужди..."
            }
          />
        </label>
        <div className="flex items-center gap-4">
          <button type="submit" className="btn-primary !px-8 !py-3.5">
            {labels[locale].submit}
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
          </button>
          {sent && (
            <p className="flex items-center gap-1.5 text-sm font-medium text-brand-dark">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              {labels[locale].success}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
