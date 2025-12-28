import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Décines-Charpieu | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste en nettoyage de vitres en hauteur à Décines-Charpieu, offre des solutions professionnelles pour les immeubles',
  keywords: 'nettoyage vitres hauteur décines-charpieu, lavage vitres immeuble décines-charpieu, nettoyage facade vitree décines-charpieu, cordiste vitre décines-charpieu, entreprise nettoyage vitres décines-charpieu, nettoyage verriere décines-charpieu',
};

export default function NettoyageVitresHauteurDecinesCharpieuPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Décines-Charpieu</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste en nettoyage de vitres en hauteur à Décines-Charpieu, offre des solutions professionnelles pour les immeubles, entreprises et bâtiments complexes. Notre expertise en nettoyage de surfaces vitrées verticales garantit des résultats impeccables et une sécurité optimale.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Décines-Charpieu</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes des professionnels de Décines-Charpieu et ses environs. Nos techniciens cordistes hautement qualifiés utilisent des techniques d&apos;escalade professionnelle pour nettoyer les façades vitrées, vérandas et surfaces complexes. Équipés de matériel haute performance et certifiés en travaux sur cordes, nous intervenons sur des hauteurs allant jusqu&apos;à 100 mètres. Notre processus comprend un diagnostic précis, un nettoyage écologique avec des produits sans trace, et un contrôle qualité systématique pour des résultats cristallins.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés avec plus de 15 ans d&apos;expérience
- Matériel professionnel dernier cri
- Interventions 100% sécurisées
- Devis gratuit sous 24h
- Respect des normes environnementales
- Adaptabilité à tous types de bâtiments</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par m², selon la difficulté d&apos;accès, la hauteur et la surface. Un immeuble de 500m² peut nécessiter un investissement entre 2500€ et 5000€ pour un nettoyage complet et professionnel.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition, l&apos;environnement et le type de bâtiment. Les immeubles en centre-ville ou près d&apos;axes routiers peuvent nécessiter un nettoyage plus fréquent, jusqu&apos;à 4 fois par an.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur s&apos;effectue uniquement avec des équipements de protection individuelle (EPI), des harnais homologués, des systèmes d&apos;ancrage certifiés et une formation CACES spécifique. Nos techniciens suivent des protocoles stricts de sécurité et utilisent des techniques d&apos;escalade professionnelle.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Décines-Charpieu ?
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
