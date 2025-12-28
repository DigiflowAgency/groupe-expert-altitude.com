import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Paris 8e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur sur Paris 8e, offrant une expertise technique et une sécurité ',
  keywords: 'nettoyage vitres hauteur paris 8e, lavage vitres immeuble paris 8e, nettoyage facade vitree paris 8e, cordiste vitre paris 8e, entreprise nettoyage vitres paris 8e, nettoyage verriere paris 8e',
};

export default function NettoyageVitresHauteurParis8ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Paris 8e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur sur Paris 8e, offrant une expertise technique et une sécurité maximale pour tous vos projets de nettoyage de façades vitrées. Nous intervenons sur les immeubles les plus exigeants du quartier d&apos;affaires parisien.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Paris 8e</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur représente la solution professionnelle ultime pour les immeubles tertiaires et résidentiels de Paris 8e. Nos techniciens cordistes hautement qualifiés utilisent des techniques d&apos;alpinisme industriel permettant d&apos;accéder aux surfaces vitrées les plus complexes, garantissant un nettoyage impeccable sans interruption d&apos;activité. Chaque intervention est précédée d&apos;un diagnostic technique précis, nous permettant d&apos;adapter nos équipements et méthodes aux spécificités architecturales de votre bâtiment. Nos protocoles respectent strictement les normes de sécurité et environnementales, avec des produits de nettoyage écologiques et des équipements de dernière génération.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise technique certifiée avec plus de 15 ans d&apos;expérience
✓ Équipe de 12 cordistes professionnels formés aux techniques spéciales
✓ Interventions 100% sécurisées avec assurances professionnelles
✓ Devis personnalisé sous 48h
✓ Respect total des normes de sécurité et environnementales</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ au m², selon l&apos;accessibilité, la hauteur et la complexité de la surface. Pour un immeuble moyen de 300m² à Paris 8e, comptez un budget global entre 4 500€ et 15 000€, incluant tous nos équipements et prestations.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, avec un nettoyage saisonnier idéalement au printemps et à l&apos;automne. Pour les immeubles tertiaires exposés à la pollution parisienne, nous conseillons un nettoyage trimestriel pour maintenir une brillance optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur nécessite une triple garantie : équipements homologués, formation CACES/SPF des techniciens et protocoles de sécurité stricts. Nos cordistes utilisent des systèmes antichute, des harnais spécialisés et respectent un plan de prévention détaillé avant chaque intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Paris 8e ?
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
