import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Toulouse | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur à Toulouse avec une terrasse bois sur plot, la solution élégante et durable pour sublimer vos espaces de vie. Groupe Exp',
  keywords: 'terrasse bois toulouse, terrasse sur plot toulouse, terrasse bois sur plot toulouse, pose terrasse bois toulouse, terrasse composite toulouse, terrasse bois piscine toulouse',
};

export default function TerrasseBoisToulousePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Toulouse</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur à Toulouse avec une terrasse bois sur plot, la solution élégante et durable pour sublimer vos espaces de vie. Groupe Expert Altitude Com vous propose des solutions sur-mesure adaptées à tous les styles de jardins et terrasses dans la région toulousaine.</p>

        <h2>Nos services de terrasse bois sur plot a Toulouse</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot est notre expertise principale, offrant une solution esthétique et fonctionnelle pour valoriser vos extérieurs. Notre technique permet une installation précise, avec un nivellement parfait garantissant une surface plane et stable. Nous travaillons principalement avec des matériaux de haute qualité : bois composite, bois exotique ou bois local, pour s&apos;adapter à tous les budgets et styles. Chaque projet est étudié individuellement, en prenant en compte la configuration du terrain, l&apos;exposition et vos usages spécifiques. Notre process inclut un diagnostic technique complet, un relevé précis et une pose méticuleuse qui assure une durabilité de plus de 20 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe compte plus de 15 ans d&apos;expérience en aménagement extérieur à Toulouse. Nous garantissons un devis précis sous 48h, des matériaux certifiés, une pose professionnelle avec une garantie décennale. Nos réalisations sont 100% personnalisées et nos techniciens sont formés aux dernières techniques d&apos;installation.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon le matériau choisi. Un bois composite standard coûtera environ 120€/m², tandis qu&apos;un bois exotique premium peut atteindre 220€/m². Notre tarification inclut la fourniture des matériaux et la pose complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface : comptez environ 1 à 3 jours pour 20-30m². Un chantier de 50m² prendra généralement 4-5 jours, incluant la préparation du terrain, la pose des plots et le montage des lames.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les meilleurs bois pour terrasse sont : le bois composite (très résistant), l&apos;ipé (bois exotique ultra-durable), le red cedar (imputrescible) ou le châtaignier traité. Chaque essence a ses avantages : durabilité, prix, aspect esthétique. Nous conseillons un choix adapté à votre environnement toulousain.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Toulouse ?
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
