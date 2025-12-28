import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Saint-Nazaire | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions énergétiques avec notre peinture isolante thermique à Saint-Nazaire. Groupe Expert Altitude Com vous p',
  keywords: 'peinture isolante saint-nazaire, peinture thermique saint-nazaire, peinture isolante toiture saint-nazaire, thermo reflect saint-nazaire, peinture reflechissante saint-nazaire, cool roof saint-nazaire',
};

export default function PeintureIsolanteSaintNazairePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Saint-Nazaire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions énergétiques avec notre peinture isolante thermique à Saint-Nazaire. Groupe Expert Altitude Com vous propose une technologie innovante qui transforme vos murs et toitures en boucliers thermiques performants.</p>

        <h2>Nos services de peinture isolante thermique a Saint-Nazaire</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique répond aux défis énergétiques des habitations et bâtiments à Saint-Nazaire. Utilisant des technologies de pointe comme Thermo Reflect, nous appliquons des revêtements réfléchissants qui réduisent jusqu&apos;à 30% des déperditions thermiques. Notre processus comprend un diagnostic précis, une préparation de surface méticuleuse et l&apos;application de peintures spécialement conçues pour maximiser l&apos;isolation. Ces solutions permettent non seulement de réduire significativement vos factures énergétiques mais aussi d&apos;améliorer le confort thermique de votre habitat toute l&apos;année.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Experts locaux depuis plus de 15 ans, nous maîtrisons parfaitement les techniques d&apos;isolation spécifiques à la région de Saint-Nazaire. Nos techniciens sont certifiés et utilisent uniquement des matériaux de haute qualité. Nous garantissons une intervention rapide, un devis transparent et des résultats mesurables en termes de performance énergétique.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la superficie, la complexité du support et la technologie utilisée. Pour une toiture moyenne de 100m², comptez entre 2500€ et 6000€, mais l&apos;investissement est rapidement amorti par les économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent qu&apos;elle peut réduire jusqu&apos;à 35% des transferts thermiques, grâce à ses propriétés réfléchissantes et son pouvoir isolant. Les peintures comme Thermo Reflect bloquent les rayonnements solaires et régulent la température intérieure.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite plusieurs étapes : nettoyage et préparation de surface, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis deux couches de peinture spécifique avec un rouleau ou un pistorage professionnel. Une préparation et une application rigoureuses sont essentielles pour garantir l&apos;efficacité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Saint-Nazaire ?
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
