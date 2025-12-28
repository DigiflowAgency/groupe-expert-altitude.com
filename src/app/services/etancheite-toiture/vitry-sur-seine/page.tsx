import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Vitry-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste en étanchéité de toiture terrasse à Vitry-sur-Seine, protège efficacement vos bâtiments contre les infiltrati',
  keywords: 'etancheite toiture vitry-sur-seine, etancheite toit terrasse vitry-sur-seine, etancheite toiture terrasse vitry-sur-seine, reparation etancheite vitry-sur-seine, entreprise etancheite vitry-sur-seine, fuite toiture terrasse vitry-sur-seine',
};

export default function EtancheiteToitureVitrySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Vitry-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste en étanchéité de toiture terrasse à Vitry-sur-Seine, protège efficacement vos bâtiments contre les infiltrations d&apos;eau. Avec plus de 15 ans d&apos;expertise, nous garantissons des solutions durables et sur-mesure pour tous vos projets d&apos;étanchéité.</p>

        <h2>Nos services de étanchéité toiture terrasse a Vitry-sur-Seine</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux défis spécifiques de l&apos;habitat et du tertiaire à Vitry-sur-Seine. Nous intervenons sur tous types de surfaces, en utilisant des techniques et matériaux de dernière génération. Notre processus comprend un diagnostic précis, un traitement personnalisé et une application rigoureuse des membranes d&apos;étanchéité. Nos techniciens qualifiés réalisent un travail minutieux, en évaluant chaque point faible potentiel et en assurant une protection optimale contre les infiltrations et les dégradations climatiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Experts certifiés avec plus de 500 chantiers réalisés
✓ Diagnostic gratuit et devis détaillé sous 48h
✓ Interventions rapides sur Vitry-sur-Seine et communes limitrophes
✓ Garantie décennale sur tous nos travaux d&apos;étanchéité</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la surface, la complexité et les matériaux utilisés. Pour un projet moyen de 50m², comptez un investissement global entre 2 500€ et 7 500€, incluant diagnostic, matériaux et main-d&apos;œuvre.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations, moisissures, décoloration des peintures ou matériaux. Nous recommandons un test à l&apos;eau et une inspection thermographique pour localiser précisément les zones problématiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans. Notre garantie décennale et l&apos;utilisation de matériaux haut de gamme assurent une protection durable de votre toiture terrasse contre les agressions climatiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Vitry-sur-Seine ?
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
