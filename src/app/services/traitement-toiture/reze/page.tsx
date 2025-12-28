import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Rezé | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Rezé et ses environs. Nos experts protègent votr',
  keywords: 'demoussage toiture rezé, traitement toiture rezé, nettoyage toiture rezé, antimousse toiture rezé, hydrofuge toiture rezé, entretien toiture rezé',
};

export default function TraitementToitureRezePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Rezé</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Rezé et ses environs. Nos experts protègent votre patrimoine immobilier avec des solutions techniques innovantes et durables, garantissant la longévité de votre toiture.</p>

        <h2>Nos services de traitement et démoussage toiture a Rezé</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de la région nantaise. Nos techniciens hautement qualifiés utilisent des techniques professionnelles pour éliminer intégralement la mousse, les lichens et les algues qui détériorent votre couverture. Nous réalisons un diagnostic précis avant intervention, identifiant chaque zone sensible et adaptant notre protocole. Notre traitement comprend un nettoyage haute pression contrôlé, l&apos;application d&apos;un produit antimousse écologique et un traitement hydrofuge qui protège durablement votre toiture contre l&apos;humidité et les infiltrations. Chaque intervention est personnalisée, avec une garantie de résultat pour les toitures de Rezé et de la métropole nantaise.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos avantages incluent : un diagnostic gratuit sur site, des produits 100% écologiques, une équipe certifiée avec plus de 15 ans d&apos;expérience, une intervention rapide sous 72h, et des tarifs transparents sans surprise. Nous sommes également assurés pour toutes nos interventions de traitement et démoussage.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage de toiture varie entre 15€ et 30€ par m², selon la complexité de l&apos;intervention, l&apos;état de la toiture et son accessibilité. Pour une maison standard de 100m², comptez un budget global entre 1500€ et 3000€. Un devis personnalisé gratuit vous permettra d&apos;obtenir un tarif précis adapté à votre situation spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour réaliser un traitement antimousse se situe entre avril et septembre, période où les conditions météorologiques sont optimales. Idéalement, intervenez tous les 3 à 5 ans ou dès que vous observez les premiers signes de prolifération de mousse. À Rezé, nous recommandons une vigilance particulière en raison du climat océanique favorable au développement des mousses.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après le démoussage, l&apos;application d&apos;un hydrofuge nécessite plusieurs étapes : nettoyer parfaitement la surface, attendre un séchage complet (24-48h), puis appliquer l&apos;hydrofuge avec un pulvérisateur professionnel en couche uniforme. Le produit doit être adapté au matériau (tuiles, ardoises) et respecter les normes environnementales. Notre équipe utilise des techniques qui garantissent une protection maximale contre l&apos;humidité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Rezé ?
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
