import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Cannes | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Cannes et dans toute la région côtière. Spéciali',
  keywords: 'demoussage toiture cannes, traitement toiture cannes, nettoyage toiture cannes, antimousse toiture cannes, hydrofuge toiture cannes, entretien toiture cannes',
};

export default function TraitementToitureCannesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Cannes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Cannes et dans toute la région côtière. Spécialistes du nettoyage et de la protection des toitures, nous intervenons avec une expertise technique précise pour préserver la longévité de votre patrimoine immobilier.</p>

        <h2>Nos services de traitement et démoussage toiture a Cannes</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de la région cannoise, soumises à des conditions climatiques complexes. Nous utilisons des techniques professionnelles qui éliminent intégralement la mousse, les lichens et les algues sans endommager vos tuiles ou ardoises. Notre processus comprend un diagnostic initial, un nettoyage haute précision, puis l&apos;application d&apos;un traitement antimousse et hydrofuge qui protège durablement votre toiture contre les infiltrations et la détérioration. Nos interventions permettent de prolonger la durée de vie de votre toiture de 10 à 15 ans, tout en améliorant significativement son aspect esthétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nous nous distinguons par notre expertise technique, notre approche personnalisée et notre engagement qualité. Notre équipe est certifiée, équipée de matériel professionnel, et intervient avec des produits écologiques et homologués. Nous proposons un diagnostic gratuit, des devis transparents et une garantie de résultat. Notre connaissance précise des spécificités architecturales de Cannes nous permet d&apos;adapter parfaitement nos interventions.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage de toiture varie entre 15€ et 30€ au m², selon la surface, l&apos;accessibilité et le degré de salissement. Pour une maison moyenne de 100m², comptez un investissement entre 1500€ et 3000€. Ces tarifs incluent le nettoyage, le traitement antimousse et la protection hydrofuge, représentant un coût bien inférieur au remplacement prématuré de votre toiture.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour réaliser un traitement antimousse se situe idéalement au printemps ou à l&apos;automne, périodes où la température oscille entre 10°C et 25°C. Ces conditions climatiques optimales permettent une application et une pénétration efficaces du produit. À Cannes, nous recommandons une intervention tous les 3 à 5 ans pour maintenir une protection optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après le démoussage, l&apos;application d&apos;un hydrofuge nécessite plusieurs étapes précises : nettoyage complet de la surface, séchage total, application au pulvérisateur ou au rouleau d&apos;un produit adapté à votre type de toiture, en deux couches croisées. Il est crucial de respecter les conditions météorologiques et le temps de séchage entre chaque couche pour garantir une protection maximale contre l&apos;humidité et les infiltrations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Cannes ?
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
