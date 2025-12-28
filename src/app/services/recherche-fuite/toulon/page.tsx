import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Toulon | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la détection et la résolution de fuites sur l&apos;ensemble du territoire Toulonnais. Spéci',
  keywords: 'recherche fuite toulon, detection fuite toiture toulon, recherche fuite eau toulon, fuite toiture toulon, detection infiltration toulon, entreprise recherche fuite toulon',
};

export default function RechercheFuiteToulonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Toulon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la détection et la résolution de fuites sur l&apos;ensemble du territoire Toulonnais. Spécialistes en recherche de fuites non destructives, nous intervenons rapidement pour protéger votre patrimoine immobilier contre les dégâts potentiels.</p>

        <h2>Nos services de recherche et détection de fuites a Toulon</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites représente une solution technologique avancée pour identifier précisément l&apos;origine des infiltrations d&apos;eau. Grâce à des équipements de pointe comme la caméra thermique et le détecteur électronique, nous localisons avec une précision de 95% les points de fuite sans endommager vos structures. Notre méthodologie exclusive nous permet d&apos;intervenir sur tous types de bâtiments : habitations, commerces et locaux professionnels à Toulon et ses environs. Nos techniciens hautement qualifiés réalisent un diagnostic complet, vous garantissant une intervention rapide et économique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Experts certifiés avec plus de 15 ans d&apos;expérience sur Toulon
- Matériel de détection dernière génération
- Intervention sous 24h en urgence
- Devis gratuit et transparent
- Rapport détaillé avec localisation précise des fuites</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive coûte généralement entre 250€ et 600€, selon la complexité du diagnostic. Notre tarif inclut le déplacement, l&apos;expertise technique et le rapport détaillé. Un investissement raisonnable pour éviter des dégâts potentiels de plusieurs milliers d&apos;euros.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration d&apos;eau, observez les signes comme les traces d&apos;humidité, les moisissures, les décolorations ou les gonflements. Nos experts utilisent la thermographie infrarouge qui révèle les variations de température et localise précisément le point d&apos;infiltration sans aucune démolition.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à Toulon, contactez immédiatement notre ligne directe au 04 XX XX XX XX. Nos équipes sont mobilisables 7j/7 pour intervenir rapidement et limiter les dommages potentiels causés par une fuite.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Toulon ?
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
