import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Talence | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Talence et ses environs. Nos experts intervienne',
  keywords: 'demoussage toiture talence, traitement toiture talence, nettoyage toiture talence, antimousse toiture talence, hydrofuge toiture talence, entretien toiture talence',
};

export default function TraitementToitureTalencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Talence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Talence et ses environs. Nos experts interviennent rapidement pour préserver la durabilité et l&apos;esthétique de votre toiture dans toute la région bordelaise.</p>

        <h2>Nos services de traitement et démoussage toiture a Talence</h2>
        <div className="space-y-4">
          <p>Le démoussage de toiture est une étape cruciale pour maintenir l&apos;intégrité de votre couverture. Notre processus complet commence par un diagnostic précis de l&apos;état de votre toiture, suivi d&apos;un nettoyage haute précision qui élimine mousses, lichens et salissures sans endommager les tuiles. Notre technique exclusive permet de traiter efficacement 95% des surfaces, en respectant l&apos;environnement et les matériaux. Nous utilisons des produits professionnels qui non seulement nettoient mais protègent durablement votre toiture contre les futures proliférations de mousse.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est garantir un service premium : des techniciens certifiés, un devis gratuit sous 48h, un traitement écologique, une intervention rapide sur Talence et l&apos;ensemble de la Gironde. Nous proposons une garantie de 5 ans sur nos traitements antimousses, ce qui démontre notre engagement qualité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 30€ par m², selon la complexité de la toiture, son accessibilité et le type de traitement nécessaire. Pour une maison moyenne de 100m², comptez un budget global entre 1500€ et 3000€. Un diagnostic personnalisé vous donnera un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin printemps ou début automne, quand l&apos;humidité est modérée. Idéalement tous les 3 à 5 ans, ou dès que vous observez les premiers signes de prolifération de mousse. À Talence, le climat humide rend ces traitements particulièrement recommandés.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;hydrofuge se fait en 3 étapes : nettoyage complet, séchage total de la surface, puis pulvérisation uniforme du produit hydrofuge avec un équipement professionnel. Notre technique garantit une protection optimale contre l&apos;humidité pendant 5 à 7 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Talence ?
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
