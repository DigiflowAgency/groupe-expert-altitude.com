import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Maisons-Alfort | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Maisons-Alfort et ses environs. Nos experts inte',
  keywords: 'demoussage toiture maisons-alfort, traitement toiture maisons-alfort, nettoyage toiture maisons-alfort, antimousse toiture maisons-alfort, hydrofuge toiture maisons-alfort, entretien toiture maisons-alfort',
};

export default function TraitementToitureMaisonsAlfortPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Maisons-Alfort</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Maisons-Alfort et ses environs. Nos experts interviennent rapidement pour préserver la longévité et l&apos;esthétique de votre couverture, en utilisant des techniques innovantes et respectueuses de votre habitat.</p>

        <h2>Nos services de traitement et démoussage toiture a Maisons-Alfort</h2>
        <div className="space-y-4">
          <p>Le démoussage de toiture est un entretien essentiel pour protéger votre bien immobilier contre les dégradations prématurées. Notre équipe spécialisée réalise un diagnostic précis avant toute intervention, identifiant les zones sensibles et les risques potentiels. Nous utilisons des produits professionnels haute performance qui éliminent efficacement la mousse, les lichens et les algues sans endommager vos tuiles. Notre processus complet comprend un nettoyage haute précision, un traitement antimousse préventif et une application d&apos;hydrofuge qui protège durablement votre toiture contre l&apos;humidité et les infiltrations. Sur Maisons-Alfort, plus de 95% de nos clients constatent une amélioration significative de l&apos;aspect et de la résistance de leur toiture après notre intervention.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est garantir un service de qualité : techniciens certifiés, matériel professionnel dernier cri, devis gratuit et détaillé, intervention rapide sous 72h, respect des normes environnementales, traitement personnalisé selon le type de couverture, garantie décennale, et satisfaction client à 100%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix moyen d&apos;un démoussage de toiture varie entre 15€ et 35€ au m², selon la complexité de l&apos;intervention, l&apos;accessibilité, et l&apos;état de votre toiture. Un diagnostic précis sur place nous permet de vous proposer un devis transparent sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour réaliser un traitement antimousse se situe au printemps ou à l&apos;automne, période où la croissance des mousses est la plus active. Il est recommandé de traiter votre toiture tous les 5 à 7 ans pour maintenir une protection optimale contre les infiltrations et la détérioration.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après un démoussage, l&apos;application d&apos;un hydrofuge nécessite un séchage complet de la surface. Nous nettoyons d&apos;abord soigneusement la toiture, puis appliquons l&apos;hydrofuge au pulvérisateur en couche uniforme, en respectant les conditions météorologiques idéales (température entre 10-25°C, absence de pluie imminente).
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Maisons-Alfort ?
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
