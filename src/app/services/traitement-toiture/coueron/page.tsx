import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Couëron | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Couëron et ses environs. Spécialistes depuis ',
  keywords: 'demoussage toiture couëron, traitement toiture couëron, nettoyage toiture couëron, antimousse toiture couëron, hydrofuge toiture couëron, entretien toiture couëron',
};

export default function TraitementToitureCoueronPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Couëron</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Couëron et ses environs. Spécialistes depuis plus de 15 ans, nous protégeons et valorisons votre patrimoine immobilier avec des solutions techniques innovantes et durables.</p>

        <h2>Nos services de traitement et démoussage toiture a Couëron</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques de l&apos;habitat sur la région nantaise. Chaque intervention commence par un diagnostic précis de l&apos;état de votre toiture, identifiant les zones sensibles à la prolifération de mousse et de lichens. Notre équipe utilise des techniques professionnelles respectueuses de votre couverture, avec des produits écologiques et homologués qui éliminent efficacement les mousses sans endommager les matériaux. Le traitement comprend un nettoyage haute précision, un traitement antimousse préventif et une application d&apos;hydrofuge qui protège durablement votre toiture contre l&apos;humidité et les agressions climatiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est garantir : 1) Un diagnostic technique gratuit et personnalisé, 2) Des techniciens certifiés et équipés des dernières technologies, 3) Une intervention rapide et propre sur Couëron et la métropole nantaise, 4) Une garantie de résultat de 5 ans sur nos traitements. Notre engagement qualité fait notre différence.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix moyen du démoussage varie entre 15€ et 30€ au m², selon la complexité de la toiture, son accessibilité et son état. Un tarif précis nécessite un diagnostic sur place à Couëron. Nous proposons des devis détaillés et transparents sans frais.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin printemps ou début automne, avant les périodes d&apos;humidité intense. Idéalement tous les 3-5 ans, ou dès que vous observez les premiers signes de prolifération de mousse. Un entretien régulier permet de préserver l&apos;intégrité de votre toiture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;hydrofuge nécessite un support parfaitement sec et propre. Notre protocole inclut un nettoyage, un séchage complet, puis l&apos;application au rouleau ou par pulvérisation d&apos;un produit spécifique qui protège contre la réapparition des mousses et limite les infiltrations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Couëron ?
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
