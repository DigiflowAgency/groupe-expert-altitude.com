import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Neuilly-sur-Seine | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et la détection de fuites à Neuilly-sur-Seine et ses environs. Nos expert',
  keywords: 'recherche fuite neuilly-sur-seine, detection fuite toiture neuilly-sur-seine, recherche fuite eau neuilly-sur-seine, fuite toiture neuilly-sur-seine, detection infiltration neuilly-sur-seine, entreprise recherche fuite neuilly-sur-seine',
};

export default function RechercheFuiteNeuillySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Neuilly-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et la détection de fuites à Neuilly-sur-Seine et ses environs. Nos experts interviennent rapidement pour localiser précisément toute infiltration, protégeant ainsi votre patrimoine immobilier contre les dégâts potentiels.</p>

        <h2>Nos services de recherche et détection de fuites a Neuilly-sur-Seine</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites représente une solution technologique avancée pour identifier avec précision les sources d&apos;infiltrations d&apos;eau. Nous utilisons des équipements de pointe comme la caméra thermique et le détecteur électronique, permettant une localisation non destructive à 98% de fiabilité. Notre processus comprend un diagnostic complet : analyse visuelle, mesures hydrologiques et cartographie numérique des zones suspectes. Pour les habitants de Neuilly-sur-Seine, nous garantissons une intervention sous 24h et un rapport détaillé immédiatement transmis.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés avec plus de 15 ans d&apos;expérience
- Matériel de détection dernière génération
- Intervention rapide sur Neuilly-sur-Seine et départements limitrophes
- Devis gratuit et transparent
- Diagnostic précis sans détérioration de votre propriété</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 650€ selon la complexité, avec un tarif moyen de 380€ pour un diagnostic complet incluant le rapport technique détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les auréoles d&apos;humidité, les moisissures, la décoloration des murs. Utilisez un détecteur d&apos;humidité professionnel ou faites appel à un expert qui utilisera une caméra thermique pour identifier précisément la zone d&apos;infiltration.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez immédiatement le Groupe Expert Altitude Com au 01 XX XX XX XX. Nous proposons une permanence 7j/7 et intervenons dans un délai maximum de 2h sur Neuilly-sur-Seine et communes adjacentes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Neuilly-sur-Seine ?
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
