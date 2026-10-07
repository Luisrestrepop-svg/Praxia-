import { waLink } from '../data'
import { useEffect, useRef } from 'react'

const bubbles = [
  { side: 'in', text: '¿Tienen la chaqueta azul en M?' },
  { side: 'out', text: '¡Sí! Aquí está 🙌' },
  { side: 'out', text: '¿Te la envío mañana?' },
  { side: 'in', text: 'Sí, dale' },
]

export default function Hero() {
  const chatRef = useRef(null)

  useEffect(() => {
    const play = () => {
      const chat = chatRef.current
      if (!chat) return
      const els = chat.querySelectorAll('.bubble')
      els.forEach((b) => b.classList.remove('play'))
      void chat.offsetWidth
      els.forEach((b) => b.classList.add('play'))
    }
    play()
    const id = setInterval(play, 6500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="pb-[60px] pt-[88px] max-sm:pt-16">
      <div className="wrap grid items-center gap-12 min-[901px]:grid-cols-[1.1fr_0.9fr] min-[901px]:gap-16">
        <div>
          <h1 className="mb-5 text-[34px] tracking-[-0.5px] sm:text-5xl">Actualiza tu negocio y no pierdas más clientes</h1>
          <p className="-mt-2.5 mb-5 text-[17px] font-semibold text-amber">Automatización sin barreras</p>
          <p className="mb-8 max-w-[480px] text-lg text-muted">
            Automatizamos tu WhatsApp, te ponemos en el mapa de Google y te ayudamos a vender más — explicándote cada paso, sin tecnicismos.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-amber">Habla con nosotros por WhatsApp</a>
            <a href="#servicios" className="btn btn-outline">Ver servicios</a>
          </div>
        </div>

        <div
          role="img"
          aria-label="Ejemplo de conversación de WhatsApp automatizada con una tienda"
          className="mx-auto w-[280px] rounded-[32px] border border-white/10 p-3.5 shadow-deep"
          style={{ background: 'linear-gradient(165deg,#2A303A,#181B20)' }}
        >
          <div className="flex h-[520px] flex-col overflow-hidden rounded-[20px] bg-[#EAF6F3]">
            <div className="flex items-center gap-2.5 bg-[#0F9E8B] px-4 py-3.5 text-sm font-semibold text-white">
              <span className="h-2 w-2 rounded-full bg-white opacity-70" /> Tienda Doña Marta
            </div>
            <div ref={chatRef} className="chat flex flex-1 flex-col gap-2.5 overflow-hidden p-4">
              {bubbles.map((b, i) => (
                <div
                  key={i}
                  className={`bubble max-w-[80%] rounded-[14px] px-[13px] py-2.5 text-[13px] leading-[1.4] ${
                    b.side === 'in'
                      ? 'self-start rounded-bl-[4px] bg-white text-[#1B2733] shadow-[0_2px_6px_rgba(0,0,0,0.08)]'
                      : 'self-end rounded-br-[4px] bg-[#0F9E8B] text-white'
                  }`}
                >
                  {b.text}
                </div>
              ))}
              <div className="bubble self-start rounded-[14px] bg-white px-4 py-3">
                <div>
                  {[0, 0.2, 0.4].map((d) => (
                    <span
                      key={d}
                      className="mr-[3px] inline-block h-[5px] w-[5px] animate-blink rounded-full bg-[#8A97A6]"
                      style={{ animationDelay: `${d}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
