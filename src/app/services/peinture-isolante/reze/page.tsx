import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Rezé | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Rezé avec ses solutions de peinture innovantes. Nos techniques de peinture isolante tran',
  keywords: 'peinture isolante rezé, peinture thermique rezé, peinture isolante toiture rezé, thermo reflect rezé, peinture reflechissante rezé, cool roof rezé',
};

export default function PeintureIsolanteRezePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Rezé</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Rezé avec ses solutions de peinture innovantes. Nos techniques de peinture isolante transforment vos bâtiments en véritables boucliers thermiques, garantissant un confort optimal et des économies d&apos;énergie significatives.</p>

        <h2>Nos services de peinture isolante thermique a Rezé</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la solution ultime pour protéger et optimiser l&apos;efficacité énergétique de vos locaux. Utilisant des technologies de pointe comme Thermo Reflect, nous appliquons des revêtements spécialement conçus qui réfléchissent jusqu&apos;à 90% des rayonnements solaires. Cette technique permet de réduire jusqu&apos;à 30% des coûts de climatisation et de chauffage, tout en prolongeant la durée de vie de vos surfaces extérieures. Notre processus débute par un diagnostic précis de votre bâtiment à Rezé, suivi d&apos;une préparation minutieuse des surfaces et d&apos;une application professionnelle garantissant une isolation maximale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Le Groupe Expert Altitude Com se distingue par son expertise technique unique. Nos techniciens sont certifiés, nos matériaux sont sélectionnés rigoureusement, et nous proposons une garantie de performance de 10 ans. Nous maîtrisons parfaitement les techniques de cool roof et de peinture réfléchissante, offrant une solution sur-mesure adaptée à chaque configuration architecturale.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 45€ au m², selon la complexité de la surface et la technologie utilisée. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 4500€, rapidement amorti par les économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent qu&apos;elle peut réduire la température de surface jusqu&apos;à 20°C, diminuer les déperditions thermiques de 25% et augmenter le confort intérieur de manière significative. Sa performance dépend du produit et de son application professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite 4 étapes : nettoyage approfondi, réparation des éventuelles imperfections, application d&apos;un primaire d&apos;accrochage, puis pose de 2 couches de peinture spécifique avec des outils professionnels. La préparation représente 70% de la qualité du résultat final.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Rezé ?
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
