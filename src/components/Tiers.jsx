import { benefits, combo, extras, PROMO_END, waLink } from '../data'

export function NivelesIA() {
  return (
    <section className="section" id="whatsapp">
      <div className="wrap">
        <div className="mb-10 max-w-[680px]">
          <h2 className="mb-3.5 text-[32px]">WhatsApp con IA: arma tu plan por niveles</h2>
          <p className="text-[17px] text-muted">
            WhatsApp Business ya trae un agente de IA de Meta. Nosotros lo configuramos, lo entrenamos con tu negocio y lo conectamos con lo que Meta no conecta por ti: tu agenda y tus pagos.
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

        <h3 className="mb-5 text-[22px] font-semibold text-navy">Dos servicios que se suman: mira qué ganas al juntarlos</h3>
        <div className="grid items-stretch gap-4 min-[901px]:grid-cols-[1fr_auto_1fr_auto_1.15fr]">
          <div className="card-grad rounded-[20px] px-6 py-6 shadow-[var(--shadow-soft),inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div className="text-sm font-semibold uppercase tracking-[0.04em] text-teal">{combo.base.name} · atiende</div>
            <p className="mt-2 text-[15px] text-body">{combo.base.text}</p>
            <div className="mt-4 font-display text-[24px] font-semibold text-amber">{combo.base.price}</div>
            <div className="text-[12.5px] text-muted">Precio base</div>
          </div>
          <div className="flex items-center justify-center font-display text-[34px] font-bold text-amber" aria-hidden="true">+</div>
          <div className="card-grad rounded-[20px] px-6 py-6 shadow-[var(--shadow-soft),inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div className="text-sm font-semibold uppercase tracking-[0.04em] text-teal">{combo.add.name} · reserva</div>
            <p className="mt-2 text-[15px] text-body">{combo.add.text}</p>
            <div className="mt-4 font-display text-[24px] font-semibold text-amber">{combo.add.price}</div>
            <div className="text-[12.5px] text-muted">Se suma al Esencial</div>
          </div>
          <div className="flex items-center justify-center font-display text-[34px] font-bold text-amber" aria-hidden="true">=</div>
          <div className="card-grad relative rounded-[20px] px-6 py-6 !border-amber/50 shadow-[var(--shadow-medium),var(--shadow-glow-amber),inset_0_1px_0_rgba(255,255,255,0.06)]">
            <span
              className="absolute -top-[13px] left-6 rounded-[20px] px-3 py-[5px] text-xs font-semibold text-[#0C2622] shadow-soft"
              style={{ background: 'linear-gradient(160deg,#4FE8CF,#3FE0C7)' }}
            >
              15% de descuento
            </span>
            <div className="text-sm font-semibold uppercase tracking-[0.04em] text-amber">{combo.total.name} · completo</div>
            <p className="mt-2 text-[15px] text-body">{combo.total.text}</p>
            <div className="mt-4 text-[13px] text-muted line-through">{combo.total.oldPrice}</div>
            <div className="font-display text-[28px] font-semibold text-amber">{combo.total.price}</div>
            <div className="text-[12.5px] font-semibold text-teal">{combo.total.save} · válido hasta el {PROMO_END}</div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-[16px] border border-dashed border-teal/50 px-6 py-4">
          <span className="text-[15px] text-body">{combo.pagos.text}</span>
          <span className="font-display text-[20px] font-semibold text-teal">{combo.pagos.price}</span>
        </div>

        <h3 className="mb-5 mt-14 text-[22px] font-semibold text-navy">Servicios adicionales y costos aparte</h3>
        <div className="grid gap-5 min-[901px]:grid-cols-3">
          {extras.map((e) => (
            <div
              key={e.name}
              className={`card-grad relative rounded-[18px] px-5 py-5 ${e.optional ? '!border-amber/40' : ''} shadow-[var(--shadow-soft),inset_0_1px_0_rgba(255,255,255,0.04)]`}
            >
              {e.optional && (
                <span className="absolute -top-[12px] right-4 rounded-[20px] bg-amber px-3 py-1 text-xs font-semibold text-[#2B1400]">Opcional</span>
              )}
              <div className="mb-1.5 text-base font-semibold text-navy">{e.name}</div>
              <div className="mb-2 font-display text-[18px] font-semibold text-amber">{e.price}</div>
              <p className="text-[14px] leading-relaxed text-muted">{e.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-7 max-w-[760px] text-[14.5px] leading-relaxed text-muted">
          Los precios de Meta pueden variar. Te explicamos todos los costos antes de empezar, para que sepas exactamente qué pagas a Praxia Labs y qué pagas a cada proveedor.
        </p>
        <div className="mt-6">
          <a href={waLink('Hola, quiero armar mi plan de WhatsApp con IA en Praxia Labs.')} target="_blank" rel="noopener noreferrer" className="btn btn-amber">
            Quiero armar mi plan de WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
