import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Hyères | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et la détection de fuites sur Hyères et ses environs. Nos experts intervi',
  keywords: 'recherche fuite hyères, detection fuite toiture hyères, recherche fuite eau hyères, fuite toiture hyères, detection infiltration hyères, entreprise recherche fuite hyères',
};

export default function RechercheFuiteHyeresPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Hyères</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et la détection de fuites sur Hyères et ses environs. Nos experts interviennent rapidement pour localiser précisément vos problèmes d&apos;infiltration, en utilisant des technologies de pointe.</p>

        <h2>Nos services de recherche et détection de fuites a Hyères</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites représente la solution technique ultime pour protéger votre habitat contre les dégradations structurelles. Nos techniciens hautement qualifiés utilisent des équipements de thermographie infrarouge et des détecteurs acoustiques permettant de localiser avec une précision de 98% l&apos;origine exacte des infiltrations, sans aucune intervention destructive. Sur Hyères et le Var, nous intervenons aussi bien pour les particuliers que les professionnels, en réalisant un diagnostic complet qui vous permet de comprendre l&apos;intégralité des désordres potentiels. Notre méthode garantit une intervention rapide et économique, limitant les dommages à votre propriété.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés avec plus de 15 ans d&apos;expérience
- Matériel de détection dernier cri
- Diagnostic précis à 98% sans travaux destructifs
- Intervention sous 24h sur Hyères et le département
- Devis gratuit et transparent</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 600€ selon la complexité, avec un tarif moyen de 380€ pour une intervention complète. Notre diagnostic précis permet de limiter les coûts ultérieurs de réparation.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les auréoles, moisissures, décoloration des murs. Nos techniciens utilisent la thermographie infrarouge qui révèle instantanément les zones d&apos;humidité cachées avec une précision chirurgicale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une urgence fuite sur Hyères, contactez directement notre ligne d&apos;astreinte au 06 XX XX XX XX. Nous intervenons 7j/7 avec un délai garanti de moins de 3h pour sécuriser votre situation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Hyères ?
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
