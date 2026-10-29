import { services, PROMO_END, waLink } from '../data'

function PlanCard({ p, service }) {
  return (
    <div
      className={`card-grad hover-lift relative flex flex-col rounded-[18px] px-5 py-5 hover:-translate-y-0.5 ${
        p.promo ? '!border-amber/50 shadow-[var(--shadow-medium),var(--shadow-glow-amber),inset_0_1px_0_rgba(255,255,255,0.06)]' : 'shadow-[var(--shadow-soft),inset_0_1px_0_rgba(255,255,255,0.04)]'
      }`}
    >
      {p.promo && (
        <span
          className="absolute -top-[12px] right-4 rounded-[20px] px-3 py-1 text-xs font-semibold text-[#2B1400] shadow-soft"
          style={{ background: 'linear-gradient(160deg,#FFC170,#E8952E)' }}
        >
          {p.promo}
        </span>
      )}
      <div className="mb-2 text-base font-semibold text-navy">{p.name}</div>
      <p className="mb-4 text-[14px] leading-relaxed text-muted">{p.desc}</p>
      <div className="mt-auto">
        {p.oldPrice && <div className="text-[13px] text-muted line-through">{p.oldPrice}</div>}
        <div className="font-display text-[20px] font-semibold text-amber">{p.price}</div>
        <div className="mt-0.5 text-[12.5px] font-medium text-muted">{p.priceNote}</div>
        {p.oldPrice && <div className="mt-1 text-[12.5px] font-semibold text-teal">Descuento válido hasta el {PROMO_END}</div>}
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
        <div className="mb-10 max-w-[680px]">
          <h2 className="mb-3.5 text-[32px]">Nuestros servicios</h2>
          <p className="text-[17px] text-muted">
            Cuatro servicios para que atiendas, vendas y crezcas. Empieza por el que tu negocio necesite hoy y suma los demás cuando quieras.
          </p>
        </div>

        {services.map((s) => (
          <div key={s.id} id={`servicio-${s.id}`} className="mb-12">
            <div className="mb-5 flex items-start gap-4 border-b border-white/10 pb-4">
              <span className="font-display text-[34px] font-bold leading-none text-blue">{s.number}</span>
              <div>
                <h3 className="text-[22px] font-semibold text-navy">{s.title}</h3>
                <p className="mt-1.5 max-w-[640px] text-[15px] text-muted">{s.summary}</p>
              </div>
            </div>
            <div className={`grid gap-5 ${s.plans.length === 4 ? 'min-[801px]:grid-cols-2 min-[1081px]:grid-cols-4' : 'min-[801px]:grid-cols-3'}`}>
              {s.plans.map((p) => (
                <PlanCard key={p.name} p={p} service={s.title} />
              ))}
            </div>
          </div>
        ))}
        <p className="max-w-[760px] text-[14px] leading-relaxed text-muted">
          Precios en pesos colombianos. “Desde” significa que el valor final depende de las especificaciones de tu negocio; siempre te cotizamos por escrito antes de empezar.
        </p>
      </div>
    </section>
  )
}
