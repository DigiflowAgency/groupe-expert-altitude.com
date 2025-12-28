import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Vitry-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la détection et la recherche de fuites sur Vitry-sur-Seine et ses environs. Nos experts i',
  keywords: 'recherche fuite vitry-sur-seine, detection fuite toiture vitry-sur-seine, recherche fuite eau vitry-sur-seine, fuite toiture vitry-sur-seine, detection infiltration vitry-sur-seine, entreprise recherche fuite vitry-sur-seine',
};

export default function RechercheFuiteVitrySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Vitry-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la détection et la recherche de fuites sur Vitry-sur-Seine et ses environs. Nos experts interviennent rapidement pour identifier précisément l&apos;origine de vos infiltrations, en préservant l&apos;intégrité de votre habitat.</p>

        <h2>Nos services de recherche et détection de fuites a Vitry-sur-Seine</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites répond aux problématiques les plus complexes des propriétaires de Vitry-sur-Seine. Nous utilisons des technologies de pointe comme la thermographie infrarouge et la détection acoustique, permettant de localiser avec une précision de 95% l&apos;origine des infiltrations sans travaux destructifs. Notre processus complet comprend un diagnostic initial, une analyse technique approfondie et un rapport détaillé. Nos techniciens certifiés interviennent sur tous types de structures : toitures, murs, canalisations, caves et terrasses, en garantissant une intervention rapide et professionnelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos avantages clés : un diagnostic précis à 95%, une intervention sous 24h, des équipements high-tech de détection, des techniciens certifiés avec plus de 10 ans d&apos;expérience. Nous sommes également assurés pour toutes nos interventions, vous offrant une tranquillité d&apos;esprit totale.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive sur Vitry-sur-Seine coûte généralement entre 250€ et 550€, selon la complexité du diagnostic. Ce tarif inclut le déplacement, l&apos;expertise technique et le rapport détaillé. Notre devis est toujours gratuit et sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration dans un mur, nous utilisons plusieurs techniques : thermographie infrarouge pour visualiser les zones humides, hygromètre pour mesurer précisément le taux d&apos;humidité, et parfois caméra endoscopique pour une analyse en profondeur sans détruire la structure.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence sur Vitry-sur-Seine, contactez directement notre ligne d&apos;astreinte au 01 XX XX XX XX. Nous intervenons 7j/7, 24h/24 pour les situations critiques nécessitant une recherche immédiate de fuite.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Vitry-sur-Seine ?
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
