import { services, waLink } from '../data'

function PlanCard({ p, service }) {
  return (
    <div
      className={`card-grad hover-lift relative flex flex-col rounded-[24px] px-5 py-5 hover:-translate-y-0.5 ${
        p.promo ? '!border-amber/50 shadow-[var(--shadow-medium),var(--shadow-glow-amber),inset_0_1px_0_rgba(255,255,255,0.06)]' : 'shadow-[var(--shadow-soft),inset_0_1px_0_rgba(255,255,255,0.04)]'
      }`}
    >
      {p.promo && (
        <span
          className="absolute -top-[12px] right-4 rounded-[26px] px-3 py-1 text-xs font-semibold text-[#2B1400] shadow-soft"
          style={{ background: 'linear-gradient(160deg,#FFC170,#E8952E)' }}
        >
          {p.promo}
        </span>
      )}
      <div className="mb-2 text-base font-semibold text-navy">{p.name}</div>
      <p className="mb-4 text-[14px] leading-relaxed text-muted">{p.desc}</p>
      <div className="mt-auto">
        <div className={`font-display text-[22px] font-extrabold ${p.promo ? 'text-amber' : 'text-teal'}`}>{p.price}</div>
        <div className="mt-0.5 text-[12.5px] font-medium text-muted">{p.priceNote}</div>
        <a
          href={waLink(`Hola, quiero información sobre "${p.name}" (${service}) de Praxia Labs.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-teal transition-colors hover:text-white"
        >
          Cotizar por WhatsApp <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  )
}

export default function Servicios() {
  return (
    <section className="section" id="servicios">
      <div className="wrap">
        <div className="mb-8 max-w-[680px]">
          <span className="eyebrow">Servicios</span>
        <h2 className="mb-3.5 text-[32px] sm:text-[44px]">Nuestros servicios</h2>
          <p className="text-[17px] text-muted">
            Dos servicios para que atiendas, vendas y fidelices: automatización de WhatsApp y páginas web. Contrata el que tu negocio necesite hoy y suma el otro cuando quieras.
          </p>
        </div>

        {services.map((s) => (
          <div key={s.id} id={`servicio-${s.id}`} className="mb-9">
            <div className="mb-5 flex items-start gap-4 border-b border-teal/15 pb-4">
              <span className="font-display text-[56px] font-black leading-none text-teal [text-shadow:0_0_40px_rgba(25,211,232,0.45)]">{s.number}</span>
              <div>
                <h3 className="text-[24px] font-extrabold text-navy sm:text-[28px]">{s.title}</h3>
                <p className="mt-1.5 max-w-[640px] text-[15px] text-muted">{s.summary}</p>
              </div>
            </div>
            {s.plans.some((p) => p.group) ? (
              [...new Set(s.plans.map((p) => p.group))].map((g) => {
                const items = s.plans.filter((p) => p.group === g)
                return (
                  <div key={g} className="mb-6">
                    <div className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-teal">{g}</div>
                    <div className={`grid gap-5 ${items.length === 1 ? 'min-[801px]:grid-cols-3' : 'min-[801px]:grid-cols-3'}`}>
                      {items.map((p) => (
                        <PlanCard key={p.name} p={p} service={s.title} />
                      ))}
                    </div>
                  </div>
                )
              })
            ) : (
              <div className={`grid gap-5 ${'min-[801px]:grid-cols-3'}`}>
                {s.plans.map((p) => (
                  <PlanCard key={p.name} p={p} service={s.title} />
                ))}
              </div>
            )}
          </div>
        ))}
        <p className="max-w-[760px] text-[14px] leading-relaxed text-muted">
          Precios en pesos colombianos. “Desde” significa que el valor final depende de las especificaciones de tu negocio; siempre te cotizamos por escrito antes de empezar. No incluyen servicios de terceros (suscripción de Meta, WhatsApp, IA, dominio ni hosting).
        </p>
      </div>
    </section>
  )
}
