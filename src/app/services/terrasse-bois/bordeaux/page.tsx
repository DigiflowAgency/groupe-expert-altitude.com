import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Bordeaux | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure pour les maisons bordelaises. Expert Altitude Com vous',
  keywords: 'terrasse bois bordeaux, terrasse sur plot bordeaux, terrasse bois sur plot bordeaux, pose terrasse bois bordeaux, terrasse composite bordeaux, terrasse bois piscine bordeaux',
};

export default function TerrasseBoisBordeauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Bordeaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure pour les maisons bordelaises. Expert Altitude Com vous propose des solutions durables et esthétiques qui valorisent instantanément votre propriété dans la région.</p>

        <h2>Nos services de terrasse bois sur plot a Bordeaux</h2>
        <div className="space-y-4">
          <p>Notre service de pose de terrasse bois sur plot représente la solution idéale pour les propriétaires bordelais recherchant un aménagement extérieur élégant et fonctionnel. Nous utilisons des matériaux haute qualité comme le bois composite ou le pin traité, garantissant une durabilité exceptionnelle face aux conditions climatiques locales. Notre processus d&apos;installation comprend une étude préalable précise du terrain, un nivellement méticuleux et une pose sur plots techniques permettant une parfaite stabilité et une isolation optimale. Chaque réalisation est personnalisée, respectant l&apos;architecture de votre espace extérieur et vos contraintes spécifiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son expertise technique unique à Bordeaux. Nos équipes possèdent plus de 15 ans d&apos;expérience en aménagement extérieur, une garantie décennale et une certification RGE. Nous proposons des devis transparents, un accompagnement personnalisé et une réactivité reconnue. Notre engagement qualité se traduit par des réalisations durables et esthétiques, adaptées à chaque environnement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon le matériau choisi (bois exotique, composite) et la complexité de l&apos;installation. Pour un projet standard à Bordeaux, comptez environ 120€/m² tout compris, pose et matériaux.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la configuration. Un projet de 30m² prend généralement entre 2 et 4 jours ouvrables, incluant la préparation du terrain et la pose finale. Notre équipe optimise chaque intervention pour une réalisation rapide et précise.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les meilleurs bois pour terrasse sont le bois composite (très résistant), le pin traité autoclave (économique) et l&apos;ipé (bois exotique haut de gamme). À Bordeaux, nous recommandons le composite pour sa longévité et sa faible maintenance, idéal pour les climats océaniques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Bordeaux ?
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
