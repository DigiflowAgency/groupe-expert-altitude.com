import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Bègles | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Bègles et ses environs. Nos experts interviennen',
  keywords: 'demoussage toiture bègles, traitement toiture bègles, nettoyage toiture bègles, antimousse toiture bègles, hydrofuge toiture bègles, entretien toiture bègles',
};

export default function TraitementToitureBeglesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Bègles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Bègles et ses environs. Nos experts interviennent rapidement pour préserver la durabilité et l&apos;esthétique de votre toiture, garantissant une protection optimale contre les infiltrations et la détérioration.</p>

        <h2>Nos services de traitement et démoussage toiture a Bègles</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture représente bien plus qu&apos;un simple nettoyage. Nous réalisons un diagnostic précis de l&apos;état de votre couverture, en évaluant les zones sensibles et les risques potentiels. Notre équipe utilise des techniques professionnelles qui éliminent intégralement la mousse, les lichens et les algues sans endommager vos tuiles. Nous appliquons ensuite un traitement antimousse spécifique qui protège durablement votre toiture contre les agressions climatiques, avec une efficacité garantie pendant 5 à 7 ans. À Bègles, nos interventions respectent les normes environnementales et techniques les plus strictes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale avec plus de 15 ans d&apos;expérience 
✓ Techniciens certifiés et équipements professionnels 
✓ Devis gratuit et personnalisé sous 48h 
✓ Traitement écologique sans produits agressifs 
✓ Garantie de résultat et intervention rapide</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 25€ par m², selon la complexité du chantier, l&apos;accessibilité et l&apos;état de votre toiture. Un diagnostic précis permet d&apos;établir un devis exact sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est généralement fin été ou début automne. Les conditions climatiques sont alors optimales : température entre 10-20°C, faible humidité, pas de pluie imminente. Un traitement tous les 5-6 ans est recommandé.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un nettoyage parfait, un séchage complet et l&apos;utilisation d&apos;un produit adapté à votre type de couverture. Notre équipe applique le produit uniformément au pulvérisateur, en respectant les zones de recouvrement et les angles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Bègles ?
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
