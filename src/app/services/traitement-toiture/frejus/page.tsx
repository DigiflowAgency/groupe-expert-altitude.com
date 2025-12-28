import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Fréjus | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Fréjus et ses environs. Spécialistes du netto',
  keywords: 'demoussage toiture fréjus, traitement toiture fréjus, nettoyage toiture fréjus, antimousse toiture fréjus, hydrofuge toiture fréjus, entretien toiture fréjus',
};

export default function TraitementToitureFrejusPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Fréjus</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Fréjus et ses environs. Spécialistes du nettoyage et de la protection des toitures, nous intervenons rapidement pour préserver la longévité et l&apos;esthétique de votre patrimoine immobilier.</p>

        <h2>Nos services de traitement et démoussage toiture a Fréjus</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux défis spécifiques des habitations de la région varoise. Nous utilisons des techniques professionnelles qui éliminent efficacement la mousse, les lichens et les salissures qui fragilisent votre toiture. Notre processus complet commence par un diagnostic précis de l&apos;état de votre couverture, suivi d&apos;un nettoyage haute précision qui respecte l&apos;intégrité des tuiles. Nous appliquons ensuite un traitement antimousse haute performance qui protège durablement votre toiture contre les agressions environnementales, avec une garantie d&apos;efficacité de 5 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre expertise se distingue par : un diagnostic technique gratuit, des produits écologiques et homologués, une équipe certifiée avec plus de 15 ans d&apos;expérience, et une intervention rapide sur Fréjus et le département du Var. Nous proposons des solutions personnalisées qui préservent la valeur et l&apos;esthétique de votre patrimoine immobilier.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 25€ au m², selon la complexité de la toiture, son accessibilité et son état. Un diagnostic précis sur site vous permettra d&apos;obtenir un devis détaillé et sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de réaliser un traitement antimousse tous les 3 à 5 ans, idéalement au printemps ou à l&apos;automne. À Fréjus, le climat méditerranéen peut accélérer la prolifération des mousses, justifiant une vigilance accrue.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après le démoussage, l&apos;application d&apos;un hydrofuge nécessite un séchage complet de la surface. Nous utilisons des produits spécifiques qui créent un bouclier invisible contre l&apos;humidité, tout en laissant la toiture respirer naturellement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Fréjus ?
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
