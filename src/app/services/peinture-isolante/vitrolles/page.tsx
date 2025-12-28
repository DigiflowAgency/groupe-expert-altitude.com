import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Vitrolles | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Vitrolles avec notre solution innovante de peinture isolante thermique, conçue pour réduire significativement vos dépenses éner',
  keywords: 'peinture isolante vitrolles, peinture thermique vitrolles, peinture isolante toiture vitrolles, thermo reflect vitrolles, peinture reflechissante vitrolles, cool roof vitrolles',
};

export default function PeintureIsolanteVitrollesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Vitrolles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Vitrolles avec notre solution innovante de peinture isolante thermique, conçue pour réduire significativement vos dépenses énergétiques. Le Groupe Expert Altitude Com vous propose une technologie de pointe qui allie performance thermique et esthétique moderne.</p>

        <h2>Nos services de peinture isolante thermique a Vitrolles</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la solution ultime pour optimiser le confort thermique de votre propriété à Vitrolles. Utilisant des technologies de pointe comme le Thermo Reflect, nos revêtements réfléchissants permettent de réduire jusqu&apos;à 30% des déperditions thermiques. Notre processus débute par un diagnostic précis de votre toiture ou façade, suivi d&apos;une préparation méticuleuse des surfaces. L&apos;application de notre peinture spécialisée crée une barrière thermique qui réfléchit jusqu&apos;à 85% des rayons solaires, garantissant une régulation thermique exceptionnelle été comme hiver.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos techniciens sont certifiés avec plus de 15 ans d&apos;expérience en isolation thermique. Nous garantissons une intervention rapide sur Vitrolles et ses environs, un devis personnalisé sous 48h et une application respectant les normes environnementales les plus strictes. Notre engagement qualité se traduit par une garantie décennale sur nos travaux.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 30€ et 80€ au m², selon la complexité de la surface et la technologie utilisée. Pour une toiture moyenne de 100m², comptez un investissement global entre 3000€ et 6000€, amortissable en 3 à 5 ans grâce aux économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace : elle peut réduire jusqu&apos;à 40% des déperditions thermiques et diminuer la température intérieure de 5 à 7°C en période estivale. Les revêtements haute performance comme Thermo Reflect offrent une réflectivité solaire supérieure à 80%.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite 4 étapes : nettoyage approfondi, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis pose de 2 couches de peinture spécialisée avec des outils professionnels. La préparation représente 60% de la qualité du résultat final.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Vitrolles ?
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
