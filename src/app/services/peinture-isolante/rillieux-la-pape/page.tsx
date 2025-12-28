import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Rillieux-la-Pape | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions thermiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante à Rillieux-la-Pape.',
  keywords: 'peinture isolante rillieux-la-pape, peinture thermique rillieux-la-pape, peinture isolante toiture rillieux-la-pape, thermo reflect rillieux-la-pape, peinture reflechissante rillieux-la-pape, cool roof rillieux-la-pape',
};

export default function PeintureIsolanteRillieuxLaPapePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Rillieux-la-Pape</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions thermiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante à Rillieux-la-Pape. Nos solutions innovantes transforment vos bâtiments en véritables boucliers thermiques, garantissant confort et économies d&apos;énergie.</p>

        <h2>Nos services de peinture isolante thermique a Rillieux-la-Pape</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la technologie de pointe en matière de rénovation énergétique. Nous utilisons des solutions haut de gamme comme Thermo Reflect, une peinture réfléchissante qui peut réduire jusqu&apos;à 30% des déperditions thermiques. Notre processus comprend un diagnostic précis, une préparation minutieuse des surfaces et l&apos;application de produits certifiés, adaptés à chaque type de support - toiture, murs extérieurs ou intérieurs. Pour les habitants de Rillieux-la-Pape, nous proposons une approche sur-mesure qui prend en compte l&apos;architecture spécifique de votre bâtiment et ses enjeux thermiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Expertise locale reconnue, techniciens certifiés, solutions 100% personnalisées. Nous maîtrisons parfaitement les techniques de peinture isolante et cool roof. Notre engagement : performance thermique garantie, devis transparent, intervention rapide sur Rillieux-la-Pape et ses environs. Plus de 15 ans d&apos;expérience dans l&apos;isolation thermique par peinture.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la complexité du support et la technologie utilisée. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 6000€, amortissable en 3 à 5 ans grâce aux économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est très efficace : elle peut réduire jusqu&apos;à 35% des déperditions thermiques, stabiliser la température intérieure et prolonger la durée de vie des supports. Son efficacité dépend de la qualité du produit, de la préparation et de l&apos;application professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite : un nettoyage approfondi, un traitement anti-mousse, un primaire d&apos;accrochage, puis l&apos;application de 2 couches de peinture Thermo Reflect avec un rouleau ou un pistolet haute pression. Une intervention de professionnels est recommandée pour garantir un résultat optimal.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Rillieux-la-Pape ?
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
