import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Puteaux | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour le traitement et démoussage de toiture à Puteaux, protégeant efficacement votre patrim',
  keywords: 'demoussage toiture puteaux, traitement toiture puteaux, nettoyage toiture puteaux, antimousse toiture puteaux, hydrofuge toiture puteaux, entretien toiture puteaux',
};

export default function TraitementToiturePuteauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Puteaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour le traitement et démoussage de toiture à Puteaux, protégeant efficacement votre patrimoine immobilier contre les dégradations naturelles. Nos solutions techniques garantissent la longévité et l&apos;esthétique de votre couverture dans toute l&apos;Île-de-France.</p>

        <h2>Nos services de traitement et démoussage toiture a Puteaux</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de Puteaux, caractérisées par un climat propice au développement des mousses et lichens. Notre méthode professionnelle commence par un diagnostic précis de l&apos;état de votre toiture, évaluant les zones sensibles et les risques potentiels d&apos;infiltration. Nous utilisons des produits écologiques et homologués qui éliminent durablement les mousses tout en préservant l&apos;intégrité des matériaux. Notre processus comprend un nettoyage haute précision, un traitement antimousse et une application d&apos;hydrofuge qui protège votre toiture contre l&apos;humidité et les agressions environnementales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés et disposent de plus de 15 ans d&apos;expérience. Nous proposons une garantie de 5 ans sur nos traitements, intervenons rapidement sur Puteaux et ses environs, et utilisons uniquement des produits respectueux de l&apos;environnement. Notre approche sur-mesure et notre engagement qualité font la différence.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage de toiture varie entre 15€ et 35€ au m², selon la complexité de l&apos;intervention, l&apos;accessibilité et l&apos;état initial de votre toiture. Pour une maison moyenne à Puteaux (120 m²), comptez un budget global entre 1800€ et 4200€. Un devis personnalisé gratuit permet de préciser votre estimation exacte.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour réaliser un traitement antimousse se situe idéalement au printemps ou à l&apos;automne, lorsque les températures sont douces (entre 10°C et 25°C). Ces périodes permettent un séchage optimal et une pénétration efficace des produits de traitement, avant les périodes de fortes humidités.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après un démoussage, l&apos;application d&apos;un hydrofuge nécessite un support parfaitement propre et sec. Utilisez un produit adapté à votre type de couverture (tuiles, ardoises), appliquez-le uniformément à l&apos;aide d&apos;un pulvérisateur basse pression, en respectant les zones de recouvrement. Laissez sécher complètement pendant 24 à 48 heures avant toute exposition à l&apos;humidité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Puteaux ?
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
