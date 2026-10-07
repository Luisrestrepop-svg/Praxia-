import { whyItems } from '../data'

export default function Why() {
  return (
    <section className="section border-y border-white/10 bg-surface">
      <div className="wrap">
        <h2 className="mb-3.5 text-[32px]">Sabemos por qué te cuesta dar el salto</h2>
        <p className="mb-12 max-w-[600px] text-[17px] text-muted">
          No te sobra tiempo para aprender aplicaciones nuevas, y contratar a alguien de tecnología no siempre es viable. Por eso hicimos servicios simples, explicados en tu idioma y con acompañamiento real.
        </p>
        <div className="grid gap-6 min-[801px]:grid-cols-3">
          {whyItems.map((w) => (
            <div key={w.title} className="card-grad rounded-[20px] px-[26px] py-7 shadow-[var(--shadow-medium),inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div className="icon-grad mb-[18px] flex h-[46px] w-[46px] items-center justify-center rounded-xl text-[#7FC4FF]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d={w.icon} /></svg>
              </div>
              <h3 className="mb-2 text-[19px]">{w.title}</h3>
              <p className="text-[15px] text-muted">{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
