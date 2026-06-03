'use client';

import { useState } from 'react';

const labels = {
  en: {
    name: 'Name',
    company: 'Company',
    phone: 'Phone',
    email: 'Email',
    message: 'Message',
    submit: 'Send Message',
    success: 'Your message is ready to send through your email client.'
  },
  bg: {
    name: 'Име',
    company: 'Компания',
    phone: 'Телефон',
    email: 'Имейл',
    message: 'Съобщение',
    submit: 'Изпрати',
    success: 'Съобщението е готово за изпращане чрез вашия имейл клиент.'
  }
};

export function ContactForm({ locale }: { locale: 'en' | 'bg' }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', message: '' });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = `Name: ${form.name}%0D%0ACompany: ${form.company}%0D%0APhone: ${form.phone}%0D%0AEmail: ${form.email}%0D%0AMessage: ${form.message}`;
    window.location.href = `mailto:info@dinev-agro-partners.bg?subject=Contact%20Request&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
      <div className="grid gap-5 sm:grid-cols-2">
        {(['name', 'company', 'phone', 'email'] as const).map((field) => (
          <label key={field} className="block text-sm font-medium text-slate-700">
            {labels[locale][field]}
            <input
              type={field === 'email' ? 'email' : 'text'}
              required
              value={form[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-gold/20"
            />
          </label>
        ))}
      </div>
      <label className="block text-sm font-medium text-slate-700">
        {labels[locale].message}
        <textarea
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-2 w-full min-h-[160px] rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-gold/20"
        />
      </label>
      <button type="submit" className="inline-flex items-center justify-center rounded-full bg-brand-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#174430]">
        {labels[locale].submit}
      </button>
      {sent ? <p className="text-sm text-brand-dark">{labels[locale].success}</p> : null}
    </form>
  );
}
