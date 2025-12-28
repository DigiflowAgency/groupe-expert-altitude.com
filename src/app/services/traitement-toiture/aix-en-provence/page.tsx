import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Aix-en-Provence | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Aix-en-Provence et ses environs. Spécialistes de',
  keywords: 'demoussage toiture aix-en-provence, traitement toiture aix-en-provence, nettoyage toiture aix-en-provence, antimousse toiture aix-en-provence, hydrofuge toiture aix-en-provence, entretien toiture aix-en-provence',
};

export default function TraitementToitureAixEnProvencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Aix-en-Provence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Aix-en-Provence et ses environs. Spécialistes depuis plus de 15 ans, nous protégeons et valorisons votre patrimoine immobilier avec des solutions techniques innovantes et durables.</p>

        <h2>Nos services de traitement et démoussage toiture a Aix-en-Provence</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques du climat provençal, caractérisé par son humidité et ses variations saisonnières. Notre méthode professionnelle commence par un diagnostic précis de votre toiture, permettant d&apos;identifier les zones sensibles et les types de mousses présentes. Nous utilisons des produits écologiques et homologués, garantissant un nettoyage en profondeur sans endommager les matériaux. Notre équipe technique traite méticuleusement chaque surface, éliminant les mousses, lichens et algues qui peuvent dégrader votre toiture. Un traitement hydrofuge final assure une protection durable contre l&apos;humidité et les infiltrations, prolongeant significativement la durée de vie de votre couverture.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés et formés aux dernières normes de traitement. Nous proposons une intervention rapide sur Aix-en-Provence, avec un devis gratuit et détaillé. Notre engagement qualité se traduit par une garantie de 5 ans sur nos traitements. Nous intervenons sur tous types de toitures : tuiles, ardoises, fibrociment, avec un taux de satisfaction client de 98%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 35€ au m², selon la complexité de la toiture, son accessibilité et le niveau de mousse. Pour une maison moyenne à Aix-en-Provence (120 m²), comptez un budget entre 1800€ et 4200€. Un diagnostic préalable gratuit permet un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin septembre ou début octobre, après la période estivale et avant les premières pluies. Cette période permet un traitement optimal avec un séchage rapide et une protection hivernale efficace. À Aix-en-Provence, nous recommandons un traitement tous les 3 à 5 ans.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un support parfaitement sec et propre. Notre processus comprend un nettoyage haute pression, un traitement antimousse, puis l&apos;application d&apos;un hydrofuge par pulvérisation avec une technique de recouvrement intégral. Le produit doit être appliqué uniformément, en couche fine, par des professionnels équipés.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Aix-en-Provence ?
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
