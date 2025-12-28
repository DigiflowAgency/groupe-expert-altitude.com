import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Villeurbanne | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de confiance en recherche et détection de fuites à Villeurbanne et ses environs. Spécialistes des solutions te',
  keywords: 'recherche fuite villeurbanne, detection fuite toiture villeurbanne, recherche fuite eau villeurbanne, fuite toiture villeurbanne, detection infiltration villeurbanne, entreprise recherche fuite villeurbanne',
};

export default function RechercheFuiteVilleurbannePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Villeurbanne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de confiance en recherche et détection de fuites à Villeurbanne et ses environs. Spécialistes des solutions techniques innovantes, nous intervenons rapidement pour protéger votre patrimoine immobilier contre les dégâts potentiels.</p>

        <h2>Nos services de recherche et détection de fuites a Villeurbanne</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites représente une solution technologique avancée pour identifier précisément les sources d&apos;infiltration d&apos;eau. Grâce à nos équipements de pointe comme la caméra thermique et le détecteur électronique, nous localisons avec une précision de 98% les fuites dans les toitures, murs et canalisations. Notre approche non destructive permet de minimiser les travaux et les coûts, tout en garantissant une intervention rapide et efficace sur Villeurbanne et la métropole lyonnaise.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés avec plus de 15 ans d&apos;expérience
- Matériel de détection dernier cri
- Diagnostic précis sous 24h chrono
- Intervention sur l&apos;ensemble du département du Rhône
- Devis gratuit et transparent</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 600€ selon la complexité, avec un tarif moyen de 350€ pour une intervention standard à Villeurbanne. Notre devis détaillé vous permettra de connaître précisément le coût avant toute intervention.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, utilisez un hygromètre, surveillez les traces d&apos;humidité, les moisissures et écoutez les bruits d&apos;eau. Nos experts peuvent réaliser un diagnostic thermique précis permettant de localiser l&apos;infiltration sans démolition.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez immédiatement Groupe Expert Altitude Com au 06 XX XX XX XX. Nous proposons une permanence 7j/7 et intervenons sous 2h dans toute l&apos;agglomération de Villeurbanne.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Villeurbanne ?
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
