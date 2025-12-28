import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Décines-Charpieu | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre la déperdition énergétique avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Décines-',
  keywords: 'peinture isolante décines-charpieu, peinture thermique décines-charpieu, peinture isolante toiture décines-charpieu, thermo reflect décines-charpieu, peinture reflechissante décines-charpieu, cool roof décines-charpieu',
};

export default function PeintureIsolanteDecinesCharpieuPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Décines-Charpieu</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre la déperdition énergétique avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Décines-Charpieu. Nos solutions innovantes vous permettent de réduire vos consommations énergétiques jusqu&apos;à 30% et de protéger efficacement vos bâtiments contre les variations de température.</p>

        <h2>Nos services de peinture isolante thermique a Décines-Charpieu</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la technologie de pointe en matière d&apos;isolation et de protection des surfaces. Spécialisés dans les techniques Thermo Reflect, nous proposons des solutions professionnelles qui transforment vos toitures, murs et façades en boucliers thermiques performants. Notre approche combine des produits haute technologie comme les peintures réfléchissantes cool roof avec une application précise et experte, garantissant une efficacité maximale. Nos interventions sur Décines-Charpieu et ses environs sont adaptées à chaque type de bâtiment, qu&apos;il s&apos;agisse d&apos;habitations individuelles, d&apos;immeubles collectifs ou de locaux professionnels.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique et un engagement total. Nos techniciens sont certifiés et maîtrisent parfaitement les dernières technologies d&apos;isolation thermique. Nous utilisons uniquement des matériaux de haute qualité, garantis 10 ans. Notre approche sur-mesure permet une économie moyenne de 25% sur vos factures énergétiques. De plus, nous intervenons rapidement sur tout le secteur de Décines-Charpieu avec un devis gratuit et détaillé.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la surface, le type de support et la technologie utilisée. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 6000€. Notre expertise permet d&apos;optimiser ce coût avec un retour sur investissement rapide grâce aux économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études montrent qu&apos;elle peut réduire jusqu&apos;à 40% de la chaleur absorbée, diminuant significativement les besoins en climatisation et chauffage. Les peintures réfléchissantes comme Thermo Reflect bloquent les rayonnements solaires et régulent la température intérieure de manière optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite plusieurs étapes : préparation et nettoyage approfondi du support, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis pose de 2 couches de peinture spécifique au rouleau ou par projection. Notre équipe professionnelle garantit une pose parfaite et durable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Décines-Charpieu ?
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
