import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Paris | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en étanchéité de toiture terrasse à Paris. Spécialistes reconnus dans la région parisienne, no',
  keywords: 'etancheite toiture paris, etancheite toit terrasse paris, etancheite toiture terrasse paris, reparation etancheite paris, entreprise etancheite paris, fuite toiture terrasse paris',
};

export default function EtancheiteToitureParisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Paris</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en étanchéité de toiture terrasse à Paris. Spécialistes reconnus dans la région parisienne, nous protégeons vos bâtiments contre les infiltrations avec une expertise technique irréprochable.</p>

        <h2>Nos services de étanchéité toiture terrasse a Paris</h2>
        <div className="space-y-4">
          <p>L&apos;étanchéité de toiture terrasse est un élément crucial pour préserver l&apos;intégrité structurelle de votre bâtiment. Notre processus complet commence par un diagnostic précis, réalisé par nos techniciens certifiés, qui identifient chaque point faible potentiel. Nous utilisons uniquement des matériaux haute performance comme les membranes synthétiques EPDM et les résines polyuréthanes, garantissant une protection optimale contre l&apos;eau et les intempéries parisiennes. Notre intervention comprend le traitement des points singuliers, la réfection complète ou partielle, et un contrôle qualité rigoureux pour assurer une étanchéité durable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos avantages clés : 15 ans d&apos;expérience en étanchéité, équipe de 12 techniciens spécialisés, garantie décennale, intervention rapide sur Paris et sa région, devis gratuit sous 48h, et des solutions personnalisées adaptées à chaque configuration de toiture terrasse.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la superficie, l&apos;état actuel et la technique utilisée. Pour un appartement parisien moyen de 50m², comptez un budget entre 4 000€ et 12 500€. Un diagnostic précis permettra d&apos;affiner ce chiffrage.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations lors de fortes pluies, décoloration des murs, moisissures, ou zones de stagnation d&apos;eau. Un professionnel utilisera des méthodes comme la thermographie infrarouge ou des tests d&apos;étanchéité pour localiser précisément l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée a une durée de vie moyenne de 15 à 25 ans. Nos solutions haut de gamme, adaptées au climat parisien, peuvent atteindre 30 ans avec un entretien régulier. Un contrôle annuel et des interventions préventives permettent de maximiser cette longévité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Paris ?
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
