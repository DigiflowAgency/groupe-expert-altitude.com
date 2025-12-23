import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import MaillageVilles from '@/components/professionnels/MaillageVilles';

export const metadata: Metadata = {
  title: 'Panneaux Photovoltaiques Professionnels | Installation & Maintenance | GEA',
  description: 'Installation de panneaux photovoltaiques pour professionnels : batiments industriels, hotels, entrepots. Reduisez vos couts energetiques. Devis gratuit.',
};

export default function PhotovoltaiquePro() {
  const services = [
    {
      title: 'Etude de faisabilite',
      description: 'Analyse complete de votre toiture, orientation, surface disponible et estimation de production.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      title: 'Installation sur-mesure',
      description: 'Pose par nos equipes certifiees QualiPV. Panneaux haute performance adaptes a vos besoins.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Raccordement reseau',
      description: 'Gestion complete des demarches administratives et raccordement Enedis.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Maintenance & Nettoyage',
      description: 'Contrats de maintenance preventive et nettoyage pour optimiser le rendement.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://image-flow.fr/uploads/toiture-industriel-panneau-solaire-a09f3c0f-b14a-4585-bde6-88c62fcb8c12.webp"
            alt="Panneaux photovoltaiques sur batiment industriel"
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
              Panneaux Photovoltaiques <span className="text-gea-light-blue">pour Professionnels</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Reduisez vos couts energetiques et votre empreinte carbone avec une installation photovoltaique sur-mesure pour votre batiment professionnel.
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

      {/* Chiffres cles */}
      <section className="py-12 bg-gea-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black text-gea-light-blue mb-2">70%</div>
              <p className="text-gray-300 text-sm">d&apos;economies sur vos factures</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-gea-light-blue mb-2">25 ans</div>
              <p className="text-gray-300 text-sm">de garantie panneaux</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-gea-light-blue mb-2">5-8 ans</div>
              <p className="text-gray-300 text-sm">retour sur investissement</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-gea-light-blue mb-2">100%</div>
              <p className="text-gray-300 text-sm">energie verte</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-gea-blue/10 text-gea-blue rounded-full text-sm font-semibold mb-4">
              NOS SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gea-black mb-4">
              Une solution complete cle en main
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De l&apos;etude initiale a la maintenance, nous gerons l&apos;integralite de votre projet photovoltaique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow group">
                <div className="w-14 h-14 bg-gea-blue rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gea-black mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://image-flow.fr/uploads/toiture-industriel-panneau-solaire-a09f3c0f-b14a-4585-bde6-88c62fcb8c12.webp"
                alt="Panneaux solaires sur batiment industriel"
                fill
                className="object-cover"
              />
            </div>

            {/* Contenu */}
            <div>
              <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
                AVANTAGES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gea-black mb-6">
                Pourquoi installer des panneaux solaires sur votre batiment ?
              </h2>
              <p className="text-gray-600 mb-8">
                L&apos;energie solaire represente un investissement strategique pour les professionnels. Au-dela des economies, c&apos;est un engagement concret pour la transition energetique.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gea-black">Reduction des couts</h3>
                    <p className="text-gray-600 text-sm">Jusqu&apos;a 70% d&apos;economies sur vos factures d&apos;electricite annuelles</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gea-black">Independance energetique</h3>
                    <p className="text-gray-600 text-sm">Protection contre les hausses de prix de l&apos;electricite</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gea-black">Image RSE</h3>
                    <p className="text-gray-600 text-sm">Valorisez votre engagement ecologique aupres de vos clients et partenaires</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gea-black">Valorisation immobiliere</h3>
                    <p className="text-gray-600 text-sm">Augmentez la valeur de votre patrimoine immobilier</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus d'installation */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gea-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gea-blue/20 text-gea-light-blue rounded-full text-sm font-semibold mb-4">
              NOTRE METHODE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comment se deroule votre projet ?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Un accompagnement de A a Z pour une installation reussie
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                <h3 className="font-bold text-lg mb-2">Etude gratuite</h3>
                <p className="text-gray-400 text-sm">Analyse de votre site, simulation de production et estimation des economies</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="font-bold text-lg mb-2">Devis detaille</h3>
                <p className="text-gray-400 text-sm">Proposition technique et financiere adaptee a vos besoins et votre budget</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="font-bold text-lg mb-2">Installation</h3>
                <p className="text-gray-400 text-sm">Pose par nos equipes certifiees, sans interruption de votre activite</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                <h3 className="font-bold text-lg mb-2">Mise en service</h3>
                <p className="text-gray-400 text-sm">Raccordement, demarches administratives et suivi de production</p>
              </div>
            </div>

            {/* Ligne de connexion */}
            <div className="hidden md:block relative h-1 bg-gea-blue/30 -mt-24 mb-16 mx-8">
              <div className="absolute inset-0 bg-gradient-to-r from-gea-blue via-gea-blue to-gea-blue/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Types de batiments */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gea-black mb-4">
              Nous intervenons sur tous types de batiments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque projet est unique, nous adaptons notre solution a votre configuration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg border-l-4 border-gea-blue hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gea-black mb-2">Batiments industriels</h3>
              <p className="text-gray-600 mb-4">Entrepots, usines, hangars logistiques. Grandes surfaces de toiture ideales pour le photovoltaique.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Toiture terrasse ou bac acier
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Grandes puissances (100+ kWc)
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-lg border-l-4 border-gea-blue hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gea-black mb-2">Hotels & Tertiaire</h3>
              <p className="text-gray-600 mb-4">Hotels, bureaux, centres commerciaux. Optimisez votre consommation energetique.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Integration architecturale
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Autoconsommation optimisee
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-lg border-l-4 border-gea-blue hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gea-black mb-2">Immeubles & Coproprietes</h3>
              <p className="text-gray-600 mb-4">Production collective pour reduire les charges des coproprietes.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Partage de l&apos;energie produite
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Reduction des charges
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Aides et financements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
                  FINANCEMENTS
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gea-black mb-6">
                  Aides et subventions disponibles
                </h2>
                <p className="text-gray-600 mb-8">
                  De nombreux dispositifs existent pour financer votre installation photovoltaique. Nous vous accompagnons dans toutes les demarches administratives.
                </p>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gea-black mb-1">Prime a l&apos;autoconsommation</h3>
                    <p className="text-gray-600 text-sm">Aide de l&apos;Etat pour les installations en autoconsommation avec vente du surplus</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gea-black mb-1">Tarif de rachat garanti</h3>
                    <p className="text-gray-600 text-sm">EDF OA rachete votre surplus de production a un tarif garanti pendant 20 ans</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gea-black mb-1">Amortissement accelere</h3>
                    <p className="text-gray-600 text-sm">Deduction fiscale acceleree pour les entreprises (sur 12 mois)</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gea-black mb-1">TVA reduite</h3>
                    <p className="text-gray-600 text-sm">TVA a 10% pour les installations de moins de 3 kWc sur batiment de plus de 2 ans</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gea-blue to-gea-blue/80 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Exemple de rentabilite</h3>
                <p className="text-white/80 mb-8">Pour un batiment industriel de 1000m2</p>

                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-white/20 pb-4">
                    <span>Puissance installee</span>
                    <span className="font-bold text-xl">100 kWc</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-4">
                    <span>Production annuelle</span>
                    <span className="font-bold text-xl">~110 000 kWh</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-4">
                    <span>Economies annuelles</span>
                    <span className="font-bold text-xl text-green-300">~15 000 EUR</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Retour sur investissement</span>
                    <span className="font-bold text-xl">6-7 ans</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-white text-gea-blue px-6 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all"
                >
                  Simuler mon projet
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maillage villes */}
      <MaillageVilles serviceSlug="panneaux-photovoltaiques" serviceName="Installation panneaux photovoltaiques" />

      {/* CTA */}
      <section className="py-20 bg-gea-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pret a reduire vos couts energetiques ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour une etude personnalisee gratuite de votre projet photovoltaique. Nos experts vous rappellent sous 24h.
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
