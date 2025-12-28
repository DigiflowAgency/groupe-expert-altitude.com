import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Rezé | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Rezé, en proposant des solutions professionnelles et sécurisées pour tous vos b',
  keywords: 'nettoyage vitres hauteur rezé, lavage vitres immeuble rezé, nettoyage facade vitree rezé, cordiste vitre rezé, entreprise nettoyage vitres rezé, nettoyage verriere rezé',
};

export default function NettoyageVitresHauteurRezePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Rezé</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Rezé, en proposant des solutions professionnelles et sécurisées pour tous vos bâtiments. Nos experts cordistes transforment l&apos;entretien de vos facades vitrées en une expérience sans précédent.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Rezé</h2>
        <div className="space-y-4">
          <p>Nos services de nettoyage de vitres en hauteur représentent la quintessence de la précision technique et de la sécurité professionnelle. Équipés de techniques de cordage industriel, nous intervenons sur tous types de structures à Rezé, des immeubles résidentiels aux bâtiments tertiaires. Nos techniciens hautement qualifiés utilisent un matériel high-tech garantissant un nettoyage impeccable sans risque pour les structures. Chaque intervention est personnalisée, avec une évaluation préalable des surfaces et des contraintes techniques, assurant un résultat optimal et une transparence cristalline.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : techniciens certifiés, matériel aux normes de sécurité, intervention rapide sur Rezé et sa région. Nous garantissons un nettoyage sans traces, un respect total des délais et une transparence tarifaire. Notre engagement qualité fait la différence.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par m², selon la hauteur, l&apos;accessibilité et la complexité de la surface. Un devis personnalisé gratuit vous permettra d&apos;obtenir un tarif précis adapté à votre bâtiment.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;environnement. Les zones urbaines ou industrielles nécessitent un nettoyage plus fréquent, tandis que les zones résidentielles peuvent se contenter de deux interventions annuelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Notre méthode combine des équipements de protection individuelle, des techniques de cordage normées et une formation continue en sécurité. Chaque intervention respecte strictement les protocoles INRS, avec des harnais homologués, des points d&apos;ancrage vérifiés et une évaluation préalable des risques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Rezé ?
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
