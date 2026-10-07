import { benefits, tiers } from '../data'

function TierGrid({ items }) {
  return (
    <div className="grid gap-5 min-[901px]:grid-cols-3">
      {items.map((t) => (
        <div
          key={t.name}
          className={`card-grad hover-lift relative flex flex-col rounded-[20px] px-6 py-[26px] hover:-translate-y-[3px] ${
            t.recommended
              ? '!border-amber/50 shadow-[var(--shadow-medium),var(--shadow-glow-amber),inset_0_1px_0_rgba(255,255,255,0.06)]'
              : 'shadow-[var(--shadow-soft),inset_0_1px_0_rgba(255,255,255,0.04)]'
          }`}
        >
          <div className="mb-2.5 text-lg font-semibold text-navy">{t.name}</div>
          <div className="mb-4 font-display text-[19px] font-semibold text-amber">
            {t.price}
            {t.priceNote && <span className="mt-0.5 block font-sans text-[12.5px] font-medium text-muted">{t.priceNote}</span>}
          </div>
          {t.time && (
            <div className="mb-5 rounded-lg bg-white/[0.05] px-3 py-2.5">
              <div className="flex items-center gap-2 text-sm font-semibold text-navy">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-teal" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
                Listo en {t.time}
              </div>
              <p className="mt-1 text-[12.5px] leading-normal text-muted">Incluye: {t.includes}</p>
            </div>
          )}
          <div className="mb-2 text-[12.5px] font-semibold uppercase tracking-[0.04em] text-muted">{t.label}</div>
          <ul className="mb-5 flex flex-col gap-2">
            {t.feats.map((f) => (
              <li key={f} className="relative pl-[18px] text-sm before:absolute before:left-0 before:top-[7px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-teal">
                {f}
              </li>
            ))}
          </ul>
          {t.note && (
            <p className="mb-5 rounded-lg border border-amber/25 bg-amber/10 px-3 py-2.5 text-[13px] leading-normal text-[#FFD9A3]">
              <span className="font-semibold">Nota:</span> {t.note}
            </p>
          )}
          {t.audience && (
            <div className="mt-auto border-t border-white/10 pt-3.5 text-[13.5px] leading-normal text-muted">{t.audience}</div>
          )}
        </div>
      ))}
    </div>
  )
}

export function NivelesIA() {
  return (
    <section className="section" id="automatizacion">
      <div className="wrap">
        <div className="mb-10 max-w-[640px]">
          <h2 className="mb-3.5 text-[32px]">Niveles de automatización con IA</h2>
          <p className="text-[17px] text-muted">
            Dentro de la automatización de WhatsApp, hay distintos niveles según qué tan compleja necesites que sea la conversación con tus clientes.
          </p>
        </div>

        <div className="mb-12 flex max-w-[760px] flex-col gap-[22px]">
          {benefits.map((b) => (
            <div key={b.label} className="flex items-start gap-3.5">
              <span className="shrink-0 text-lg font-bold leading-normal text-blue">→</span>
              <div>
                <span className="mr-1.5 font-semibold text-navy">{b.label}</span>
                <span className="text-[15px] leading-relaxed text-muted">{b.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <TierGrid items={tiers} />
        <p className="mt-7 max-w-[760px] text-[14.5px] leading-relaxed text-muted">
          Los tiempos asumen que ya tienes una cuenta de WhatsApp Business API activa. Si hay que crearla desde cero, suma entre 1 y 2 semanas.
        </p>
      </div>
    </section>
  )
}
