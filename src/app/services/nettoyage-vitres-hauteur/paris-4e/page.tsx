import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Paris 4e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Paris 4e, en proposant des solutions professionnelles et sécurisées pour les im',
  keywords: 'nettoyage vitres hauteur paris 4e, lavage vitres immeuble paris 4e, nettoyage facade vitree paris 4e, cordiste vitre paris 4e, entreprise nettoyage vitres paris 4e, nettoyage verriere paris 4e',
};

export default function NettoyageVitresHauteurParis4ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Paris 4e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Paris 4e, en proposant des solutions professionnelles et sécurisées pour les immeubles et bâtiments les plus exigeants. Nos experts cordistes transforment chaque façade vitrée en surface éclatante, avec une précision chirurgicale.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Paris 4e</h2>
        <div className="space-y-4">
          <p>Spécialistes du nettoyage de vitres en hauteur, nous intervenons sur tous types de bâtiments dans le quartier historique du Marais à Paris 4e. Notre équipe de cordistes hautement qualifiés utilise des techniques alpines brevetées pour nettoyer les surfaces vitrées complexes, des verrières anciennes aux immeubles modernes. Chaque intervention est précédée d&apos;un diagnostic technique précis permettant d&apos;adapter notre méthodologie. Nos techniciens sont équipés de matériel haute gamme - perches télescopiques, systèmes de descente en rappel, produits écologiques - garantissant un résultat impeccable sans risque pour l&apos;environnement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Certification professionnelle avec plus de 15 ans d&apos;expérience
- Équipe de 12 cordistes spécialisés
- Techniques 100% sécurisées conformes aux normes européennes
- Devis personnalisé sous 24h
- Interventions éco-responsables
- Assurance professionnelle complète</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ le m², selon la complexité d&apos;accès, la hauteur et le type de surface. Pour un immeuble standard à Paris 4e, comptez environ 750€ à 1500€ pour un nettoyage complet des façades vitrées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition aux pollutions urbaines. Les immeubles près des grands axes parisiens nécessitent un nettoyage plus fréquent, environ tous les 3-4 mois pour maintenir un aspect impeccable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur impose des règles strictes : utilisation de harnais homologués, double point d&apos;ancrage, formation CACES obligatoire, respect du protocole de sécurité et des équipements de protection individuelle. Nos cordistes sont formés annuellement aux dernières normes de sécurité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Paris 4e ?
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
