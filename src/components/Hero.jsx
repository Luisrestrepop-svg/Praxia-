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
    <section className="pb-[60px] pt-[88px] max-sm:pt-16">
      <div className="wrap grid items-center gap-12 min-[901px]:grid-cols-[1.1fr_0.9fr] min-[901px]:gap-16">
        <div>
          <h1 className="mb-5 text-[34px] tracking-[-0.5px] sm:text-5xl">Actualiza tu negocio y no pierdas más clientes</h1>
          <p className="-mt-2.5 mb-5 text-[17px] font-semibold text-amber">Automatización sin barreras</p>
          <p className="mb-8 max-w-[480px] text-lg text-muted">
            Ponemos un chatbot en tu WhatsApp, creamos tu página web, medimos lo que funciona y te traemos más clientes — explicándote cada paso, sin tecnicismos.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-amber">Habla con nosotros por WhatsApp</a>
            <a href="#servicios" className="btn btn-outline">Ver servicios</a>
          </div>
        </div>

        <div ref={phoneRef} className="mx-auto">
          <div
            role="img"
            aria-label="Ejemplo de conversación de WhatsApp con un chatbot que responde, agenda una cita y envía el enlace de pago"
            className="mx-auto w-[290px] rounded-[32px] border border-white/10 p-3.5 shadow-deep"
            style={{ background: 'linear-gradient(165deg,#2A303A,#181B20)' }}
          >
            <div className="flex h-[540px] flex-col overflow-hidden rounded-[20px] bg-[#EAF6F3]">
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
          <p className="mt-3 text-center text-[12.5px] text-muted">Ejemplo ilustrativo: el chatbot atiende, agenda y envía el enlace de pago.</p>
        </div>
      </div>
    </section>
  )
}
