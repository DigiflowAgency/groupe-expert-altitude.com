import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Rillieux-la-Pape | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite une attention professionnelle, et le Groupe Expert Altitude Com est votre partenaire de confiance à Rillieux-la-Pape pour un traitemen',
  keywords: 'demoussage toiture rillieux-la-pape, traitement toiture rillieux-la-pape, nettoyage toiture rillieux-la-pape, antimousse toiture rillieux-la-pape, hydrofuge toiture rillieux-la-pape, entretien toiture rillieux-la-pape',
};

export default function TraitementToitureRillieuxLaPapePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Rillieux-la-Pape</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite une attention professionnelle, et le Groupe Expert Altitude Com est votre partenaire de confiance à Rillieux-la-Pape pour un traitement et un démoussage de toiture impeccable. Nous protégeons votre patrimoine immobilier avec des solutions techniques innovantes et durables.</p>

        <h2>Nos services de traitement et démoussage toiture a Rillieux-la-Pape</h2>
        <div className="space-y-4">
          <p>Le démoussage et le traitement de toiture sont essentiels pour préserver l&apos;intégrité et l&apos;esthétique de votre habitat. Notre équipe hautement qualifiée utilise des techniques professionnelles qui éliminent efficacement la mousse, les lichens et les algues qui peuvent endommager vos tuiles. Nous réalisons un diagnostic précis avant intervention, en évaluant l&apos;état de votre toiture et en proposant un traitement personnalisé adapté à vos matériaux. Notre processus comprend un nettoyage haute précision, un traitement antimousse écologique et une application d&apos;hydrofuge qui protège durablement votre toiture contre l&apos;humidité et les infiltrations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : des techniciens certifiés, un matériel professionnel de dernière génération, des produits respectueux de l&apos;environnement, et une intervention garantie sur Rillieux-la-Pape et ses environs. Nous intervenons rapidement, avec un devis gratuit et transparent, et proposons une protection qui peut prolonger la durée de vie de votre toiture de 10 à 15 ans.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un démoussage de toiture varie entre 15€ et 30€ au m², selon la complexité et l&apos;accessibilité. Pour une maison moyenne de 100 m², comptez un investissement entre 1500€ et 3000€. Notre devis personnalisé à Rillieux-la-Pape inclut le diagnostic, le traitement et la protection complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin printemps ou début automne, lorsque les conditions météorologiques sont stables. Idéalement tous les 3 à 5 ans, ou dès que vous observez des signes de prolifération de mousse. Un entretien régulier permet de réduire les coûts et de préserver votre toiture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;hydrofuge se fait en 3 étapes : nettoyage complet de la surface, application au pulvérisateur d&apos;un produit adapté à vos matériaux, et temps de séchage de 24h. Notre équipe utilise des produits garantissant une protection contre l&apos;eau et limitant la repousse de mousse pendant plusieurs années.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Rillieux-la-Pape ?
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
