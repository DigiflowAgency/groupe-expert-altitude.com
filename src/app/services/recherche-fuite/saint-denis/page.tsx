import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Saint-Denis | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Saint-Denis et ses environs. Nos experts intervie',
  keywords: 'recherche fuite saint-denis, detection fuite toiture saint-denis, recherche fuite eau saint-denis, fuite toiture saint-denis, detection infiltration saint-denis, entreprise recherche fuite saint-denis',
};

export default function RechercheFuiteSaintDenisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Saint-Denis</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Saint-Denis et ses environs. Nos experts interviennent rapidement pour localiser précisément vos problèmes d&apos;infiltration avec des technologies de pointe.</p>

        <h2>Nos services de recherche et détection de fuites a Saint-Denis</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites repose sur une expertise technique de haut niveau. Nous utilisons des équipements high-tech comme la caméra thermique et le détecteur électronique pour identifier avec précision l&apos;origine des infiltrations sans travaux destructifs. Notre méthode garantit une intervention ciblée et économique, minimisant les dégâts potentiels sur votre toiture ou vos murs. Chaque diagnostic à Saint-Denis est personnalisé, avec un rapport détaillé comprenant localisation exacte, causes probables et recommandations de réparation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Techniciens certifiés avec plus de 15 ans d&apos;expérience
✓ Matériel de détection dernière génération
✓ Interventions rapides dans un délai de 24h
✓ Devis gratuit et transparent
✓ Couverture complète de Saint-Denis et départements limitrophes</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 600€ selon la complexité, avec un tarif moyen de 350€ pour un diagnostic complet incluant le déplacement et l&apos;expertise technique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme traces d&apos;humidité, moisissures, décoloration des murs. Utilisez un détecteur d&apos;humidité professionnel ou faites appel à un expert qui utilisera une caméra thermique pour localiser précisément l&apos;infiltration.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à Saint-Denis, contactez immédiatement Groupe Expert Altitude Com au 01 XX XX XX XX. Nous proposons une intervention sous 2h en situation critique pour limiter les dégâts potentiels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Saint-Denis ?
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
