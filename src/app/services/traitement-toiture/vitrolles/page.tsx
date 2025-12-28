import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Vitrolles | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Vitrolles et ses environs. Spécialistes du netto',
  keywords: 'demoussage toiture vitrolles, traitement toiture vitrolles, nettoyage toiture vitrolles, antimousse toiture vitrolles, hydrofuge toiture vitrolles, entretien toiture vitrolles',
};

export default function TraitementToitureVitrollesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Vitrolles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Vitrolles et ses environs. Spécialistes du nettoyage et de la protection des toitures depuis plus de 15 ans, nous garantissons un service professionnel qui préserve la longévité et l&apos;esthétique de votre habitat.</p>

        <h2>Nos services de traitement et démoussage toiture a Vitrolles</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de Vitrolles et sa région. Nous intervenons avec une méthodologie précise : diagnostic technique complet, nettoyage haute pression adapté, traitement antimousse professionnel et application d&apos;un hydrofuge de protection. Notre équipe utilise des produits écologiques et homologués, respectueux de l&apos;environnement et de votre toiture. Chaque intervention comprend un décapage minutieux, l&apos;élimination des mousses, lichens et salissures, puis l&apos;application d&apos;un traitement préventif contre les futures proliférations. Nos techniciens sont formés aux dernières techniques de rénovation et protection des surfaces.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale avec plus de 500 toitures traitées à Vitrolles
✓ Devis gratuit et personnalisé sous 48h
✓ Techniciens certifiés et assurés
✓ Produits écologiques et haute performance
✓ Garantie satisfaction de 3 ans sur nos traitements</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 35€ par m², selon la complexité de la toiture, son état et son accessibilité. Un diagnostic précis permet d&apos;établir un devis sur mesure. Pour une toiture moyenne de 100m², comptez un budget entre 1500€ et 3500€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin printemps ou début automne, périodes où l&apos;humidité et la température sont idéales. Il est recommandé de traiter tous les 3 à 5 ans, ou dès que les premières mousses apparaissent.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;hydrofugation s&apos;effectue en 3 étapes : nettoyage complet, séchage total de la surface, puis application au pulvérisateur d&apos;un produit hydrofuge spécial toiture. Le produit doit être appliqué uniformément et par temps sec, avec un matériel professionnel.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Vitrolles ?
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
