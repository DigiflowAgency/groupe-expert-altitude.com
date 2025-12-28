import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Ramonville-Saint-Agne | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Ramonville-Saint-Agne et ses environs. Spécial',
  keywords: 'recherche fuite ramonville-saint-agne, detection fuite toiture ramonville-saint-agne, recherche fuite eau ramonville-saint-agne, fuite toiture ramonville-saint-agne, detection infiltration ramonville-saint-agne, entreprise recherche fuite ramonville-saint-agne',
};

export default function RechercheFuiteRamonvilleSaintAgnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Ramonville-Saint-Agne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Ramonville-Saint-Agne et ses environs. Spécialistes en diagnostic précis, nous intervenons rapidement pour protéger votre habitat contre les dégâts potentiels liés aux infiltrations d&apos;eau.</p>

        <h2>Nos services de recherche et détection de fuites a Ramonville-Saint-Agne</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites représente une solution technologique avancée pour identifier précisément l&apos;origine des infiltrations sans travaux destructifs. Grâce à des équipements de pointe comme la caméra thermique et le détecteur électronique, nous localisons avec une précision de 95% les zones problématiques dans les toitures, murs et canalisations. Notre méthode non invasive permet d&apos;intervenir rapidement, limitant les dommages potentiels et réduisant significativement les coûts de réparation. Notre équipe hautement qualifiée, présente à Ramonville-Saint-Agne, garantit un diagnostic rapide et une intervention sur mesure.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Technologie de détection ultramoderne avec précision de 95%
- Équipe certifiée avec plus de 15 ans d&apos;expérience
- Intervention sous 24h en urgence
- Devis gratuit et transparent sans engagement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 600€ selon la complexité, avec un tarif moyen de 380€. Notre diagnostic inclut le repérage précis, un rapport détaillé et des préconisations de réparation.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les auréoles d&apos;humidité, moisissures, ou dégradations de peinture. Utilisez un détecteur d&apos;humidité ou faites appel à des professionnels qui utiliseront une caméra thermique pour localiser exactement la source.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à Ramonville-Saint-Agne, contactez immédiatement le Groupe Expert Altitude Com au 05 XX XX XX XX. Nous proposons une intervention rapide 7j/7 pour limiter les dégâts et sécuriser votre habitat.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Ramonville-Saint-Agne ?
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
