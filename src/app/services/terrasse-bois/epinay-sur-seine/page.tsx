import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Épinay-sur-Seine | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot par Groupe Expert Altitude Com, le spécialiste des aménagements extérieurs à Épinay-sur-Seine. ',
  keywords: 'terrasse bois épinay-sur-seine, terrasse sur plot épinay-sur-seine, terrasse bois sur plot épinay-sur-seine, pose terrasse bois épinay-sur-seine, terrasse composite épinay-sur-seine, terrasse bois piscine épinay-sur-seine',
};

export default function TerrasseBoisEpinaySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Épinay-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot par Groupe Expert Altitude Com, le spécialiste des aménagements extérieurs à Épinay-sur-Seine. Nous concevons des terrasses durables qui allient élégance et fonctionnalité pour sublimer vos espaces de vie.</p>

        <h2>Nos services de terrasse bois sur plot a Épinay-sur-Seine</h2>
        <div className="space-y-4">
          <p>Notre service de pose de terrasse bois sur plot répond aux exigences les plus pointues des propriétaires d&apos;Épinay-sur-Seine et des environs. Nous utilisons des matériaux haut de gamme - bois composite ou bois naturel - garantissant une résistance optimale aux intempéries. Notre méthode sur plot permet une installation précise, avec une parfaite horizontalité et un drainage efficace. Chaque projet est personnalisé, en tenant compte de la configuration du terrain, de l&apos;exposition et de vos préférences esthétiques. Notre équipe technique maîtrise parfaitement les techniques de pose, assurant une finition impeccable et une durabilité supérieure à 20 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Experts certifiés avec plus de 15 ans d&apos;expérience
✓ Devis gratuit et précis sous 48h
✓ Matériaux sourcés écologiquement
✓ Garantie décennale sur nos réalisations
✓ Intervention rapide sur Épinay-sur-Seine et communes limitrophes</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ le m², selon les matériaux choisis. Un bois composite haut de gamme sera plus onéreux qu&apos;un bois traditionnel, mais offrira une durabilité supérieure. Notre tarification inclut la pose, les matériaux et la préparation du terrain.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface, mais en moyenne, comptez 2 à 5 jours pour un chantier de 30 à 50 m². Notre équipe optimise chaque intervention pour minimiser les délais tout en garantissant une qualité irréprochable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse sur plot, nous recommandons le bois composite (très résistant), l&apos;ipé (bois tropical très dense), ou le red cedar (imputrescible). Chaque essence a ses avantages : durabilité, aspect visuel, entretien. Nous conseillons le choix en fonction de votre budget et de vos attentes spécifiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Épinay-sur-Seine ?
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
