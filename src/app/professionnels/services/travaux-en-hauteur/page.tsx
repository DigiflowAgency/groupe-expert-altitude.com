import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import MaillageVilles from '@/components/professionnels/MaillageVilles';

export const metadata: Metadata = {
  title: 'Travaux en Hauteur sur Corde | Cordistes Professionnels | GEA',
  description: 'Travaux en hauteur par cordistes certifies : nettoyage vitres, traitement toiture, fissures, ravalement facade. Batiments industriels, hotels, immeubles.',
};

export default function TravauxEnHauteurPro() {
  const services = [
    {
      title: 'Nettoyage de vitres en hauteur',
      description: 'Nettoyage professionnel de facades vitrees, verrieres et surfaces vitrees en hauteur sans nacelle ni echafaudage.',
      icon: '🪟',
      features: ['Facades vitrees', 'Verrieres', 'Verandas industrielles', 'Murs rideaux'],
    },
    {
      title: 'Traitement de toiture en hauteur',
      description: 'Demoussage, nettoyage haute pression, traitement hydrofuge et reparation de toitures inaccessibles.',
      icon: '🏠',
      features: ['Demoussage', 'Nettoyage HP', 'Traitement hydrofuge', 'Reparations'],
    },
    {
      title: 'Traitement des fissures',
      description: 'Diagnostic et reparation de fissures sur facades, murs et structures en hauteur.',
      icon: '🔧',
      features: ['Diagnostic technique', 'Injection resine', 'Rebouchage', 'Etancheite'],
    },
    {
      title: 'Ravalement de facade',
      description: 'Ravalement complet avec peintures isolantes Thermo-Reflect : etanche, isolante et ecologique.',
      icon: '🎨',
      features: ['Preparation surface', 'Peinture isolante', 'Etancheite', 'Finitions'],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://image-flow.fr/uploads/travaux-corde4-d6551996-849a-405c-9016-0d0cad93be73.webp"
            alt="Cordiste professionnel en intervention"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gea-black via-gea-black/80 to-gea-black/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-gea-blue/20 text-gea-light-blue rounded-full text-sm font-semibold mb-6">
              PROFESSIONNELS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Travaux en Hauteur <span className="text-gea-light-blue">sur Corde</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Cordistes professionnels certifies CQP pour tous vos travaux en hauteur sans nacelle ni echafaudage. Interventions rapides et economiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gea-blue text-white rounded-lg font-semibold hover:bg-gea-blue/90 transition-all"
              >
                Demander un devis gratuit
              </Link>
              <a
                href="tel:0972143065"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
              >
                09 72 14 30 65
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gea-black text-center mb-4">
            Nos interventions en hauteur
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Des solutions adaptees a tous vos besoins d&apos;intervention en hauteur
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{service.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gea-black mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-gea-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages cordistes */}
      <section className="py-20 bg-gea-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Pourquoi choisir l&apos;intervention sur corde ?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">-40% de cout</h3>
              <p className="text-gray-300">Par rapport aux nacelles et echafaudages traditionnels</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Rapidite</h3>
              <p className="text-gray-300">Installation en quelques heures, pas de delais d&apos;echafaudage</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Securite</h3>
              <p className="text-gray-300">Cordistes certifies CQP, materiel conforme EN 795</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Accessibilite</h3>
              <p className="text-gray-300">Acces aux zones impossibles pour les nacelles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Types de batiments */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gea-black text-center mb-12">
            Batiments concernes
          </h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <span className="text-4xl mb-4 block">🏭</span>
              <h3 className="font-bold text-gea-black">Batiments industriels</h3>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <span className="text-4xl mb-4 block">🏨</span>
              <h3 className="font-bold text-gea-black">Hotels</h3>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <span className="text-4xl mb-4 block">🏢</span>
              <h3 className="font-bold text-gea-black">Immeubles</h3>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <span className="text-4xl mb-4 block">🏬</span>
              <h3 className="font-bold text-gea-black">Centres commerciaux</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Maillage villes */}
      <MaillageVilles serviceSlug="cordiste" serviceName="Cordiste et travaux en hauteur" />

      {/* CTA */}
      <section className="py-20 bg-gea-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Besoin d&apos;une intervention en hauteur ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Nos cordistes interviennent rapidement sur tous types de batiments. Devis gratuit sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gea-blue rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Demander un devis gratuit
            </Link>
            <a
              href="tel:0972143065"
              className="inline-flex items-center justify-center px-8 py-4 bg-gea-black text-white rounded-lg font-semibold hover:bg-gea-black/90 transition-all"
            >
              09 72 14 30 65
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
