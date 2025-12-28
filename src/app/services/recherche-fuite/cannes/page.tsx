import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Cannes | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et la détection de fuites sur Cannes et sa région. Nos experts intervienn',
  keywords: 'recherche fuite cannes, detection fuite toiture cannes, recherche fuite eau cannes, fuite toiture cannes, detection infiltration cannes, entreprise recherche fuite cannes',
};

export default function RechercheFuiteCannesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Cannes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et la détection de fuites sur Cannes et sa région. Nos experts interviennent rapidement pour localiser précisément toute infiltration d&apos;eau, protégeant ainsi votre patrimoine immobilier.</p>

        <h2>Nos services de recherche et détection de fuites a Cannes</h2>
        <div className="space-y-4">
          <p>Notre service de recherche de fuites représente la technologie de pointe en matière de diagnostic précis et non destructif. Grâce à des équipements high-tech comme la caméra thermique et le détecteur électronique, nous identifions l&apos;origine exacte des infiltrations sans dégrader votre habitat. Notre méthode garantit une intervention ciblée, économique et rapide, que ce soit pour une fuite de toiture, de canalisation ou d&apos;infiltration murale. Notre équipe spécialisée couvre l&apos;ensemble du territoire cannois, avec une réactivité qui fait notre réputation : 95% de nos interventions sont réalisées sous 24h.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Un diagnostic précis à 99% garanti, 2) Des techniciens certifiés et expérimentés, 3) Un devis gratuit et transparent, 4) Une intervention non destructive minimisant les travaux et coûts annexes.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive à Cannes varie entre 250€ et 600€ selon la complexité, incluant le diagnostic précis et un rapport détaillé. Notre tarification transparente exclut tout surcoût caché.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, utilisez un hygromètre, observez les traces d&apos;humidité, et surveillez les signes comme les moisissures, décolorations ou boursoufflures. Notre diagnostic professionnel permet une identification rapide et précise.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence sur Cannes, contactez immédiatement notre ligne d&apos;astreinte au 04 XX XX XX XX. Nous intervenons 7j/7, 24h/24 pour limiter les dégâts et sécuriser votre propriété.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Cannes ?
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
