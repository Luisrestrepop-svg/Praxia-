import Header from './components/Header'
import Hero from './components/Hero'
import Why from './components/Why'
import Servicios from './components/Servicios'
import { NivelesIA } from './components/Tiers'
import Paquetes from './components/Paquetes'
import Mantenimiento from './components/Mantenimiento'
import Nosotros from './components/Nosotros'
import CtaBand from './components/CtaBand'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#top" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-amber focus:px-4 focus:py-2 focus:font-semibold focus:text-[#2b1400]">
        Saltar al contenido
      </a>
      <Header />
      <main id="top" tabIndex={-1} className="outline-none">
        <Hero />
        <Why />
        <Servicios />
        <NivelesIA />
        <Paquetes />
        <Mantenimiento />
        <Nosotros />
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
