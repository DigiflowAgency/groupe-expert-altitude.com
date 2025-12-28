import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Cagnes-sur-Mer | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour le nettoyage de vitres en hauteur à Cagnes-sur-Mer. Spécialistes des interventions comple',
  keywords: 'nettoyage vitres hauteur cagnes-sur-mer, lavage vitres immeuble cagnes-sur-mer, nettoyage facade vitree cagnes-sur-mer, cordiste vitre cagnes-sur-mer, entreprise nettoyage vitres cagnes-sur-mer, nettoyage verriere cagnes-sur-mer',
};

export default function NettoyageVitresHauteurCagnesSurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Cagnes-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour le nettoyage de vitres en hauteur à Cagnes-sur-Mer. Spécialistes des interventions complexes, nous garantissons des façades et vérandas impeccables avec une expertise technique et une sécurité maximale.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Cagnes-sur-Mer</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes des professionnels et particuliers de la région. Nos techniciens cordistes utilisent des techniques d&apos;escalade professionnelle pour intervenir sur les surfaces vertigineuses, des immeubles aux vérandas. Équipés de matériel haute performance et certifiés IRATA, nous nettoyons chaque surface vitrée avec une précision chirurgicale, éliminant poussières, traces et salissures. Notre processus comprend un diagnostic préalable, un nettoyage écologique avec des produits respectueux de l&apos;environnement, et un contrôle qualité systématique pour des résultats impeccables.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Techniciens cordistes certifiés IRATA
• Interventions 100% sécurisées sur Cagnes-sur-Mer
• Matériel professionnel dernier cri
• Devis gratuit et personnalisé
• Respect des normes environnementales
• Plus de 15 ans d&apos;expérience en nettoyage en hauteur</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par vitre, selon l&apos;accessibilité et la hauteur. Pour un immeuble moyen à Cagnes-sur-Mer, comptez un budget global entre 500€ et 2000€. Un devis précis sera établi après un diagnostic technique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 nettoyages par an, selon l&apos;exposition et l&apos;environnement. Les bâtiments en centre-ville ou proches de zones industrielles nécessitent un entretien plus fréquent, idéalement tous les 3-4 mois.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur sécurisé implique l&apos;utilisation de systèmes d&apos;ancrage, de harnais homologués, de cordes techniques et le respect strict des protocoles IRATA. Nos techniciens suivent des formations annuelles et disposent d&apos;un équipement de protection individuelle dernier cri.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Cagnes-sur-Mer ?
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
