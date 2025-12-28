import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Tournefeuille | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions énergétiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Tourn',
  keywords: 'peinture isolante tournefeuille, peinture thermique tournefeuille, peinture isolante toiture tournefeuille, thermo reflect tournefeuille, peinture reflechissante tournefeuille, cool roof tournefeuille',
};

export default function PeintureIsolanteTournefeuillePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Tournefeuille</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions énergétiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Tournefeuille. Nos solutions innovantes transforment vos bâtiments en boucliers thermiques, réduisant significativement vos consommations d&apos;énergie.</p>

        <h2>Nos services de peinture isolante thermique a Tournefeuille</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la technologie de pointe en isolation. Nous utilisons des revêtements haute performance comme le Thermo Reflect, qui réfléchit jusqu&apos;à 90% des rayonnements solaires. Cette technique révolutionnaire permet de réguler efficacement la température intérieure, créant un environnement plus confortable et économe. Notre expertise, développée spécifiquement pour les habitations de Tournefeuille et ses environs, garantit une application précise et durable. Nos professionnels réalisent un diagnostic thermique complet avant intervention, assurant une solution sur-mesure qui répond parfaitement aux caractéristiques de votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés et maîtrisent les dernières technologies de peinture isolante. Nous proposons des garanties jusqu&apos;à 10 ans, un diagnostic thermique gratuit et une intervention rapide sur Tournefeuille. Notre engagement qualité fait la différence : économies d&apos;énergie assurées et performance thermique optimale.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 50€ au m², selon la surface, l&apos;accessibilité et le type de support. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 5000€, rapidement rentabilisé par les économies d&apos;énergie estimées à 30% sur vos factures.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent qu&apos;elle peut réduire jusqu&apos;à 15°C la température intérieure en été et améliorer l&apos;isolation thermique de 20% en hiver. Son pouvoir réfléchissant et ses propriétés techniques en font un investissement écologique et économique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite 4 étapes : nettoyage et préparation de la surface, application d&apos;un primaire d&apos;accrochage, pose de 2 couches de peinture Thermo Reflect avec rouleau ou pistolet, et contrôle final de l&apos;uniformité. Notre équipe garantit une pose professionnelle et durable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Tournefeuille ?
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
