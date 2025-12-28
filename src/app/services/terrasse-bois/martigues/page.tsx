import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Martigues | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Martigues avec une terrasse bois sur plot élégante et durable par Groupe Expert Altitude Com. Nos solutions sur-mesure s&apos;adap',
  keywords: 'terrasse bois martigues, terrasse sur plot martigues, terrasse bois sur plot martigues, pose terrasse bois martigues, terrasse composite martigues, terrasse bois piscine martigues',
};

export default function TerrasseBoisMartiguesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Martigues</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Martigues avec une terrasse bois sur plot élégante et durable par Groupe Expert Altitude Com. Nos solutions sur-mesure s&apos;adaptent parfaitement aux environnements méditerranéens, garantissant un aménagement esthétique et fonctionnel.</p>

        <h2>Nos services de terrasse bois sur plot a Martigues</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement extérieur : c&apos;est la création d&apos;un espace de vie supplémentaire. Notre expertise permet de réaliser des terrasses qui résistent aux conditions climatiques de Martigues, avec une précision millimétrique dans la pose. Nos professionnels sélectionnent rigoureusement chaque matériau, privilégiant des bois nobles et des composites haute résistance. Le système sur plot offre un avantage technique majeur : il permet une parfaite isolation, une ventilation optimale et une adaptabilité aux surfaces légèrement en pente. Chaque projet est étudié individuellement pour garantir une intégration harmonieuse avec votre environnement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son expertise technique pointue. Nos équipes sont certifiées avec plus de 15 ans d&apos;expérience en aménagement extérieur. Nous proposons des garanties décennales, un devis personnalisé sous 48h et un accompagnement technique complet. Notre engagement qualité se traduit par des réalisations durables et esthétiques, adaptées à chaque configuration.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Pour Martigues, nous proposons des solutions à partir de 120€/m² comprenant fourniture et pose, avec des options en bois exotique, composite ou bois local.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface, mais en moyenne, comptez 3 à 5 jours pour un projet de 30m². Notre équipe optimise chaque intervention pour minimiser les délais tout en garantissant une qualité irréprochable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons le bois composite pour Martigues, offrant une résistance optimale aux UV et à l&apos;humidité. Les essences comme l&apos;ipé, le châtaignier ou le douglas sont également excellentes, avec une durabilité de 20 à 30 ans si correctement entretenues.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Martigues ?
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
