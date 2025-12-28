import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a La Teste-de-Buch | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot élégante et durable, parfaitement adaptée aux environnements résidentiels de La Teste-de-Buch. ',
  keywords: 'terrasse bois la teste-de-buch, terrasse sur plot la teste-de-buch, terrasse bois sur plot la teste-de-buch, pose terrasse bois la teste-de-buch, terrasse composite la teste-de-buch, terrasse bois piscine la teste-de-buch',
};

export default function TerrasseBoisLaTesteDeBuchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a La Teste-de-Buch</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot élégante et durable, parfaitement adaptée aux environnements résidentiels de La Teste-de-Buch. Notre expertise Groupe Expert Altitude Com vous garantit une réalisation sur mesure qui valorisera immédiatement votre propriété.</p>

        <h2>Nos services de terrasse bois sur plot a La Teste-de-Buch</h2>
        <div className="space-y-4">
          <p>Une terrasse bois sur plot représente la solution idéale pour aménager harmonieusement vos espaces extérieurs à La Teste-de-Buch. Notre technique innovante permet une pose précise et stable, en s&apos;adaptant parfaitement aux légères différences de niveau du terrain. Chaque projet est personnalisé, en privilégiant des matériaux haute qualité comme le bois composite ou le bois exotique, résistants aux conditions climatiques locales. Notre méthode de pose sur plots offre une isolation thermique optimale et facilite l&apos;entretien, tout en garantissant une esthétique contemporaine et naturelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nous nous démarquons par notre expertise technique pointue, notre connaissance approfondie des matériaux et notre engagement qualité. Nos équipes sont certifiées et formées aux dernières techniques de pose. Nous proposons un devis précis sous 48h, un délai d&apos;intervention rapide et une garantie décennale sur nos réalisations. Notre approche sur-mesure et notre sens du détail font la différence.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon le type de matériau choisi. Pour un bois composite haut de gamme à La Teste-de-Buch, comptez environ 150€/m². Ce tarif inclut la fourniture des matériaux et la pose professionnelle, avec une durabilité garantie de 20 à 25 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface, mais en moyenne, notre équipe réalise 20 à 30 m² par jour. Pour une terrasse de 50 m², prévoyez 2 à 3 jours de travaux, incluant la préparation du terrain et la pose précise des plots et des lames.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse à La Teste-de-Buch, nous recommandons le bois composite (imputrescible), l&apos;ipé (très résistant) ou le red cedar (naturellement traité). Le choix dépend de votre budget, de l&apos;exposition et de l&apos;usage prévu. Le bois composite reste le plus pratique, avec 95% de nos clients satisfaits de cette option.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a La Teste-de-Buch ?
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
