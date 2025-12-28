import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Paris 1er | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire référence pour le traitement et démoussage de toiture à Paris 1er, protège et valorise votre patrimoine immobi',
  keywords: 'demoussage toiture paris 1er, traitement toiture paris 1er, nettoyage toiture paris 1er, antimousse toiture paris 1er, hydrofuge toiture paris 1er, entretien toiture paris 1er',
};

export default function TraitementToitureParis1erPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Paris 1er</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire référence pour le traitement et démoussage de toiture à Paris 1er, protège et valorise votre patrimoine immobilier avec des solutions techniques innovantes. Nous intervenons sur tous types de toitures dans l&apos;hypercentre parisien avec une expertise garantie.</p>

        <h2>Nos services de traitement et démoussage toiture a Paris 1er</h2>
        <div className="space-y-4">
          <p>Le démoussage et traitement de toiture représentent des interventions essentielles pour préserver la longévité et l&apos;esthétique de votre couverture. Notre méthode professionnelle commence par un diagnostic précis de l&apos;état de votre toiture, identifiant les zones sensibles et les développements de mousse ou lichens. Nous utilisons des produits écologiques et homologués qui éliminent efficacement les végétaux sans endommager les matériaux. Notre équipe technique réalise un traitement complet en 3 étapes : nettoyage haute pression, application d&apos;un antimousse spécifique et finition hydrofuge qui protège durablement contre les infiltrations et les remontées d&apos;humidité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour une expertise certifiée. Nos techniciens sont formés aux dernières normes de traitement de toiture, nous intervenons avec un matériel professionnel de haute précision. Nous proposons une garantie de 5 ans sur nos traitements, réalisons un devis gratuit et personnalisé, et adaptons systématiquement notre intervention aux spécificités architecturales de votre bien à Paris 1er.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un démoussage de toiture varie entre 15€ et 35€ au m², selon la complexité de l&apos;intervention, l&apos;accessibilité et l&apos;état initial de la surface. Pour une maison moyenne de 100m², comptez un budget global entre 1500€ et 3500€. Nous réalisons un diagnostic précis permettant un devis détaillé et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse se situe idéalement au printemps ou à l&apos;automne, avec des températures entre 10°C et 25°C. Ces périodes permettent un séchage optimal et une pénétration efficace des produits. Une intervention tous les 3 à 5 ans est recommandée pour maintenir une toiture en parfait état.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;un hydrofuge après démoussage nécessite plusieurs étapes : nettoyage complet de la surface, séchage total, application au rouleau ou par pulvérisation d&apos;un produit adapté aux matériaux (tuiles, ardoises), en respectant les recommandations du fabricant. Notre équipe utilise des hydrofuges haute performance garantissant une protection minimale de 5 ans contre les infiltrations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Paris 1er ?
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
