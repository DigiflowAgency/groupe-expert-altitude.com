import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Créteil | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite une attention professionnelle, et le Groupe Expert Altitude Com est votre partenaire de confiance à Créteil pour un traitement et démo',
  keywords: 'demoussage toiture créteil, traitement toiture créteil, nettoyage toiture créteil, antimousse toiture créteil, hydrofuge toiture créteil, entretien toiture créteil',
};

export default function TraitementToitureCreteilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Créteil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite une attention professionnelle, et le Groupe Expert Altitude Com est votre partenaire de confiance à Créteil pour un traitement et démoussage complet. Nous protégeons et valorisons votre patrimoine immobilier grâce à des techniques innovantes et un savoir-faire local.</p>

        <h2>Nos services de traitement et démoussage toiture a Créteil</h2>
        <div className="space-y-4">
          <p>Le démoussage et traitement de toiture représentent un enjeu crucial pour la longévité de votre habitat. Notre équipe intervient sur tous types de couvertures (tuiles, ardoises, béton) avec une méthodologie précise et respectueuse des matériaux. Nous commençons par un diagnostic technique complet qui permet d&apos;évaluer l&apos;état réel de votre toiture, puis nous procédons à un nettoyage haute précision éliminant mousses, lichens et salissures. Notre traitement antimousse professionnel garantit une protection durable contre les développements biologiques, avec un effet hydrofuge qui préserve la structure de votre toiture pendant 8 à 10 ans. À Créteil et ses environs, nous intervenons avec du matériel écologique et des produits homologués respectant les normes environnementales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre expertise se distingue par : une intervention rapide et sur-mesure, un diagnostic technique gratuit, des techniciens certifiés, des produits écologiques, une garantie décennale, et une connaissance approfondie des spécificités des toitures à Créteil. Nous proposons un service clé en main qui protège durablement votre patrimoine.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un démoussage de toiture varie entre 15€ et 35€ au m², selon la complexité de l&apos;intervention, l&apos;accessibilité et l&apos;état initial de la toiture. Pour une maison moyenne de 100m², comptez un budget global entre 1500€ et 3500€. Un diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis adapté à votre situation.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour réaliser un traitement antimousse se situe entre avril et septembre, période où les conditions météorologiques sont optimales. Idéalement, intervenez tous les 5 à 7 ans ou dès que vous observez les premiers signes de développement de mousse. Un entretien régulier permet de réduire les coûts et de préserver l&apos;intégrité de votre toiture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après un démoussage, l&apos;application d&apos;un hydrofuge nécessite un séchage complet de la surface. Nous utilisons un produit spécifique pulvérisé uniformément, qui pénètre dans les matériaux sans les dégrader. L&apos;opération se fait par temps sec, avec une température entre 10 et 25°C, et nécessite environ 24h de séchage pour une protection maximale contre l&apos;humidité et les agressions extérieures.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Créteil ?
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
