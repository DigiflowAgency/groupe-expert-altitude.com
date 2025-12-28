import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Bègles | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Bègles avec ses solutions de peinture innovantes. Spécialistes de la peinture isolante t',
  keywords: 'peinture isolante bègles, peinture thermique bègles, peinture isolante toiture bègles, thermo reflect bègles, peinture reflechissante bègles, cool roof bègles',
};

export default function PeintureIsolanteBeglesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Bègles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Bègles avec ses solutions de peinture innovantes. Spécialistes de la peinture isolante thermique, nous transformons vos bâtiments en espaces économes en énergie et confortables.</p>

        <h2>Nos services de peinture isolante thermique a Bègles</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la solution ultime pour améliorer l&apos;efficacité énergétique de vos locaux à Bègles. Utilisant des technologies de pointe comme le Thermo Reflect, nous appliquons des peintures réfléchissantes qui bloquent jusqu&apos;à 85% des rayons solaires. Cette technique unique permet de réduire la température intérieure de 5 à 10 degrés en été, diminuant significativement vos dépenses de climatisation. Notre processus comprend un diagnostic précis, une préparation de surface méticuleuse et l&apos;application de peintures certifiées, garantissant une performance thermique optimale pour toitures, façades et murs intérieurs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos techniciens sont certifiés avec plus de 15 ans d&apos;expérience. Nous proposons des solutions 100% personnalisées adaptées à chaque bâtiment de Bègles. Nos peintures isolantes bénéficient de garanties jusqu&apos;à 10 ans et sont conformes aux dernières normes environnementales. De plus, nos interventions permettent en moyenne 30% d&apos;économies sur les factures énergétiques.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 30€ et 70€ au m², selon la surface, la complexité et le type de support. Pour une toiture moyenne de 100m² à Bègles, comptez un investissement global entre 3000€ et 7000€, rapidement rentabilisé par les économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est très efficace : elle peut réduire jusqu&apos;à 40% des déperditions thermiques. Les peintures réfléchissantes comme le Thermo Reflect bloquent les rayonnements solaires, stabilisant la température intérieure et réduisant la consommation énergétique de 25% en moyenne.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application sur toiture requiert plusieurs étapes : nettoyage approfondi, réparation des éventuelles imperfections, application d&apos;un primaire d&apos;accrochage, puis deux couches de peinture réfléchissante. Il est crucial de travailler par températures comprises entre 10 et 30 degrés, avec une humidité inférieure à 70%.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Bègles ?
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
