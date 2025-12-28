import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Paris 5e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Paris 5e et ses environs. Spécialisés dans la loc',
  keywords: 'recherche fuite paris 5e, detection fuite toiture paris 5e, recherche fuite eau paris 5e, fuite toiture paris 5e, detection infiltration paris 5e, entreprise recherche fuite paris 5e',
};

export default function RechercheFuiteParis5ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Paris 5e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Paris 5e et ses environs. Spécialisés dans la localisation précise des infiltrations, nous intervenons rapidement pour protéger votre patrimoine immobilier contre les dégâts potentiels.</p>

        <h2>Nos services de recherche et détection de fuites a Paris 5e</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites combine technologie de pointe et expertise technique pour identifier avec précision l&apos;origine de vos problèmes d&apos;infiltration. Utilisant des équipements ultramodernes comme la thermographie infrarouge et la détection acoustique, nous réalisons un diagnostic complet sans aucune détérioration de vos murs ou toitures. Notre méthode non invasive permet de localiser au millimètre près les zones de fuite, qu&apos;il s&apos;agisse de toitures, canalisations ou structures enterrées. Nos techniciens hautement qualifiés interviennent sur Paris 5e avec une garantie de résultat, vous assurant une solution rapide et économique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Technologie de pointe : Équipements de détection dernière génération
- Expertise locale : Spécialistes des problématiques parisiennes
- Intervention rapide : Diagnostic sous 24h
- Devis gratuit et transparent
- Plus de 95% de nos détections résolvent le problème en une seule intervention</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive à Paris 5e varie entre 250€ et 750€, selon la complexité et la surface à analyser. Notre tarification inclut le diagnostic complet, l&apos;expertise technique et un rapport détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, utilisez un hygromètre pour mesurer l&apos;humidité, observez les traces de moisissures, et surveillez les variations de couleur ou de texture du mur. Nos experts utilisent la thermographie infrarouge pour identifier précisément les zones humides.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence sur Paris 5e, contactez immédiatement Groupe Expert Altitude Com au 01 XX XX XX XX. Nos équipes sont disponibles 7j/7 pour une intervention sous 2h en situation critique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Paris 5e ?
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
