import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Saint-Herblain | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par Groupe Expert Altitude Com à Saint-Herblain. Nos s',
  keywords: 'terrasse bois saint-herblain, terrasse sur plot saint-herblain, terrasse bois sur plot saint-herblain, pose terrasse bois saint-herblain, terrasse composite saint-herblain, terrasse bois piscine saint-herblain',
};

export default function TerrasseBoisSaintHerblainPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Saint-Herblain</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par Groupe Expert Altitude Com à Saint-Herblain. Nos solutions haut de gamme allient esthétique moderne et durabilité pour sublimer vos espaces extérieurs.</p>

        <h2>Nos services de terrasse bois sur plot a Saint-Herblain</h2>
        <div className="space-y-4">
          <p>Notre expertise en terrasse bois sur plot répond aux exigences les plus techniques de l&apos;aménagement extérieur. Nous proposons des solutions adaptées à chaque configuration, qu&apos;il s&apos;agisse d&apos;une terrasse de piscine ou d&apos;un espace de détente. Notre processus démarre par un diagnostic précis du terrain à Saint-Herblain, permettant une pose optimale sur plots qui garantit une parfaite stabilité et un drainage efficace. Nos matériaux sélectionnés - bois composite ou bois exotique - offrent une résistance exceptionnelle aux intempéries, avec une durée de vie pouvant atteindre 25 ans. Chaque réalisation bénéficie d&apos;une mise en œuvre professionnelle, respectant les normes techniques les plus strictes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son expertise locale à Saint-Herblain. Nos équipes certifiées maîtrisent parfaitement les techniques de pose de terrasse bois. Nous garantissons un devis transparent, un délai d&apos;intervention rapide de 15 jours maximum, et un suivi personnalisé. Notre engagement qualité se traduit par des matériaux haut de gamme et une finition impeccable.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Un bois composite standard coûtera environ 120€/m², tandis qu&apos;un bois exotique premium peut atteindre 220€/m². Notre devis personnalisé inclut pose, matériaux et finition.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La pose d&apos;une terrasse bois sur plot nécessite généralement 2 à 5 jours, selon la surface et la complexité du terrain. Pour un espace de 20m², comptez en moyenne 3 jours de travail, incluant la préparation du sol, la pose des plots et du revêtement.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les meilleurs bois pour terrasse sont le bois composite (entretien minimal), l&apos;ipé (très résistant), le padouk (belle teinte rouge) et le châtaignier (économique). Nous recommandons le composite pour sa durabilité ou l&apos;ipé pour un look haut de gamme, en fonction de votre budget et attentes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Saint-Herblain ?
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
