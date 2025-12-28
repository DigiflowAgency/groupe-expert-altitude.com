import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Nice | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste du nettoyage de vitres en hauteur à Nice, offre des solutions professionnelles pour les immeubles, facades et',
  keywords: 'nettoyage vitres hauteur nice, lavage vitres immeuble nice, nettoyage facade vitree nice, cordiste vitre nice, entreprise nettoyage vitres nice, nettoyage verriere nice',
};

export default function NettoyageVitresHauteurNicePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Nice</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste du nettoyage de vitres en hauteur à Nice, offre des solutions professionnelles pour les immeubles, facades et verrières les plus complexes. Nous transformons chaque surface vitrée en une transparence cristalline, garantissant une qualité de service inégalée sur la Côte d&apos;Azur.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Nice</h2>
        <div className="space-y-4">
          <p>Nos experts en nettoyage de vitres en hauteur maîtrisent parfaitement les techniques de cordiste et les méthodes de lavage professionnel. Équipés de matériel haute technologie et certifiés en sécurité, nous intervenons sur tous types de bâtiments à Nice, des immeubles résidentiels aux complexes tertiaires. Notre processus unique combine des techniques d&apos;escalade professionnelle et des produits de nettoyage écologiques, permettant un résultat impeccable sans impact environnemental. Chaque intervention est précédée d&apos;un diagnostic précis pour adapter notre approche à la spécificité de votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Plus de 15 ans d&apos;expérience sur la région niçoise
✓ Techniciens cordistes hautement qualifiés et certifiés
✓ Matériel dernière génération garantissant une propreté optimale
✓ Devis gratuit et personnalisé sous 24h
✓ Respect total des normes de sécurité et environnementales</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par m² selon la hauteur, l&apos;accessibilité et la complexité. Pour un immeuble standard de 200m², comptez un budget global entre 1500€ et 3000€. Un devis précis sera établi après un diagnostic sur site.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition et l&apos;environnement. Les immeubles en centre-ville de Nice ou proches de zones industrielles nécessiteront un nettoyage plus fréquent en raison de la pollution atmosphérique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur requiert une formation spécifique, un équipement de sécurité complet (harnais, points d&apos;ancrage) et une certification IRATA/SPRAT. Nos techniciens utilisent des techniques d&apos;escalade professionnelle et un matériel aux normes strictes, garantissant une intervention 100% sécurisée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Nice ?
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
