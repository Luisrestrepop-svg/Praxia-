import { navLinks, waLink, WHATSAPP_DISPLAY } from '../data'

const linkCls = 'text-[14.5px] text-[#9AA6B8] transition-colors hover:text-white'

export default function Footer() {
  return (
    <footer id="contacto" className="bg-bg-alt pb-8 pt-16 text-[#9AA6B8]">
      <div className="wrap">
        <div className="mb-12 grid gap-9 min-[721px]:grid-cols-[1.4fr_1fr_1fr] min-[721px]:gap-12">
          <div>
            <img src="/logo.jpg" width="825" height="299" loading="lazy" alt="Praxia Labs" className="h-24 w-auto rounded-[10px] shadow-soft" />
            <p className="mt-3.5 max-w-[320px] text-[14.5px] text-[#7C879A]">
              Transformación digital simple y cercana para negocios de Medellín.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm !text-white">Contacto</h4>
            <ul className="flex flex-col gap-2.5">
              <li><a className={linkCls} href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp: {WHATSAPP_DISPLAY}</a></li>
              <li><a className={linkCls} href="mailto:hola@praxialabs.co">hola@praxialabs.co</a></li>
              <li><a className={linkCls} href="#">Medellín, Antioquia</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm !text-white">Explorar</h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.href}><a className={linkCls} href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-2.5 border-t border-white/10 pt-6 text-[13px] text-[#69748A]">
          <span>© 2026 Praxia Labs. Todos los derechos reservados.</span>
          <span>Hecho en Medellín</span>
        </div>
      </div>
    </footer>
  )
}
