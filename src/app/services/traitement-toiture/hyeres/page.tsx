import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Hyères | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Hyères et dans le Var. Nous protégeons votre ',
  keywords: 'demoussage toiture hyères, traitement toiture hyères, nettoyage toiture hyères, antimousse toiture hyères, hydrofuge toiture hyères, entretien toiture hyères',
};

export default function TraitementToitureHyeresPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Hyères</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Hyères et dans le Var. Nous protégeons votre patrimoine immobilier avec des solutions professionnelles qui préservent la longévité et l&apos;esthétique de vos couvertures.</p>

        <h2>Nos services de traitement et démoussage toiture a Hyères</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux spécificités climatiques d&apos;Hyères, où l&apos;humidité favorise le développement rapide de mousses et lichens. Notre équipe utilise des techniques innovantes et des produits écologiques pour éliminer totalement les végétations parasitaires. Nous réalisons un diagnostic précis avant intervention, évaluant l&apos;état de votre toiture et les zones nécessitant un traitement. Notre processus comprend un nettoyage haute précision, un traitement antimousse professionnel et une protection hydrofuge qui garantit une résistance optimale aux intempéries pendant 5 à 7 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Expertise locale depuis 15 ans, techniciens certifiés, produits respectueux de l&apos;environnement. Nous proposons un devis gratuit sous 48h, une intervention rapide et une garantie de résultat. Notre connaissance du climat méditerranéen nous permet d&apos;adapter précisément nos traitements aux spécificités des toitures de la région.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix varie entre 15€ et 35€ au m², selon la complexité de la toiture, son état et l&apos;accessibilité. Un démoussage complet pour une maison de 100m² coûte généralement entre 1500€ et 3500€, incluant nettoyage, traitement antimousse et hydrofugation.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur période pour un traitement antimousse se situe entre avril et octobre, pendant les saisons sèches. Idéalement, réalisez ce traitement tous les 5-7 ans ou dès que vous observez les premiers signes de développement de mousse.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;hydrofuge nécessite un séchage complet de la surface. Utilisez un produit adapté à votre type de couverture (tuiles, ardoises), appliquez uniformément au pulvérisateur ou au rouleau, en respectant les conditions météorologiques (température entre 10-25°C, absence de pluie).
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Hyères ?
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
