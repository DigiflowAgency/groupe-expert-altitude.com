import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Ivry-sur-Seine | Groupe Expert Altitude Com',
  description: 'Spécialiste de l&apos;étanchéité de toiture terrasse à Ivry-sur-Seine, Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations. ',
  keywords: 'etancheite toiture ivry-sur-seine, etancheite toit terrasse ivry-sur-seine, etancheite toiture terrasse ivry-sur-seine, reparation etancheite ivry-sur-seine, entreprise etancheite ivry-sur-seine, fuite toiture terrasse ivry-sur-seine',
};

export default function EtancheiteToitureIvrySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Ivry-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste de l&apos;étanchéité de toiture terrasse à Ivry-sur-Seine, Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations. Nos solutions techniques garantissent une protection durable et efficace pour les bâtiments résidentiels et professionnels de la région parisienne.</p>

        <h2>Nos services de étanchéité toiture terrasse a Ivry-sur-Seine</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux défis spécifiques des constructions modernes à Ivry-sur-Seine. Nous intervenons avec des techniques professionnelles utilisant des membranes synthétiques haute résistance et des systèmes d&apos;imperméabilisation innovants. Notre diagnostic précis nous permet de traiter chaque problématique : fissures, points de jonction, zones sensibles. Nos équipes réalisent un travail sur-mesure, en analysant la structure existante et en proposant des solutions adaptées à chaque configuration architecturale, avec une garantie décennale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique certifiée avec plus de 15 ans d&apos;expérience
- Intervention rapide sur Ivry-sur-Seine et communes limitrophes
- Techniciens formés aux dernières normes d&apos;étanchéité
- Devis gratuit et transparents sans engagement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la complexité des travaux. Pour un appartement standard à Ivry-sur-Seine, comptez un budget moyen de 3 500€ à 6 000€ pour une rénovation complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite incluent des traces d&apos;humidité sur les plafonds, des infiltrations lors de pluies, des zones de décoloration, des moisissures suspectes. Un test d&apos;étanchéité professionnel permet de localiser précisément les points faibles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans, avec un entretien régulier. Nos solutions intègrent des garanties décennales et utilisent des matériaux haute performance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Ivry-sur-Seine ?
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
