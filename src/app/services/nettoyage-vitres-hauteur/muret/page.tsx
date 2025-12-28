import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Muret | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Muret, en proposant des solutions professionnelles et sécurisées pour tous vos ',
  keywords: 'nettoyage vitres hauteur muret, lavage vitres immeuble muret, nettoyage facade vitree muret, cordiste vitre muret, entreprise nettoyage vitres muret, nettoyage verriere muret',
};

export default function NettoyageVitresHauteurMuretPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Muret</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Muret, en proposant des solutions professionnelles et sécurisées pour tous vos bâtiments commerciaux et résidentiels. Nos experts cordistes transforment votre façade vitrée en surface éclatante avec une précision chirurgicale.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Muret</h2>
        <div className="space-y-4">
          <p>Nos services de nettoyage de vitres en hauteur représentent l&apos;excellence technique et la sécurité absolue. Spécialisés dans l&apos;intervention sur immeubles, vérandas et façades complexes de Muret, nous utilisons des techniques de cordage professionnel permettant d&apos;atteindre les zones les plus inaccessibles. Notre équipe certifiée maîtrise parfaitement les techniques de travail en hauteur, garantissant un résultat impeccable sans risque pour vos infrastructures. Nous traitons chaque surface avec des produits écologiques et des équipements de haute précision, assurant un nettoyage optimal qui préserve l&apos;intégrité de vos vitrages.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique de plus de 15 ans, 2) Des techniciens certifiés IRATA, 3) Un engagement qualité avec garantie de satisfaction, 4) Des tarifs transparents et compétitifs adaptés à chaque projet de nettoyage en hauteur.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par mètre carré, selon la complexité d&apos;accès et la hauteur. Pour un immeuble standard à Muret, comptez environ 500-1200€ pour un nettoyage complet des façades vitrées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est 2 à 4 fois par an, avec un nettoyage saisonnier au printemps et à l&apos;automne. Les bâtiments en zone urbaine ou industrielle peuvent nécessiter un entretien plus fréquent, jusqu&apos;à 6 interventions annuelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur sécurisé implique : l&apos;utilisation de harnais homologués, des points d&apos;ancrage certifiés, une formation continue aux techniques de cordage, et le respect strict des normes de sécurité INRS et OPPBTP.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Muret ?
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
