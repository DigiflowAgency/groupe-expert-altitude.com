import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Panneaux Photovoltaïques pour Particuliers | Financement Disponible',
  description: 'Installation de panneaux solaires pour particuliers de 3kW à 12kW. Financement bancaire disponible. Prix tout compris dès 7 900€. Devis gratuit.',
  keywords: 'panneaux solaires particuliers, panneaux photovoltaïques maison, financement panneaux solaires, installation photovoltaïque résidentiel',
};

export default function ParticuliersPage() {
  const breadcrumbItems = [
    { label: 'Services', href: '/services' },
    { label: 'Énergie & Photovoltaïque', href: '/categories/energie-photovoltaique' },
    { label: 'Particuliers', href: '/panneaux-photovoltaiques/particuliers' },
  ];

  return (
    <>
      <Hero
        title="Panneaux Photovoltaïques pour Particuliers"
        subtitle="☀️ Installations résidentielles avec financement"
        description="Réduisez vos factures d'électricité avec nos installations solaires clés en main. Financement bancaire disponible pour tous les projets."
        ctaPrimary={{
          text: 'Demander un devis gratuit',
          href: '/contact',
        }}
        ctaSecondary={{
          text: 'Nous appeler',
          href: 'tel:0972143065',
        }}
        backgroundImage="https://image-flow.fr/uploads/gea-photovoltaiques-df5d0655-fe4b-47e1-bab0-6ec2363b17ed.webp"
        height="medium"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gea-black mb-6">
              Produisez Votre Propre Électricité
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Avec une installation photovoltaïque sur votre toiture, réduisez jusqu'à 70% de vos factures d'électricité tout en augmentant la valeur de votre bien immobilier. Nos équipes certifiées RGE vous accompagnent de A à Z.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gea-blue/10 rounded-full">
              <svg className="w-6 h-6 text-gea-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gea-blue font-semibold text-lg">
                Financement Bancaire Disponible
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20 bg-gradient-to-br from-gea-blue to-gea-blue/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nos Tarifs Tout Compris
            </h2>
            <p className="text-xl text-white/90 mb-2">
              Prix fourniture et pose - Installation clés en main
            </p>
            <p className="text-lg text-white/80">
              ✓ Étude de rentabilité gratuite • ✓ Démarches administratives incluses • ✓ Garantie 25 ans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* 3 kW */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all hover:scale-105 border border-white/20">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-3">3 kW</div>
                <div className="text-4xl font-bold mb-4">7 900€</div>
                <div className="text-base text-white/90 mb-4">Installation complète</div>
                <div className="text-sm text-white/80 space-y-1">
                  <p>• 6-8 panneaux</p>
                  <p>• Idéal pour 2-3 personnes</p>
                  <p>• Économie ~400€/an</p>
                </div>
              </div>
            </div>

            {/* 4,5 kW */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all hover:scale-105 border border-white/20">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-3">4,5 kW</div>
                <div className="text-4xl font-bold mb-4">9 800€</div>
                <div className="text-base text-white/90 mb-4">Installation complète</div>
                <div className="text-sm text-white/80 space-y-1">
                  <p>• 9-12 panneaux</p>
                  <p>• Idéal pour 3-4 personnes</p>
                  <p>• Économie ~600€/an</p>
                </div>
              </div>
            </div>

            {/* 6 kW - Populaire */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 hover:bg-white/30 transition-all hover:scale-105 border-2 border-white/40 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-gea-blue px-6 py-2 rounded-full text-sm font-bold">
                Le Plus Populaire
              </div>
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-3">6 kW</div>
                <div className="text-4xl font-bold mb-4">12 900€</div>
                <div className="text-base text-white/90 mb-4">Installation complète</div>
                <div className="text-sm text-white/90 space-y-1 font-medium">
                  <p>• 12-16 panneaux</p>
                  <p>• Idéal pour 4-5 personnes</p>
                  <p>• Économie ~800€/an</p>
                </div>
              </div>
            </div>

            {/* 9 kW */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all hover:scale-105 border border-white/20">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-3">9 kW</div>
                <div className="text-4xl font-bold mb-4">14 900€</div>
                <div className="text-base text-white/90 mb-4">Installation complète</div>
                <div className="text-sm text-white/80 space-y-1">
                  <p>• 18-24 panneaux</p>
                  <p>• Idéal pour 5-6 personnes</p>
                  <p>• Économie ~1200€/an</p>
                </div>
              </div>
            </div>

            {/* 12 kW */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all hover:scale-105 border border-white/20 md:col-span-2 lg:col-span-1">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-3">12 kW</div>
                <div className="text-4xl font-bold mb-4">16 900€</div>
                <div className="text-base text-white/90 mb-4">Installation complète</div>
                <div className="text-sm text-white/80 space-y-1">
                  <p>• 24-32 panneaux</p>
                  <p>• Idéal pour grandes maisons</p>
                  <p>• Économie ~1600€/an</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-gea-blue px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl"
            >
              Demander votre devis personnalisé
            </Link>
          </div>
        </div>
      </section>

      {/* Financement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gea-black mb-4">
                💳 Solutions de Financement
              </h2>
              <p className="text-xl text-gray-700">
                Nous travaillons avec la plupart des grandes banques pour faciliter votre projet
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gea-blue/10 to-gea-blue/5 rounded-xl p-8 text-center">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-bold text-gea-black mb-3">
                  Prêt Bancaire Classique
                </h3>
                <p className="text-gray-700">
                  Financement sur 5 à 15 ans avec des taux avantageux pour la transition énergétique
                </p>
              </div>

              <div className="bg-gradient-to-br from-gea-blue/10 to-gea-blue/5 rounded-xl p-8 text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-gea-black mb-3">
                  Éco-PTZ
                </h3>
                <p className="text-gray-700">
                  Prêt à taux zéro jusqu'à 50 000€ pour financer vos travaux de rénovation énergétique
                </p>
              </div>

              <div className="bg-gradient-to-br from-gea-blue/10 to-gea-blue/5 rounded-xl p-8 text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-gea-black mb-3">
                  Autorisations Administratives
                </h3>
                <p className="text-gray-700">
                  GEA s'occupe de toutes les démarches auprès de votre mairie pour vous simplifier la vie
                </p>
              </div>
            </div>

            <div className="mt-12 bg-gea-blue/10 rounded-xl p-8 text-center">
              <p className="text-xl text-gea-black font-semibold mb-4">
                💡 Exemple de financement pour une installation de 6 kW à 12 900€
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-gea-blue mb-1">~120€/mois</div>
                  <div className="text-gray-700">Sur 10 ans</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gea-blue mb-1">~85€/mois</div>
                  <div className="text-gray-700">Sur 15 ans</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">~800€/an</div>
                  <div className="text-gray-700">d'économies d'électricité</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gea-black mb-12 text-center">
              Comment Ça Marche ?
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Étude gratuite', description: 'Analyse de votre toiture et estimation de production' },
                { step: '2', title: 'Devis personnalisé', description: 'Proposition adaptée à vos besoins et votre budget' },
                { step: '3', title: 'Installation', description: 'Pose professionnelle en 1-2 jours par nos cordistes' },
                { step: '4', title: 'Mise en service', description: 'Raccordement et démarches administratives incluses' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-gea-blue text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gea-black mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gea-black mb-6">
              Prêt à Passer au Solaire ?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Contactez-nous pour une étude gratuite et découvrez combien vous pouvez économiser
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gea-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gea-blue/90 transition-all hover:scale-105 shadow-lg shadow-gea-blue/30"
              >
                Demander un devis gratuit
              </Link>
              <a
                href="tel:0972143065"
                className="bg-white text-gea-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all border-2 border-gea-blue flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                09 72 14 30 65
              </a>
            </div>

            {/* Lien vers version Pro */}
            <div className="mt-12 pt-8 border-t">
              <p className="text-gray-600 mb-4">Vous êtes un professionnel ?</p>
              <Link
                href="/panneaux-photovoltaiques/professionnels"
                className="inline-flex items-center gap-2 text-gea-blue hover:text-gea-blue/80 font-semibold text-lg"
              >
                Découvrir nos solutions pour professionnels
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
