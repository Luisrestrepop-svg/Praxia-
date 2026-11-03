import { useEffect, useState } from 'react'
import { navLinks, waLink } from '../data'

const WaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.2 13.9c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.8-.2 1.5z" />
  </svg>
)

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-teal/15 bg-[rgba(5,13,36,0.78)] backdrop-blur-xl">
      <nav aria-label="Principal" className="wrap flex h-[78px] items-center justify-between gap-6">
        <a href="#top" className="flex items-center">
          <img
            src="/logo.jpg"
            width="825"
            height="299"
            alt="Praxia Labs, inicio"
            className="h-[50px] w-auto rounded-[12px] shadow-[0_0_28px_rgba(25,211,232,0.35)] max-sm:h-[44px]"
          />
        </a>

        <div className="hidden items-center gap-9 min-[861px]:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-[14.5px] font-semibold text-muted transition-colors hover:text-teal">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-sm max-[860px]:hidden">
            <WaIcon /> Escríbenos
          </a>
          <button
            className="cursor-pointer text-body min-[861px]:hidden"
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((o) => !o)}
          >
            <svg className="h-[28px] w-[28px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      <div
        id="menu-movil"
        inert={!open}
        className={`fixed inset-x-0 top-[78px] flex flex-col items-start gap-5 border-b border-teal/15 bg-[#050d24] px-7 py-6 shadow-medium transition-transform duration-[250ms] min-[861px]:hidden ${
          open ? 'translate-y-0' : '-translate-y-[140%]'
        }`}
      >
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[16px] font-semibold text-muted transition-colors hover:text-teal">
            {l.label}
          </a>
        ))}
        <a href={waLink()} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="btn btn-wa btn-sm">
          <WaIcon /> Escríbenos por WhatsApp
        </a>
      </div>
    </header>
  )
}
