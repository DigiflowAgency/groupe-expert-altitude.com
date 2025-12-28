import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Levallois-Perret | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Levallois-Perret et ses environs. Spécialiste',
  keywords: 'demoussage toiture levallois-perret, traitement toiture levallois-perret, nettoyage toiture levallois-perret, antimousse toiture levallois-perret, hydrofuge toiture levallois-perret, entretien toiture levallois-perret',
};

export default function TraitementToitureLevalloisPerretPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Levallois-Perret</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Levallois-Perret et ses environs. Spécialistes du nettoyage et de la protection de vos couvertures, nous intervenons avec précision pour préserver la longévité et l&apos;esthétique de votre toiture.</p>

        <h2>Nos services de traitement et démoussage toiture a Levallois-Perret</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de Levallois-Perret. Nos techniciens hautement qualifiés utilisent des techniques professionnelles pour éliminer la mousse, les algues et les lichens qui détériorent votre toiture. Nous commençons par un diagnostic précis de l&apos;état de votre couverture, puis appliquons un traitement antimousse puissant et écologique. Notre processus comprend un nettoyage haute précision, un traitement préventif et une application d&apos;hydrofuge qui protège durablement votre toiture contre l&apos;humidité et les agressions extérieures.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : des techniciens certifiés, un matériel de pointe, des produits respectueux de l&apos;environnement, une intervention rapide et un devis gratuit. Nous garantissons un travail impeccable avec plus de 95% de satisfaction client et une protection de votre toiture pour minimum 5 ans.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage de toiture varie entre 15€ et 35€ au m², selon la surface, l&apos;accessibilité et l&apos;état de votre toiture. Pour une maison moyenne de 100m², comptez un budget entre 1500€ et 3500€. Un devis personnalisé gratuit vous permettra d&apos;obtenir un tarif précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin d&apos;automne ou début du printemps, soit entre septembre et avril. Ces périodes offrent des conditions climatiques idéales : températures modérées et humidité qui facilitent l&apos;application et l&apos;efficacité du traitement.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après un démoussage, l&apos;application d&apos;un hydrofuge se fait en 3 étapes : nettoyage complet de la surface, application du produit au pulvérisateur à basse pression, et temps de séchage de 24h. Nos professionnels utilisent des hydrofuges spécifiques garantissant une protection contre l&apos;eau et les UV pour 5 à 7 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Levallois-Perret ?
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
