import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Bondy | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Bondy et ses environs. Nous intervenons sur les bâtiments',
  keywords: 'nettoyage vitres hauteur bondy, lavage vitres immeuble bondy, nettoyage facade vitree bondy, cordiste vitre bondy, entreprise nettoyage vitres bondy, nettoyage verriere bondy',
};

export default function NettoyageVitresHauteurBondyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Bondy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Bondy et ses environs. Nous intervenons sur les bâtiments les plus complexes, garantissant une propreté impeccable et une sécurité maximale pour tous vos projets.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Bondy</h2>
        <div className="space-y-4">
          <p>Notre expertise en nettoyage de vitres en hauteur répond aux exigences les plus strictes des professionnels et des particuliers à Bondy. Nos techniciens cordistes hautement qualifiés utilisent des techniques d&apos;escalade professionnelle pour atteindre les surfaces vitrées les plus difficiles d&apos;accès. Équipés de matériel haute performance et certifiés IRATA, nous nettoyons facades vitrées, verrières et surfaces complexes avec une précision chirurgicale. Notre processus combine des techniques d&apos;alpinisme industriel et des produits écologiques pour un résultat brillant et respectueux de l&apos;environnement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos points forts incluent une expertise de plus de 15 ans, une couverture complète de Bondy et ses alentours, des techniciens certifiés, un équipement de pointe et une approche 100% sécurisée. Nous intervenons sur tous types de bâtiments, des immeubles résidentiels aux complexes industriels, avec un taux de satisfaction client de 98%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ au m², selon l&apos;accessibilité, la hauteur et la complexité. Pour un devis précis à Bondy, nous recommandons une évaluation sur site gratuite qui permettra de définir un tarif personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition aux pollutions, l&apos;environnement urbain et le type de bâtiment. Les immeubles en centre-ville de Bondy nécessitent généralement un nettoyage plus fréquent en raison de la pollution atmosphérique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur sécurisé implique l&apos;utilisation de techniques d&apos;alpinisme industriel, un équipement de protection individuelle complet, des harnais certifiés et le respect strict des normes de sécurité IRATA. Nos techniciens suivent annuellement des formations pour garantir une intervention sans risque.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Bondy ?
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
