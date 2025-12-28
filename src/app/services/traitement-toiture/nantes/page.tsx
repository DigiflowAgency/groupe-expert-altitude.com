import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Nantes | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste du traitement et démoussage de toiture à Nantes, protège et valorise votre patrimoine immobilier avec des sol',
  keywords: 'demoussage toiture nantes, traitement toiture nantes, nettoyage toiture nantes, antimousse toiture nantes, hydrofuge toiture nantes, entretien toiture nantes',
};

export default function TraitementToitureNantesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Nantes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste du traitement et démoussage de toiture à Nantes, protège et valorise votre patrimoine immobilier avec des solutions techniques innovantes. Nous intervenons sur l&apos;ensemble de la métropole nantaise pour garantir la longévité et l&apos;esthétique de vos couvertures.</p>

        <h2>Nos services de traitement et démoussage toiture a Nantes</h2>
        <div className="space-y-4">
          <p>Le démoussage de toiture est une étape cruciale pour préserver l&apos;intégrité de votre habitat. Notre méthode professionnelle débute par un diagnostic précis de l&apos;état de votre toiture, identifiant les zones sensibles à la prolifération de mousse et de lichens. Nous utilisons des techniques respectueuses de l&apos;environnement et des matériaux, avec des produits écologiques certifiés qui éliminent efficacement les végétations parasitaires sans détériorer vos tuiles ou ardoises. Notre traitement comprend un nettoyage haute précision, un traitement antimousse et une application d&apos;hydrofuge qui protège durablement contre l&apos;humidité et les agressions climatiques. Chaque intervention est personnalisée en fonction de la nature de votre toiture et des spécificités architecturales de votre bien.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés et disposent de plus de 15 ans d&apos;expérience sur Nantes et sa région. Nous proposons un diagnostic gratuit, des devis transparents sans engagement, et garantissons nos interventions pendant 5 ans. Notre engagement qualité se traduit par des solutions sur-mesure et un suivi personnalisé.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 30€ au m², selon la complexité de l&apos;intervention, l&apos;accessibilité de la toiture et son état. Pour une maison moyenne de 100m², comptez un budget global entre 1500€ et 3000€. Nous réalisons un devis précis et détaillé après un diagnostic technique gratuit.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse se situe entre avril et septembre, période où les conditions météorologiques sont optimales. Idéalement, effectuez ce traitement tous les 5 à 7 ans, ou dès que vous observez les premiers signes de prolifération de mousse, qui peuvent fragiliser rapidement votre couverture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après le démoussage, l&apos;application d&apos;un hydrofuge nécessite un séchage complet de la surface. Notre processus inclut un nettoyage, un traitement antimicrobien, puis l&apos;application d&apos;un hydrofuge spécifique à l&apos;aide de pulvérisateurs professionnels. La pose se fait par couches fines, en respectant les recommandations du fabricant et les normes techniques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Nantes ?
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
