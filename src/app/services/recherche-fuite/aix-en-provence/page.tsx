import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Aix-en-Provence | Groupe Expert Altitude Com',
  description: 'Spécialistes de la détection de fuites à Aix-en-Provence, le Groupe Expert Altitude Com intervient rapidement pour localiser et résoudre vos problèmes d&apos;in',
  keywords: 'recherche fuite aix-en-provence, detection fuite toiture aix-en-provence, recherche fuite eau aix-en-provence, fuite toiture aix-en-provence, detection infiltration aix-en-provence, entreprise recherche fuite aix-en-provence',
};

export default function RechercheFuiteAixEnProvencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Aix-en-Provence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialistes de la détection de fuites à Aix-en-Provence, le Groupe Expert Altitude Com intervient rapidement pour localiser et résoudre vos problèmes d&apos;infiltrations. Notre expertise technique garantit une intervention précise et non-destructive sur tout type de bâtiment.</p>

        <h2>Nos services de recherche et détection de fuites a Aix-en-Provence</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites représente la solution technologique ultime pour identifier précisément l&apos;origine de vos infiltrations. Grâce à des équipements de pointe comme la caméra thermique et le détecteur électronique, nous localisons avec une précision de 95% les zones problématiques sans détériorer votre habitat. Notre méthode innovante permet d&apos;intervenir sur les fuites de toiture, les infiltrations murales et les réseaux hydrauliques, en minimisant les travaux et les coûts. Nos techniciens hautement qualifiés réalisent un diagnostic complet qui vous protège durablement contre les risques d&apos;eau.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : Une expertise locale de plus de 15 ans à Aix-en-Provence, Des technologies de détection ultramodernes, Une intervention rapide sous 24h, Un diagnostic précis garanti à 95%, Une équipe certifiée et assurée.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive coûte entre 250€ et 550€ selon la complexité, avec un devis gratuit. Le prix inclut le diagnostic complet, l&apos;utilisation d&apos;équipements high-tech et le rapport détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, utilisez un hygromètre, surveillez les traces d&apos;humidité, les moisissures et écoutez les bruits anormaux. Notre diagnostic professionnel révèle précisément l&apos;origine et l&apos;étendue de l&apos;infiltration avec des outils électroniques spécialisés.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez directement notre hotline au 04 XX XX XX XX. Nous intervenons 7j/7 à Aix-en-Provence et ses environs, avec un délai de réponse maximum de 2h pour les situations critiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Aix-en-Provence ?
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
