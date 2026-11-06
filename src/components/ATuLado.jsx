import { aTuLado, waLink } from '../data'

export default function ATuLado() {
  return (
    <section className="section" id="a-tu-lado">
      <div className="wrap">
        <span className="eyebrow">Servicio mensual</span>
        <h2 className="mb-3.5 text-[32px] sm:text-[44px]">{aTuLado.name}</h2>
        <p className="mb-10 max-w-[680px] text-[17px] text-muted">{aTuLado.tagline}</p>

        <div className="grid gap-5 min-[901px]:grid-cols-[1.3fr_1fr]">
          <div className="card-grad rounded-[26px] px-6 py-6 shadow-[var(--shadow-soft),inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.04em] text-teal">En tu WhatsApp</div>
            <ul className="flex flex-col gap-2.5">
              {aTuLado.whatsapp.map((it) => (
                <li key={it} className="relative pl-[26px] text-[15px] before:absolute before:left-0 before:top-0 before:font-bold before:text-[#25D366] before:content-['✓']">{it}</li>
              ))}
            </ul>
            <div className="mb-3 mt-6 text-sm font-semibold uppercase tracking-[0.04em] text-teal">En tu página web</div>
            <ul className="flex flex-col gap-2.5">
              {aTuLado.web.map((it) => (
                <li key={it} className="relative pl-[26px] text-[15px] before:absolute before:left-0 before:top-0 before:font-bold before:text-[#25D366] before:content-['✓']">{it}</li>
              ))}
            </ul>
          </div>
          <div className="card-grad flex flex-col rounded-[26px] !border-amber/50 px-6 py-6 shadow-[var(--shadow-medium),var(--shadow-glow-amber),inset_0_1px_0_rgba(255,255,255,0.06)]">
            <div className="text-lg font-extrabold text-navy">{aTuLado.name}</div>
            <div className="mt-3 font-display text-[40px] font-black leading-none text-amber">{aTuLado.price}</div>
            <div className="mt-1.5 text-[13px] font-medium text-muted">{aTuLado.priceNote}</div>
            <p className="mt-5 text-[14px] leading-relaxed text-muted">{aTuLado.note}</p>
            <a href={waLink('Hola, quiero información sobre Praxia a tu lado, el servicio mensual de Praxia Labs.')} target="_blank" rel="noopener noreferrer" className="btn btn-wa mt-auto self-start">
              Quiero Praxia a tu lado
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
