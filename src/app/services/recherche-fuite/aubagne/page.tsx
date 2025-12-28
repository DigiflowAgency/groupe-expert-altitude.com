import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Aubagne | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la détection précise et non destructive des fuites sur Aubagne et ses environs. Spécialis',
  keywords: 'recherche fuite aubagne, detection fuite toiture aubagne, recherche fuite eau aubagne, fuite toiture aubagne, detection infiltration aubagne, entreprise recherche fuite aubagne',
};

export default function RechercheFuiteAubagnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Aubagne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la détection précise et non destructive des fuites sur Aubagne et ses environs. Spécialisés dans la recherche de fuites d&apos;eau et d&apos;infiltrations, nous intervenons rapidement pour protéger votre patrimoine immobilier.</p>

        <h2>Nos services de recherche et détection de fuites a Aubagne</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites représente une solution technologique avancée pour identifier avec précision les sources d&apos;infiltration. Grâce à des équipements de pointe comme la caméra thermique et le détecteur acoustique, nous localisons instantanément les points faibles sans détériorer votre habitat. Notre processus comprend un diagnostic complet : analyse préliminaire, investigation technique et rapport détaillé. Nos techniciens certifiés interviennent sur toiture, canalisations, caves et murs, garantissant une intervention ciblée à Aubagne et dans tout le département des Bouches-du-Rhône.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Technologie de détection ultramoderne avec 98% de précision
- Équipe de 12 experts formés en hydraulique et bâtiment
- Intervention sous 24h en urgence
- Devis gratuit et transparent sans engagement
- Solutions adaptées à chaque type de bâtiment</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 200€ et 600€ selon la complexité, avec un tarif moyen de 350€ pour une intervention complète. Nous proposons un devis personnalisé après diagnostic initial sans frais.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, utilisez un hygromètre, surveillez les traces d&apos;humidité, les moisissures ou les décolorations. Notre équipe utilise des caméras thermiques qui révèlent instantanément les zones humides sans aucune destruction.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence sur Aubagne, contactez directement notre ligne d&apos;astreinte au 06 XX XX XX XX. Nous intervenons 7j/7 pour limiter les dégâts et sécuriser votre propriété dans les plus brefs délais.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Aubagne ?
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
