import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Saint-Sébastien-sur-Loire | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions énergétiques avec le Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Sa',
  keywords: 'peinture isolante saint-sébastien-sur-loire, peinture thermique saint-sébastien-sur-loire, peinture isolante toiture saint-sébastien-sur-loire, thermo reflect saint-sébastien-sur-loire, peinture reflechissante saint-sébastien-sur-loire, cool roof saint-sébastien-sur-loire',
};

export default function PeintureIsolanteSaintSebastienSurLoirePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Saint-Sébastien-sur-Loire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions énergétiques avec le Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Saint-Sébastien-sur-Loire. Nos solutions innovantes transforment vos bâtiments en véritables boucliers thermiques, garantissant un confort optimal et des économies substantielles.</p>

        <h2>Nos services de peinture isolante thermique a Saint-Sébastien-sur-Loire</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la technologie de pointe en isolation énergétique. Utilisant des formulations high-tech comme Thermo Reflect, nous créons un bouclier réfléchissant qui régule efficacement la température intérieure. Nos experts réalisent un diagnostic précis de votre bâtiment à Saint-Sébastien-sur-Loire, identifiant les zones nécessitant un traitement. L&apos;application professionnelle permet de réduire jusqu&apos;à 30% des déperditions thermiques, améliorant significativement la performance énergétique. Nos techniques garantissent une protection durable contre les variations climatiques, avec une durée de vie moyenne de 10 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos techniciens sont certifiés avec plus de 15 ans d&apos;expérience. Nous proposons une approche personnalisée, des produits écologiques et une garantie de résultat. Notre maîtrise des techniques de cool roof et peinture réfléchissante nous distingue sur le marché local.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 45€ au m², selon la complexité de l&apos;application et le type de surface. Pour une maison moyenne de 100m², comptez un investissement global entre 2500€ et 4500€, rapidement rentabilisé par les économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent une réduction jusqu&apos;à 35% des déperditions thermiques. Son efficacité dépend de la qualité du produit, de la technique d&apos;application et de l&apos;état initial du support.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application sur toiture nécessite un nettoyage préalable, un primaire d&apos;accrochage et une application en 2 couches croisées avec un rouleau spécifique. La température idéale se situe entre 10°C et 25°C, et l&apos;humidité doit être inférieure à 70%.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Saint-Sébastien-sur-Loire ?
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
