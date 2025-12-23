import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Espace Particuliers | Groupe Expert Altitude',
  description: 'Solutions pour votre maison : isolation thermique, façade, terrasse bois, panneaux solaires et gouttières. Améliorez votre habitat avec des experts de confiance.',
};

// Services rapides pour le Hero (boutons cliquables)
const servicesHero = [
  { label: 'Panneaux solaires', href: '/particuliers/services/photovoltaique', icon: '☀️' },
  { label: 'Terrasses sur plot', href: '/particuliers/services/terrasses', icon: '🏡' },
  { label: 'Ravalement façade', href: '/particuliers/services/peintures-isolantes', icon: '🏠' },
  { label: 'Isolation toiture', href: '/particuliers/services/peintures-isolantes', icon: '🌡️' },
  { label: 'Isolation façade', href: '/particuliers/services/peintures-isolantes', icon: '🎨' },
  { label: 'Recherche de fuites', href: '/particuliers/services/recherche-fuites', icon: '🔍' },
  { label: 'Traitement fissures', href: '/particuliers/services/peintures-isolantes', icon: '🔧' },
  { label: 'Descentes pluviales', href: '/particuliers/services/eaux-pluviales', icon: '💧' },
];


export default function ParticuliersPage() {
  return (
    <>
      {/* Hero Section - Style chaleureux */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        {/* Formes décoratives */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-3xl opacity-30" />

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenu */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-amber-700 text-sm font-medium px-4 py-2 rounded-full shadow-sm mb-6">
                <span className="text-xl">🏠</span>
                Espace Particuliers
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Votre maison mérite<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                  le meilleur
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed max-w-xl">
                Isolation, ravalement, terrasse, panneaux solaires ou recherche de fuites :
                on s&apos;occupe de tout pour que vous profitiez de votre maison en toute tranquillité.
              </p>

              {/* Services buttons */}
              <div className="mb-8">
                <p className="text-sm font-medium text-gray-500 mb-3">Nos prestations :</p>
                <div className="flex flex-wrap gap-2">
                  {servicesHero.map((service) => (
                    <Link
                      key={service.label}
                      href={service.href}
                      className="inline-flex items-center gap-2 bg-white hover:bg-orange-50 text-gray-700 hover:text-orange-600 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:border-orange-300 transition-all hover:shadow-md hover:-translate-y-0.5"
                    >
                      <span>{service.icon}</span>
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href="tel:0972143065"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  09 72 14 30 65
                </a>
                <Link
                  href="/particuliers/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all"
                >
                  Demander un devis gratuit
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Badges de confiance */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span> Devis gratuit sans engagement
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span> Artisans locaux qualifiés
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span> Travaux garantis
                </div>
              </div>
            </div>

            {/* Galerie 4 images */}
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {/* Image 1 - Panneaux solaires */}
                <Link href="/particuliers/services/photovoltaique" className="group relative h-[240px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  <Image
                    src="https://image-flow.fr/uploads/panneau-solaire-toiture-individuelle-29b4ed30-6334-42bf-b0d0-db12475e1178.webp"
                    alt="Panneaux solaires"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-2xl mb-1 block">☀️</span>
                    <h3 className="text-white font-bold">Panneaux solaires</h3>
                  </div>
                </Link>

                {/* Image 2 - Isolation façade */}
                <Link href="/particuliers/services/peintures-isolantes" className="group relative h-[240px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all mt-8">
                  <Image
                    src="https://image-flow.fr/uploads/isolation-facade-8f2737cf-ab98-4858-975f-f14c24adc39e.webp"
                    alt="Isolation façade"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-2xl mb-1 block">🌡️</span>
                    <h3 className="text-white font-bold">Isolation façade</h3>
                  </div>
                </Link>

                {/* Image 3 - Isolation toiture */}
                <Link href="/particuliers/services/peintures-isolantes" className="group relative h-[240px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all -mt-8">
                  <Image
                    src="https://image-flow.fr/uploads/isolation-toiture-particulier-8537186e-d1c8-4567-87e8-c68fc363f4b0.webp"
                    alt="Isolation toiture"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-2xl mb-1 block">🏠</span>
                    <h3 className="text-white font-bold">Isolation toiture</h3>
                  </div>
                </Link>

                {/* Image 4 - Eaux pluviales */}
                <Link href="/particuliers/services/eaux-pluviales" className="group relative h-[240px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  <Image
                    src="https://image-flow.fr/uploads/descente-eau-pluviale-individuelle-2f54efc9-7447-4b4a-a07a-cd8249669fca.webp"
                    alt="Descentes pluviales"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-2xl mb-1 block">💧</span>
                    <h3 className="text-white font-bold">Eaux pluviales</h3>
                  </div>
                </Link>
              </div>

              {/* Badge flottant central */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-3 shadow-xl z-10 pointer-events-none">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-400 rounded-lg flex items-center justify-center">
                    <span className="text-lg">⭐</span>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-800">+500</div>
                    <div className="text-xs text-gray-500">clients satisfaits</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-10 h-10 rounded-full bg-white/80 shadow-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>


      {/* Why Choose Us - Style chaleureux */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Pourquoi nous ?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
              Des artisans de confiance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              On fait du bon travail, et on le fait bien. C&apos;est aussi simple que ça.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🛡️',
                title: 'Travaux garantis',
                desc: 'Garantie décennale sur tous nos travaux. On ne part pas tant que vous n\'êtes pas satisfait.',
                color: 'from-blue-400 to-blue-600',
              },
              {
                icon: '⚡',
                title: 'Réponse rapide',
                desc: 'On vous rappelle dans la journée et on se déplace vite pour voir votre projet.',
                color: 'from-amber-400 to-orange-500',
              },
              {
                icon: '📋',
                title: 'Devis clair',
                desc: 'Pas de surprise : le prix annoncé est le prix final. Devis gratuit et sans engagement.',
                color: 'from-green-400 to-emerald-500',
              },
              {
                icon: '🏠',
                title: 'Artisans locaux',
                desc: 'Nos équipes sont près de chez vous, disponibles et réactives pour vos projets.',
                color: 'from-purple-400 to-pink-500',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/30 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-200/30 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <span className="text-5xl">💬</span>
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-700 text-center font-medium mb-6 leading-relaxed">
                  &ldquo;Super équipe, très professionnelle ! Ils ont installé nos panneaux solaires en 2 jours.
                  Déjà 40% d&apos;économies sur notre facture d&apos;électricité. Je recommande !&rdquo;
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👨‍👩‍👧</span>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-800">Famille Dupont</div>
                    <div className="text-sm text-gray-500">Montpellier - Installation photovoltaïque</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Final */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-amber-500 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-20 w-32 h-32 bg-white rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-20 w-48 h-48 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <span className="text-5xl mb-6 block">🏡</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Un projet en tête ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Appelez-nous pour en discuter. C&apos;est gratuit et sans engagement !
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0972143065"
                className="inline-flex items-center justify-center gap-3 bg-white text-gray-800 px-8 py-4 rounded-full font-bold text-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                09 72 14 30 65
              </a>
              <Link
                href="/particuliers/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/40 hover:bg-white/30 transition-all"
              >
                Demander un devis en ligne
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <p className="mt-8 text-white/70 text-sm">
              Lundi - Vendredi : 8h00 - 18h00 | On répond vite, promis !
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
