import { proceso, procesoNota, waLink } from '../data'

// Sección "Proceso": del primer mensaje a la reseña
export function NivelesIA() {
  return (
    <section className="section" id="whatsapp">
      <div className="wrap">
        <div className="mb-8 max-w-[720px]">
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
