import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Blagnac | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Blagnac et ses environs. Spécialistes en diagnostic',
  keywords: 'recherche fuite blagnac, detection fuite toiture blagnac, recherche fuite eau blagnac, fuite toiture blagnac, detection infiltration blagnac, entreprise recherche fuite blagnac',
};

export default function RechercheFuiteBlagnacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Blagnac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Blagnac et ses environs. Spécialistes en diagnostic précis, nous intervenons rapidement pour protéger votre patrimoine immobilier contre les dégâts potentiels.</p>

        <h2>Nos services de recherche et détection de fuites a Blagnac</h2>
        <div className="space-y-4">
          <p>Notre service de recherche de fuites représente une solution technologique avancée pour identifier précisément l&apos;origine des infiltrations d&apos;eau. Grâce à des équipements de détection ultramodernes comme la caméra thermique et le détecteur électronique, nous localisons avec une précision de 95% les zones problématiques sans réaliser de travaux destructifs. Notre équipe certifiée intervient sur tous types de bâtiments - maisons individuelles, copropriétés, locaux professionnels - avec une méthodologie rigoureuse garantissant une intervention rapide et efficace. En moyenne, nous résolvons 80% des problèmes de fuites en moins de 3 heures, limitant ainsi les dégâts potentiels.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour un service premium : techniciens hautement qualifiés, matériel de pointe, intervention rapide sur Blagnac et alentours, diagnostic précis et transparent, devis gratuit sous 24h, rapport détaillé après intervention. Nous sommes certifiés RGE et disposons de plus de 15 ans d&apos;expérience dans la détection de fuites.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive coûte généralement entre 250€ et 600€ selon la complexité, avec un tarif moyen de 350€ à Blagnac. Ce prix comprend le déplacement, le diagnostic précis et un rapport technique détaillé. Nous proposons un devis personnalisé gratuit après évaluation initiale.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration dans un mur, nous utilisons plusieurs techniques : caméra thermique pour identifier les variations de température, hygromètre pour mesurer l&apos;humidité, et détecteur électronique pour localiser précisément la source. Ces méthodes permettent de repérer l&apos;infiltration sans percer ni détruire la surface.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez directement notre ligne d&apos;astreinte au 05 XX XX XX XX, disponible 7j/7 et 24h/24. Notre équipe est mobilisable sous 2h maximum sur Blagnac et son agglomération pour toute situation critique nécessitant une intervention immédiate.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Blagnac ?
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
