import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Pessac | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Pessac avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des solutions sur-mesure ',
  keywords: 'terrasse bois pessac, terrasse sur plot pessac, terrasse bois sur plot pessac, pose terrasse bois pessac, terrasse composite pessac, terrasse bois piscine pessac',
};

export default function TerrasseBoisPessacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Pessac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Pessac avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui valorisent instantanément votre espace extérieur avec un savoir-faire artisanal.</p>

        <h2>Nos services de terrasse bois sur plot a Pessac</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est une véritable extension de votre habitat. Notre équipe spécialisée intervient à Pessac et ses environs pour créer des espaces extérieurs fonctionnels et esthétiques. Nous sélectionnons rigoureusement des matériaux haut de gamme comme le bois composite ou le bois exotique, garantissant une résistance optimale aux intempéries. Notre processus comprend un diagnostic précis du terrain, une préparation soignée du support et une pose technique utilisant des plots réglables pour assurer un parfait nivellement. Chaque réalisation bénéficie d&apos;une étude personnalisée pour s&apos;adapter parfaitement à vos contraintes et attentes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos 15 ans d&apos;expérience en aménagement extérieur à Pessac nous permettent de proposer des solutions innovantes. Nos équipes sont certifiées RGE, nos devis sont transparents et nos délais toujours respectés. Nous proposons une garantie décennale et un suivi personnalisé après installation.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Un bois composite haut de gamme sera plus onéreux qu&apos;un bois traditionnel, mais offrira une durabilité supérieure. Comptez en moyenne 120€/m² pour une réalisation de qualité à Pessac.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité du terrain. Pour une surface standard de 20-30 m², notre équipe réalise généralement l&apos;installation en 2-3 jours ouvrables. La préparation du terrain peut prendre une journée supplémentaire.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse à Pessac, nous recommandons le bois composite ou l&apos;ipé. Le composite offre une excellente résistance aux UV et à l&apos;humidité, avec peu d&apos;entretien. L&apos;ipé, bois exotique très dense, garantit une durabilité exceptionnelle de 25-30 ans. Le choix dépendra de votre budget et de vos préférences esthétiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Pessac ?
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
