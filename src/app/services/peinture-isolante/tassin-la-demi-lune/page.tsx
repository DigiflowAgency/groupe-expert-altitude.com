import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Tassin-la-Demi-Lune | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions thermiques avec Groupe Expert Altitude Com, votre partenaire spécialiste en peinture isolante thermiqu',
  keywords: 'peinture isolante tassin-la-demi-lune, peinture thermique tassin-la-demi-lune, peinture isolante toiture tassin-la-demi-lune, thermo reflect tassin-la-demi-lune, peinture reflechissante tassin-la-demi-lune, cool roof tassin-la-demi-lune',
};

export default function PeintureIsolanteTassinLaDemiLunePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Tassin-la-Demi-Lune</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions thermiques avec Groupe Expert Altitude Com, votre partenaire spécialiste en peinture isolante thermique à Tassin-la-Demi-Lune. Nos techniques innovantes transforment vos toitures et murs en boucliers thermiques performants, garantissant confort et économies d&apos;énergie.</p>

        <h2>Nos services de peinture isolante thermique a Tassin-la-Demi-Lune</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la technologie de pointe en isolation. Nous utilisons des revêtements haute performance comme le Thermo Reflect, qui réfléchit jusqu&apos;à 90% des rayons solaires, réduisant significativement la température intérieure. Pour les toitures de Tassin-la-Demi-Lune, notre application professionnelle permet de diminuer jusqu&apos;à 15°C la chaleur accumulée, améliorant l&apos;efficacité énergétique de votre bâtiment. Notre processus comprend un diagnostic précis, une préparation de surface méticuleuse et une application par des techniciens certifiés, garantissant une protection durable et une performance thermique optimale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Expertise locale depuis 15 ans, techniciens certifiés, matériaux de haute qualité, devis personnalisé gratuit. Nous maîtrisons parfaitement les techniques de peinture isolante et cool roof, avec un engagement qualité total. Notre connaissance du climat de Tassin-la-Demi-Lune nous permet de proposer des solutions sur-mesure.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 20€ et 50€ au m², selon la superficie, l&apos;accessibilité et le type de support. Pour une toiture moyenne de 100m², comptez un investissement entre 2000€ et 5000€, rapidement rentabilisé par les économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est très efficace : elle peut réduire jusqu&apos;à 35% des déperditions thermiques, améliorer le confort intérieur et diminuer la consommation énergétique. Les technologies comme Thermo Reflect offrent une réflectivité solaire supérieure à 80%, prouvant scientifiquement son efficacité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application sur toiture nécessite : un nettoyage approfondi, une réparation des éventuelles imperfections, un primaire d&apos;accrochage, puis 2 couches de peinture réfléchissante appliquées uniformément avec du matériel professionnel. La préparation et la technique sont cruciales pour garantir une isolation optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Tassin-la-Demi-Lune ?
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
