import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Créteil | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Créteil et ses environs. Spécialistes en diagnostic',
  keywords: 'recherche fuite créteil, detection fuite toiture créteil, recherche fuite eau créteil, fuite toiture créteil, detection infiltration créteil, entreprise recherche fuite créteil',
};

export default function RechercheFuiteCreteilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Créteil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Créteil et ses environs. Spécialistes en diagnostic précis, nous intervenons rapidement pour protéger votre habitat contre les dégâts d&apos;eau potentiels.</p>

        <h2>Nos services de recherche et détection de fuites a Créteil</h2>
        <div className="space-y-4">
          <p>Notre service de recherche de fuites combine technologie de pointe et expertise technique pour identifier précisément l&apos;origine de vos infiltrations. Grâce à des détecteurs thermiques et acoustiques ultramodernes, nous localisons avec une précision de 95% les fuites sans destruction de vos murs ou toitures. Notre équipe certifiée intervient sur l&apos;ensemble du Val-de-Marne, avec une réactivité garantie sous 24h pour les habitants de Créteil. Chaque diagnostic comprend un rapport détaillé, des recommandations techniques et une estimation précise des travaux nécessaires.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Experts certifiés avec plus de 15 ans d&apos;expérience
- Matériel de détection dernière génération
- Intervention rapide sur Créteil et ses alentours
- Devis gratuit et transparent
- Diagnostic non destructif à 95% de réussite</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 600€ selon la complexité, incluant le diagnostic complet et l&apos;expertise technique. Notre tarif comprend le déplacement, les tests et le rapport détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, utilisez un hygromètre, surveillez les traces d&apos;humidité, les moisissures ou les décolorations. Nos experts utilisent des caméras thermiques qui révèlent instantanément les zones humides sans aucune détérioration.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à Créteil, contactez immédiatement Groupe Expert Altitude Com au 01 23 45 67 89. Nous proposons une permanence 7j/7 pour les situations critiques nécessitant une intervention rapide.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Créteil ?
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
