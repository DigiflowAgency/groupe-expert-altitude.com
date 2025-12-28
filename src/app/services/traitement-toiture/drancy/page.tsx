import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Drancy | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et le démoussage de toiture à Drancy et ses environs. Spécialistes de l&apos;',
  keywords: 'demoussage toiture drancy, traitement toiture drancy, nettoyage toiture drancy, antimousse toiture drancy, hydrofuge toiture drancy, entretien toiture drancy',
};

export default function TraitementToitureDrancyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Drancy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et le démoussage de toiture à Drancy et ses environs. Spécialistes de l&apos;entretien toiture, nous protégeons votre patrimoine immobilier contre les dégradations causées par la mousse et l&apos;humidité.</p>

        <h2>Nos services de traitement et démoussage toiture a Drancy</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de Drancy. Notre approche professionnelle commence par un diagnostic précis de l&apos;état de votre toiture, identifiant les zones les plus sensibles à la prolifération de mousse. Nos techniciens utilisent des techniques innovantes et des produits écologiques qui éliminent efficacement la mousse sans endommager vos matériaux de couverture. Le traitement comprend un nettoyage haute précision, un traitement antimousse et une application d&apos;hydrofuge qui protège durablement votre toiture contre l&apos;humidité et les intempéries. En moyenne, notre intervention prolonge la durée de vie de votre toiture de 10 à 15 ans, tout en améliorant son aspect esthétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée intervient avec du matériel professionnel, nos produits respectent l&apos;environnement, nous proposons une garantie de 5 ans sur nos traitements, et nous réalisons un suivi personnalisé après intervention. Nos tarifs transparents et nos devis détaillés font de nous le partenaire idéal pour l&apos;entretien de votre toiture.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage de toiture varie entre 15€ et 30€ au m², selon la complexité de l&apos;intervention, l&apos;accessibilité et l&apos;état initial de votre toiture. Pour une maison moyenne à Drancy de 100m², comptez un budget global entre 1500€ et 3000€, incluant nettoyage, traitement antimousse et hydrofugation.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse se situe entre avril et septembre, période où les conditions météorologiques sont optimales. Il est recommandé d&apos;intervenir tous les 3 à 5 ans, ou dès que vous observez les premiers signes de prolifération de mousse, pour prévenir les dégradations structurelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;hydrofuge nécessite un support propre et sec. Notre processus inclut un nettoyage haute pression, un traitement antimousse, puis l&apos;application au rouleau ou par pulvérisation d&apos;un produit hydrofuge spécifique, en 2 couches croisées pour une protection maximale contre l&apos;humidité et les infiltrations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Drancy ?
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
