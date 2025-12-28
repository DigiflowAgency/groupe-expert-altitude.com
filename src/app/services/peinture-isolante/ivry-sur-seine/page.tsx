import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Ivry-sur-Seine | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions thermiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Ivry-su',
  keywords: 'peinture isolante ivry-sur-seine, peinture thermique ivry-sur-seine, peinture isolante toiture ivry-sur-seine, thermo reflect ivry-sur-seine, peinture reflechissante ivry-sur-seine, cool roof ivry-sur-seine',
};

export default function PeintureIsolanteIvrySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Ivry-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions thermiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Ivry-sur-Seine. Nous transformons vos bâtiments en véritables boucliers énergétiques grâce à des technologies de pointe.</p>

        <h2>Nos services de peinture isolante thermique a Ivry-sur-Seine</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la solution innovante pour améliorer le confort et les performances énergétiques de vos espaces. Nous utilisons des technologies Thermo Reflect de dernière génération qui réfléchissent jusqu&apos;à 85% des rayons solaires, créant une barrière thermique exceptionnelle. Sur les toitures d&apos;Ivry-sur-Seine, nos applications permettent de réduire jusqu&apos;à 30% des coûts de climatisation et de chauffage. Notre processus débute par un diagnostic précis, suivi d&apos;une préparation de surface rigoureuse et d&apos;une application professionnelle garantissant une isolation optimale et durable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Experts locaux avec plus de 15 ans d&apos;expérience, nous maîtrisons parfaitement les techniques d&apos;isolation thermique. Notre équipe certifiée intervient rapidement sur Ivry-sur-Seine et ses environs. Nous proposons des solutions personnalisées, des matériaux écologiques et une garantie de résultats. Notre engagement qualité fait de nous le partenaire de référence pour vos projets d&apos;isolation.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 50€ au m², selon la surface, l&apos;état du support et la technologie utilisée. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 5000€, amortissable en 3 à 5 ans grâce aux économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études montrent qu&apos;elle peut réduire jusqu&apos;à 40% des transferts thermiques, stabiliser la température intérieure et diminuer la consommation énergétique. La technologie réfléchissante bloque les rayonnements solaires tout en laissant le support respirer.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite plusieurs étapes : nettoyage approfondi, réparation des éventuels défauts, application d&apos;un primaire adapté, puis pose de 2 couches de peinture Thermo Reflect avec un rouleau ou un pistorage professionnel. Le séchage complet prend généralement 24 à 48 heures.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Ivry-sur-Seine ?
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
