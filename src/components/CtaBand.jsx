import { waLink } from '../data'

export default function CtaBand() {
  return (
    <section
      className="section border-y border-white/10 text-white"
      style={{ background: 'linear-gradient(120deg,#123A3B,#16324A)' }}
    >
      <div className="wrap flex flex-wrap items-center justify-between gap-6">
        <div>
          <h2 className="max-w-[520px] text-[28px] !text-white">¿Listo para dar el salto digital?</h2>
          <p className="mt-2 text-[15px] text-white/[0.72]">Escríbenos y te ayudamos a elegir por dónde empezar, sin compromiso.</p>
        </div>
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-amber">Escríbenos por WhatsApp</a>
      </div>
    </section>
  )
}
