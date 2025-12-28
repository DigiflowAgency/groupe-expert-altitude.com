import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Toulouse | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions énergétiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Toulo',
  keywords: 'peinture isolante toulouse, peinture thermique toulouse, peinture isolante toiture toulouse, thermo reflect toulouse, peinture reflechissante toulouse, cool roof toulouse',
};

export default function PeintureIsolanteToulousePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Toulouse</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions énergétiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Toulouse. Nos solutions innovantes transforment vos bâtiments en véritables boucliers thermiques, garantissant un confort optimal et des économies substantielles.</p>

        <h2>Nos services de peinture isolante thermique a Toulouse</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la technologie de pointe en matière d&apos;isolation et de protection énergétique. Spécialisés dans les techniques Thermo Reflect, nous proposons des solutions sur-mesure adaptées aux toitures, façades et surfaces industrielles de la région toulousaine. Notre approche combine des peintures réfléchissantes haute performance qui peuvent réduire jusqu&apos;à 30% des déperditions thermiques, tout en protégeant durablement vos infrastructures contre les variations climatiques. Nos techniciens experts utilisent des produits certifiés Cool Roof, appliqués avec une précision technique garantissant une efficacité maximale et une durabilité exceptionnelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique et l&apos;innovation. Nos avantages clés : 1) Une expertise locale de plus de 15 ans à Toulouse, 2) Des techniciens certifiés et formés aux dernières technologies d&apos;isolation, 3) Un diagnostic thermique gratuit avant intervention, 4) Des solutions personnalisées avec un rapport qualité-prix imbattable. Nous sommes votre partenaire confiance en isolation thermique.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 20€ et 50€ au m², selon la surface, le type de support et la technologie utilisée. Pour une toiture moyenne de 100m², comptez un investissement global entre 2000€ et 5000€, amortissable en 3 à 5 ans grâce aux économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent qu&apos;elle peut réduire jusqu&apos;à 40% des transferts thermiques, diminuer la température intérieure de 5 à 10°C en été et améliorer significativement la performance énergétique des bâtiments. L&apos;efficacité dépend de la qualité du produit et de son application professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite plusieurs étapes : 1) Nettoyage et préparation de surface, 2) Réparation des éventuels défauts, 3) Application d&apos;un primaire d&apos;accrochage, 4) Pose de 2 couches de peinture Thermo Reflect avec des outils professionnels, 5) Respect des conditions météorologiques optimales (température entre 10 et 30°C).
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Toulouse ?
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
