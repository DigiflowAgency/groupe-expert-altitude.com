import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Bègles | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur avec une terrasse bois sur plot élégante et durable, conçue spécifiquement pour les propriétés de Bègles. Notre expertis',
  keywords: 'terrasse bois bègles, terrasse sur plot bègles, terrasse bois sur plot bègles, pose terrasse bois bègles, terrasse composite bègles, terrasse bois piscine bègles',
};

export default function TerrasseBoisBeglesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Bègles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur avec une terrasse bois sur plot élégante et durable, conçue spécifiquement pour les propriétés de Bègles. Notre expertise garantit une réalisation impeccable qui valorisera instantanément votre jardin ou votre terrasse.</p>

        <h2>Nos services de terrasse bois sur plot a Bègles</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente la solution idéale pour créer un espace extérieur harmonieux et fonctionnel. Notre technique permet une installation précise, avec un nivellement parfait grâce aux plots réglables, offrant une stabilité optimale. Nous travaillons principalement avec des matériaux nobles comme le bois composite et le bois exotique, sélectionnés pour leur résistance aux intempéries et à l&apos;usure. Notre processus comprend une étude préalable du terrain, une préparation minutieuse du support, et une pose selon les normes techniques les plus strictes, garantissant une finition impeccable et une durabilité de plus de 20 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son savoir-faire local à Bègles. Nos équipes sont certifiées, notre devis est transparent, et nous proposons une garantie décennale. Nous maîtrisons parfaitement les techniques de pose sur plot, avec un taux de satisfaction client de 98%. Chaque réalisation est personnalisée et pensée en fonction de vos besoins spécifiques.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon le type de matériau choisi. Un bois composite haut de gamme sera plus onéreux qu&apos;un pin traité, mais offrira une durabilité supérieure. Notre tarification inclut la pose, les matériaux et le nivellement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface, mais en moyenne, comptez 2 à 5 jours pour un chantier de 30 à 50 m². Notre équipe optimise chaque intervention pour une réalisation rapide et précise, avec un planning respecté à 100%.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse sur plot à Bègles, nous recommandons le bois composite (imputrescible), l&apos;ipé (très résistant), ou le pin traité autoclave. Chaque essence présente des avantages : durabilité, esthétique, budget. Notre conseil personnalisé vous aidera à faire le bon choix.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Bègles ?
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
