import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Bondy | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Bondy et ses environs. Spécialistes des infiltratio',
  keywords: 'recherche fuite bondy, detection fuite toiture bondy, recherche fuite eau bondy, fuite toiture bondy, detection infiltration bondy, entreprise recherche fuite bondy',
};

export default function RechercheFuiteBondyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Bondy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Bondy et ses environs. Spécialistes des infiltrations complexes, nous intervenons rapidement pour protéger votre patrimoine immobilier contre les dégâts potentiels.</p>

        <h2>Nos services de recherche et détection de fuites a Bondy</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites représente une solution technologique de pointe pour identifier précisément les sources d&apos;infiltration d&apos;eau. Nous utilisons des équipements de détection ultramodernes comme la caméra thermique et le détecteur acoustique, permettant une localisation non destructive à 98% de précision. Notre équipe certifiée intervient sur tous types de structures : toitures, murs, canalisations, caves et terrasses. Chaque diagnostic comprend un rapport détaillé avec localisation exacte, évaluation des risques et préconisations techniques. En moyenne, notre intervention permet de réduire jusqu&apos;à 70% les coûts de réparation potentiels.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Pourquoi choisir Groupe Expert Altitude Com ? Notre différence repose sur trois piliers : expertise technique, rapidité d&apos;intervention et transparence. Nous sommes habilités par les assurances, disposons de certifications professionnelles, et proposons un devis gratuit sous 24h. Notre connaissance approfondie du territoire de Bondy nous permet d&apos;adapter nos solutions aux spécificités locales de l&apos;habitat.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive coûte entre 250€ et 650€ selon la complexité, incluant le diagnostic complet et le rapport technique. Notre tarification transparente n&apos;inclut pas les éventuels travaux de réparation, facturés séparément après validation.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration d&apos;eau, observez les signes comme traces d&apos;humidité, moisissures, décoloration des murs ou odeurs musquées. Utilisez un détecteur d&apos;humidité professionnel ou appelez un expert qui réalisera un diagnostic thermique précis révélant les zones d&apos;infiltration.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez immédiatement Groupe Expert Altitude Com au 01 XX XX XX XX. Nous proposons une astreinte 7j/7 et intervenons sous 2h dans l&apos;ensemble du département, avec une équipe spécialisée directement disponible à Bondy.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Bondy ?
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
