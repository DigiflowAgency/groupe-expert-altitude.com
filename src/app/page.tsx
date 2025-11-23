import Hero from '@/components/sections/Hero';
import Reviews from '@/components/sections/Reviews';
import Link from 'next/link';
import Image from 'next/image';
import servicesData from '@/data/services.json';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Groupe Expert Altitude"
        subtitle="Solutions complètes pour vos bâtiments"
        description="De la toiture aux terrasses, de l'énergie à l'assainissement : 5 pôles d'expertise au service des professionnels partout en France."
        ctaPrimary={{
          text: 'Demander un devis',
          href: '/contact',
        }}
        ctaSecondary={{
          text: 'Nos services',
          href: '#services',
        }}
        backgroundVideo={true}
      />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Images Gallery */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src="https://image-flow.fr/uploads/gea-cordiste-38c987c6-8d4b-40e7-85c0-d166c72d773a.webp"
                  alt="Cordiste GEA en action"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow mt-8">
                <Image
                  src="https://image-flow.fr/uploads/gea-img-2-00001365-d4e6-4b75-8dcd-5edf7784ad00.webp"
                  alt="Travaux en hauteur GEA"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow -mt-8">
                <Image
                  src="https://image-flow.fr/uploads/gea-img-3-2c017981-51c9-40a6-843b-585158d82244.webp"
                  alt="Intervention façade GEA"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src="https://image-flow.fr/uploads/firefly-vue-du-dessus-mettre-en-avant-les-panneaux-e80b17f9-24e4-4e76-8f95-966bbb6318f7.webp"
                  alt="Panneaux photovoltaïques GEA"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-gea-black mb-6">
                Votre partenaire multi-services pour bâtiments professionnels
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Groupe Expert Altitude (GEA)</strong> intervient sur l&apos;ensemble de vos projets : des{' '}
                  <Link href="/services/travaux-en-hauteur" className="text-gea-blue hover:underline">
                    travaux en hauteur
                  </Link>{' '}
                  à la{' '}
                  <Link href="/services/construction-terrasses-bois-composite" className="text-gea-blue hover:underline">
                    construction de terrasses
                  </Link>
                  , en passant par l&apos;
                  <Link href="/services/optimisation-energetique-batiments" className="text-gea-blue hover:underline">
                    optimisation énergétique
                  </Link>
                  ,{' '}
                  <Link href="/services/installation-panneaux-photovoltaiques" className="text-gea-blue hover:underline">
                    le photovoltaïque
                  </Link>{' '}
                  et l&apos;
                  <Link href="/services/reseaux-assainissement" className="text-gea-blue hover:underline">
                    assainissement
                  </Link>
                  .
                </p>
                <p>
                  Nous intervenons sur tous types de structures : entrepôts, dépôts, bâtiments industriels, grandes surfaces commerciales, immeubles et copropriétés. De la{' '}
                  <Link href="/services/couverture-toiture" className="text-gea-blue hover:underline">
                    toiture
                  </Link>{' '}
                  aux{' '}
                  <Link href="/services/descentes-eaux-pluviales" className="text-gea-blue hover:underline">
                    descentes d&apos;eaux pluviales
                  </Link>
                  , nos équipes maîtrisent chaque aspect technique de vos bâtiments.
                </p>
                <p>
                  Nos solutions incluent également les{' '}
                  <Link href="/services/thermo-reflect-toiture" className="text-gea-blue hover:underline">
                    traitements thermiques réflectifs
                  </Link>{' '}
                  pour réduire vos coûts énergétiques et améliorer le confort de vos espaces professionnels.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gea-blue/10 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-gea-blue mb-1">+15 ans</div>
                  <div className="text-sm text-gray-700">d'expertise</div>
                </div>
                <div className="bg-gea-blue/10 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-gea-blue mb-1">100%</div>
                  <div className="text-sm text-gray-700">Certifiés</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interventions pour professionnels */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gea-black mb-4">
              Interventions pour professionnels
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Nous accompagnons les professionnels dans l'entretien et la sécurisation de leurs bâtiments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Bâtiments industriels */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden">
                <Image
                  src="https://image-flow.fr/uploads/firefly-large-industrial-building-exterior-modern--f4d7f00d-e039-4170-a6c4-297e2fe804e2.webp"
                  alt="Bâtiments industriels"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-gea-black mb-3">Bâtiments industriels</h3>
              <p className="text-gray-700 mb-4">
                Maintenance et réparation de toitures, façades et structures industrielles. Solutions{' '}
                <Link href="/services/thermo-reflect-toiture" className="text-gea-blue hover:underline">
                  d&apos;optimisation énergétique
                </Link>{' '}
                et{' '}
                <Link href="/services/installation-panneaux-photovoltaiques" className="text-gea-blue hover:underline">
                  panneaux photovoltaïques
                </Link>{' '}
                pour réduire vos coûts.
              </p>
              <Link
                href="/contact"
                className="text-gea-blue hover:text-gea-blue/80 font-semibold inline-flex items-center gap-2"
              >
                Nous contacter
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Entrepôts & Dépôts */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden">
                <Image
                  src="https://image-flow.fr/uploads/firefly-large-industrial-building-exterior-modern--f4d7f00d-e039-4170-a6c4-297e2fe804e2.webp"
                  alt="Entrepôts & Dépôts"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-gea-black mb-3">Entrepôts & Dépôts</h3>
              <p className="text-gray-700 mb-4">
                Spécialistes des grandes surfaces de stockage.{' '}
                <Link href="/services/couverture-toiture" className="text-gea-blue hover:underline">
                  Réparation de toitures plates
                </Link>
                ,{' '}
                <Link href="/services/reseaux-assainissement" className="text-gea-blue hover:underline">
                  réseaux d&apos;assainissement
                </Link>{' '}
                et maintenance préventive.
              </p>
              <Link
                href="/contact"
                className="text-gea-blue hover:text-gea-blue/80 font-semibold inline-flex items-center gap-2"
              >
                Demander une visite technique
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Immeubles & Copropriétés */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden">
                <Image
                  src="https://image-flow.fr/uploads/firefly-contemporary-residential-building-fac-ade--cfd6831b-ef5a-42e3-aa66-36c28ff20215.webp"
                  alt="Immeubles & Copropriétés"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-gea-black mb-3">Immeubles & Copropriétés</h3>
              <p className="text-gray-700 mb-4">
                Ravalement de{' '}
                <Link href="/services/enveloppe-batiment" className="text-gea-blue hover:underline">
                  façades
                </Link>
                , nettoyage,{' '}
                <Link href="/services/vitro-reflect-vitrage" className="text-gea-blue hover:underline">
                  traitement thermique des vitrages
                </Link>{' '}
                et{' '}
                <Link href="/services/colonnes-assainissement" className="text-gea-blue hover:underline">
                  colonnes d&apos;assainissement
                </Link>
                . Interventions cordistes pour accès difficiles.
              </p>
              <Link
                href="/contact"
                className="text-gea-blue hover:text-gea-blue/80 font-semibold inline-flex items-center gap-2"
              >
                Nous contacter
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block bg-gea-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gea-blue/90 transition-all hover:scale-105"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gea-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nos Domaines d&apos;Expertise</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              5 pôles d&apos;excellence pour répondre à tous vos besoins professionnels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="bg-white/90 backdrop-blur-md p-8 rounded-2xl border border-white/50 shadow-lg hover:shadow-2xl hover:bg-white hover:scale-105 transition-all duration-300 group"
              >
                {/* Icône de catégorie */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gea-black group-hover:text-gea-blue transition-colors">
                  {category.category}
                </h3>
                <p className="text-gray-700 mb-6">{category.description}</p>

                {/* Aperçu des services */}
                <div className="mb-6 space-y-2">
                  {category.services.slice(0, 3).map((service) => (
                    <div key={service.slug} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 text-gea-blue flex-shrink-0"
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
                      <span className="line-clamp-1">{service.title}</span>
                    </div>
                  ))}
                  {category.services.length > 3 && (
                    <div className="text-sm text-gea-blue pl-6 font-semibold">
                      + {category.services.length - 3} autres services
                    </div>
                  )}
                </div>

                <div className="text-gea-blue group-hover:text-gea-blue/80 font-semibold inline-flex items-center gap-2">
                  Découvrir
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
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

      {/* Actualités Section - Google Sheets Integration Placeholder */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gea-black mb-4">Actualités</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Suivez nos dernières réalisations et actualités
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Placeholder articles */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-green-300 flex items-center justify-center text-sm font-mono text-green-800">
                  [IMAGE ARTICLE {i}]
                </div>
                <div className="p-6">
                  <div className="text-sm text-gea-blue font-semibold mb-2">
                    {new Date().toLocaleDateString('fr-FR')}
                  </div>
                  <h3 className="text-xl font-bold text-gea-black mb-3">
                    Article depuis Google Sheets #{i}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Les articles seront automatiquement chargés depuis votre Google Sheet configuré.
                  </p>
                  <Link
                    href="/blog"
                    className="text-gea-blue hover:text-gea-blue/80 font-semibold inline-flex items-center gap-2"
                  >
                    Lire la suite
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-block bg-gea-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gea-black/90 transition-all"
            >
              Voir toutes les actualités
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Widget Placeholder - Temporairement masqué */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gea-black mb-4">Suivez-nous</h2>
            <p className="text-xl text-gray-700">
              Découvrez nos réalisations sur Instagram
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <div className="h-96 bg-green-300 rounded-lg flex items-center justify-center">
              <div className="text-center text-green-800">
                <div className="text-2xl font-bold mb-2">[WIDGET INSTAGRAM]</div>
                <div className="text-sm font-mono">À intégrer plus tard</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Reviews Section */}
      <Reviews />

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gea-black mb-4">Contactez-nous</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Une question ? Un projet ? Notre équipe est à votre écoute
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gea-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-gea-black">Adresse</h3>
                    <p className="text-gray-700">
                      229 rue Saint-Honoré<br />
                      75001 Paris
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gea-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-gea-black">Téléphone</h3>
                    <a href="tel:0972143065" className="text-gea-blue text-xl font-bold hover:underline">
                      09 72 14 30 65
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gea-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-gea-black">Email</h3>
                    <a href="mailto:contact@groupe-expert-altitude.fr" className="text-gea-blue hover:underline">
                      contact@groupe-expert-altitude.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gea-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-gea-black">Horaires</h3>
                    <p className="text-gray-700">
                      Lundi - Vendredi<br />
                      8h00 - 18h00
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-block w-full bg-gea-blue text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-gea-blue/90 transition-all"
              >
                Demander un devis
              </Link>
            </div>

            {/* Google Maps */}
            <div className="h-[500px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.5906758951937!2d2.3245471976101446!3d48.8660152974182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2e1a161985%3A0x262161d5a23b4d6c!2s229%20Rue%20Saint-Honor%C3%A9%2C%2075001%20Paris!5e0!3m2!1sfr!2sfr!4v1763545286862!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
