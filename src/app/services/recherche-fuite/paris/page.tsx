import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Paris | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Paris et en région parisienne. Nos experts utilisen',
  keywords: 'recherche fuite paris, detection fuite toiture paris, recherche fuite eau paris, fuite toiture paris, detection infiltration paris, entreprise recherche fuite paris',
};

export default function RechercheFuiteParisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Paris</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Paris et en région parisienne. Nos experts utilisent les technologies les plus avancées pour localiser précisément toute infiltration d&apos;eau, protégeant ainsi votre patrimoine immobilier.</p>

        <h2>Nos services de recherche et détection de fuites a Paris</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites représente une solution technologique de pointe pour identifier rapidement et efficacement les sources d&apos;infiltrations d&apos;eau. Grâce à nos équipements de thermographie infrarouge et de détection acoustique, nous intervenons sur tous types de structures : toitures, murs, canalisations et sols. Notre méthode non invasive permet de cartographier avec une précision de 95% l&apos;origine exacte des fuites sans détériorer votre bâtiment. Nos techniciens hautement qualifiés analysent chaque situation avec une expertise reconnue dans la région parisienne, garantissant une intervention rapide et économique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique certifiée avec plus de 15 ans d&apos;expérience, 2) Un diagnostic précis réalisé sous 24h, 3) Une intervention sur mesure adaptée à chaque type de bâtiment parisien, 4) Un devis gratuit et transparent sans engagement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive à Paris varie entre 250€ et 750€ selon la complexité, avec un tarif moyen de 450€. Notre diagnostic inclut le repérage précis, un rapport détaillé et des préconisations de réparation.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration dans un mur, nous utilisons la thermographie infrarouge qui révèle les variations de température, l&apos;humidimètre professionnel et l&apos;analyse acoustique. Ces techniques permettent de localiser l&apos;infiltration sans percer ni démolir.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à Paris, contactez directement notre ligne d&apos;astreinte 24/7 au 01 XX XX XX XX. Nos équipes sont mobilisables immédiatement pour éviter tout dommage supplémentaire et sécuriser votre bâtiment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Paris ?
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
