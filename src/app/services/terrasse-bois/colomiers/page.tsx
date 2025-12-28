import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Colomiers | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Colomiers avec une terrasse bois sur plot élégante et durable. Expert Altitude Com vous propose une solution sur-mesure qui a',
  keywords: 'terrasse bois colomiers, terrasse sur plot colomiers, terrasse bois sur plot colomiers, pose terrasse bois colomiers, terrasse composite colomiers, terrasse bois piscine colomiers',
};

export default function TerrasseBoisColomiersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Colomiers</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Colomiers avec une terrasse bois sur plot élégante et durable. Expert Altitude Com vous propose une solution sur-mesure qui allie esthétique et performance pour sublimer vos espaces extérieurs.</p>

        <h2>Nos services de terrasse bois sur plot a Colomiers</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est la création d&apos;un espace de vie supplémentaire. Notre expertise à Colomiers nous permet de réaliser des installations parfaitement adaptées à chaque configuration, qu&apos;il s&apos;agisse d&apos;une terrasse de piscine ou d&apos;un espace détente. Nos professionnels sélectionnent rigoureusement les matériaux, privilégiant des bois nobles et des composites haute résistance garantissant une durabilité jusqu&apos;à 25 ans. Chaque projet fait l&apos;objet d&apos;un diagnostic précis : nivellement du terrain, choix des plots techniques, ajustement de la structure pour une parfaite stabilité. Nous travaillons avec des matériaux certifiés, offrant une esthétique contemporaine et une excellente résistance aux intempéries.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos équipes cumulent plus de 15 ans d&apos;expérience en aménagement extérieur. Nous proposons un devis personnalisé sous 48h, une garantie décennale et un accompagnement technique complet. Notre approche sur-mesure et notre engagement qualité font la différence à Colomiers.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon le type de matériau choisi. Un projet moyen de 20m² oscillera autour de 2 500€, incluant pose et matériaux. Nos devis détaillés permettent une transparence totale des coûts.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité. Pour un espace standard de 15-20m², comptez entre 2 et 5 jours ouvrables. Notre équipe à Colomiers optimise chaque intervention pour une réalisation rapide et précise.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons trois types de bois : l&apos;ipé (très dense, durée de vie 30 ans), le padouk (rouge, imputrescible) et les composites technologiques. Chaque matériau présente des avantages en termes de résistance, d&apos;entretien et de budget.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Colomiers ?
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
