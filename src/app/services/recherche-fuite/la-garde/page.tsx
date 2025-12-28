import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a La Garde | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur La Garde et ses environs. Avec une expertise poin',
  keywords: 'recherche fuite la garde, detection fuite toiture la garde, recherche fuite eau la garde, fuite toiture la garde, detection infiltration la garde, entreprise recherche fuite la garde',
};

export default function RechercheFuiteLaGardePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a La Garde</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur La Garde et ses environs. Avec une expertise pointue et un diagnostic précis, nous intervenons rapidement pour protéger votre patrimoine immobilier contre les dégâts liés aux infiltrations.</p>

        <h2>Nos services de recherche et détection de fuites a La Garde</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites combine des technologies de pointe et un savoir-faire technique unique. Nous utilisons des équipements ultramodernes comme la caméra thermique et le détecteur acoustique pour localiser avec une précision de 95% l&apos;origine exacte des infiltrations. Notre méthode non destructive permet d&apos;identifier les fuites de toiture, les infiltrations murales et les problèmes de canalisations sans dégrader votre habitat. Notre équipe certifiée intervient sur tous types de bâtiments - maisons individuelles, copropriétés, locaux professionnels - avec une approche méthodique et professionnelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est garantir un diagnostic rapide et fiable. Nos techniciens sont formés annuellement aux dernières techniques de recherche de fuite. Nous proposons un rapport détaillé sous 24h, une intervention sous 48h et une garantie de résultat. Notre connaissance approfondie du territoire de La Garde nous permet d&apos;adapter nos solutions aux spécificités locales.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 750€ selon la complexité, avec un diagnostic précis inclus. Nous proposons un devis gratuit et transparent sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, utilisez un hygromètre pour mesurer l&apos;humidité, observez les traces de moisissures et écoutez les bruits d&apos;écoulement. Notre équipe réalise un diagnostic complet avec des appareils de détection thermique pour localiser l&apos;infiltration sans aucune détérioration.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence sur La Garde, contactez immédiatement Groupe Expert Altitude Com au 06 XX XX XX XX. Nous assurons une permanence 7j/7 pour les interventions urgentes liées aux fuites et infiltrations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a La Garde ?
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
