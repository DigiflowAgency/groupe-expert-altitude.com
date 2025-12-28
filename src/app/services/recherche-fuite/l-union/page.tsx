import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a L\'Union | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la détection précise et rapide des fuites à L&apos;Union et ses environs. Spécialistes en rech',
  keywords: 'recherche fuite l'union, detection fuite toiture l'union, recherche fuite eau l'union, fuite toiture l'union, detection infiltration l'union, entreprise recherche fuite l'union',
};

export default function RechercheFuiteLUnionPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a L'Union</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la détection précise et rapide des fuites à L&apos;Union et ses environs. Spécialistes en recherche de fuites non destructives, nous intervenons sur tous types de structures avec une expertise technique inégalée.</p>

        <h2>Nos services de recherche et détection de fuites a L'Union</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites représente la solution professionnelle pour identifier rapidement les infiltrations d&apos;eau avant qu&apos;elles ne causent des dommages structurels importants. Grâce à des technologies de pointe comme la thermographie infrarouge et les détecteurs acoustiques, nous localisons avec une précision de 95% l&apos;origine exacte des fuites sans travaux destructifs. Notre équipe intervient sur toitures, murs, canalisations et réseaux enterrés, en proposant un diagnostic complet et des solutions sur-mesure adaptées à chaque situation spécifique à L&apos;Union.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés avec plus de 10 ans d&apos;expérience
- Matériel de détection dernier cri garanti
- Intervention rapide sous 24h
- Devis gratuit et transparent
- Couverture complète de L&apos;Union et du secteur</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 150€ et 500€ selon la complexité, avec un tarif moyen de 250€. Notre diagnostic précis permet de limiter les coûts de réparation ultérieurs.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, utilisez un hygromètre, surveillez les traces d&apos;humidité, les moisissures et écoutez les bruits anormaux. Notre équipe réalise un diagnostic thermique complet permettant de localiser précisément l&apos;infiltration.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez immédiatement Groupe Expert Altitude Com au 06 XX XX XX XX. Nous proposons une intervention sous 2h dans toute la zone de L&apos;Union pour limiter les dégâts potentiels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a L'Union ?
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
