import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Toulouse | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en recherche et détection de fuites à Toulouse et dans toute l&apos;agglomération. Spécialistes en ',
  keywords: 'recherche fuite toulouse, detection fuite toiture toulouse, recherche fuite eau toulouse, fuite toiture toulouse, detection infiltration toulouse, entreprise recherche fuite toulouse',
};

export default function RechercheFuiteToulousePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Toulouse</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en recherche et détection de fuites à Toulouse et dans toute l&apos;agglomération. Spécialistes en diagnostic précis, nous intervenons rapidement pour protéger votre habitat des dommages causés par les infiltrations d&apos;eau.</p>

        <h2>Nos services de recherche et détection de fuites a Toulouse</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites représente une solution technologique avancée pour identifier précisément l&apos;origine des infiltrations sans travaux destructifs. Grâce à des équipements de pointe comme la caméra thermique et le détecteur électronique, nous localisons avec une précision de 95% les zones problématiques dans les toitures, murs et canalisations. Notre méthode non invasive permet d&apos;intervenir rapidement et efficacement, limitant les coûts et les désagréments pour nos clients toulousains. Chaque intervention fait l&apos;objet d&apos;un rapport détaillé et d&apos;un diagnostic complet, garantissant une transparence totale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans en recherche de fuites, 2) Un diagnostic immédiat avec des technologies de dernière génération, 3) Une intervention rapide sous 24h, 4) Des techniciens certifiés et assurés intervenant sur Toulouse et sa région.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 650€ selon la complexité, incluant le diagnostic précis et le rapport détaillé. Nous proposons un devis gratuit et transparent avant toute intervention.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, nous utilisons la thermographie infrarouge qui révèle les zones d&apos;humidité cachées, le détecteur d&apos;humidité électronique et l&apos;analyse visuelle experte. Ces méthodes permettent de localiser l&apos;infiltration sans ouvrir les murs.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez directement notre ligne d&apos;astreinte au 05 XX XX XX XX, disponible 7j/7. Notre équipe est mobilisable rapidement sur Toulouse et ses environs pour limiter les dégâts causés par une fuite.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Toulouse ?
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
