import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Marignane | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Marignane avec ses solutions de peinture innovantes. Spécialistes de la peinture isolant',
  keywords: 'peinture isolante marignane, peinture thermique marignane, peinture isolante toiture marignane, thermo reflect marignane, peinture reflechissante marignane, cool roof marignane',
};

export default function PeintureIsolanteMarignanePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Marignane</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Marignane avec ses solutions de peinture innovantes. Spécialistes de la peinture isolante thermique, nous transformons vos bâtiments en espaces économes en énergie et parfaitement protégés.</p>

        <h2>Nos services de peinture isolante thermique a Marignane</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la solution ultime contre les déperditions énergétiques pour les habitations et professionnels de Marignane et ses environs. Nous utilisons des technologies de pointe comme le Thermo Reflect, une peinture réfléchissante capable de réduire jusqu&apos;à 30% des coûts de climatisation et de chauffage. Notre processus débute par un diagnostic thermique précis, permettant d&apos;identifier les zones nécessitant un traitement. Nos techniciens appliquent ensuite une peinture isolante spécialement conçue, garantissant une protection multicouche contre les variations de température et l&apos;usure climatique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Expertise locale depuis 15 ans, techniciens certifiés, solutions 100% personnalisées. Nous maîtrisons parfaitement les techniques de peinture isolante pour toitures, façades et surfaces industrielles. Notre engagement qualité se traduit par des interventions rapides, un diagnostic gratuit et des matériaux de haute performance.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 45€ au m², selon la surface, le type de support et la technologie utilisée. Pour une maison moyenne à Marignane, comptez un investissement global entre 1500€ et 3500€, rapidement amorti par les économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace, avec des capacités de réflexion thermique atteignant 80% du rayonnement solaire. Des études démontrent des réductions de température jusqu&apos;à 15°C en surface et une baisse significative de la consommation énergétique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite un nettoyage préalable, un primaire d&apos;accrochage, puis 2 couches de peinture Thermo Reflect. La pose requiert des conditions météorologiques stables, une température entre 10-30°C et une surface parfaitement sèche.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Marignane ?
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
