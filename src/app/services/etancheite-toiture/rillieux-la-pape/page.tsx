import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Rillieux-la-Pape | Groupe Expert Altitude Com',
  description: 'Protégez votre patrimoine immobilier avec l&apos;expertise en étanchéité de toiture terrasse du Groupe Expert Altitude Com, votre partenaire de confiance à Rill',
  keywords: 'etancheite toiture rillieux-la-pape, etancheite toit terrasse rillieux-la-pape, etancheite toiture terrasse rillieux-la-pape, reparation etancheite rillieux-la-pape, entreprise etancheite rillieux-la-pape, fuite toiture terrasse rillieux-la-pape',
};

export default function EtancheiteToitureRillieuxLaPapePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Rillieux-la-Pape</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Protégez votre patrimoine immobilier avec l&apos;expertise en étanchéité de toiture terrasse du Groupe Expert Altitude Com, votre partenaire de confiance à Rillieux-la-Pape. Nous intervenons rapidement pour sécuriser et préserver vos bâtiments contre les infiltrations d&apos;eau.</p>

        <h2>Nos services de étanchéité toiture terrasse a Rillieux-la-Pape</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse représente la solution professionnelle et durable pour garantir l&apos;intégrité de votre habitat. Nos techniciens spécialisés réalisent un diagnostic précis avant d&apos;appliquer des techniques d&apos;étanchéification de dernière génération, adaptées à chaque configuration architecturale. Nous utilisons des membranes synthétiques haute résistance et des systèmes d&apos;imperméabilisation innovants qui offrent une protection optimale contre les agressions climatiques. Notre approche sur-mesure permet de traiter efficacement les points singuliers, les zones sensibles et de prévenir tout risque d&apos;infiltration à Rillieux-la-Pape et ses environs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise technique certifiée avec plus de 15 ans d&apos;expérience
• Interventions rapides et diagnostics gratuits
• Matériaux de haute qualité garantissant une étanchéité durable
• Équipe de professionnels formés aux dernières technologies d&apos;imperméabilisation</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la superficie, la complexité des travaux et les matériaux utilisés. Un diagnostic précalable nous permet de vous proposer un devis détaillé et transparent sans surprises.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes comme les traces d&apos;humidité sur les plafonds, les moisissures, les décollements de peinture ou les infiltrations lors de fortes pluies. Nos experts peuvent réaliser un diagnostic complet avec des techniques de détection thermique et d&apos;imagerie infrarouge.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée peut durer entre 15 et 25 ans, avec un entretien régulier. Nos solutions garantissent une durabilité maximale grâce à des matériaux haut de gamme et une pose professionnelle respectant les normes techniques en vigueur.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Rillieux-la-Pape ?
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
