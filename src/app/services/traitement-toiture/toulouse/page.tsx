import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Toulouse | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et le démoussage de toiture à Toulouse et dans sa région. Spécialistes du n',
  keywords: 'demoussage toiture toulouse, traitement toiture toulouse, nettoyage toiture toulouse, antimousse toiture toulouse, hydrofuge toiture toulouse, entretien toiture toulouse',
};

export default function TraitementToitureToulousePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Toulouse</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et le démoussage de toiture à Toulouse et dans sa région. Spécialistes du nettoyage et de l&apos;entretien des toitures, nous protégeons votre patrimoine immobilier contre les dégradations causées par la mousse et l&apos;humidité.</p>

        <h2>Nos services de traitement et démoussage toiture a Toulouse</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques de l&apos;habitat toulousain, caractérisé par des conditions climatiques propices au développement de mousses et lichens. Notre processus complet comprend un diagnostic précis, un nettoyage haute précision sans détérioration des tuiles et un traitement antimousse haute performance. Nos techniciens utilisent des techniques respectueuses de l&apos;environnement, éliminant jusqu&apos;à 98% des mousses en une seule intervention. Chaque traitement est personnalisé selon le type de couverture, garantissant une protection durable contre les infiltrations et la détérioration des matériaux.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale de plus de 15 ans à Toulouse
✓ Équipe certifiée et assurée
✓ Techniques écologiques et innovantes
✓ Devis gratuit sous 48h
✓ Garantie satisfaction de 3 ans sur nos traitements</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix moyen d&apos;un démoussage de toiture à Toulouse varie entre 12€ et 25€ par m², selon la complexité de l&apos;intervention, l&apos;accessibilité et l&apos;état de votre toiture. Un diagnostic préalable gratuit permet un devis précis et personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est généralement fin d&apos;été ou début d&apos;automne. Les températures modérées et le faible risque de pluie permettent une application optimale et un séchage rapide du produit de traitement.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après un démoussage, l&apos;application d&apos;un hydrofuge nécessite un nettoyage complet, un séchage total de la surface et l&apos;utilisation d&apos;un produit adapté à votre type de toiture. Notre équipe applique une technique en 3 étapes : nettoyage, préparation et imprégnation avec un hydrofuge haute performance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Toulouse ?
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
