import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Bordeaux | Groupe Expert Altitude Com',
  description: 'Spécialiste du traitement et démoussage de toiture à Bordeaux et dans toute la Nouvelle-Aquitaine, le Groupe Expert Altitude Com protège votre patrimoine i',
  keywords: 'demoussage toiture bordeaux, traitement toiture bordeaux, nettoyage toiture bordeaux, antimousse toiture bordeaux, hydrofuge toiture bordeaux, entretien toiture bordeaux',
};

export default function TraitementToitureBordeauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Bordeaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste du traitement et démoussage de toiture à Bordeaux et dans toute la Nouvelle-Aquitaine, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les dégradations. Nos solutions innovantes garantissent la longévité et l&apos;esthétique de votre toiture en seulement quelques heures d&apos;intervention.</p>

        <h2>Nos services de traitement et démoussage toiture a Bordeaux</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture représente bien plus qu&apos;un simple nettoyage : c&apos;est une expertise complète de préservation de votre habitat. Notre équipe technique utilise des techniques professionnelles qui éliminent intégralement les mousses, lichens et salissures tout en protégeant les matériaux. Nous intervenons sur tous types de couvertures - tuiles, ardoises, béton - avec un protocole précis comprenant un diagnostic initial, un traitement antimousse haute performance et une application d&apos;hydrofuge de protection. Chaque intervention à Bordeaux est personnalisée, en respectant les normes environnementales et techniques les plus strictes, pour un résultat durable et esthétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos points forts : Une expertise de plus de 15 ans, des techniciens certifiés, un matériel professionnel dernier cri, des produits écologiques homologués et une intervention rapide sur Bordeaux et ses environs. Nous garantissons une efficacité à 98% contre les mousses, avec un traitement qui protège votre toiture pendant 5 à 7 ans minimum.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 35€ au m², selon la complexité de la toiture, son accessibilité et son état. Un diagnostic gratuit permet de vous proposer un devis précis adapté à votre situation spécifique à Bordeaux.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur période pour un traitement antimousse se situe entre avril et octobre, avec une préférence pour les périodes sèches. Un traitement préventif tous les 5-6 ans est recommandé pour maintenir l&apos;intégrité de votre couverture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;hydrofuge nécessite un support propre et sec. Notre processus inclut un nettoyage haute pression, un traitement antimousse, puis l&apos;application d&apos;un hydrofuge respirant qui protège sans imperméabiliser totalement la surface.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Bordeaux ?
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
