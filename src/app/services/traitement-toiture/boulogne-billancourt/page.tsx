import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Boulogne-Billancourt | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Boulogne-Billancourt. Spécialistes reconnus, ',
  keywords: 'demoussage toiture boulogne-billancourt, traitement toiture boulogne-billancourt, nettoyage toiture boulogne-billancourt, antimousse toiture boulogne-billancourt, hydrofuge toiture boulogne-billancourt, entretien toiture boulogne-billancourt',
};

export default function TraitementToitureBoulogneBillancourtPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Boulogne-Billancourt</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Boulogne-Billancourt. Spécialistes reconnus, nous protégeons et valorisons votre patrimoine immobilier avec des solutions techniques innovantes et durables.</p>

        <h2>Nos services de traitement et démoussage toiture a Boulogne-Billancourt</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux défis spécifiques des habitations de Boulogne-Billancourt et ses environs. Nous intervenons avec une méthodologie précise : diagnostic complet, nettoyage haute pression, traitement antimousse et application d&apos;un hydrofuge de protection. Notre équipe utilise des produits écologiques garantissant une efficacité jusqu&apos;à 5 ans contre la prolifération des mousses, lichens et algues. Chaque intervention est personnalisée, en respectant les caractéristiques de votre toiture (tuiles, ardoises, fibrociment) et en préservant son intégrité structurelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à Boulogne-Billancourt
- Techniciens certifiés et équipements professionnels
- Devis gratuit et sans engagement
- Traitement 100% respectueux de l&apos;environnement
- Garantie décennale sur nos interventions</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 35€ au m², selon la complexité de la toiture, son accessibilité et son état. Pour une maison moyenne de 100m², comptez un budget entre 1500€ et 3500€. Nous proposons un diagnostic précis et un devis détaillé sans frais.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin printemps ou début automne, période où l&apos;humidité et la température sont optimales. Idéalement tous les 3 à 5 ans, ou dès l&apos;apparition des premiers signes de prolifération de mousse.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;hydrofuge nécessite un support parfaitement sec. Notre process inclut un nettoyage haute pression, un temps de séchage de 24-48h, puis l&apos;application au rouleau ou par pulvérisation d&apos;un produit hydrofuge spécifique, garantissant une protection durable contre l&apos;humidité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Boulogne-Billancourt ?
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
