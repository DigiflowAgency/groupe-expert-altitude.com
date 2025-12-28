import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Menton | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Menton, offrant une expertise unique pour les immeubles et façades les plus com',
  keywords: 'nettoyage vitres hauteur menton, lavage vitres immeuble menton, nettoyage facade vitree menton, cordiste vitre menton, entreprise nettoyage vitres menton, nettoyage verriere menton',
};

export default function NettoyageVitresHauteurMentonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Menton</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Menton, offrant une expertise unique pour les immeubles et façades les plus complexes de la Côte d&apos;Azur. Nos techniciens cordistes transforment l&apos;entretien de vos surfaces vitrées en une prestation de haute précision et de sécurité maximale.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Menton</h2>
        <div className="space-y-4">
          <p>Spécialisés dans le nettoyage de vitres en hauteur, nous intervenons sur tous types de bâtiments à Menton, des résidences modernes aux bâtisses historiques. Notre méthode exclusive combine techniques de cordage professionnel et équipements high-tech pour garantir un résultat impeccable. Nos techniciens certifiés utilisent des systèmes d&apos;accès par cordes qui permettent d&apos;atteindre les zones les plus difficiles, avec une précision chirurgicale et un respect total des normes de sécurité. Chaque intervention est personnalisée, évaluée techniquement pour optimiser l&apos;efficacité et minimiser les risques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Experts certifiés en techniques de cordage 
✓ 15 ans d&apos;expérience sur la Côte d&apos;Azur 
✓ Interventions 100% sécurisées 
✓ Devis gratuit sous 24h 
✓ Respect des normes environnementales 
✓ Technologies de nettoyage dernière génération</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ le m², selon l&apos;accessibilité, la hauteur et la complexité. Pour un immeuble moyen à Menton, comptez entre 500€ et 2500€ pour un nettoyage complet. Un devis personnalisé est systématiquement proposé après expertise technique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition et l&apos;environnement. Dans les zones côtières comme Menton, avec embruns et sel, nous conseillons un nettoyage trimestriel pour préserver la qualité des surfaces vitrées et prolonger leur durée de vie.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur requiert une formation IRATA, des équipements homologués et un protocole strict. Nos cordistes utilisent des harnais de sécurité, des points d&apos;ancrage certifiés, et suivent des procédures rigoureuses garantissant zéro risque pour l&apos;intervenant et l&apos;environnement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Menton ?
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
