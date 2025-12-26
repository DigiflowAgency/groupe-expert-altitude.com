import Link from 'next/link';
import Image from 'next/image';

// Icônes SVG professionnelles pour les catégories
const categoryIcons: { [key: string]: JSX.Element } = {
  photovoltaique: (
    <svg className="w-12 h-12 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  'travaux-en-hauteur': (
    <svg className="w-12 h-12 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  'peintures-isolantes': (
    <svg className="w-12 h-12 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  'eaux-pluviales': (
    <svg className="w-12 h-12 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
};

// Catégories de services pour les professionnels
const servicesCategories = [
  {
    slug: 'photovoltaique',
    category: 'Photovoltaïque',
    description: 'Installation et maintenance de panneaux solaires pour vos bâtiments professionnels',
    services: [
      { slug: 'panneaux-photovoltaiques', title: 'Panneaux photovoltaïques' },
      { slug: 'nettoyage-panneaux-solaires', title: 'Nettoyage panneaux solaires' },
    ],
  },
  {
    slug: 'travaux-en-hauteur',
    category: 'Travaux en hauteur',
    description: 'Interventions par cordistes certifiés CQP pour tous travaux en hauteur',
    services: [
      { slug: 'cordiste', title: 'Cordiste' },
      { slug: 'ravalement-facade', title: 'Ravalement de façade' },
      { slug: 'etancheite-toiture', title: 'Étanchéité toiture' },
      { slug: 'couverture-toiture', title: 'Couverture toiture' },
    ],
  },
  {
    slug: 'peintures-isolantes',
    category: 'Peintures isolantes',
    description: 'Solutions thermiques réflectives pour réduire vos coûts énergétiques',
    services: [
      { slug: 'cool-roof', title: 'Cool Roof' },
      { slug: 'ravalement-facade', title: 'Ravalement façade isolant' },
    ],
  },
  {
    slug: 'eaux-pluviales',
    category: 'Eaux pluviales',
    description: 'Gestion des eaux pluviales et travaux de zinguerie',
    services: [
      { slug: 'gouttiere', title: 'Gouttière' },
      { slug: 'zinguerie', title: 'Zinguerie' },
    ],
  },
];

export default function ProfessionnelsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://image-flow.fr/uploads/isolation-toiture-pro-3cfee5f5-737e-4ffa-9bf7-b4eafc88c5d9.webp"
            alt="Intervention professionnelle sur toiture"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gea-black via-gea-black/80 to-gea-black/40" />
        </div>

        {/* Animated shapes */}
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gea-blue rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gea-light-blue rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl">
            {/* Retour */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour à l&apos;accueil
            </Link>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white text-sm font-bold px-4 py-2 rounded-full border border-white/20 mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              ESPACE PROFESSIONNELS
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Solutions complètes<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gea-blue to-gea-light-blue">
                pour vos bâtiments
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              De la toiture aux terrasses, de l&apos;énergie à l&apos;assainissement : 5 pôles d&apos;expertise au service des professionnels partout en France.
            </p>

            {/* Services tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Cordistes', 'Toiture', 'Étanchéité', 'Photovoltaïque', 'Assainissement', '+20 services'].map((tag) => (
                <span
                  key={tag}
                  className="text-sm bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-gea-blue text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gea-blue/90 transition-all hover:scale-105 shadow-lg shadow-gea-blue/30"
              >
                Demander un devis
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Nos services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>

            {/* Phone */}
            <div className="mt-8">
              <a
                href="tel:0972143065"
                className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 bg-gea-blue/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-bold text-lg">09 72 14 30 65</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Images Gallery */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src="https://image-flow.fr/uploads/ravalement-facade-immeuble4-c0b94a6a-ad22-4e4e-be76-d96b891dc8cf.webp"
                  alt="Ravalement de facade immeuble"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={80}
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow mt-8">
                <Image
                  src="https://image-flow.fr/uploads/vitroreflect-0a5f0933-4b99-4459-8fef-76163244a982.webp"
                  alt="Vitro-Reflect traitement vitres"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={80}
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow -mt-8">
                <Image
                  src="https://image-flow.fr/uploads/isolation-toiture-pro-3cfee5f5-737e-4ffa-9bf7-b4eafc88c5d9.webp"
                  alt="Isolation toiture professionnelle GEA"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={80}
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src="https://image-flow.fr/uploads/toiture-industriel-panneau-solaire-a09f3c0f-b14a-4585-bde6-88c62fcb8c12.webp"
                  alt="Panneaux photovoltaïques bâtiment industriel"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={80}
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
                  <strong>Groupe Expert Altitude (GEA)</strong> intervient sur l&apos;ensemble de vos projets : des travaux en hauteur à la construction de terrasses, en passant par l&apos;optimisation énergétique, le photovoltaïque et l&apos;assainissement.
                </p>
                <p>
                  Nous intervenons sur tous types de structures : entrepôts, dépôts, bâtiments industriels, grandes surfaces commerciales, immeubles et copropriétés. De la toiture aux descentes d&apos;eaux pluviales, nos équipes maîtrisent chaque aspect technique de vos bâtiments.
                </p>
                <p>
                  Nos solutions incluent également les traitements thermiques réflectifs pour réduire vos coûts énergétiques et améliorer le confort de vos espaces professionnels.
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

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Copropriétés & Immeubles */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-gea-blue">
              <div className="w-12 h-12 bg-gea-blue/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gea-black mb-2">Copropriétés & Immeubles</h3>
              <p className="text-gray-700 text-sm mb-4">
                Ravalement de façades, traitement des vitrages et colonnes d&apos;assainissement.
              </p>
              <Link
                href="/contact"
                className="text-gea-blue hover:text-gea-blue/80 font-semibold text-sm inline-flex items-center gap-2"
              >
                Nous contacter
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Hôtels & Tertiaire */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-gea-blue">
              <div className="w-12 h-12 bg-gea-blue/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gea-black mb-2">Hôtels & Tertiaire</h3>
              <p className="text-gray-700 text-sm mb-4">
                Solutions thermiques et traitement des vitrages pour le confort de vos clients.
              </p>
              <Link
                href="/contact"
                className="text-gea-blue hover:text-gea-blue/80 font-semibold text-sm inline-flex items-center gap-2"
              >
                Demander un devis
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Bâtiments industriels */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-gea-blue">
              <div className="w-12 h-12 bg-gea-blue/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gea-black mb-2">Bâtiments industriels</h3>
              <p className="text-gray-700 text-sm mb-4">
                Peinture réflective et panneaux photovoltaïques pour réduire vos coûts.
              </p>
              <Link
                href="/contact"
                className="text-gea-blue hover:text-gea-blue/80 font-semibold text-sm inline-flex items-center gap-2"
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
      <section id="services" className="py-20 bg-gradient-to-br from-gea-black via-gray-900 to-gea-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gea-blue/20 text-gea-light-blue rounded-full text-sm font-semibold mb-4">
              NOS EXPERTISES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos Domaines d&apos;Expertise</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              4 pôles d&apos;excellence pour répondre à tous vos besoins professionnels
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {servicesCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/professionnels/services/${category.slug}`}
                className="relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              >
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gea-blue/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />

                <div className="relative z-10">
                  {/* Icon and Title row */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-gea-blue to-gea-blue/80 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <div className="text-white [&>svg]:w-7 [&>svg]:h-7 [&>svg]:text-white">
                        {categoryIcons[category.slug]}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gea-black group-hover:text-gea-blue transition-colors">
                        {category.category}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">{category.description}</p>
                    </div>
                  </div>

                  {/* Services list */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-4">
                    <div className="grid grid-cols-2 gap-2">
                      {category.services.slice(0, 4).map((service) => (
                        <div key={service.slug} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-gea-blue rounded-full flex-shrink-0" />
                          <span className="line-clamp-1">{service.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-gea-blue font-semibold text-sm group-hover:text-gea-blue/80 transition-colors inline-flex items-center gap-2">
                      Découvrir nos services
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="w-10 h-10 bg-gea-blue/10 rounded-full flex items-center justify-center group-hover:bg-gea-blue group-hover:text-white transition-all">
                      <svg className="w-5 h-5 text-gea-blue group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gea-blue text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gea-blue/90 transition-all hover:scale-105 shadow-lg shadow-gea-blue/30"
            >
              Demander un devis gratuit
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gea-black mb-4">Contactez-nous</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Une question ? Un projet ? Notre équipe est à votre écoute
            </p>
          </div>

          {/* Contact Info Global */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                <div className="w-12 h-12 bg-gea-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gea-black">Téléphone</h3>
                  <a href="tel:0972143065" className="text-gea-blue font-bold hover:underline">
                    09 72 14 30 65
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                <div className="w-12 h-12 bg-gea-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gea-black">Email</h3>
                  <a href="mailto:contact@groupe-expert-altitude.fr" className="text-gea-blue text-sm hover:underline">
                    contact@groupe-expert-altitude.fr
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                <div className="w-12 h-12 bg-gea-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gea-black">Horaires</h3>
                  <p className="text-gray-700 text-sm">Lun - Ven : 8h - 18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Nos implantations */}
          <h3 className="text-2xl font-bold text-gea-black text-center mb-8">Nos implantations</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Paris */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
              <div className="h-[300px]">
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
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gea-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-gea-blue/10 text-gea-blue text-xs font-semibold rounded-full mb-2">
                      SIEGE SOCIAL
                    </span>
                    <h4 className="font-bold text-xl text-gea-black">Paris 1er</h4>
                    <p className="text-gray-700">
                      229 rue Saint-Honoré<br />
                      75001 Paris
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Juan-les-Pins */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
              <div className="h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23103.05843098!2d7.0785!3d43.5667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ce97e3c2bf1697%3A0x406f69c2f411030!2s06160%20Juan-les-Pins!5e0!3m2!1sfr!2sfr!4v1703578200000!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gea-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-gea-blue/10 text-gea-blue text-xs font-semibold rounded-full mb-2">
                      AGENCE SUD
                    </span>
                    <h4 className="font-bold text-xl text-gea-black">Juan-les-Pins</h4>
                    <p className="text-gray-700">
                      Juan-les-Pins<br />
                      06160 Antibes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gea-blue text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gea-blue/90 transition-all hover:scale-105 shadow-lg shadow-gea-blue/30"
            >
              Demander un devis gratuit
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
