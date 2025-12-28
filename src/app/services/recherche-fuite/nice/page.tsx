import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Nice | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la détection précise des fuites sur la Côte d&apos;Azur. Basés à Nice, nous intervenons rapide',
  keywords: 'recherche fuite nice, detection fuite toiture nice, recherche fuite eau nice, fuite toiture nice, detection infiltration nice, entreprise recherche fuite nice',
};

export default function RechercheFuiteNicePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Nice</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la détection précise des fuites sur la Côte d&apos;Azur. Basés à Nice, nous intervenons rapidement pour localiser et résoudre tous types de fuites, protégeant votre habitat contre les dégâts potentiels.</p>

        <h2>Nos services de recherche et détection de fuites a Nice</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites représente une solution technologique avancée pour identifier avec précision les infiltrations d&apos;eau. Nous utilisons des équipements de pointe comme la caméra thermique et le détecteur acoustique, permettant une localisation non destructive des fuites. Notre méthode garantit une intervention ciblée, minimisant les travaux et les coûts pour nos clients niçois. Nos techniciens hautement qualifiés analysent chaque situation avec une expertise méticuleuse, détectant les moindres signes d&apos;infiltration dans les toitures, murs et canalisations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Technologie de détection ultramoderne
• Équipe certifiée avec plus de 15 ans d&apos;expérience
• Intervention rapide sur Nice et sa région
• Diagnostic précis garanti à 98%
• Devis gratuit et transparent</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 750€, selon la complexité et la surface à examiner. Notre tarification inclut le diagnostic complet et un rapport détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les auréoles d&apos;humidité, moisissures, ou dégradation de peinture. Nos experts utilisent des caméras thermiques et hygromètres pour identifier précisément l&apos;origine de l&apos;infiltration.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez immédiatement Groupe Expert Altitude Com au 06 XX XX XX XX. Nous proposons une astreinte 24h/24 pour les fuites critiques à Nice et ses environs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Nice ?
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
