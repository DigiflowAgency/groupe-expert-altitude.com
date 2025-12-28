import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a L\'Union | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions thermiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante à L&apos;Union. Nous tra',
  keywords: 'peinture isolante l'union, peinture thermique l'union, peinture isolante toiture l'union, thermo reflect l'union, peinture reflechissante l'union, cool roof l'union',
};

export default function PeintureIsolanteLUnionPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a L'Union</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions thermiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante à L&apos;Union. Nous transformons vos bâtiments en véritables boucliers thermiques, garantissant un confort optimal et des économies d&apos;énergie significatives.</p>

        <h2>Nos services de peinture isolante thermique a L'Union</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la technologie de pointe en matière de protection et d&apos;efficacité énergétique. À L&apos;Union et ses environs, nous utilisons des revêtements haute performance comme le Thermo Reflect, qui réfléchit jusqu&apos;à 90% des rayons solaires. Cette peinture innovante agit comme un bouclier thermique, réduisant jusqu&apos;à 35% des déperditions calorifiques sur toitures et façades. Notre processus d&apos;application professionnelle comprend une préparation minutieuse des surfaces, un diagnostic thermique précis et l&apos;utilisation de techniques d&apos;application garantissant une protection durable et homogène.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Notre équipe certifiée maîtrise parfaitement les techniques de peinture isolante, avec plus de 15 ans d&apos;expérience. Nous proposons des solutions personnalisées, un diagnostic thermique gratuit et une garantie de résultats. Nos interventions sont rapides, précises et toujours conformes aux dernières normes environnementales.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 45€ au m², selon la complexité de la surface et le type de revêtement choisi. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 4500€, amortissable en 3 à 5 ans grâce aux économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études montrent une réduction jusqu&apos;à 15°C de la température intérieure en été et une diminution de 30% des déperditions thermiques en hiver. Sa technologie de micro-céramiques et de pigments réfléchissants garantit des performances durables.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite 4 étapes : nettoyage approfondi, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis pose de 2 couches de peinture Thermo Reflect avec un rouleau ou un pistolet professionnel. La préparation et la technique sont essentielles pour une isolation optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a L'Union ?
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
