import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Aix-en-Provence | Groupe Expert Altitude Com',
  description: 'Découvrez la solution révolutionnaire de Groupe Expert Altitude Com pour protéger et optimiser thermiquement vos bâtiments à Aix-en-Provence : la peinture ',
  keywords: 'peinture isolante aix-en-provence, peinture thermique aix-en-provence, peinture isolante toiture aix-en-provence, thermo reflect aix-en-provence, peinture reflechissante aix-en-provence, cool roof aix-en-provence',
};

export default function PeintureIsolanteAixEnProvencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Aix-en-Provence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution révolutionnaire de Groupe Expert Altitude Com pour protéger et optimiser thermiquement vos bâtiments à Aix-en-Provence : la peinture isolante thermique. Nos solutions innovantes permettent de réduire jusqu&apos;à 30% de vos dépenses énergétiques en un seul traitement.</p>

        <h2>Nos services de peinture isolante thermique a Aix-en-Provence</h2>
        <div className="space-y-4">
          <p>La peinture isolante thermique représente aujourd&apos;hui la technologie la plus performante pour améliorer l&apos;efficacité énergétique de vos toitures et façades. Notre expertise, développée spécifiquement pour le climat provençal, utilise des technologies comme Thermo Reflect qui créent une barrière réfléchissante contre la chaleur. Notre processus d&apos;application professionnelle garantit une protection durable et une réduction significative des températures intérieures. Chaque intervention est précédée d&apos;un diagnostic précis pour adapter la solution à votre bâtiment, qu&apos;il s&apos;agisse d&apos;une habitation, d&apos;un local commercial ou industriel à Aix-en-Provence.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nous nous distinguons par notre expertise technique unique, notre certification professionnelle et notre connaissance approfondie des spécificités climatiques locales. Notre équipe maîtrise parfaitement les techniques de pose, utilise uniquement des matériaux haute performance et propose des garanties jusqu&apos;à 10 ans. Nous intervenons rapidement et efficacement sur tout type de surface.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 45€ au m², selon la complexité de l&apos;application et le type de support. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 4500€, rapidement rentabilisé par les économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace : elle peut réduire jusqu&apos;à 40% des gains thermiques, diminuer la température de surface de 20°C et améliorer significativement le confort intérieur. Les technologies actuelles comme Thermo Reflect utilisent des pigments céramiques réfléchissants hautement performants.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite un nettoyage préalable, un traitement anti-mousse, un primaire d&apos;accrochage et une application en 2 couches croisées avec un rouleau ou un pistorage professionnel. La préparation et la technique sont essentielles pour garantir une protection optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Aix-en-Provence ?
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
