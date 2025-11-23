import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import servicesData from '@/data/services.json';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Hero from '@/components/sections/Hero';

type Params = {
  slug: string;
};

export async function generateStaticParams() {
  return servicesData.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const category = servicesData.find((cat) => cat.slug === params.slug);

  if (!category) {
    return {
      title: 'Catégorie non trouvée',
    };
  }

  return {
    title: `${category.category} | Groupe Expert Altitude`,
    description: category.description,
    openGraph: {
      title: `${category.category} | Groupe Expert Altitude`,
      description: category.description,
    },
  };
}

export default function CategoryPage({ params }: { params: Params }) {
  const category = servicesData.find((cat) => cat.slug === params.slug);

  if (!category) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Services', href: '/services' },
    { label: category.category, href: `/categories/${category.slug}` },
  ];

  return (
    <>
      <Hero
        title={category.category}
        subtitle={category.icon}
        description={category.description}
        ctaPrimary={{
          text: 'Demander un devis',
          href: '/contact',
        }}
        ctaSecondary={{
          text: 'Tous nos services',
          href: '/services',
        }}
        backgroundImage={category.backgroundImage}
        height="medium"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Choix Particuliers / Professionnels - Photovoltaïque uniquement */}
      {category.slug === 'energie-photovoltaique' && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gea-black mb-4 text-center">
                Quelle est votre situation ?
              </h2>
              <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
                Choisissez votre profil pour découvrir nos solutions adaptées à vos besoins
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Particuliers */}
                <Link
                  href="/panneaux-photovoltaiques/particuliers"
                  className="group relative bg-gradient-to-br from-blue-50 to-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-gea-blue"
                >
                  {/* Decorative blob */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-gea-blue/10 rounded-full blur-3xl group-hover:bg-gea-blue/20 transition-colors" />

                  <div className="relative p-8">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gea-blue to-gea-light-blue rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                        <span className="text-4xl">🏠</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gea-black mb-3 group-hover:text-gea-blue transition-colors">
                        Particuliers
                      </h3>
                      <p className="text-gray-600 mb-6 text-sm">
                        Installations résidentielles de 3 à 12 kW avec financement bancaire disponible
                      </p>

                      <div className="space-y-3 mb-8 bg-white rounded-xl p-4 border border-gray-100">
                        <div className="flex items-start gap-3 text-sm text-gray-700">
                          <div className="w-5 h-5 bg-gea-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>Tarifs tout compris dès <strong className="text-gea-blue">7 900€</strong></span>
                        </div>
                        <div className="flex items-start gap-3 text-sm text-gray-700">
                          <div className="w-5 h-5 bg-gea-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>Financement bancaire facilité</span>
                        </div>
                        <div className="flex items-start gap-3 text-sm text-gray-700">
                          <div className="w-5 h-5 bg-gea-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>Aides de l'État disponibles</span>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 text-gea-blue font-semibold group-hover:gap-3 transition-all">
                        Voir les tarifs particuliers
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Professionnels */}
                <Link
                  href="/panneaux-photovoltaiques/professionnels"
                  className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-gea-blue"
                >
                  {/* Decorative blob */}
                  <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gea-blue/10 rounded-full blur-3xl group-hover:bg-gea-blue/20 transition-colors" />

                  <div className="relative p-8">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gea-black to-gea-blue rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                        <span className="text-4xl">🏭</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gea-black mb-3 group-hover:text-gea-blue transition-colors">
                        Professionnels
                      </h3>
                      <p className="text-gray-600 mb-6 text-sm">
                        Solutions sur mesure sans limites : fermes solaires, toitures industrielles, hangars
                      </p>

                      <div className="space-y-3 mb-8 bg-white rounded-xl p-4 border border-gray-100">
                        <div className="flex items-start gap-3 text-sm text-gray-700">
                          <div className="w-5 h-5 bg-gea-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>Pas de limites de puissance</span>
                        </div>
                        <div className="flex items-start gap-3 text-sm text-gray-700">
                          <div className="w-5 h-5 bg-gea-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>Étude de rentabilité <strong className="text-gea-blue">gratuite</strong></span>
                        </div>
                        <div className="flex items-start gap-3 text-sm text-gray-700">
                          <div className="w-5 h-5 bg-gea-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>Projets de toutes envergures</span>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 text-gea-blue font-semibold group-hover:gap-3 transition-all">
                        Découvrir nos solutions pro
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Category Info */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-gea-blue/10 rounded-full">
                <span className="text-4xl">{category.icon}</span>
                <span className="text-gea-blue font-semibold text-sm uppercase tracking-wide">
                  {category.services.length} services disponibles
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gea-black mb-6">
                Nos services en {category.category}
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>

            {/* Services Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service) => (
                <article
                  key={service.slug}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gea-blue/30 group"
                >
                  {/* Card Header */}
                  <div className="bg-gradient-to-br from-gea-blue to-gea-blue/80 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-sm line-clamp-2">
                      {service.excerpt}
                    </p>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <p className="text-gray-700 mb-6 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Features */}
                    {service.features && service.features.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gea-black mb-3">
                          Caractéristiques :
                        </h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                              <svg
                                className="w-5 h-5 text-gea-blue flex-shrink-0 mt-0.5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* CTA Button */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="block w-full text-center bg-gea-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-gea-blue/90 transition-all group-hover:scale-105"
                    >
                      En savoir plus →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pricing Section - Photovoltaïque uniquement */}
            {category.slug === 'energie-photovoltaique' && (
              <div className="mt-16 bg-gradient-to-br from-gea-blue to-gea-blue/90 rounded-2xl p-8 md:p-12 text-white">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
                    🏠 Tarifs Particuliers
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Nos Tarifs Panneaux Photovoltaïques
                  </h3>
                  <p className="text-xl text-white/90">
                    Prix fourniture et pose - Installation clés en main
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {/* 3 kW */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all hover:scale-105 border border-white/20">
                    <div className="text-center">
                      <div className="text-5xl font-bold mb-2">3 kW</div>
                      <div className="text-3xl font-bold mb-4">7 900€</div>
                      <div className="text-sm text-white/80">Installation complète</div>
                    </div>
                  </div>

                  {/* 4,5 kW */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all hover:scale-105 border border-white/20">
                    <div className="text-center">
                      <div className="text-5xl font-bold mb-2">4,5 kW</div>
                      <div className="text-3xl font-bold mb-4">9 800€</div>
                      <div className="text-sm text-white/80">Installation complète</div>
                    </div>
                  </div>

                  {/* 6 kW - Populaire */}
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all hover:scale-105 border-2 border-white/40 relative">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-gea-blue px-4 py-1 rounded-full text-sm font-bold">
                      Populaire
                    </div>
                    <div className="text-center">
                      <div className="text-5xl font-bold mb-2">6 kW</div>
                      <div className="text-3xl font-bold mb-4">12 900€</div>
                      <div className="text-sm text-white/90">Installation complète</div>
                    </div>
                  </div>

                  {/* 9 kW */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all hover:scale-105 border border-white/20">
                    <div className="text-center">
                      <div className="text-5xl font-bold mb-2">9 kW</div>
                      <div className="text-3xl font-bold mb-4">14 900€</div>
                      <div className="text-sm text-white/80">Installation complète</div>
                    </div>
                  </div>

                  {/* 12 kW */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all hover:scale-105 border border-white/20 md:col-span-2 lg:col-span-1">
                    <div className="text-center">
                      <div className="text-5xl font-bold mb-2">12 kW</div>
                      <div className="text-3xl font-bold mb-4">16 900€</div>
                      <div className="text-sm text-white/80">Installation complète</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-white/90 mb-4">
                    ✓ Étude de rentabilité gratuite • ✓ Démarches administratives incluses • ✓ Garantie 25 ans
                  </p>
                  <Link
                    href="/panneaux-photovoltaiques/particuliers"
                    className="inline-block bg-white text-gea-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
                  >
                    Voir tous les détails et financement
                  </Link>

                  <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="text-white/90 mb-3">Vous êtes un professionnel ?</p>
                    <Link
                      href="/panneaux-photovoltaiques/professionnels"
                      className="inline-flex items-center gap-2 text-white hover:text-white/80 font-semibold text-lg"
                    >
                      Découvrir nos solutions sur mesure (fermes solaires, toitures industrielles...)
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom CTA */}
            <div className="mt-16 text-center bg-gradient-to-br from-gea-blue/10 to-gea-blue/5 rounded-2xl p-12">
              <h3 className="text-3xl font-bold text-gea-black mb-4">
                Besoin d'un devis personnalisé ?
              </h3>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Nos experts sont à votre disposition pour étudier votre projet et vous proposer une solution adaptée à vos besoins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="bg-gea-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gea-blue/90 transition-all hover:scale-105 shadow-lg shadow-gea-blue/30"
                >
                  Demander un devis gratuit
                </Link>
                <a
                  href="tel:0972143065"
                  className="bg-white text-gea-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all border-2 border-gea-blue flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  09 72 14 30 65
                </a>
              </div>
            </div>

            {/* Related Categories */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gea-black mb-8 text-center">
                Découvrez nos autres catégories
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {servicesData
                  .filter((cat) => cat.slug !== category.slug)
                  .map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/categories/${cat.slug}`}
                      className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-gea-blue hover:shadow-lg transition-all group"
                    >
                      <span className="text-4xl group-hover:scale-110 transition-transform">
                        {cat.icon}
                      </span>
                      <span className="text-sm font-semibold text-gea-black text-center group-hover:text-gea-blue transition-colors">
                        {cat.category}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
