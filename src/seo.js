import { services, tiers, plans, faqs, EMAIL, INSTAGRAM_URL, TIKTOK_URL } from './data'

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
      'Automatización de WhatsApp con IA, posicionamiento en Google (SEO local), páginas web y gestión de redes sociales para negocios de Medellín.',
    slogan: 'Automatización sin barreras',
    email: EMAIL,
    telephone: '+573217908685',
    priceRange: '$$',
    currenciesAccepted: 'COP',
    address: { '@type': 'PostalAddress', addressLocality: 'Medellín', addressRegion: 'Antioquia', addressCountry: 'CO' },
    areaServed: [{ '@type': 'City', name: 'Medellín' }, { '@type': 'AdministrativeArea', name: 'Antioquia' }],
    knowsLanguage: 'es',
    sameAs: [INSTAGRAM_URL, TIKTOK_URL],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+573217908685',
      email: EMAIL,
      availableLanguage: 'es',
      areaServed: 'CO',
    },
    makesOffer: [
      ...tiers.map((t) => offer(t.name, t.price, t.audience)),
      ...plans.map((p) => offer(`Paquete ${p.name}`, p.price, p.feats.join('. '))),
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Praxia Labs',
      itemListElement: services.map((cat) => ({
        '@type': 'OfferCatalog',
        name: cat.title,
        itemListElement: cat.items.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name } })),
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
    name: 'Praxia Labs — Automatización de WhatsApp, SEO local y páginas web en Medellín',
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
