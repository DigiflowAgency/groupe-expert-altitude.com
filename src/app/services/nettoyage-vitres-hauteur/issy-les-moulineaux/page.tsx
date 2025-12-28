import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Issy-les-Moulineaux | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Issy-les-Moulineaux, en proposant des solutions professionnelles et sécurisé',
  keywords: 'nettoyage vitres hauteur issy-les-moulineaux, lavage vitres immeuble issy-les-moulineaux, nettoyage facade vitree issy-les-moulineaux, cordiste vitre issy-les-moulineaux, entreprise nettoyage vitres issy-les-moulineaux, nettoyage verriere issy-les-moulineaux',
};

export default function NettoyageVitresHauteurIssyLesMoulineauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Issy-les-Moulineaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Issy-les-Moulineaux, en proposant des solutions professionnelles et sécurisées pour tous vos bâtiments. Nos techniciens cordistes transforment l&apos;entretien de vos facades vitrées en une expérience sans précédent.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Issy-les-Moulineaux</h2>
        <div className="space-y-4">
          <p>Spécialisés dans le nettoyage de vitres complexes, nous intervenons sur tous types de structures à Issy-les-Moulineaux : immeubles de bureaux, résidences modernes, vérandas et façades monumentales. Notre équipe utilise des techniques de cordage professionnel garantissant une propreté impeccable et une sécurité maximale. Chaque intervention est précédée d&apos;un diagnostic technique personnalisé, nous permettant d&apos;adapter nos méthodes aux spécificités de votre bâtiment. Nos techniciens hautement qualifiés utilisent du matériel écologique et des produits de nettoyage respectueux de l&apos;environnement, offrant des résultats brillants et durables.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Équipe certifiée avec plus de 15 ans d&apos;expertise en nettoyage de vitres en hauteur
✓ Techniques de cordage innovantes garantissant 100% de sécurité
✓ Interventions rapides sur Issy-les-Moulineaux et ses environs
✓ Devis gratuit et transparent sans engagement
✓ Respect total des normes de sécurité et environnementales</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ le m² selon la complexité, la hauteur et l&apos;accessibilité. Pour un immeuble moyen à Issy-les-Moulineaux, comptez entre 500€ et 2500€ pour un nettoyage complet. Un devis précis sera établi après diagnostic sur site.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition et l&apos;environnement. Les immeubles en centre-ville ou près de zones industrielles nécessiteront un nettoyage plus fréquent, tandis que les bâtiments moins exposés pourront se contenter de 2 interventions annuelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage de vitres en hauteur implique des techniques spécifiques : utilisation de harnais de sécurité, formation aux travaux en suspension, équipements homologués, et respect strict du protocole PPSPS (Plan Particulier de Sécurité et de Protection de la Santé). Nos cordistes sont formés annuellement aux dernières normes de sécurité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Issy-les-Moulineaux ?
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
