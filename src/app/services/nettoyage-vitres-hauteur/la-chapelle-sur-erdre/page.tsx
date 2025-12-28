import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a La Chapelle-sur-Erdre | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste en nettoyage de vitres en hauteur, apporte une expertise technique et sécurisée aux professionnels et particu',
  keywords: 'nettoyage vitres hauteur la chapelle-sur-erdre, lavage vitres immeuble la chapelle-sur-erdre, nettoyage facade vitree la chapelle-sur-erdre, cordiste vitre la chapelle-sur-erdre, entreprise nettoyage vitres la chapelle-sur-erdre, nettoyage verriere la chapelle-sur-erdre',
};

export default function NettoyageVitresHauteurLaChapelleSurErdrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a La Chapelle-sur-Erdre</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste en nettoyage de vitres en hauteur, apporte une expertise technique et sécurisée aux professionnels et particuliers de La Chapelle-sur-Erdre. Nous intervenons sur tous types de bâtiments, des immeubles résidentiels aux grands ensembles tertiaires, avec une précision et un professionnalisme garantis.</p>

        <h2>Nos services de nettoyage vitres en hauteur a La Chapelle-sur-Erdre</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes de propreté et de sécurité. Nos techniciens cordistes sont formés aux techniques d&apos;accès difficile, utilisant un équipement de pointe pour traiter les surfaces vitrées complexes. Nous réalisons un diagnostic précis avant chaque intervention, évaluant la structure du bâtiment et les contraintes techniques spécifiques à La Chapelle-sur-Erdre. Notre méthode combine des techniques de nettoyage écologiques et des protocoles de sécurité avancés, garantissant des résultats impeccables sans risque pour nos équipes ou votre patrimoine.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Équipe de 12 techniciens cordistes certifiés
✓ Matériel professionnel dernière génération
✓ Interventions 100% sécurisées
✓ Devis personnalisé sous 48h
✓ Respect des normes environnementales
✓ Assurance responsabilité civile professionnelle</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par m², selon la hauteur, l&apos;accessibilité et la complexité de la surface. Pour un immeuble standard à La Chapelle-sur-Erdre, comptez environ 500-1200€ pour un nettoyage complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition aux intempéries et la pollution. Les immeubles en centre-ville ou zones industrielles nécessitent un nettoyage plus fréquent, idéalement tous les trimestres.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur impose des règles strictes : utilisation de harnais homologués, formation CACES, vérification quotidienne du matériel, protocoles anti-chute, et respect des normes de sécurité EN 361. Nos techniciens suivent des formations annuelles pour garantir une intervention sans risque.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a La Chapelle-sur-Erdre ?
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
