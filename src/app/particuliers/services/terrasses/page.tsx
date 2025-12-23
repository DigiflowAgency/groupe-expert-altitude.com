import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ServiceMaillage from '@/components/particuliers/ServiceMaillage';
import MaillageVilles from '@/components/particuliers/MaillageVilles';

export const metadata: Metadata = {
  title: 'Terrasse Bois & Contour Piscine | Devis Gratuit | GEA',
  description: 'Créez la terrasse de vos rêves ! Bois, composite ou carrelage sur plots. Installation rapide, sans béton. Devis gratuit pour votre projet.',
};

export default function TerrassesParticuliers() {
  return (
    <>
      {/* Hero Section - Ambiance nature et détente */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-amber-50 via-stone-50 to-green-50 overflow-hidden">
        {/* Formes décoratives nature */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-green-200/40 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-amber-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-amber-700 text-sm font-medium px-4 py-2 rounded-full mb-6 shadow-sm">
                <span className="text-xl">🌿</span>
                Pour les particuliers
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Votre coin de paradis,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-green-600">
                  à portée de main
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Imaginez-vous : un café sur votre nouvelle terrasse, les pieds sur du beau bois,
                les enfants qui jouent autour de la piscine... On vous aide à créer cet espace !
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <span>Je veux ma terrasse de rêve</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:0972143065"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-full font-semibold border-2 border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-all"
                >
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  09 72 14 30 65
                </a>
              </div>

              {/* Badges de confiance */}
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span> Sans dalle béton
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span> Installation en quelques jours
                </div>
              </div>
            </div>

            {/* Image illustration */}
            <div className="relative hidden md:block">
              <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl shadow-amber-500/20">
                <Image
                  src="https://image-flow.fr/uploads/terrasse-plot-642d1ae3-cb6c-42b7-b275-7603c5398fb3.webp"
                  alt="Terrasse sur plot en bois"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Badge flottant */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-800">2-3 jours</div>
                    <div className="text-sm text-gray-500">d&apos;installation</div>
                  </div>
                </div>
              </div>
              {/* Badge flottant 2 */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌳</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-800">Bois certifié</div>
                    <div className="text-sm text-gray-500">éco-responsable</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types de terrasses - Style galerie moderne */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Trouvez votre style</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Quelle terrasse vous fait rêver ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Terrasse bois naturel',
                desc: 'L\'authenticité du bois pour une ambiance chaleureuse. Pin traité ou essences exotiques (ipé, cumaru).',
                icon: '🪵',
                features: ['Aspect chaleureux', 'Bois certifié FSC', 'Plusieurs teintes', 'Entretien facile'],
                color: 'from-amber-500 to-orange-500',
                bg: 'bg-amber-50',
              },
              {
                title: 'Terrasse composite',
                desc: 'Le look du bois sans l\'entretien ! Résistant aux intempéries et au temps.',
                icon: '✨',
                features: ['Zéro entretien', 'Anti-UV garanti', 'Ne grise pas', '25 ans de garantie'],
                color: 'from-stone-500 to-stone-700',
                bg: 'bg-stone-50',
              },
              {
                title: 'Dalles sur plots',
                desc: 'Un style moderne et épuré. Grès cérame ou pierre naturelle pour un rendu haut de gamme.',
                icon: '🔲',
                features: ['Style contemporain', 'Très résistant', 'Facile à nettoyer', 'Grand choix de formats'],
                color: 'from-gray-500 to-gray-700',
                bg: 'bg-gray-50',
              },
              {
                title: 'Contour de piscine',
                desc: 'Profitez de votre piscine en toute sécurité. Revêtements antidérapants et esthétiques.',
                icon: '🏊',
                features: ['Antidérapant', 'Résiste au chlore', 'Confort pieds nus', 'Margelles assorties'],
                color: 'from-cyan-500 to-blue-500',
                bg: 'bg-cyan-50',
              },
            ].map((type, index) => (
              <div key={index} className={`${type.bg} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group`}>
                <div className="flex items-start gap-5">
                  <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <span className="text-3xl filter drop-shadow">{type.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{type.title}</h3>
                    <p className="text-gray-600 mb-4">{type.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {type.features.map((feature, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1 text-sm bg-white px-3 py-1 rounded-full text-gray-700">
                          <span className="text-green-500 text-xs">✓</span> {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi sur plots */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">La technique maline</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Pourquoi la pose sur plots ? 🤔
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Fini les travaux de maçonnerie interminables et coûteux !
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '⚡', title: 'Ultra rapide', desc: 'Installation en 2-3 jours seulement. On ne squatte pas votre jardin pendant des semaines !' },
              { icon: '💶', title: 'Économique', desc: 'Pas de dalle béton = économies sur les travaux de maçonnerie. Votre portefeuille vous dit merci.' },
              { icon: '🌱', title: 'Écolo', desc: 'Le sol reste naturel en dessous. L\'eau s\'infiltre normalement, pas de ruissellement.' },
              { icon: '🔧', title: 'Pratique', desc: 'Accès facile aux réseaux (eau, électricité). Et si un jour vous déménagez, vous pouvez tout récupérer !' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça se passe */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Tranquille</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Comment ça se passe concrètement ?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '1', icon: '☕', title: 'On discute', desc: 'Vous nous expliquez votre projet autour d\'un café. On écoute, on conseille.' },
              { step: '2', icon: '📏', title: 'On mesure', desc: 'Passage chez vous pour prendre les mesures et voir le terrain. C\'est gratuit !' },
              { step: '3', icon: '🛠️', title: 'On installe', desc: 'Notre équipe débarque et pose votre terrasse en quelques jours. Proprement.' },
              { step: '4', icon: '🍹', title: 'Vous profitez', desc: 'Apéro sur la terrasse, barbecue entre amis... La belle vie commence !' },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                {/* Ligne de connexion */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-amber-300 to-amber-100" />
                )}

                <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-amber-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-4xl">{item.icon}</span>
                </div>
                <div className="absolute -top-2 left-1/2 ml-6 w-7 h-7 bg-amber-500 text-white text-sm font-bold rounded-full flex items-center justify-center shadow">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-green-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <span className="text-5xl mb-6 block">💬</span>
            <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
              &ldquo;On a hésité à faire nous-mêmes... Heureusement qu&apos;on a appelé GEA !
              En 3 jours c&apos;était fait, nickel, et le résultat est magnifique.
              Les voisins sont jaloux 😄&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">👨‍👩‍👦</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Famille Durand</div>
                <div className="text-white/80 text-sm">Toulouse - Terrasse composite 35m²</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-4xl mb-4 block">🌴</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Prêt à profiter de votre extérieur ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Demandez votre visite gratuite. On vient voir votre terrain et on vous fait un devis sur mesure !
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-green-500 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-1 transition-all duration-300"
              >
                Je veux ma terrasse !
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:0972143065"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-amber-300 transition-all"
              >
                📞 09 72 14 30 65
              </a>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Devis gratuit, sans engagement. On ne vous embêtera pas avec des relances !
            </p>
          </div>
        </div>
      </section>

      {/* Maillage villes */}
      <MaillageVilles serviceSlug="terrasse-bois" serviceName="Terrasse bois et composite" accentColor="orange" />

      {/* Maillage interne */}
      <ServiceMaillage currentService="terrasses" accentColor="amber" />

      {/* Lien retour */}
      <section className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/particuliers"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-amber-500 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux services particuliers
          </Link>
        </div>
      </section>
    </>
  );
}
