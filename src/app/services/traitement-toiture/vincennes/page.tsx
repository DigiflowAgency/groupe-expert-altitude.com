import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Vincennes | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour un traitement et démoussage toiture de haute qualité à Vincennes et ses environs. Nous',
  keywords: 'demoussage toiture vincennes, traitement toiture vincennes, nettoyage toiture vincennes, antimousse toiture vincennes, hydrofuge toiture vincennes, entretien toiture vincennes',
};

export default function TraitementToitureVincennesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Vincennes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour un traitement et démoussage toiture de haute qualité à Vincennes et ses environs. Nous protégeons et valorisons votre patrimoine immobilier avec des solutions innovantes et durables.</p>

        <h2>Nos services de traitement et démoussage toiture a Vincennes</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de Vincennes, où l&apos;humidité et les conditions climatiques peuvent rapidement dégrader les couvertures. Notre méthode professionnelle commence par un diagnostic précis de l&apos;état de votre toiture, suivi d&apos;un nettoyage haute précision qui élimine mousses, lichens et salissures sans endommager les matériaux. Nous utilisons des produits écologiques et certifiés, garantissant une protection optimale contre les infiltrations et l&apos;usure prématurée. Notre traitement antimousse permet de prolonger la durée de vie de votre toiture de 10 à 15 ans, tout en améliorant son aspect esthétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée intervient avec un matériel professionnel, nous proposons un devis gratuit sous 48h, nos interventions sont garanties 5 ans, et nous sommes spécialistes des toitures à Vincennes depuis plus de 15 ans. Notre approche sur-mesure et notre engagement qualité font notre différence.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un démoussage de toiture varie entre 15€ et 35€ au m², selon la complexité, l&apos;accessibilité et l&apos;état initial de votre toiture. Pour une maison moyenne à Vincennes de 100m², comptez un budget entre 1500€ et 3500€, incluant nettoyage et traitement préventif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin printemps ou début automne, avant les périodes de fortes humidités. Idéalement tous les 3 à 5 ans, ou dès que vous observez les premiers signes de développement de mousse, pour prévenir les dégradations structurelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un support parfaitement sec et propre. Utilisez un produit adapté à votre type de toiture (tuiles, ardoises), appliquez au rouleau ou par pulvérisation en 2 couches croisées, en respectant les conditions météorologiques (température entre 10-25°C, pas de pluie prévue).
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Vincennes ?
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
