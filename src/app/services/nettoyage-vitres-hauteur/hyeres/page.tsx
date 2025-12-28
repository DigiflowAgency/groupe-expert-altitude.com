import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Hyères | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste du nettoyage de vitres en hauteur à Hyères, offre des solutions professionnelles pour des façades impeccables',
  keywords: 'nettoyage vitres hauteur hyères, lavage vitres immeuble hyères, nettoyage facade vitree hyères, cordiste vitre hyères, entreprise nettoyage vitres hyères, nettoyage verriere hyères',
};

export default function NettoyageVitresHauteurHyeresPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Hyères</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste du nettoyage de vitres en hauteur à Hyères, offre des solutions professionnelles pour des façades impeccables. Nos experts en nettoyage de vitres transforment l&apos;apparence de vos bâtiments avec une précision et une sécurité optimales.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Hyères</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes des professionnels et particuliers de la région hyéroise. Nos techniciens cordistes, formés aux techniques les plus avancées, interviennent sur tous types de structures : immeubles, vérandas, facades commerciales et bâtiments industriels. Équipés de matériel haute technologie et de systèmes de sécurité dernier cri, nous garantissons un nettoyage parfait sans aucun risque. Notre approche combine expertise technique et respect des normes environnementales, utilisant des produits éco-responsables qui préservent l&apos;éclat et la transparence de vos surfaces vitrées.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Équipe de cordistes certifiés avec plus de 15 ans d&apos;expérience à Hyères
✓ Techniques d&apos;intervention innovantes et sécurisées
✓ Devis gratuit et personnalisé sous 24h
✓ Respect total des normes de sécurité professionnelles
✓ Matériel de pointe et produits écologiques</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par m², selon la hauteur, l&apos;accessibilité et la complexité de la surface. Pour un immeuble standard à Hyères, comptez environ 350-800€ pour un nettoyage complet. Un devis précis sera établi après expertise sur site.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;environnement. Les zones exposées à la pollution, aux embruns marins à Hyères ou aux zones industrielles nécessitent un nettoyage plus fréquent. Un entretien semestriel maintient l&apos;apparence et prolonge la durée de vie de vos surfaces vitrées.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur exige des compétences spécifiques : nos cordistes utilisent des équipements de protection individuelle, des systèmes antichute homologués, et suivent des protocoles stricts de sécurité. Chaque intervention est précédée d&apos;une évaluation des risques et mise en place de périmètres de sécurité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Hyères ?
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
