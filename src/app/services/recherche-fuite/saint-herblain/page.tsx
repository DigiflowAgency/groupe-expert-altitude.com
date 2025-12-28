import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Saint-Herblain | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la détection et la recherche de fuites sur Saint-Herblain et ses environs. Spécialistes e',
  keywords: 'recherche fuite saint-herblain, detection fuite toiture saint-herblain, recherche fuite eau saint-herblain, fuite toiture saint-herblain, detection infiltration saint-herblain, entreprise recherche fuite saint-herblain',
};

export default function RechercheFuiteSaintHerblainPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Saint-Herblain</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la détection et la recherche de fuites sur Saint-Herblain et ses environs. Spécialistes en diagnostic précis, nous intervenons rapidement pour protéger votre habitat contre les risques d&apos;infiltrations et de dégradations structurelles.</p>

        <h2>Nos services de recherche et détection de fuites a Saint-Herblain</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites représente une solution technologique avancée pour identifier précisément l&apos;origine des infiltrations d&apos;eau. Grâce à des équipements de pointe comme la caméra thermique et le détecteur électronique, nous localisons avec une précision de 95% les zones problématiques sans destruction. Notre méthode non invasive permet d&apos;intervenir sur les toitures, murs, canalisations et sols, garantissant une intervention rapide et économique. Nos techniciens hautement qualifiés réalisent un diagnostic complet, vous proposant ensuite les solutions les plus adaptées à votre situation spécifique sur Saint-Herblain.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Technologie de détection dernier cri garantissant 95% de précision
• Équipe certifiée avec plus de 15 ans d&apos;expérience
• Intervention rapide sous 24h sur Saint-Herblain
• Devis gratuit et transparent sans engagement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 650€ selon la complexité, avec un tarif moyen de 380€. Notre diagnostic précis permet d&apos;éviter des réparations coûteuses ultérieures.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, utilisez un hygromètre, surveillez les traces d&apos;humidité, les moisissures ou écoutez les bruits d&apos;eau. Un professionnel utilisera des caméras thermiques pour localiser exactement la source sans détruire les murs.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez immédiatement Groupe Expert Altitude Com au 02 XX XX XX XX. Nous proposons un service d&apos;astreinte 7j/7 pour intervenir rapidement et limiter les dégâts potentiels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Saint-Herblain ?
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
