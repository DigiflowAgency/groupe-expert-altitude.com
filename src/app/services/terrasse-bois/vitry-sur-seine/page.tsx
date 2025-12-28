import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Vitry-sur-Seine | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur à Vitry-sur-Seine avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des solut',
  keywords: 'terrasse bois vitry-sur-seine, terrasse sur plot vitry-sur-seine, terrasse bois sur plot vitry-sur-seine, pose terrasse bois vitry-sur-seine, terrasse composite vitry-sur-seine, terrasse bois piscine vitry-sur-seine',
};

export default function TerrasseBoisVitrySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Vitry-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur à Vitry-sur-Seine avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui valorisent instantanément votre propriété et créent un environnement outdoor sophistiqué.</p>

        <h2>Nos services de terrasse bois sur plot a Vitry-sur-Seine</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement extérieur : c&apos;est une véritable extension de votre habitat. Notre expertise, développée depuis plus de 15 ans dans la région parisienne, nous permet de réaliser des installations parfaitement adaptées à chaque configuration. Nous travaillons principalement avec des matériaux composites haut de gamme et des bois nobles garantissant une résistance optimale aux intempéries. Notre processus inclut un diagnostic précis du terrain, une préparation soignée de la surface et une pose méthodique qui assure une parfaite stabilité et un drainage efficace. Chaque projet à Vitry-sur-Seine est unique, et nous personnalisons systématiquement nos interventions pour répondre à vos attentes spécifiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos techniciens sont certifiés et disposent d&apos;une formation continue. Nous proposons des garanties décennales sur nos réalisations. Notre bureau d&apos;études intégré permet une conception technique précise. Nous sélectionnons uniquement des matériaux écologiques et durables, avec un taux de satisfaction client de 98%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ le m², selon les matériaux choisis et la complexité de l&apos;installation. Pour un projet standard à Vitry-sur-Seine, comptez environ 120€/m² pour une terrasse composite de qualité, pose et fourniture comprises.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface, mais en moyenne, notre équipe réalise entre 15 et 30 m² par jour. Un projet complet de 50 m² nécessitera généralement 2 à 3 jours de travail, incluant la préparation du terrain et la pose finale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse sur plot, nous recommandons le bois composite (imputrescible), le bois exotique type ipé (très résistant) ou le mélèze traité. Le composite offre le meilleur rapport qualité-prix, avec une durée de vie de 25 à 30 ans et un entretien minimal.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Vitry-sur-Seine ?
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
