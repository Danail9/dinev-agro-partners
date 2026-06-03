export function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <p className="text-sm uppercase tracking-[0.25em] text-brand-gold">{title}</p>
      <p className="mt-4 text-sm leading-7 text-slate-700">{description}</p>
    </div>
  );
}
