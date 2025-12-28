import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Cenon | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions thermiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante à Cenon. Nos soluti',
  keywords: 'peinture isolante cenon, peinture thermique cenon, peinture isolante toiture cenon, thermo reflect cenon, peinture reflechissante cenon, cool roof cenon',
};

export default function PeintureIsolanteCenonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Cenon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions thermiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante à Cenon. Nos solutions innovantes transforment vos bâtiments en véritables boucliers thermiques, garantissant un confort optimal et des économies substantielles.</p>

        <h2>Nos services de peinture isolante thermique a Cenon</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la technologie de pointe en matière d&apos;efficacité énergétique pour les particuliers et professionnels de Cenon et ses environs. Nous utilisons des techniques Thermo Reflect dernier cri qui réfléchissent jusqu&apos;à 90% des rayonnements solaires, créant une barrière thermique exceptionnelle. Notre processus débute par un diagnostic précis de vos surfaces, suivi d&apos;une préparation minutieuse qui assure une adhérence parfaite. Nos peintures spécialisées s&apos;appliquent sur toitures, façades et murs intérieurs, offrant une protection multicouche contre les variations de température. Les résultats sont immédiats : réduction jusqu&apos;à 30% des coûts de climatisation et de chauffage.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se démarque par son expertise technique unique. Nos techniciens sont certifiés et formés aux dernières innovations en isolation thermique. Nous garantissons une intervention rapide sur Cenon, un devis transparent sans surprise, et des produits écologiques respectant les normes environnementales les plus strictes. Notre engagement qualité se traduit par une garantie décennale sur nos travaux.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 50€ le m², selon la complexité de la surface et le type de support. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 5000€, rapidement amorti par les économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent qu&apos;elle peut réduire la température de surface jusqu&apos;à 20°C et diminuer les déperditions thermiques de 25-35%. Son efficacité dépend de la qualité du produit et de son application professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite plusieurs étapes : nettoyage approfondi, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis deux couches de peinture Thermo Reflect avec un rouleau spécial ou par projection. La préparation et la technique sont cruciales pour garantir une isolation optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Cenon ?
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
