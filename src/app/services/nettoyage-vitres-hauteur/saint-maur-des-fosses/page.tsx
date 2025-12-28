import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Saint-Maur-des-Fossés | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Saint-Maur-des-Fossés, en proposant des solutions professionnelles et sécuri',
  keywords: 'nettoyage vitres hauteur saint-maur-des-fossés, lavage vitres immeuble saint-maur-des-fossés, nettoyage facade vitree saint-maur-des-fossés, cordiste vitre saint-maur-des-fossés, entreprise nettoyage vitres saint-maur-des-fossés, nettoyage verriere saint-maur-des-fossés',
};

export default function NettoyageVitresHauteurSaintMaurDesFossesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Saint-Maur-des-Fossés</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Saint-Maur-des-Fossés, en proposant des solutions professionnelles et sécurisées pour tous vos bâtiments. Nos experts cordistes transforment vos façades vitrées en véritables surfaces cristallines, sans aucun compromis sur la qualité et la sécurité.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Saint-Maur-des-Fossés</h2>
        <div className="space-y-4">
          <p>Spécialistes du nettoyage de vitres en hauteur, nous intervenons sur tous types de bâtiments à Saint-Maur-des-Fossés : immeubles, bureaux, vérandas et facades commerciales. Notre équipe utilise des techniques de cordage professionnel permettant d&apos;atteindre les surfaces les plus difficiles d&apos;accès, avec une précision chirurgicale. Nos techniciens sont équipés de matériel haute gamme et de produits écologiques, garantissant un résultat impeccable et respectueux de l&apos;environnement. Chaque intervention fait l&apos;objet d&apos;un diagnostic préalable pour adapter notre approche et optimiser l&apos;efficacité du nettoyage.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Équipe certifiée avec plus de 15 ans d&apos;expérience en nettoyage de vitres en hauteur
✓ Techniques de cordage innovantes et conformes aux normes de sécurité
✓ Interventions rapides et sur-mesure à Saint-Maur-des-Fossés
✓ Devis gratuit et transparents, sans frais cachés</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par m², selon la hauteur, l&apos;accessibilité et la surface totale. Un immeuble moyen de 300m² représente un investissement entre 4 500€ et 13 500€. Nous proposons des forfaits dégressifs et des plans d&apos;entretien personnalisés pour optimiser votre budget.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;environnement. Les immeubles en centre-ville ou exposés à la pollution nécessitent un nettoyage trimestriel, tandis que les bâtiments moins exposés peuvent se contenter d&apos;un lavage semestriel. Un entretien régulier préserve la qualité des vitres et évite les dégradations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur impose des règles strictes : utilisation de harnais homologués, formation CACES, respect des normes de sécurité NF EN 362. Nos cordistes suivent annuellement des formations, utilisent un équipement de protection individuelle complet et réalisent une évaluation des risques avant chaque intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Saint-Maur-des-Fossés ?
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
