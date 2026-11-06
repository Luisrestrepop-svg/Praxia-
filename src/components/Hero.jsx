import { waLink } from '../data'
import { useEffect, useRef, useState } from 'react'

// Ejemplo de conversación: el agente atiende, agenda y cobra.
const messages = [
  { side: 'in', text: '¿Tienen la chaqueta azul en talla M?' },
  { side: 'out', text: '¡Sí! Está disponible 🙌 Cuesta $120.000. ¿Quieres pasar a probártela?' },
  { side: 'in', text: 'Sí, mañana si se puede' },
  { side: 'out', text: 'Claro. Mañana tengo libre a las 10:00 a. m. y a las 4:00 p. m. ¿Cuál prefieres?' },
  { side: 'in', text: 'A las 4' },
  { side: 'out', kind: 'cita', title: 'Cita confirmada', detail: 'Mañana · 4:00 p. m.', text: 'Te enviaré un recordatorio.' },
  { side: 'in', text: '¿La puedo pagar ya para que me la separen?' },
  { side: 'out', text: '¡Claro! Aquí tienes el enlace de pago 👇' },
  { side: 'out', kind: 'pago', title: 'tutienda.co/pagar', detail: 'Abre la pasarela de pagos' },
  { side: 'in', text: 'Listo, ya pagué 😊' },
  { side: 'out', text: '¡Recibido! Tu chaqueta queda separada. Te esperamos mañana a las 4:00 p. m. 🙌' },
]

const heroChips = [
  { icon: '💬', label: 'Automatización de WhatsApp', href: '#whatsapp' },
  { icon: '🌐', label: 'Creación de páginas web', href: '#servicio-web' },
  { icon: '🤝', label: 'Praxia a tu lado: administramos tu WhatsApp y tu página web', href: '#a-tu-lado', wide: true },
]

const GAP_IN = 1500 // pausa antes de un mensaje del cliente
const TYPING = 1000 // tiempo que "escribe" el agente
const END_PAUSE = 5000 // pausa al terminar antes de repetir

function Bubble({ m }) {
  const base = 'bubble max-w-[82%] rounded-[14px] px-[13px] py-2.5 text-[13px] leading-[1.4]'
  const side =
    m.side === 'in'
      ? 'self-start rounded-bl-[4px] bg-white text-[#1B2733] shadow-[0_2px_6px_rgba(0,0,0,0.08)]'
      : 'self-end rounded-br-[4px] bg-[#0F9E8B] text-white'
  if (m.kind === 'cita') {
    return (
      <div className={`${base} ${side}`}>
        <div className="flex items-center gap-1.5 font-semibold">
          <span aria-hidden="true">✅</span> {m.title}
        </div>
        <div className="mt-1 rounded-lg bg-white/15 px-2.5 py-1.5 text-[12.5px] font-semibold">📅 {m.detail}</div>
        <div className="mt-1.5 text-[12.5px] opacity-90">{m.text}</div>
      </div>
    )
  }
  if (m.kind === 'pago') {
    return (
      <div className={`${base} ${side}`}>
        <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-[#0F6E60]">
          <span aria-hidden="true" className="text-base">🔗</span>
          <div>
            <div className="text-[13px] font-semibold">{m.title}</div>
            <div className="text-[11.5px] opacity-80">{m.detail}</div>
          </div>
        </div>
      </div>
    )
  }
  return <div className={`${base} ${side}`}>{m.text}</div>
}

export default function Hero() {
  // Se renderiza completa en el servidor (SEO) y se anima en el navegador,
  // empezando cuando el teléfono entra en pantalla (importante en celular).
  const [shown, setShown] = useState(messages.length)
  const [typing, setTyping] = useState(false)
  const phoneRef = useRef(null)

  useEffect(() => {
    const node = phoneRef.current
    if (!node) return
    // Con "reducir movimiento" también se desarrolla la conversación (es contenido),
    // pero una sola vez y sin repetirse en bucle.
    const loop = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let timers = []
    let running = false

    const clear = () => {
      timers.forEach(clearTimeout)
      timers = []
      running = false
    }
    const at = (fn, ms) => timers.push(setTimeout(fn, ms))

    const run = () => {
      clear()
      running = true
      setShown(0)
      setTyping(false)
      let t = 600
      messages.forEach((m, i) => {
        if (m.side === 'out') {
          const wait = m.kind === 'pago' ? 500 : TYPING
          at(() => setTyping(true), t)
          t += wait
          at(() => { setTyping(false); setShown(i + 1) }, t)
          t += 700
        } else {
          t += GAP_IN
          at(() => setShown(i + 1), t)
        }
      })
      if (loop) at(run, t + END_PAUSE)
      else at(() => { running = false }, t)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!running) run()
        } else {
          clear()
          setTyping(false)
          setShown(messages.length)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
      clear()
    }
  }, [])

  return (
    <section className="relative overflow-hidden pb-20 pt-14 max-sm:pt-10">
      <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-[#12337a]/40 blur-[120px]" aria-hidden="true" />
      <div className="wrap relative grid items-center gap-14 min-[901px]:grid-cols-[1.15fr_0.85fr] min-[901px]:gap-12">
        <div>
          <span className="eyebrow">Automatización con IA</span>
          <h1 className="mb-6 text-[46px] font-black uppercase leading-[0.98] tracking-[-0.03em] sm:text-[68px] min-[1101px]:text-[84px]">
            Conecta
            <span className="block text-teal [text-shadow:0_0_50px_rgba(25,211,232,0.45)]">tu negocio</span>
          </h1>
          <p className="mb-9 max-w-[520px] text-[17px] leading-relaxed text-muted sm:text-lg">
            Automatizamos tu WhatsApp, creamos tu página web y las administramos cada mes — explicándote cada paso, sin tecnicismos.
          </p>
          <div className="mb-10 flex flex-wrap gap-3.5">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.2 13.9c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.8-.2 1.5z" />
              </svg>
              Habla con nosotros por WhatsApp
            </a>
            <a href="#servicios" className="btn btn-outline">Ver servicios</a>
          </div>
          <ul className="grid max-w-[520px] grid-cols-2 gap-3">
            {heroChips.map((c) => (
              <li key={c.label} className={c.wide ? "col-span-2" : ""}>
                <a
                  href={c.href}
                  className="card-grad hover-lift flex items-center gap-3 rounded-[24px] px-4 py-3.5 text-[14px] font-bold leading-tight text-navy"
                >
                  <span className="text-2xl" aria-hidden="true">{c.icon}</span>
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div ref={phoneRef} className="mx-auto">
          <div
            role="img"
            aria-label="Ejemplo de conversación de WhatsApp con un chatbot que responde, agenda una cita y envía el enlace de pago"
            className="mx-auto w-[300px] rounded-[36px] border border-teal/30 p-3.5 shadow-[0_0_70px_rgba(25,211,232,0.25),var(--shadow-deep)]"
            style={{ background: 'linear-gradient(165deg,#16306a,#07122f)' }}
          >
            <div className="flex h-[540px] flex-col overflow-hidden rounded-[24px] bg-[#EAF6F3]">
              <div className="flex items-center gap-2.5 bg-[#0F9E8B] px-4 py-3.5 text-sm font-semibold text-white">
                <span className="h-2 w-2 rounded-full bg-white opacity-70" /> Tienda Doña Marta
                <span className="ml-auto text-[11px] font-medium opacity-80">chatbot</span>
              </div>
              <div className="chat flex flex-1 flex-col justify-end gap-2.5 overflow-hidden p-4">
                {messages.slice(0, shown).map((m, i) => (
                  <Bubble key={i} m={m} />
                ))}
                {typing && (
                  <div className="bubble self-end rounded-[14px] rounded-br-[4px] bg-[#0F9E8B] px-4 py-3">
                    <div>
                      {[0, 0.2, 0.4].map((d) => (
                        <span
                          key={d}
                          className="mr-[3px] inline-block h-[5px] w-[5px] animate-blink rounded-full bg-white/80"
                          style={{ animationDelay: `${d}s` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-[12.5px] text-muted">Ejemplo ilustrativo: el chatbot atiende, agenda y envía el enlace de pago.</p>
        </div>
      </div>
    </section>
  )
}
