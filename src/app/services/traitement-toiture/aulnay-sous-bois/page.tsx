import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Aulnay-sous-Bois | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite le meilleur traitement, et le Groupe Expert Altitude Com est votre partenaire de confiance à Aulnay-sous-Bois pour un démoussage et un',
  keywords: 'demoussage toiture aulnay-sous-bois, traitement toiture aulnay-sous-bois, nettoyage toiture aulnay-sous-bois, antimousse toiture aulnay-sous-bois, hydrofuge toiture aulnay-sous-bois, entretien toiture aulnay-sous-bois',
};

export default function TraitementToitureAulnaySousBoisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Aulnay-sous-Bois</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite le meilleur traitement, et le Groupe Expert Altitude Com est votre partenaire de confiance à Aulnay-sous-Bois pour un démoussage et un entretien professionnel. Nous protégeons votre patrimoine immobilier contre les dégradations avec des solutions techniques innovantes et durables.</p>

        <h2>Nos services de traitement et démoussage toiture a Aulnay-sous-Bois</h2>
        <div className="space-y-4">
          <p>Le démoussage et le traitement de toiture sont essentiels pour préserver la longévité et l&apos;esthétique de votre couverture. Notre méthode exclusive permet d&apos;éliminer efficacement les mousses, lichens et algues qui s&apos;installent progressivement et peuvent endommager vos tuiles ou ardoises. Notre équipe technique utilise des produits écologiques et hautement performants, adaptés à chaque type de toiture. Nous intervenons sur l&apos;ensemble des matériaux - terre cuite, béton, ardoise - avec un protocole précis qui garantit un résultat impeccable et durable. Notre traitement comprend un nettoyage haute précision, un traitement antimousse et une protection hydrofuge qui prolonge la durée de vie de votre toiture de 10 à 15 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés et formés aux dernières normes de traitement. Nous proposons un diagnostic gratuit, un devis détaillé sans engagement et une intervention rapide sur Aulnay-sous-Bois et ses environs. Notre engagement qualité se traduit par une garantie de 5 ans sur nos traitements et des interventions respectueuses de votre environnement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 35€ au m², selon la complexité de la toiture, son accessibilité et son état. Pour une maison moyenne de 100m², comptez un budget entre 1500€ et 3500€. Un diagnostic précis sur site vous donnera un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse se situe entre avril et octobre, période où les conditions météorologiques sont optimales. Idéalement, intervenez tous les 3 à 5 ans ou dès que vous observez les premiers signes de prolifération de mousse, pour éviter les dégradations structurelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après un démoussage, l&apos;application d&apos;un hydrofuge se fait en 3 étapes : un nettoyage complet, un séchage total de la surface, puis pulvérisation du produit hydrofuge avec un matériel professionnel. Le produit doit être adapté au matériau et appliqué par couches fines et régulières pour une protection maximale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Aulnay-sous-Bois ?
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
