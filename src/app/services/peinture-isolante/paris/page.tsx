import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Paris | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions énergétiques avec le Groupe Expert Altitude Com, spécialiste de la peinture isolante thermique à Paris',
  keywords: 'peinture isolante paris, peinture thermique paris, peinture isolante toiture paris, thermo reflect paris, peinture reflechissante paris, cool roof paris',
};

export default function PeintureIsolanteParisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Paris</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions énergétiques avec le Groupe Expert Altitude Com, spécialiste de la peinture isolante thermique à Paris. Nos solutions innovantes transforment vos toitures et murs en boucliers thermiques, garantissant un confort optimal et des économies substantielles.</p>

        <h2>Nos services de peinture isolante thermique a Paris</h2>
        <div className="space-y-4">
          <p>La peinture isolante thermique révolutionne la protection thermique des bâtiments parisiens. Notre technologie Thermo Reflect permet de réduire jusqu&apos;à 30% des pertes énergétiques grâce à un revêtement haute performance. Nos experts appliquent une peinture réfléchissante multicouche qui agit comme un bouclier thermique, régulant la température intérieure été comme hiver. Le processus comprend un diagnostic précis, une préparation de surface méticuleuse et une application professionnelle qui garantit une durabilité de 10 à 15 ans. Chaque intervention est personnalisée, en respectant les spécificités architecturales parisiennes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se démarque par son expertise technique unique. Nos techniciens sont certifiés et formés aux dernières innovations en isolation thermique. Nous proposons un devis gratuit sous 48h, une intervention rapide et un suivi personnalisé. Nos solutions sont écologiques, avec des peintures labellisées et une réduction moyenne de 40% des émissions carbone. Nous sommes également référencés par les principales assurances et mutuelles.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 35€ et 75€ au m², selon la surface, l&apos;accessibilité et la technologie utilisée. Pour une toiture moyenne à Paris, comptez un investissement global entre 1500€ et 3500€, rapidement rentabilisé par les économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études montrent une réduction jusqu&apos;à 25% des déperditions thermiques. La technologie réfléchissante permet de diminuer la température de surface de 20°C, améliorant significativement le confort et les performances énergétiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite 4 étapes : nettoyage haute pression, réparation des supports, application d&apos;un primaire d&apos;accrochage, puis pose de 2 à 3 couches de peinture spécifique. Notre équipe utilise du matériel professionnel et respecte les normes techniques strictes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Paris ?
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
