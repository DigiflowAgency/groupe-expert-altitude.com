import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Paris 1er | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Paris 1er, en proposant des solutions professionnelles et sécurisées pour tous ',
  keywords: 'nettoyage vitres hauteur paris 1er, lavage vitres immeuble paris 1er, nettoyage facade vitree paris 1er, cordiste vitre paris 1er, entreprise nettoyage vitres paris 1er, nettoyage verriere paris 1er',
};

export default function NettoyageVitresHauteurParis1erPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Paris 1er</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Paris 1er, en proposant des solutions professionnelles et sécurisées pour tous vos bâtiments. Nos experts cordistes transforment l&apos;entretien de vos façades vitrées en une prestation impeccable et sans risque.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Paris 1er</h2>
        <div className="space-y-4">
          <p>Spécialistes du nettoyage de vitres en hauteur, nous intervenons sur tous types de surfaces à Paris 1er, des immeubles historiques aux tours modernes. Notre équipe utilise des techniques de cordage professionnel permettant d&apos;atteindre les zones les plus difficiles d&apos;accès, garantissant un nettoyage complet et précis. Nos techniciens sont équipés de matériel haute performance, respectant les normes de sécurité les plus strictes. Chaque intervention est personnalisée, avec un diagnostic préalable pour optimiser le résultat et préserver l&apos;intégrité de vos surfaces vitrées.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Équipe certifiée avec plus de 15 ans d&apos;expérience
✓ Techniques de cordage innovantes
✓ Matériel professionnel dernier cri
✓ Interventions 100% sécurisées
✓ Devis gratuit sous 24h
✓ Respect total des normes environnementales</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par m², selon la complexité d&apos;accès, la hauteur et la surface totale. Pour un immeuble parisien standard de 200m², comptez un budget entre 3000€ et 6000€, incluant plusieurs passages annuels.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, avec un nettoyage minimum semestriel pour les immeubles parisiens. Les zones très exposées (façades sud, zones polluées) nécessitent des passages plus réguliers, idéalement tous les 3-4 mois.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage de vitres en hauteur impose des règles strictes : utilisation de harnais normés, formation CACES, assurances spécifiques, et équipements de protection individuelle. Nos cordistes sont formés aux techniques de travail en suspension, garantissant une intervention 100% sécurisée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Paris 1er ?
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
