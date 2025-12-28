import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Aubagne | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Aubagne et ses environs. Nos experts intervie',
  keywords: 'demoussage toiture aubagne, traitement toiture aubagne, nettoyage toiture aubagne, antimousse toiture aubagne, hydrofuge toiture aubagne, entretien toiture aubagne',
};

export default function TraitementToitureAubagnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Aubagne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Aubagne et ses environs. Nos experts interviennent rapidement pour protéger et restaurer la beauté de votre toiture, garantissant longévité et performance.</p>

        <h2>Nos services de traitement et démoussage toiture a Aubagne</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations d&apos;Aubagne et de la région. Nous utilisons des techniques professionnelles qui éliminent intégralement la mousse, les algues et les lichens qui détériorent votre couverture. Notre processus comprend un nettoyage haute précision, un traitement antimousse écologique et une application d&apos;hydrofuge qui protège durablement vos tuiles contre l&apos;humidité et les agressions environnementales. Chaque intervention est précédée d&apos;un diagnostic technique précis pour adapter notre méthode à votre type de toiture.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Avec plus de 15 ans d&apos;expérience, nous garantissons : un diagnostic gratuit, des techniciens certifiés, des produits éco-responsables, une intervention rapide sur Aubagne, et une protection garantie pendant 5 ans. Notre engagement qualité fait notre différence.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix moyen d&apos;un démoussage de toiture varie entre 15€ et 30€ au m², selon la surface, l&apos;accessibilité et le niveau de salissure. Pour une maison standard à Aubagne de 100m², comptez un budget entre 1500€ et 3000€, incluant nettoyage et traitement préventif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur période pour un traitement antimousse se situe entre avril et septembre, lors de conditions sèches. Idéalement, réalisez ce traitement tous les 3-5 ans ou dès que vous observez les premiers signes de développement de mousse, pour prévenir les dégradations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;hydrofuge nécessite : un support parfaitement sec, un nettoyage soigné, l&apos;utilisation d&apos;un produit adapté à votre type de tuiles, une application uniforme à la brosse ou au pulvérisateur, et un temps de séchage minimal de 24h dans des conditions météorologiques favorables.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Aubagne ?
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
