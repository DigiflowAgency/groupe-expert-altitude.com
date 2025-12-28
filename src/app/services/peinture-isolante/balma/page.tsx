import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Balma | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions énergétiques avec le Groupe Expert Altitude Com, spécialiste de la peinture isolante thermique à Balma',
  keywords: 'peinture isolante balma, peinture thermique balma, peinture isolante toiture balma, thermo reflect balma, peinture reflechissante balma, cool roof balma',
};

export default function PeintureIsolanteBalmaPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Balma</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions énergétiques avec le Groupe Expert Altitude Com, spécialiste de la peinture isolante thermique à Balma. Nos solutions innovantes transforment votre habitat en un bouclier thermique performant et économique.</p>

        <h2>Nos services de peinture isolante thermique a Balma</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la technologie de pointe en isolation énergétique pour les habitations et bâtiments de Balma et ses environs. Nous utilisons des peintures réfléchissantes de dernière génération comme Thermo Reflect, qui peuvent réduire jusqu&apos;à 30% des déperditions thermiques. Notre processus débute par un diagnostic précis de votre toiture ou façade, suivi d&apos;une préparation minutieuse des surfaces. L&apos;application est réalisée par nos techniciens experts, garantissant une isolation optimale et une protection durable contre les variations de température. Ces peintures innovantes agissent comme un véritable bouclier thermique, régulant la température intérieure et réduisant significativement vos consommations énergétiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos équipes sont certifiées et formées aux dernières technologies d&apos;isolation thermique. Nous proposons des solutions personnalisées, un devis gratuit et une garantie de performance. Notre connaissance approfondie du marché local de Balma nous permet de proposer des solutions parfaitement adaptées à votre environnement. Nous garantissons une intervention rapide, professionnelle et un résultat qui allie esthétique et efficacité énergétique.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 50€ le m², selon la surface, l&apos;accessibilité et la technologie utilisée. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 5000€, rapidement rentabilisé par les économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Les études démontrent qu&apos;elle peut réduire jusqu&apos;à 35% des déperditions thermiques, stabiliser la température intérieure et diminuer la consommation énergétique de 20 à 25%. Son efficacité dépend de la qualité du produit et de son application professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite plusieurs étapes : nettoyage et préparation de la surface, réparation des éventuels défauts, application d&apos;un primaire adapté, puis pose de 2 couches de peinture Thermo Reflect avec un outillage spécifique. La température et l&apos;humidité doivent être contrôlées pour garantir une pose optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Balma ?
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
