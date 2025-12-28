import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Vallauris | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la détection précise et rapide des fuites sur Vallauris et ses environs. Spécialistes ',
  keywords: 'recherche fuite vallauris, detection fuite toiture vallauris, recherche fuite eau vallauris, fuite toiture vallauris, detection infiltration vallauris, entreprise recherche fuite vallauris',
};

export default function RechercheFuiteVallaurisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Vallauris</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la détection précise et rapide des fuites sur Vallauris et ses environs. Spécialistes en recherche de fuites, nous intervenons avec une technologie de pointe pour protéger votre patrimoine immobilier contre les dégâts potentiels.</p>

        <h2>Nos services de recherche et détection de fuites a Vallauris</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites représente une solution complète et innovante pour les particuliers et professionnels de Vallauris. Nous utilisons des équipements de détection ultramodernes comme la caméra thermique et le détecteur acoustique, permettant de localiser précisément l&apos;origine des infiltrations sans destruction. Notre méthode garantit une intervention ciblée, réduisant les coûts et les travaux invasifs. Notre équipe de techniciens hautement qualifiés réalise un diagnostic complet, identifiant les zones à risque avec une précision de 95%, qu&apos;il s&apos;agisse de fuites de toiture, de canalisations ou d&apos;infiltrations murales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Technologie de pointe avec détection non destructive
- Intervention rapide sous 24h sur Vallauris
- Expertise certifiée et plus de 15 ans d&apos;expérience
- Devis gratuit et transparent
- Diagnostic précis à 95% garanti</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive coûte généralement entre 250€ et 600€, selon la complexité et la surface à analyser. Notre tarif inclut le diagnostic complet, l&apos;utilisation d&apos;équipements professionnels et un rapport détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration d&apos;eau, observez les signes comme les auréoles, moisissures, décoloration des murs ou sensation d&apos;humidité. Utilisez un détecteur d&apos;humidité professionnel ou contactez un expert qui réalisera un diagnostic thermique précis.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à Vallauris, contactez immédiatement le Groupe Expert Altitude Com au 06 XX XX XX XX. Nous proposons une intervention sous 2h en situation critique pour limiter les dégâts potentiels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Vallauris ?
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
