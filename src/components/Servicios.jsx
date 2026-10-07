import { services } from '../data'

function Dots({ level }) {
  return (
    <div className="ml-auto flex shrink-0 gap-1">
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className={`h-[7px] w-[7px] rounded-full ${
            n <= level ? 'bg-amber shadow-[0_0_6px_rgba(255,180,84,0.6)]' : 'bg-white/[0.14]'
          }`}
        />
      ))}
    </div>
  )
}

export default function Servicios() {
  return (
    <section className="section" id="servicios">
      <div className="wrap">
        <div className="mb-9 max-w-[640px]">
          <h2 className="mb-3.5 text-[32px]">Nuestros servicios</h2>
          <p className="text-[17px] text-muted">
            Organizados de lo más simple a lo más avanzado, para que empieces por donde tu negocio lo necesite.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2 text-[13px] text-muted">
            Complejidad e inversión:
            <Dots level={1} /> básica
            <Dots level={2} /> media
            <Dots level={3} /> avanzada
          </div>
        </div>

        {services.map((cat) => (
          <div key={cat.letter} className="mb-8">
            <div className="mb-3.5 flex items-baseline gap-3 border-b border-white/10 pb-2.5">
              <span className="font-display text-xl font-bold text-blue">{cat.letter}</span>
              <span className="text-base font-semibold text-navy">{cat.title}</span>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-2.5">
              {cat.items.map((s) => (
                <div
                  key={s.name}
                  className="card-grad hover-lift flex items-center gap-3 rounded-xl px-3.5 py-2.5 shadow-[var(--shadow-soft),inset_0_1px_0_rgba(255,255,255,0.04)] hover:-translate-y-0.5"
                >
                  <div className="icon-grad flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#7FC4FF]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d={s.icon} /></svg>
                  </div>
                  <div className="flex-1 text-sm font-semibold text-navy">{s.name}</div>
                  <Dots level={s.level} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
