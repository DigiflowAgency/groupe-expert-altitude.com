import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Saint-Raphaël | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre la chaleur et les déperditions énergétiques avec notre peinture isolante thermique à Saint-Raphaël. Groupe Expert Altit',
  keywords: 'peinture isolante saint-raphaël, peinture thermique saint-raphaël, peinture isolante toiture saint-raphaël, thermo reflect saint-raphaël, peinture reflechissante saint-raphaël, cool roof saint-raphaël',
};

export default function PeintureIsolanteSaintRaphaelPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Saint-Raphaël</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre la chaleur et les déperditions énergétiques avec notre peinture isolante thermique à Saint-Raphaël. Groupe Expert Altitude Com vous propose une technologie innovante qui transforme vos bâtiments en véritables boucliers thermiques, adaptée au climat méditerranéen.</p>

        <h2>Nos services de peinture isolante thermique a Saint-Raphaël</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique révolutionne la protection de votre habitat à Saint-Raphaël. Utilisant des technologies de pointe comme Thermo Reflect, nous appliquons des revêtements spécialement conçus pour réduire jusqu&apos;à 80% des transferts thermiques. Notre processus commence par un diagnostic précis de votre toiture ou façade, suivi d&apos;une préparation minutieuse des surfaces. La peinture réfléchissante que nous utilisons agit comme un bouclier, réfléchissant les rayons solaires et maintenant une température intérieure stable. Nos techniciens certifiés garantissent une application professionnelle qui durera plusieurs années, avec des performances thermiques optimales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Experts locaux avec 15 ans d&apos;expérience en isolation thermique
- Technologie Thermo Reflect certifiée et performante
- Devis personnalisé et gratuit pour chaque projet
- Interventions rapides sur toute la région de Saint-Raphaël</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la surface, l&apos;état du support et la technologie utilisée. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 6000€, rapidement rentabilisé par les économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace, avec des études démontrant jusqu&apos;à 35% de réduction des déperditions thermiques. Sa composition à base de microbilles céramiques et de pigments réfléchissants bloque efficacement la chaleur et améliore le confort thermique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite : un nettoyage approfondi, une réparation des éventuelles imperfections, l&apos;application d&apos;un primaire d&apos;accrochage, puis 2 couches de peinture Thermo Reflect avec un rouleau ou un pistolet spécifique. Un séchage de 24h est recommandé entre chaque couche.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Saint-Raphaël ?
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
