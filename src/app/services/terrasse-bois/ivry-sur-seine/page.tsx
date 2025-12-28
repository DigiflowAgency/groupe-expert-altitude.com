import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Ivry-sur-Seine | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur à Ivry-sur-Seine avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des soluti',
  keywords: 'terrasse bois ivry-sur-seine, terrasse sur plot ivry-sur-seine, terrasse bois sur plot ivry-sur-seine, pose terrasse bois ivry-sur-seine, terrasse composite ivry-sur-seine, terrasse bois piscine ivry-sur-seine',
};

export default function TerrasseBoisIvrySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Ivry-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur à Ivry-sur-Seine avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui valorisent votre propriété et offrent un cadre de vie extérieur exceptionnel.</p>

        <h2>Nos services de terrasse bois sur plot a Ivry-sur-Seine</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente une solution technique et esthétique idéale pour aménager vos espaces extérieurs. Notre expertise permet de créer des surfaces parfaitement planes, surélevées et isolées, garantissant une parfaite protection contre l&apos;humidité et les variations de terrain. Nous sélectionnons rigoureusement des matériaux nobles comme le bois composite ou le bois exotique, offrant une résistance optimale aux intempéries et une durabilité jusqu&apos;à 25 ans. Notre processus inclut un diagnostic précis du terrain, une préparation minutieuse et une pose selon les normes techniques les plus exigeantes, avec un niveau de précision de +/- 2 mm.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour une expertise locale à Ivry-sur-Seine. Nos équipes certifiées interviennent avec un outillage professionnel, proposent des devis transparents sans frais cachés et garantissent une réalisation dans un délai de 2 à 3 semaines. Nous maîtrisons parfaitement les techniques de pose sur plot et proposons une garantie décennale sur nos réalisations.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon la qualité des matériaux choisis. Un bois composite haut de gamme sera plus coûteux qu&apos;un bois standard, mais offrira une durabilité supérieure. Notre tarification inclut la pose, les matériaux et le traitement anti-dérapant.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface, mais en moyenne, comptez 3 à 5 jours pour un espace de 30m². Notre équipe professionnelle optimise chaque intervention pour une réalisation rapide et précise, avec un planning clairement établi dès le début du chantier.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse à Ivry-sur-Seine, nous recommandons le bois composite ou l&apos;ipé, deux matériaux offrant une excellente résistance aux variations climatiques. Le composite présente l&apos;avantage d&apos;être écologique et sans entretien, tandis que l&apos;ipé offre un rendu esthétique naturel et une durabilité exceptionnelle.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Ivry-sur-Seine ?
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
