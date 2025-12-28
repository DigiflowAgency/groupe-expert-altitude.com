import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Saint-Maur-des-Fossés | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse à Saint-Maur-des-Fossés et ses environs. Spécialistes depuis',
  keywords: 'etancheite toiture saint-maur-des-fossés, etancheite toit terrasse saint-maur-des-fossés, etancheite toiture terrasse saint-maur-des-fossés, reparation etancheite saint-maur-des-fossés, entreprise etancheite saint-maur-des-fossés, fuite toiture terrasse saint-maur-des-fossés',
};

export default function EtancheiteToitureSaintMaurDesFossesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Saint-Maur-des-Fossés</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse à Saint-Maur-des-Fossés et ses environs. Spécialistes depuis plus de 15 ans, nous protégeons efficacement vos bâtiments contre les infiltrations grâce à des solutions techniques sur-mesure.</p>

        <h2>Nos services de étanchéité toiture terrasse a Saint-Maur-des-Fossés</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité toiture terrasse répond aux problématiques spécifiques de chaque bâtiment à Saint-Maur-des-Fossés. Nous intervenons sur tous types de surfaces, qu&apos;il s&apos;agisse d&apos;immeubles, de locaux commerciaux ou de résidences privées. Notre approche comprend un diagnostic précis, utilisant des technologies de détection thermique permettant d&apos;identifier les zones fragiles avec une précision de 95%. Nous proposons des solutions adaptées, qu&apos;il s&apos;agisse de réfection complète ou de réparations ciblées, en utilisant des membranes d&apos;étanchéité dernière génération garantissant une protection optimale contre les intempéries.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Experts certifiés avec plus de 15 ans d&apos;expérience
✓ Diagnostic technique gratuit et sans engagement
✓ Interventions rapides sur Saint-Maur-des-Fossés et communes limitrophes
✓ Garantie décennale sur nos travaux d&apos;étanchéité
✓ Techniques innovantes et matériaux haute performance</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ par m², selon la complexité des travaux, l&apos;état actuel de la toiture et les matériaux utilisés. Un diagnostic précis permet d&apos;établir un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations lors de fortes pluies, moisissures, décoloration des peintures murales. Un professionnel utilisera une caméra thermique pour localiser précisément l&apos;origine de la fuite.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée peut durer entre 15 et 25 ans, avec un entretien régulier. Les facteurs déterminants sont la qualité des matériaux, la pose et les conditions climatiques. Un contrôle annuel est recommandé pour maintenir sa longévité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Saint-Maur-des-Fossés ?
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
