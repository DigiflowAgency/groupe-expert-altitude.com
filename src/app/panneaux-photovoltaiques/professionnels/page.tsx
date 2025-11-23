import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Panneaux Photovoltaïques pour Professionnels | Solutions Sur Mesure',
  description: 'Installation de panneaux solaires pour professionnels et entreprises. Fermes solaires, toitures industrielles, hangars agricoles. Solutions sur mesure sans limites.',
  keywords: 'panneaux solaires professionnels, ferme solaire, installation photovoltaïque entreprise, énergie solaire industrie, panneaux photovoltaïques agricoles',
};

export default function ProfessionnelsPage() {
  const breadcrumbItems = [
    { label: 'Services', href: '/services' },
    { label: 'Énergie & Photovoltaïque', href: '/categories/energie-photovoltaique' },
    { label: 'Professionnels', href: '/panneaux-photovoltaiques/professionnels' },
  ];

  return (
    <>
      <Hero
        title="Panneaux Photovoltaïques pour Professionnels"
        subtitle="🏭 Solutions sur mesure sans limites"
        description="De la toiture industrielle aux fermes solaires, nos équipes réalisent vos projets photovoltaïques professionnels de toutes envergures."
        ctaPrimary={{
          text: 'Demander une étude de projet',
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
              Valorisez Votre Surface de Toiture
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Transformez vos toitures industrielles, hangars agricoles ou terrains en source de revenus. Avec nos installations photovoltaïques professionnelles, réduisez drastiquement vos charges énergétiques ou générez des revenus via la revente d'électricité.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gea-blue/10 rounded-full">
              <span className="text-gea-blue font-semibold text-lg">
                ⚡ Pas de limites de puissance • Projets de toutes envergures
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Types de projets */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gea-black mb-12 text-center">
            Nos Solutions pour Professionnels
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Fermes Solaires */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group">
              <div className="h-56 bg-gradient-to-br from-gea-blue to-gea-blue/80 flex items-center justify-center">
                <span className="text-8xl">☀️</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gea-black mb-3">Fermes Solaires</h3>
                <p className="text-gray-700 mb-4">
                  Installation de centrales photovoltaïques au sol de plusieurs MW. Production d'énergie à grande échelle pour revente totale ou autoconsommation collective.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gea-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Étude de rentabilité complète</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gea-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Raccordement réseau inclus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gea-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Maintenance et monitoring</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Toitures Industrielles */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group">
              <div className="h-56 bg-gradient-to-br from-gea-blue to-gea-blue/80 flex items-center justify-center">
                <span className="text-8xl">🏭</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gea-black mb-3">Toitures Industrielles</h3>
                <p className="text-gray-700 mb-4">
                  Équipement de vos bâtiments industriels, entrepôts et centres logistiques. Maximisez votre autoconsommation et réduisez vos factures énergétiques.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gea-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Diagnostic structure gratuit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gea-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Installation sans interruption d'activité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gea-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Optimisation de l'autoconsommation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Hangars Agricoles */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group">
              <div className="h-56 bg-gradient-to-br from-gea-blue to-gea-blue/80 flex items-center justify-center">
                <span className="text-8xl">🚜</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gea-black mb-3">Hangars Agricoles</h3>
                <p className="text-gray-700 mb-4">
                  Équipement de vos hangars, stabulations et bâtiments agricoles. Générez un complément de revenus tout en participant à la transition énergétique.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gea-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Adaptation à tous types de toiture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gea-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Accompagnement démarches MSA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gea-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Contrat d'achat EDF OA</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Ombrières de Parking */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group">
              <div className="h-56 bg-gradient-to-br from-gea-blue to-gea-blue/80 flex items-center justify-center">
                <span className="text-8xl">🅿️</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gea-black mb-3">Ombrières de Parking</h3>
                <p className="text-gray-700 mb-4">
                  Valorisez vos parkings d'entreprise avec des ombrières photovoltaïques. Protection des véhicules et production d'énergie verte.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gea-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Conformité loi Climat & Résilience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gea-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Préparation pour bornes de recharge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gea-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Design sur mesure</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Centrales Solaires Flottantes */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group">
              <div className="h-56 bg-gradient-to-br from-gea-blue to-gea-blue/80 flex items-center justify-center">
                <span className="text-8xl">🌊</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gea-black mb-3">Centrales Flottantes</h3>
                <p className="text-gray-700 mb-4">
                  Installation de panneaux photovoltaïques sur plans d'eau, bassins d'irrigation ou lacs artificiels. Solution innovante et écologique.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gea-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Refroidissement naturel optimal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gea-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Réduction évaporation de l'eau</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gea-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Étude environnementale incluse</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Projets Spéciaux */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group">
              <div className="h-56 bg-gradient-to-br from-gea-blue to-gea-blue/80 flex items-center justify-center">
                <span className="text-8xl">🔧</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gea-black mb-3">Projets Sur Mesure</h3>
                <p className="text-gray-700 mb-4">
                  Votre projet est unique ? Nos équipes conçoivent des solutions photovoltaïques adaptées à vos contraintes techniques et budgétaires.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gea-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Bureau d'études interne</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gea-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Solutions innovantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gea-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Accompagnement de A à Z</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gea-black mb-12 text-center">
            Pourquoi Choisir Nos Solutions Professionnelles ?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gea-black mb-2">Pas de Limites</h3>
              <p className="text-gray-700">
                De 10 kW à plusieurs MW, nous dimensionnons votre installation selon vos besoins
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gea-black mb-2">Expertise Reconnue</h3>
              <p className="text-gray-700">
                +15 ans d'expérience en travaux de toiture et installations industrielles
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gea-black mb-2">ROI Optimisé</h3>
              <p className="text-gray-700">
                Étude de rentabilité détaillée et optimisation de votre retour sur investissement
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gea-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gea-black mb-2">Clés en Main</h3>
              <p className="text-gray-700">
                De l'étude au raccordement, nous gérons toutes les démarches administratives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gea-black mb-12 text-center">
              Notre Méthodologie de Projet
            </h2>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: '1', title: 'Audit Technique', description: 'Analyse de votre site et de vos besoins énergétiques' },
                { step: '2', title: 'Étude de Faisabilité', description: 'Dimensionnement et étude de rentabilité financière' },
                { step: '3', title: 'Ingénierie', description: 'Conception détaillée et démarches administratives' },
                { step: '4', title: 'Installation', description: 'Réalisation par nos équipes certifiées RGE' },
                { step: '5', title: 'Exploitation', description: 'Mise en service, maintenance et monitoring' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-gea-blue text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gea-black mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-gea-blue to-gea-blue/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Vous Avez Un Projet Photovoltaïque ?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contactez nos experts pour une étude gratuite et personnalisée de votre projet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-gea-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
              >
                Demander une étude de projet
              </Link>
              <a
                href="tel:0972143065"
                className="bg-gea-blue/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gea-blue/30 transition-all border-2 border-white/50 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                09 72 14 30 65
              </a>
            </div>

            {/* Lien vers version Particuliers */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-white/90 mb-4">Vous êtes un particulier ?</p>
              <Link
                href="/panneaux-photovoltaiques/particuliers"
                className="inline-flex items-center gap-2 text-white hover:text-white/80 font-semibold text-lg"
              >
                Découvrir nos tarifs pour particuliers
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
