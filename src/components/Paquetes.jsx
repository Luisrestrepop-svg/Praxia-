import { plans, waLink } from '../data'

export default function Paquetes() {
  return (
    <section className="section bg-bg-alt text-white" id="paquetes">
      <div className="wrap">
        <h2 className="mb-3.5 text-[32px] !text-white">Paquetes sugeridos</h2>
        <p className="mb-12 max-w-[600px] text-[17px] text-[#9AA6B8]">
          Si prefieres no armar tu propia combinación, empieza con uno de estos y crece a tu ritmo.
        </p>
        <div className="grid gap-6 min-[901px]:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-[20px] px-7 py-8 ${
                p.featured
                  ? 'border-[1.5px] border-amber/50 shadow-[var(--shadow-medium),var(--shadow-glow-amber),inset_0_1px_0_rgba(255,255,255,0.06)]'
                  : 'border border-white/[0.06] shadow-[var(--shadow-medium),inset_0_1px_0_rgba(255,255,255,0.05)]'
              }`}
              style={{ background: 'linear-gradient(165deg,#323A46,#1E222A)' }}
            >
              {p.badge && (
                <span
                  className={`absolute -top-[13px] left-7 rounded-[20px] px-3 py-[5px] text-xs font-semibold shadow-soft ${
                    p.promo ? 'text-[#0C2622]' : 'text-[#2B1400]'
                  }`}
                  style={{
                    background: p.promo
                      ? 'linear-gradient(160deg,#4FE8CF,#3FE0C7)'
                      : 'linear-gradient(160deg,#FFC170,#E8952E)',
                  }}
                >
                  {p.badge}
                </span>
              )}
              <div className="mb-1.5 font-display text-[21px] font-semibold text-navy">{p.name}</div>
              <div className="mb-4 text-sm text-[#8FA3C0]">{p.tag}</div>
              <div className="mb-6 font-display text-[26px] font-semibold text-amber">
                {p.price}
                <span className="mt-0.5 block font-sans text-[12.5px] font-medium text-[#8FA3C0]">Pago único</span>
              </div>
              <ul className="mb-7 flex flex-1 flex-col gap-3">
                {p.feats.map((f) => (
                  <li
                    key={f}
                    className="relative pl-[26px] text-[14.5px] text-[#DCE4EF] before:absolute before:left-0 before:top-1 before:h-4 before:w-4 before:rounded-full before:bg-[linear-gradient(160deg,#4FE8CF,#3FE0C7)] before:shadow-[0_2px_6px_rgba(63,224,199,0.4)] after:absolute after:left-[5px] after:top-2 after:h-[3px] after:w-1.5 after:-rotate-45 after:border-b-2 after:border-l-2 after:border-[#0C2622]"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`Hola, me interesa el paquete "${p.name}" de Praxia Labs.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn w-full justify-center ${p.featured ? 'btn-amber' : 'btn-outline !border-white/25 !text-white'}`}
              >
                Empezar aquí
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-[760px] text-[14px] leading-relaxed text-[#9AA6B8]">
          Los precios no incluyen servicios de terceros como dominio, hosting o WhatsApp. El mantenimiento mensual de la web y el SEO local continuo son opcionales y se cotizan aparte.
        </p>
      </div>
    </section>
  )
}
