import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Cagnes-sur-Mer | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la détection et la résolution des fuites sur Cagnes-sur-Mer et ses environs. Spécialisés ',
  keywords: 'recherche fuite cagnes-sur-mer, detection fuite toiture cagnes-sur-mer, recherche fuite eau cagnes-sur-mer, fuite toiture cagnes-sur-mer, detection infiltration cagnes-sur-mer, entreprise recherche fuite cagnes-sur-mer',
};

export default function RechercheFuiteCagnesSurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Cagnes-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la détection et la résolution des fuites sur Cagnes-sur-Mer et ses environs. Spécialisés dans la recherche précise de fuites d&apos;eau et d&apos;infiltrations, nous intervenons rapidement pour protéger votre habitat et vos biens.</p>

        <h2>Nos services de recherche et détection de fuites a Cagnes-sur-Mer</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites représente une solution technologique avancée pour identifier précisément l&apos;origine des infiltrations. Nous utilisons des équipements de pointe comme la thermographie, la détection acoustique et les caméras endoscopiques permettant une localisation sans destruction. Notre méthode garantit une intervention ciblée, réduisant les coûts et les travaux inutiles. Nos techniciens hautement qualifiés interviennent aussi bien sur les toitures, canalisations, murs que dans les espaces difficiles d&apos;accès, avec une précision chirurgicale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Technologie de détection ultramoderne garantissant 98% de précision
- Équipe certifiée avec plus de 15 ans d&apos;expérience sur Cagnes-sur-Mer
- Diagnostic gratuit et devis transparent
- Intervention rapide sous 24h en urgence</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 150€ et 500€ selon la complexité, avec un diagnostic précis inclus. Nous proposons un devis personnalisé après évaluation initiale gratuite.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les auréoles, moisissures, décoloration des murs. Nos appareils thermiques permettent de localiser précisément l&apos;humidité sans faire de trous.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une urgence fuite à Cagnes-sur-Mer, contactez notre ligne directe au 04 XX XX XX XX. Nous intervenons 7j/7 avec une équipe mobilisable immédiatement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Cagnes-sur-Mer ?
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
