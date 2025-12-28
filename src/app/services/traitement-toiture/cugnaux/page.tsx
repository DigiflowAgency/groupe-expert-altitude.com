import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Cugnaux | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Cugnaux et ses environs. Spécialistes du nett',
  keywords: 'demoussage toiture cugnaux, traitement toiture cugnaux, nettoyage toiture cugnaux, antimousse toiture cugnaux, hydrofuge toiture cugnaux, entretien toiture cugnaux',
};

export default function TraitementToitureCugnauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Cugnaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Cugnaux et ses environs. Spécialistes du nettoyage et de la protection des toitures, nous intervenons rapidement pour préserver la longévité et l&apos;esthétique de votre patrimoine immobilier.</p>

        <h2>Nos services de traitement et démoussage toiture a Cugnaux</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de Cugnaux et de la région toulousaine. Nous utilisons des techniques professionnelles qui éliminent totalement la mousse, les lichens et les algues qui détériorent votre couverture. Notre processus comprend un nettoyage haute précision, un traitement antimousse écologique et une application d&apos;hydrofuge de protection qui garantit une résistance optimale aux intempéries. Chaque intervention est précédée d&apos;un diagnostic technique précis, permettant d&apos;adapter notre méthode à la nature spécifique de votre toiture (tuiles, ardoises, fibrociment). Nos équipes certifiées interviennent avec un équipement de sécurité professionnel, assurant un travail impeccable et sans risque.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans dans le traitement de toiture
- Techniciens certifiés et formés aux dernières normes de sécurité
- Produits écologiques et respectueux de l&apos;environnement
- Devis gratuit et intervention rapide sur Cugnaux et ses alentours
- Garantie décennale sur nos prestations</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage de toiture varie entre 15€ et 30€ par m², selon la complexité de l&apos;intervention, l&apos;état de la toiture et son accessibilité. Pour une maison moyenne de 100m², comptez un budget global entre 1500€ et 3000€. Un devis personnalisé est toujours recommandé pour une estimation précise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour réaliser un traitement antimousse se situe idéalement au printemps ou à l&apos;automne, lorsque les températures sont douces (entre 10°C et 25°C). Ces périodes permettent un séchage optimal et une pénétration efficace des produits de traitement. Une intervention tous les 5 à 7 ans est généralement recommandée pour maintenir une toiture en parfait état.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après un démoussage, l&apos;application d&apos;un hydrofuge nécessite plusieurs étapes : nettoyer soigneusement la surface, attendre un séchage complet, puis appliquer le produit hydrofuge à l&apos;aide d&apos;un pulvérisateur ou d&apos;un rouleau spécial. Il est crucial de respecter les conditions météorologiques (pas de pluie, température entre 10-25°C) et de suivre scrupuleusement les instructions du fabricant pour une protection maximale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Cugnaux ?
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
