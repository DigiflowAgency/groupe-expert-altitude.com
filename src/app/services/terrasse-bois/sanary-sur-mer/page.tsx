import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Sanary-sur-Mer | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur à Sanary-sur-Mer avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des soluti',
  keywords: 'terrasse bois sanary-sur-mer, terrasse sur plot sanary-sur-mer, terrasse bois sur plot sanary-sur-mer, pose terrasse bois sanary-sur-mer, terrasse composite sanary-sur-mer, terrasse bois piscine sanary-sur-mer',
};

export default function TerrasseBoisSanarySurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Sanary-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur à Sanary-sur-Mer avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui valorisent votre propriété et créent un environnement outdoor parfaitement intégré.</p>

        <h2>Nos services de terrasse bois sur plot a Sanary-sur-Mer</h2>
        <div className="space-y-4">
          <p>Notre service de terrasse bois sur plot représente la solution idéale pour les propriétaires exigeants de la région de Sanary-sur-Mer. Nous utilisons des matériaux haut de gamme comme le bois composite et le bois exotique, garantissant une résistance optimale aux conditions climatiques méditerranéennes. Notre processus comprend une étude préalable précise, un nivellement expert du terrain, la pose de plots techniques et l&apos;assemblage soigné des lames. Chaque réalisation est pensée pour offrir une stabilité parfaite, une esthétique impeccable et une durabilité de plus de 20 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se démarque par son expertise technique, sa connaissance approfondie des terrains de Sanary-sur-Mer, et son engagement qualité. Nos équipes sont certifiées, nos matériaux sélectionnés avec rigueur, et nous proposons une garantie décennale. Nous réalisons en moyenne 50 terrasses par an, avec un taux de satisfaction client de 98%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 120€ et 250€ au m², selon les matériaux choisis. Pour un projet moyen de 30m², comptez un budget global entre 3 600€ et 7 500€. Nos devis détaillés incluent la pose, les matériaux et la main-d&apos;œuvre.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité, mais en moyenne, notre équipe réalise 15-20 m² par jour. Un projet standard de 30m² sera donc terminé en 2-3 jours ouvrables, avec un résultat clé en main.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons le bois composite ou l&apos;ipé pour les terrasses à Sanary-sur-Mer. Le composite offre une durabilité de 25 ans sans entretien, tandis que l&apos;ipé résiste parfaitement aux embruns et aux fortes chaleurs. Le choix dépendra de votre budget et de vos préférences esthétiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Sanary-sur-Mer ?
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
