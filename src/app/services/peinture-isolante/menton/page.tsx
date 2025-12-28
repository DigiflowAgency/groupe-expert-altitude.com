import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Menton | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions thermiques avec le Groupe Expert Altitude Com, votre spécialiste en peinture isolante à Menton. Nous t',
  keywords: 'peinture isolante menton, peinture thermique menton, peinture isolante toiture menton, thermo reflect menton, peinture reflechissante menton, cool roof menton',
};

export default function PeintureIsolanteMentonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Menton</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions thermiques avec le Groupe Expert Altitude Com, votre spécialiste en peinture isolante à Menton. Nous transformons vos bâtiments en véritables boucliers thermiques, garantissant un confort optimal et des économies d&apos;énergie significatives.</p>

        <h2>Nos services de peinture isolante thermique a Menton</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la technologie de pointe en matière d&apos;isolation et de protection des surfaces. Spécialement conçue pour les environnements méditerranéens comme Menton, notre peinture Thermo Reflect offre une solution innovante contre la chaleur et le froid. Nos produits haute performance réfléchissent jusqu&apos;à 90% des rayons solaires, réduisant la température intérieure de 5 à 7 degrés. Le processus d&apos;application comprend un diagnostic précis, une préparation de surface méticuleuse et l&apos;utilisation de revêtements techniques qui s&apos;adaptent parfaitement aux toitures, façades et murs extérieurs. Notre expertise garantit une isolation durable et une protection contre les variations climatiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés et maîtrisent parfaitement les techniques de peinture isolante. Nous utilisons uniquement des matériaux écologiques et homologués. Notre intervention sur Menton est rapide, précise et totalement personnalisée. Nous garantissons une amélioration immédiate du confort thermique et une réduction pouvant atteindre 30% de vos factures énergétiques.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la surface, l&apos;accessibilité et le type de support. Pour une toiture moyenne de 100m² à Menton, comptez un investissement global entre 2500€ et 6000€, amortissable en 3 à 5 ans grâce aux économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est très efficace, avec des performances prouvées scientifiquement. Les revêtements Thermo Reflect réduisent jusqu&apos;à 40% des déperditions thermiques et améliorent significativement l&apos;isolation. Les tests indépendants démontrent une baisse constante des températures intérieures et une protection renforcée contre les chocs thermiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite 4 étapes : 1) Nettoyage et décapage complet de la surface, 2) Réparation des éventuelles imperfections, 3) Application d&apos;un primaire d&apos;accrochage, 4) Pose de 2 couches de peinture isolante avec un rouleau ou un pistorage professionnel. La préparation et la technique sont essentielles pour garantir une isolation optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Menton ?
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
