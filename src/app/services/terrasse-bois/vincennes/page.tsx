import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Vincennes | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Vincennes avec une terrasse bois sur plot élégante et durable par Groupe Expert Altitude Com. Nos solutions haut de gamme s&apos;a',
  keywords: 'terrasse bois vincennes, terrasse sur plot vincennes, terrasse bois sur plot vincennes, pose terrasse bois vincennes, terrasse composite vincennes, terrasse bois piscine vincennes',
};

export default function TerrasseBoisVincennesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Vincennes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Vincennes avec une terrasse bois sur plot élégante et durable par Groupe Expert Altitude Com. Nos solutions haut de gamme s&apos;adaptent parfaitement aux espaces résidentiels et professionnels de la région parisienne.</p>

        <h2>Nos services de terrasse bois sur plot a Vincennes</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente une solution technique et esthétique optimale pour aménager vos espaces extérieurs. Notre expertise permet de créer des surfaces parfaitement planes et stables, avec une isolation optimale grâce au système de plots réglables. Nos terrasses sont conçues pour résister aux variations climatiques de la région parisienne, garantissant une durabilité jusqu&apos;à 25 ans avec un entretien minimal. Nous proposons différents matériaux, du bois exotique au composite haute performance, toujours sélectionnés pour leur qualité et leur résistance aux intempéries.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son savoir-faire à Vincennes : expertise technique de plus de 15 ans, devis personnalisé sous 48h, équipe de professionnels certifiés, utilisation de matériaux écologiques et haut de gamme. Notre engagement qualité se traduit par des réalisations sur-mesure et un accompagnement complet de votre projet.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon le matériau choisi. Un projet moyen de 20m² coûtera entre 1600€ et 5000€, incluant pose et matériaux. Nos devis détaillés à Vincennes tiennent compte de la configuration précise de votre terrain.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La pose d&apos;une terrasse bois sur plot prend généralement entre 2 et 5 jours, en fonction de la surface et de la complexité du terrain. Notre équipe optimise chaque étape : préparation du sol, pose des plots, installation des lames, finitions. Un chantier de 20m² sera généralement terminé en 3 jours.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour Vincennes, nous recommandons le bois composite ou l&apos;IPE : résistant aux variations climatiques, peu d&apos;entretien, durée de vie supérieure à 25 ans. Le composite offre un rapport qualité-prix optimal, tandis que l&apos;IPE représente le haut de gamme en termes de durabilité et d&apos;esthétique naturelle.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Vincennes ?
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
