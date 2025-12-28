import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Aubervilliers | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Aubervilliers et ses environs. Spécialistes en di',
  keywords: 'recherche fuite aubervilliers, detection fuite toiture aubervilliers, recherche fuite eau aubervilliers, fuite toiture aubervilliers, detection infiltration aubervilliers, entreprise recherche fuite aubervilliers',
};

export default function RechercheFuiteAubervilliersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Aubervilliers</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Aubervilliers et ses environs. Spécialistes en diagnostic précis, nous intervenons rapidement pour protéger votre patrimoine immobilier contre les risques d&apos;infiltrations.</p>

        <h2>Nos services de recherche et détection de fuites a Aubervilliers</h2>
        <div className="space-y-4">
          <p>Notre service de recherche de fuites représente une solution technologique avancée pour identifier précisément l&apos;origine des infiltrations d&apos;eau. Grâce à des équipements de détection ultramodernes comme la caméra thermique et le détecteur électronique, nous localisons sans destruction les zones problématiques. Notre méthode non invasive permet d&apos;intervenir sur toiture, murs, canalisations avec une précision de 95%, limitant ainsi les travaux et les coûts. Notre équipe d&apos;experts formés réalise un diagnostic complet en moins de 2h, garantissant une intervention rapide et efficace sur Aubervilliers.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : un diagnostic 100% précis, des techniciens certifiés, un matériel de pointe, une intervention sous 24h, et une expertise reconnue localement. Nous intervenons sur tous types de bâtiments avec un taux de résolution de 98% des fuites détectées.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 750€ selon la complexité, avec un devis gratuit et détaillé. Le prix inclut le diagnostic précis, les technologies de pointe et l&apos;expertise de nos techniciens.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les traces d&apos;humidité, les moisissures, les déformations de peinture. Utilisez un détecteur d&apos;humidité ou appelez un professionnel qui réalisera un diagnostic thermique précis.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez Groupe Expert Altitude Com au 01 XX XX XX XX. Nous proposons une intervention rapide 7j/7, avec une équipe mobilisable sous 2h sur Aubervilliers et la région parisienne.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Aubervilliers ?
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
