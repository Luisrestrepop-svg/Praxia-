import { benefits, tiers, metaAgent, metaBenefits, waLink } from '../data'

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
    <section className="section" id="whatsapp">
      <div className="wrap">
        <div className="mb-10 max-w-[640px]">
          <h2 className="mb-3.5 text-[32px]">Servicios de personalización de WhatsApp: elige tu nivel</h2>
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

        <h3 className="mb-5 text-[13px] font-semibold uppercase tracking-[0.12em] text-amber">Servicio con Meta</h3>
        <div className="card-grad relative mb-8 rounded-[20px] !border-teal/50 px-6 py-[26px] shadow-[var(--shadow-medium),inset_0_1px_0_rgba(255,255,255,0.06)]">
          <span
            className="absolute -top-[13px] left-6 rounded-[20px] px-3 py-[5px] text-xs font-semibold text-[#0C2622] shadow-soft"
            style={{ background: 'linear-gradient(160deg,#4FE8CF,#3FE0C7)' }}
          >
            Nuevo
          </span>
          <div className="grid gap-6 min-[901px]:grid-cols-[1.3fr_1fr]">
            <div>
              <div className="mb-2 text-lg font-semibold text-navy">{metaAgent.name}</div>
              <p className="mb-4 text-[15px] leading-relaxed text-muted">{metaAgent.text}</p>
              <div className="font-display text-[22px] font-semibold text-amber">{metaAgent.price}</div>
              <div className="mb-4 text-[12.5px] font-medium text-muted">{metaAgent.priceNote}</div>
              <a href={waLink('Hola, quiero información sobre la configuración del agente de IA de Meta en Praxia Labs.')} target="_blank" rel="noopener noreferrer" className="btn btn-amber btn-sm">
                Quiero el agente de Meta
              </a>
            </div>
            <div>
              <ul className="mb-4 flex flex-col gap-2">
                {metaAgent.feats.map((f) => (
                  <li key={f} className="relative pl-[18px] text-sm before:absolute before:left-0 before:top-[7px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-teal">{f}</li>
                ))}
              </ul>
              <p className="rounded-lg border border-amber/25 bg-amber/10 px-3 py-2.5 text-[13px] leading-normal text-[#FFD9A3]">
                <span className="font-semibold">Nota:</span> {metaAgent.note}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="mb-4 text-[22px] font-semibold text-navy">Lo que incluye la suscripción de Meta</h3>
          <div className="grid gap-5 min-[901px]:grid-cols-3">
            {metaBenefits.groups.map((g) => (
              <div key={g.title} className="card-grad rounded-[18px] px-5 py-5 shadow-[var(--shadow-soft),inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div className="mb-2.5 text-sm font-semibold uppercase tracking-[0.04em] text-teal">{g.title}</div>
                <ul className="flex flex-col gap-2">
                  {g.items.map((it) => (
                    <li key={it} className="relative pl-[22px] text-[14.5px] before:absolute before:left-0 before:top-0 before:text-[#25D366] before:content-['✓']">{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-[16px] border border-[#ff9b54]/40 bg-[#ff9b54]/10 px-5 py-4">
            <div className="mb-1 text-sm font-semibold uppercase tracking-[0.04em] text-[#ff9b54]">✕ {metaBenefits.not.title}</div>
            <p className="text-[14.5px] leading-relaxed text-body">{metaBenefits.not.text}</p>
          </div>
          <p className="mt-4 text-[14px] font-medium leading-relaxed text-[#FFD9A3]">{metaBenefits.note}</p>
        </div>

        <h3 className="mb-5 text-[13px] font-semibold uppercase tracking-[0.12em] text-teal">Nuestros chatbots</h3>
        <TierGrid items={tiers} />
        <p className="mt-7 max-w-[760px] text-[14.5px] leading-relaxed text-muted">
          Los tiempos asumen que ya tienes una cuenta de WhatsApp Business API activa. Si hay que crearla desde cero, suma entre 1 y 2 semanas.
        </p>
      </div>
    </section>
  )
}
