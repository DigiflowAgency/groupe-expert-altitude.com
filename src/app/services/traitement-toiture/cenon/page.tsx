import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Cenon | Groupe Expert Altitude Com',
  description: 'À Cenon et ses environs, Groupe Expert Altitude Com est votre partenaire spécialisé dans le traitement et le démoussage de toiture. Nos experts intervienne',
  keywords: 'demoussage toiture cenon, traitement toiture cenon, nettoyage toiture cenon, antimousse toiture cenon, hydrofuge toiture cenon, entretien toiture cenon',
};

export default function TraitementToitureCenonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Cenon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">À Cenon et ses environs, Groupe Expert Altitude Com est votre partenaire spécialisé dans le traitement et le démoussage de toiture. Nos experts interviennent rapidement pour préserver l&apos;intégrité et l&apos;esthétique de votre toiture, garantissant une protection durable contre les infiltrations et la détérioration.</p>

        <h2>Nos services de traitement et démoussage toiture a Cenon</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de la région bordelaise. Nous utilisons des techniques professionnelles et des produits écologiques qui éliminent efficacement la mousse, les lichens et les algues sans endommager vos tuiles. Notre processus comprend un diagnostic précis, un nettoyage haute pression adapté, puis l&apos;application d&apos;un traitement antimousse et hydrofuge qui protège durablement votre toiture contre les agressions climatiques. En moyenne, notre intervention permet de prolonger la durée de vie de votre toiture de 10 à 15 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son expertise technique, son engagement local à Cenon et sa approche sur-mesure. Nos techniciens sont certifiés, nos produits sont respectueux de l&apos;environnement, et nous proposons un devis gratuit sous 48h. Nous garantissons une intervention propre, rapide et sans nuisance pour vos voisins.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 25€ par m², selon l&apos;état et l&apos;accessibilité de votre toiture. Pour une maison moyenne de 100m², comptez un budget global entre 1500€ et 2500€. Nous réalisons un diagnostic précis et transparent avant toute intervention.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin été ou début automne. Les températures modérées (15-20°C) permettent une application optimale. Il est recommandé de traiter tous les 3-5 ans, ou dès que la prolifération de mousse devient visible.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;hydrofugation s&apos;effectue en 3 étapes : nettoyage complet, séchage total de la surface, puis application au pulvérisateur d&apos;un produit hydrofuge spécial. Notre technique garantit une protection contre l&apos;humidité pendant plusieurs années.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Cenon ?
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
