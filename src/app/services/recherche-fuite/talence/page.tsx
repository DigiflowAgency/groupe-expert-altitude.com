import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Talence | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Talence et ses environs. Nos experts interviennent ',
  keywords: 'recherche fuite talence, detection fuite toiture talence, recherche fuite eau talence, fuite toiture talence, detection infiltration talence, entreprise recherche fuite talence',
};

export default function RechercheFuiteTalencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Talence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Talence et ses environs. Nos experts interviennent rapidement pour localiser précisément toute infiltration d&apos;eau, en préservant l&apos;intégrité de votre habitat ou infrastructure.</p>

        <h2>Nos services de recherche et détection de fuites a Talence</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites représente la technologie de pointe en matière de diagnostic précis et non destructif. Nous utilisons des équipements ultramodernes comme la caméra thermique et le détecteur électronique qui nous permettent de localiser avec une précision de 95% l&apos;origine exacte des infiltrations. Notre processus comprend un diagnostic complet, un rapport détaillé et des recommandations techniques adaptées à chaque situation spécifique. Sur Talence et la métropole bordelaise, nous intervenons dans les secteurs résidentiels, commerciaux et industriels, garantissant une expertise technique irréprochable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Équipe certifiée avec plus de 15 ans d&apos;expérience
✓ Matériel de détection high-tech dernière génération
✓ Intervention rapide sous 24h
✓ Devis gratuit et transparent
✓ Solutions sur-mesure adaptées à chaque problématique de fuite</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive coûte généralement entre 250€ et 650€, selon la complexité du diagnostic et la surface à examiner. Notre tarification inclut le déplacement, le diagnostic précis et un rapport technique détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration dans un mur, nous utilisons plusieurs techniques : caméra thermique pour identifier les zones humides, hygromètre pour mesurer le taux d&apos;humidité, et détecteurs électroniques pour localiser le point exact de l&apos;infiltration sans endommager la structure.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à Talence, contactez immédiatement Groupe Expert Altitude Com au 05 XX XX XX XX. Nos techniciens sont disponibles 7j/7 pour des interventions rapides et préventives contre les dégâts des eaux.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Talence ?
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
