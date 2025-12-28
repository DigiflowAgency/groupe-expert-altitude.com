import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Carquefou | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Carquefou et ses environs. Spécialistes en diagn',
  keywords: 'recherche fuite carquefou, detection fuite toiture carquefou, recherche fuite eau carquefou, fuite toiture carquefou, detection infiltration carquefou, entreprise recherche fuite carquefou',
};

export default function RechercheFuiteCarquefouPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Carquefou</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Carquefou et ses environs. Spécialistes en diagnostic précis, nous intervenons rapidement pour protéger votre habitat contre les dommages potentiels.</p>

        <h2>Nos services de recherche et détection de fuites a Carquefou</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites représente une solution technologique avancée pour identifier précisément les infiltrations d&apos;eau dans votre toiture, murs ou canalisations. Grâce à des équipements de pointe comme la caméra thermique et le détecteur électronique, nous localisons avec une précision de 95% l&apos;origine exacte des fuites sans travaux destructifs. Notre méthode non invasive permet de limiter les coûts et les désagréments, en réalisant un diagnostic complet en moins de 3 heures sur l&apos;ensemble de votre propriété à Carquefou. Notre expertise technique garantit une intervention rapide et efficace, prévenant ainsi les dégradations structurelles et les risques d&apos;humidité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés avec plus de 10 ans d&apos;expérience
- Matériel de détection haute technologie
- Intervention rapide sous 24h
- Devis gratuit et transparent
- Couverture complète de Carquefou et Loire-Atlantique</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une recherche de fuite non destructive varie entre 250€ et 650€ selon la complexité, incluant le diagnostic complet, les technologies utilisées et la surface à expertiser. Notre tarification transparente comprend le déplacement, le diagnostic précis et un rapport détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration d&apos;eau dans un mur, nous utilisons plusieurs techniques : caméra thermique qui révèle les variations de température, détecteur d&apos;humidité électronique, et parfois une inspection endoscopique. Ces méthodes permettent de localiser l&apos;infiltration sans percer ni démolir.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez directement notre ligne dédiée au 02 XX XX XX XX. Nous proposons une astreinte 7j/7 pour les situations critiques, avec un délai d&apos;intervention maximum de 3h sur Carquefou et ses communes limitrophes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Carquefou ?
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
