import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Saint-Sébastien-sur-Loire | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur-mesure par le Groupe Expert Altitude Com. Nos spécialistes in',
  keywords: 'terrasse bois saint-sébastien-sur-loire, terrasse sur plot saint-sébastien-sur-loire, terrasse bois sur plot saint-sébastien-sur-loire, pose terrasse bois saint-sébastien-sur-loire, terrasse composite saint-sébastien-sur-loire, terrasse bois piscine saint-sébastien-sur-loire',
};

export default function TerrasseBoisSaintSebastienSurLoirePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Saint-Sébastien-sur-Loire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur-mesure par le Groupe Expert Altitude Com. Nos spécialistes installent des terrasses haut de gamme à Saint-Sébastien-sur-Loire, en garantissant un aménagement élégant et durable qui sublimera votre espace extérieur.</p>

        <h2>Nos services de terrasse bois sur plot a Saint-Sébastien-sur-Loire</h2>
        <div className="space-y-4">
          <p>Notre service de terrasse bois sur plot représente la solution idéale pour les propriétaires exigeants de Saint-Sébastien-sur-Loire recherchant un aménagement extérieur de qualité. Nous proposons une installation précise et professionnelle, utilisant des matériaux résistants comme le bois composite ou le bois exotique. Notre processus débute par un diagnostic technique précis de votre terrain, permettant une pose optimale sur plots qui assure une parfaite horizontalité et une excellente durabilité. Chaque projet est personnalisé, avec une attention méticuleuse aux détails techniques : choix des matériaux, orientation, drainage et intégration harmonieuse à votre environnement. Nos équipes maîtrisent les techniques de pose les plus récentes, garantissant une terrasse esthétique et fonctionnelle qui résistera aux conditions climatiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos 15 ans d&apos;expertise en aménagement extérieur nous permettent de proposer des solutions sur-mesure. Nous sommes certifiés RGE, garantissant une qualité de réalisation irréprochable. Notre bureau d&apos;études intégré assure un suivi personnalisé de chaque projet. Nos devis sont précis et transparents, sans frais cachés.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Un bois composite haut de gamme sera plus onéreux qu&apos;un bois traditionnel. Pour un projet de 20m², comptez un budget global entre 1600€ et 5000€, installation comprise. Nos experts peuvent réaliser un devis personnalisé gratuit à Saint-Sébastien-sur-Loire.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;installation d&apos;une terrasse bois sur plot dépend de la surface et de la complexité du terrain. Pour une surface moyenne de 20m², notre équipe réalise le chantier en 2-3 jours ouvrables. La préparation du terrain, la pose des plots et des lames représentent les étapes principales. Un planning précis vous sera communiqué lors du devis.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse sur plot, nous recommandons trois types de bois : le bois composite (très résistant, peu d&apos;entretien), l&apos;ipé (bois exotique ultra-durable) et le châtaignier (essence locale). Le choix dépendra de votre budget, de l&apos;exposition et de l&apos;usage prévu. Notre conseil : privilégiez toujours la qualité et la durabilité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Saint-Sébastien-sur-Loire ?
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
