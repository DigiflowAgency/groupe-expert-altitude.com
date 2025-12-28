import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Rillieux-la-Pape | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Rillieux-la-Pape et ses environs. Spécialistes',
  keywords: 'recherche fuite rillieux-la-pape, detection fuite toiture rillieux-la-pape, recherche fuite eau rillieux-la-pape, fuite toiture rillieux-la-pape, detection infiltration rillieux-la-pape, entreprise recherche fuite rillieux-la-pape',
};

export default function RechercheFuiteRillieuxLaPapePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Rillieux-la-Pape</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Rillieux-la-Pape et ses environs. Spécialistes en diagnostic précis, nous intervenons rapidement pour protéger votre patrimoine immobilier contre les risques d&apos;infiltrations.</p>

        <h2>Nos services de recherche et détection de fuites a Rillieux-la-Pape</h2>
        <div className="space-y-4">
          <p>Notre service de recherche de fuites repose sur des technologies de pointe et une expertise technique pointue. Nous utilisons des détecteurs électroniques, des caméras thermiques et des appareils acoustiques permettant de localiser avec une précision de 95% l&apos;origine exacte des infiltrations, sans aucune détérioration de votre habitat. Notre méthode non destructive garantit un diagnostic rapide et économique pour tous types de fuites : toiture, canalisations, murs, terrasses ou caves. Chaque intervention fait l&apos;objet d&apos;un rapport détaillé avec localisation précise et recommandations techniques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans en détection de fuites, 2) Un matériel technologique dernier cri, 3) Une intervention sous 24h sur Rillieux-la-Pape, 4) Un diagnostic gratuit et sans engagement, 5) Une équipe certifiée et assurée.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 600€ selon la complexité, avec un diagnostic précis inclus. Nous proposons un devis personnalisé gratuit après évaluation initiale.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, surveillez les signes comme les traces d&apos;humidité, moisissures, décoloration des murs ou odeurs musquées. Nos techniciens utilisent des caméras thermiques qui révèlent instantanément les zones d&apos;humidité cachées.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence sur Rillieux-la-Pape, contactez notre ligne directe au 04 XX XX XX XX, disponible 7j/7 et 24h/24. Nous intervenons rapidement pour limiter les dégâts et sécuriser votre propriété.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Rillieux-la-Pape ?
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
