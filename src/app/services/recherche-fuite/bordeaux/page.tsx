import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Bordeaux | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la détection précise et rapide des fuites à Bordeaux et dans toute la région Nouvelle-Aqu',
  keywords: 'recherche fuite bordeaux, detection fuite toiture bordeaux, recherche fuite eau bordeaux, fuite toiture bordeaux, detection infiltration bordeaux, entreprise recherche fuite bordeaux',
};

export default function RechercheFuiteBordeauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Bordeaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la détection précise et rapide des fuites à Bordeaux et dans toute la région Nouvelle-Aquitaine. Spécialistes en recherche et diagnostic d&apos;infiltrations, nous intervenons avec des technologies de pointe pour protéger votre patrimoine immobilier.</p>

        <h2>Nos services de recherche et détection de fuites a Bordeaux</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites représente une solution technologique complète et non invasive pour identifier rapidement les sources d&apos;infiltrations. Nos experts utilisent des équipements de détection thermique et acoustique ultramodernes, permettant de localiser précisément la moindre fuite sans détériorer votre habitat. Que ce soit pour une toiture, des canalisations enterrées ou des murs, notre méthode garantit une intervention ciblée et économique. Nos techniciens certifiés réalisent un diagnostic complet, avec un taux de précision supérieur à 95%, limitant ainsi les coûts de réparation et les potentiels dommages structurels.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Technologie de pointe : Détection par caméras thermiques et corrélateurs acoustiques
- Intervention rapide sur Bordeaux et ses environs
- Équipe de professionnels certifiés avec plus de 15 ans d&apos;expérience
- Diagnostic précis et devis gratuit sous 24h
- Rapport détaillé et solutions sur-mesure</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive à Bordeaux varie entre 250€ et 750€ selon la complexité, avec un tarif moyen de 450€. Ce prix comprend le diagnostic complet, l&apos;utilisation d&apos;équipements de haute technologie et un rapport détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration dans un mur, nos experts utilisent la thermographie infrarouge qui révèle les variations de température, les caméras d&apos;inspection et des détecteurs d&apos;humidité électroniques. Ces méthodes permettent d&apos;identifier précisément la zone d&apos;infiltration sans créer de dégâts.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à Bordeaux, contactez directement notre ligne d&apos;astreinte au 06 XX XX XX XX. Nous proposons une intervention sous 2h en cas de fuite majeure, 7j/7 et 24h/24, avec une équipe mobilisable immédiatement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Bordeaux ?
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
