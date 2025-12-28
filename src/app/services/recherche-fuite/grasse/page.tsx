import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Grasse | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Grasse et ses environs. Spécialistes en diagnosti',
  keywords: 'recherche fuite grasse, detection fuite toiture grasse, recherche fuite eau grasse, fuite toiture grasse, detection infiltration grasse, entreprise recherche fuite grasse',
};

export default function RechercheFuiteGrassePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Grasse</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Grasse et ses environs. Spécialistes en diagnostic précis, nous intervenons rapidement pour protéger votre habitat contre les dégâts potentiels.</p>

        <h2>Nos services de recherche et détection de fuites a Grasse</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites représente une solution technologique avancée pour identifier précisément l&apos;origine des infiltrations d&apos;eau. Nous utilisons des équipements de pointe comme la caméra thermique et le détecteur acoustique, permettant une localisation non invasive des fuites. Notre méthode garantit une intervention minimale sur votre propriété, réduisant les coûts et les désagréments. Chaque intervention sur Grasse est réalisée par des techniciens hautement qualifiés, avec un taux de précision supérieur à 95% dans la détection des infiltrations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Technologie de détection ultramoderne 
- Équipe de professionnels certifiés 
- Intervention rapide sur Grasse et ses alentours 
- Diagnostic précis et rapport détaillé 
- Devis gratuit et transparent 
- Plus de 15 ans d&apos;expérience en recherche de fuites</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 150€ et 450€, selon la complexité et la surface à analyser. Notre tarification inclut le diagnostic complet, l&apos;utilisation d&apos;équipements high-tech et un rapport détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les traces d&apos;humidité, les moisissures, les décollements de papier peint ou les changements de couleur. Utilisez un détecteur d&apos;humidité professionnel ou contactez un expert pour un diagnostic précis.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez immédiatement Groupe Expert Altitude Com au 04 XX XX XX XX. Nous proposons une intervention sous 2h dans la région grassoise, 7j/7 et 24h/24.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Grasse ?
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
