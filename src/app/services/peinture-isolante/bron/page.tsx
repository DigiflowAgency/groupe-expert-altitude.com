import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Bron | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Bron avec ses solutions de peinture innovantes. Spécialistes de la peinture isolante thermi',
  keywords: 'peinture isolante bron, peinture thermique bron, peinture isolante toiture bron, thermo reflect bron, peinture reflechissante bron, cool roof bron',
};

export default function PeintureIsolanteBronPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Bron</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Bron avec ses solutions de peinture innovantes. Spécialistes de la peinture isolante thermique, nous transformons votre habitat en espace économe et confortable au cœur de la métropole lyonnaise.</p>

        <h2>Nos services de peinture isolante thermique a Bron</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la solution moderne pour optimiser l&apos;efficacité énergétique de vos bâtiments. Utilisant des technologies de pointe comme Thermo Reflect, nous appliquons des peintures réfléchissantes qui peuvent réduire jusqu&apos;à 30% des déperditions thermiques. Notre processus débute par un diagnostic précis des surfaces, suivi d&apos;une préparation minutieuse qui garantit une adhérence parfaite et une protection durable. Chaque intervention à Bron est personnalisée, en considérant l&apos;orientation, les matériaux et les spécificités architecturales de votre propriété.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nous nous distinguons par notre expertise technique, notre engagement qualité et notre connaissance approfondie des solutions thermiques locales. Nos techniciens sont certifiés, nos matériaux sélectionnés avec rigueur, et nous garantissons une intervention propre, rapide et efficace. Nous proposons également un suivi post-application et des conseils personnalisés pour maximiser les performances de votre isolation.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 50€ au m², selon la complexité de l&apos;application et le type de support. Pour une maison moyenne à Bron, comptez un investissement global entre 1500€ et 3500€, rapidement amorti par les économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent qu&apos;elle peut réduire jusqu&apos;à 15°C la température intérieure en été et limiter les déperditions de chaleur en hiver. L&apos;utilisation de pigments réfléchissants et de technologies comme Thermo Reflect garantit des performances thermiques significatives.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite plusieurs étapes : nettoyage approfondi, réparation des éventuels défauts, application d&apos;un primaire adapté, puis deux couches de peinture spécifique. Il est crucial de travailler par conditions météorologiques stables et de respecter les temps de séchage entre chaque couche.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Bron ?
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
