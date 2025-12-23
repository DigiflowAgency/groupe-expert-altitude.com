import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ServiceMaillage from '@/components/particuliers/ServiceMaillage';
import MaillageVilles from '@/components/particuliers/MaillageVilles';

export const metadata: Metadata = {
  title: 'Recherche de Fuites | Trouvez la fuite sans tout casser | GEA',
  description: 'Fuite d\'eau introuvable ? Taches au plafond ? On localise les fuites sur toiture et canalisations sans destruction. Diagnostic gratuit.',
};

export default function RechercheFuitesParticuliers() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-cyan-50 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-cyan-600 text-sm font-medium px-4 py-2 rounded-full mb-6 shadow-sm">
                <span className="text-xl">🔍</span>
                Pour les particuliers
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Une fuite introuvable ?<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                  On la trouve pour vous
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Taches au plafond, humidite persistante, facture d&apos;eau anormale...
                Pas de panique ! On localise la fuite <strong>sans tout casser</strong> grace a nos technologies de detection.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/particuliers/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <span>Demander un diagnostic</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:0972143065"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-full font-semibold border-2 border-gray-200 hover:border-cyan-300 hover:bg-cyan-50 transition-all"
                >
                  <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  09 72 14 30 65
                </a>
              </div>

              {/* Badges de confiance */}
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span> Sans destruction
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span> Diagnostic gratuit
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span> Intervention rapide
                </div>
              </div>
            </div>

            {/* Image illustration */}
            <div className="relative hidden md:block">
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20">
                <Image
                  src="https://image-flow.fr/uploads/fuite-toiture-5753c8a1-96d8-4a4c-bf98-c470605dee21.webp"
                  alt="Recherche de fuite toiture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Badge flottant */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-800">Precision</div>
                    <div className="text-sm text-gray-500">au centimetre</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types de fuites */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Nos expertises</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Quelles fuites detectons-nous ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '🏠', title: 'Fuites toiture', desc: 'Infiltrations par le toit, tuiles cassees, joints defaillants', color: 'from-orange-400 to-red-500' },
              { icon: '🚿', title: 'Fuites canalisations', desc: 'Tuyaux enterres, canalisations dans les murs', color: 'from-blue-400 to-cyan-500' },
              { icon: '🌧️', title: 'Infiltrations facade', desc: 'Humidite par les murs, fissures, joints de fenetre', color: 'from-gray-400 to-slate-500' },
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
        </div>
      </section>

      {/* Notre methode */}
      <section className="py-20 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Notre methode</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Comment on trouve votre fuite ?
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Des technologies de pointe pour une detection precise, sans casser vos murs !
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: '📡',
                title: 'Detection acoustique',
                desc: 'On ecoute le bruit de l\'eau qui s\'echappe grace a des micros ultra-sensibles. Meme une micro-fuite ne nous echappe pas !',
                color: 'from-purple-400 to-pink-500',
              },
              {
                icon: '🌡️',
                title: 'Camera thermique',
                desc: 'Les fuites d\'eau creent des differences de temperature. Notre camera infrarouge les detecte a travers les murs.',
                color: 'from-red-400 to-orange-500',
              },
              {
                icon: '💨',
                title: 'Test a la fumee',
                desc: 'On injecte une fumee inoffensive pour visualiser le cheminement de l\'eau et trouver le point d\'entree.',
                color: 'from-gray-400 to-slate-500',
              },
            ].map((method, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <span className="text-3xl filter drop-shadow">{method.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{method.title}</h3>
                <p className="text-gray-600 leading-relaxed">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Pourquoi nous choisir ?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-8">
                La detection non destructive
              </h2>

              <div className="space-y-6">
                {[
                  { icon: '✅', title: 'Sans casser vos murs', desc: 'On localise la fuite au centimetre pres sans demolir' },
                  { icon: '⚡', title: 'Intervention rapide', desc: 'On intervient sous 24-48h pour les urgences' },
                  { icon: '📋', title: 'Rapport detaille', desc: 'Photos, schema et recommandations pour la reparation' },
                  { icon: '💰', title: 'Economies garanties', desc: 'Evitez des travaux inutiles en ciblant exactement la fuite' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://image-flow.fr/uploads/fuite-eau-f56de7e3-caa7-47e1-acb5-adba23df2393.webp"
                  alt="Detection de fuite d'eau"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ca se passe */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Simple et rapide</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Comment ca se passe ?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '1', icon: '📞', title: 'Vous appelez', desc: 'Decrivez-nous votre probleme : taches, humidite, facture anormale...' },
              { step: '2', icon: '🏠', title: 'On intervient', desc: 'Un technicien vient avec son materiel de detection sous 24-48h.' },
              { step: '3', icon: '🎯', title: 'On localise', desc: 'Grace a nos outils, on trouve exactement ou se situe la fuite.' },
              { step: '4', icon: '📋', title: 'On vous explique', desc: 'Rapport complet avec photos et solutions de reparation.' },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-cyan-300 to-cyan-100" />
                )}

                <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-4xl">{item.icon}</span>
                </div>
                <div className="absolute -top-2 left-1/2 ml-6 w-7 h-7 bg-cyan-500 text-white text-sm font-bold rounded-full flex items-center justify-center shadow">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Temoignage */}
      <section className="py-16 bg-cyan-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <span className="text-5xl mb-6 block">💬</span>
            <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
              &ldquo;On avait une fuite invisible qui nous coutait 50 euros par mois sur la facture d&apos;eau.
              GEA l&apos;a trouvee en 2 heures sous notre terrasse. Reparation faite le lendemain !&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">👨</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Jean-Marc P.</div>
                <div className="text-white/80 text-sm">Montpellier - Detection fuite canalisation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maillage villes */}
      <MaillageVilles serviceSlug="etancheite-toiture" serviceName="Recherche de fuites et étanchéité toiture" accentColor="blue" />

      {/* Maillage interne */}
      <ServiceMaillage currentService="recherche-fuites" accentColor="cyan" />

      {/* Lien retour */}
      <section className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/particuliers"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-cyan-500 transition-colors"
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
