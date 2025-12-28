import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Villeurbanne | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Villeurbanne avec une terrasse bois sur plot élégante et durable. Notre expertise du Groupe Expert Altitude Com vous garantit',
  keywords: 'terrasse bois villeurbanne, terrasse sur plot villeurbanne, terrasse bois sur plot villeurbanne, pose terrasse bois villeurbanne, terrasse composite villeurbanne, terrasse bois piscine villeurbanne',
};

export default function TerrasseBoisVilleurbannePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Villeurbanne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Villeurbanne avec une terrasse bois sur plot élégante et durable. Notre expertise du Groupe Expert Altitude Com vous garantit une réalisation sur-mesure qui valorisera immédiatement votre espace extérieur.</p>

        <h2>Nos services de terrasse bois sur plot a Villeurbanne</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente la solution idéale pour aménager harmonieusement vos espaces extérieurs à Villeurbanne. Notre technique innovante permet une installation précise et stable, qui s&apos;adapte parfaitement aux différents reliefs et configurations. Nos terrasses en bois composite ou bois naturel offrent une résistance exceptionnelle aux intempéries, avec une durée de vie pouvant atteindre 25 ans. Chaque projet est étudié individuellement, en privilégiant des matériaux de haute qualité et un travail artisanal précis, pour un rendu esthétique et fonctionnel optimal.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence réside dans notre expertise technique unique. Nous proposons un accompagnement personnalisé, des matériaux sélectionnés rigoureusement, un devis détaillé sans surprise et une mise en œuvre rapide. Nos équipes sont certifiées et maîtrisent parfaitement les techniques de pose sur plot, garantissant une finition impeccable.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Un bois composite coûtera généralement autour de 120-150€/m², tandis qu&apos;un bois exotique premium peut atteindre 200-250€/m². Notre devis personnalisé inclut pose, matériaux et finitions.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface, mais en moyenne, comptez 3 à 5 jours pour une terrasse de 30-50 m². Notre équipe optimise chaque intervention pour minimiser les délais tout en garantissant une qualité irréprochable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse sur plot, nous recommandons le bois composite (très durable), l&apos;ipé (bois exotique résistant), ou le robinier (bois français imputrescible). Chaque essence présente des avantages spécifiques en termes de durabilité, d&apos;esthétique et de budget.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Villeurbanne ?
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
