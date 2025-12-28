import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Cenon | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot élégante et durable à Cenon. Groupe Expert Altitude Com vous propose des solutions sur-mesure q',
  keywords: 'terrasse bois cenon, terrasse sur plot cenon, terrasse bois sur plot cenon, pose terrasse bois cenon, terrasse composite cenon, terrasse bois piscine cenon',
};

export default function TerrasseBoisCenonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Cenon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot élégante et durable à Cenon. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui valorisent instantanément votre espace extérieur avec un savoir-faire artisanal.</p>

        <h2>Nos services de terrasse bois sur plot a Cenon</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente une solution esthétique et technique parfaite pour aménager vos espaces extérieurs à Cenon. Nos experts maîtrisent les techniques de pose qui garantissent une stabilité optimale et une résistance aux conditions climatiques locales. Chaque projet est étudié méticuleusement pour s&apos;adapter à la topographie de votre terrain, avec des plots réglables permettant de compenser jusqu&apos;à 10 cm de différence de niveau. Nous travaillons principalement avec des bois nobles comme l&apos;ipé, le padouk et des composites haut de gamme, offrant une durabilité de plus de 20 ans avec un minimum d&apos;entretien.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence ? Un accompagnement total depuis la conception jusqu&apos;à la réalisation. Nos équipes certifiées interviennent sur Cenon et sa région avec un engagement qualité. 15 ans d&apos;expérience, des matériaux sélectionnés, un devis précis sous 48h et une garantie décennale. Nous transformons vos projets en réalités durables.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon le type de matériau choisi. Un bois composite standard coûtera environ 120€/m², tandis qu&apos;un bois exotique comme l&apos;ipé atteindra 220-250€/m². Notre équipe propose systématiquement 3 options tarifaires adaptées à votre budget.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité. Pour une terrasse standard de 20m², comptez entre 2 et 4 jours ouvrés. Notre méthode optimisée permet une installation rapide et précise, avec un planning clairement établi dès le premier rendez-vous.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse à Cenon, nous recommandons le bois composite ou l&apos;ipé. Le composite offre une durabilité exceptionnelle sans entretien, résistant parfaitement à l&apos;humidité. L&apos;ipé, plus haut de gamme, propose une esthétique naturelle et une résistance maximale aux intempéries. Le choix dépendra de votre budget et de vos attentes spécifiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Cenon ?
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
