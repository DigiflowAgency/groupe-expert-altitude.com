import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Paris 7e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur, offrant des solutions professionnelles sur mesure pour les im',
  keywords: 'nettoyage vitres hauteur paris 7e, lavage vitres immeuble paris 7e, nettoyage facade vitree paris 7e, cordiste vitre paris 7e, entreprise nettoyage vitres paris 7e, nettoyage verriere paris 7e',
};

export default function NettoyageVitresHauteurParis7ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Paris 7e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur, offrant des solutions professionnelles sur mesure pour les immeubles et bâtiments du prestigieux 7e arrondissement parisien. Nos experts cordistes transforment l&apos;entretien de vos surfaces vitrées en une opération précise et sécurisée.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Paris 7e</h2>
        <div className="space-y-4">
          <p>Nos services de nettoyage de vitres en hauteur représentent la quintessence du professionnalisme technique et de la sécurité absolue. Nos techniciens cordistes hautement qualifiés interviennent sur tous types de surfaces vitrées, des façades monumentales aux vérandas complexes, en utilisant des techniques d&apos;alpinisme industriel brevetées. Chaque intervention au cœur de Paris 7e est planifiée méticuleusement, avec un équipement ultramoderne garantissant un résultat impeccable sans aucun risque. Nous maîtrisons parfaitement les techniques de nettoyage des surfaces verticales, assurant une transparence cristalline et une brillance durable pour vos vitrages.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Équipe certifiée avec plus de 15 ans d&apos;expérience en nettoyage de vitres
✓ Techniques d&apos;alpinisme industriel brevetées
✓ 100% de conformité aux normes de sécurité professionnelles
✓ Intervention rapide et précise sur le 7e arrondissement
✓ Devis personnalisé et transparent sous 24h</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ le m², selon la complexité de l&apos;intervention, la hauteur et l&apos;accessibilité. Pour un immeuble standard du 7e arrondissement, prévoyez un budget entre 500€ et 2500€ pour un nettoyage complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition aux pollutions urbaines. Les immeubles proche des grands axes parisiens nécessitent un nettoyage plus fréquent, idéalement tous les trimestres pour maintenir une apparence impeccable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage de vitres en hauteur impose des protocoles stricts : utilisation de harnais de sécurité homologués, formation CACES obligatoire, double point d&apos;ancrage, équipements de protection individuelle, et respect strict des normes de sécurité professionnelles en vigueur.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Paris 7e ?
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
