import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Saint-Herblain | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Saint-Herblain et ses environs. Spécialistes des',
  keywords: 'demoussage toiture saint-herblain, traitement toiture saint-herblain, nettoyage toiture saint-herblain, antimousse toiture saint-herblain, hydrofuge toiture saint-herblain, entretien toiture saint-herblain',
};

export default function TraitementToitureSaintHerblainPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Saint-Herblain</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Saint-Herblain et ses environs. Spécialistes des solutions de rénovation et protection de toitures, nous intervenons rapidement pour préserver la longévité et l&apos;esthétique de votre patrimoine immobilier.</p>

        <h2>Nos services de traitement et démoussage toiture a Saint-Herblain</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitats de Saint-Herblain, exposés à un climat océanique propice au développement des mousses et lichens. Notre méthode exclusive permet d&apos;éliminer efficacement ces proliférations végétales tout en protégeant la structure de votre toiture. Notre équipe utilise des produits écologiques et professionnels qui nettoient en profondeur sans détériorer les matériaux. Un traitement complet comprend le démoussage manuel, un nettoyage haute précision et l&apos;application d&apos;un traitement hydrofuge qui protège durablement contre les infiltrations et la repousse.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est garantir un service premium : techniciens certifiés, intervention sous 72h, devis gratuit et détaillé, traitement garanti 5 ans. Nous intervenons sur tous types de toitures - tuiles, ardoises, béton - avec un taux de satisfaction client de 98%. Notre engagement qualité fait notre réputation à Saint-Herblain et dans toute la région nantaise.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 35€ au m², selon la complexité de la toiture, son état et son accessibilité. Pour une maison standard de 100m², comptez un budget global entre 1500€ et 3500€. Nous proposons un diagnostic précis et un devis personnalisé sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse se situe entre avril et septembre, période idéale avec des conditions météorologiques favorables. Il est recommandé de traiter tous les 3-5 ans, ou dès que vous observez les premiers signes de prolifération végétale qui peuvent fragiliser votre toiture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un séchage complet de la surface. Notre processus inclut un nettoyage, un traitement antifongique, puis l&apos;application d&apos;un hydrofuge spécial qui protège contre l&apos;humidité tout en laissant la toiture respirer. Le produit est appliqué au pulvérisateur en couche uniforme pour une protection optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Saint-Herblain ?
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
