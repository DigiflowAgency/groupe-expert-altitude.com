import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a La Teste-de-Buch | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite la meilleure protection possible, et le Groupe Expert Altitude Com est votre partenaire de confiance pour un traitement et démoussage ',
  keywords: 'demoussage toiture la teste-de-buch, traitement toiture la teste-de-buch, nettoyage toiture la teste-de-buch, antimousse toiture la teste-de-buch, hydrofuge toiture la teste-de-buch, entretien toiture la teste-de-buch',
};

export default function TraitementToitureLaTesteDeBuchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a La Teste-de-Buch</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite la meilleure protection possible, et le Groupe Expert Altitude Com est votre partenaire de confiance pour un traitement et démoussage impeccable à La Teste-de-Buch. Nous intervenons sur tous types de toitures avec une expertise technique qui garantit la longévité et l&apos;esthétique de votre couverture.</p>

        <h2>Nos services de traitement et démoussage toiture a La Teste-de-Buch</h2>
        <div className="space-y-4">
          <p>Le démoussage et traitement de toiture sont essentiels pour préserver l&apos;intégrité de votre habitat. Sur La Teste-de-Buch et ses environs, notre équipe utilise des techniques professionnelles qui éliminent efficacement la mousse, les lichens et les algues qui détériorent vos tuiles. Notre processus comprend un nettoyage haute pression respectueux des matériaux, suivi d&apos;un traitement antimousse et hydrofuge qui protège durablement votre toiture. Nos produits écologiques et homologués permettent de traiter les surfaces sans agresser l&apos;environnement, avec une efficacité prouvée pendant 5 à 7 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : une expertise locale de plus de 15 ans, un diagnostic personnalisé gratuit, des techniciens certifiés, des produits de traitement écologiques, une intervention rapide et propre, une garantie de résultat de 3 ans, et des tarifs transparents sans surprise.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 35€ au m², selon la complexité de la toiture, son état et son accessibilité. Pour une maison moyenne de 100m², comptez un budget global entre 1500€ et 3500€. Un devis personnalisé gratuit vous permettra d&apos;avoir un prix précis adapté à votre situation à La Teste-de-Buch.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse se situe entre avril et octobre, période où les conditions météorologiques sont optimales. Idéalement, intervenez tous les 5-7 ans ou dès que vous constatez les premiers signes de développement de mousse, lichens ou algues sur votre toiture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite : un nettoyage complet, un séchage total de la surface, l&apos;utilisation d&apos;un produit adapté à votre type de toiture, une application uniforme au rouleau ou par pulvérisation, et un temps de séchage de 24h dans des conditions météorologiques sèches.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a La Teste-de-Buch ?
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
