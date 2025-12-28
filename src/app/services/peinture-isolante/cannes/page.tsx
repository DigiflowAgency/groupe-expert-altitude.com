import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Cannes | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Cannes avec ses solutions de peinture innovantes. Spécialistes de la peinture isolante ther',
  keywords: 'peinture isolante cannes, peinture thermique cannes, peinture isolante toiture cannes, thermo reflect cannes, peinture reflechissante cannes, cool roof cannes',
};

export default function PeintureIsolanteCannesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Cannes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Cannes avec ses solutions de peinture innovantes. Spécialistes de la peinture isolante thermique, nous transformons vos bâtiments en espaces économes en énergie et confortables.</p>

        <h2>Nos services de peinture isolante thermique a Cannes</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique est une solution haute performance pour les propriétaires et entreprises de Cannes souhaitant réduire leur consommation énergétique. Utilisant des technologies de pointe comme Thermo Reflect, nos revêtements réfléchissants permettent de diminuer jusqu&apos;à 30% des déperditions thermiques. Notre processus débute par un diagnostic précis de votre bâtiment, suivi d&apos;une préparation de surface minutieuse et d&apos;une application professionnelle par nos techniciens certifiés. Les peintures que nous proposons offrent une protection multicouche contre la chaleur, le froid et l&apos;usure, garantissant une durabilité de 10 à 15 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Expertise locale à Cannes depuis plus de 15 ans, Équipe de techniciens hautement qualifiés, Garantie de performance énergétique, Utilisation exclusive de produits écologiques et certifiés, Devis personnalisé et gratuit sous 48h, Solutions adaptées à tous types de bâtiments</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la surface, le type de support et la technologie utilisée. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 6000€, amortissable en 3 à 5 ans grâce aux économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace : elle peut réduire jusqu&apos;à 40% des transferts thermiques, diminuer la température intérieure de 5 à 7°C en été et améliorer le confort thermique. Des études indépendantes confirment ses performances, notamment pour les toitures et façades exposées.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite : un nettoyage approfondi, une réparation des éventuelles fissures, un primaire d&apos;accrochage spécifique, puis l&apos;application de 2 couches croisées de peinture avec un rouleau ou un pistorage professionnel. La température et l&apos;humidité doivent être contrôlées pendant l&apos;application.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Cannes ?
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
