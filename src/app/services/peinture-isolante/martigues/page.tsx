import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Martigues | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Martigues avec sa solution innovante de peinture isolante. Spécialistes locaux, nous tra',
  keywords: 'peinture isolante martigues, peinture thermique martigues, peinture isolante toiture martigues, thermo reflect martigues, peinture reflechissante martigues, cool roof martigues',
};

export default function PeintureIsolanteMartiguesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Martigues</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Martigues avec sa solution innovante de peinture isolante. Spécialistes locaux, nous transformons vos bâtiments en véritables boucliers thermiques, réduisant jusqu&apos;à 30% vos dépenses énergétiques.</p>

        <h2>Nos services de peinture isolante thermique a Martigues</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la solution ultime contre les déperditions énergétiques. Grâce à des technologies comme Thermo Reflect, nous appliquons des revêtements haute performance qui réfléchissent jusqu&apos;à 85% des rayons solaires. Notre processus débute par un diagnostic précis de votre toiture ou façade à Martigues, suivi d&apos;une préparation minutieuse des surfaces. L&apos;application de nos peintures réfléchissantes crée une barrière thermique qui maintient une température intérieure stable, été comme hiver. Nos produits certifiés garantissent une durabilité de 10 ans minimum, avec une efficacité énergétique immédiatement mesurable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Experts reconnus à Martigues, nous maîtrisons parfaitement les techniques d&apos;isolation thermique. Notre équipe est certifiée RGE, gage de professionnalisme et de qualité. Nous utilisons uniquement des matériaux écologiques et performants. Notre approche personnalisée s&apos;adapte à chaque projet, avec un devis gratuit et détaillé. Plus de 500 chantiers réalisés dans la région avec 98% de satisfaction client.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 45€ au m², selon la complexité du support et la technologie utilisée. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 4500€. Cependant, les économies énergétiques peuvent atteindre 35% par an, amortissant rapidement votre investissement initial.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Les revêtements haute technologie comme Thermo Reflect réduisent jusqu&apos;à 15°C la température de surface, diminuant significativement les besoins en climatisation et chauffage. Des études indépendantes démontrent des économies énergétiques de 25 à 40% selon l&apos;exposition et l&apos;état initial du bâtiment.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante nécessite 4 étapes : 1) Nettoyage et préparation de la surface 2) Réparation des éventuelles imperfections 3) Application d&apos;un primaire d&apos;accrochage 4) Pose de 2 couches de peinture avec un rouleau spécifique ou un pistolet professionnel. La température idéale se situe entre 10°C et 30°C, avec une humidité relative inférieure à 70%.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Martigues ?
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
