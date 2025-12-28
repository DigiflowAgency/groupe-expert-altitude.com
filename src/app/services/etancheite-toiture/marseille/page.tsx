import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Marseille | Groupe Expert Altitude Com',
  description: 'Spécialiste de l&apos;étanchéité toiture terrasse à Marseille, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations et les',
  keywords: 'etancheite toiture marseille, etancheite toit terrasse marseille, etancheite toiture terrasse marseille, reparation etancheite marseille, entreprise etancheite marseille, fuite toiture terrasse marseille',
};

export default function EtancheiteToitureMarseillePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Marseille</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste de l&apos;étanchéité toiture terrasse à Marseille, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations et les dégradations. Nos experts interviennent rapidement sur l&apos;ensemble de la métropole marseillaise pour des solutions durables et sur-mesure.</p>

        <h2>Nos services de étanchéité toiture terrasse a Marseille</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux défis spécifiques des bâtiments marseillais, exposés à des conditions climatiques variées. Notre approche technique commence par un diagnostic précis, utilisant des technologies de détection des moindres faiblesses d&apos;imperméabilité. Nous proposons des solutions adaptées, qu&apos;il s&apos;agisse de rénovation complète ou de réparations ciblées, en privilégiant des membranes haute performance garantissant une protection optimale contre l&apos;eau. Notre équipe maîtrise tous les systèmes d&apos;étanchéité : résines, bitume, élastomère, avec une attention particulière à la compatibilité avec l&apos;architecture méditerranéenne.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Experts certifiés avec 15 ans d&apos;expérience à Marseille
• Diagnostic gratuit et devis détaillé sous 48h
• Techniques innovantes et matériaux haute qualité
• Garantie décennale sur tous nos travaux
• Intervention rapide sur tout le département des Bouches-du-Rhône</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la surface, la complexité et les matériaux choisis. Pour un appartement marseillais moyen de 50m², comptez entre 4 000€ et 12 500€. Un diagnostic précis permettra d&apos;affiner ce budget.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite incluent des traces d&apos;humidité sur les plafonds, des infiltrations, des zones de moisissures, des déformations ou des écoulements anormaux. Notre équipe utilise des caméras thermiques et des tests d&apos;infiltrométrie pour localiser précisément les points faibles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité bien réalisée dure entre 15 et 25 ans. Nos solutions atteignent généralement 20 ans avec un entretien annuel. Les facteurs déterminants sont la qualité des matériaux, la pose et l&apos;exposition aux conditions climatiques marseillaises.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Marseille ?
          Demandez votre devis gratuit.
        </p>
        <a
          href="/contact"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Demander un devis gratuit
        </a>
      </section>
    </main>
  );
}
