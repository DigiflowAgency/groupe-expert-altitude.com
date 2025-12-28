import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Bron | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Bron et ses environs. Spécialistes de l&apos;entretie',
  keywords: 'demoussage toiture bron, traitement toiture bron, nettoyage toiture bron, antimousse toiture bron, hydrofuge toiture bron, entretien toiture bron',
};

export default function TraitementToitureBronPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Bron</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Bron et ses environs. Spécialistes de l&apos;entretien toiture, nous protégeons durablement votre patrimoine immobilier contre les dégradations liées aux mousses et aux intempéries.</p>

        <h2>Nos services de traitement et démoussage toiture a Bron</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de la région lyonnaise. Nous intervenons avec une méthodologie précise : diagnostic initial, nettoyage haute pression sans détérioration, application de produits antimousses professionnels et traitement hydrofuge final. Notre équipe utilise des techniques éco-responsables qui préservent la structure de votre toiture tout en éliminant efficacement les mousses, lichens et salissures. Plus de 85% de nos traitements garantissent une protection durable pendant 7 à 10 ans, limitant ainsi les interventions et préservant l&apos;esthétique de votre toiture.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée avec plus de 15 ans d&apos;expérience sur Bron et la métropole lyonnaise. Techniciens hautement qualifiés et équipements professionnels. Devis gratuit et personnalisé sous 48h. Garantie décennale et interventions respectueuses de l&apos;environnement. Un service clé en main qui protège durablement votre patrimoine.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 30€ au m², selon la complexité de la toiture, son état et son accessibilité. Pour une maison moyenne de 100m², comptez un budget global entre 1500€ et 3000€. Un diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis adapté à votre situation.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse se situe au printemps ou à l&apos;automne, périodes où l&apos;humidité et les conditions climatiques favorisent une intervention optimale. Idéalement, réalisez ce traitement tous les 5 à 7 ans pour maintenir une protection efficace contre les développements de mousses.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un séchage complet de la surface. Utilisez un produit adapté à votre type de toiture (tuiles, ardoises), appliquez-le uniformément avec un pulvérisateur professionnel, en respectant les conditions météorologiques (température entre 10 et 25°C, absence de pluie imminente).
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Bron ?
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
