import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Hero from '@/components/sections/Hero';
import Breadcrumb from '@/components/ui/Breadcrumb';
import citiesData from '@/data/cities.json';
import serviceKeywordsData from '@/data/service-keywords.json';

type ServiceType = typeof serviceKeywordsData.services[number];
type CityType = typeof citiesData[number];

interface Props {
  params: Promise<{ serviceVille: string }>;
}

// Fonction pour parser le slug serviceVille
function parseServiceVille(slug: string): { service: ServiceType; city: CityType } | null {
  // Essayer de trouver une correspondance service-ville
  for (const service of serviceKeywordsData.services) {
    for (const city of citiesData) {
      const expectedSlug = `${service.slug}-${city.slug}`;
      if (slug === expectedSlug) {
        return { service, city };
      }
    }
  }
  return null;
}

// Génération statique des 1100 pages
export async function generateStaticParams() {
  const params: { serviceVille: string }[] = [];

  for (const service of serviceKeywordsData.services) {
    for (const city of citiesData) {
      params.push({
        serviceVille: `${service.slug}-${city.slug}`,
      });
    }
  }

  return params;
}

// Metadata dynamique
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceVille } = await params;
  const parsed = parseServiceVille(serviceVille);

  if (!parsed) {
    return {
      title: 'Page non trouvée | Groupe Expert Altitude',
    };
  }

  const { service, city } = parsed;
  const title = service.metaTemplate.replace('{ville}', city.name);
  const description = service.descriptionTemplate
    .replace(/{ville}/g, city.name)
    .replace(/{region}/g, city.region);

  return {
    title,
    description,
    keywords: `${service.keyword} ${city.name}, ${service.keyword} ${city.region}, ${service.category} ${city.name}, GEA ${city.name}`,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'fr_FR',
    },
  };
}

export default async function ServiceVillePage({ params }: Props) {
  const { serviceVille } = await params;
  const parsed = parseServiceVille(serviceVille);

  if (!parsed) {
    notFound();
  }

  const { service, city } = parsed;

  // Récupérer les autres villes pour le même service (pour la section "Nous intervenons également")
  const otherCities = citiesData.filter(c => c.slug !== city.slug).slice(0, 12);

  // Récupérer tous les services pour la section "Découvrez tous les services"
  const allCategories = serviceKeywordsData.categories;

  // Récupérer les services de la même catégorie
  const sameCategoryServices = serviceKeywordsData.services.filter(
    s => s.category === service.category && s.slug !== service.slug
  );

  const breadcrumbItems = [
    { label: 'Services', href: '/services' },
    { label: service.title, href: `/services/${service.relatedServiceSlug}` },
    { label: city.name, href: `/${service.slug}-${city.slug}` },
  ];

  const h1 = service.h1Template.replace('{ville}', city.name);
  const description = service.descriptionTemplate
    .replace(/{ville}/g, city.name)
    .replace(/{region}/g, city.region);

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <Hero
        title={h1}
        subtitle={`${service.categoryIcon} ${service.category}`}
        description={description}
        ctaPrimary={{
          text: 'Demander un devis gratuit',
          href: '/contact',
        }}
        ctaSecondary={{
          text: '09 72 14 30 65',
          href: 'tel:0972143065',
        }}
        height="medium"
      />

      {/* Section Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gea-black mb-6">
              {service.title} à {city.name} : expertise professionnelle
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>Groupe Expert Altitude</strong> est votre partenaire de confiance pour tous vos besoins en <strong>{service.keyword}</strong> à {city.name} et dans toute la région {city.region}.
              Fort de plus de 15 ans d&apos;expérience, notre équipe de professionnels qualifiés intervient sur tous types de bâtiments : copropriétés, hôtels, bâtiments tertiaires, entrepôts et sites industriels.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nous proposons des solutions complètes et sur-mesure, adaptées aux spécificités de votre projet et aux contraintes de votre bâtiment. Notre approche combine expertise technique, sécurité optimale et respect des délais.
            </p>
          </div>
        </div>
      </section>

      {/* Section Caractéristiques */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gea-black text-center mb-12">
              Nos services {service.title.toLowerCase()} à {city.name}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Caractéristiques */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gea-black mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-gea-blue rounded-full flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Ce que nous proposons
                </h3>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-gea-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Avantages */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gea-black mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-gea-blue rounded-full flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  Vos avantages
                </h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Pourquoi GEA */}
      <section className="py-16 bg-gea-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi choisir GEA pour vos {service.keyword} à {city.name} ?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">+15 ans d&apos;expérience</h3>
              <p className="text-gray-300">Expertise reconnue dans le {city.region}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Équipes certifiées</h3>
              <p className="text-gray-300">Techniciens qualifiés et formés</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Intervention rapide</h3>
              <p className="text-gray-300">Disponibilité 7j/7 sur {city.name}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Garantie décennale</h3>
              <p className="text-gray-300">Assurance tous travaux</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Types de bâtiments */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gea-black text-center mb-12">
              Nous intervenons sur tous types de bâtiments à {city.name}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 block">🏢</span>
                <h3 className="font-bold text-gea-black mb-2">Copropriétés</h3>
                <p className="text-sm text-gray-600">Immeubles résidentiels et syndics</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 block">🏨</span>
                <h3 className="font-bold text-gea-black mb-2">Hôtels & Tertiaire</h3>
                <p className="text-sm text-gray-600">Bureaux, commerces, hôtellerie</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 block">🏭</span>
                <h3 className="font-bold text-gea-black mb-2">Bâtiments industriels</h3>
                <p className="text-sm text-gray-600">Usines, entrepôts, hangars</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 block">🏠</span>
                <h3 className="font-bold text-gea-black mb-2">Particuliers</h3>
                <p className="text-sm text-gray-600">Maisons et résidences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services de la même catégorie */}
      {sameCategoryServices.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gea-black text-center mb-4">
                Services {service.category} à {city.name}
              </h2>
              <p className="text-center text-gray-600 mb-12">
                Découvrez nos autres services dans la même catégorie
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sameCategoryServices.map((relatedService) => (
                  <Link
                    key={relatedService.slug}
                    href={`/${relatedService.slug}-${city.slug}`}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all group"
                  >
                    <h3 className="text-xl font-bold text-gea-black mb-3 group-hover:text-gea-blue transition-colors">
                      {relatedService.title} à {city.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedService.descriptionTemplate
                        .replace(/{ville}/g, city.name)
                        .replace(/{region}/g, city.region)
                        .substring(0, 120)}...
                    </p>
                    <span className="text-gea-blue font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                      En savoir plus
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section Nous intervenons également dans ces villes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gea-black text-center mb-4">
              {service.title} : nous intervenons également dans ces villes
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Retrouvez nos services de {service.keyword} partout en France
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {otherCities.map((otherCity) => (
                <Link
                  key={otherCity.slug}
                  href={`/${service.slug}-${otherCity.slug}`}
                  className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-center hover:bg-gea-blue hover:border-gea-blue hover:text-white transition-all group"
                >
                  <span className="font-semibold text-gea-black group-hover:text-white">{service.title}</span>
                  <span className="block text-sm text-gray-700 group-hover:text-white/90">
                    {otherCity.name}
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href={`/services/${service.relatedServiceSlug}`}
                className="inline-flex items-center gap-2 text-gea-blue hover:text-gea-blue/80 font-semibold"
              >
                Voir toutes les villes pour ce service
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Découvrez tous les services GEA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gea-black text-center mb-4">
              Découvrez tous les services GEA partout en France
            </h2>
            <p className="text-center text-gray-600 mb-12">
              5 pôles d&apos;expertise pour répondre à tous vos besoins en bâtiment
            </p>

            <div className="space-y-8">
              {allCategories.map((category) => (
                <div key={category.name} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gea-black mb-4 flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    {category.name}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {category.services.map((serviceSlug) => {
                      const serviceItem = serviceKeywordsData.services.find(s => s.slug === serviceSlug);
                      if (!serviceItem) return null;

                      const isCurrentService = serviceItem.slug === service.slug;

                      return (
                        <Link
                          key={serviceSlug}
                          href={`/${serviceSlug}-${city.slug}`}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            isCurrentService
                              ? 'bg-gea-blue text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gea-blue hover:text-white'
                          }`}
                        >
                          {serviceItem.title} à {city.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gea-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Besoin de {service.keyword} à {city.name} ?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contactez-nous pour un devis gratuit et sans engagement. Notre équipe d&apos;experts vous répond sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-gea-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
              >
                Demander un devis gratuit
              </Link>
              <a
                href="tel:0972143065"
                className="bg-gea-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gea-black/90 transition-all"
              >
                09 72 14 30 65
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: `GEA - ${service.title} ${city.name}`,
            description: description,
            image: 'https://groupe-expert-altitude.fr/logo-gea-carre-simple-transparent.png',
            url: `https://groupe-expert-altitude.fr/${service.slug}-${city.slug}`,
            telephone: '+33972143065',
            email: 'contact@groupe-expert-altitude.fr',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '229 rue Saint-Honoré',
              addressLocality: 'Paris',
              postalCode: '75001',
              addressCountry: 'FR',
            },
            areaServed: {
              '@type': 'City',
              name: city.name,
            },
            priceRange: '€€',
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '08:00',
              closes: '18:00',
            },
            sameAs: [
              'https://www.linkedin.com/company/groupe-expert-altitude',
            ],
          }),
        }}
      />
    </>
  );
}
