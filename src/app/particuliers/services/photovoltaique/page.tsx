import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ServiceMaillage from '@/components/particuliers/ServiceMaillage';
import MaillageVilles from '@/components/particuliers/MaillageVilles';

export const metadata: Metadata = {
  title: 'Panneaux Solaires pour votre Maison | Devis Gratuit | GEA',
  description: 'Faites des économies avec le solaire ! Installation de panneaux photovoltaïques pour particuliers. Jusqu\'à 70% d\'économies sur vos factures. Devis gratuit.',
};

export default function PhotovoltaiqueParticuliers() {
  return (
    <>
      {/* Hero Section - Chaleureux et lumineux */}
      <section className="relative min-h-[70vh] flex items-center bg-orange-50 overflow-hidden">

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-orange-600 text-sm font-medium px-4 py-2 rounded-full mb-6 shadow-sm">
                <span className="text-xl">☀️</span>
                Pour les particuliers
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Et si le soleil <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                  payait vos factures ?
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Imaginez : produire votre propre électricité, réduire vos factures jusqu&apos;à <strong>70%</strong>,
                et faire un geste pour la planète. Avec nous, c&apos;est simple et accessible !
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <span>Je veux mon devis gratuit</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:0972143065"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-full font-semibold border-2 border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all"
                >
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  09 72 14 30 65
                </a>
              </div>

              {/* Badges de confiance */}
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span> Devis gratuit sans engagement
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span> Artisans locaux qualifiés
                </div>
              </div>
            </div>

            {/* Image illustration */}
            <div className="relative hidden md:block">
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-orange-500/20">
                <Image
                  src="https://image-flow.fr/uploads/panneau-solaire-toiture-individuelle-29b4ed30-6334-42bf-b0d0-db12475e1178.webp"
                  alt="Maison avec panneaux solaires"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Badge flottant */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💶</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">-70%</div>
                    <div className="text-sm text-gray-500">sur vos factures</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Comment ça marche */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Simple comme bonjour</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Comment ça marche ?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '1', icon: '📞', title: 'On échange', desc: 'Appelez-nous ou demandez un devis en ligne. On discute de votre projet !' },
              { step: '2', icon: '🏠', title: 'On vient voir', desc: 'Un technicien passe chez vous pour étudier votre toiture gratuitement.' },
              { step: '3', icon: '🔧', title: 'On installe', desc: 'Nos équipes posent vos panneaux en 1 à 2 jours, proprement.' },
              { step: '4', icon: '☀️', title: 'Vous économisez', desc: 'C\'est parti ! Votre compteur tourne moins vite, votre porte-monnaie vous remercie.' },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                {/* Ligne de connexion */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-orange-300 to-orange-100" />
                )}

                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 md:right-auto md:left-1/2 md:ml-4 w-6 h-6 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Nos tarifs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Combien ça coûte ?
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Prix tout compris : fourniture des panneaux premium + pose par nos équipes certifiées + démarches administratives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* 3 kWc */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all group">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">3 kWc</h3>
                <p className="text-gray-400 text-sm mb-4">Idéal pour 2 personnes</p>
                <p className="text-gray-400 text-xs mb-1">à partir de</p>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-2">
                  7 490 €
                </div>
                <p className="text-gray-500 text-xs mb-4">Fourniture + Pose TTC</p>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-gray-300">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    6-8 panneaux
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    ~3 500 kWh/an
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    ~15 m² de toiture
                  </li>
                </ul>
              </div>
            </div>

            {/* 6 kWc - Populaire */}
            <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-orange-500 relative group">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                POPULAIRE
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">6</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">6 kWc</h3>
                <p className="text-gray-400 text-sm mb-4">Idéal pour 3-4 personnes</p>
                <p className="text-gray-400 text-xs mb-1">à partir de</p>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-2">
                  11 990 €
                </div>
                <p className="text-gray-500 text-xs mb-4">Fourniture + Pose TTC</p>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-gray-300">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    12-16 panneaux
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    ~7 000 kWh/an
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    ~30 m² de toiture
                  </li>
                </ul>
              </div>
            </div>

            {/* 9 kWc */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all group">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">9</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">9 kWc</h3>
                <p className="text-gray-400 text-sm mb-4">Idéal pour 4-5 personnes</p>
                <p className="text-gray-400 text-xs mb-1">à partir de</p>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-2">
                  16 490 €
                </div>
                <p className="text-gray-500 text-xs mb-4">Fourniture + Pose TTC</p>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-gray-300">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    18-24 panneaux
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    ~10 500 kWh/an
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    ~45 m² de toiture
                  </li>
                </ul>
              </div>
            </div>

            {/* 12 kWc */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all group">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">12</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">12 kWc</h3>
                <p className="text-gray-400 text-sm mb-4">Grande maison / Piscine</p>
                <p className="text-gray-400 text-xs mb-1">à partir de</p>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-2">
                  20 990 €
                </div>
                <p className="text-gray-500 text-xs mb-4">Fourniture + Pose TTC</p>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-gray-300">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    24-32 panneaux
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    ~14 000 kWh/an
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    ~60 m² de toiture
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Inclus dans le prix */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white text-center mb-6">Inclus dans tous nos packs</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="text-gray-300 text-sm">
                  <svg className="w-6 h-6 text-orange-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Garantie 20 ans
                </div>
                <div className="text-gray-300 text-sm">
                  <svg className="w-6 h-6 text-orange-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Onduleur inclus
                </div>
                <div className="text-gray-300 text-sm">
                  <svg className="w-6 h-6 text-orange-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Démarches admin
                </div>
                <div className="text-gray-300 text-sm">
                  <svg className="w-6 h-6 text-orange-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Raccordement
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-xs mt-6">
            * Prix indicatifs TTC. Tarif final sur devis après étude technique de votre toiture.
          </p>
        </div>
      </section>

      {/* Avantages - Style carte moderne */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Les bonnes raisons</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Pourquoi passer au solaire ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '💰', title: 'Économies garanties', desc: 'Jusqu\'à 70% de réduction sur vos factures d\'électricité chaque mois', color: 'from-green-400 to-emerald-500' },
              { icon: '🌍', title: 'Geste écolo', desc: 'Réduisez votre empreinte carbone et participez à la transition énergétique', color: 'from-blue-400 to-cyan-500' },
              { icon: '🏡', title: 'Valeur +', desc: 'Votre maison prend de la valeur sur le marché immobilier', color: 'from-purple-400 to-pink-500' },
              { icon: '🔒', title: 'Indépendance', desc: 'Moins dépendant des hausses de prix de l\'électricité', color: 'from-orange-400 to-red-500' },
            ].map((item, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl filter drop-shadow">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financement GEA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Contenu texte */}
              <div>
                <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Financement facilité</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6">
                  GEA vous aide à financer votre projet
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Pas besoin de tout payer d&apos;un coup ! Grâce à notre partenariat avec un établissement bancaire,
                  nous vous proposons des <strong>solutions de financement adaptées</strong> à votre budget.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Mensualités adaptées</h3>
                      <p className="text-gray-600 text-sm">Des mensualités qui correspondent à vos économies d&apos;énergie</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Réponse rapide</h3>
                      <p className="text-gray-600 text-sm">Accord de financement sous 48h pour lancer votre projet</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Accompagnement complet</h3>
                      <p className="text-gray-600 text-sm">On s&apos;occupe de tout : dossier, démarches, installation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carte visuelle */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 border border-orange-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />

                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Partenaire bancaire</h3>
                  <p className="text-gray-600 mb-6">
                    Solutions de crédit travaux spécialement négociées pour les projets d&apos;énergie renouvelable.
                  </p>

                  <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">Exemple pour 6 kWc</span>
                      <span className="text-orange-500 font-bold">à partir de 249€/mois*</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500">
                    *Exemple de financement sur 120 mois. Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignage / Réassurance */}
      <section className="py-16 bg-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <span className="text-5xl mb-6 block">💬</span>
            <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
              &ldquo;On hésitait depuis 2 ans... Finalement on a sauté le pas avec GEA et on ne regrette pas !
              Installation nickel en 2 jours, et déjà 45€ d&apos;économies sur notre première facture.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">👨‍👩‍👧</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Famille Martin</div>
                <div className="text-white/80 text-sm">Montpellier - Installation 6kWc</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maillage villes */}
      <MaillageVilles serviceSlug="panneaux-photovoltaiques" serviceName="Panneaux photovoltaïques" accentColor="orange" />

      {/* Maillage interne */}
      <ServiceMaillage currentService="photovoltaique" accentColor="orange" />

      {/* Lien retour */}
      <section className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/particuliers"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors"
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
