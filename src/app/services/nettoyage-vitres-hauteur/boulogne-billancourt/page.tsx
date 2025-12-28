import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Boulogne-Billancourt | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Boulogne-Billancourt, en proposant des solutions professionnelles et sécurisées',
  keywords: 'nettoyage vitres hauteur boulogne-billancourt, lavage vitres immeuble boulogne-billancourt, nettoyage facade vitree boulogne-billancourt, cordiste vitre boulogne-billancourt, entreprise nettoyage vitres boulogne-billancourt, nettoyage verriere boulogne-billancourt',
};

export default function NettoyageVitresHauteurBoulogneBillancourtPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Boulogne-Billancourt</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Boulogne-Billancourt, en proposant des solutions professionnelles et sécurisées pour les immeubles et façades verriers les plus exigeants. Notre expertise technique garantit des surfaces cristallines, même dans les zones les plus difficiles d&apos;accès.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Boulogne-Billancourt</h2>
        <div className="space-y-4">
          <p>Nos techniciens cordistes spécialisés interviennent sur tous types de bâtiments à Boulogne-Billancourt, des immeubles résidentiels aux complexes tertiaires. Équipés de matériel high-tech et certifiés IRATA, nous réalisons des nettoyages de vitres en hauteur avec une précision chirurgicale. Notre processus comprend un diagnostic préalable, un nettoyage par techniques alpines ou nacelles, et un contrôle qualité rigoureux. Nous utilisons des produits écologiques et des techniques qui préservent l&apos;intégrité des surfaces vitrées, assurant une brillance et une transparence optimales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de 12 cordistes certifiés et formés aux dernières normes de sécurité
- Interventions 100% sécurisées avec zéro accident depuis 2015
- Devis gratuit sous 24h et intervention rapide sur Boulogne-Billancourt
- Technologies et produits respectueux de l&apos;environnement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ le m², selon l&apos;accessibilité, la hauteur et la complexité. Pour un immeuble standard à Boulogne-Billancourt, comptez environ 850€ à 1500€ pour un nettoyage complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons 2 à 3 nettoyages par an pour les immeubles de bureaux et résidentiels. Les façades exposées à la pollution ou au climat peuvent nécessiter jusqu&apos;à 4 interventions annuelles pour maintenir une apparence impeccable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nos techniciens utilisent des équipements de protection individuelle conformes aux normes AFNOR, des systèmes antichute homologués, et suivent des protocoles stricts. Chaque intervention est précédée d&apos;une évaluation des risques et d&apos;un briefing sécurité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Boulogne-Billancourt ?
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
