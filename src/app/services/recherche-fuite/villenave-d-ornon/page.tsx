import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Villenave-d\'Ornon | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Villenave-d&apos;Ornon et ses environs. Nos experts util',
  keywords: 'recherche fuite villenave-d'ornon, detection fuite toiture villenave-d'ornon, recherche fuite eau villenave-d'ornon, fuite toiture villenave-d'ornon, detection infiltration villenave-d'ornon, entreprise recherche fuite villenave-d'ornon',
};

export default function RechercheFuiteVillenaveDOrnonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Villenave-d'Ornon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Villenave-d&apos;Ornon et ses environs. Nos experts utilisent les technologies les plus avancées pour localiser précisément vos problèmes d&apos;infiltration, vous garantissant une intervention rapide et efficace.</p>

        <h2>Nos services de recherche et détection de fuites a Villenave-d'Ornon</h2>
        <div className="space-y-4">
          <p>Notre service de recherche de fuites combine expertise technique et équipements de pointe pour identifier avec précision l&apos;origine de vos infiltrations. Nous intervenons sur tous types de structures : toitures, murs, canalisations, terrasses et fondations. Notre méthode non destructive permet de localiser le point exact de la fuite sans causer de dommages supplémentaires, économisant ainsi temps et argent pour nos clients. Nos techniciens hautement qualifiés utilisent des caméras thermiques, des détecteurs d&apos;humidité et des systèmes acoustiques pour une détection ultra-précise à Villenave-d&apos;Ornon.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Technologie de détection dernier cri garantissant 98% de précision
- Équipe certifiée avec plus de 15 ans d&apos;expérience
- Intervention rapide sous 24h en urgence
- Devis gratuit et transparent sans engagement
- Couverture complète de la métropole bordelaise</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive coûte généralement entre 250€ et 550€ selon la complexité, avec un tarif moyen de 380€ pour une intervention complète. Notre diagnostic inclut le repérage précis et un rapport détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les traces d&apos;humidité, moisissures, décoloration des murs ou odeurs musquées. Nos experts utilisent des caméras thermiques qui révèlent instantanément les zones d&apos;humidité cachées sans aucune démolition.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez directement Groupe Expert Altitude Com au 06 xx xx xx xx. Nos équipes sont joignables 7j/7 et interviennent rapidement à Villenave-d&apos;Ornon pour limiter les dégâts potentiels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Villenave-d'Ornon ?
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
