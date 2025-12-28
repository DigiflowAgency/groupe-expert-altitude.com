import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Salon-de-Provence | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Salon-de-Provence et ses environs. Nos experts util',
  keywords: 'recherche fuite salon-de-provence, detection fuite toiture salon-de-provence, recherche fuite eau salon-de-provence, fuite toiture salon-de-provence, detection infiltration salon-de-provence, entreprise recherche fuite salon-de-provence',
};

export default function RechercheFuiteSalonDeProvencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Salon-de-Provence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Salon-de-Provence et ses environs. Nos experts utilisent des technologies de pointe pour localiser précisément les infiltrations et protéger votre patrimoine immobilier.</p>

        <h2>Nos services de recherche et détection de fuites a Salon-de-Provence</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites représente une solution complète et innovante pour les particuliers et professionnels de Salon-de-Provence. Nous intervenons sur tous types de structures : toitures, murs, canalisations, avec une précision chirurgicale grâce à nos équipements high-tech. Notre méthode non destructive permet de localiser l&apos;origine exacte des infiltrations sans dégrader votre bien, réduisant ainsi les coûts de réparation. Nos techniciens hautement qualifiés réalisent un diagnostic complet, utilisant des caméras thermiques, des détecteurs d&apos;humidité et des systèmes acoustiques ultraperformants qui nous permettent de détecter des fuites invisibles à l&apos;œil nu.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est garantir un service de qualité supérieure. Nos atouts : une intervention rapide sous 24h, un diagnostic précis à 98%, des techniciens certifiés, un devis gratuit, et une expertise reconnue sur tout le secteur de Salon-de-Provence. Nous sommes votre bouclier contre les dégâts des eaux.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 150€ et 500€ selon la complexité, avec un tarif moyen de 280€ à Salon-de-Provence. Ce prix comprend le diagnostic complet, l&apos;utilisation d&apos;équipements professionnels et un rapport détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration d&apos;eau, observez les signes comme des auréoles, moisissures, décoloration des murs. Utilisez un détecteur d&apos;humidité professionnel ou faites appel à nos experts qui utilisent des caméras thermiques permettant de localiser précisément l&apos;humidité sans aucune destruction.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence fuite, contactez immédiatement Groupe Expert Altitude Com au 06 XX XX XX XX. Nous proposons une intervention 7j/7 et 24h/24 pour stopper rapidement les dégâts et limiter les conséquences sur votre bien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Salon-de-Provence ?
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
