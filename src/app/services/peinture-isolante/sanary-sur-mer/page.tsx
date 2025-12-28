import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Sanary-sur-Mer | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre la chaleur à Sanary-sur-Mer avec notre peinture isolante thermique haute performance. Groupe Expert Altitude Com vous p',
  keywords: 'peinture isolante sanary-sur-mer, peinture thermique sanary-sur-mer, peinture isolante toiture sanary-sur-mer, thermo reflect sanary-sur-mer, peinture reflechissante sanary-sur-mer, cool roof sanary-sur-mer',
};

export default function PeintureIsolanteSanarySurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Sanary-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre la chaleur à Sanary-sur-Mer avec notre peinture isolante thermique haute performance. Groupe Expert Altitude Com vous propose une technologie innovante qui transforme vos toitures et façades en boucliers thermiques, garantissant un confort optimal toute l&apos;année.</p>

        <h2>Nos services de peinture isolante thermique a Sanary-sur-Mer</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la dernière génération de solutions d&apos;isolation pour les habitations de Sanary-sur-Mer et ses environs. Utilisant la technologie Thermo Reflect, nous appliquons une peinture réfléchissante qui peut réduire jusqu&apos;à 85% de l&apos;absorption thermique. Cette technique révolutionnaire crée une barrière qui régule la température intérieure, diminuant significativement les déperditions énergétiques. Notre processus comprend une évaluation précise de votre bâtiment, un traitement de surface préparatoire et l&apos;application de notre peinture isolante spécialement conçue pour résister aux conditions méditerranéennes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Chez Groupe Expert Altitude Com, nous nous distinguons par notre expertise technique unique. Nos techniciens sont certifiés dans l&apos;application de peintures isolantes, avec plus de 15 ans d&apos;expérience sur le territoire. Nous garantissons une intervention rapide, un devis transparent et des économies énergétiques pouvant atteindre 30% sur vos factures. Nos solutions sont 100% adaptées au climat provençal de Sanary-sur-Mer.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 45€ au m², selon la complexité de la surface et le type de support. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 4500€, amortissable en 3 à 5 ans grâce aux économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent qu&apos;elle peut réduire la température de surface jusqu&apos;à 20°C, limitant la chaleur transmise à l&apos;intérieur. Sa technologie réfléchissante bloque 80% des rayons infrarouges, garantissant une isolation thermique significative et durable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite 4 étapes : 1) Nettoyage et préparation de surface 2) Réparation des éventuelles imperfections 3) Application d&apos;un primaire d&apos;accrochage 4) Pose de 2 couches de peinture Thermo Reflect avec un rouleau ou un pistolet professionnel. La pose requiert un temps sec et des températures entre 10 et 30°C.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Sanary-sur-Mer ?
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
