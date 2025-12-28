import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Créteil | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur à Créteil avec une terrasse bois sur plot élégante et durable, créée par des experts en aménagement. Groupe Expert Altit',
  keywords: 'terrasse bois créteil, terrasse sur plot créteil, terrasse bois sur plot créteil, pose terrasse bois créteil, terrasse composite créteil, terrasse bois piscine créteil',
};

export default function TerrasseBoisCreteilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Créteil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur à Créteil avec une terrasse bois sur plot élégante et durable, créée par des experts en aménagement. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui valorisent instantanément votre propriété dans le Val-de-Marne.</p>

        <h2>Nos services de terrasse bois sur plot a Créteil</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente la solution idéale pour sublimer vos espaces extérieurs avec un design moderne et fonctionnel. Notre expertise technique nous permet de réaliser des installations parfaitement nivelées, qui s&apos;adaptent à tous les types de sols, même les plus irréguliers. Nos terrasses utilisent des matériaux haut de gamme, principalement du bois composite ou des essences résistantes comme le robinier, garantissant une durabilité jusqu&apos;à 25 ans. À Créteil, nous comprenons les spécificités climatiques locales et sélectionnons des matériaux qui résistent parfaitement à l&apos;humidité et aux variations de température. Chaque projet est personnalisé, avec une attention méticuleuse portée à l&apos;esthétique et à la fonctionnalité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos équipes sont certifiées et possèdent plus de 15 ans d&apos;expérience en aménagement extérieur. Nous proposons un devis gratuit et détaillé, un accompagnement personnalisé de A à Z, et une garantie décennale sur nos réalisations. Notre approche sur-mesure et notre engagement qualité font la différence à Créteil et dans toute la région parisienne.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Pour un projet standard à Créteil de 20m², comptez un budget entre 1600€ et 5000€. Les bois composites sont généralement plus onéreux mais offrent une durabilité supérieure.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La pose d&apos;une terrasse bois sur plot prend généralement entre 2 et 5 jours, selon la surface et la complexité du terrain. Un chantier de 20m² sera réalisé en moyenne en 3 jours par notre équipe de professionnels, avec un planning précis et respecté.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les meilleurs bois pour terrasse sont le bois composite, le robinier, l&apos;ipé et le red cedar. Le bois composite reste le plus recommandé à Créteil car il nécessite peu d&apos;entretien, résiste aux intempéries et conserve un aspect esthétique durant des années.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Créteil ?
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
