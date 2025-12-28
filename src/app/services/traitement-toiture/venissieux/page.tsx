import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Vénissieux | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Vénissieux et ses environs. Spécialistes de l',
  keywords: 'demoussage toiture vénissieux, traitement toiture vénissieux, nettoyage toiture vénissieux, antimousse toiture vénissieux, hydrofuge toiture vénissieux, entretien toiture vénissieux',
};

export default function TraitementToitureVenissieuxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Vénissieux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Vénissieux et ses environs. Spécialistes de l&apos;entretien et de la protection des toitures, nous intervenons rapidement pour préserver la longévité et l&apos;esthétique de votre habitat.</p>

        <h2>Nos services de traitement et démoussage toiture a Vénissieux</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de Vénissieux, confrontées à des conditions climatiques favorisant le développement de mousses et lichens. Notre méthode professionnelle commence par un diagnostic précis de l&apos;état de votre toiture, suivi d&apos;un nettoyage haute précision qui élimine totalement les végétaux sans endommager les tuiles. Nous utilisons des produits écologiques et homologués qui garantissent une protection durable contre les infiltrations et la prolifération des mousses. Notre traitement antimousse permet de prolonger la durée de vie de votre toiture jusqu&apos;à 10 ans, tout en améliorant son aspect visuel et sa résistance aux intempéries.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre expertise se distingue par : un diagnostic technique gratuit, des techniciens certifiés, des produits respectueux de l&apos;environnement, une intervention rapide sur Vénissieux, une garantie de résultat de 5 ans, et des tarifs transparents sans surprise. Plus de 500 toitures traitées avec succès depuis notre création.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 30€ au m², selon l&apos;accessibilité et l&apos;état de la toiture. Un tarif précis nécessite un diagnostic sur place. Pour une toiture moyenne de 100m², comptez un budget entre 1500€ et 3000€, incluant nettoyage et traitement préventif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse se situe entre avril et octobre, période où les conditions météorologiques permettent un séchage optimal. Idéalement, effectuez ce traitement tous les 5-7 ans ou dès que vous observez les premiers signes de développement de mousse.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;un hydrofuge après démoussage nécessite : un support parfaitement propre et sec, une température entre 10-25°C, l&apos;utilisation d&apos;un pulvérisateur professionnel, et une application en couche fine et uniforme. Le produit doit être spécifique à votre type de matériau (tuiles, ardoises).
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Vénissieux ?
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
