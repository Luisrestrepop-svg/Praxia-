import { services, plans, faqs, EMAIL, INSTAGRAM_URL, TIKTOK_URL } from './data'

export const SITE_URL = 'https://www.praxialabs.store'
export const SITE_NAME = 'Praxia Labs'
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`
export const LOGO = `${SITE_URL}/logo.jpg`

const ORG_ID = `${SITE_URL}/#organization`
const SITE_ID = `${SITE_URL}/#website`

// '$1.500.000 COP' -> '1500000'
const priceValue = (str) => str.replace(/\D/g, '')

const offer = (name, price, description) => ({
  '@type': 'Offer',
  priceCurrency: 'COP',
  price: priceValue(price),
  itemOffered: { '@type': 'Service', name, ...(description && { description }) },
})

export function buildJsonLd() {
  const organization = {
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': ORG_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: { '@type': 'ImageObject', url: LOGO, width: 825, height: 299 },
    image: OG_IMAGE,
    description:
      'WhatsApp Business con agenda y pagos, páginas web y catálogos, análisis de datos, y redes sociales y publicidad para negocios de Medellín.',
    slogan: 'Conecta tu negocio',
    email: EMAIL,
    telephone: '+573217908586',
    priceRange: '$$',
    currenciesAccepted: 'COP',
    address: { '@type': 'PostalAddress', addressLocality: 'Medellín', addressRegion: 'Antioquia', addressCountry: 'CO' },
    areaServed: [{ '@type': 'City', name: 'Medellín' }, { '@type': 'AdministrativeArea', name: 'Antioquia' }],
    knowsLanguage: 'es',
    sameAs: [INSTAGRAM_URL, TIKTOK_URL],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+573217908586',
      email: EMAIL,
      availableLanguage: 'es',
      areaServed: 'CO',
    },
    makesOffer: [
      ...services.flatMap((s) => s.plans.map((p) => offer(`${s.title}: ${p.name}`, String(p.priceValue), p.desc))),
      ...plans.map((p) => offer(`Paquete ${p.name}`, p.price, p.feats.join('. '))),
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Praxia Labs',
      itemListElement: services.map((s) => ({
        '@type': 'OfferCatalog',
        name: s.title,
        itemListElement: s.plans.map((p) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: p.name } })),
      })),
    },
  }

  const website = {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    inLanguage: 'es-CO',
    publisher: { '@id': ORG_ID },
  }

  const webpage = {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/#webpage`,
    url: `${SITE_URL}/`,
    name: 'Praxia Labs — WhatsApp con IA, páginas web, datos y publicidad en Medellín',
    isPartOf: { '@id': SITE_ID },
    about: { '@id': ORG_ID },
    primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE },
    inLanguage: 'es-CO',
  }

  const faqPage = {
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return { '@context': 'https://schema.org', '@graph': [organization, website, webpage, faqPage] }
}
