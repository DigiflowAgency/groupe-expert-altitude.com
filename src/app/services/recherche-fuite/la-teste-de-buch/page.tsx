import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a La Teste-de-Buch | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la détection et la recherche de fuites sur La Teste-de-Buch et ses environs. Spécialistes',
  keywords: 'recherche fuite la teste-de-buch, detection fuite toiture la teste-de-buch, recherche fuite eau la teste-de-buch, fuite toiture la teste-de-buch, detection infiltration la teste-de-buch, entreprise recherche fuite la teste-de-buch',
};

export default function RechercheFuiteLaTesteDeBuchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a La Teste-de-Buch</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la détection et la recherche de fuites sur La Teste-de-Buch et ses environs. Spécialistes en diagnostic précis et intervention rapide, nous protégeons votre patrimoine contre les dégâts potentiels liés aux infiltrations d&apos;eau.</p>

        <h2>Nos services de recherche et détection de fuites a La Teste-de-Buch</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites repose sur une technologie de pointe et une expertise technique pointue. Nous utilisons des équipements ultramodernes comme la caméra thermique et le détecteur électronique pour localiser avec précision l&apos;origine des infiltrations, sans aucune détérioration de votre habitat. Notre méthode non destructive permet d&apos;identifier rapidement les zones problématiques, qu&apos;il s&apos;agisse de fuites de toiture, de canalisations ou d&apos;infiltrations murales. Notre équipe certifiée intervient sur La Teste-de-Buch et le Bassin d&apos;Arcachon avec un taux de réussite de 95% dans la localisation exacte des fuites.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Technologie de détection de dernière génération
- Intervention rapide sous 24h
- Diagnostic précis et devis gratuit
- Experts certifiés avec plus de 15 ans d&apos;expérience
- Solutions adaptées à chaque type de bâtiment</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive coûte généralement entre 150€ et 500€, selon la complexité et la surface à examiner. Notre tarif comprend le diagnostic complet, l&apos;utilisation d&apos;équipements professionnels et un rapport détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration d&apos;eau, observez les signes comme les auréoles, moisissures, ou décoloration des murs. Utilisez un détecteur d&apos;humidité ou faites appel à des professionnels qui emploieront une caméra thermique pour visualiser précisément les zones humides.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence sur La Teste-de-Buch, contactez immédiatement Groupe Expert Altitude Com au 05 XX XX XX XX. Nous proposons un service d&apos;intervention 7j/7 et 24h/24 pour limiter les dégâts causés par les fuites.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a La Teste-de-Buch ?
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
