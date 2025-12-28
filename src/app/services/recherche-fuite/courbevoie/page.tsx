import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Courbevoie | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Courbevoie et ses environs. Spécialistes en diagnos',
  keywords: 'recherche fuite courbevoie, detection fuite toiture courbevoie, recherche fuite eau courbevoie, fuite toiture courbevoie, detection infiltration courbevoie, entreprise recherche fuite courbevoie',
};

export default function RechercheFuiteCourbevoiePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Courbevoie</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Courbevoie et ses environs. Spécialistes en diagnostic précis et interventions rapides, nous protégeons votre patrimoine contre les risques d&apos;infiltrations.</p>

        <h2>Nos services de recherche et détection de fuites a Courbevoie</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites combine technologie de pointe et expertise technique pour identifier précisément l&apos;origine de vos problèmes d&apos;infiltration. Utilisant des caméras thermiques, des détecteurs acoustiques et des appareils de mesure haute précision, nous intervenons sur tous types de fuites : toiture, canalisations, murs et sols. Notre méthode non destructive permet de localiser le point exact de la fuite sans dégrader votre bâtiment, réduisant ainsi les coûts et les interventions. Chaque diagnostic est personnalisé, avec un rapport détaillé et des recommandations adaptées à votre situation spécifique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Équipe certifiée avec plus de 15 ans d&apos;expérience
✓ Matériel technologique dernier cri
✓ Intervention sous 24h à Courbevoie et alentours
✓ Diagnostic précis garanti à 98%
✓ Devis gratuit et transparent</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive coûte entre 250€ et 600€ selon la complexité, avec un tarif moyen de 350€ pour un diagnostic complet. Notre devis est gratuit et sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les traces d&apos;humidité, moisissures, décoloration des murs. Utilisez un détecteur d&apos;humidité ou appelez un professionnel qui réalisera un diagnostic thermique précis.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez immédiatement Groupe Expert Altitude Com au 01 XX XX XX XX. Nous proposons une permanence 7j/7 pour les interventions urgentes à Courbevoie et dans les Hauts-de-Seine.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Courbevoie ?
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
