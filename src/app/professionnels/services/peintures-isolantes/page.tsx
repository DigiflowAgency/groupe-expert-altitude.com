import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import MaillageVilles from '@/components/professionnels/MaillageVilles';

export const metadata: Metadata = {
  title: 'Peintures Isolantes Professionnelles | Thermo-Reflect, Vitro-Reflect, Zinco-Reflect | GEA',
  description: 'Peintures isolantes pour professionnels : Thermo-Reflect (toiture/facade), Vitro-Reflect (vitres), Zinco-Reflect (toiture zinc). Solutions ecologiques et performantes.',
};

export default function PeinturesIsolantesPro() {
  const products = [
    {
      name: 'Thermo-Reflect',
      subtitle: 'Toiture & Facade',
      description: 'Peinture isolante thermique pour toitures et facades. Reduit la temperature interieure de 8 a 12°C en ete et les deperditions en hiver.',
      image: 'https://image-flow.fr/uploads/toiture-industrielle-temp2-cdb5600c-0337-4807-aa0e-380557cc4d85.webp',
      color: 'from-orange-500 to-red-600',
      features: [
        'Isolation thermique haute performance',
        'Etancheite garantie 10 ans',
        'Formule ecologique sans solvants',
        'Application sur tous supports',
      ],
      benefits: [
        'Jusqu\'a -30% sur la climatisation',
        'Jusqu\'a -20% sur le chauffage',
        'Durabilite 15-20 ans',
      ],
    },
    {
      name: 'Vitro-Reflect',
      subtitle: 'Vitres & Surfaces vitrees',
      description: 'Film/peinture reflechissante pour vitres. Bloque jusqu\'a 85% de la chaleur solaire tout en conservant la luminosite.',
      image: 'https://image-flow.fr/uploads/vitroreflect-0a5f0933-4b99-4459-8fef-76163244a982.webp',
      color: 'from-blue-400 to-cyan-500',
      features: [
        'Rejet de 85% de la chaleur solaire',
        'Conserve 70% de la lumiere',
        'Anti-UV (99% des UV bloques)',
        'Invisible sur les vitres',
      ],
      benefits: [
        'Confort thermique ete/hiver',
        'Protection du mobilier',
        'Economies de climatisation',
      ],
    },
    {
      name: 'Zinco-Reflect',
      subtitle: 'Toitures Zinc',
      description: 'Traitement specialise pour toitures en zinc, tres repandu a Paris centre. Protege et isole les toitures traditionnelles.',
      image: 'https://image-flow.fr/uploads/nettoyage-toiture-zinc-221574f1-8898-4369-8a81-78477216010c.webp',
      color: 'from-gray-400 to-gray-600',
      features: [
        'Specifique toitures zinc',
        'Protection anti-corrosion',
        'Isolation thermique',
        'Respect du patrimoine',
      ],
      benefits: [
        'Ideal Paris centre et villes historiques',
        'Prolonge la duree de vie du zinc',
        'Compatible batiments classes',
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://image-flow.fr/uploads/isolation-toiture-pro-3cfee5f5-737e-4ffa-9bf7-b4eafc88c5d9.webp"
            alt="Peinture isolante professionnelle"
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
              Peintures Isolantes <span className="text-gea-light-blue">Professionnelles</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Solutions de peintures isolantes haute performance pour toitures, facades et vitres. Reduisez vos couts energetiques avec des produits ecologiques et durables.
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

      {/* Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gea-black text-center mb-4">
            Notre gamme de peintures isolantes
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            3 solutions adaptees a chaque type de surface
          </p>

          <div className="space-y-12">
            {products.map((product, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-[300px] md:h-auto min-h-[400px] ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-6 left-6">
                      <span className={`inline-block px-4 py-2 bg-gradient-to-r ${product.color} text-white text-xl font-bold rounded-lg shadow-lg`}>
                        {product.name}
                      </span>
                      <p className="mt-2 inline-block px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-lg font-medium rounded-md">{product.subtitle}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-8 md:p-12 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <p className="text-gray-700 text-lg mb-6">{product.description}</p>

                    <h4 className="font-bold text-gea-black mb-3">Caracteristiques :</h4>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <svg className="w-5 h-5 text-gea-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <h4 className="font-bold text-gea-black mb-3">Avantages :</h4>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {benefit}
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

      {/* Section Efficacite ThermoReflect */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
              TECHNOLOGIE AVANCEE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gea-black mb-4">
              L&apos;efficacite de la peinture isolante ThermoReflect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une technologie de micro-billes ceramiques qui reflechit jusqu&apos;a 90% du rayonnement solaire
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image infographique */}
            <div className="relative">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl bg-white">
                <Image
                  src="https://image-flow.fr/uploads/image-peinture-thermo-ba173460-29dd-4f56-a927-51760e7cd43f.webp"
                  alt="Efficacite peinture isolante ThermoReflect"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>

            {/* Contenu explicatif */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">☀️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gea-black mb-2">Reflexion solaire</h3>
                    <p className="text-gray-600">Les micro-billes ceramiques reflechissent jusqu&apos;a 90% du rayonnement solaire, empechant la chaleur de penetrer dans le batiment.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">❄️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gea-black mb-2">Isolation thermique</h3>
                    <p className="text-gray-600">En hiver, la peinture cree une barriere thermique qui limite les deperditions de chaleur vers l&apos;exterieur.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gea-black mb-2">Formule ecologique</h3>
                    <p className="text-gray-600">Sans solvants nocifs, a base d&apos;eau. Respectueuse de l&apos;environnement et de la sante des occupants.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-black">15-20</div>
                  <div>
                    <div className="font-bold">annees de durabilite</div>
                    <div className="text-white/80 text-sm">Garantie et performance sur le long terme</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Economies Energetiques */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gea-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold mb-4">
              ECONOMIES D&apos;ENERGIE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Reduisez votre consommation energetique
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              La peinture Thermo-Reflect permet de reduire significativement les couts de climatisation et de chauffage de vos batiments professionnels.
            </p>
          </div>

          {/* Image thermique avec stats */}
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://image-flow.fr/uploads/isolation-toiture-pro2-28d4295d-4f84-4943-bf58-1dd6041d4f17.webp"
                  alt="Application peinture isolante sur toiture professionnelle"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Impact mesure sur vos batiments</h3>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-black text-orange-400 mb-2">-12°C</div>
                  <p className="text-gray-300 text-sm">Temperature interieure en ete</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-black text-green-400 mb-2">-30%</div>
                  <p className="text-gray-300 text-sm">Sur la climatisation</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-black text-blue-400 mb-2">-20%</div>
                  <p className="text-gray-300 text-sm">Sur le chauffage</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-black text-purple-400 mb-2">15 ans</div>
                  <p className="text-gray-300 text-sm">Duree de vie garantie</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-400 mb-1">Retour sur investissement rapide</h4>
                    <p className="text-gray-300 text-sm">Amortissement en 3 a 5 ans grace aux economies d&apos;energie realisees. Eligible aux primes CEE.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Avant/Apres Ravalement Facade */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold mb-2">Ravalement de facade sur corde</h3>
              <p className="text-gray-300">Intervention par cordistes certifies - Avant / Apres</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Avant */}
              <div className="relative group">
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg shadow-lg">
                    AVANT
                  </span>
                </div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://image-flow.fr/uploads/ravalement-facade-immeuble2-64ca90d6-19ff-4586-9d1e-82d65f08bd81.webp"
                    alt="Facade avant ravalement"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Apres */}
              <div className="relative group">
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-4 py-2 bg-green-500 text-white font-bold rounded-lg shadow-lg">
                    APRES
                  </span>
                </div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://image-flow.fr/uploads/ravalement-facade-immeuble3-f8880022-a13b-4476-b46e-40dfc5e3e06f.webp"
                    alt="Facade apres ravalement"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                Intervention realisee par nos cordistes certifies CQP - Sans echafaudage, sans nuisance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maillage villes */}
      <MaillageVilles serviceSlug="cool-roof" serviceName="Peintures isolantes Cool Roof" />

      {/* CTA */}
      <section className="py-20 bg-gea-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pret a ameliorer l&apos;isolation de votre batiment ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour une etude thermique gratuite et un devis personnalise.
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
