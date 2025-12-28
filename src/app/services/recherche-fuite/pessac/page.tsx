import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Pessac | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Pessac et ses environs. Nos experts utilisent de',
  keywords: 'recherche fuite pessac, detection fuite toiture pessac, recherche fuite eau pessac, fuite toiture pessac, detection infiltration pessac, entreprise recherche fuite pessac',
};

export default function RechercheFuitePessacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Pessac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Pessac et ses environs. Nos experts utilisent des technologies de pointe pour localiser précisément les infiltrations d&apos;eau, protégeant ainsi votre patrimoine immobilier.</p>

        <h2>Nos services de recherche et détection de fuites a Pessac</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites représente une solution complète et innovante pour les particuliers et professionnels de Pessac. Nous intervenons sur tous types de structures : toitures, murs, canalisations et réseaux enterrés. Notre méthode non destructive utilise des caméras thermiques, des détecteurs acoustiques et des systèmes de corrélation acoustique, permettant une localisation précise à 98% des sources d&apos;infiltration. Chaque intervention commence par un diagnostic technique approfondi, réalisé par nos techniciens certifiés, qui établissent un rapport détaillé avec localisation exacte et recommandations de réparation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est garantir : 1) Une expertise technique de plus de 15 ans dans la détection de fuites, 2) Un matériel de diagnostic dernier cri, 3) Des techniciens formés et certifiés, 4) Un devis gratuit et transparent sans engagement. Nous intervenons rapidement sur Pessac et toute la Gironde.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive coûte généralement entre 250€ et 750€, selon la complexité et la surface à investiguer. Notre tarif inclut le diagnostic complet, l&apos;utilisation d&apos;équipements haute technologie et un rapport détaillé. Un investissement raisonnable pour éviter des dégâts potentiellement beaucoup plus coûteux.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration d&apos;eau dans un mur, nos experts utilisent la thermographie infrarouge qui révèle les variations de température, des hygromètres professionnels mesurant l&apos;humidité, et des caméras d&apos;inspection. Ces méthodes permettent de localiser précisément la source sans dégrader la structure.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à Pessac, contactez immédiatement notre ligne directe au 05 XX XX XX XX. Nous proposons une intervention sous 2h en situation critique, 7j/7 et 24h/24. Notre équipe est équipée pour réagir rapidement et limiter les dommages potentiels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Pessac ?
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
