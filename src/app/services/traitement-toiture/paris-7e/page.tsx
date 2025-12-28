import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Paris 7e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en traitement et démoussage de toiture sur Paris 7e et sa région. Nous protégeons et rénovons vo',
  keywords: 'demoussage toiture paris 7e, traitement toiture paris 7e, nettoyage toiture paris 7e, antimousse toiture paris 7e, hydrofuge toiture paris 7e, entretien toiture paris 7e',
};

export default function TraitementToitureParis7ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Paris 7e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en traitement et démoussage de toiture sur Paris 7e et sa région. Nous protégeons et rénovons vos toitures avec une expertise technique précise et des solutions sur-mesure adaptées à chaque type de bâtiment.</p>

        <h2>Nos services de traitement et démoussage toiture a Paris 7e</h2>
        <div className="space-y-4">
          <p>Le démoussage de toiture est une étape cruciale pour préserver la longévité et l&apos;esthétique de votre couverture. Notre processus complet commence par un diagnostic précis de l&apos;état de votre toiture, suivi d&apos;un nettoyage haute pression respectueux des matériaux. Nos techniciens utilisent des produits écologiques et professionnels qui éliminent efficacement la mousse, les algues et les lichens sans endommager la surface. Nous traitons ensuite votre toiture avec un hydrofuge de haute qualité qui protège durablement contre l&apos;humidité et les infiltrations, garantissant jusqu&apos;à 10 ans de protection optimale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise certifiée avec plus de 15 ans d&apos;expérience sur Paris 7e, 2) Des techniciens hautement qualifiés et formés aux dernières techniques, 3) Un diagnostic gratuit et personnalisé avant intervention, 4) Des solutions 100% conformes aux normes environnementales et de sécurité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 35€ au m², selon la complexité de la toiture, son accessibilité et son état. Pour une maison moyenne de 100m² à Paris 7e, comptez un budget global entre 1500€ et 3500€, incluant nettoyage et traitement antimousse.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin printemps ou début automne, soit entre avril et octobre. Ces périodes offrent des conditions météorologiques optimales : température entre 10-25°C, faible humidité, pas de risque de gel ou de pluie intense.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;hydrofuge nécessite : 1) Un séchage complet de la surface, 2) Une application au rouleau ou pulvérisateur en 2 couches croisées, 3) Un temps de séchage de 24h, 4) Une vérification de la bonne pénétration et répartition du produit.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Paris 7e ?
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
