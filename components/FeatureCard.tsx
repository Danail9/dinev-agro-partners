export function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="group relative rounded-2xl border border-slate-100 bg-white p-7 shadow-soft transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-brand-dark/10">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-dark/5 text-brand-dark transition-colors group-hover:bg-brand-dark/10">
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
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">
        {description}
      </p>
    </div>
  );
}
