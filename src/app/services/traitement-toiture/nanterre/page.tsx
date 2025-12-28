import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Nanterre | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour le traitement et démoussage de toiture à Nanterre et ses environs. Spécialistes de la rén',
  keywords: 'demoussage toiture nanterre, traitement toiture nanterre, nettoyage toiture nanterre, antimousse toiture nanterre, hydrofuge toiture nanterre, entretien toiture nanterre',
};

export default function TraitementToitureNanterrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Nanterre</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour le traitement et démoussage de toiture à Nanterre et ses environs. Spécialistes de la rénovation et protection des toitures, nous intervenons rapidement pour préserver la durabilité et l&apos;esthétique de votre couverture.</p>

        <h2>Nos services de traitement et démoussage toiture a Nanterre</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de Nanterre, confrontées à des conditions climatiques favorisant le développement de mousses et lichens. Notre méthode professionnelle commence par un diagnostic précis de l&apos;état de votre toiture, suivi d&apos;un nettoyage haute précision qui élimine totalement les végétaux sans endommager les matériaux. Nous utilisons des produits écologiques et homologués, garantissant un traitement antimousse efficace et respectueux de l&apos;environnement. Notre équipe technique traite ensuite la surface avec un hydrofuge de haute qualité qui protège durablement contre l&apos;humidité et les infiltrations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à Nanterre
- Techniciens certifiés et formés aux dernières techniques
- Devis gratuit et transparent sans engagement
- Traitement garanti 5 ans contre la repousse de mousse
- Interventions rapides et adaptées à chaque type de toiture</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 35€ au m², selon la complexité de l&apos;intervention, l&apos;accessibilité et l&apos;état de la toiture. Pour une maison moyenne de 100m², comptez un budget global entre 1500€ et 3500€. Un diagnostic précis permet d&apos;établir un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur période pour un traitement antimousse se situe au printemps ou à l&apos;automne, avec des températures entre 10°C et 25°C. Idéalement tous les 3-5 ans ou dès que vous observez les premiers signes de développement de mousse et de végétation.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;un hydrofuge nécessite un nettoyage préalable complet, un séchage total de la surface, puis une pulvérisation uniforme au rouleau ou par projection. Le produit doit être adapté au matériau (tuiles, ardoises) et appliqué par couches fines et croisées pour une protection optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Nanterre ?
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
