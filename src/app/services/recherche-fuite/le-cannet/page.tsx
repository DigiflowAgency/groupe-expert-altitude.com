import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Le Cannet | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Le Cannet et ses environs. Spécialistes en diagno',
  keywords: 'recherche fuite le cannet, detection fuite toiture le cannet, recherche fuite eau le cannet, fuite toiture le cannet, detection infiltration le cannet, entreprise recherche fuite le cannet',
};

export default function RechercheFuiteLeCannetPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Le Cannet</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Le Cannet et ses environs. Spécialistes en diagnostic précis, nous intervenons rapidement pour protéger votre habitat contre les dégâts potentiels d&apos;infiltrations d&apos;eau.</p>

        <h2>Nos services de recherche et détection de fuites a Le Cannet</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites représente une solution technologique avancée pour identifier précisément l&apos;origine des infiltrations sans travaux destructifs. Grâce à des équipements de pointe comme la caméra thermique et le détecteur acoustique, nous localisons au millimètre près les zones problématiques dans les toitures, murs et canalisations. Notre méthode non invasive permet d&apos;économiser jusqu&apos;à 60% des coûts traditionnels de réparation. Sur Le Cannet, nous intervenons auprès des particuliers et professionnels, avec une expertise reconnue dans la prévention des dommages liés à l&apos;eau.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés avec plus de 15 ans d&apos;expérience
- Matériel de détection dernier cri
- Diagnostic précis sous 24h
- Intervention rapide et garantie sur Le Cannet
- Devis gratuit et transparent</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive sur Le Cannet varie entre 250€ et 600€, selon la complexité. Notre tarif inclut le diagnostic complet, l&apos;utilisation d&apos;équipements haute technologie et un rapport détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, utilisez un hygromètre, observez les traces d&apos;humidité, écoutez les bruits inhabituels et surveillez les changements de couleur ou déformations sur les murs. Notre équipe peut réaliser un diagnostic thermique précis.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence sur Le Cannet, contactez immédiatement Groupe Expert Altitude Com au 06 XX XX XX XX. Nous proposons une astreinte 7j/7 pour les situations critiques nécessitant une intervention rapide.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Le Cannet ?
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
