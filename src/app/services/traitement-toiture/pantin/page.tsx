import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Pantin | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Pantin et ses environs. Spécialistes du nettoyag',
  keywords: 'demoussage toiture pantin, traitement toiture pantin, nettoyage toiture pantin, antimousse toiture pantin, hydrofuge toiture pantin, entretien toiture pantin',
};

export default function TraitementToiturePantinPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Pantin</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Pantin et ses environs. Spécialistes du nettoyage et de la protection des toitures, nous garantissons une intervention professionnelle qui préservera la longévité et l&apos;esthétique de votre habitat.</p>

        <h2>Nos services de traitement et démoussage toiture a Pantin</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de la région parisienne. Nos techniciens hautement qualifiés utilisent des techniques innovantes pour éliminer efficacement la mousse, les lichens et les salissures qui peuvent dégrader votre couverture. Chaque intervention commence par un diagnostic précis de l&apos;état de votre toiture, permettant d&apos;adapter notre approche à vos besoins spécifiques. Nous réalisons un nettoyage en profondeur qui préserve l&apos;intégrité des matériaux, suivi d&apos;un traitement antimousse et hydrofuge qui protège durablement votre toiture contre les infiltrations et la prolifération des micro-organismes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nous nous démarquons par notre expertise locale à Pantin, notre intervention rapide et notre engagement qualité. Notre équipe dispose de certifications professionnelles, utilise du matériel de pointe et propose des solutions écologiques. Nous garantissons une prestation sans risque pour votre toiture, avec un traitement qui peut prolonger sa durée de vie de 10 à 15 ans. Notre devis est toujours gratuit et personnalisé.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix moyen du démoussage de toiture varie entre 15€ et 30€ au m², selon la complexité de l&apos;intervention, l&apos;accessibilité et l&apos;état initial de la toiture. À Pantin, nos tarifs sont compétitifs et incluent le nettoyage, le traitement antimousse et l&apos;hydrofugation. Un diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis adapté à votre situation.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour réaliser un traitement antimousse se situe entre avril et octobre, période où les conditions météorologiques sont optimales. Il est recommandé d&apos;intervenir tous les 5 à 7 ans, ou dès que vous constatez les premiers signes de prolifération de mousse, qui peuvent rapidement endommager vos tuiles ou ardoises.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après un démoussage, l&apos;application d&apos;un hydrofuge nécessite plusieurs étapes : nettoyage complet, séchage total de la surface, application au pulvérisateur d&apos;un produit adapté aux matériaux de votre toiture. Notre équipe utilise des produits respectant les normes environnementales, garantissant une protection efficace contre l&apos;humidité sans altérer l&apos;aspect de votre couverture.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Pantin ?
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
