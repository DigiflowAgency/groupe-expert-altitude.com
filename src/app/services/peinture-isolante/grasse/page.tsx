import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Grasse | Groupe Expert Altitude Com',
  description: 'Dans le climat provençal de Grasse, la peinture isolante thermique devient un bouclier essentiel pour protéger votre habitat contre les variations de tempé',
  keywords: 'peinture isolante grasse, peinture thermique grasse, peinture isolante toiture grasse, thermo reflect grasse, peinture reflechissante grasse, cool roof grasse',
};

export default function PeintureIsolanteGrassePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Grasse</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Dans le climat provençal de Grasse, la peinture isolante thermique devient un bouclier essentiel pour protéger votre habitat contre les variations de température. Le Groupe Expert Altitude Com propose des solutions innovantes qui transforment vos murs et toitures en rempart thermique performant.</p>

        <h2>Nos services de peinture isolante thermique a Grasse</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la dernière génération de protection thermique, spécialement conçue pour les habitations de la région grassoise. Nous utilisons des technologies comme Thermo Reflect qui réfléchissent jusqu&apos;à 85% des rayons solaires, réduisant significativement la chaleur absorbée. Notre processus comprend un diagnostic précis, un traitement préparatoire des surfaces et l&apos;application de peintures réfléchissantes certifiées, garantissant une isolation optimale été comme hiver. Les propriétés thermorégulatrices permettent de diminuer jusqu&apos;à 30% vos dépenses énergétiques, tout en préservant l&apos;esthétique de votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Experts locaux depuis plus de 15 ans, nous maîtrisons les spécificités climatiques de Grasse. Notre équipe est certifiée et formée aux dernières technologies d&apos;isolation thermique. Nous proposons un diagnostic personnalisé, des matériaux de haute qualité et une garantie de performance. Nos interventions sont rapides, précises et respectueuses de l&apos;environnement provençal.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 45€ au m², selon la complexité de la surface, le type de support et la technologie utilisée. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 4500€, rapidement rentabilisé par les économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Les revêtements haute performance comme Thermo Reflect peuvent réduire la température de surface jusqu&apos;à 20°C, diminuant significativement la chaleur transmise à l&apos;intérieur. Des études indépendantes démontrent des économies énergétiques de 15 à 35% selon les configurations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite plusieurs étapes : nettoyage et préparation de la surface, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis deux couches de peinture réfléchissante avec des outils professionnels. La technique requiert une préparation méticuleuse et un séchage contrôlé pour garantir une parfaite adhérence et efficacité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Grasse ?
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
