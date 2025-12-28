import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Aubagne | Groupe Expert Altitude Com',
  description: 'Spécialiste de l&apos;étanchéité de toiture terrasse à Aubagne, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations et le',
  keywords: 'etancheite toiture aubagne, etancheite toit terrasse aubagne, etancheite toiture terrasse aubagne, reparation etancheite aubagne, entreprise etancheite aubagne, fuite toiture terrasse aubagne',
};

export default function EtancheiteToitureAubagnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Aubagne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste de l&apos;étanchéité de toiture terrasse à Aubagne, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations et les dégradations. Nous intervenons rapidement sur l&apos;ensemble du territoire aubagnais pour des solutions durables et sur-mesure.</p>

        <h2>Nos services de étanchéité toiture terrasse a Aubagne</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux problématiques spécifiques des bâtiments résidentiels et professionnels. Notre expertise technique nous permet de diagnostiquer précisément les zones de fragilité et d&apos;appliquer des solutions adaptées. Nous utilisons des membranes synthétiques haute performance garantissant une protection optimale contre l&apos;humidité et les intempéries. Notre processus comprend un diagnostic complet, un nettoyage approfondi de la surface, la préparation du support et l&apos;application de systèmes d&apos;étanchéité certifiés. Chaque intervention est personnalisée pour assurer une protection maximale et durable de votre toiture terrasse.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Le Groupe Expert Altitude Com se distingue par son expertise technique pointue, sa réactivité et son engagement qualité. Nos techniciens sont certifiés et formés aux dernières normes d&apos;étanchéité. Nous proposons une garantie décennale sur nos interventions. Notre connaissance approfondie du climat et des spécificités architecturales d&apos;Aubagne nous permet d&apos;offrir des solutions sur-mesure. Nous intervenons sous 48h et réalisons un diagnostic précis avant toute intervention.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la superficie, la complexité des travaux et les matériaux utilisés. Pour une terrasse moyenne de 30m², comptez un budget entre 1500€ et 4500€. Un diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis adapté à votre situation.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, recherchez des signes comme des traces d&apos;humidité sur les plafonds, des infiltrations, des moisissures ou des déformations. Des zones de stagnation d&apos;eau, des fissures ou des décollements d&apos;étanchéité sont également des signaux d&apos;alerte. Un professionnel peut réaliser un diagnostic précis avec des tests d&apos;étanchéité et une inspection thermographique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de vie d&apos;une étanchéité de toiture terrasse varie entre 10 et 25 ans selon les matériaux utilisés et l&apos;entretien réalisé. Une membrane en PVC ou en élastomère bien posée et régulièrement entretenue peut atteindre 20-25 ans. Un contrôle annuel et des interventions préventives permettent de maximiser cette durée de vie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Aubagne ?
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
