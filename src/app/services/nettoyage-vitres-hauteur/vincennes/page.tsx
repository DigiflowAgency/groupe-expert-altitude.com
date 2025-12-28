import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Vincennes | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour le nettoyage de vitres en hauteur à Vincennes et ses environs. Spécialistes des intervent',
  keywords: 'nettoyage vitres hauteur vincennes, lavage vitres immeuble vincennes, nettoyage facade vitree vincennes, cordiste vitre vincennes, entreprise nettoyage vitres vincennes, nettoyage verriere vincennes',
};

export default function NettoyageVitresHauteurVincennesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Vincennes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour le nettoyage de vitres en hauteur à Vincennes et ses environs. Spécialistes des interventions complexes, nous garantissons des surfaces vitrées impeccables et une qualité de service irréprochable pour tous vos bâtiments.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Vincennes</h2>
        <div className="space-y-4">
          <p>Notre expertise en nettoyage de vitres en hauteur répond aux exigences les plus strictes des immeubles, tours de bureaux et bâtiments tertiaires de Vincennes. Nos techniciens cordistes, formés aux techniques alpines, interviennent sur tous types de façades vitrées, des structures modernes aux bâtiments historiques. Équipés de matériel professionnel et de systèmes de sécurité dernier cri, nous assurons un nettoyage complet et précis, sans trace ni rayure. Notre process inclut un diagnostic préalable, un nettoyage manuel ou avec des perches télescopiques haute performance, et un contrôle qualité systématique pour des résultats parfaits.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une équipe certifiée avec plus de 15 ans d&apos;expérience, 2) Des techniques d&apos;intervention conformes aux normes de sécurité les plus exigeantes, 3) Un matériel professionnel haut de gamme garantissant des résultats impeccables, 4) Une approche environnementale avec des produits éco-responsables.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ le m², selon la hauteur, l&apos;accessibilité et la complexité de la surface. Pour un devis précis, nous réalisons systématiquement un diagnostic gratuit sur site à Vincennes.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition du bâtiment. Les immeubles en centre-ville ou proche des axes routiers nécessitent un nettoyage plus fréquent, tandis que les bâtiments moins exposés peuvent être nettoyés semestriellement.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La sécurité est notre priorité absolue. Nos cordistes utilisent un équipement de protection individuelle complet, des systèmes d&apos;ancrage certifiés, et suivent des formations annuelles aux techniques de travail en hauteur conformément à la réglementation française.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Vincennes ?
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
