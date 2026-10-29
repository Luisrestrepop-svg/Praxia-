// Servicios de Praxia Labs (estructura 2026) · precios en pesos colombianos (COP)
export const PROMO_END = '15 de noviembre de 2026'

export const services = [
  {
    id: 'whatsapp',
    number: '1',
    title: 'WhatsApp Business con agenda y pagos',
    summary: 'Un agente de IA entrenado con tu negocio, conectado a tu agenda y a tus cobros. Armas tu plan por niveles: cada nivel se suma al anterior.',
    icon: 'M21 11.5a8.4 8.4 0 01-8.4 8.4 8.3 8.3 0 01-3.9-1L3 20l1.2-5.6a8.3 8.3 0 01-1-3.9A8.4 8.4 0 0111.6 2a8.4 8.4 0 019.4 8.4z',
    plans: [
      { name: 'Esencial', desc: 'WhatsApp Business bien configurado y agente de IA entrenado con la información de tu negocio.', price: '$500.000 COP', priceNote: 'Precio base · pago único', priceValue: 500000 },
      { name: '+ Agenda', desc: 'Citas con confirmación y recordatorios automáticos, conectadas a tu calendario.', price: '+ $1.500.000 COP', priceNote: 'Se suma al Esencial · total $2.000.000', priceValue: 1500000 },
      { name: '+ Pagos', desc: 'Enlace de pago por la pasarela que elijas y registro de cada venta.', price: '+ $500.000 COP', priceNote: 'Se suma a Esencial + Agenda · total desde $2.500.000', priceValue: 500000 },
    ],
  },
  {
    id: 'web',
    number: '2',
    title: 'Página web y catálogos',
    summary: 'Tu casa digital propia: te encuentran en Google y te escriben por WhatsApp.',
    icon: 'M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18',
    plans: [
      { name: 'Página web básica', desc: 'Una página en tu propio dominio, hasta 4 secciones, botón de WhatsApp y ficha de Google Business Profile optimizada. Se ve bien en celular.', price: 'Desde $1.200.000 COP', priceNote: 'Según especificaciones', priceValue: 1200000 },
      { name: 'Página web completa', desc: 'Hasta 5 secciones, formulario de contacto, SEO local básico y medición de visitas.', price: 'Desde $1.800.000 COP', priceNote: 'Según especificaciones', priceValue: 1800000 },
      { name: 'Web con tienda', desc: 'Catálogo grande de productos, categorías y pagos en línea, conectados a WhatsApp.', oldPrice: 'Desde $3.500.000 COP', price: 'Desde $2.800.000 COP', priceNote: 'Según especificaciones', promo: '20% de descuento', priceValue: 2800000 },
    ],
  },
  {
    id: 'datos',
    number: '3',
    title: 'Análisis de datos',
    summary: 'Sabe qué funciona: juntamos tus conversaciones de WhatsApp, citas, pagos y anuncios en un solo tablero.',
    icon: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
    plans: [
      { name: 'Diagnóstico', desc: 'Revisamos cómo llegan hoy tus clientes y tus ventas, qué se mide y qué no. Recibes un informe con 5 acciones.', price: '$400.000 COP', priceNote: 'Pago único', priceValue: 400000 },
      { name: 'Tablero de resultados', desc: 'Un panel con conversaciones, citas, ventas, costo por cliente y rendimiento de tus anuncios.', price: '$1.200.000 COP', priceNote: 'Pago único', priceValue: 1200000 },
      { name: 'Informe mensual', desc: 'Lectura de tus números, recomendaciones y una reunión de 30 minutos.', price: '$300.000 COP', priceNote: 'Al mes', priceValue: 300000 },
    ],
  },
  {
    id: 'redes',
    number: '4',
    title: 'Redes sociales y publicidad',
    summary: 'Más gente que te escribe: anuncios que abren WhatsApp y contenido que da confianza.',
    icon: 'M3 11l18-8v18L3 13zM7 14v6',
    plans: [
      { name: 'Impulso visual', desc: '4 piezas publicitarias por el precio de 3, con fotos de producto mejoradas con IA, listas para WhatsApp y redes.', price: '$220.000 COP', priceNote: 'Paga 3, lleva 4', promo: 'Promo', priceValue: 220000 },
      { name: 'Anuncios que abren WhatsApp', desc: 'Creamos y gestionamos campañas en Facebook e Instagram, con el agente atendiendo los mensajes. La inversión en anuncios la pagas tú directo a Meta.', price: '$600.000 COP', priceNote: 'Al mes + inversión en anuncios', priceValue: 600000 },
      { name: 'Contenido y redes', desc: 'Gestión mensual de tus redes sociales con contenido creado con IA.', price: 'Desde $600.000 COP', priceNote: 'Al mes', priceValue: 600000 },
      { name: 'Todo en uno', desc: 'Anuncios, contenido e informe mensual en un solo plan.', price: 'Desde $1.200.000 COP', priceNote: 'Al mes', priceValue: 1200000 },
    ],
  },
]

// Esencial + Agenda con descuento
export const combo = {
  base: { name: 'Esencial', price: '$500.000 COP', text: 'Atiende: tu agente de IA responde las preguntas de tus clientes, a toda hora.' },
  add: { name: 'Agenda', price: '+ $1.500.000 COP', text: 'Reserva: el cliente elige su horario y recibe confirmación y recordatorio automático.' },
  total: { name: 'Juntos', oldPrice: '$2.000.000 COP', price: '$1.700.000 COP', save: 'Ahorras $300.000', text: 'Del primer mensaje a la cita confirmada, sin que coordines nada a mano.' },
  pagos: { name: 'Pagos', price: '+ $500.000 COP', text: '¿Quieres cobrar por WhatsApp? Suma Pagos.' },
}

// Servicios adicionales y costos que se pagan aparte
export const extras = [
  { name: 'Acompañamiento mensual', price: '$250.000 COP al mes', text: 'Opcional: revisión de conversaciones, ajustes de respuestas y soporte.', optional: true, priceValue: 250000 },
  { name: 'Suscripción de Meta', price: 'Desde $35.990 COP al mes', text: 'El agente de IA de WhatsApp Business lo ofrece Meta por suscripción mensual (la primera semana es gratis). Se paga directo a Meta; el precio puede variar e incluir impuestos.' },
  { name: 'Pasarela de pagos', price: 'Comisión por cobro', text: 'Si conectas pagos, la pasarela que elijas cobra su comisión por cada transacción.' },
]

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

export const benefits = [
  {
    label: 'Atención al cliente 24/7:',
    desc: 'Un chatbot responde en segundos a cualquier hora, incluyendo fines de semana y festivos. Elimina el costo de personal disponible fuera del horario laboral y mejora la experiencia del cliente.',
  },
  {
    label: 'Calificación automática de leads:',
    desc: 'En lugar de que tu equipo de ventas atienda cada consulta desde cero, el chatbot filtra y califica los prospectos. Solo los leads con intención real llegan al equipo humano, aumentando la eficiencia y el cierre.',
  },
  {
    label: 'Reservas y agendamiento:',
    desc: 'El interminable intercambio de mensajes para coordinar citas puede automatizarse completamente. El chatbot verifica disponibilidad, confirma la cita y envía recordatorios automáticos.',
  },
]

export const plans = [
  {
    name: 'Arranque',
    tag: 'Para empezar con lo básico',
    price: 'Desde $1.500.000 COP',
    save: 'Ahorras $200.000',
    feats: ['WhatsApp Esencial (agente de IA entrenado)', 'Página web básica', 'Ficha de Google Business Profile'],
  },
  {
    name: 'Crecimiento',
    tag: 'WhatsApp con agenda y web',
    price: '$2.900.000 COP',
    save: 'Ahorras $220.000',
    badge: 'Más elegido',
    featured: true,
    feats: ['WhatsApp Esencial + Agenda (con 15% de descuento)', 'Página web básica', 'Impulso visual: 4 piezas por el precio de 3'],
  },
  {
    name: 'Todo en uno',
    tag: 'Atiende, cobra, vende y mide',
    price: '$5.600.000 COP',
    save: 'Ahorras $600.000',
    feats: ['WhatsApp Esencial + Agenda + Pagos', 'Web con tienda (con 20% de descuento)', 'Tablero de resultados'],
  },
]

export const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#whatsapp', label: 'WhatsApp con IA' },
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
    a: 'Praxia Labs es un equipo de Medellín que ayuda a tiendas, restaurantes y negocios de barrio a atender, vender y crecer en lo digital. Tenemos cuatro servicios: WhatsApp Business con agenda y pagos, página web y catálogos, análisis de datos, y redes sociales y publicidad.',
  },
  {
    q: '¿Cuánto cuesta automatizar mi WhatsApp?',
    a: 'Se arma por niveles que se suman. El Esencial cuesta $500.000 COP (WhatsApp bien configurado y agente de IA entrenado con tu negocio). La Agenda se suma por $1.500.000 COP y deja las citas confirmadas con recordatorios automáticos: juntos son $2.000.000 COP, y hasta el 15 de noviembre de 2026 tienen 15% de descuento ($1.700.000 COP). Si además quieres cobrar por WhatsApp, el servicio de Pagos se suma por $500.000 COP.',
  },
  {
    q: '¿Qué es el agente de IA de Meta y qué cobra Meta?',
    a: 'WhatsApp Business ofrece un agente de IA propio de Meta, que responde a tus clientes a toda hora. Meta lo cobra por suscripción mensual (la primera semana es gratis, y en Colombia los planes parten desde unos $35.990 COP al mes; el precio puede variar). Se paga directo a Meta. Nosotros lo configuramos, lo entrenamos con la información de tu negocio y lo conectamos con tu agenda y tus pagos, que es lo que Meta no hace por ti.',
  },
  {
    q: '¿Cuánto cuesta una página web?',
    a: 'La página web básica parte desde $1.200.000 COP, la completa desde $1.800.000 COP y la web con tienda desde $2.800.000 COP (con 20% de descuento hasta el 15 de noviembre de 2026; precio normal desde $3.500.000 COP). El valor final depende de las especificaciones de tu negocio: secciones, productos, pagos en línea, textos o fotos que haya que crear. Te cotizamos por escrito antes de empezar.',
  },
  {
    q: '¿Necesito saber de tecnología para trabajar con ustedes?',
    a: 'No. Nosotros configuramos todo y te explicamos cada paso con calma y sin tecnicismos. Trabajamos con dueños de todas las edades, incluyendo quienes nunca han usado estas herramientas, y nos quedamos contigo mientras aprendes.',
  },
  {
    q: '¿Qué incluyen los paquetes y cuánto cuestan?',
    a: '“Arranque” cuesta desde $1.500.000 COP: WhatsApp Esencial y página web básica. “Crecimiento” cuesta $2.900.000 COP: Esencial + Agenda, página web básica e Impulso visual. “Todo en uno” cuesta $5.600.000 COP: Esencial + Agenda + Pagos, web con tienda y tablero de resultados. Los precios de Crecimiento y Todo en uno incluyen servicios con descuento y son válidos hasta el 15 de noviembre de 2026.',
  },
  {
    q: '¿Los precios incluyen dominio, hosting, Meta o la pasarela de pagos?',
    a: 'No. Los precios no incluyen servicios de terceros: la suscripción de Meta al agente de IA, el dominio y el hosting de tu web, la comisión de la pasarela de pagos ni la inversión en anuncios. Estos se pagan aparte, directamente al proveedor, y te los explicamos antes de empezar.',
  },
  {
    q: '¿Qué es el análisis de datos y para qué me sirve?',
    a: 'Es saber qué funciona en tu negocio. Juntamos tus conversaciones de WhatsApp, citas, pagos y anuncios en un solo tablero para que veas cuántos clientes llegan, cuántos compran y cuánto te cuesta cada uno. Puedes empezar con un diagnóstico de $400.000 COP.',
  },
  {
    q: '¿Hacen anuncios y manejan redes sociales?',
    a: 'Sí. Creamos y gestionamos campañas en Facebook e Instagram que abren una conversación en tu WhatsApp ($600.000 COP al mes, más la inversión en anuncios que pagas a Meta), y gestionamos tus redes con contenido creado con IA desde $600.000 COP al mes.',
  },
  {
    q: '¿Ofrecen mantenimiento y acompañamiento después de entregar el proyecto?',
    a: 'Sí. Para tu web tienes dos opciones: servicio a necesidad por $150.000 COP cada vez, previa cita, o una anualidad de $600.000 COP con cinco servicios durante el año (cinco al precio de cuatro). Para WhatsApp ofrecemos un acompañamiento mensual opcional de $250.000 COP.',
  },
  {
    q: '¿Cómo puedo contactar a Praxia Labs?',
    a: 'Escríbenos por WhatsApp al +57 321 790 8685 o al correo praxialabsm@gmail.com. También estamos en Instagram y TikTok como @praxialabs. Te ayudamos a elegir por dónde empezar, sin compromiso.',
  },
]
