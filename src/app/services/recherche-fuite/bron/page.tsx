import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Bron | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Bron et ses environs. Spécialistes en diagnostic pr',
  keywords: 'recherche fuite bron, detection fuite toiture bron, recherche fuite eau bron, fuite toiture bron, detection infiltration bron, entreprise recherche fuite bron',
};

export default function RechercheFuiteBronPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Bron</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Bron et ses environs. Spécialistes en diagnostic précis, nous intervenons rapidement pour protéger votre habitat contre les dégâts potentiels causés par les infiltrations.</p>

        <h2>Nos services de recherche et détection de fuites a Bron</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites représente une solution technologique avancée pour identifier précisément l&apos;origine des infiltrations d&apos;eau. Grâce à des équipements de pointe comme la caméra thermique et le détecteur acoustique, nous localisons avec une précision de 95% les zones problématiques sans travaux destructifs. Notre équipe certifiée intervient sur tous types de fuites : toiture, canalisations, murs, terrasses, garantissant une intervention rapide et efficace. À Bron, nous comprenons les enjeux spécifiques de l&apos;habitat local et adaptons nos techniques en conséquence, offrant un diagnostic complet et des solutions durables.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Technologie de détection ultramoderne avec un taux de précision de 95%
- Équipe de techniciens certifiés et expérimentés
- Intervention rapide sous 24h sur Bron et l&apos;agglomération lyonnaise
- Devis gratuit et transparent sans engagement
- Solutions non-destructives préservant votre habitat</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 650€ selon la complexité, avec un tarif moyen de 380€ incluant le diagnostic complet et le rapport détaillé. Notre expertise permet de limiter les coûts ultérieurs de réparation.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration dans un mur, utilisez des indices comme les traces d&apos;humidité, moisissures, décoloration ou bullages de peinture. Notre méthode professionnelle combine caméra thermique, détecteur d&apos;humidité et analyse acoustique pour un diagnostic précis sans détérioration.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence fuite à Bron, contactez immédiatement Groupe Expert Altitude Com au 04 XX XX XX XX. Nous proposons une astreinte 7j/7 et intervenons sous 2h pour limiter les dégâts potentiels et sécuriser votre habitat.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Bron ?
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
