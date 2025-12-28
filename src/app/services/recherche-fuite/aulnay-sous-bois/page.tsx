import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Aulnay-sous-Bois | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Aulnay-sous-Bois et ses environs. Nos experts int',
  keywords: 'recherche fuite aulnay-sous-bois, detection fuite toiture aulnay-sous-bois, recherche fuite eau aulnay-sous-bois, fuite toiture aulnay-sous-bois, detection infiltration aulnay-sous-bois, entreprise recherche fuite aulnay-sous-bois',
};

export default function RechercheFuiteAulnaySousBoisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Aulnay-sous-Bois</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Aulnay-sous-Bois et ses environs. Nos experts interviennent rapidement pour localiser précisément vos problèmes d&apos;infiltration, en utilisant les technologies les plus avancées du marché.</p>

        <h2>Nos services de recherche et détection de fuites a Aulnay-sous-Bois</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites représente une solution complète et précise pour protéger votre habitat contre les dégâts potentiels. Nous utilisons des techniques non destructives comme la thermographie infrarouge, la détection acoustique et l&apos;endoscopie pour identifier avec une précision de 95% l&apos;origine exacte des infiltrations. Notre équipe hautement qualifiée analyse chaque situation spécifiquement, que ce soit pour une fuite de toiture, de canalisation ou d&apos;infiltration murale. Sur Aulnay-sous-Bois, nous intervenons sous 24h chrono, limitant ainsi les risques de dégradations structurelles et les coûts de réparation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Techniciens certifiés avec plus de 15 ans d&apos;expérience
• Matériel de détection dernier cri
• Diagnostic précis et rapport détaillé
• Intervention rapide sur Aulnay-sous-Bois
• Devis gratuit et transparent</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 600€ selon la complexité, avec un tarif moyen de 350€. Notre diagnostic inclut le repérage précis et un rapport technique complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration murale, nous utilisons la thermographie infrarouge qui révèle les zones d&apos;humidité anormale, complétée par des tests d&apos;humidimétrie et une analyse visuelle experte.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez directement notre hotline au 01 XX XX XX XX. Nous proposons une intervention sous 2h en situation critique pour limiter les dommages potentiels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Aulnay-sous-Bois ?
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
