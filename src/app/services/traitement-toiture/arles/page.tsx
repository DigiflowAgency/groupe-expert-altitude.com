import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Arles | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Arles et ses environs. Spécialistes du nettoy',
  keywords: 'demoussage toiture arles, traitement toiture arles, nettoyage toiture arles, antimousse toiture arles, hydrofuge toiture arles, entretien toiture arles',
};

export default function TraitementToitureArlesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Arles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Arles et ses environs. Spécialistes du nettoyage et de la protection des toitures, nous intervenons avec précision pour préserver la longévité et l&apos;esthétique de votre patrimoine immobilier.</p>

        <h2>Nos services de traitement et démoussage toiture a Arles</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations arlésienne, exposées à des conditions climatiques variées. Notre méthode professionnelle commence par un diagnostic précis de l&apos;état de votre couverture, identifiant les zones nécessitant une intervention. Nous utilisons des techniques éco-responsables qui éliminent la mousse, les lichens et les algues sans endommager les matériaux. Notre traitement antimousse haute performance garantit une protection durable contre les infiltrations et la détérioration, prolongeant ainsi la durée de vie de votre toiture de 10 à 15 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise locale de plus de 15 ans à Arles
• Techniciens certifiés et équipements professionnels
• Devis gratuit et sans engagement
• Respect des normes environnementales
• Intervention rapide et efficace
• Garantie de résultat pendant 3 ans</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 30€ au m², selon la complexité de la toiture, son accessibilité et le type de traitement requis. Pour une maison de 100m², comptez un budget global entre 1500€ et 3000€. Un diagnostic préalable gratuit permettra de définir un devis précis pour votre toiture à Arles.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse se situe idéalement au printemps ou à l&apos;automne, lorsque les températures sont douces et stables (entre 10°C et 25°C). Ces périodes permettent un séchage optimal et une pénétration efficace des produits de traitement.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après le démoussage, l&apos;application de l&apos;hydrofuge nécessite un nettoyage complet et un séchage total de la surface. Utilisez un produit adapté à votre type de matériau (tuiles, ardoises), appliquez au rouleau ou par pulvérisation en couche uniforme, et respectez un temps de séchage de 24 à 48 heures avant toute exposition à l&apos;humidité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Arles ?
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
