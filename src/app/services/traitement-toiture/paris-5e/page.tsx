import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Paris 5e | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Paris 5e. Spécialistes du nettoyage et de la ',
  keywords: 'demoussage toiture paris 5e, traitement toiture paris 5e, nettoyage toiture paris 5e, antimousse toiture paris 5e, hydrofuge toiture paris 5e, entretien toiture paris 5e',
};

export default function TraitementToitureParis5ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Paris 5e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Paris 5e. Spécialistes du nettoyage et de la protection des toitures, nous intervenons sur tous types de couvertures avec une expertise technique reconnue dans l&apos;arrondissement.</p>

        <h2>Nos services de traitement et démoussage toiture a Paris 5e</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage représente bien plus qu&apos;un simple nettoyage : c&apos;est une solution complète de préservation de votre patrimoine immobilier. Notre équipe qualifiée utilise des techniques professionnelles qui éliminent intégralement la mousse et les végétations parasitaires, tout en protégeant la structure de votre toiture. Nous réalisons un diagnostic précis avant intervention, identifiant les zones critiques et adaptant notre traitement. Notre processus comprend un nettoyage haute précision, l&apos;application d&apos;un traitement antimousse écologique et la pose d&apos;un hydrofuge de protection qui garantit une résistance optimale contre l&apos;humidité et les agressions climatiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique de plus de 15 ans sur Paris 5e, 2) Des techniciens certifiés et assurés, 3) Un traitement 100% écologique respectant les normes environnementales, 4) Une garantie de résultat de 5 ans sur nos interventions.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 35€ au m², selon la complexité de la toiture, son accessibilité et l&apos;état initial. Pour une maison moyenne de 100m² à Paris 5e, comptez un budget global entre 1500€ et 3500€, incluant nettoyage et traitement préventif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin printemps ou début automne. Ces périodes offrent des conditions météorologiques optimales : température entre 10-25°C, faible humidité, permettant un séchage et une pénétration parfaits du produit de traitement.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;hydrofuge nécessite : 1) Un séchage complet de la surface, 2) Un nettoyage minutieux, 3) L&apos;utilisation d&apos;un produit adapté au matériau (tuiles, ardoises), 4) Une application uniforme au pulvérisateur ou rouleau, 5) Respecter un temps de séchage de 24h avant exposition.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Paris 5e ?
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
