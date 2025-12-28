import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Antibes | Groupe Expert Altitude Com',
  description: 'Sur la Côte d&apos;Azur, Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Antibes avec ses solutions de peinture isolante innovantes. Nos techniq',
  keywords: 'peinture isolante antibes, peinture thermique antibes, peinture isolante toiture antibes, thermo reflect antibes, peinture reflechissante antibes, cool roof antibes',
};

export default function PeintureIsolanteAntibesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Antibes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Sur la Côte d&apos;Azur, Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Antibes avec ses solutions de peinture isolante innovantes. Nos techniques de peinture réfléchissante permettent de réduire jusqu&apos;à 30% des déperditions énergétiques pour les habitations et professionnels de la région.</p>

        <h2>Nos services de peinture isolante thermique a Antibes</h2>
        <div className="space-y-4">
          <p>La peinture isolante thermique représente aujourd&apos;hui la solution moderne et écologique pour optimiser le confort thermique de votre bâtiment. Notre technique spécialisée Thermo Reflect utilise des pigments haute technologie qui réfléchissent les rayonnements solaires, créant une barrière thermique efficace. Pour les toitures d&apos;Antibes et ses environs, nous proposons des applications spécifiques qui diminuent la température intérieure jusqu&apos;à 7°C en période estivale. Notre processus comprend une préparation minutieuse des surfaces, l&apos;application de primaires techniques et de peintures spéciales garantissant une isolation performante et durable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Experts locaux depuis 15 ans, nous maîtrisons parfaitement les spécificités climatiques d&apos;Antibes. Notre équipe certifiée intervient avec un matériel de haute précision. Nous garantissons une intervention rapide, un devis personnalisé sous 48h et une efficacité énergétique immédiate. Nos solutions sont éco-responsables et conformes aux dernières normes environnementales.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût moyen d&apos;une peinture isolante thermique varie entre 25€ et 45€ au m², selon la complexité de la surface et le type de support. Pour une toiture moyenne de 100m², nous proposons des forfaits compétitifs allant de 2500€ à 4500€, matériel et main-d&apos;œuvre compris.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent qu&apos;elle peut réduire jusqu&apos;à 35% des déperditions thermiques, diminuer la consommation énergétique et améliorer le confort intérieur. Les peintures Thermo Reflect possèdent un indice de réflexion solaire supérieur à 80%.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application sur toiture requiert plusieurs étapes : nettoyage approfondi, réparation des éventuelles imperfections, application d&apos;un primaire d&apos;accrochage, puis pose de la peinture réfléchissante en 2 couches croisées. Notre équipe utilise du matériel professionnel garantissant une application uniforme et durable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Antibes ?
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
