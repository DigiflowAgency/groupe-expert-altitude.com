import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Neuilly-sur-Seine | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur à Neuilly-sur-Seine avec une terrasse bois sur plot élégante et durable. Notre expertise Groupe Expert Altitude Com vous',
  keywords: 'terrasse bois neuilly-sur-seine, terrasse sur plot neuilly-sur-seine, terrasse bois sur plot neuilly-sur-seine, pose terrasse bois neuilly-sur-seine, terrasse composite neuilly-sur-seine, terrasse bois piscine neuilly-sur-seine',
};

export default function TerrasseBoisNeuillySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Neuilly-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur à Neuilly-sur-Seine avec une terrasse bois sur plot élégante et durable. Notre expertise Groupe Expert Altitude Com vous garantit une réalisation sur mesure qui valorisera immédiatement votre propriété.</p>

        <h2>Nos services de terrasse bois sur plot a Neuilly-sur-Seine</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente une solution esthétique et technique parfaite pour aménager vos espaces extérieurs. Notre méthode permet une installation précise, avec un nivellement optimal grâce à des plots réglables qui s&apos;adaptent parfaitement aux légères variations de terrain. Nous travaillons principalement avec des matériaux haut de gamme comme les bois exotiques ou les composites, offrant une résistance maximale aux intempéries et une durabilité de 20 à 25 ans. Notre processus inclut un diagnostic précis du terrain, une préparation soignée du support, et une pose selon les normes techniques les plus strictes, garantissant un résultat impeccable à Neuilly-sur-Seine et ses environs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée dispose de plus de 15 ans d&apos;expérience, nous proposons des devis transparents sans frais cachés, nos matériaux bénéficient de garanties constructeur, et nous réalisons un suivi personnalisé après installation. Nos réalisations sont systématiquement adaptées aux spécificités de votre terrain et à vos attentes esthétiques.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 120€ et 250€ au m², selon les matériaux choisis. Un composite haut de gamme sera plus onéreux qu&apos;un bois standard. Pour un projet moyen de 30m² à Neuilly-sur-Seine, comptez un budget entre 3 600€ et 7 500€, installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité. En moyenne, nous réalisons 15 à 25 m² par jour. Un chantier standard de 40m² nécessitera 2 à 3 jours de travail, incluant la préparation du terrain et la pose définitive.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les meilleurs bois pour terrasse sont le pin traité autoclave, le padouk, l&apos;ipé ou le composite. Nous recommandons le padouk pour sa durabilité naturelle (25-30 ans) et sa résistance aux UV, ou un composite technologique offrant un entretien minimal et une grande longévité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Neuilly-sur-Seine ?
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
