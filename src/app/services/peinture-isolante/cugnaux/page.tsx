import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Cugnaux | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Cugnaux avec des solutions de peinture innovantes. Installés dans la région toulousaine, no',
  keywords: 'peinture isolante cugnaux, peinture thermique cugnaux, peinture isolante toiture cugnaux, thermo reflect cugnaux, peinture reflechissante cugnaux, cool roof cugnaux',
};

export default function PeintureIsolanteCugnauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Cugnaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Cugnaux avec des solutions de peinture innovantes. Installés dans la région toulousaine, nous transformons les bâtiments résidentiels et professionnels grâce à nos techniques de peinture isolante de dernière génération.</p>

        <h2>Nos services de peinture isolante thermique a Cugnaux</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la solution ultime contre les déperditions énergétiques. Nous utilisons des technologies Thermo Reflect qui réfléchissent jusqu&apos;à 85% des rayons solaires, réduisant significativement la température intérieure. Notre processus débute par un diagnostic précis de votre toiture ou façade à Cugnaux, suivi d&apos;une préparation minutieuse des surfaces. Les peintures que nous appliquons offrent une protection multicouche qui améliore l&apos;isolation thermique tout en prolongeant la durée de vie des supports. Nos solutions cool roof permettent des économies allant jusqu&apos;à 30% sur les factures énergétiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée avec plus de 15 ans d&apos;expertise, nous garantissons une intervention professionnelle et personnalisée. Notre équipe technique est formée aux dernières normes d&apos;isolation thermique. Nous proposons des devis gratuits et détaillés, un accompagnement sur-mesure et des matériaux haute performance. Nos interventions sont rapides et respectueuses de l&apos;environnement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la complexité du support et la technologie utilisée. Pour une toiture moyenne à Cugnaux, comptez un investissement global entre 1500€ et 3500€, rapidement amorti par les économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent qu&apos;elle peut réduire jusqu&apos;à 15°C la température intérieure en été et améliorer l&apos;inertie thermique. Les revêtements professionnels comme Thermo Reflect offrent une réelle plus-value énergétique et économique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante nécessite 4 étapes : nettoyage approfondi de la surface, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis pose de 2 couches de peinture avec un rouleau spécifique. La préparation est cruciale pour garantir une isolation optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Cugnaux ?
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
