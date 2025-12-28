import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Paris 5e | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur à Paris 5e avec une terrasse bois sur plot élégante et durable. Expert Altitude Com vous propose des solutions sur-mesur',
  keywords: 'terrasse bois paris 5e, terrasse sur plot paris 5e, terrasse bois sur plot paris 5e, pose terrasse bois paris 5e, terrasse composite paris 5e, terrasse bois piscine paris 5e',
};

export default function TerrasseBoisParis5ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Paris 5e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur à Paris 5e avec une terrasse bois sur plot élégante et durable. Expert Altitude Com vous propose des solutions sur-mesure qui valorisent votre propriété et créent un environnement outdoor sophistiqué.</p>

        <h2>Nos services de terrasse bois sur plot a Paris 5e</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est une véritable transformation de votre espace extérieur. Notre expertise technique permet de créer des surfaces parfaitement nivelées, résistantes aux variations climatiques parisiennes. Nous sélectionnons rigoureusement des matériaux haut de gamme comme les bois composites ou le bois exotique, garantissant une durabilité de 20 à 30 ans. Notre processus inclut une étude préalable du terrain, un nivellement précis, et une pose avec plots réglables permettant une ventilation optimale et une protection contre l&apos;humidité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son savoir-faire unique : plus de 15 ans d&apos;expérience à Paris, une équipe de 12 professionnels certifiés, des matériaux écologiques sélectionnés, et un devis personnalisé sous 48h. Nous proposons une garantie décennale et un suivi technique complet après installation.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Pour un projet moyen de 20m² à Paris 5e, comptez un investissement global entre 1600€ et 5000€, installation comprise. Les bois composites restent la solution la plus économique à long terme.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité. Pour un projet standard de 15-20m² dans Paris 5e, notre équipe réalise l&apos;installation en 2-3 jours ouvrés, avec une préparation du terrain et un nivellement précis inclus.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les meilleurs bois pour terrasse sont le bois composite (très résistant), l&apos;ipé (bois exotique ultra-durable), et le robinier (bois local écologique). Nous recommandons le composite pour sa facilité d&apos;entretien et sa longévité, particulièrement adapté à l&apos;environnement parisien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Paris 5e ?
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
