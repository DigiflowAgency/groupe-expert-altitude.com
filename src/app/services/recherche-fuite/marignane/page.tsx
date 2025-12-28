import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Marignane | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Marignane et ses environs. Spécialistes des so',
  keywords: 'recherche fuite marignane, detection fuite toiture marignane, recherche fuite eau marignane, fuite toiture marignane, detection infiltration marignane, entreprise recherche fuite marignane',
};

export default function RechercheFuiteMarignanePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Marignane</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Marignane et ses environs. Spécialistes des solutions non destructives, nous intervenons rapidement pour protéger votre patrimoine contre les dégâts d&apos;eau.</p>

        <h2>Nos services de recherche et détection de fuites a Marignane</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites représente une solution technologique avancée pour identifier précisément l&apos;origine des infiltrations. Grâce à des équipements de pointe comme la caméra thermique et le détecteur électronique, nous localisons les fuites avec une précision de 95% sans aucune détérioration de votre habitat. Notre équipe de techniciens hautement qualifiés intervient sur tous types de structures à Marignane : toitures, murs, canalisations, terrasses et caves. Chaque diagnostic comprend un rapport détaillé, des recommandations techniques et une évaluation complète des risques potentiels.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Interventions garanties sous 24h sur Marignane et la région PACA
- Technologies de détection non invasives
- Équipe certifiée avec plus de 15 ans d&apos;expérience
- Devis gratuit et transparent
- Solutions adaptées à chaque type de bâtiment</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 750€ selon la complexité, avec un tarif moyen de 450€. Notre diagnostic inclut le déplacement, les tests techniques et un rapport détaillé. Nous proposons un devis personnalisé après évaluation initiale.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les auréoles d&apos;humidité, moisissures, décoloration des murs ou odeurs de moisi. Utilisez un détecteur d&apos;humidité professionnel ou faites appel à notre expertise pour un diagnostic précis et sans risque.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à Marignane, contactez immédiatement notre service d&apos;astreinte au 06 XX XX XX XX. Nous intervenons 7j/7 pour limiter les dégâts et sécuriser votre propriété contre les infiltrations d&apos;eau.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Marignane ?
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
