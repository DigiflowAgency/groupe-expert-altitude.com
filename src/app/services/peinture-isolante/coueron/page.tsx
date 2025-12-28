import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Couëron | Groupe Expert Altitude Com',
  description: 'Découvrez la solution révolutionnaire de peinture isolante thermique par Groupe Expert Altitude Com, votre partenaire local à Couëron pour optimiser le con',
  keywords: 'peinture isolante couëron, peinture thermique couëron, peinture isolante toiture couëron, thermo reflect couëron, peinture reflechissante couëron, cool roof couëron',
};

export default function PeintureIsolanteCoueronPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Couëron</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution révolutionnaire de peinture isolante thermique par Groupe Expert Altitude Com, votre partenaire local à Couëron pour optimiser le confort énergétique de votre habitat. Nos solutions innovantes transforment vos toitures et murs en boucliers thermiques performants.</p>

        <h2>Nos services de peinture isolante thermique a Couëron</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente l&apos;alliance parfaite entre technologie de pointe et expertise locale. À Couëron et ses environs, nous proposons des solutions Thermo Reflect qui réduisent jusqu&apos;à 30% des déperditions thermiques. Notre processus débute par un diagnostic précis de votre bâtiment, suivi d&apos;une préparation minutieuse des surfaces. Nos peintures réfléchissantes haute performance créent une barrière thermique qui régule efficacement la température intérieure, protégeant votre habitat contre la chaleur estivale et le froid hivernal. Chaque application est personnalisée, garantissant une efficacité maximale et une durabilité exceptionnelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son expertise locale unique. Nos techniciens sont certifiés et maîtrisent parfaitement les techniques de peinture isolante. Nous utilisons uniquement des matériaux de haute qualité, garantissant une performance thermique supérieure. Notre connaissance approfondie du climat de Couëron nous permet d&apos;adapter précisément nos solutions. De plus, nous proposons un suivi personnalisé et des garanties complètes sur nos interventions.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 20€ et 50€ au m², selon la surface, l&apos;accessibilité et le type de support. Pour une toiture moyenne de 100m², comptez un investissement global entre 2000€ et 5000€. Notre devis gratuit vous permettra d&apos;obtenir un tarif précis adapté à votre projet spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est très efficace, avec des performances prouvées scientifiquement. Elle peut réduire jusqu&apos;à 35% des déperditions thermiques, améliorer le confort intérieur et générer des économies significatives sur vos factures énergétiques. Les technologies comme Thermo Reflect offrent une réflectivité solaire supérieure à 80%.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite plusieurs étapes : nettoyage et préparation de la surface, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis deux couches de peinture spécifique avec des outils professionnels. Notre équipe garantit une pose parfaite et durable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Couëron ?
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
