import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Gradignan | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par le Groupe Expert Altitude Com. Spécialistes à Grad',
  keywords: 'terrasse bois gradignan, terrasse sur plot gradignan, terrasse bois sur plot gradignan, pose terrasse bois gradignan, terrasse composite gradignan, terrasse bois piscine gradignan',
};

export default function TerrasseBoisGradignanPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Gradignan</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par le Groupe Expert Altitude Com. Spécialistes à Gradignan depuis plus de 15 ans, nous créons des espaces extérieurs durables qui valorisent votre propriété.</p>

        <h2>Nos services de terrasse bois sur plot a Gradignan</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente une solution esthétique et technique pour aménager vos espaces extérieurs avec élégance. Notre méthode exclusive permet une installation précise, garantissant une parfaite planéité et une résistance optimale aux intempéries. Chaque projet est étudié individuellement pour s&apos;adapter parfaitement à la configuration de votre terrain à Gradignan, en privilégiant des matériaux haute qualité comme le bois composite ou le bois exotique. Notre processus inclut un diagnostic précis du terrain, une préparation soignée du support et une pose technique qui assure une durabilité de plus de 20 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre expertise se distingue par : un bureau d&apos;études intégré, une équipe de poseurs certifiés, des matériaux sélectionnés auprès de fournisseurs français, un devis détaillé sous 48h et une garantie décennale. Nous sommes reconnus comme le partenaire référent en aménagement extérieur sur Gradignan et ses environs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon le type de matériau choisi. Un bois composite haut de gamme sera plus onéreux qu&apos;un bois standard, mais offrira une durabilité supérieure. Notre tarification inclut systématiquement la pose, les matériaux et la préparation du terrain.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface, mais en moyenne, comptez 2 à 5 jours pour un projet de 30 à 50 m². Notre équipe optimise chaque intervention pour limiter les délais tout en garantissant une exécution irréprochable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse sur plot, nous recommandons le bois composite (imputrescible), l&apos;ipé (très résistant), le robinier ou le châtaignier. Chaque essence présente des avantages : durabilité, esthétique, résistance aux UV et aux variations climatiques. Notre conseil personnalisé vous aidera à faire le bon choix.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Gradignan ?
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
