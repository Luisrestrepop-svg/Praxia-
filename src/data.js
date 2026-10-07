// Iconos SVG (paths) para servicios
export const services = [
  {
    letter: 'A',
    title: 'Atención al cliente y ventas',
    items: [
      { name: 'Automatización de WhatsApp', level: 1, icon: 'M21 11.5a8.4 8.4 0 01-8.4 8.4 8.3 8.3 0 01-3.9-1L3 20l1.2-5.6a8.3 8.3 0 01-1-3.9A8.4 8.4 0 0111.6 2a8.4 8.4 0 019.4 8.4z' },
      { name: 'Asistente virtual para redes sociales', level: 2, icon: 'M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2zM3 8l9 6 9-6' },
      { name: 'Línea de atención con IA por voz', level: 3, icon: 'M3 5a2 2 0 012-2h3l2 5-2.5 1.5a11 11 0 005 5L14 12l5 2v3a2 2 0 01-2 2A16 16 0 013 5z' },
    ],
  },
  {
    letter: 'B',
    title: 'Presencia digital y contenido',
    items: [
      { name: 'Página web o catálogo en línea', level: 1, icon: 'M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18' },
      { name: 'Optimización de Google Business Profile', level: 1, icon: 'M12 21s7-6.5 7-11.5A7 7 0 105 9.5C5 14.5 12 21 12 21zM12 7.2a2.3 2.3 0 100 4.6 2.3 2.3 0 000-4.6z' },
      { name: 'Contenido para redes con IA', level: 2, icon: 'M5 6h14a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2zM8 6l1.5-2h5L16 6M12 9.2a3.3 3.3 0 100 6.6 3.3 3.3 0 000-6.6z' },
      { name: 'Gestión mensual de redes sociales', level: 2, icon: 'M4 4h16v12H8l-4 4z' },
    ],
  },
  {
    letter: 'C',
    title: 'Posicionamiento y crecimiento',
    items: [
      { name: 'SEO local básico', level: 2, icon: 'M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.3-4.3' },
      { name: 'Campañas de anuncios locales (Meta Ads)', level: 3, icon: 'M12 3v10M6 8l6-5 6 5M4 14l8 7 8-7' },
      { name: 'Reputación digital', level: 2, icon: 'M12 17.3l-6.2 3.3 1.2-6.9L2 8.9l7-1L12 1.5l3 6.4 7 1-5 4.8 1.2 6.9z' },
    ],
  },
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

export const tiers = [
  {
    name: 'Chatbot con respuestas fijas (reglas)',
    price: '$500.000 COP',
    priceNote: 'Pago único',
    time: '1–2 semanas',
    includes: 'Diseño de flujos, configuración, pruebas y capacitación.',
    label: 'Funcionalidades',
    feats: ['Menú de opciones', 'Respuestas predefinidas', 'Flujos básicos'],
    audience: 'Ideal si tus clientes suelen preguntar lo mismo: horarios, precios y ubicación.',
  },
  {
    name: 'Chatbot con IA conversacional',
    price: '$1.500.000 COP',
    note: 'El valor no incluye los servicios de terceros que hacen funcionar el chatbot: WhatsApp, la inteligencia artificial que elijas y el almacenamiento de tus datos. Estos se pagan aparte, directamente al proveedor.',
    label: 'Funcionalidades',
    recommended: true,
    time: '3–6 semanas',
    includes: 'Desarrollo y entrenamiento, integración con WhatsApp Business API y pruebas extensas.',
    feats: ['Responde preguntas abiertas', 'Entiende el contexto', 'Integración con WhatsApp Business'],
    audience: 'Ideal si tus clientes hacen preguntas muy distintas y necesitas respuestas naturales, como las de una persona.',
  },
  {
    name: 'Agente autónomo con integraciones',
    price: '$2.000.000 COP',
    priceNote: 'Desde · según especificaciones técnicas',
    time: '6–12 semanas',
    includes: 'Arquitectura completa, integraciones con sistemas externos, testing y documentación.',
    note: 'Es un precio de referencia, ya que el valor final se define según la complejidad técnica de tu proyecto, como las integraciones con tus sistemas y las reglas de negocio a la medida. No incluye los servicios de terceros (WhatsApp, la inteligencia artificial que elijas y el almacenamiento de datos), que se pagan aparte.',
    label: 'Funcionalidades',
    feats: ['Califica leads', 'Actualiza CRM', 'Agenda citas', 'Razona de forma autónoma'],
    audience: 'Ideal para empresas con procesos de ventas o soporte más complejos, que necesitan conectar varios sistemas.',
  },
]

export const plans = [
  {
    name: 'Da el salto digital',
    tag: 'Paquete inicial',
    price: '$1.500.000 COP',
    feats: ['WhatsApp automatizado', 'Posicionamiento en Google (ficha + SEO local)'],
  },
  {
    name: 'Presencia completa',
    tag: 'Todo lo del inicial, y más',
    price: '$3.200.000 COP',
    badge: 'Más elegido',
    featured: true,
    feats: ['Todo el paquete inicial', 'Página web o catálogo en línea'],
  },
  {
    name: 'Impulso visual',
    tag: 'Creación de imágenes publicitarias',
    price: '$220.000 COP',
    badge: 'Paga 3, lleva 4',
    promo: true,
    feats: [
      '4 piezas publicitarias por el precio de 3',
      'Fotos de producto mejoradas con IA',
      'Listas para WhatsApp y redes sociales',
    ],
  },
]

export const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#automatizacion', label: 'Precios IA' },
  { href: '#paquetes', label: 'Paquetes' },
  { href: '#nosotros', label: 'Nosotros' },
]

export const WHATSAPP_DISPLAY = '+57 321 790 8586'
export const waLink = (msg = 'Hola, quiero más información sobre los servicios de Praxia Labs.') =>
  `https://wa.me/573217908586?text=${encodeURIComponent(msg)}`
