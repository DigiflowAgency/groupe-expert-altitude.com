import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Puteaux | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Puteaux avec une terrasse bois sur plot élégante et durable, conçue par les experts du Groupe Altitude Com. Notre savoir-fair',
  keywords: 'terrasse bois puteaux, terrasse sur plot puteaux, terrasse bois sur plot puteaux, pose terrasse bois puteaux, terrasse composite puteaux, terrasse bois piscine puteaux',
};

export default function TerrasseBoisPuteauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Puteaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Puteaux avec une terrasse bois sur plot élégante et durable, conçue par les experts du Groupe Altitude Com. Notre savoir-faire local vous garantit une réalisation sur-mesure qui valorisera instantanément votre espace extérieur.</p>

        <h2>Nos services de terrasse bois sur plot a Puteaux</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est une solution technique et esthétique parfaitement adaptée aux espaces résidentiels et professionnels de Puteaux. Notre méthode exclusive permet une installation précise, avec un nivellement optimal grâce à des plots réglables qui s&apos;adaptent aux légères imperfections du sol. Nous travaillons principalement avec des matériaux nobles comme le bois composite et le bois exotique, offrant une résistance exceptionnelle aux intempéries et une durabilité de 20 à 30 ans. Chaque projet est personnalisé, en considérant l&apos;exposition, la configuration du terrain et vos usages spécifiques, pour une terrasse qui allie parfaitement technicité et élégance.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos équipes sont certifiées avec plus de 15 ans d&apos;expérience en aménagement extérieur. Nous proposons un devis gratuit et détaillé, un accompagnement personnalisé de A à Z, et une garantie décennale sur nos réalisations. Notre engagement qualité se traduit par des matériaux haut de gamme et un suivi technique irréprochable.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Un bois composite standard coûtera environ 120€/m², tandis qu&apos;un bois exotique premium peut atteindre 220€/m². Notre devis personnalisé inclut la pose, les matériaux et le nivellement, sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot à Puteaux est généralement de 3 à 5 jours pour une surface de 20-30m². Le processus comprend la préparation du terrain, la pose des plots, la fixation des lames et les finitions. Notre équipe optimise chaque étape pour une réalisation rapide et impeccable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse sur plot, nous recommandons le bois composite (très résistant), l&apos;ipé (bois exotique ultra-durable) ou le pin traité classe 4. Le composite offre l&apos;avantage d&apos;être sans entretien, tandis que l&apos;ipé garantit un rendu esthétique haut de gamme. Le choix dépendra de votre budget, de l&apos;exposition et de l&apos;usage prévu.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Puteaux ?
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
