import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Colombes | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Colombes et ses environs. Spécialistes du net',
  keywords: 'demoussage toiture colombes, traitement toiture colombes, nettoyage toiture colombes, antimousse toiture colombes, hydrofuge toiture colombes, entretien toiture colombes',
};

export default function TraitementToitureColombesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Colombes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Colombes et ses environs. Spécialistes du nettoyage et de la protection des toitures, nous garantissons une intervention professionnelle qui préservera la longévité et l&apos;esthétique de votre patrimoine immobilier.</p>

        <h2>Nos services de traitement et démoussage toiture a Colombes</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de Colombes, confrontées à des conditions climatiques favorisant le développement de mousses et lichens. Notre équipe technique utilise des techniques innovantes et des produits écologiques pour éliminer totalement les végétations parasitaires. Le processus comprend un diagnostic précis, un nettoyage haute pression adapté à chaque type de matériau, puis l&apos;application d&apos;un traitement antimousse et hydrofuge qui protège durablement votre toiture contre les infiltrations et la détérioration. Nos interventions permettent de restaurer l&apos;aspect d&apos;origine de votre toiture tout en améliorant son étanchéité, avec une garantie de résultat de 5 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale avec plus de 15 ans d&apos;expérience à Colombes
✓ Techniciens certifiés et équipements professionnels de dernière génération
✓ Devis gratuit et personnalisé sous 48h
✓ Respect des normes environnementales
✓ Solutions techniques adaptées à chaque type de toiture</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage de toiture varie entre 15€ et 35€ au m², selon la complexité de l&apos;intervention, l&apos;accessibilité et l&apos;état de votre toiture. Pour une maison moyenne de 100m² à Colombes, comptez un budget global entre 1500€ et 3500€, incluant nettoyage et traitement préventif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de réaliser un traitement antimousse tous les 3 à 5 ans, idéalement au printemps ou à l&apos;automne. Les signes qui doivent vous alerter : présence visible de mousse, traces vertes ou noires, tuiles décolorées ou dégradées. À Colombes, le climat humide favorise la prolifération rapide des mousses.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un support parfaitement sec et propre. Utilisez un produit adapté à votre matériau (tuiles, ardoises), appliquez au rouleau ou par pulvérisation en 2 couches croisées, en respectant les conditions météorologiques (température entre 10°C et 25°C, absence de pluie imminente).
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Colombes ?
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
