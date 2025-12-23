import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ServiceMaillage from '@/components/particuliers/ServiceMaillage';
import MaillageVilles from '@/components/particuliers/MaillageVilles';

export const metadata: Metadata = {
  title: 'Gouttières & Fuites Toiture | Protégez votre Maison | GEA',
  description: 'Gouttières bouchées ? Fuite sur le toit ? On s\'en occupe ! Installation, réparation et détection de fuites pour votre maison. Devis gratuit.',
};

export default function EauxPluvialesParticuliers() {
  return (
    <>
      {/* Hero Section - Ambiance protectrice */}
      <section className="relative min-h-[70vh] flex items-center bg-blue-50 overflow-hidden">

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-blue-600 text-sm font-medium px-4 py-2 rounded-full mb-6 shadow-sm">
                <span className="text-xl">🏠</span>
                Pour les particuliers
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Protégez votre maison<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                  de l&apos;eau et des fuites
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Une gouttière qui déborde, une tache au plafond... On sait que c&apos;est stressant.
                Pas de panique, on s&apos;occupe de tout : <strong>diagnostic, réparation, et tranquillité retrouvée</strong> !
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/particuliers/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <span>Je veux un diagnostic</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:0972143065"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-full font-semibold border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
                >
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  09 72 14 30 65
                </a>
              </div>

              {/* Badges de confiance */}
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span> Intervention rapide
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span> Diagnostic gratuit
                </div>
              </div>
            </div>

            {/* Image illustration */}
            <div className="relative hidden md:block">
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20">
                <Image
                  src="https://image-flow.fr/uploads/descente-eau-pluviale-individuelle-2f54efc9-7447-4b4a-a07a-cd8249669fca.webp"
                  alt="Descente d'eau pluviale maison individuelle"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Badge flottant */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-800">Diagnostic</div>
                    <div className="text-sm text-gray-500">gratuit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signes d'alerte - Plus humain et visuel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">Ça vous parle ?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Ces signes doivent vous alerter 🚨
            </h2>
            <p className="text-gray-600 mt-4">
              Si vous reconnaissez l&apos;un de ces symptômes, il est temps d&apos;agir !
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '💦', title: 'Taches au plafond', desc: 'Des auréoles qui apparaissent après la pluie ? C\'est le signe d\'une infiltration.', color: 'from-blue-400 to-blue-600' },
              { icon: '🍂', title: 'Gouttières qui débordent', desc: 'L\'eau coule le long des murs au lieu de descendre ? Vos gouttières sont bouchées.', color: 'from-amber-400 to-orange-500' },
              { icon: '🔶', title: 'Rouille sur les descentes', desc: 'Des traces de rouille ? Vos descentes sont en fin de vie et risquent de percer.', color: 'from-orange-400 to-red-500' },
              { icon: '🌊', title: 'Eau qui stagne', desc: 'Des flaques autour de la maison ? L\'évacuation ne se fait plus correctement.', color: 'from-cyan-400 to-blue-500' },
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

          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm">
              👆 Un seul de ces signes suffit pour nous appeler. Mieux vaut prévenir que guérir !
            </p>
          </div>
        </div>
      </section>

      {/* Ce qu'on fait pour vous */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">On s&apos;occupe de tout</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Comment on peut vous aider ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: '🌧️',
                title: 'Gouttières & descentes',
                desc: 'Installation de gouttières neuves ou remplacement des anciennes. On travaille tous les matériaux : zinc, alu, PVC.',
                features: ['Installation neuve', 'Remplacement', 'Tous matériaux', 'Finitions soignées'],
                color: 'bg-blue-50 border-blue-100',
                iconBg: 'from-blue-400 to-blue-600',
              },
              {
                icon: '🔍',
                title: 'Détection de fuites',
                desc: 'Vous avez une fuite mais vous ne savez pas d\'où elle vient ? On la trouve sans tout casser !',
                features: ['Diagnostic précis', 'Sans destruction', 'Rapport détaillé', 'Solutions proposées'],
                color: 'bg-cyan-50 border-cyan-100',
                iconBg: 'from-cyan-400 to-cyan-600',
              },
              {
                icon: '🔧',
                title: 'Réparations',
                desc: 'Une fuite, un trou, une gouttière qui pendouille ? On répare vite et bien pour que vous soyez tranquille.',
                features: ['Intervention rapide', 'Réparation durable', 'Garantie travaux', 'Devis avant travaux'],
                color: 'bg-green-50 border-green-100',
                iconBg: 'from-green-400 to-green-600',
              },
              {
                icon: '🧹',
                title: 'Entretien annuel',
                desc: 'Un petit nettoyage chaque année et vous évitez les gros problèmes ! On vous propose un contrat tranquillité.',
                features: ['Nettoyage gouttières', 'Vérification toiture', 'Rapport annuel', 'Prix fixe'],
                color: 'bg-purple-50 border-purple-100',
                iconBg: 'from-purple-400 to-purple-600',
              },
            ].map((service, index) => (
              <div key={index} className={`${service.color} rounded-2xl p-8 border hover:shadow-lg transition-all duration-300`}>
                <div className="flex items-start gap-5">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <span className="text-3xl filter drop-shadow">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
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

      {/* Comment ça marche */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Simple et rapide</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Comment ça se passe ?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '1', icon: '📞', title: 'Vous appelez', desc: 'Expliquez-nous votre problème. On pose quelques questions pour comprendre la situation.' },
              { step: '2', icon: '🏠', title: 'On passe voir', desc: 'Un technicien vient chez vous pour constater le problème. Diagnostic gratuit !' },
              { step: '3', icon: '📋', title: 'On vous dit tout', desc: 'Explication claire du problème + devis détaillé. Pas de surprise, pas de jargon.' },
              { step: '4', icon: '✅', title: 'C\'est réparé', desc: 'Intervention rapide et soignée. Votre maison est de nouveau protégée !' },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                {/* Ligne de connexion */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-300 to-blue-100" />
                )}

                <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-4xl">{item.icon}</span>
                </div>
                <div className="absolute -top-2 left-1/2 ml-6 w-7 h-7 bg-blue-500 text-white text-sm font-bold rounded-full flex items-center justify-center shadow">
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
      <section className="py-16 bg-blue-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <span className="text-5xl mb-6 block">💬</span>
            <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
              &ldquo;On avait des taches au plafond depuis des mois, on ne trouvait pas d&apos;où ça venait.
              GEA a trouvé la fuite en 1h et réparé le jour même. Plus de stress, merci !&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">👩</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Marie L.</div>
                <div className="text-white/80 text-sm">Nantes - Détection et réparation fuite</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maillage villes */}
      <MaillageVilles serviceSlug="gouttiere" serviceName="Gouttières et eaux pluviales" accentColor="blue" />

      {/* Maillage interne */}
      <ServiceMaillage currentService="eaux-pluviales" accentColor="blue" />

      {/* Lien retour */}
      <section className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/particuliers"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors"
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
