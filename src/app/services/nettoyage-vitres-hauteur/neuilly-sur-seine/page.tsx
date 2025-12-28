import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Neuilly-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Neuilly-sur-Seine, offre des solutions professionnelles pour le',
  keywords: 'nettoyage vitres hauteur neuilly-sur-seine, lavage vitres immeuble neuilly-sur-seine, nettoyage facade vitree neuilly-sur-seine, cordiste vitre neuilly-sur-seine, entreprise nettoyage vitres neuilly-sur-seine, nettoyage verriere neuilly-sur-seine',
};

export default function NettoyageVitresHauteurNeuillySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Neuilly-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Neuilly-sur-Seine, offre des solutions professionnelles pour les immeubles et bâtiments les plus exigeants. Nous transformons vos surfaces vitrées en véritables surfaces cristallines, garantissant propreté et brillance exceptionnelles.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Neuilly-sur-Seine</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux besoins spécifiques des immeubles résidentiels et professionnels de Neuilly-sur-Seine. Nos techniciens cordistes hautement qualifiés utilisent des techniques d&apos;escalade professionnelle pour atteindre les surfaces les plus difficiles d&apos;accès. Nous disposons d&apos;équipements de haute technologie permettant un nettoyage précis et sécurisé, avec des techniques respectueuses de l&apos;environnement. Chaque intervention est précédée d&apos;un diagnostic technique pour adapter notre approche, en utilisant des produits écologiques qui préservent l&apos;intégrité des surfaces vitrées.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise technique certifiée avec plus de 15 ans d&apos;expérience
• Équipe de 12 cordistes professionnels formés aux dernières normes de sécurité
• Interventions rapides et sur-mesure à Neuilly-sur-Seine
• Devis gratuit et transparents sans engagement
• Assurance responsabilité professionnelle complète</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par fenêtre, selon la hauteur, l&apos;accessibilité et la surface. Pour un immeuble standard à Neuilly-sur-Seine, comptez un budget global entre 500€ et 2000€ pour un nettoyage complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition et l&apos;environnement. Les immeubles en centre-ville ou proche des axes routiers nécessiteront un nettoyage plus fréquent, idéalement tous les 3-4 mois.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Notre approche sécuritaire inclut : utilisation de harnais homologués, double système d&apos;ancrage, formation continue aux techniques de cordage, respect strict des normes INRS, équipements individuels de protection et protocoles d&apos;intervention strictement définis.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Neuilly-sur-Seine ?
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
