import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Saint-Sébastien-sur-Loire | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Saint-Sébastien-sur-Loire, offre des solutions professionnelles',
  keywords: 'nettoyage vitres hauteur saint-sébastien-sur-loire, lavage vitres immeuble saint-sébastien-sur-loire, nettoyage facade vitree saint-sébastien-sur-loire, cordiste vitre saint-sébastien-sur-loire, entreprise nettoyage vitres saint-sébastien-sur-loire, nettoyage verriere saint-sébastien-sur-loire',
};

export default function NettoyageVitresHauteurSaintSebastienSurLoirePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Saint-Sébastien-sur-Loire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Saint-Sébastien-sur-Loire, offre des solutions professionnelles pour les immeubles et bâtiments complexes. Nos experts cordistes transforment vos surfaces vitrées en véritables surfaces transparentes et éclatantes.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Saint-Sébastien-sur-Loire</h2>
        <div className="space-y-4">
          <p>Nos services de nettoyage de vitres en hauteur représentent bien plus qu&apos;un simple lavage. Nous intervenons sur tous types de structures, des immeubles résidentiels aux bâtiments tertiaires de Saint-Sébastien-sur-Loire, en utilisant des techniques de cordage professionnel. Nos techniciens hautement qualifiés sont équipés de matériel dernière génération permettant un nettoyage impeccable et sécurisé. Chaque intervention est précédée d&apos;un diagnostic technique pour adapter notre approche, garantissant des résultats optimaux sans risque pour les infrastructures. Nous traitons chaque surface vitrée avec une attention méticuleuse, éliminant traces, salissures et résidus pour une transparence cristalline.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise technique certifiée avec plus de 15 ans d&apos;expérience
• Équipements aux normes de sécurité les plus strictes
• Interventions rapides et sur-mesure dans l&apos;agglomération nantaise
• Respect total des réglementations en vigueur pour les travaux en hauteur</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par mètre carré, selon la difficulté d&apos;accès, la hauteur et la fréquence. Pour un immeuble standard à Saint-Sébastien-sur-Loire, comptez un budget global entre 500€ et 2500€ pour un nettoyage complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition du bâtiment. Les façades exposées à la pollution ou aux intempéries nécessitent un nettoyage plus fréquent, tandis que les zones moins sollicitées peuvent être traitées semestriellement.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur sécurisé implique l&apos;utilisation de techniques de cordage professionnel, l&apos;emploi d&apos;équipements de protection individuelle homologués, et le respect strict des normes de sécurité INRS. Nos techniciens suivent des formations annuelles et disposent de certifications spécifiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Saint-Sébastien-sur-Loire ?
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
