import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Aubagne | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions thermiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante à Aubagne. Nous tra',
  keywords: 'peinture isolante aubagne, peinture thermique aubagne, peinture isolante toiture aubagne, thermo reflect aubagne, peinture reflechissante aubagne, cool roof aubagne',
};

export default function PeintureIsolanteAubagnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Aubagne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions thermiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante à Aubagne. Nous transformons vos bâtiments en véritables boucliers thermiques, garantissant un confort optimal et des économies d&apos;énergie significatives.</p>

        <h2>Nos services de peinture isolante thermique a Aubagne</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique révolutionne la protection de vos surfaces à Aubagne et ses environs. Utilisant des technologies de pointe comme Thermo Reflect, nous appliquons des revêtements haute performance qui réfléchissent jusqu&apos;à 90% des rayons solaires. Cette peinture spéciale agit comme une barrière thermique, réduisant la température intérieure de 5 à 7°C en été et limitant les déperditions de chaleur en hiver. Notre processus comprend un diagnostic précis, une préparation de surface méticuleuse et une application professionnelle qui garantit une durabilité et une efficacité maximales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Pourquoi nous choisir ? Expertise locale à Aubagne, techniciens certifiés, matériaux de haute qualité, diagnostic thermique gratuit, devis personnalisé sous 48h. Nous maîtrisons parfaitement les techniques de peinture isolante pour toitures, façades et surfaces industrielles. Notre engagement : performance, économies et respect de l&apos;environnement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 50€ au m², selon la surface, la complexité et le type de revêtement. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 5000€, amortissable par les économies d&apos;énergie sur 3 à 5 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études montrent qu&apos;elle peut réduire jusqu&apos;à 30% des déperditions thermiques et diminuer la consommation énergétique de 20%. Sa technologie de réflexion solaire et son pouvoir isolant sont garantis par des certifications officielles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite 4 étapes : nettoyage approfondi, réparation des défauts, primaire d&apos;accrochage, et application de 2 couches de peinture Thermo Reflect. Prévoir des conditions sèches, une température entre 10 et 30°C, et l&apos;intervention de professionnels pour une pose optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Aubagne ?
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
