import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Épinay-sur-Seine | Groupe Expert Altitude Com',
  description: 'Spécialistes du traitement et démoussage de toiture à Épinay-sur-Seine, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les dégrad',
  keywords: 'demoussage toiture épinay-sur-seine, traitement toiture épinay-sur-seine, nettoyage toiture épinay-sur-seine, antimousse toiture épinay-sur-seine, hydrofuge toiture épinay-sur-seine, entretien toiture épinay-sur-seine',
};

export default function TraitementToitureEpinaySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Épinay-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialistes du traitement et démoussage de toiture à Épinay-sur-Seine, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les dégradations causées par la mousse et l&apos;humidité. Nos solutions sur-mesure garantissent la longévité et l&apos;esthétique de votre toiture en quelques heures seulement.</p>

        <h2>Nos services de traitement et démoussage toiture a Épinay-sur-Seine</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations d&apos;Épinay-sur-Seine, confrontées à un climat propice au développement des mousses. Notre méthode professionnelle comprend un diagnostic précis, un nettoyage haute pression sans agressivité et un traitement antimousse longue durée. Nous utilisons des produits écologiques homologués qui éliminent 98% des mousses et algues sans détériorer vos tuiles. Notre technique permet également de restaurer l&apos;étanchéité et l&apos;isolation de votre toiture, préservant ainsi sa structure et ses performances thermiques. Un investissement rentable qui protège durablement votre bien immobilier.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée intervient avec un matériel professionnel, nos techniciens sont formés aux dernières techniques de traitement, nous proposons une garantie de 5 ans sur nos interventions, et notre devis est toujours gratuit et sans engagement. Nous intervenons rapidement sur tout le territoire d&apos;Épinay-sur-Seine et ses environs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage de toiture varie entre 15€ et 35€ au m², selon la surface, l&apos;accessibilité et l&apos;état de votre toiture. Pour une maison moyenne de 100m², comptez un budget global entre 1500€ et 3500€. Un diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis adapté à votre situation spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de réaliser un traitement antimousse tous les 3 à 5 ans, idéalement au printemps ou à l&apos;automne. Les signes qui doivent vous alerter sont l&apos;apparition de plaques vertes ou noires, une perte d&apos;étanchéité, ou une accumulation importante de mousse sur vos tuiles. Une intervention préventive permet d&apos;éviter des dégradations structurelles coûteuses.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après un démoussage, l&apos;application d&apos;un hydrofuge se fait en 3 étapes : nettoyer parfaitement la surface, appliquer le produit uniformément à l&apos;aide d&apos;un pulvérisateur professionnel, et laisser sécher complètement (environ 24h). Notre équipe utilise des hydrofuges spécifiques qui créent une barrière invisible protégeant durablement votre toiture contre l&apos;humidité et les infiltrations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Épinay-sur-Seine ?
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
