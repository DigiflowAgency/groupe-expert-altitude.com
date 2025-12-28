import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Couëron | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialiste en nettoyage de vitres en hauteur à Couëron, vous offre des solutions professionnelles pour des fa',
  keywords: 'nettoyage vitres hauteur couëron, lavage vitres immeuble couëron, nettoyage facade vitree couëron, cordiste vitre couëron, entreprise nettoyage vitres couëron, nettoyage verriere couëron',
};

export default function NettoyageVitresHauteurCoueronPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Couëron</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialiste en nettoyage de vitres en hauteur à Couëron, vous offre des solutions professionnelles pour des façades impeccables. Nous intervenons sur tous types de bâtiments avec une expertise technique et une sécurité maximale.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Couëron</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes des professionnels et particuliers de Couëron et ses environs. Nos techniciens cordistes utilisent des techniques d&apos;alpinisme industriel pour atteindre les zones les plus difficiles d&apos;accès, garantissant un nettoyage précis et sans compromis. Nous utilisons uniquement du matériel homologué et des produits écologiques, assurant une brillance cristalline tout en respectant l&apos;environnement. Notre processus comprend un diagnostic préalable, un nettoyage manuel ou avec des équipements haute technologie, et une finition sans traces.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une équipe certifiée avec plus de 15 ans d&apos;expérience, 2) Un engagement sécurité total avec zéro accident depuis notre création, 3) Une intervention rapide sur Couëron et la Loire-Atlantique, 4) Des tarifs transparents et compétitifs adaptés à chaque projet.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par m², selon la hauteur, l&apos;accessibilité et la surface. Pour un devis précis, nous proposons un diagnostic gratuit sur site à Couëron.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition du bâtiment. Les immeubles en centre-ville ou proche zones industrielles nécessitent un nettoyage plus fréquent pour maintenir une apparence professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Notre méthode garantit un nettoyage en hauteur 100% sécurisé grâce à des harnais homologués, des points d&apos;ancrage certifiés et une formation continue de nos techniciens aux normes de sécurité les plus récentes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Couëron ?
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
