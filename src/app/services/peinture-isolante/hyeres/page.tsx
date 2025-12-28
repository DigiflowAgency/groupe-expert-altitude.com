import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Hyères | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre la chaleur à Hyères avec nos services de peinture isolante thermique. Groupe Expert Altitude Com vous propose une techn',
  keywords: 'peinture isolante hyères, peinture thermique hyères, peinture isolante toiture hyères, thermo reflect hyères, peinture reflechissante hyères, cool roof hyères',
};

export default function PeintureIsolanteHyeresPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Hyères</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre la chaleur à Hyères avec nos services de peinture isolante thermique. Groupe Expert Altitude Com vous propose une technologie innovante qui transforme vos toitures et murs en boucliers thermiques performants, adaptés au climat méditerranéen.</p>

        <h2>Nos services de peinture isolante thermique a Hyères</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la dernière génération de solutions énergétiques pour les bâtiments à Hyères. Utilisant des technologies comme Thermo Reflect, nous appliquons des revêtements spécialisés qui réfléchissent jusqu&apos;à 90% des rayons solaires. Cette technique unique permet de réduire la température intérieure de 5 à 10 degrés, diminuant significativement la consommation énergétique. Notre processus comprend une analyse précise de votre surface, une préparation méticuleuse et une application professionnelle garantissant une protection durable contre les fortes chaleurs provençales. Chaque intervention est personnalisée pour optimiser l&apos;isolation et l&apos;efficacité thermique de votre propriété.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Experts locaux avec plus de 15 ans d&apos;expérience à Hyères, nous maîtrisons parfaitement les techniques de peinture isolante. Nos techniciens sont certifiés et utilisent uniquement des matériaux de haute qualité. Nous proposons une garantie de 10 ans sur nos travaux et un diagnostic thermique gratuit avant intervention. Notre engagement : performance, économies d&apos;énergie et respect de l&apos;environnement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 20 et 45€ au m², selon la surface, l&apos;accessibilité et la technologie utilisée. Pour une toiture moyenne de 100m², comptez un investissement global entre 2000 et 4500€, rapidement amorti par les économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent une réduction jusqu&apos;à 35% des coûts de climatisation et une diminution des températures intérieures de 5 à 10 degrés. L&apos;effet réfléchissant bloque les rayonnements solaires, créant une barrière thermique naturelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante nécessite plusieurs étapes : nettoyage haute pression, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis deux couches de peinture Thermo Reflect avec des outils spécifiques. Un séchage de 24h est recommandé entre chaque couche pour une protection optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Hyères ?
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
