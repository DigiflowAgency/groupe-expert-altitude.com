import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ServiceMaillage from '@/components/particuliers/ServiceMaillage';
import MaillageVilles from '@/components/particuliers/MaillageVilles';

export const metadata: Metadata = {
  title: 'Peintures Isolantes Maison | Fini la chaleur en été ! | GEA',
  description: 'Marre de la chaleur sous les combles ? Nos peintures isolantes réduisent la température de votre maison jusqu\'à 12°C. Devis gratuit.',
};

export default function PeinturesIsolantesParticuliers() {
  return (
    <>
      {/* Hero Section - Ambiance fraîcheur */}
      <section className="relative min-h-[70vh] flex items-center bg-emerald-50 overflow-hidden">

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-emerald-600 text-sm font-medium px-4 py-2 rounded-full mb-6 shadow-sm">
                <span className="text-xl">🌡️</span>
                Pour les particuliers
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Marre d&apos;avoir trop chaud<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-sky-500">
                  chez vous en été ?
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                La clim qui tourne H24, les combles inhabitables, les nuits étouffantes...
                On a la solution : <strong>une peinture magique qui repousse la chaleur</strong>.
                Jusqu&apos;à 12°C de moins, sans travaux lourds !
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/particuliers/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-sky-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <span>Je veux retrouver la fraîcheur</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:0972143065"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-full font-semibold border-2 border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all"
                >
                  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  09 72 14 30 65
                </a>
              </div>

              {/* Badges de confiance */}
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span> Jusqu&apos;à -12°C
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span> Sans travaux lourds
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span> Écologique
                </div>
              </div>
            </div>

            {/* Image illustration */}
            <div className="relative hidden md:block">
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/20">
                <Image
                  src="https://image-flow.fr/uploads/image-peinture-thermo-ba173460-29dd-4f56-a927-51760e7cd43f.webp"
                  alt="Peinture isolante ThermoReflect"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Badge flottant */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">❄️</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">-12°C</div>
                    <div className="text-sm text-gray-500">sous les toits</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problèmes qu'on résout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">Vous aussi ?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Ces problèmes vous parlent ? 🥵
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '🔥', title: 'Combles invivables', desc: 'Impossible de monter à l\'étage l\'été, c\'est un four !', color: 'from-red-400 to-orange-500' },
              { icon: '💸', title: 'Factures de clim', desc: 'La climatisation qui tourne non-stop... et la facture qui explose.', color: 'from-amber-400 to-red-500' },
              { icon: '😴', title: 'Nuits difficiles', desc: 'Impossible de dormir quand il fait 30° dans la chambre.', color: 'from-purple-400 to-pink-500' },
              { icon: '❄️', title: 'Froid l\'hiver', desc: 'La chaleur s\'échappe aussi vite qu\'elle arrive.', color: 'from-blue-400 to-cyan-500' },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <span className="text-3xl filter drop-shadow">{item.icon}</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-700">
              Bonne nouvelle : <span className="text-emerald-600 font-semibold">on a la solution</span> ! 👇
            </p>
          </div>
        </div>
      </section>

      {/* ThermoReflect - Section détaillée */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                <span>🏠</span> Pour toiture & façade
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                ThermoReflect
              </h2>
              <p className="text-xl text-orange-600 font-semibold mb-6">
                Jusqu&apos;à -12°C sous les toits
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                ThermoReflect est une peinture isolante haute performance à base de microbilles céramiques.
                Appliquée sur votre toiture ou façade, elle <strong>réfléchit jusqu&apos;à 90% des rayons infrarouges</strong> responsables de la chaleur.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-orange-600">90%</div>
                  <div className="text-sm text-gray-600">Réflexion infrarouge</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-orange-600">20 ans</div>
                  <div className="text-sm text-gray-600">Garantie</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-orange-600">-30%</div>
                  <div className="text-sm text-gray-600">Facture climatisation</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-orange-600">Tous supports</div>
                  <div className="text-sm text-gray-600">Tuiles, ardoises, crépis</div>
                </div>
              </div>

              <div className="space-y-2">
                {['Application sur toiture (tuiles, ardoises, fibrociment)', 'Application sur façade (crépis, béton, brique)', 'Étanche et respirante', 'Résiste aux UV et intempéries', 'Sans odeur, écologique'].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <span className="text-orange-500">✓</span> {feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              {/* Avant/Après */}
              <div className="grid grid-cols-1 gap-6">
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full z-10">
                    Avant
                  </div>
                  <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="https://image-flow.fr/uploads/isolation-facade-8f2737cf-ab98-4858-975f-f14c24adc39e.webp"
                      alt="Façade avant traitement ThermoReflect"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-emerald-500 text-white text-sm font-bold px-3 py-1 rounded-full z-10">
                    Après
                  </div>
                  <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="https://image-flow.fr/uploads/isolation-facade3-84f2d2f9-60f8-4bd2-b5b1-3034fc7a2ff5.webp"
                      alt="Façade après traitement ThermoReflect"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                Application de ThermoReflect sur façade - Résultat immédiat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VitroReflect - Section détaillée */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://image-flow.fr/uploads/vitroreflect-0a5f0933-4b99-4459-8fef-76163244a982.webp"
                  alt="VitroReflect - Revêtement isolant pour vitres"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                <span>🪟</span> Pour vitres & baies vitrées
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                VitroReflect
              </h2>
              <p className="text-xl text-sky-600 font-semibold mb-6">
                -85% de chaleur, lumière préservée
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                VitroReflect est un revêtement transparent nano-céramique pour vos vitrages.
                Il <strong>bloque 85% de la chaleur solaire</strong> tout en laissant passer la lumière naturelle.
                Fini l&apos;effet serre dans votre salon !
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-sky-600">85%</div>
                  <div className="text-sm text-gray-600">Chaleur bloquée</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-sky-600">99%</div>
                  <div className="text-sm text-gray-600">UV bloqués</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-sky-600">70%</div>
                  <div className="text-sm text-gray-600">Lumière transmise</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-sky-600">Invisible</div>
                  <div className="text-sm text-gray-600">Aspect transparent</div>
                </div>
              </div>

              <div className="space-y-2">
                {['Baies vitrées et vérandas', 'Fenêtres de toit (Velux)', 'Vitrines commerciales', 'Protège vos meubles des UV', 'Application rapide sans travaux'].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <span className="text-sky-500">✓</span> {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZincoReflect - Section détaillée */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                <span>🏛️</span> Spécial toiture zinc
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                ZincoReflect
              </h2>
              <p className="text-xl text-slate-600 font-semibold mb-6">
                Isolation thermique + protection anticorrosion
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Votre toiture en zinc devient un véritable four en été ? ZincoReflect est spécialement formulé
                pour les surfaces métalliques. Il <strong>réfléchit la chaleur et protège contre la corrosion</strong>,
                prolongeant la durée de vie de votre toiture.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-slate-600">-10°C</div>
                  <div className="text-sm text-gray-600">Température intérieure</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-slate-600">Anti-corrosion</div>
                  <div className="text-sm text-gray-600">Protection longue durée</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-slate-600">Flexible</div>
                  <div className="text-sm text-gray-600">S&apos;adapte aux dilatations</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-slate-600">Esthétique</div>
                  <div className="text-sm text-gray-600">Conserve l&apos;aspect zinc</div>
                </div>
              </div>

              <div className="space-y-2">
                {['Toitures zinc (joints debout, tasseaux)', 'Bacs acier et tôles', 'Gouttières et descentes', 'Résiste aux chocs thermiques', 'Application directe sans primaire'].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <span className="text-slate-500">✓</span> {feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://image-flow.fr/uploads/nettoyage-toiture-zinc-221574f1-8898-4369-8a81-78477216010c.webp"
                  alt="Toiture zinc traitée avec ZincoReflect"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avant/Après - Concept */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Le résultat</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Concrètement, ça donne quoi ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Avant */}
            <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-3xl p-8 border border-red-200">
              <div className="text-center mb-6">
                <span className="text-4xl">😰</span>
                <h3 className="text-xl font-bold text-red-700 mt-2">Avant</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Combles à 40°C l\'été',
                  'Climatisation qui tourne H24',
                  'Factures qui explosent',
                  'Nuits impossibles à dormir',
                  'Étages inhabitables',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-red-700">
                    <span className="text-red-500">✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Après */}
            <div className="bg-gradient-to-br from-emerald-100 to-sky-100 rounded-3xl p-8 border border-emerald-200">
              <div className="text-center mb-6">
                <span className="text-4xl">😎</span>
                <h3 className="text-xl font-bold text-emerald-700 mt-2">Après</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Température agréable partout',
                  'Moins besoin de la clim',
                  '30% d\'économies sur les factures',
                  'On dort bien, même en canicule',
                  'Toute la maison est vivable',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-emerald-700">
                    <span className="text-emerald-500">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Simple</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Comment ça se passe ?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '1', icon: '📞', title: 'On discute', desc: 'Vous nous expliquez votre problème : chaleur sous les toits, effet serre...' },
              { step: '2', icon: '🏠', title: 'On vient voir', desc: 'Visite gratuite pour voir les surfaces à traiter et vous conseiller.' },
              { step: '3', icon: '🎨', title: 'On peint', desc: 'Application de la peinture isolante. Rapide, propre, sans nuisance.' },
              { step: '4', icon: '❄️', title: 'Vous profitez', desc: 'Dès les premiers rayons de soleil, vous sentez la différence !' },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-emerald-300 to-emerald-100" />
                )}

                <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-emerald-100 to-sky-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-4xl">{item.icon}</span>
                </div>
                <div className="absolute -top-2 left-1/2 ml-6 w-7 h-7 bg-emerald-500 text-white text-sm font-bold rounded-full flex items-center justify-center shadow">
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
      <section className="py-16 bg-emerald-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <span className="text-5xl mb-6 block">💬</span>
            <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
              &ldquo;Nos combles étaient invivables l&apos;été. Depuis le traitement Thermo-Reflect,
              on a gagné 10°C ! On a enfin pu aménager le grenier en chambre pour les enfants.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">👨</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Pierre D.</div>
                <div className="text-white/80 text-sm">Lyon - Traitement toiture 80m²</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maillage villes */}
      <MaillageVilles serviceSlug="ravalement-facade" serviceName="Ravalement de façade et peintures isolantes" accentColor="green" />

      {/* Maillage interne */}
      <ServiceMaillage currentService="peintures-isolantes" accentColor="emerald" />

      {/* Lien retour */}
      <section className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/particuliers"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-emerald-500 transition-colors"
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
