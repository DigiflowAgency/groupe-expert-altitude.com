import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Ivry-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en traitement et démoussage de toiture à Ivry-sur-Seine. Nous protégeons et restaurons vos couve',
  keywords: 'demoussage toiture ivry-sur-seine, traitement toiture ivry-sur-seine, nettoyage toiture ivry-sur-seine, antimousse toiture ivry-sur-seine, hydrofuge toiture ivry-sur-seine, entretien toiture ivry-sur-seine',
};

export default function TraitementToitureIvrySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Ivry-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en traitement et démoussage de toiture à Ivry-sur-Seine. Nous protégeons et restaurons vos couvertures avec une expertise technique précise, garantissant la longévité et l&apos;esthétique de votre patrimoine immobilier.</p>

        <h2>Nos services de traitement et démoussage toiture a Ivry-sur-Seine</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations d&apos;Ivry-sur-Seine, où l&apos;humidité et les conditions climatiques favorisent le développement de mousses et lichens. Notre processus complet commence par un diagnostic précis de l&apos;état de votre toiture, suivi d&apos;un nettoyage haute précision qui élimine les végétations parasitaires sans endommager les tuiles. Nous utilisons des produits professionnels écologiques qui traitent en profondeur et protègent durablement vos matériaux. Notre technique permet de restaurer l&apos;étanchéité, prévenir les infiltrations et redonner un aspect neuf à votre toiture.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos experts interviennent avec un équipement professionnel et une méthodologie éprouvée. Nous proposons une garantie de 5 ans sur nos traitements, intervenons rapidement sur Ivry-sur-Seine et ses environs, et réalisons un diagnostic gratuit avant toute intervention. Notre engagement qualité et notre certification nous distinguent des autres prestataires.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 30€ au m², selon la complexité de la toiture, son accessibilité et son état. Pour une maison moyenne de 100m², comptez un budget global entre 1500€ et 3000€, incluant nettoyage et traitement préventif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse se situe entre avril et septembre, période où les conditions météorologiques permettent un séchage optimal. Il est recommandé d&apos;intervenir tous les 3 à 5 ans, ou dès que les premières mousses apparaissent.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un support parfaitement sec et propre. On utilise un pulvérisateur professionnel, en appliquant uniformément le produit, par couches fines et croisées, en respectant les zones de recouvrement des tuiles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Ivry-sur-Seine ?
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
