import { faqs } from '../data'

export default function Faq() {
  return (
    <section className="section border-y border-white/10 bg-surface" id="preguntas-frecuentes">
      <div className="wrap !max-w-[820px]">
        <h2 className="mb-3.5 text-[32px]">Preguntas frecuentes</h2>
        <p className="mb-10 text-[17px] text-muted">
          Lo que más nos preguntan los dueños de negocio antes de empezar.
        </p>
        <div className="flex flex-col gap-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group card-grad rounded-xl px-5 py-4 shadow-[var(--shadow-soft),inset_0_1px_0_rgba(255,255,255,0.04)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold text-navy [&::-webkit-details-marker]:hidden">
                <h3 className="text-[16px] font-semibold">{f.q}</h3>
                <svg
                  className="h-5 w-5 shrink-0 text-amber transition-transform duration-200 group-open:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
