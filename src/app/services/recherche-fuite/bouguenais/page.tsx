import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Bouguenais | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Bouguenais et ses environs. Spécialisés dans la ',
  keywords: 'recherche fuite bouguenais, detection fuite toiture bouguenais, recherche fuite eau bouguenais, fuite toiture bouguenais, detection infiltration bouguenais, entreprise recherche fuite bouguenais',
};

export default function RechercheFuiteBouguenaisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Bouguenais</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Bouguenais et ses environs. Spécialisés dans la localisation précise des infiltrations, nous intervenons rapidement pour protéger votre habitat et vos biens contre les dégâts potentiels.</p>

        <h2>Nos services de recherche et détection de fuites a Bouguenais</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites repose sur des technologies de pointe permettant de localiser avec précision les sources d&apos;infiltration sans travaux destructifs. Nos techniciens experts utilisent des équipements ultramodernes comme la caméra thermique, le détecteur acoustique et l&apos;hygromètre professionnel pour identifier les moindres traces d&apos;humidité. Dans la région de Bouguenais, nous traitons chaque année plus de 250 cas de fuites, avec un taux de résolution de 98%. Notre approche méthodique nous permet d&apos;intervenir rapidement sur les fuites de toiture, canalisations, terrasses et caves, limitant ainsi les dommages potentiels.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique certifiée avec des techniciens formés aux dernières technologies, 2) Un diagnostic précis et non destructif garantissant la tranquillité, 3) Une intervention rapide sur Bouguenais et ses communes limitrophes, 4) Un devis gratuit et transparent sans engagement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 150€ et 350€ selon la complexité, incluant le diagnostic complet et le rapport détaillé. Notre tarification transparente n&apos;inclut aucun frais caché et s&apos;adapte à chaque situation spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les auréoles, moisissures, décoloration ou boursoufflures. Utilisez un hygromètre professionnel pour mesurer l&apos;humidité ou faites appel à nos experts qui détectent les infiltrations invisibles à l&apos;œil nu grâce à des technologies thermiques avancées.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à Bouguenais, contactez notre ligne directe au 02 XX XX XX XX, disponible 7j/7 et 24h/24. Notre équipe d&apos;astreinte intervient sous 2h pour limiter les dégâts et sécuriser votre propriété.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Bouguenais ?
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
