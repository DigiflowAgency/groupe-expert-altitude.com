import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Paris | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur à Paris avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des solutions sur-m',
  keywords: 'terrasse bois paris, terrasse sur plot paris, terrasse bois sur plot paris, pose terrasse bois paris, terrasse composite paris, terrasse bois piscine paris',
};

export default function TerrasseBoisParisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Paris</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur à Paris avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui valorisent votre propriété parisienne tout en offrant un espace de détente parfaitement aménagé.</p>

        <h2>Nos services de terrasse bois sur plot a Paris</h2>
        <div className="space-y-4">
          <p>Nos terrasses bois sur plot représentent la solution idéale pour les propriétaires parisiens recherchant un aménagement extérieur haut de gamme. Nous utilisons des matériaux de première qualité, principalement des bois composites et exotiques, garantissant une résistance optimale aux intempéries et à l&apos;usure urbaine. Notre processus d&apos;installation débute par un diagnostic précis de votre espace, suivi d&apos;un nivellement technique qui assure une pose parfaitement horizontale. Chaque terrasse est personnalisée selon la configuration de votre terrain, avec une attention méticuleuse portée à l&apos;esthétique comme à la fonctionnalité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe cumule plus de 15 ans d&apos;expérience dans l&apos;aménagement extérieur parisien. Nous proposons une garantie de 10 ans sur nos réalisations, un bureau d&apos;études intégré pour des conseils sur-mesure, et une approche écologique privilégiant des matériaux durables et recyclables. Notre taux de satisfaction client dépasse les 95%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 120€ et 250€ au m², selon les matériaux choisis. Pour un espace de 20m², comptez un budget global entre 2 400€ et 5 000€. Nos devis détaillés incluent la pose, les matériaux et la préparation du terrain.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité, mais en moyenne, notre équipe réalise un chantier entre 2 et 5 jours. Un espace de 15m² sera généralement aménagé en 2-3 jours ouvrables.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons trois types de bois : le bois composite (entretien minimal), l&apos;ipé (très haute durabilité) et le red cedar (aspect naturel). Le choix dépend de votre budget, de l&apos;exposition et de l&apos;usage prévu de votre terrasse.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Paris ?
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
