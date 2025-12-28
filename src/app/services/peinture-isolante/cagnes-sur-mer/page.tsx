import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Cagnes-sur-Mer | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre la chaleur à Cagnes-sur-Mer avec notre peinture isolante thermique innovante. Le Groupe Expert Altitude Com vous propos',
  keywords: 'peinture isolante cagnes-sur-mer, peinture thermique cagnes-sur-mer, peinture isolante toiture cagnes-sur-mer, thermo reflect cagnes-sur-mer, peinture reflechissante cagnes-sur-mer, cool roof cagnes-sur-mer',
};

export default function PeintureIsolanteCagnesSurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Cagnes-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre la chaleur à Cagnes-sur-Mer avec notre peinture isolante thermique innovante. Le Groupe Expert Altitude Com vous propose une technologie de pointe pour transformer vos toitures et murs en boucliers thermiques performants et économiques.</p>

        <h2>Nos services de peinture isolante thermique a Cagnes-sur-Mer</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la solution moderne et écologique pour améliorer le confort thermique de votre habitat. Spécialisés dans les techniques Thermo Reflect, nous utilisons des peintures réfléchissantes qui peuvent réduire jusqu&apos;à 30% des déperditions énergétiques. Notre processus d&apos;intervention commence par un diagnostic précis de vos surfaces, suivi d&apos;une préparation minutieuse incluant le nettoyage et le traitement des supports. Nous appliquons ensuite des peintures techniques multicouches qui créent une barrière thermique hautement performante, adaptée au climat méditerranéen de Cagnes-sur-Mer.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés et maîtrisent parfaitement les dernières technologies d&apos;isolation. Nous garantissons une intervention rapide, un devis transparent et des résultats mesurables. Notre engagement qualité se traduit par des matériaux de haute performance et un suivi personnalisé de chaque chantier.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la complexité de l&apos;application et le type de surface. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 6000€, rapidement rentabilisé par les économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Les technologies comme Thermo Reflect peuvent réduire jusqu&apos;à 40% des gains thermiques en été et limiter les déperditions en hiver. Son efficacité dépend de la qualité du produit, de son application et de la préparation du support.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite plusieurs étapes : nettoyage approfondi, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis pose de 2 à 3 couches de peinture spécifique à l&apos;aide de rouleaux ou d&apos;un pistorage professionnel. La préparation et la technique sont essentielles pour garantir une isolation optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Cagnes-sur-Mer ?
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
