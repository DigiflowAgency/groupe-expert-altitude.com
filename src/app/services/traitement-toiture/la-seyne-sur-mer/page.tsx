import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a La Seyne-sur-Mer | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite une attention professionnelle, et le Groupe Expert Altitude Com est votre partenaire de confiance pour un traitement et démoussage opt',
  keywords: 'demoussage toiture la seyne-sur-mer, traitement toiture la seyne-sur-mer, nettoyage toiture la seyne-sur-mer, antimousse toiture la seyne-sur-mer, hydrofuge toiture la seyne-sur-mer, entretien toiture la seyne-sur-mer',
};

export default function TraitementToitureLaSeyneSurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a La Seyne-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite une attention professionnelle, et le Groupe Expert Altitude Com est votre partenaire de confiance pour un traitement et démoussage optimal à La Seyne-sur-Mer. Nous protégeons votre patrimoine immobilier contre les dégradations causées par la mousse et l&apos;humidité.</p>

        <h2>Nos services de traitement et démoussage toiture a La Seyne-sur-Mer</h2>
        <div className="space-y-4">
          <p>Le démoussage de toiture est un service essentiel pour préserver l&apos;intégrité et l&apos;esthétique de votre habitat. Sur La Seyne-sur-Mer et ses environs, notre équipe utilise des techniques innovantes pour éliminer efficacement la mousse et les lichens qui s&apos;installent progressivement sur vos tuiles. Notre processus complet comprend un nettoyage haute précision, un traitement antimousse professionnel et une application d&apos;hydrofuge qui protège durablement votre toiture contre les agressions environnementales. Nos experts interviennent avec du matériel spécialisé, garantissant un résultat impeccable sans endommager vos matériaux. En moyenne, un traitement bien réalisé peut prolonger la durée de vie de votre toiture de 10 à 15 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour la qualité et la fiabilité. Nos techniciens sont certifiés et formés aux dernières techniques de traitement. Nous proposons un diagnostic gratuit, un devis détaillé sans engagement, et intervenons rapidement sur La Seyne-sur-Mer. Notre approche respectueuse de l&apos;environnement utilise des produits éco-responsables, et nous garantissons nos interventions pendant 5 ans.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un démoussage de toiture varie entre 15€ et 30€ au m², selon la surface, l&apos;accessibilité et l&apos;état de votre toiture. Pour une maison moyenne de 100 m², comptez un investissement global entre 1500€ et 3000€. Un diagnostic précis sur place nous permettra de vous proposer un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin printemps ou début automne, périodes où l&apos;humidité et la température sont optimales pour une application efficace. Idéalement, réalisez ce traitement tous les 5 à 7 ans, ou dès que vous observez les premiers signes de prolifération de mousse.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;hydrofuge nécessite un support parfaitement sec et propre. Nous utilisons un rouleau ou un pulvérisateur professionnel, en appliquant le produit de manière uniforme et en respectant les zones de recouvrement. L&apos;opération se fait par couches fines, en veillant à une pénétration optimale sans surcharge.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a La Seyne-sur-Mer ?
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
