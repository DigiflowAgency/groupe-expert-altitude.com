import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Paris 3e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Paris 3e. Spécialistes de l&apos;entretien et de la p',
  keywords: 'demoussage toiture paris 3e, traitement toiture paris 3e, nettoyage toiture paris 3e, antimousse toiture paris 3e, hydrofuge toiture paris 3e, entretien toiture paris 3e',
};

export default function TraitementToitureParis3ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Paris 3e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Paris 3e. Spécialistes de l&apos;entretien et de la protection des couvertures, nous intervenons rapidement pour préserver la qualité et la longévité de votre toiture.</p>

        <h2>Nos services de traitement et démoussage toiture a Paris 3e</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques de l&apos;habitat parisien. Nos techniciens hautement qualifiés utilisent des techniques professionnelles pour éliminer la mousse, les algues et les lichens qui détériorent votre couverture. Nous réalisons un diagnostic précis avant intervention, identifiant chaque zone sensible. Notre processus comprend un nettoyage haute précision, un traitement antimousse écologique et une application d&apos;hydrofuge qui protège durablement votre toiture contre l&apos;humidité et les agressions climatiques. Chaque intervention est personnalisée, garantissant une efficacité maximale pour les toitures du 3e arrondissement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Experts certifiés avec plus de 15 ans d&apos;expérience à Paris
✓ Techniques respectueuses de l&apos;environnement
✓ Devis gratuit et précis sous 48h
✓ Traitement garanti 5 ans
✓ Intervention rapide sur Paris 3e</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix moyen du démoussage varie entre 15€ et 30€ au m², selon la complexité de la toiture, son accessibilité et son état. Pour une maison de 100m², comptez un budget global entre 1500€ et 3000€. Un diagnostic préalable gratuit permet d&apos;établir un devis précis et personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin printemps ou début automne, avant les périodes d&apos;humidité intense. Idéalement tous les 3 à 5 ans, ou dès que vous observez plus de 30% de surface envahie par la mousse. Dans le climat parisien, une intervention préventive tous les 4 ans est recommandée.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;hydrofuge nécessite : un nettoyage complet, un séchage total de la surface, l&apos;utilisation d&apos;un produit adapté à votre type de toiture (tuiles, ardoises), application au rouleau ou pulvérisateur en 2 couches croisées, et respect d&apos;une température entre 10° et 25°C.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Paris 3e ?
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
