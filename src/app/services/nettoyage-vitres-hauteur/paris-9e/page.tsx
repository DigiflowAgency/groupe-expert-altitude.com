import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Paris 9e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur sur Paris 9e, offrant une expertise technique unique pour les ',
  keywords: 'nettoyage vitres hauteur paris 9e, lavage vitres immeuble paris 9e, nettoyage facade vitree paris 9e, cordiste vitre paris 9e, entreprise nettoyage vitres paris 9e, nettoyage verriere paris 9e',
};

export default function NettoyageVitresHauteurParis9ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Paris 9e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur sur Paris 9e, offrant une expertise technique unique pour les immeubles et façades complexes. Nos cordistes professionnels transforment vos surfaces vitrées en véritables miroirs, garantissant propreté et sécurité maximale.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Paris 9e</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes des immeubles parisiens. Nos techniciens cordistes utilisent des techniques d&apos;escalade professionnelles pour atteindre les surfaces les plus difficiles d&apos;accès, avec un équipement de pointe homologué. Nous intervenons sur tous types de bâtiments : immeubles résidentiels, bureaux, vérandas et façades vitrées, en assurant un nettoyage impeccable sans compromettre la sécurité. Notre méthode combine des produits écologiques, des outils haute précision et une expertise technique permettant d&apos;éliminer les salissures tenaces, traces de pollution et résidus atmosphériques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos points forts : une équipe certifiée avec plus de 15 ans d&apos;expérience, un taux de satisfaction client de 98%, des interventions 100% sécurisées, un devis gratuit sous 24h et une adaptabilité totale aux configurations architecturales parisiennes. Nous sommes la référence du nettoyage vertical sur Paris 9e.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par fenêtre selon l&apos;accessibilité, la hauteur et la surface. Pour un immeuble moyen de 5 étages à Paris 9e, comptez un forfait entre 500€ et 1200€ avec nettoyage complet des façades.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an : au printemps pour éliminer les salissures hivernales, en été pour optimiser la luminosité, en automne pour préparer la période froide et ponctuellement en cas de pollution importante.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur nécessite une formation CACES, un harnais de sécurité aux normes, des points d&apos;ancrage certifiés et un équipement professionnel. Nos techniciens suivent annuellement des formations de sécurité et utilisent uniquement du matériel homologué pour garantir une intervention sans risque.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Paris 9e ?
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
