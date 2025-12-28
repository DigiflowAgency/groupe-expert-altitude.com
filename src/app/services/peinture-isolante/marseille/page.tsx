import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Marseille | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Marseille avec sa peinture isolante de dernière génération. Spécialistes de la rénovatio',
  keywords: 'peinture isolante marseille, peinture thermique marseille, peinture isolante toiture marseille, thermo reflect marseille, peinture reflechissante marseille, cool roof marseille',
};

export default function PeintureIsolanteMarseillePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Marseille</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Marseille avec sa peinture isolante de dernière génération. Spécialistes de la rénovation énergétique, nous transformons vos toitures et murs en boucliers thermiques performants pour un confort optimal.</p>

        <h2>Nos services de peinture isolante thermique a Marseille</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la solution ultime contre les déperditions énergétiques dans la région marseillaise. Utilisant des technologies innovantes comme Thermo Reflect, nous appliquons des revêtements haute performance qui réfléchissent jusqu&apos;à 90% des rayons solaires. Notre processus débute par un diagnostic précis de votre bâtiment, suivi d&apos;une préparation minutieuse des surfaces. Nos techniciens qualifiés utilisent des peintures spéciales qui créent une barrière thermique efficace, réduisant jusqu&apos;à 30% des coûts de climatisation et de chauffage. Adaptés aux toitures, façades et murs intérieurs, nos traitements garantissent une isolation durable et esthétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Expertise locale marseillaise, intervention rapide et précise. Techniciens certifiés avec plus de 15 ans d&apos;expérience. Matériaux écologiques et garantis 10 ans. Solutions sur-mesure adaptées à chaque type de bâtiment, avec un engagement qualité total. Devis gratuit et personnalisé sous 48h.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 45€ au m², selon la complexité de l&apos;application et le type de support. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 4500€, rapidement amorti par les économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études montrent une réduction jusqu&apos;à 15°C de la température surfacique et une diminution de 30% des déperditions thermiques. Notre technologie Thermo Reflect garantit une performance certifiée par des laboratoires indépendants.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante nécessite 4 étapes : nettoyage approfondi de la surface, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis pose de 2 couches de peinture spéciale avec un rouleau ou un pistolet professionnel. Nos techniciens réalisent une pose parfaitement étanche et homogène.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Marseille ?
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
