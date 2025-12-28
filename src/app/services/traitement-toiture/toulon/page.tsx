import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Toulon | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour le traitement et démoussage de toiture à Toulon et ses environs. Spécialistes du nettoyag',
  keywords: 'demoussage toiture toulon, traitement toiture toulon, nettoyage toiture toulon, antimousse toiture toulon, hydrofuge toiture toulon, entretien toiture toulon',
};

export default function TraitementToitureToulonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Toulon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour le traitement et démoussage de toiture à Toulon et ses environs. Spécialistes du nettoyage et de la protection des toitures depuis plus de 15 ans, nous intervenons rapidement pour préserver la durabilité et l&apos;esthétique de votre patrimoine immobilier.</p>

        <h2>Nos services de traitement et démoussage toiture a Toulon</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture représente une solution complète et professionnelle pour protéger votre habitat. Notre équipe technique utilise des techniques innovantes et des produits écologiques pour éliminer efficacement les mousses, lichens et salissures qui détériorent vos tuiles et ardoises. Chaque intervention commence par un diagnostic précis de l&apos;état de votre toiture, permettant d&apos;adapter notre traitement antimousse spécifique. Nous travaillons avec des produits homologués qui nettoient en profondeur tout en protégeant durablement les matériaux contre l&apos;humidité et les agressions environnementales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est garantir un service de qualité supérieure : techniciens certifiés, intervention rapide sur Toulon et ses alentours, devis gratuit et détaillé, techniques respectueuses de l&apos;environnement, traitement hydrofuge haute performance, garantie de résultat. Nous intervenons sur tous types de toitures avec un taux de satisfaction client de 98%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 30€ au m², selon la complexité de la toiture, son accessibilité et le niveau de salissure. Un diagnostic préalable gratuit permet un devis précis adapté à votre situation spécifique à Toulon.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin printemps ou début automne, avant les périodes de fortes humidités. Idéalement tous les 3-5 ans, ou dès que des signes de prolifération apparaissent pour prévenir les dégradations structurelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;un hydrofuge après démoussage nécessite un nettoyage complet, un séchage total de la surface, puis l&apos;utilisation d&apos;un produit adapté au type de matériau (tuiles, ardoises) pulvérisé uniformément avec un équipement professionnel pour une protection optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Toulon ?
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
