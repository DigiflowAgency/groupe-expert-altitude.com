import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Marseille | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la détection précise des fuites à Marseille et ses environs. Spécialisés dans la recherch',
  keywords: 'recherche fuite marseille, detection fuite toiture marseille, recherche fuite eau marseille, fuite toiture marseille, detection infiltration marseille, entreprise recherche fuite marseille',
};

export default function RechercheFuiteMarseillePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Marseille</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la détection précise des fuites à Marseille et ses environs. Spécialisés dans la recherche de fuites complexes, nous intervenons rapidement pour protéger votre habitat et vos infrastructures contre les dégâts potentiels.</p>

        <h2>Nos services de recherche et détection de fuites a Marseille</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites représente la solution technologique la plus avancée du sud de la France. Nous utilisons des équipements de pointe comme la caméra thermique et le détecteur acoustique pour localiser précisément toute infiltration, qu&apos;elle concerne une toiture, des canalisations ou des murs. Notre équipe de techniciens hautement qualifiés analyse chaque situation avec une méthodologie rigoureuse, garantissant une intervention non destructive et efficace à 98% sur Marseille et le département des Bouches-du-Rhône. Nous intervenons aussi bien pour les particuliers que les professionnels, avec une approche personnalisée et un diagnostic rapide.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Techniciens certifiés avec plus de 15 ans d&apos;expérience
• Matériel de détection dernière génération
• Intervention sous 24h en urgence
• Devis gratuit et transparent
• Couverture complète de Marseille et ses quartiers</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 600€ selon la complexité, avec un diagnostic précis inclus. Notre tarification est transparente et adaptée à chaque situation spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, nous recommendons l&apos;utilisation d&apos;une caméra thermique qui révèle les variations de température, ainsi que des tests d&apos;humidité professionnels qui identifient précisément les zones affectées sans endommager la structure.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à Marseille, contactez directement notre ligne d&apos;astreinte au 06 XX XX XX XX. Nous assurons une intervention rapide 7j/7 pour limiter les dégâts potentiels et sécuriser votre habitat.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Marseille ?
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
