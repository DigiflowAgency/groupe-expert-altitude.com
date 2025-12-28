import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Montreuil | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Montreuil et ses environs. Nos experts interv',
  keywords: 'demoussage toiture montreuil, traitement toiture montreuil, nettoyage toiture montreuil, antimousse toiture montreuil, hydrofuge toiture montreuil, entretien toiture montreuil',
};

export default function TraitementToitureMontreuilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Montreuil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Montreuil et ses environs. Nos experts interviennent rapidement pour protéger et restaurer la longévité de vos toitures, en utilisant des techniques innovantes adaptées aux spécificités de l&apos;habitat local.</p>

        <h2>Nos services de traitement et démoussage toiture a Montreuil</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux défis spécifiques des habitations de Montreuil, exposées à des conditions climatiques variées. Notre processus comprend un diagnostic précis, un nettoyage haute précision et un traitement antimousse qui préserve l&apos;intégrité de vos tuiles et ardoises. Nous utilisons des produits écologiques et professionnels qui éliminent durablement la mousse et les lichens, tout en protégeant la structure de votre toiture contre l&apos;humidité et les infiltrations. Notre méthode garantit une efficacité de 95% contre la prolifération des mousses, avec une durée de protection pouvant atteindre 5 à 7 ans selon l&apos;exposition.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour une expertise locale reconnue. Nos techniciens sont formés aux dernières techniques de traitement, nous disposons d&apos;une assurance professionnelle complète, et nous proposons un devis gratuit et détaillé. Notre connaissance du patrimoine architectural de Montreuil nous permet d&apos;intervenir avec précision et respect de votre bien.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage de toiture varie entre 15€ et 35€ au m², selon la complexité de l&apos;intervention, l&apos;état de la toiture et l&apos;accessibilité. Pour une maison moyenne de 100m², comptez un budget global entre 1500€ et 3500€. Nous proposons un diagnostic personnalisé gratuit pour un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin printemps ou début automne, avec des températures entre 10°C et 25°C. Idéalement, intervenez tous les 5-7 ans ou dès que vous observez plus de 30% de surface envahie par la mousse. À Montreuil, nous recommandons une vérification annuelle due à l&apos;humidité ambiante.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un séchage complet de la surface. Nous utilisons un hydrofuge respirant à base de siloxane, appliqué en deux couches au pulvérisateur à basse pression. La technique garantit une protection contre l&apos;eau sans obstruer les micropores de la toiture, préservant ainsi sa capacité naturelle de ventilation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Montreuil ?
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
