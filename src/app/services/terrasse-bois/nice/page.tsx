import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Nice | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Nice avec une terrasse bois sur plot parfaitement intégrée, créant un espace de vie élégant et durable. Groupe Expert Altitud',
  keywords: 'terrasse bois nice, terrasse sur plot nice, terrasse bois sur plot nice, pose terrasse bois nice, terrasse composite nice, terrasse bois piscine nice',
};

export default function TerrasseBoisNicePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Nice</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Nice avec une terrasse bois sur plot parfaitement intégrée, créant un espace de vie élégant et durable. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui valorisent votre propriété tout en respectant l&apos;environnement méditerranéen.</p>

        <h2>Nos services de terrasse bois sur plot a Nice</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente une solution technique et esthétique idéale pour aménager vos espaces extérieurs à Nice. Notre expertise permet de créer des surfaces parfaitement planes, avec une isolation optimale et une durabilité remarquable. Nous travaillons principalement avec des matériaux composites et bois nobles, garantissant une résistance aux conditions climatiques méditerranéennes. Notre processus comprend un diagnostic précis du terrain, une préparation minutieuse de la surface, la pose de plots techniques et l&apos;assemblage soigné des lames. Chaque réalisation est pensée pour offrir un résultat esthétique et fonctionnel, s&apos;adaptant parfaitement à votre environnement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos équipes sont certifiées avec plus de 15 ans d&apos;expérience en aménagement extérieur. Nous proposons des garanties décennales, un devis personnalisé sous 48h et une intervention rapide sur Nice et sa région. Notre engagement qualité se traduit par des matériaux haut de gamme et un suivi technique complet après installation.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Un projet moyen de 20m² représente un investissement de 2000€ à 5000€, installation comprise. Nos devis détaillés incluent tous les coûts sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La pose d&apos;une terrasse bois sur plot nécessite généralement 2 à 5 jours ouvrables, en fonction de la surface et de la complexité du terrain. Notre équipe optimise chaque intervention pour minimiser les délais tout en garantissant une qualité irréprochable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons le bois composite ou l&apos;essence de robinier pour les terrasses à Nice. Ces matériaux offrent une résistance exceptionnelle aux UV, à l&apos;humidité et aux variations de température, avec une durée de vie supérieure à 20 ans et un entretien minimal.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Nice ?
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
