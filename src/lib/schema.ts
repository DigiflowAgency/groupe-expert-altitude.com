import { BreadcrumbItem } from '@/types';

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://groupe-expert-altitude.com/#organization',
    name: 'Groupe Expert Altitude',
    legalName: 'GEA SAS',
    description: 'Expert des travaux en hauteur, enveloppe du bâtiment, couverture et interventions spécialisées. Cordistes professionnels pour bâtiments industriels, entrepôts et immeubles.',
    url: 'https://groupe-expert-altitude.com',
    logo: 'https://groupe-expert-altitude.com/logo.png',
    image: 'https://groupe-expert-altitude.com/og-image.jpg',
    telephone: '+33972143065',
    email: 'contact@groupe-expert-altitude.fr',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '229 rue Saint-Honoré',
      addressLocality: 'Paris',
      postalCode: '75001',
      addressCountry: 'FR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.8660153,
      longitude: 2.3267472
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      }
    ],
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'City',
        name: 'Paris'
      },
      {
        '@type': 'State',
        name: 'Île-de-France'
      }
    ],
    sameAs: [
      // Réseaux sociaux à ajouter plus tard
    ]
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://groupe-expert-altitude.com${item.href}`
    }))
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: service.provider || 'Groupe Expert Altitude',
      url: 'https://groupe-expert-altitude.com'
    },
    areaServed: service.areaServed || 'Île-de-France',
    serviceType: 'Travaux en hauteur'
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  publishedDate: string;
  modifiedDate?: string;
  author?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    author: {
      '@type': 'Organization',
      name: article.author || 'Groupe Expert Altitude'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Groupe Expert Altitude',
      logo: {
        '@type': 'ImageObject',
        url: 'https://groupe-expert-altitude.com/logo.png'
      }
    },
    image: article.image || 'https://groupe-expert-altitude.com/og-image.jpg'
  };
}
