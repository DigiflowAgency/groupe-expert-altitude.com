import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Tournefeuille | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Tournefeuille et ses environs. Nos experts inter',
  keywords: 'recherche fuite tournefeuille, detection fuite toiture tournefeuille, recherche fuite eau tournefeuille, fuite toiture tournefeuille, detection infiltration tournefeuille, entreprise recherche fuite tournefeuille',
};

export default function RechercheFuiteTournefeuillePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Tournefeuille</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Tournefeuille et ses environs. Nos experts interviennent rapidement pour localiser précisément vos problèmes d&apos;infiltration avec des technologies de pointe.</p>

        <h2>Nos services de recherche et détection de fuites a Tournefeuille</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites représente la solution technologique la plus avancée pour identifier rapidement les infiltrations d&apos;eau. Nous utilisons des caméras thermiques, des détecteurs acoustiques et des appareils de géolocalisation permettant de repérer les fuites sans aucune destruction. Notre méthode garantit une intervention ciblée, réduisant les coûts et les travaux inutiles. Notre équipe hautement qualifiée intervient sur tous types de bâtiments à Tournefeuille : maisons individuelles, copropriétés, bâtiments industriels et commerciaux. Chaque détection fait l&apos;objet d&apos;un rapport détaillé avec localisation précise et recommandations techniques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Technologies de détection non destructives les plus récentes
✓ Équipe certifiée avec plus de 15 ans d&apos;expérience
✓ Intervention sous 24h sur Tournefeuille et l&apos;agglomération toulousaine
✓ Diagnostic précis avec rapport technique complet
✓ Devis gratuit et transparent</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 750€ selon la complexité, avec un tarif moyen de 450€. Notre diagnostic précis permet de limiter les coûts ultérieurs de réparation.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, nous recommandons : observer les traces d&apos;humidité, mesurer l&apos;hygrométrie avec un appareil spécialisé, utiliser une caméra thermique pour identifier les zones de température différente et réaliser un test d&apos;infiltrométrie.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez directement notre ligne d&apos;astreinte au 06 XX XX XX XX. Nous intervenons 7j/7 pour les situations critiques nécessitant une détection immédiate de fuite.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Tournefeuille ?
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
