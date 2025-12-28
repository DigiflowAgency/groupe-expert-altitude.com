import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Lyon | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en recherche et détection de fuites à Lyon et dans sa région. Spécialistes des infiltrations c',
  keywords: 'recherche fuite lyon, detection fuite toiture lyon, recherche fuite eau lyon, fuite toiture lyon, detection infiltration lyon, entreprise recherche fuite lyon',
};

export default function RechercheFuiteLyonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Lyon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en recherche et détection de fuites à Lyon et dans sa région. Spécialistes des infiltrations complexes, nous intervenons rapidement pour protéger votre patrimoine immobilier avec des technologies de pointe.</p>

        <h2>Nos services de recherche et détection de fuites a Lyon</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites représente une solution technique complète et non destructive pour les particuliers et professionnels lyonnais. Nous utilisons des équipements high-tech comme la thermographie infrarouge, la détection acoustique et des caméras endoscopiques permettant de localiser précisément l&apos;origine des infiltrations sans dégrader votre bâti. Notre processus garantit une intervention ciblée, réduisant jusqu&apos;à 70% les coûts traditionnels de réparation. Nos techniciens experts analysent chaque situation avec une méthodologie rigoureuse, qu&apos;il s&apos;agisse de fuites de toiture, de canalisations enterrées ou de murs porteurs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Pourquoi nous choisir ? Notre différence repose sur trois piliers : une expertise technique de haut niveau, un diagnostic précis garanti sous 24h et une intervention rapide. Nous sommes certifiés par la Chambre des Experts en Diagnostic Immobilier, intervenons sur tout Lyon et sa métropole, et proposons un devis gratuit et sans engagement. Notre taux de satisfaction client dépasse les 95%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive à Lyon coûte généralement entre 250€ et 750€, selon la complexité et les techniques utilisées. Notre tarif inclut le diagnostic complet, l&apos;utilisation d&apos;équipements professionnels et un rapport détaillé. Un investissement raisonnable pour éviter des dégâts potentiellement bien plus coûteux.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration dans un mur, nos experts utilisent plusieurs techniques : la thermographie infrarouge révèle les variations de température, l&apos;humidimètre mesure précisément le taux d&apos;humidité, et nos caméras endoscopiques permettent une visualisation directe sans destruction. Ces méthodes garantissent un diagnostic fiable à 98%.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à Lyon, contactez immédiatement notre ligne directe au 04 XX XX XX XX. Nous proposons une astreinte 7j/7 et intervenons sous 2h en situation critique. Notre équipe est équipée pour traiter les fuites sur toiture, canalisations, caves et tous types de bâtiments.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Lyon ?
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
