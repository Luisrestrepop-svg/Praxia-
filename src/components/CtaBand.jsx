import { waLink } from '../data'

export default function CtaBand() {
  return (
    <section
      className="section border-y border-teal/15 text-white"
      style={{ background: 'linear-gradient(120deg,#0a2a5e,#0b4a6a)' }}
    >
      <div className="wrap flex flex-wrap items-center justify-between gap-6">
        <div>
          <h2 className="max-w-[560px] text-[30px] font-black uppercase !text-white sm:text-[40px] after:!hidden">¿Listo para dar el salto digital?</h2>
          <p className="mt-2 text-[15px] text-white/[0.72]">Escríbenos y te ayudamos a elegir por dónde empezar, sin compromiso.</p>
        </div>
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-wa">Escríbenos por WhatsApp</a>
      </div>
    </section>
  )
}
