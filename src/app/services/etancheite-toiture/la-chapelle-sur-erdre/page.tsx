import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a La Chapelle-sur-Erdre | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en étanchéité de toiture terrasse sur La Chapelle-sur-Erdre et ses environs. Avec plus de 15 a',
  keywords: 'etancheite toiture la chapelle-sur-erdre, etancheite toit terrasse la chapelle-sur-erdre, etancheite toiture terrasse la chapelle-sur-erdre, reparation etancheite la chapelle-sur-erdre, entreprise etancheite la chapelle-sur-erdre, fuite toiture terrasse la chapelle-sur-erdre',
};

export default function EtancheiteToitureLaChapelleSurErdrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a La Chapelle-sur-Erdre</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en étanchéité de toiture terrasse sur La Chapelle-sur-Erdre et ses environs. Avec plus de 15 ans d&apos;expertise, nous protégeons efficacement vos bâtiments contre les infiltrations d&apos;eau, garantissant la longévité et la performance de vos infrastructures.</p>

        <h2>Nos services de étanchéité toiture terrasse a La Chapelle-sur-Erdre</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse représente une solution technique complète et sur-mesure. Nous intervenons sur tous types de surfaces - résidentielles, commerciales et industrielles - en utilisant des membranes haute performance et des techniques d&apos;application innovantes. Notre processus débute par un diagnostic précis, incluant une analyse thermographique permettant de détecter les moindres faiblesses structurelles. Nos techniciens qualifiés réalisent ensuite un traitement adapté, qu&apos;il s&apos;agisse de réparation ponctuelle ou de réfection totale, en privilégiant des matériaux écologiques et durables.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale sur La Chapelle-sur-Erdre depuis 2008
✓ Équipe de 12 techniciens certifiés
✓ Garantie décennale sur tous nos travaux
✓ Devis gratuit et diagnostic personnalisé
✓ Techniques respectueuses de l&apos;environnement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toiture terrasse varie entre 50€ et 150€ au m², selon la superficie, le type de matériau et la complexité des travaux. Pour une surface moyenne de 50m², comptez un investissement global entre 2 500€ et 7 500€. Un diagnostic précalable permet d&apos;affiner ce budget.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations, moisissures, décoloration des peintures. Utilisez un test à l&apos;eau ou une caméra thermique. Un professionnel peut réaliser un diagnostic complet avec des outils spécialisés, identifiant précisément l&apos;origine et l&apos;étendue des désordres.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de vie d&apos;une étanchéité de toiture terrasse varie entre 15 et 30 ans, selon la qualité des matériaux et de la pose. Une membrane en PVC peut durer 20 ans, tandis qu&apos;un système bitumineux atteint facilement 25 ans avec un entretien régulier. Des visites annuelles permettent de prolonger significativement cette durée de vie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a La Chapelle-sur-Erdre ?
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
