import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Paris 9e | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour créer des terrasses bois sur plot à Paris 9e, transformant vos espaces extérieurs en v',
  keywords: 'terrasse bois paris 9e, terrasse sur plot paris 9e, terrasse bois sur plot paris 9e, pose terrasse bois paris 9e, terrasse composite paris 9e, terrasse bois piscine paris 9e',
};

export default function TerrasseBoisParis9ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Paris 9e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour créer des terrasses bois sur plot à Paris 9e, transformant vos espaces extérieurs en véritables havres de détente et de style. Nos solutions sur mesure allient élégance technique et esthétique pour des terrasses durables et personnalisées.</p>

        <h2>Nos services de terrasse bois sur plot a Paris 9e</h2>
        <div className="space-y-4">
          <p>Nos terrasses bois sur plot représentent la solution idéale pour les propriétaires parisiens recherchant un aménagement extérieur haut de gamme. Notre expertise technique nous permet de réaliser des terrasses parfaitement nivelées, même sur des surfaces irrégulières, grâce à un système de plots réglables. Nous travaillons principalement avec des bois nobles comme l&apos;ipé, le padouk et des composites haut de gamme, garantissant une résistance maximale aux intempéries et une durabilité de 20 à 30 ans. Notre processus inclut un diagnostic précis, une préparation méticuleuse du terrain, et une pose selon les normes les plus exigeantes, avec une attention particulière aux détails dans chaque réalisation à Paris 9e.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour un service premium. Nos équipes possèdent plus de 15 ans d&apos;expérience en aménagement extérieur. Nous proposons des devis transparents sans surprise, un accompagnement personnalisé et une garantie décennale. Notre taux de satisfaction client dépasse 95%, témoignant de notre engagement qualité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 180€ et 350€ au m² selon les matériaux choisis. Pour un projet moyen de 20m² à Paris 9e, comptez un budget global entre 3 600€ et 7 000€, installation comprise. Les bois composites sont généralement plus onéreux mais offrent une durabilité supérieure.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité, mais en moyenne, notre équipe réalise un chantier de 20m² en 3 à 5 jours ouvrés. La préparation du terrain et les finitions peuvent prendre jusqu&apos;à une semaine supplémentaire selon les spécificités du site à Paris 9e.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse sur plot, nous recommandons le bois composite, l&apos;ipé ou le padouk. Le composite offre la meilleure durabilité avec peu d&apos;entretien, l&apos;ipé apporte un aspect naturel haut de gamme, tandis que le padouk séduit par sa teinte rouge-brun unique et sa résistance exceptionnelle.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Paris 9e ?
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
