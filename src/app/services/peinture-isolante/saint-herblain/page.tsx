import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Saint-Herblain | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions énergétiques avec Groupe Expert Altitude Com, votre partenaire peinture isolante thermique à Saint-Her',
  keywords: 'peinture isolante saint-herblain, peinture thermique saint-herblain, peinture isolante toiture saint-herblain, thermo reflect saint-herblain, peinture reflechissante saint-herblain, cool roof saint-herblain',
};

export default function PeintureIsolanteSaintHerblainPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Saint-Herblain</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions énergétiques avec Groupe Expert Altitude Com, votre partenaire peinture isolante thermique à Saint-Herblain. Nos solutions innovantes transforment vos bâtiments en véritables boucliers thermiques, garantissant un confort optimal et des économies substantielles.</p>

        <h2>Nos services de peinture isolante thermique a Saint-Herblain</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la technologie de pointe en isolation énergétique. Spécialisés à Saint-Herblain, nous utilisons des techniques Thermo Reflect qui réfléchissent jusqu&apos;à 90% des rayonnements solaires. Notre processus commence par un diagnostic précis de votre toiture ou façade, suivi d&apos;une préparation minutieuse des surfaces. Nous appliquons ensuite une peinture réfléchissante multicouche qui agit comme un bouclier thermique, réduisant jusqu&apos;à 30% des coûts de climatisation et de chauffage. Chaque intervention est personnalisée, en respectant les spécificités architecturales de votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Expertise locale reconnue, techniciens certifiés, solutions 100% adaptées à l&apos;environnement nantais. Nous maîtrisons les dernières technologies Cool Roof et garantissons une intervention rapide et professionnelle. Notre engagement qualité se traduit par des matériaux de haute performance et un suivi technique complet après intervention.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 50€ au m², selon la complexité de la surface et le type de peinture. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 5000€, amortissable en 3 à 5 ans grâce aux économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent une réduction jusqu&apos;à 15°C de la température de surface et une diminution de 30% des déperditions thermiques. Son efficacité dépend de la qualité du produit, de son application et de l&apos;état initial de la surface.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante nécessite 4 étapes : nettoyage approfondi, réparation des imperfections, application d&apos;un primaire d&apos;accrochage, puis pose de 2 couches de peinture avec un rouleau spécial ou par projection. La préparation représente 70% de la réussite du traitement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Saint-Herblain ?
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
