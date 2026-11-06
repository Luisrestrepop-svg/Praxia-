import { proceso, procesoNota, metaBenefits, waLink } from '../data'

// Sección "Proceso": del primer mensaje a la reseña
export function NivelesIA() {
  return (
    <section className="section" id="whatsapp">
      <div className="wrap">
        <div className="mb-10 max-w-[720px]">
          <span className="eyebrow">Automatización de WhatsApp</span>
          <h2 className="mb-3.5 text-[30px] sm:text-[44px]">Atiende, agenda, cobra y fideliza</h2>
          <p className="text-[17px] text-muted">
            Este es el recorrido de tus clientes en WhatsApp, del primer mensaje a la reseña. Meta cubre las dos primeras etapas con su agente de IA; nosotros nos encargamos de configurarlo y de todo lo que Meta no hace.
          </p>
        </div>

        <ol className="grid gap-5 min-[701px]:grid-cols-2 min-[1001px]:grid-cols-3">
          {proceso.map((p) => (
            <li
              key={p.n}
              className={`card-grad relative rounded-[26px] px-6 py-6 shadow-[var(--shadow-soft),inset_0_1px_0_rgba(255,255,255,0.04)] ${
                p.who === 'praxia' ? '!border-amber/45' : ''
              }`}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-display text-[44px] font-black leading-none text-teal [text-shadow:0_0_30px_rgba(25,211,232,0.4)]">{p.n}</span>
                <span
                  className={`rounded-full px-3 py-1 text-[11.5px] font-bold uppercase tracking-[0.08em] ${
                    p.who === 'praxia' ? 'bg-amber text-[#2a1d00]' : 'border border-teal/60 text-teal'
                  }`}
                >
                  {p.who === 'praxia' ? 'Lo hace Praxia' : 'Con el agente de Meta'}
                </span>
              </div>
              <h3 className="mb-2 text-[22px] font-extrabold text-navy">{p.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-muted">{p.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-[760px] text-[14px] font-medium leading-relaxed text-[#FFE39A]">{procesoNota}</p>
        <div className="mt-6">
          <a href={waLink('Hola, quiero armar la automatización de WhatsApp para mi negocio en Praxia Labs.')} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
            Quiero automatizar mi WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

// Sección "Lo que incluye la suscripción de Meta"
export function MetaBeneficios() {
  return (
    <section className="section border-y border-teal/15 bg-surface/60" id="meta">
      <div className="wrap">
        <span className="eyebrow">Meta</span>
        <h2 className="mb-3.5 text-[30px] sm:text-[40px]">Lo que incluye la suscripción de Meta</h2>
        <p className="mb-10 max-w-[680px] text-[17px] text-muted">
          La suscripción de Meta se paga directo a Meta y no está incluida en nuestros precios. Esto es lo que trae para tu WhatsApp Business.
        </p>
        <div className="grid gap-5 min-[901px]:grid-cols-3">
          {metaBenefits.groups.map((g) => (
            <div key={g.title} className="card-grad rounded-[24px] px-5 py-5 shadow-[var(--shadow-soft),inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="mb-2.5 text-sm font-semibold uppercase tracking-[0.04em] text-teal">{g.title}</div>
              <ul className="flex flex-col gap-2">
                {g.items.map((it) => (
                  <li key={it} className="relative pl-[22px] text-[14.5px] before:absolute before:left-0 before:top-0 before:text-[#25D366] before:content-['✓']">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-[20px] border border-[#25D366]/40 bg-[#25D366]/10 px-5 py-4">
          <div className="mb-2 text-sm font-semibold uppercase tracking-[0.04em] text-[#25D366]">✓ {metaBenefits.does.title}</div>
          <ul className="grid gap-1.5 min-[701px]:grid-cols-2">
            {metaBenefits.does.items.map((it) => (
              <li key={it} className="text-[14.5px] leading-relaxed text-body">{it}</li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-[14px] font-medium leading-relaxed text-[#FFD9A3]">{metaBenefits.note}</p>
      </div>
    </section>
  )
}
