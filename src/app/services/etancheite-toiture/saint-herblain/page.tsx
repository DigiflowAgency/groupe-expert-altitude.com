import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Saint-Herblain | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse à Saint-Herblain, offrant des solutions professionnelles con',
  keywords: 'etancheite toiture saint-herblain, etancheite toit terrasse saint-herblain, etancheite toiture terrasse saint-herblain, reparation etancheite saint-herblain, entreprise etancheite saint-herblain, fuite toiture terrasse saint-herblain',
};

export default function EtancheiteToitureSaintHerblainPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Saint-Herblain</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse à Saint-Herblain, offrant des solutions professionnelles contre les infiltrations et les dégradations. Nos experts interviennent rapidement pour protéger votre patrimoine immobilier avec des techniques innovantes.</p>

        <h2>Nos services de étanchéité toiture terrasse a Saint-Herblain</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux exigences techniques les plus strictes, garantissant une protection durable contre les intempéries. À Saint-Herblain, nous utilisons des membranes haute performance et des techniques d&apos;application précises pour éliminer tout risque d&apos;infiltration. Notre processus comprend un diagnostic complet, un traitement sur-mesure et une application méthodique des matériaux d&apos;étanchéité, assurant une imperméabilisation optimale. Chaque intervention est personnalisée selon la structure et les spécificités de votre toiture terrasse, avec une attention particulière portée à la qualité des matériaux et à la précision de la pose.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos atouts sont multiples : expertise technique de plus de 15 ans, équipe certifiée, interventions rapides sur Saint-Herblain, devis gratuit et détaillé, garantie décennale, utilisation des dernières technologies d&apos;étanchéité, respect des normes environnementales. Nous proposons une approche complète, alliant performance technique et conseil personnalisé.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la surface, la complexité et les matériaux utilisés. Pour un projet moyen de 30m², comptez un investissement global entre 1500€ et 4500€. Un diagnostic précis permettra d&apos;établir un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite incluent des traces d&apos;humidité sur les plafonds, des infiltrations lors de fortes pluies, des décolorations, des moisissures ou des déformations. Un professionnel détectera précisément l&apos;origine via des tests d&apos;étanchéité, une inspection thermique et un examen visuel approfondi.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans. La durée dépend de la qualité des matériaux, de la pose et de l&apos;entretien régulier. Des vérifications annuelles et un entretien préventif peuvent significativement prolonger cette durée de vie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Saint-Herblain ?
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
