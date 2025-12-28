import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Caluire-et-Cuire | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Caluire-et-Cuire, en proposant des solutions professionnelles et sécurisées pou',
  keywords: 'nettoyage vitres hauteur caluire-et-cuire, lavage vitres immeuble caluire-et-cuire, nettoyage facade vitree caluire-et-cuire, cordiste vitre caluire-et-cuire, entreprise nettoyage vitres caluire-et-cuire, nettoyage verriere caluire-et-cuire',
};

export default function NettoyageVitresHauteurCaluireEtCuirePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Caluire-et-Cuire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Caluire-et-Cuire, en proposant des solutions professionnelles et sécurisées pour tous vos bâtiments. Nos experts cordistes transforment chaque façade vitrée en surface éclatante, sans compromettre la sécurité.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Caluire-et-Cuire</h2>
        <div className="space-y-4">
          <p>Spécialistes du nettoyage de vitres en hauteur, nous intervenons sur tous types de bâtiments à Caluire-et-Cuire, des immeubles résidentiels aux complexes tertiaires. Notre technique unique combine des méthodes de cordistes professionnels et des équipements haute technologie, garantissant un nettoyage impeccable sans échafaudage. Nos techniciens sont formés aux techniques d&apos;accès difficile, utilisant des systèmes de protection individuels conformes aux normes de sécurité les plus strictes. Chaque intervention est précédée d&apos;un diagnostic précis pour adapter notre approche, assurant une prestation sur-mesure et un résultat optimal.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de 12 cordistes certifiés avec plus de 15 ans d&apos;expérience
- Techniques d&apos;intervention innovantes sans risque pour vos bâtiments
- Devis gratuit et personnalisé sous 24h
- Respect total des normes de sécurité et environnementales</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par m², selon la complexité d&apos;accès, la hauteur et la surface totale. Un immeuble moyen de 300m² représente un investissement entre 4 500€ et 13 500€, avec un tarif dégressif pour les surfaces importantes.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition et l&apos;environnement. Les immeubles en centre-ville ou zones industrielles nécessitent un nettoyage plus fréquent, tandis que les bâtiments résidentiels peuvent se contenter de deux interventions annuelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur impose des normes strictes : utilisation de harnais homologués, formation CACES, double point d&apos;ancrage, équipements de protection individuels certifiés. Nos cordistes suivent des formations annuelles et respectent scrupuleusement le protocole de sécurité pour zéro risque.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Caluire-et-Cuire ?
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
