import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Carquefou | Groupe Expert Altitude Com',
  description: 'Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Carquefou et ses environs. Nous protégeons votre patrim',
  keywords: 'demoussage toiture carquefou, traitement toiture carquefou, nettoyage toiture carquefou, antimousse toiture carquefou, hydrofuge toiture carquefou, entretien toiture carquefou',
};

export default function TraitementToitureCarquefouPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Carquefou</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Carquefou et ses environs. Nous protégeons votre patrimoine immobilier grâce à des techniques professionnelles de nettoyage et de rénovation de toiture.</p>

        <h2>Nos services de traitement et démoussage toiture a Carquefou</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de la région nantaise. Nos techniciens qualifiés utilisent des produits professionnels pour éliminer la mousse, les lichens et les algues qui fragilisent votre toiture. Nous intervenons sur tous types de matériaux - tuiles terres cuites, ardoises, béton - avec une méthodologie précise. Notre process comprend un diagnostic initial, un nettoyage haute pression adapté, un traitement antimousse et une protection hydrofuge qui préserve durablement votre toiture. Pour les maisons de Carquefou et alentours, nous garantissons une intervention propre, rapide et efficace qui prolonge la durée de vie de votre couverture de 10 à 15 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Expert Altitude Com, c&apos;est opter pour un service sur-mesure. Nos équipes sont certifiées, notre intervention est assurée, et nous proposons un devis gratuit sous 48h. Nous utilisons des produits écologiques homologués, notre taux de satisfaction client dépasse 95%, et nous intervenons dans un rayon de 30 km autour de Carquefou.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix moyen du démoussage varie entre 15€ et 25€ au m², selon l&apos;état et l&apos;accessibilité de votre toiture. Pour une maison de 100m², comptez un budget global entre 1500€ et 2500€. Un devis personnalisé vous permettra d&apos;avoir un tarif précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse se situe entre avril et septembre, période où les supports sont secs et les températures permettent un séchage optimal. Idéalement, réalisez ce traitement tous les 5 à 7 ans pour maintenir une protection efficace.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un support parfaitement propre et sec. Utilisez un produit adapté à votre matériau, appliquez à la brosse ou au pulvérisateur en couche fine et uniforme, par température entre 10 et 25°C. Respectez les temps de séchage recommandés par le fabricant.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Carquefou ?
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
