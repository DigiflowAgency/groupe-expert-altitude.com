import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Lormont | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Lormont avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des solutions sur mesure',
  keywords: 'terrasse bois lormont, terrasse sur plot lormont, terrasse bois sur plot lormont, pose terrasse bois lormont, terrasse composite lormont, terrasse bois piscine lormont',
};

export default function TerrasseBoisLormontPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Lormont</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Lormont avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des solutions sur mesure qui valorisent votre espace extérieur et s&apos;adaptent parfaitement à votre environnement.</p>

        <h2>Nos services de terrasse bois sur plot a Lormont</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente une solution technique et esthétique idéale pour aménager vos espaces extérieurs à Lormont. Notre méthode exclusive permet une installation précise, garantissant une parfaite horizontalité grâce à des plots réglables. Nous travaillons principalement avec des matériaux nobles comme le bois composite et le bois exotique, offrant une résistance exceptionnelle aux intempéries. Chaque projet est étudié individuellement, en prenant en compte la configuration du terrain, l&apos;exposition et vos attentes spécifiques. Notre équipe de professionnels assure une pose méticuleuse, avec un nivellement optimal et un drainage efficace.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos techniciens possèdent plus de 15 ans d&apos;expérience en aménagement extérieur. Nous garantissons un devis précis sous 48h, une installation rapide et un suivi personnalisé. Nos réalisations bénéficient d&apos;une garantie décennale et nos matériaux sont sourcés auprès de fournisseurs certifiés.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon le type de matériau choisi. Un bois composite haut de gamme sera plus onéreux qu&apos;un bois traditionnel, mais offrira une durabilité supérieure. Chez Groupe Expert Altitude Com, nous proposons des solutions adaptées à tous les budgets, avec un rapport qualité-prix optimal.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité du terrain. Pour une surface moyenne de 20m², comptez entre 2 et 4 jours ouvrables. Notre équipe à Lormont est équipée de matériel professionnel permettant une installation rapide et précise, minimisant les délais d&apos;intervention.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse sur plot, nous recommandons le bois composite, le pin traité autoclave, l&apos;ipé ou le châtaignier. Le composite offre la meilleure durabilité avec peu d&apos;entretien, tandis que l&apos;ipé représente un choix haut de gamme pour sa résistance naturelle. Nous conseillons un choix en fonction de votre budget, de l&apos;exposition et de l&apos;usage prévu.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Lormont ?
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
