import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import MaillageVilles from '@/components/professionnels/MaillageVilles';

export const metadata: Metadata = {
  title: 'Eaux Pluviales & Detection Fuites Professionnels | Batiments Industriels | GEA',
  description: 'Descentes d\'eaux pluviales et detection de fuites pour batiments industriels. Diagnostic, reparation, maintenance. Intervention rapide sur sites professionnels.',
};

export default function EauxPluvialesPro() {
  const services = [
    {
      title: 'Descentes d\'eaux pluviales',
      description: 'Installation, reparation et maintenance des systemes d\'evacuation des eaux pluviales sur batiments industriels et commerciaux.',
      icon: '🌧️',
      features: [
        'Installation neuves',
        'Remplacement descentes',
        'Debouchage et nettoyage',
        'Raccordement reseau',
      ],
    },
    {
      title: 'Detection de fuites',
      description: 'Diagnostic precis des infiltrations et fuites d\'eau sur toitures et facades de batiments industriels par thermographie et tests d\'etancheite.',
      icon: '🔍',
      features: [
        'Thermographie infrarouge',
        'Test d\'etancheite a l\'eau',
        'Recherche non destructive',
        'Rapport detaille',
      ],
    },
    {
      title: 'Reparation infiltrations',
      description: 'Traitement des infiltrations detectees : etancheite, colmatage, remplacement des elements defaillants.',
      icon: '🔧',
      features: [
        'Colmatage fissures',
        'Refection etancheite',
        'Remplacement gouttières',
        'Traitement points singuliers',
      ],
    },
    {
      title: 'Maintenance preventive',
      description: 'Contrats de maintenance pour prevenir les problemes d\'infiltration et assurer la perennite de vos installations.',
      icon: '📋',
      features: [
        'Visites periodiques',
        'Nettoyage gouttières',
        'Controle etancheite',
        'Rapport d\'intervention',
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://image-flow.fr/uploads/descente-eau-pluviale-batiment-c2678d42-f331-458a-a2a3-711d919e95d6.webp"
            alt="Descente eaux pluviales batiment professionnel"
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
              Eaux Pluviales & <span className="text-gea-light-blue">Detection de Fuites</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Solutions completes pour la gestion des eaux pluviales et la detection de fuites sur batiments industriels, entrepots et sites commerciaux.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gea-blue text-white rounded-lg font-semibold hover:bg-gea-blue/90 transition-all"
              >
                Demander un diagnostic
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
            Nos services eaux pluviales
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            De la detection a la reparation, une solution complete pour vos batiments
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

      {/* Methodes de detection */}
      <section className="py-20 bg-gea-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nos methodes de detection
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Thermographie</h3>
              <p className="text-gray-300">Detection par camera infrarouge des zones humides et infiltrations invisibles a l&apos;oeil nu.</p>
            </div>

            <div className="bg-white/5 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Test a l&apos;eau</h3>
              <p className="text-gray-300">Mise sous eau controlee pour identifier precisement les points de passage.</p>
            </div>

            <div className="bg-white/5 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Rapport detaille</h3>
              <p className="text-gray-300">Compte-rendu complet avec photos, schemas et preconisations de travaux.</p>
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
              <h3 className="font-bold text-gea-black">Entrepots</h3>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <span className="text-4xl mb-4 block">🏢</span>
              <h3 className="font-bold text-gea-black">Bureaux</h3>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <span className="text-4xl mb-4 block">🏬</span>
              <h3 className="font-bold text-gea-black">Commerces</h3>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <span className="text-4xl mb-4 block">🏨</span>
              <h3 className="font-bold text-gea-black">Hotels</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Maillage villes */}
      <MaillageVilles serviceSlug="gouttiere" serviceName="Gouttiere et eaux pluviales" />

      {/* CTA */}
      <section className="py-20 bg-gea-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Probleme d&apos;infiltration sur votre batiment ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Nous intervenons rapidement pour diagnostiquer et traiter vos problemes d&apos;etancheite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gea-blue rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Demander un diagnostic
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
