import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Balma | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur à Balma avec une terrasse bois sur plot élégante et durable, conçue par les experts du Groupe Expert Altitude Com. Nos s',
  keywords: 'terrasse bois balma, terrasse sur plot balma, terrasse bois sur plot balma, pose terrasse bois balma, terrasse composite balma, terrasse bois piscine balma',
};

export default function TerrasseBoisBalmaPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Balma</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur à Balma avec une terrasse bois sur plot élégante et durable, conçue par les experts du Groupe Expert Altitude Com. Nos solutions sur-mesure s&apos;adaptent parfaitement à tous les environnements résidentiels et commerciaux de la région.</p>

        <h2>Nos services de terrasse bois sur plot a Balma</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot est notre expertise principale, offrant une solution esthétique et fonctionnelle pour valoriser vos espaces extérieurs. Nos professionnels utilisent uniquement des matériaux de haute qualité, garantissant une installation précise et un résultat impeccable. Chaque projet est pensé sur-mesure, en tenant compte de la configuration du terrain, des contraintes techniques et de vos préférences personnelles. Nous proposons différents types de bois et de composites, permettant une personnalisation totale qui s&apos;intègre harmonieusement à votre environnement à Balma.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir notre entreprise, c&apos;est opter pour l&apos;excellence technique et un service premium. Nos équipes possèdent plus de 15 ans d&apos;expérience en aménagement extérieur. Nous garantissons une intervention rapide, un devis précis sous 48h et une réalisation dans les délais impartis. Notre engagement qualité se traduit par des matériaux certifiés, une pose professionnelle et un suivi personnalisé.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon le type de matériau choisi. Un bois composite haut de gamme sera plus onéreux qu&apos;un pin traité, mais offrira une durabilité supérieure. Notre estimation précise dépend de la surface, de l&apos;accessibilité et des finitions souhaitées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot oscille généralement entre 2 et 5 jours pour une surface standard de 20-30 m². Les facteurs influençant ce délai incluent la préparation du terrain, la complexité du design et les conditions météorologiques à Balma.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les meilleurs bois pour terrasse sont le châtaignier, l&apos;acacia et le bois composite. Le châtaignier offre une excellente résistance naturelle, l&apos;acacia une durabilité exceptionnelle, tandis que le composite garantit un entretien minimal et une longévité de 25-30 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Balma ?
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
