import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Le Blanc-Mesnil | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur au Blanc-Mesnil, offrant une expertise unique pour des surfaces vitrées impeccabl',
  keywords: 'nettoyage vitres hauteur le blanc-mesnil, lavage vitres immeuble le blanc-mesnil, nettoyage facade vitree le blanc-mesnil, cordiste vitre le blanc-mesnil, entreprise nettoyage vitres le blanc-mesnil, nettoyage verriere le blanc-mesnil',
};

export default function NettoyageVitresHauteurLeBlancMesnilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Le Blanc-Mesnil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur au Blanc-Mesnil, offrant une expertise unique pour des surfaces vitrées impeccables. Nos techniciens cordistes transforment chaque intervention en garantie de propreté et de sécurité maximale.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Le Blanc-Mesnil</h2>
        <div className="space-y-4">
          <p>Spécialistes du nettoyage de vitres en hauteur, nous intervenons sur tous types de bâtiments au Blanc-Mesnil, des immeubles résidentiels aux complexes tertiaires. Notre méthode exclusive combine techniques de cordage professionnel et équipements haute performance, permettant un nettoyage précis et sans risque jusqu&apos;à 100 mètres de hauteur. Chaque intervention débute par un diagnostic technique personnalisé, évaluant la configuration du bâtiment et les contraintes spécifiques. Nos techniciens utilisent des produits écologiques qui garantissent une brillance cristalline sans trace, tout en respectant l&apos;environnement et les surfaces traitées.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence repose sur trois piliers : expertise technique, sécurité absolue et satisfaction client. 100% de nos techniciens sont certifiés IRATA, disposent d&apos;un équipement aux normes et bénéficient de plus de 10 ans d&apos;expérience. Nous proposons une traçabilité complète de nos interventions et une garantie qualité unique sur le marché du nettoyage de vitres en hauteur.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ au m², selon l&apos;accessibilité, la hauteur et la complexité de l&apos;intervention. Pour un immeuble standard de 500m², comptez un budget global entre 2 500€ et 7 500€, incluant le matériel, la main-d&apos;œuvre et la sécurisation complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 interventions par an, avec un nettoyage principal au printemps et un second à l&apos;automne. Pour les zones très exposées à la pollution ou en centre-ville comme au Blanc-Mesnil, nous conseillons un nettoyage trimestriel pour maintenir une transparence optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage de vitres en hauteur nécessite une triple protection : équipements individuels (harnais, casque), systèmes antichute certifiés et formation professionnelle spécifique. Nos cordistes utilisent des techniques d&apos;alpinisme industriel, avec des points d&apos;ancrage multiples et un contrôle permanent des charges et des mouvements.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Le Blanc-Mesnil ?
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
