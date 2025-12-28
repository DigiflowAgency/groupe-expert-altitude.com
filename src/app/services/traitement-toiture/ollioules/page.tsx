import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Ollioules | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Ollioules et ses environs. Nous protégeons vo',
  keywords: 'demoussage toiture ollioules, traitement toiture ollioules, nettoyage toiture ollioules, antimousse toiture ollioules, hydrofuge toiture ollioules, entretien toiture ollioules',
};

export default function TraitementToitureOllioulesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Ollioules</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Ollioules et ses environs. Nous protégeons votre patrimoine immobilier avec des solutions techniques innovantes qui préservent la longévité et l&apos;esthétique de votre toiture.</p>

        <h2>Nos services de traitement et démoussage toiture a Ollioules</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage représente bien plus qu&apos;un simple nettoyage. Nous intervenons avec une méthodologie précise qui élimine mécaniquement et chimiquement les mousses, lichens et salissures qui fragilisent votre toiture. Notre équipe utilise des produits professionnels respectueux de l&apos;environnement, adaptés à tous types de matériaux (tuiles, ardoises, béton). Sur Ollioules, nous réalisons un diagnostic technique préalable pour définir le traitement le plus approprié, garantissant une intervention sur-mesure et durable. Notre process comprend un nettoyage haute pression, un traitement antimousse et une application d&apos;hydrofuge qui protège durablement votre toiture contre l&apos;humidité et les agressions climatiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;expertise et la qualité. Nos techniciens sont certifiés et formés aux dernières techniques de traitement. Nous proposons un devis gratuit et détaillé, un délai d&apos;intervention rapide de 72h et une garantie de 5 ans sur nos traitements. Notre connaissance parfaite du climat méditerranéen nous permet d&apos;adapter précisément nos solutions aux spécificités locales d&apos;Ollioules.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un démoussage de toiture varie entre 15€ et 35€ au m², selon la complexité de l&apos;intervention, l&apos;état de la toiture et les traitements complémentaires nécessaires. Pour une maison moyenne de 100m², comptez un budget global entre 1500€ et 3500€. Un diagnostic préalable gratuit permettra de définir un devis précis et personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour réaliser un traitement antimousse est généralement fin d&apos;été ou début d&apos;automne. Les conditions climatiques sont alors optimales : température entre 10°C et 25°C, faible humidité. Ces périodes permettent un séchage rapide et une pénétration efficace des produits de traitement, avant les premières pluies.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;un hydrofuge après démoussage nécessite plusieurs étapes : nettoyage complet de la surface, séchage total, application au rouleau ou par pulvérisation avec un produit adapté au matériau, en deux couches croisées. Le produit doit être respirant, sans silicone, et offrir une protection contre l&apos;eau et les UV. Le temps de séchage est d&apos;environ 24h.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Ollioules ?
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
