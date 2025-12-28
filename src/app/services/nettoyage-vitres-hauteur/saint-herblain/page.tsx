import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Saint-Herblain | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Saint-Herblain, offre des solutions professionnelles pour les i',
  keywords: 'nettoyage vitres hauteur saint-herblain, lavage vitres immeuble saint-herblain, nettoyage facade vitree saint-herblain, cordiste vitre saint-herblain, entreprise nettoyage vitres saint-herblain, nettoyage verriere saint-herblain',
};

export default function NettoyageVitresHauteurSaintHerblainPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Saint-Herblain</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Saint-Herblain, offre des solutions professionnelles pour les immeubles, entreprises et bâtiments complexes. Nos experts cordistes transforment vos façades vitrées en surfaces cristallines, garantissant propreté et sécurité maximale.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Saint-Herblain</h2>
        <div className="space-y-4">
          <p>Nos techniques de nettoyage en hauteur représentent l&apos;excellence technique pour les surfaces vitrées complexes. Nos cordistes hautement qualifiés utilisent des équipements de pointe permettant d&apos;intervenir sur des structures jusqu&apos;à 100 mètres de hauteur, avec une précision chirurgicale. À Saint-Herblain et ses environs, nous proposons un service complet incluant le nettoyage de vérandas, facades vitrées, immeubles tertiaires et résidentiels. Chaque intervention est précédée d&apos;un diagnostic technique pour adapter notre approche, en respectant les normes de sécurité les plus strictes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos points forts : Une équipe certifiée avec plus de 15 ans d&apos;expérience, des techniques innovantes garantissant un résultat impeccable, un engagement sécurité total, des tarifs transparents sans surprise. Nous sommes assurés et habilités pour tous types d&apos;interventions en hauteur, avec un taux de satisfaction client de 98%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ le m², selon la complexité, la hauteur et l&apos;accessibilité. Un devis personnalisé gratuit permet de définir précisément le tarif après un diagnostic sur site.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition (pollution, environnement). Les immeubles en centre-ville nécessitent généralement un nettoyage plus fréquent que les bâtiments en zone périphérique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur impose des techniques spécifiques : utilisation de harnais, double point d&apos;ancrage, formation CATEC, équipements homologués. Nos cordistes suivent annuellement des formations de sécurité et possèdent toutes les certifications requises.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Saint-Herblain ?
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
