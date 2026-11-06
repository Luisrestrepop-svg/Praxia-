// Servicios de Praxia Labs (modelo noviembre 2026) · precios en pesos colombianos (COP)
// Enfoque: automatización de WhatsApp y páginas web.

export const services = [
  {
    id: 'whatsapp',
    number: '1',
    title: 'Automatización de WhatsApp',
    summary: 'Dos posibilidades: con el agente de IA de Meta o con un chatbot hecho por Praxia. Elige la que tu negocio necesite.',
    icon: 'M21 11.5a8.4 8.4 0 01-8.4 8.4 8.3 8.3 0 01-3.9-1L3 20l1.2-5.6a8.3 8.3 0 01-1-3.9A8.4 8.4 0 0111.6 2a8.4 8.4 0 019.4 8.4z',
    plans: [
      { name: 'Agente de IA de Meta', desc: 'Pagas la suscripción directo a Meta y adquieres su IA. Nosotros la configuramos y le damos las primeras indicaciones. Responde las 24 horas, agenda en tu Google Calendar y envía recordatorios. Meta lo está habilitando poco a poco.', price: '$400.000 COP', priceNote: 'Configuración · pago único', promo: 'Posibilidad 1', priceValue: 400000 },
      { name: 'Chatbot de Praxia', desc: 'Un chatbot hecho por Praxia: tiene lo que ofrece Meta, más personalización para pagos (enlace de pago para abono o pago completo), posventa (diagnóstico y evaluación de cómo se comportan tus ventas) y reseñas (estrategias de invitación en redes sociales).', price: 'Desde $280.000 COP', priceNote: 'Al mes · según especificaciones', promo: 'Posibilidad 2', priceValue: 280000 },
    ],
  },
  {
    id: 'web',
    number: '2',
    title: 'Páginas web',
    summary: 'Tu casa digital propia: te encuentran en Google y te escriben por WhatsApp. El dominio y el hosting se pagan aparte.',
    icon: 'M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18',
    plans: [
      { name: 'Página web básica', desc: 'Una página con tu dominio, hasta 4 secciones, botón de WhatsApp y ficha de Google Business Profile optimizada. Se ve bien en celular.', price: 'Desde $1.200.000 COP', priceNote: 'Según especificaciones · sin dominio', priceValue: 1200000 },
      { name: 'Página web completa', desc: 'Hasta 5 secciones, botón de WhatsApp, ficha de Google Business Profile optimizada, formulario de contacto y medición de visitas.', price: 'Desde $1.800.000 COP', priceNote: 'Según especificaciones · sin dominio', priceValue: 1800000 },
      { name: 'Web con tienda', desc: 'Todo lo de la página completa, más catálogo de productos, categorías y pagos en línea. Incluye un repositorio de datos para guardar tu información, con una mensualidad de $120.000 COP.', price: 'Desde $2.000.000 COP', priceNote: 'Según especificaciones · sin dominio · + $120.000 al mes por el repositorio de datos', priceValue: 2000000 },
    ],
  },
]

// Servicio mensual: administración de WhatsApp y de la página web
export const aTuLado = {
  name: 'Praxia a tu lado',
  tagline: 'Un equipo técnico que te acompaña cada mes: administra tu WhatsApp y tu página web, para que tú te dediques a tu negocio.',
  price: '$500.000 COP',
  priceNote: 'Al mes · sobre tu cuenta de Meta o sobre nuestro chatbot',
  whatsapp: ['Administramos tus conversaciones', 'Organizamos tu agenda', 'Te damos información relevante de tu empresa'],
  web: ['Mantenemos tu página al día: cambios de textos, precios y fotos'],
  note: 'Las actividades se acuerdan contigo según lo que tu negocio necesite.',
}

// Proceso del cliente en WhatsApp: qué hace Meta y qué hace Praxia
export const proceso = [
  { n: '1', title: 'Respuestas', who: 'meta', text: 'La IA responde lo básico de tu negocio: productos, servicios y precios. Lo que requiere una persona, se lo pasa.' },
  { n: '2', title: 'Agendamiento', who: 'meta', text: 'Agenda la cita en tu Google Calendar, envía recordatorio y permite confirmar o cancelar.' },
  { n: '3', title: 'Pagos', who: 'praxia', text: 'Con el chatbot de Praxia enviamos por WhatsApp el enlace de pago, para abono o pago completo.' },
  { n: '4', title: 'Posventa', who: 'praxia', text: 'Diagnóstico y evaluación de cómo se comportan tus ventas, para que tomes mejores decisiones.' },
  { n: '5', title: 'Reseñas', who: 'praxia', text: 'Estrategias de invitación para que más personas opinen de ti en internet y en redes sociales.' },
]
export const procesoNota = 'El agente de Meta lo habilita Meta de forma gradual y puede no estar disponible aún en tu cuenta. Su suscripción se paga directo a Meta.'

export const whyItems = [
  {
    title: 'Sin perder tiempo',
    text: 'Nosotros configuramos, tú sigues atendiendo tu negocio como siempre.',
    icon: 'M12 3a9 9 0 100 18 9 9 0 000-18zM12 7v5l3 3',
  },
  {
    title: 'Pensando en tu negocio',
    text: 'Estrategias con foco local: tu comuna, tu barrio y tus clientes de siempre.',
    icon: 'M12 21c-4-4-7-7.5-7-11a7 7 0 0114 0c0 3.5-3 7-7 11zM12 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z',
  },
  {
    title: 'Acompañamiento humano',
    text: 'Te explicamos paso a paso, con paciencia, sin importar tu experiencia con la tecnología.',
    icon: 'M12 4l7 3v5c0 5-3 7.5-7 8-4-.5-7-3-7-8V7z',
  },
]

export const plans = [
  {
    name: 'Arranque',
    tag: 'Agente de Meta y página web',
    price: 'Desde $1.450.000 COP',
    save: 'Ahorras $150.000',
    feats: ['Configuración del agente de IA de Meta', 'Página web básica', 'Ficha de Google Business Profile'],
  },
  {
    name: 'Crecimiento',
    tag: 'Chatbot de Praxia y página web',
    price: 'Desde $1.200.000 COP',
    save: '',
    note: 'Página web básica (pago único) + chatbot desde $280.000 al mes',
    badge: 'Más elegido',
    featured: true,
    feats: ['Chatbot de Praxia', 'Pagos, posventa y reseñas', 'Página web básica'],
  },
  {
    name: 'Completo',
    tag: 'Chatbot de Praxia y web con tienda',
    price: 'Desde $2.000.000 COP',
    save: '',
    note: 'Web con tienda (pago único) + $120.000 al mes de repositorio de datos + chatbot desde $280.000 al mes',
    feats: ['Chatbot de Praxia', 'Pagos, posventa y reseñas', 'Web con tienda y pagos en línea'],
  },
]

export const navLinks = [
  { href: '#whatsapp', label: 'WhatsApp' },
  { href: '#servicio-web', label: 'Páginas web' },
  { href: '#a-tu-lado', label: 'Praxia a tu lado' },
  { href: '#paquetes', label: 'Paquetes' },
  { href: '#nosotros', label: 'Nosotros' },
]

export const WHATSAPP_DISPLAY = '+57 321 790 8685'
export const EMAIL = 'praxialabsm@gmail.com'
export const INSTAGRAM_URL = 'https://www.instagram.com/praxialabs'
export const TIKTOK_URL = 'https://www.tiktok.com/@praxialabs'
export const waLink = (msg = 'Hola quiero más información de Praxia Labs y sus servicios') =>
  `https://wa.me/573217908685?text=${encodeURIComponent(msg)}`

export const faqs = [
  {
    q: '¿Qué hace Praxia Labs?',
    a: 'Praxia Labs es un equipo de Medellín que ayuda a tiendas, restaurantes y negocios de barrio a atender, agendar, cobrar y fidelizar a sus clientes por WhatsApp, y a tener su propia página web. Tenemos dos servicios: automatización de WhatsApp y páginas web.',
  },
  {
    q: '¿Qué incluye la automatización de WhatsApp?',
    a: 'Hay dos posibilidades. La primera es el agente de IA de Meta: pagas la suscripción directo a Meta y nosotros lo configuramos y le damos las primeras indicaciones; responde las 24 horas, agenda en tu Google Calendar y envía recordatorios. La segunda es un chatbot hecho por Praxia, que tiene lo que ofrece Meta más personalización para pagos, posventa (diagnóstico y evaluación de cómo se comportan tus ventas) y reseñas (estrategias de invitación en redes sociales).',
  },
  {
    q: '¿Cuánto cuesta la automatización de WhatsApp?',
    a: 'La configuración del agente de IA de Meta cuesta $400.000 COP (pago único; la suscripción de Meta se paga aparte, directo a Meta). El chatbot de Praxia cuesta desde $280.000 COP al mes. Además, “Praxia a tu lado” administra tu WhatsApp y tu página web cada mes por $500.000 COP.',
  },
  {
    q: '¿Qué es el agente de IA de Meta y ustedes lo configuran?',
    a: 'Es un agente de IA que Meta está habilitando poco a poco dentro de WhatsApp Business. Responde a tus clientes, agenda citas en tu Google Calendar, envía recordatorios con opción de asistir o no, y pasa a una persona lo que no puede resolver. Todavía está empezando y puede no estar disponible en tu cuenta. Nosotros lo configuramos y le damos las primeras indicaciones por $400.000 COP (pago único). Su suscripción se paga directo a Meta y no está incluida. Algunos de sus servicios no están totalmente disponibles y otros se deben solicitar a Meta.',
  },
  {
    q: '¿Qué es Praxia a tu lado?',
    a: 'Es nuestro servicio mensual de $500.000 COP: un equipo técnico administra tus conversaciones de WhatsApp, organiza tu agenda y te da información relevante de tu empresa, sobre tu cuenta de Meta o sobre nuestro chatbot. También mantenemos tu página web al día con cambios de textos, precios y fotos. Las actividades se acuerdan contigo según lo que tu negocio necesite.',
  },
  {
    q: '¿Necesito saber de tecnología para trabajar con ustedes?',
    a: 'No. Nosotros configuramos todo y te explicamos cada paso con calma y sin tecnicismos. Trabajamos con dueños de todas las edades, incluyendo quienes nunca han usado estas herramientas, y nos quedamos contigo mientras aprendes.',
  },
  {
    q: '¿Cuánto cuesta una página web?',
    a: 'La página web básica parte desde $1.200.000 COP, la completa desde $1.800.000 COP y la web con tienda desde $2.000.000 COP, más una mensualidad de $120.000 COP por el repositorio de datos. El valor final depende de las especificaciones de tu negocio: secciones, productos, pagos en línea, textos o fotos que haya que crear. El dominio y el hosting no están incluidos. Te cotizamos por escrito antes de empezar.',
  },
  {
    q: '¿Qué incluyen los paquetes y cuánto cuestan?',
    a: '“Arranque” cuesta desde $1.450.000 COP: configuración del agente de IA de Meta y página web básica. “Crecimiento” combina la página web básica (desde $1.200.000 COP, pago único) con el chatbot de Praxia (desde $280.000 COP al mes). “Completo” combina la web con tienda (desde $2.000.000 COP, pago único, más $120.000 COP al mes del repositorio de datos) con el chatbot de Praxia (desde $280.000 COP al mes). Los precios con “desde” dependen de las especificaciones de tu negocio. “Praxia a tu lado” no está incluido.',
  },
  {
    q: '¿Los precios incluyen dominio, hosting, WhatsApp o la suscripción de Meta?',
    a: 'No. Los precios no incluyen servicios de terceros: la suscripción de Meta, WhatsApp y el costo de sus mensajes, la inteligencia artificial que elijas, el almacenamiento de datos, la comisión de la pasarela de pagos, el dominio y el hosting. Estos se pagan aparte, directamente al proveedor, y te los explicamos antes de empezar.',
  },
  {
    q: '¿Ofrecen mantenimiento de la página web?',
    a: 'Sí. Tienes dos opciones: servicio a necesidad por $150.000 COP cada vez, previa cita, o una anualidad de $600.000 COP con cinco servicios durante el año (cinco al precio de cuatro).',
  },
  {
    q: '¿Cómo puedo contactar a Praxia Labs?',
    a: 'Escríbenos por WhatsApp al +57 321 790 8685 o al correo praxialabsm@gmail.com. También estamos en Instagram y TikTok como @praxialabs. Te ayudamos a elegir por dónde empezar, sin compromiso.',
  },
]
