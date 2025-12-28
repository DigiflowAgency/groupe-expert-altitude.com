import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Aix-en-Provence | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Aix-en-Provence, en proposant des services de lavage de façades vitrées qui com',
  keywords: 'nettoyage vitres hauteur aix-en-provence, lavage vitres immeuble aix-en-provence, nettoyage facade vitree aix-en-provence, cordiste vitre aix-en-provence, entreprise nettoyage vitres aix-en-provence, nettoyage verriere aix-en-provence',
};

export default function NettoyageVitresHauteurAixEnProvencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Aix-en-Provence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Aix-en-Provence, en proposant des services de lavage de façades vitrées qui combinent expertise technique et sécurité maximale. Nos cordistes professionnels transforment l&apos;entretien de vos surfaces vitrées en une prestation impeccable et sans risque.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Aix-en-Provence</h2>
        <div className="space-y-4">
          <p>Spécialisés dans le nettoyage de vitres en hauteur, nous intervenons sur tous types de bâtiments à Aix-en-Provence : immeubles résidentiels, bureaux, monuments historiques et surfaces commerciales. Notre méthode unique combine des techniques de cordage professionnel et des équipements high-tech permettant d&apos;atteindre les zones les plus complexes. Nos techniciens sont formés aux techniques verticales et possèdent les certifications de sécurité les plus exigeantes. Chaque intervention est précédée d&apos;un diagnostic précis pour garantir un résultat optimal, en respectant les normes environnementales et de sécurité les plus strictes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Équipe de 12 cordistes certifiés 
✓ Interventions 100% sécurisées 
✓ Matériel professionnel dernier cri 
✓ Devis gratuit sous 24h 
✓ Techniques respectueuses de l&apos;environnement 
✓ Expérience de plus de 15 ans sur Aix-en-Provence</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par m², selon la hauteur, l&apos;accessibilité et la complexité. Pour un immeuble de 5 étages, comptez environ 1200€ à 2500€ pour un nettoyage complet. Nous proposons des devis personnalisés après diagnostic précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est 2 à 4 fois par an, selon l&apos;exposition et l&apos;environnement. Les immeubles en centre-ville d&apos;Aix-en-Provence nécessitent généralement 3 nettoyages annuels en raison de la pollution urbaine et du climat méditerranéen.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La sécurité est notre priorité absolue. Nos cordistes utilisent un équipement homologué (harnais, points d&apos;ancrage certifiés), suivent des protocoles stricts de sécurité et possèdent les formations IRATA/SFETH. Chaque intervention est préparée avec une analyse des risques détaillée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Aix-en-Provence ?
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
