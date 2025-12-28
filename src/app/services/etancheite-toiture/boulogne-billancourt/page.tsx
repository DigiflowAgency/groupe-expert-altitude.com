import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Boulogne-Billancourt | Groupe Expert Altitude Com',
  description: 'Spécialiste de l&apos;étanchéité toiture terrasse à Boulogne-Billancourt, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrat',
  keywords: 'etancheite toiture boulogne-billancourt, etancheite toit terrasse boulogne-billancourt, etancheite toiture terrasse boulogne-billancourt, reparation etancheite boulogne-billancourt, entreprise etancheite boulogne-billancourt, fuite toiture terrasse boulogne-billancourt',
};

export default function EtancheiteToitureBoulogneBillancourtPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Boulogne-Billancourt</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste de l&apos;étanchéité toiture terrasse à Boulogne-Billancourt, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations et les dégradations. Nos solutions sur-mesure garantissent une protection durable pour tous vos espaces extérieurs.</p>

        <h2>Nos services de étanchéité toiture terrasse a Boulogne-Billancourt</h2>
        <div className="space-y-4">
          <p>L&apos;étanchéité de toiture terrasse est un enjeu crucial pour préserver l&apos;intégrité de votre bâtiment. Notre expertise technique nous permet d&apos;intervenir sur tous types de surfaces, qu&apos;il s&apos;agisse d&apos;immeubles, de locaux professionnels ou de résidences privées à Boulogne-Billancourt. Nous réalisons un diagnostic précis avant toute intervention, identifiant les points faibles et les zones potentiellement sensibles. Notre processus comprend un traitement par membranes spécialisées, des systèmes d&apos;isolation innovants et des techniques de scellement haute performance. Chaque chantier fait l&apos;objet d&apos;un suivi rigoureux et d&apos;un contrôle qualité garantissant une étanchéité optimale sur le long terme.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Plus de 15 ans d&apos;expérience en étanchéité sur Boulogne-Billancourt
✓ Équipe de techniciens certifiés et formés aux dernières normes
✓ Devis gratuit et précis sous 48h
✓ Interventions rapides et solutions personnalisées
✓ Garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la surface, la complexité technique et les matériaux utilisés. Pour un projet moyen de 30m², comptez un investissement global entre 1500€ et 4500€. Un diagnostic préalable permettra un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations lors de fortes pluies, moisissures, décoloration des peintures ou matériaux. Des tests d&apos;étanchéité professionnels avec caméra thermique peuvent également révéler les zones problématiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans. La durée dépend des matériaux utilisés, de l&apos;exposition aux intempéries et de l&apos;entretien régulier. Des vérifications annuelles sont recommandées pour maintenir une protection optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Boulogne-Billancourt ?
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
