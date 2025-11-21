import { notFound } from 'next/navigation';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import Breadcrumb from '@/components/ui/Breadcrumb';
import citiesData from '@/data/cities.json';
import servicesData from '@/data/services.json';
import { generateBreadcrumbSchema, generateServiceSchema } from '@/lib/schema';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return citiesData.map((city) => ({
    ville: city.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { ville: string };
}): Promise<Metadata> {
  const city = citiesData.find((c) => c.slug === params.ville);

  if (!city) {
    return {
      title: 'Ville non trouvée',
    };
  }

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      type: 'website',
    },
  };
}

export default function CityPage({ params }: { params: { ville: string } }) {
  const city = citiesData.find((c) => c.slug === params.ville);

  if (!city) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Zones d\'intervention', href: '/seo/paris' },
    { label: city.name, href: `/seo/${city.slug}` },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const serviceSchema = generateServiceSchema({
    name: `Services professionnels bâtiment ${city.name}`,
    description: city.description,
    areaServed: city.name,
  });

  // Obtenir 3 autres villes pour les liens connexes
  const otherCities = citiesData
    .filter((c) => c.slug !== city.slug)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Breadcrumb items={breadcrumbItems} />

      <Hero
        title={`GEA à ${city.name}`}
        subtitle={city.region}
        description="Solutions complètes pour vos bâtiments : travaux en hauteur, terrasses, énergie, photovoltaïque, assainissement"
        ctaPrimary={{
          text: 'Demander un devis',
          href: '/contact',
        }}
        ctaSecondary={{
          text: 'Nous appeler',
          href: 'tel:0972143065',
        }}
        height="medium"
      />

      {/* Présentation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gea-black mb-6">
              Votre partenaire multi-services à {city.name}
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl font-semibold text-gea-blue">
                {city.description}
              </p>

              <p>
                <strong>Groupe Expert Altitude</strong> est le partenaire privilégié des professionnels à {city.name} avec <strong>5 pôles d'expertise</strong> : des{' '}
                <Link href="/services/travaux-en-hauteur" className="text-gea-blue hover:underline">
                  travaux en hauteur
                </Link>{' '}
                aux{' '}
                <Link href="/services/construction-terrasses-bois-composite" className="text-gea-blue hover:underline">
                  terrasses
                </Link>
                , de l&apos;
                <Link href="/services/optimisation-energetique-batiments" className="text-gea-blue hover:underline">
                  optimisation énergétique
                </Link>{' '}
                au{' '}
                <Link href="/services/installation-panneaux-photovoltaiques" className="text-gea-blue hover:underline">
                  photovoltaïque
                </Link>
                , jusqu&apos;à l&apos;
                <Link href="/services/reseaux-assainissement" className="text-gea-blue hover:underline">
                  assainissement
                </Link>
                .
              </p>

              <p>
                Nous comprenons les enjeux spécifiques des professionnels de {city.name}. Qu'il s'agisse de{' '}
                <Link href="/services/couverture-toiture" className="text-gea-blue hover:underline">
                  réparation de toiture
                </Link>
                , de{' '}
                <Link href="/services/thermo-reflect-toiture" className="text-gea-blue hover:underline">
                  traitements thermiques
                </Link>
                , de{' '}
                <Link href="/services/enveloppe-batiment" className="text-gea-blue hover:underline">
                  rénovation de façades
                </Link>{' '}
                ou de{' '}
                <Link href="/services/descentes-eaux-pluviales" className="text-gea-blue hover:underline">
                  systèmes d&apos;eaux pluviales
                </Link>
                , nos interventions sont pensées pour minimiser les interruptions d'activité et maximiser la sécurité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos interventions à [ville] */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gea-black text-center mb-12">
            Nos interventions à {city.name}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Bâtiments professionnels */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-14 h-14 bg-gea-blue/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-gea-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gea-black mb-4">
                Bâtiments industriels & entrepôts
              </h3>
              <p className="text-gray-700 mb-4">
                Maintenance et réparation de toitures plates, inspection de structures, nettoyage de façades industrielles. Nos cordistes interviennent sur tous types d'entrepôts et dépôts à {city.name}.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gea-blue mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Réparation de toitures étanches
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gea-blue mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Nettoyage de bardages
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gea-blue mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Maintenance préventive
                </li>
              </ul>
            </div>

            {/* Immeubles & copropriétés */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-14 h-14 bg-gea-blue/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-gea-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gea-black mb-4">
                Immeubles & copropriétés
              </h3>
              <p className="text-gray-700 mb-4">
                Ravalement de façades, nettoyage de vitres, réparation de toitures d'immeubles. Interventions cordistes pour accès difficiles sans échafaudage à {city.name}.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gea-blue mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ravalement de façades
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gea-blue mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Nettoyage de vitres en hauteur
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gea-blue mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Réparation toitures immeubles
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Images Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gea-black text-center mb-12">
            Nos réalisations à {city.name}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-64 bg-green-300 rounded-xl flex items-center justify-center text-sm font-mono text-green-800 hover:scale-105 transition-transform"
              >
                [IMAGE RÉALISATION {i} - {city.name.toUpperCase()}]
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi GEA */}
      <section className="py-20 bg-gea-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Pourquoi choisir GEA à {city.name} ?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Sécurité</h3>
              <p className="text-gray-300">
                Cordistes certifiés, équipements conformes, respect strict des normes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Rapidité</h3>
              <p className="text-gray-300">
                Intervention rapide, disponibilité 7j/7 pour urgences
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Expertise</h3>
              <p className="text-gray-300">
                Plus de 15 ans d'expérience en travaux complexes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Solutions</h3>
              <p className="text-gray-300">
                Approche sur-mesure pour chaque problématique
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gea-black text-center mb-4">
            Nos services à {city.name}
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            5 pôles d&apos;expertise pour tous vos besoins professionnels
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 3).flatMap((category) =>
              category.services.slice(0, 2).map((service) => (
                <div
                  key={service.slug}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-3xl">{category.icon}</span>
                    <span className="text-xs text-gray-500 font-semibold">{category.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gea-black mb-3 group-hover:text-gea-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {service.excerpt}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gea-blue hover:text-gea-blue/80 font-semibold inline-flex items-center gap-2"
                  >
                    En savoir plus
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              ))
            )}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-gea-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gea-blue/90 transition-all"
            >
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Localisation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gea-black mb-6">
              Zone d'intervention : {city.name} ({city.department})
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Basés en Île-de-France, nous intervenons régulièrement à <strong>{city.name}</strong> et dans toute la région <strong>{city.region}</strong>. Notre proximité nous permet d'assurer des interventions rapides et efficaces, que ce soit pour des opérations de maintenance programmées ou des interventions d'urgence.
              </p>

              <p>
                Nos équipes connaissent parfaitement les spécificités architecturales et réglementaires de {city.name}. Nous adaptons nos méthodes d'intervention aux contraintes locales pour garantir des travaux de qualité dans le respect des normes en vigueur.
              </p>

              <div className="bg-gea-blue/10 p-6 rounded-xl my-6">
                <h3 className="text-xl font-bold text-gea-black mb-4">
                  Besoin d'une intervention à {city.name} ?
                </h3>
                <p className="mb-4">
                  Contactez-nous pour un devis gratuit ou une intervention d'urgence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-block bg-gea-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-gea-blue/90 transition-all text-center"
                  >
                    Demander un devis
                  </Link>
                  <a
                    href="tel:0972143065"
                    className="inline-block bg-gea-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gea-black/90 transition-all text-center"
                  >
                    09 72 14 30 65
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Autres villes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gea-black text-center mb-12">
            Nous intervenons également dans ces villes
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {otherCities.map((otherCity) => (
              <Link
                key={otherCity.slug}
                href={`/seo/${otherCity.slug}`}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
              >
                <h3 className="text-xl font-bold text-gea-black mb-2 group-hover:text-gea-blue transition-colors">
                  GEA {otherCity.name}
                </h3>
                <p className="text-gray-700 text-sm mb-2">{otherCity.region}</p>
                <p className="text-gea-blue font-semibold inline-flex items-center gap-2">
                  Voir nos services
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/#services"
              className="text-gea-blue hover:underline font-semibold"
            >
              Voir toutes nos zones d'intervention →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
