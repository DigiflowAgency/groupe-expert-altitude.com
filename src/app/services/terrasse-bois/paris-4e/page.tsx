import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Paris 4e | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur à Paris 4e avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des solutions su',
  keywords: 'terrasse bois paris 4e, terrasse sur plot paris 4e, terrasse bois sur plot paris 4e, pose terrasse bois paris 4e, terrasse composite paris 4e, terrasse bois piscine paris 4e',
};

export default function TerrasseBoisParis4ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Paris 4e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur à Paris 4e avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui allient esthétique moderne et performance technique pour sublimer vos terrasses parisiennes.</p>

        <h2>Nos services de terrasse bois sur plot a Paris 4e</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est créer un prolongement harmonieux de votre habitat. Notre expertise technique permet de réaliser des terrasses parfaitement nivelées, avec une pose précise sur plots qui garantit une excellente résistance aux variations climatiques parisiennes. Nous sélectionnons rigoureusement des matériaux haut de gamme comme les bois composites ou les essences naturelles résistantes, offrant une durabilité jusqu&apos;à 25 ans avec un minimum d&apos;entretien. Notre processus inclut un diagnostic précis du terrain, une préparation méticuleuse du support et une pose selon les normes professionnelles, assurant une finition impeccable et une stabilité optimale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos équipes combinent 15 ans d&apos;expérience en aménagement extérieur, une garantie décennale, et un accompagnement personnalisé de A à Z. Nous proposons des devis transparents sans frais cachés, un délai d&apos;intervention rapide de 15 jours et une réalisation qui respecte scrupuleusement vos attentes esthétiques et techniques.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 120€ et 250€ le m², selon les matériaux choisis. Pour un projet moyen de 20m² à Paris 4e, comptez un budget global entre 2 400€ et 5 000€. Nos devis détaillés incluent la fourniture des matériaux, la pose et la préparation du terrain.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité, mais en moyenne, notre équipe réalise un chantier de 20m² en 2 à 4 jours ouvrés. La préparation du terrain peut prendre 1 jour supplémentaire pour assurer un résultat parfait.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour Paris 4e, nous recommandons le bois composite (très résistant), l&apos;ipé (bois tropical ultra-durable) ou le robinier. Ces essences offrent une excellente tenue aux intempéries, une résistance aux UV et nécessitent un entretien minimal, parfait pour les terrasses urbaines.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Paris 4e ?
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
