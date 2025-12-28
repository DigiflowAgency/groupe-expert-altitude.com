import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a L\'Union | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur sur L&apos;Union et ses environs. Nous intervenons avec des techniques',
  keywords: 'nettoyage vitres hauteur l'union, lavage vitres immeuble l'union, nettoyage facade vitree l'union, cordiste vitre l'union, entreprise nettoyage vitres l'union, nettoyage verriere l'union',
};

export default function NettoyageVitresHauteurLUnionPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a L'Union</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur sur L&apos;Union et ses environs. Nous intervenons avec des techniques professionnelles de cordistes pour des façades vitrées impeccables et une qualité de service irréprochable.</p>

        <h2>Nos services de nettoyage vitres en hauteur a L'Union</h2>
        <div className="space-y-4">
          <p>Nos experts en nettoyage de vitres en hauteur maîtrisent parfaitement les techniques complexes d&apos;accès difficile. Nous utilisons des équipements homologués et des méthodes innovantes pour traiter chaque surface vitrée, des immeubles résidentiels aux bâtiments tertiaires de L&apos;Union. Notre processus comprend une évaluation préalable des risques, un nettoyage haute précision et un contrôle qualité systématique. Nos cordistes certifiés garantissent une intervention rapide et sécurisée, avec des résultats qui dépassent les attentes des clients.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Plus de 15 ans d&apos;expérience en nettoyage de vitres complexes
✓ Équipes certifiées et assurées pour travaux en hauteur
✓ Matériel technique dernier cri
✓ Interventions 100% sécurisées
✓ Devis personnalisé sous 24h
✓ Respect des normes environnementales</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par m², selon la difficulté d&apos;accès, la hauteur et la surface totale. Pour un immeuble standard à L&apos;Union, comptez un budget moyen de 500€ à 2000€ pour un nettoyage complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition et l&apos;environnement. Les bâtiments en centre-ville ou proches d&apos;axes routiers nécessitent un nettoyage plus fréquent, idéalement tous les 3-4 mois.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur impose des normes strictes : utilisation de harnais anti-chute, formation CACES, équipements homologués, évaluation des risques préalable et respect du protocole de sécurité. Seuls des professionnels certifiés peuvent réaliser ces interventions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a L'Union ?
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
