import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Talence | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Talence, offre des solutions professionnelles pour des surfaces',
  keywords: 'nettoyage vitres hauteur talence, lavage vitres immeuble talence, nettoyage facade vitree talence, cordiste vitre talence, entreprise nettoyage vitres talence, nettoyage verriere talence',
};

export default function NettoyageVitresHauteurTalencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Talence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Talence, offre des solutions professionnelles pour des surfaces vitrées impeccables. Nous intervenons sur tous types de bâtiments, des immeubles résidentiels aux complexes tertiaires de l&apos;agglomération bordelaise.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Talence</h2>
        <div className="space-y-4">
          <p>Notre expertise en nettoyage de vitres en hauteur repose sur des techniques cordistes hautement sécurisées. Nos techniciens certifiés utilisent un équipement professionnel dernier cri pour garantir un résultat optimal, sans traces ni salissures. Nous traitons chaque surface vitrée avec une précision chirurgicale, qu&apos;il s&apos;agisse de façades monumentales, de vérandas ou de immeubles complexes à Talence. Notre méthode unique combine des produits écologiques et des techniques innovantes, permettant un nettoyage en profondeur respectueux de l&apos;environnement. Chaque intervention est personnalisée, avec un diagnostic technique préalable pour adapter notre approche à vos besoins spécifiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Plus de 15 ans d&apos;expérience en nettoyage de vitres en hauteur
- Techniciens cordistes diplômés et assurés
- Interventions 100% sécurisées selon les normes AFNOR
- Devis gratuit et transparent sous 24h
- Respect total des délais et engagements</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ le m², selon la complexité de l&apos;intervention, la hauteur et l&apos;accessibilité. Pour un immeuble standard à Talence de 200m², comptez un budget entre 3000€ et 6000€ pour un nettoyage complet et professionnel.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition et l&apos;environnement. Les immeubles en centre-ville ou proche d&apos;axes à fort trafic nécessiteront des nettoyages plus fréquents, idéalement tous les trimestres pour maintenir une brillance optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur impose des règles strictes : utilisation de harnais antichute, formation CACES, assurances spécifiques, et respect du protocole de sécurité. Nos cordistes sont équipés de systèmes d&apos;ancrage, de cordes homologuées et suivent des formations annuelles de prévention des risques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Talence ?
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
