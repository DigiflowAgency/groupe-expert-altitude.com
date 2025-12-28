import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Villenave-d\'Ornon | Groupe Expert Altitude Com',
  description: 'Spécialiste du traitement et démoussage de toiture à Villenave-d&apos;Ornon, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les dégrad',
  keywords: 'demoussage toiture villenave-d'ornon, traitement toiture villenave-d'ornon, nettoyage toiture villenave-d'ornon, antimousse toiture villenave-d'ornon, hydrofuge toiture villenave-d'ornon, entretien toiture villenave-d'ornon',
};

export default function TraitementToitureVillenaveDOrnonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Villenave-d'Ornon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste du traitement et démoussage de toiture à Villenave-d&apos;Ornon, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les dégradations naturelles. Nos solutions techniques garantissent la longévité et l&apos;esthétique de vos couvertures dans toute la métropole bordelaise.</p>

        <h2>Nos services de traitement et démoussage toiture a Villenave-d'Ornon</h2>
        <div className="space-y-4">
          <p>Le démoussage de toiture est une intervention cruciale pour préserver l&apos;intégrité de votre habitat. Notre méthode professionnelle élimine mécaniquement et chimiquement les mousses, lichens et algues qui fragilisent vos tuiles. Nous utilisons des produits écologiques homologués, adaptés à chaque type de toiture (tuiles terre cuite, ardoises, béton), qui respectent l&apos;environnement et votre structure. Notre équipe technique intervient avec un matériel haute précision, garantissant un nettoyage en profondeur sans endommager les supports. Un traitement préventif antimousse est systématiquement appliqué pour protéger durablement votre toiture contre les futures proliférations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale de plus de 15 ans à Villenave-d&apos;Ornon
✓ Techniciens certifiés et équipements professionnels
✓ Diagnostic gratuit avant intervention
✓ Garantie satisfaction de 3 ans sur nos traitements
✓ Devis personnalisé sous 48h
✓ Respect des normes environnementales</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix moyen d&apos;un démoussage de toiture varie entre 15€ et 35€ au m², selon la complexité de l&apos;intervention, l&apos;accessibilité et l&apos;état initial de la surface. Pour une maison de 100m², comptez un budget global entre 1500€ et 3500€. Notre expertise nous permet de proposer des tarifs compétitifs sans compromettre la qualité.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour réaliser un traitement antimousse se situe entre avril et octobre, période où les conditions météorologiques sont optimales. Idéalement, intervenez tous les 3-5 ans ou dès que vous constatez les premières proliférations de mousse, avant qu&apos;elles n&apos;endommagent structurellement vos tuiles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un séchage complet de la surface (24-48h). Nous utilisons un produit spécifique pulvérisé uniformément, qui forme un film protecteur invisible. Cette technique permet de limiter la rétention d&apos;humidité, de bloquer la pousse de nouveaux micro-organismes et de préserver l&apos;étanchéité de votre toiture.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Villenave-d'Ornon ?
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
