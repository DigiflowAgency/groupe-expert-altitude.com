import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Gradignan | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Gradignan et dans toute la métropole bordelaise. Avec plus d',
  keywords: 'nettoyage vitres hauteur gradignan, lavage vitres immeuble gradignan, nettoyage facade vitree gradignan, cordiste vitre gradignan, entreprise nettoyage vitres gradignan, nettoyage verriere gradignan',
};

export default function NettoyageVitresHauteurGradignanPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Gradignan</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Gradignan et dans toute la métropole bordelaise. Avec plus de 15 ans d&apos;expertise, nous garantissons des surfaces vitrées impeccables pour tous vos bâtiments professionnels et résidentiels.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Gradignan</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes de propreté et de sécurité. Nos techniciens cordistes hautement qualifiés utilisent des techniques professionnelles pour traiter les façades vitrées complexes, des immeubles aux vérandas. Équipés de matériel high-tech et certifiés IRATA, nous intervenons sur tous types de surfaces à Gradignan, en respectant les normes de sécurité les plus rigoureuses. Notre processus inclut un diagnostic préalable, un nettoyage technique sans traces et un contrôle qualité systématique, assurant des résultats impeccables à chaque intervention.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de cordistes certifiés avec plus de 15 ans d&apos;expérience
- Matériel professionnel dernier cri garantissant une propreté optimale
- Interventions 100% sécurisées conformes aux normes AFNOR
- Devis personnalisé et transparent sans frais cachés</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par m², selon la hauteur, l&apos;accessibilité et la complexité de la surface. Un devis gratuit et détaillé vous sera systématiquement proposé après diagnostic sur site.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;environnement (proximité des routes, zones industrielles) et l&apos;exposition aux intempéries. Les immeubles en centre-ville de Gradignan nécessitent généralement un nettoyage trimestriel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur impose des règles strictes : utilisation d&apos;équipements anti-chute, formation CACES, protocoles de sécurité, et matériel homologué. Nos techniciens sont formés annuellement aux dernières normes de sécurité professionnelle.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Gradignan ?
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
