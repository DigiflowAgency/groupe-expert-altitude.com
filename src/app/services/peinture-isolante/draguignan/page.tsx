import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Draguignan | Groupe Expert Altitude Com',
  description: 'Découvrez la solution innovante de peinture isolante thermique du Groupe Expert Altitude Com, votre partenaire de référence à Draguignan pour réduire vos d',
  keywords: 'peinture isolante draguignan, peinture thermique draguignan, peinture isolante toiture draguignan, thermo reflect draguignan, peinture reflechissante draguignan, cool roof draguignan',
};

export default function PeintureIsolanteDraguignanPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Draguignan</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution innovante de peinture isolante thermique du Groupe Expert Altitude Com, votre partenaire de référence à Draguignan pour réduire vos dépenses énergétiques. Nos solutions Thermo Reflect transforment vos toitures et murs en boucliers thermiques performants.</p>

        <h2>Nos services de peinture isolante thermique a Draguignan</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la technologie de pointe en isolation énergétique pour les habitations et bâtiments de la région de Draguignan. Nous utilisons des peintures réfléchissantes haute performance qui créent une barrière thermique intelligente, réduisant jusqu&apos;à 30% des déperditions de chaleur. Notre processus d&apos;application professionnelle garantit une protection durable contre les variations climatiques, en utilisant des produits certifiés Cool Roof qui réfléchissent jusqu&apos;à 85% des rayons solaires. Chaque intervention est précédée d&apos;un diagnostic précis pour adapter la solution technique à vos besoins spécifiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Experts locaux avec plus de 15 ans d&apos;expérience en isolation thermique. Nos techniciens sont certifiés et formés aux dernières technologies Thermo Reflect. Devis gratuit et personnalisé sous 48h. Interventions rapides et professionnelles sur tout le Var. Garantie de performance énergétique et esthétique.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 45€ au m², selon la surface, l&apos;état du support et la technologie utilisée. Pour une toiture moyenne de 100m², comptez un investissement entre 2500€ et 4500€, amortissable en 3 à 5 ans par les économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace : elle réduit jusqu&apos;à 40% des déperditions thermiques, régule la température intérieure et diminue la consommation énergétique. Les produits Thermo Reflect sont certifiés par des laboratoires indépendants et offrent une performance mesurable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite plusieurs étapes : nettoyage et préparation de surface, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis deux couches de peinture spécifique avec des outils professionnels. Notre équipe garantit une pose parfaite et durable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Draguignan ?
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
