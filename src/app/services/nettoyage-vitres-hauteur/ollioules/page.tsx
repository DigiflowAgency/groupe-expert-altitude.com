import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Ollioules | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Ollioules, en proposant des solutions professionnelles adaptées aux immeuble',
  keywords: 'nettoyage vitres hauteur ollioules, lavage vitres immeuble ollioules, nettoyage facade vitree ollioules, cordiste vitre ollioules, entreprise nettoyage vitres ollioules, nettoyage verriere ollioules',
};

export default function NettoyageVitresHauteurOllioulesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Ollioules</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Ollioules, en proposant des solutions professionnelles adaptées aux immeubles et bâtiments complexes. Nos experts cordistes transforment chaque intervention en garantie de propreté et de sécurité maximale.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Ollioules</h2>
        <div className="space-y-4">
          <p>Nos services de nettoyage de vitres en hauteur représentent une solution complète pour tous les professionnels et particuliers d&apos;Ollioules et ses environs. Notre équipe hautement qualifiée utilise des techniques de cordage industriel permettant d&apos;atteindre les surfaces vitrées les plus difficiles d&apos;accès, depuis les façades de 5 mètres jusqu&apos;aux immeubles de plus de 20 mètres de hauteur. Chaque intervention est précédée d&apos;une évaluation technique précise, garantissant un nettoyage impeccable et une sécurité absolue. Nos techniciens sont équipés de matériel professionnel dernière génération, utilisant des produits écologiques et sans traces, assurant une transparence cristalline et un résultat irréprochable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos cordistes possèdent plus de 15 ans d&apos;expérience collective. Nous sommes certifiés QUALIBAT et disposons de toutes les habilitations nécessaires pour les travaux en hauteur. Notre taux de satisfaction client dépasse 98% et nous intervenons sur tout le département du Var avec réactivité et professionnalisme.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ au m², selon l&apos;accessibilité et la hauteur. Pour un immeuble standard de 200m², comptez environ 1200€ à 2500€. Nous proposons systématiquement un devis gratuit et détaillé avant toute intervention.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition et l&apos;environnement. Les immeubles en centre-ville ou près de zones industrielles nécessiteront des nettoyages plus fréquents, tandis que les bâtiments en zones résidentielles peuvent se contenter de 2 interventions annuelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur sécurisé implique l&apos;utilisation de techniques de cordage spécialisées, des harnais homologués, des points d&apos;ancrage certifiés et un équipement de protection individuelle complet. Nos techniciens suivent annuellement des formations de sécurité et disposent des certifications CACES et travaux en hauteur.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Ollioules ?
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
