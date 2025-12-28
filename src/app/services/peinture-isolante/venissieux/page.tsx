import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Vénissieux | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions énergétiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Vénis',
  keywords: 'peinture isolante vénissieux, peinture thermique vénissieux, peinture isolante toiture vénissieux, thermo reflect vénissieux, peinture reflechissante vénissieux, cool roof vénissieux',
};

export default function PeintureIsolanteVenissieuxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Vénissieux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions énergétiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Vénissieux. Nos solutions innovantes transforment vos bâtiments en véritables boucliers thermiques, garantissant un confort optimal et des économies substantielles.</p>

        <h2>Nos services de peinture isolante thermique a Vénissieux</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la technologie de pointe en isolation énergétique. Spécialisés dans les techniques Thermo Reflect, nous proposons des solutions qui réduisent jusqu&apos;à 30% des déperditions thermiques pour les toitures et façades de Vénissieux. Notre processus débute par un diagnostic précis, suivi d&apos;une préparation minutieuse des surfaces, puis de l&apos;application de peintures réfléchissantes haute performance. Ces revêtements intelligents créent une barrière thermique qui régule la température intérieure, protège les structures contre les variations climatiques et prolonge la durée de vie de vos bâtiments. Nos produits certifiés répondent aux normes environnementales les plus exigeantes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés avec plus de 15 ans d&apos;expérience, nous utilisons uniquement des matériaux de haute qualité, notre intervention est rapide et précise, et nous garantissons une efficacité énergétique immédiate. Nos solutions sur-mesure s&apos;adaptent à chaque configuration architecturale.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la complexité de l&apos;intervention, le type de support et la technologie utilisée. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 6000€, rapidement amorti par les économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent qu&apos;elle peut réduire jusqu&apos;à 40% des transferts thermiques, stabiliser les températures intérieures et diminuer la consommation énergétique. Sa composition réfléchissante permet de renvoyer jusqu&apos;à 90% des rayonnements solaires.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante nécessite plusieurs étapes : nettoyage et préparation de la surface, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis pose de 2 à 3 couches de peinture avec un rouleau ou un pistorage professionnel. La température et l&apos;humidité doivent être contrôlées pour garantir une pose optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Vénissieux ?
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
