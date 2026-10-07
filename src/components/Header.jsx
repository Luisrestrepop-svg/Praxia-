import { useEffect, useState } from 'react'
import { navLinks, waLink } from '../data'

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(24,27,32,0.86)] backdrop-blur-[10px]">
      <nav aria-label="Principal" className="wrap grid h-[120px] grid-cols-[1fr_auto_1fr] items-center gap-x-6 min-[861px]:h-[190px]">
        <div className="hidden items-center justify-start gap-8 min-[861px]:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-[15px] font-medium text-muted transition-colors hover:text-body">
              {l.label}
            </a>
          ))}
        </div>

        <a href="#top" className="col-start-2 flex items-center justify-self-center max-[860px]:col-start-1 max-[860px]:justify-self-start min-[861px]:col-start-2">
          <img src="/logo.jpg" width="825" height="299" alt="Praxia Labs, inicio" className="h-[88px] w-auto rounded-[10px] shadow-medium min-[861px]:h-[150px]" />
        </a>

        <div className="col-start-3 flex items-center justify-end gap-8">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-amber btn-sm max-[860px]:hidden">Habla con nosotros</a>
          <button
            className="cursor-pointer text-body min-[861px]:hidden"
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((o) => !o)}
          >
            <svg className="h-[26px] w-[26px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      <div
        id="menu-movil"
        inert={!open}
        className={`fixed inset-x-0 top-[120px] flex flex-col items-start gap-5 border-b border-white/10 bg-surface px-7 py-6 shadow-medium transition-transform duration-[250ms] min-[861px]:hidden ${
          open ? 'translate-y-0' : '-translate-y-[140%]'
        }`}
      >
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[15px] font-medium text-muted transition-colors hover:text-body">
            {l.label}
          </a>
        ))}
        <a href={waLink()} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="btn btn-amber btn-sm">Habla con nosotros</a>
      </div>
    </header>
  )
}
