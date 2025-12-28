import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Courbevoie | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Courbevoie avec ses solutions de peinture isolante de dernière génération. Nos technolog',
  keywords: 'peinture isolante courbevoie, peinture thermique courbevoie, peinture isolante toiture courbevoie, thermo reflect courbevoie, peinture reflechissante courbevoie, cool roof courbevoie',
};

export default function PeintureIsolanteCourbevoiePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Courbevoie</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Courbevoie avec ses solutions de peinture isolante de dernière génération. Nos technologies innovantes permettent aux propriétaires et entreprises locales de réduire significativement leurs dépenses énergétiques grâce à des solutions sur mesure.</p>

        <h2>Nos services de peinture isolante thermique a Courbevoie</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la solution ultime pour optimiser le confort et l&apos;efficacité énergétique de vos bâtiments. Utilisant des technologies Thermo Reflect de pointe, nous appliquons des revêtements spécialement conçus qui réfléchissent jusqu&apos;à 85% des rayons solaires, réduisant considérablement la chaleur absorbée. Notre processus débute par un diagnostic précis de votre toiture ou façade, suivi d&apos;une préparation minutieuse des surfaces pour garantir une adhérence et une performance maximales. Chaque intervention à Courbevoie est personnalisée, en prenant en compte l&apos;exposition, les matériaux et les spécificités architecturales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Experts certifiés avec plus de 15 ans d&apos;expérience en isolation thermique
- Technologies Cool Roof brevetées réduisant jusqu&apos;à 30% des coûts énergétiques
- Interventions rapides et précises sur Courbevoie et ses environs
- Garantie décennale et matériaux de haute qualité</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la complexité de l&apos;application, les matériaux utilisés et la surface à traiter. Un investissement qui permet des économies allant jusqu&apos;à 35% sur les factures énergétiques à long terme.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée très efficace. Des études montrent qu&apos;elle peut réduire la température de surface jusqu&apos;à 20°C, diminuer la consommation énergétique et prolonger la durée de vie des toitures et façades.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante nécessite : un nettoyage approfondi de la surface, une réparation des éventuels défauts, l&apos;utilisation de primaires adaptés, puis l&apos;application en 2 couches croisées avec du matériel professionnel. Un séchage de 24h est recommandé entre chaque couche.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Courbevoie ?
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
