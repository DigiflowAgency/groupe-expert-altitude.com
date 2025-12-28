import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Colombes | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Colombes et dans toute la région parisienne. Spécia',
  keywords: 'recherche fuite colombes, detection fuite toiture colombes, recherche fuite eau colombes, fuite toiture colombes, detection infiltration colombes, entreprise recherche fuite colombes',
};

export default function RechercheFuiteColombesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Colombes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Colombes et dans toute la région parisienne. Spécialisés dans la détection précise des infiltrations, nous intervenons rapidement pour protéger votre habitat contre les dégâts potentiels.</p>

        <h2>Nos services de recherche et détection de fuites a Colombes</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites représente une solution technologique avancée pour identifier précisément l&apos;origine des infiltrations d&apos;eau. Nos techniciens utilisent des équipements de pointe comme la caméra thermique et le détecteur acoustique, permettant une localisation non destructive des fuites. Nous intervenons sur tous types de structures : toitures, murs, canalisations, caves et terrasses. Notre méthode garantit une intervention ciblée, réduisant les coûts et les travaux invasifs. Chaque diagnostic est réalisé avec une précision de 95%, assurant une résolution rapide et efficace des problèmes d&apos;infiltration.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos avantages comprennent : un diagnostic rapide sous 24h, une équipe certifiée avec plus de 15 ans d&apos;expérience, un matériel de détection dernier cri, et une intervention sur Colombes et communes environnantes. Nous proposons un devis gratuit et un engagement de résultat.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive à Colombes varie entre 250€ et 650€ selon la complexité. Notre tarif comprend le diagnostic complet, l&apos;utilisation d&apos;équipements high-tech et un rapport détaillé. Un investissement raisonnable pour éviter des dégâts potentiels de plusieurs milliers d&apos;euros.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, utilisez un hygromètre, surveillez les traces d&apos;humidité, les moisissures ou les décolorations. Nos experts repèrent les signes invisibles grâce à des caméras thermiques qui révèlent les variations de température et d&apos;humidité dans les murs.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez immédiatement notre ligne directe au 01 XX XX XX XX. Nous proposons une intervention sous 2h à Colombes, 24h/24 et 7j/7, pour limiter les dommages et sécuriser votre propriété.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Colombes ?
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
