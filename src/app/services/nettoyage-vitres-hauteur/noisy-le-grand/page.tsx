import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Noisy-le-Grand | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Noisy-le-Grand, offrant une expertise technique inégalée pour les immeubles ',
  keywords: 'nettoyage vitres hauteur noisy-le-grand, lavage vitres immeuble noisy-le-grand, nettoyage facade vitree noisy-le-grand, cordiste vitre noisy-le-grand, entreprise nettoyage vitres noisy-le-grand, nettoyage verriere noisy-le-grand',
};

export default function NettoyageVitresHauteurNoisyLeGrandPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Noisy-le-Grand</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Noisy-le-Grand, offrant une expertise technique inégalée pour les immeubles et façades les plus exigeants. Nos cordistes professionnels transforment vos surfaces vitrées en véritables surfaces cristallines, avec une précision et une sécurité remarquables.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Noisy-le-Grand</h2>
        <div className="space-y-4">
          <p>Spécialistes du nettoyage de vitres en hauteur, nous intervenons sur tous types de bâtiments à Noisy-le-Grand, des immeubles résidentiels aux complexes tertiaires. Notre méthodologie unique combine des techniques de cordage professionnel et des équipements de pointe, garantissant un nettoyage impeccable sans risque. Nos techniciens hautement qualifiés utilisent des solutions écologiques et des matériels spécifiques pour traiter chaque surface vitrée, des grandes vérrières aux façades complexes. Nous évaluons systématiquement chaque site pour proposer une intervention sur-mesure, avec une attention particulière à la sécurité et à la qualité du résultat final.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : techniciens certifiés, matériel homologué, interventions 100% sécurisées, devis gratuit sous 24h. Nous sommes les seuls à Noisy-le-Grand à proposer une garantie qualité totale et une approche environnementale responsable dans le nettoyage de vitres en hauteur.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par m², selon la hauteur, l&apos;accessibilité et la complexité de la surface. Pour un immeuble standard à Noisy-le-Grand, comptez environ 800€ à 2000€ pour un nettoyage complet, avec un devis personnalisé après diagnostic précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition et l&apos;environnement. Les immeubles en centre-ville ou proche d&apos;axes routiers nécessitent un nettoyage plus fréquent, tandis que les bâtiments plus isolés peuvent s&apos;en contenter deux fois par an.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La sécurité est notre priorité : nos cordistes utilisent un équipement de protection individuelle complet, des systèmes antichute homologués, et suivent des formations continues. Chaque intervention est précédée d&apos;une analyse des risques et respecte strictement les normes de sécurité professionnelles en vigueur.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Noisy-le-Grand ?
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
