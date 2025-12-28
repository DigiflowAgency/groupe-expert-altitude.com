import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Saint-Denis | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste du nettoyage de vitres en hauteur à Saint-Denis, offre une expertise technique inégalée pour des surfaces vit',
  keywords: 'nettoyage vitres hauteur saint-denis, lavage vitres immeuble saint-denis, nettoyage facade vitree saint-denis, cordiste vitre saint-denis, entreprise nettoyage vitres saint-denis, nettoyage verriere saint-denis',
};

export default function NettoyageVitresHauteurSaintDenisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Saint-Denis</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste du nettoyage de vitres en hauteur à Saint-Denis, offre une expertise technique inégalée pour des surfaces vitrées impeccables. Nos techniciens cordistes transforment chaque façade de la région parisienne en une surface cristalline, garantissant propreté et sécurité.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Saint-Denis</h2>
        <div className="space-y-4">
          <p>Nos interventions de nettoyage de vitres en hauteur représentent bien plus qu&apos;un simple service : c&apos;est une solution technique complète adaptée aux immeubles et bâtiments de Saint-Denis. Nos cordistes professionnels utilisent des équipements de pointe permettant d&apos;atteindre les surfaces les plus difficiles d&apos;accès, depuis les vérrières complexes jusqu&apos;aux façades vitrées de plusieurs étages. Chaque intervention est précédée d&apos;un diagnostic précis pour déterminer les techniques et matériels les plus appropriés, assurant un résultat optimal et une sécurité maximale. Nous traitons aussi bien les immeubles résidentiels que les bâtiments tertiaires, avec une attention particulière à l&apos;environnement et aux normes de sécurité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée possède plus de 15 ans d&apos;expérience, nos techniciens sont tous habilités travaux en hauteur, nous disposons d&apos;une assurance professionnelle complète et nous intervenons dans un rayon de 50 km autour de Saint-Denis. Nos tarifs transparents et nos devis gratuits font de nous le partenaire idéal pour vos projets de nettoyage de vitres.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ au m², selon l&apos;accessibilité et la hauteur. Pour un immeuble standard à Saint-Denis, comptez entre 500€ et 2000€ pour un nettoyage complet. Un devis personnalisé est toujours recommandé pour une estimation précise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition et l&apos;environnement. Les immeubles en centre-ville ou proche des zones industrielles nécessiteront des nettoyages plus fréquents, idéalement tous les trimestres pour maintenir une apparence impeccable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur requiert des équipements spécifiques : harnais de sécurité, points d&apos;ancrage certifiés, cordes homologuées et formation CACES. Nos techniciens suivent annuellement des formations de sécurité et utilisent un équipement aux normes européennes, garantissant une intervention sans risque.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Saint-Denis ?
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
