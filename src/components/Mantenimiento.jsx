const options = [
  {
    name: 'Servicio a necesidad',
    price: '$150.000 COP',
    priceNote: 'Por servicio · previa cita',
    feats: [
      'Ajustes y actualizaciones cuando los necesites',
      'Agendas una cita y revisamos lo que requiere tu negocio',
      'Pagas solo por lo que usas',
    ],
  },
  {
    name: 'Anualidad',
    price: '$600.000 COP',
    priceNote: '5 servicios al precio de 4 · ahorras $150.000',
    badge: 'Mejor valor',
    featured: true,
    feats: [
      'Cinco servicios de mantenimiento o actualización durante el año',
      'Los usas cuando tu negocio los necesite',
      'Precio fijo, sin sorpresas',
    ],
  },
]

export default function Mantenimiento() {
  return (
    <section className="section" id="mantenimiento">
      <div className="wrap">
        <h2 className="mb-3.5 text-[32px]">Mantenimiento y actualización</h2>
        <p className="mb-12 max-w-[640px] text-[17px] text-muted">
          Tu negocio cambia, y lo que construimos juntos también debe hacerlo: nuevos precios, productos, horarios o respuestas para tus clientes. Nos encargamos de mantener todo al día y funcionando, para que tú te dediques a atender tu negocio.
        </p>

        <div className="grid gap-6 min-[801px]:grid-cols-2">
          {options.map((o) => (
            <div
              key={o.name}
              className={`card-grad hover-lift relative flex flex-col rounded-[20px] px-7 py-8 ${
                o.featured
                  ? '!border-amber/50 shadow-[var(--shadow-medium),var(--shadow-glow-amber),inset_0_1px_0_rgba(255,255,255,0.06)]'
                  : 'shadow-[var(--shadow-soft),inset_0_1px_0_rgba(255,255,255,0.04)]'
              }`}
            >
              {o.badge && (
                <span
                  className="absolute -top-[13px] left-7 rounded-[20px] px-3 py-[5px] text-xs font-semibold text-[#2B1400] shadow-soft"
                  style={{ background: 'linear-gradient(160deg,#FFC170,#E8952E)' }}
                >
                  {o.badge}
                </span>
              )}
              <div className="mb-2.5 text-lg font-semibold text-navy">{o.name}</div>
              <div className="mb-5 font-display text-[26px] font-semibold text-amber">
                {o.price}
                <span className="mt-0.5 block font-sans text-[12.5px] font-medium text-muted">{o.priceNote}</span>
              </div>
              <ul className="flex flex-col gap-2">
                {o.feats.map((f) => (
                  <li key={f} className="relative pl-[18px] text-sm before:absolute before:left-0 before:top-[7px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-teal">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
