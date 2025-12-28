import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Cugnaux | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Cugnaux et ses environs. Nos experts en détection d',
  keywords: 'recherche fuite cugnaux, detection fuite toiture cugnaux, recherche fuite eau cugnaux, fuite toiture cugnaux, detection infiltration cugnaux, entreprise recherche fuite cugnaux',
};

export default function RechercheFuiteCugnauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Cugnaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Cugnaux et ses environs. Nos experts en détection d&apos;infiltrations interviennent rapidement pour protéger votre habitat et votre patrimoine contre les dégâts potentiels.</p>

        <h2>Nos services de recherche et détection de fuites a Cugnaux</h2>
        <div className="space-y-4">
          <p>Notre service de recherche de fuites représente une solution technologique avancée pour identifier précisément les sources d&apos;infiltration sans travaux destructifs. Nous utilisons des équipements de pointe comme la caméra thermique et le détecteur électronique qui nous permettent de localiser au millimètre près les zones problématiques. Notre processus complet comprend un diagnostic initial, une investigation technique minutieuse et un rapport détaillé avec préconisations de réparation. Notre équipe certifiée intervient sur toutes les structures : toitures, murs, canalisations, caves et terrasses, avec une précision garantissant 95% de réussite en première intervention.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos points forts : une expertise de plus de 15 ans, un matériel de détection ultramoderne, une intervention rapide sous 24h, des techniciens certifiés, et une approche non destructive. Nous sommes également assurés pour toutes nos interventions et proposons un devis gratuit et sans engagement sur Cugnaux et l&apos;agglomération toulousaine.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 600€ selon la complexité, avec un tarif moyen de 380€ comprenant le diagnostic complet et le rapport technique détaillé. Nos prix sont transparents et incluent le déplacement et l&apos;expertise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration dans un mur, nous utilisons la thermographie infrarouge qui révèle les variations de température, l&apos;humidimètre professionnel qui mesure précisément le taux d&apos;humidité, et parfois un test d&apos;infiltrométrie pour identifier les points faibles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez directement notre ligne dédiée au 05 XX XX XX XX. Nous proposons une intervention sous 2h en situation critique et assurons une permanence 7j/7 pour les fuites nécessitant un traitement immédiat.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Cugnaux ?
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
