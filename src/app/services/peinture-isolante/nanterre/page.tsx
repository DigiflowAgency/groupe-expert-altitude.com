import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Nanterre | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Nanterre avec ses solutions de peinture innovantes. Spécialistes de la performance énerg',
  keywords: 'peinture isolante nanterre, peinture thermique nanterre, peinture isolante toiture nanterre, thermo reflect nanterre, peinture reflechissante nanterre, cool roof nanterre',
};

export default function PeintureIsolanteNanterrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Nanterre</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Nanterre avec ses solutions de peinture innovantes. Spécialistes de la performance énergétique, nous transformons vos bâtiments en véritables boucliers thermiques grâce à des technologies de pointe.</p>

        <h2>Nos services de peinture isolante thermique a Nanterre</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la solution ultime pour optimiser le confort et réduire les déperditions énergétiques. Utilisant des technologies comme Thermo Reflect, nous appliquons des revêtements haute performance qui réfléchissent jusqu&apos;à 85% des rayonnements solaires. Notre processus débute par un diagnostic précis de votre bâtiment à Nanterre, permettant une application sur mesure, que ce soit sur toiture, façades ou murs intérieurs. Nos peintures spéciales créent une barrière thermique qui maintient la température intérieure stable, réduisant ainsi votre consommation énergétique de 30% en moyenne.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Experts certifiés avec plus de 15 ans d&apos;expérience en isolation thermique. Interventions rapides et précises sur Nanterre et ses environs. Matériaux écologiques et garantis 10 ans. Devis personnalisé et gratuit sous 48h.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût moyen d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la complexité de l&apos;application et le type de surface. Pour une maison de 100m², comptez un investissement global entre 2500€ et 6000€, rapidement rentabilisé par les économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est très efficace, avec des performances prouvées scientifiquement. Elle peut réduire jusqu&apos;à 15°C la température de surface et diminuer les déperditions thermiques de 30%. Son efficacité dépend de la qualité du produit et de son application professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application sur toiture nécessite un nettoyage préalable, un traitement anti-mousse, puis l&apos;utilisation de rouleaux spéciaux ou de pulvérisateurs professionnels. La pose requiert des conditions météorologiques optimales (température entre 10-25°C, sans humidité) et une préparation rigoureuse de la surface.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Nanterre ?
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
