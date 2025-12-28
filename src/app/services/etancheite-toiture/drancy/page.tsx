import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Drancy | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse à Drancy et dans toute la région parisienne. Spécialistes',
  keywords: 'etancheite toiture drancy, etancheite toit terrasse drancy, etancheite toiture terrasse drancy, reparation etancheite drancy, entreprise etancheite drancy, fuite toiture terrasse drancy',
};

export default function EtancheiteToitureDrancyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Drancy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse à Drancy et dans toute la région parisienne. Spécialistes reconnus, nous intervenons rapidement pour protéger votre patrimoine immobilier contre les infiltrations et les dégradations.</p>

        <h2>Nos services de étanchéité toiture terrasse a Drancy</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux problématiques spécifiques des bâtiments résidentiels et professionnels de Drancy. Nous utilisons des techniques modernes et des matériaux haute performance garantissant une protection durable contre l&apos;humidité. Notre processus comprend un diagnostic précis par caméra thermique, un nettoyage approfondi de la surface, l&apos;application de membranes synthétiques ou liquides adaptées, et une finition soignée. Nos interventions permettent de prévenir les risques de fuites, d&apos;améliorer l&apos;isolation thermique et de prolonger significativement la durée de vie de votre toiture.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Plus de 15 ans d&apos;expertise en étanchéité sur Drancy et ses environs
✓ Équipe technique certifiée et formée aux dernières normes
✓ Devis gratuit et détaillé sous 48h
✓ Garantie décennale sur nos travaux
✓ Interventions rapides et adaptées à chaque configuration de toiture</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toiture terrasse varie entre 50€ et 150€ au m² selon la superficie, l&apos;état actuel et les matériaux choisis. Pour un projet moyen de 50m², comptez un investissement global entre 2 500€ et 7 500€. Un diagnostic précis permettra d&apos;établir un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes suivants : traces d&apos;humidité sur les plafonds, moisissures, décoloration des peintures, infiltrations lors de fortes pluies. Un professionnel utilisera une caméra thermique et un test d&apos;étanchéité pour localiser précisément l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans. La durée dépend des matériaux utilisés, de la qualité de la pose, de l&apos;exposition aux intempéries et de l&apos;entretien régulier. Un contrôle annuel est recommandé pour maintenir sa performance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Drancy ?
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
