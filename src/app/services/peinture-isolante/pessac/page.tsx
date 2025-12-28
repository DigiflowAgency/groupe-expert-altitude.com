import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Pessac | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions énergétiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Pessa',
  keywords: 'peinture isolante pessac, peinture thermique pessac, peinture isolante toiture pessac, thermo reflect pessac, peinture reflechissante pessac, cool roof pessac',
};

export default function PeintureIsolantePessacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Pessac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions énergétiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Pessac. Nos solutions innovantes transforment vos bâtiments en véritables boucliers thermiques, garantissant confort et économies.</p>

        <h2>Nos services de peinture isolante thermique a Pessac</h2>
        <div className="space-y-4">
          <p>La peinture isolante thermique représente aujourd&apos;hui la technologie de pointe en matière de protection et d&apos;efficacité énergétique. Notre équipe de professionnels à Pessac utilise des produits haute performance comme Thermo Reflect, qui réfléchit jusqu&apos;à 85% des rayons solaires. Cette peinture spéciale agit comme un véritable bouclier, réduisant la température intérieure de 5 à 7°C en été et limitant les déperditions de chaleur en hiver. Notre processus d&apos;application comprend un diagnostic précis, une préparation minutieuse des surfaces et une application professionnelle qui garantit une durabilité maximale. Chaque intervention est personnalisée selon la structure du bâtiment, qu&apos;il s&apos;agisse d&apos;une toiture, d&apos;une façade ou d&apos;un mur intérieur.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se démarque par son expertise technique unique. Nos techniciens sont certifiés et formés aux dernières technologies de peinture isolante. Nous proposons une garantie de performance de 10 ans, utilisons uniquement des matériaux écologiques et notre intervention permet en moyenne 30% d&apos;économies sur les factures énergétiques. Notre connaissance approfondie du climat girondin nous permet d&apos;adapter précisément nos solutions.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 30€ et 80€ par m², selon la complexité de l&apos;application et le type de support. Pour une toiture moyenne de 100m², comptez un investissement global entre 3000€ et 6000€, rapidement rentabilisé par les économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent qu&apos;elle peut réduire jusqu&apos;à 40% des déperditions thermiques et abaisser la température intérieure de plusieurs degrés. Son efficacité dépend de la qualité du produit et de la pose, ce qui est notre garantie professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite plusieurs étapes : nettoyage et préparation de surface, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis pose de la peinture en 2 à 3 couches avec des outils professionnels. Notre équipe maîtrise parfaitement ce processus technique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Pessac ?
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
