import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Six-Fours-les-Plages | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite une attention professionnelle, et le Groupe Expert Altitude Com est votre partenaire de confiance à Six-Fours-les-Plages pour un trait',
  keywords: 'demoussage toiture six-fours-les-plages, traitement toiture six-fours-les-plages, nettoyage toiture six-fours-les-plages, antimousse toiture six-fours-les-plages, hydrofuge toiture six-fours-les-plages, entretien toiture six-fours-les-plages',
};

export default function TraitementToitureSixFoursLesPlagesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Six-Fours-les-Plages</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite une attention professionnelle, et le Groupe Expert Altitude Com est votre partenaire de confiance à Six-Fours-les-Plages pour un traitement et démoussage toiture impeccable. Nous protégeons votre patrimoine immobilier contre les dégradations liées aux mousses et aux intempéries.</p>

        <h2>Nos services de traitement et démoussage toiture a Six-Fours-les-Plages</h2>
        <div className="space-y-4">
          <p>Le démoussage et traitement de toiture sont essentiels pour préserver la longévité et l&apos;esthétique de votre habitat. Notre équipe de professionnels utilise des techniques innovantes pour éliminer efficacement les mousses, lichens et salissures qui s&apos;accumulent sur vos tuiles. À Six-Fours-les-Plages, nous intervenons sur tous types de toitures - tuiles, ardoises, bacs acier - avec un protocole adapté à chaque support. Notre processus comprend un nettoyage haute précision, un traitement antimousse écologique et une protection hydrofuge qui garantit jusqu&apos;à 5 ans de résistance aux proliférations végétales. Nos produits respectent l&apos;environnement et sont certifiés sans impact nocif pour la biodiversité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour la qualité et la fiabilité. Nos techniciens sont formés aux dernières normes de traitement, nous disposons d&apos;une assurance professionnelle complète, et nous proposons un devis gratuit sous 48h. Notre taux de satisfaction client dépasse 95%, et nous intervenons rapidement sur tout le secteur de Six-Fours-les-Plages et ses environs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un démoussage de toiture varie entre 15€ et 35€ au m², selon la complexité de l&apos;intervention, l&apos;état de la toiture et son accessibilité. Pour une maison moyenne de 100m², comptez un budget entre 1500€ et 3500€. Nous réalisons un diagnostic précis et un devis détaillé avant toute intervention.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin d&apos;automne ou début du printemps, périodes où l&apos;humidité et la température sont propices à un traitement efficace. Idéalement, prévoyez un traitement tous les 3 à 5 ans, ou dès que vous observez les premiers signes de prolifération.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un support parfaitement sec et nettoyé. Utilisez un produit adapté à votre type de toiture, appliquez-le uniformément avec un pulvérisateur à basse pression, en 2 couches croisées. Respectez les conditions météorologiques : température entre 10-25°C, absence de pluie prévue dans les 48h.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Six-Fours-les-Plages ?
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
