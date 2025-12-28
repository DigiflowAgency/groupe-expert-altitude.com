import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Tassin-la-Demi-Lune | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Tassin-la-Demi-Lune. Spécialistes depuis plus',
  keywords: 'demoussage toiture tassin-la-demi-lune, traitement toiture tassin-la-demi-lune, nettoyage toiture tassin-la-demi-lune, antimousse toiture tassin-la-demi-lune, hydrofuge toiture tassin-la-demi-lune, entretien toiture tassin-la-demi-lune',
};

export default function TraitementToitureTassinLaDemiLunePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Tassin-la-Demi-Lune</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Tassin-la-Demi-Lune. Spécialistes depuis plus de 15 ans, nous protégeons et embellissons vos toitures avec un savoir-faire précis et des techniques innovantes.</p>

        <h2>Nos services de traitement et démoussage toiture a Tassin-la-Demi-Lune</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de l&apos;ouest lyonnais. Nous intervenons méticuleusement pour éliminer les mousses, lichens et salissures qui détériorent votre couverture. Notre processus comprend un diagnostic initial précis, un nettoyage haute pression respectueux des matériaux, puis l&apos;application d&apos;un traitement antimousse et hydrofuge longue durée. Chaque intervention est personnalisée selon le type de toiture (tuiles, ardoises, béton) et son état, garantissant une protection optimale contre les infiltrations et la dégradation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos points forts : techniciens certifiés, matériel professionnel dernier cri, produits écologiques et conformes aux normes environnementales. Nous proposons une garantie de 5 ans sur nos traitements, intervenons rapidement sur Tassin-la-Demi-Lune et communes environnantes, et réalisons un suivi personnalisé après chaque intervention.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix moyen du démoussage varie entre 15€ et 35€ au m², selon la complexité du chantier, l&apos;accessibilité et l&apos;état de la toiture. Pour une maison standard de 100m², comptez un investissement entre 1500€ et 3500€, incluant nettoyage et traitement préventif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse se situe entre avril et octobre, période où les conditions météorologiques sont favorables. Idéalement, réalisez ce traitement tous les 5 à 7 ans, ou dès que vous observez les premiers signes de prolifération de mousse.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un support parfaitement sec et propre. Utilisez un produit adapté à votre matériau, appliquez uniformément au rouleau ou par pulvérisation, en 2 couches croisées, en respectant un temps de séchage de 4 à 6 heures entre chaque couche.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Tassin-la-Demi-Lune ?
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
