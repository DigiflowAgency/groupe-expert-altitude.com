import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Nantes | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions thermiques avec le Groupe Expert Altitude Com, votre partenaire peinture isolante à Nantes. Nous trans',
  keywords: 'peinture isolante nantes, peinture thermique nantes, peinture isolante toiture nantes, thermo reflect nantes, peinture reflechissante nantes, cool roof nantes',
};

export default function PeintureIsolanteNantesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Nantes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions thermiques avec le Groupe Expert Altitude Com, votre partenaire peinture isolante à Nantes. Nous transformons vos bâtiments en boucliers thermiques grâce à des technologies de pointe qui réduisent jusqu&apos;à 30% vos consommations énergétiques.</p>

        <h2>Nos services de peinture isolante thermique a Nantes</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique révolutionne la protection de vos surfaces à Nantes et dans toute la région des Pays de la Loire. Nous utilisons des technologies de thermo-réflexion comme Thermo Reflect, qui créent une barrière intelligente contre la chaleur et le froid. Notre processus débute par un diagnostic précis de vos besoins, suivi d&apos;une préparation minutieuse des surfaces, puis de l&apos;application d&apos;une peinture multicouche hautement performante. Nos produits garantissent une isolation supérieure, une protection durable contre les UV et une réduction significative des ponts thermiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Le Groupe Expert Altitude Com se distingue par son expertise technique, ses certifications RGE, et son engagement écologique. Nos techniciens sont formés aux dernières normes d&apos;isolation, nous utilisons uniquement des produits éco-responsables, et nous proposons une garantie de 10 ans sur nos travaux. Notre approche sur-mesure et notre connaissance approfondie des spécificités nantaises font la différence.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 30€ et 80€ par m², selon la surface, le type de support et la technologie utilisée. Pour une toiture moyenne de 100m², comptez un investissement global entre 3000€ et 6000€, rapidement rentabilisé par les économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est réellement efficace, avec des performances prouvées scientifiquement. Elle peut réduire jusqu&apos;à 35% des déperditions thermiques, diminuer la température intérieure de 4 à 7°C en été, et améliorer significativement le confort énergétique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite 4 étapes : nettoyage approfondi, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis pose de 2 à 3 couches de peinture thermo-réfléchissante avec des outils professionnels et dans des conditions météorologiques optimales.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Nantes ?
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
