import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Aubervilliers | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Aubervilliers et ses environs. Spécialistes depuis ',
  keywords: 'etancheite toiture aubervilliers, etancheite toit terrasse aubervilliers, etancheite toiture terrasse aubervilliers, reparation etancheite aubervilliers, entreprise etancheite aubervilliers, fuite toiture terrasse aubervilliers',
};

export default function EtancheiteToitureAubervilliersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Aubervilliers</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Aubervilliers et ses environs. Spécialistes depuis plus de 15 ans, nous protégeons efficacement vos bâtiments contre les infiltrations d&apos;eau et les dégradations structurelles.</p>

        <h2>Nos services de étanchéité toiture terrasse a Aubervilliers</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux problématiques spécifiques des bâtiments résidentiels et professionnels d&apos;Aubervilliers. Nous intervenons avec des techniques modernes et des matériaux haute performance garantissant une protection durable contre les risques d&apos;infiltration. Notre processus débute par un diagnostic précis utilisant des technologies thermographiques permettant de localiser les points faibles avec une précision de 95%. Nos équipes qualifiées appliquent ensuite des membranes synthétiques ou liquides adaptées à chaque configuration, assurant une imperméabilisation optimale et une résistance aux variations climatiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise locale avec 15 ans d&apos;expérience sur Aubervilliers
• Techniciens certifiés et formés aux dernières normes d&apos;étanchéité
• Diagnostic gratuit et devis transparent sans engagement
• Garantie décennale sur tous nos travaux d&apos;étanchéité</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toiture terrasse varie entre 50€ et 150€ au m², selon la surface, les matériaux et la complexité des travaux. Pour un appartement standard à Aubervilliers, comptez un budget moyen de 3000€ à 6000€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite incluent des taches d&apos;humidité sur les plafonds, des moisissures, des infiltrations lors de pluies, des déformations ou boursoufflures de la membrane. Un professionnel détecte précisément l&apos;origine avec des caméras thermiques et des tests d&apos;infiltrométrie.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans. La durée dépend de la qualité des matériaux, de l&apos;application et de l&apos;entretien régulier. Nos solutions garantissent une protection minimale de 15 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Aubervilliers ?
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
