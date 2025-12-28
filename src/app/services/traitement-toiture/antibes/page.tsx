import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Antibes | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite le meilleur traitement possible, et à Antibes, le Groupe Expert Altitude Com est votre partenaire de confiance pour un démoussage et u',
  keywords: 'demoussage toiture antibes, traitement toiture antibes, nettoyage toiture antibes, antimousse toiture antibes, hydrofuge toiture antibes, entretien toiture antibes',
};

export default function TraitementToitureAntibesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Antibes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite le meilleur traitement possible, et à Antibes, le Groupe Expert Altitude Com est votre partenaire de confiance pour un démoussage et un entretien impeccable. Spécialistes du traitement de toiture dans la région, nous protégeons votre patrimoine immobilier contre les dégradations liées aux mousses et aux intempéries.</p>

        <h2>Nos services de traitement et démoussage toiture a Antibes</h2>
        <div className="space-y-4">
          <p>Le démoussage de toiture est un service essentiel pour préserver la longévité et l&apos;esthétique de votre couverture. Notre méthode professionnelle commence par un diagnostic précis de l&apos;état de votre toiture, réalisé par nos experts sur Antibes et ses environs. Nous utilisons des techniques innovantes et des produits écologiques qui éliminent efficacement les mousses, lichens et algues sans endommager vos tuiles. Notre traitement en profondeur permet de restaurer l&apos;aspect initial de votre toiture et de la protéger contre les infiltrations et les dégradations futures. Chaque intervention est personnalisée, en tenant compte des spécificités de votre toiture et des conditions climatiques locales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour la qualité et la fiabilité. Nos techniciens sont certifiés et disposent de plus de 15 ans d&apos;expérience dans le traitement de toiture. Nous garantissons une intervention rapide, un devis transparent et des résultats durables. Notre approche éco-responsable utilise des produits de traitement respectueux de l&apos;environnement. De plus, nous proposons une garantie de 5 ans sur nos traitements antimousses.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage de toiture varie entre 15€ et 35€ au m², selon la complexité de l&apos;intervention, l&apos;accessibilité et l&apos;état de votre toiture. Un diagnostic gratuit permet de vous fournir un devis précis adapté à votre situation spécifique à Antibes.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est généralement à l&apos;automne ou au début du printemps. Ces périodes offrent des conditions climatiques optimales pour un traitement efficace et une protection durable contre le développement des mousses. Un traitement tous les 3 à 5 ans est recommandé pour maintenir votre toiture en parfait état.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après le démoussage, l&apos;application d&apos;un hydrofuge se fait en 3 étapes : nettoyage complet de la surface, séchage total, puis pulvérisation uniforme du produit hydrofuge à l&apos;aide d&apos;un équipement professionnel. Cette technique garantit une protection maximale contre l&apos;humidité et les infiltrations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Antibes ?
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
