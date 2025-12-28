import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Plaisance-du-Touch | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Plaisance-du-Touch, offre des solutions professionnelles pour d',
  keywords: 'nettoyage vitres hauteur plaisance-du-touch, lavage vitres immeuble plaisance-du-touch, nettoyage facade vitree plaisance-du-touch, cordiste vitre plaisance-du-touch, entreprise nettoyage vitres plaisance-du-touch, nettoyage verriere plaisance-du-touch',
};

export default function NettoyageVitresHauteurPlaisanceDuTouchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Plaisance-du-Touch</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Plaisance-du-Touch, offre des solutions professionnelles pour des surfaces vitrées impeccables. Notre expertise technique garantit un résultat brillant et sécurisé pour tous vos bâtiments.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Plaisance-du-Touch</h2>
        <div className="space-y-4">
          <p>Nous intervenons sur tous types de surfaces vitrées, des immeubles résidentiels aux bâtiments tertiaires de Plaisance-du-Touch. Nos techniciens cordistes, hautement qualifiés, utilisent des techniques d&apos;escalade professionnelles pour nettoyer méticuleusement chaque surface, même les plus difficiles d&apos;accès. Notre process comprend un diagnostic préalable, un nettoyage à l&apos;eau purifiée et un traitement anti-trace, assurant une transparence cristalline et durable. Nous utilisons uniquement du matériel aux normes de sécurité les plus strictes, permettant d&apos;intervenir sur des hauteurs allant jusqu&apos;à 100 mètres.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Équipe de 12 cordistes certifiés
✓ Intervention rapide sur Plaisance-du-Touch et ses environs
✓ Techniques respectueuses de l&apos;environnement
✓ Devis gratuit et transparent
✓ Assurance professionnelle complète
✓ Plus de 15 ans d&apos;expérience dans le nettoyage en hauteur</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ le m², selon l&apos;accessibilité, la hauteur et la surface totale. Un immeuble moyen de 300 m² coûtera environ 3500€ à 5000€ pour un nettoyage complet et professionnel.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;environnement. Les zones urbaines ou industrielles nécessitent un nettoyage plus fréquent à cause de la pollution, tandis que les zones résidentielles peuvent se contenter de 2 interventions annuelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La sécurité est notre priorité absolue. Nos techniciens utilisent un équipement de protection individuelle complet, des systèmes antichute homologués, et suivent des protocoles stricts de prévention des risques. Chaque intervention est préparée avec une évaluation précise des contraintes techniques et environnementales.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Plaisance-du-Touch ?
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
