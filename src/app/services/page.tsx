import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import Breadcrumb from '@/components/ui/Breadcrumb';
import servicesData from '@/data/services.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Services | Groupe Expert Altitude',
  description: 'Découvrez tous nos services : travaux en hauteur, terrasses & extérieurs, traitements thermiques, photovoltaïque, assainissement. Expertise professionnelle depuis 15 ans.',
  keywords: 'services travaux hauteur, cordistes, terrasse bois, thermo reflect, photovoltaïque, assainissement',
};

export default function ServicesPage() {
  const breadcrumbItems = [{ label: 'Services', href: '/services' }];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <Hero
        title="Nos Services Professionnels"
        subtitle="Expertise complète"
        description="Découvrez l'ensemble de nos services pour professionnels : travaux en hauteur, aménagements extérieurs, solutions énergétiques et assainissement."
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

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gea-black mb-6">
              Une Expertise Complète à Votre Service
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Fort de plus de 15 ans d&apos;expérience, <strong>Groupe Expert Altitude</strong> vous accompagne sur l&apos;ensemble de vos projets professionnels. De la toiture à la terrasse, de l&apos;optimisation énergétique à l&apos;assainissement, nos équipes de cordistes certifiés interviennent partout en France.
            </p>
          </div>
        </div>
      </section>

      {/* Liste des catégories de services */}
      {servicesData.map((category, categoryIndex) => (
        <section
          key={category.slug}
          className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4">
            {/* En-tête de catégorie */}
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-6xl">{category.icon}</span>
              </div>
              <h2 className="text-4xl font-bold text-gea-black mb-4">
                {category.category}
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>

            {/* Grille des services */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service) => (
                <div
                  key={service.slug}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all group overflow-hidden"
                >
                  {/* Image service */}
                  <div className="h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Contenu */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gea-black mb-3 group-hover:text-gea-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {service.excerpt}
                    </p>

                    {/* Features preview */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg
                            className="w-5 h-5 text-gea-blue mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-gea-blue hover:text-gea-blue/80 font-semibold group-hover:gap-3 transition-all"
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
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Pourquoi nous choisir */}
      <section className="py-20 bg-gea-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Pourquoi Choisir Groupe Expert Altitude ?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-white"
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
              <h3 className="text-xl font-bold mb-2">+15 ans d&apos;expérience</h3>
              <p className="text-gray-300">
                Expertise reconnue dans tous nos domaines d&apos;intervention
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Cordistes certifiés</h3>
              <p className="text-gray-300">
                Tous nos techniciens sont certifiés CQP Cordiste
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-white"
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
              <h3 className="text-xl font-bold mb-2">Intervention rapide</h3>
              <p className="text-gray-300">
                Disponibilité 7j/7 pour vos urgences
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Qualité garantie</h3>
              <p className="text-gray-300">
                Garantie décennale sur tous nos travaux
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gea-black mb-6">
              Un Projet ? Parlons-en !
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Contactez-nous pour un devis gratuit et sans engagement. Notre équipe d&apos;experts vous répond sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gea-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gea-blue/90 transition-all hover:scale-105 shadow-lg shadow-gea-blue/30"
              >
                Demander un devis gratuit
              </Link>
              <a
                href="tel:0972143065"
                className="bg-gea-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gea-black/90 transition-all"
              >
                📞 09 72 14 30 65
              </a>
            </div>

            {/* Zones d'intervention */}
            <div className="mt-12 pt-12 border-t">
              <h3 className="text-2xl font-bold text-gea-black mb-4">
                Zones d&apos;intervention
              </h3>
              <p className="text-gray-700 mb-4">
                Nous intervenons sur toute la France, avec une présence renforcée en Île-de-France
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/gea-paris" className="text-gea-blue hover:underline">Paris</Link>
                <Link href="/gea-ile-de-france" className="text-gea-blue hover:underline">Île-de-France</Link>
                <Link href="/gea-lyon" className="text-gea-blue hover:underline">Lyon</Link>
                <Link href="/gea-marseille" className="text-gea-blue hover:underline">Marseille</Link>
                <Link href="/gea-toulouse" className="text-gea-blue hover:underline">Toulouse</Link>
                <Link href="/gea-bordeaux" className="text-gea-blue hover:underline">Bordeaux</Link>
                <Link href="/gea-lille" className="text-gea-blue hover:underline">Lille</Link>
                <Link href="/gea-nantes" className="text-gea-blue hover:underline">Nantes</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
