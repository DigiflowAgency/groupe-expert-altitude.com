import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Nanterre | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Nanterre et ses environs. Nous intervenons sur les bâtiments',
  keywords: 'nettoyage vitres hauteur nanterre, lavage vitres immeuble nanterre, nettoyage facade vitree nanterre, cordiste vitre nanterre, entreprise nettoyage vitres nanterre, nettoyage verriere nanterre',
};

export default function NettoyageVitresHauteurNanterrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Nanterre</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Nanterre et ses environs. Nous intervenons sur les bâtiments les plus complexes avec une expertise technique et une sécurité maximale.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Nanterre</h2>
        <div className="space-y-4">
          <p>Nos techniciens cordistes sont formés pour réaliser des interventions de nettoyage de façades vitrées sur tous types de structures à Nanterre. Équipés de matériel professionnel et de techniques d&apos;escalade spécifiques, nous garantissons un résultat impeccable sans risque pour vos installations. Notre process comprend un diagnostic préalable, un nettoyage haute précision avec des produits écologiques et un contrôle qualité systématique. Nous intervenons sur immeubles de bureaux, bâtiments industriels, vérandas et facades complexes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 15 ans d&apos;expérience
- Techniques de cordage conformes aux normes de sécurité
- Matériel technique dernier cri
- Intervention rapide sur Nanterre et région parisienne
- Devis gratuit sous 48h</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif moyen varie entre 15€ et 45€ par m² selon la complexité, la hauteur et l&apos;accessibilité. Un immeuble de 500m² coûtera environ 3500€ pour un nettoyage complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons 2 à 3 nettoyages par an pour les immeubles tertiaires, et 1 à 2 pour les bâtiments résidentiels, selon l&apos;exposition et l&apos;environnement.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nos techniciens utilisent un équipement de protection individuelle complet, des systèmes antichute homologués, et suivent des protocoles stricts de sécurité conformes à la réglementation INRS.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Nanterre ?
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
