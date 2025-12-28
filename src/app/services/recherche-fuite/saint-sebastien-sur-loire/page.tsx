import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Saint-Sébastien-sur-Loire | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la détection précise et rapide de fuites sur Saint-Sébastien-sur-Loire et ses environs. N',
  keywords: 'recherche fuite saint-sébastien-sur-loire, detection fuite toiture saint-sébastien-sur-loire, recherche fuite eau saint-sébastien-sur-loire, fuite toiture saint-sébastien-sur-loire, detection infiltration saint-sébastien-sur-loire, entreprise recherche fuite saint-sébastien-sur-loire',
};

export default function RechercheFuiteSaintSebastienSurLoirePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Saint-Sébastien-sur-Loire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la détection précise et rapide de fuites sur Saint-Sébastien-sur-Loire et ses environs. Nos techniciens spécialisés interviennent avec des technologies de pointe pour résoudre vos problèmes d&apos;infiltrations, en minimisant les dégâts et les coûts.</p>

        <h2>Nos services de recherche et détection de fuites a Saint-Sébastien-sur-Loire</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites représente une solution complète et innovante pour les propriétaires et professionnels de Saint-Sébastien-sur-Loire. Nous utilisons des équipements de détection ultramodernes comme la caméra thermique et le corrélateur acoustique, permettant de localiser avec une précision de 95% l&apos;origine exacte des infiltrations sans travaux destructifs. Notre méthode non invasive garantit la préservation de votre habitat tout en assurant un diagnostic rapide et fiable des fuites sur toiture, canalisations ou murs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Technologie de détection dernier cri avec une précision de 95%
✓ Équipe certifiée avec plus de 15 ans d&apos;expérience
✓ Intervention rapide sous 24h
✓ Devis gratuit et transparent
✓ Garantie de résultat sur nos prestations</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 800€ selon la complexité, avec un tarif moyen de 450€ pour une détection complète incluant le diagnostic précis et le rapport détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les traces d&apos;humidité, moisissures, décoloration des murs ou sensation de fraîcheur anormale. Nos experts utilisent des caméras thermiques et hygromètres pour identifier précisément l&apos;origine et l&apos;étendue de l&apos;infiltration.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez immédiatement Groupe Expert Altitude Com au 02 XX XX XX XX. Nous proposons un service d&apos;astreinte 7j/7 pour intervenir rapidement et limiter les dégâts causés par les fuites.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Saint-Sébastien-sur-Loire ?
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
