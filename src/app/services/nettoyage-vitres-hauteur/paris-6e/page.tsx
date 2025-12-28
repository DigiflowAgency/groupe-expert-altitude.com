import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Paris 6e | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Paris 6e, en proposant une expertise technique unique pour les immeubles et ',
  keywords: 'nettoyage vitres hauteur paris 6e, lavage vitres immeuble paris 6e, nettoyage facade vitree paris 6e, cordiste vitre paris 6e, entreprise nettoyage vitres paris 6e, nettoyage verriere paris 6e',
};

export default function NettoyageVitresHauteurParis6ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Paris 6e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Paris 6e, en proposant une expertise technique unique pour les immeubles et façades les plus exigeants. Nos cordistes professionnels transforment chaque surface vitrée en un spectacle de propreté et de transparence.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Paris 6e</h2>
        <div className="space-y-4">
          <p>Spécialisés dans le nettoyage de vitres en hauteur, nous intervenons sur tous types de bâtiments du 6e arrondissement parisien, des immeubles historiques aux résidences modernes. Notre méthode exclusive combine technique de cordage professionnel et équipements haute performance, garantissant un résultat impeccable sans risque pour les structures. Nos techniciens sont formés aux techniques alpines spécifiques, permettant d&apos;atteindre les zones les plus difficiles d&apos;accès avec une précision chirurgicale. Chaque intervention est précédée d&apos;un diagnostic technique personnalisé, assurant une prestation adaptée à la configuration unique de votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nous nous distinguons par notre certification professionnelle, notre équipe de 12 cordistes experts, et notre engagement sécurité total. 100% de nos interventions sont couvertes par une assurance responsabilité civile professionnelle. Nos tarifs transparents, notre réactivité (intervention sous 48h) et notre respect des normes de sécurité font de nous le partenaire idéal pour vos travaux de nettoyage en hauteur.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ le m², selon la complexité d&apos;accès, la hauteur et la surface totale. Pour un immeuble moyen à Paris 6e, comptez un budget global entre 500€ et 2500€ pour un nettoyage complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition aux pollutions urbaines. Les immeubles en centre-ville comme à Paris 6e nécessitent généralement un nettoyage trimestriel pour maintenir une apparence impeccable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La sécurité repose sur trois piliers : équipement technique (harnais normés CE, cordes spécialisées), formation continue de nos cordistes (certification IRATA) et respect strict du protocole de prévention des risques. Chaque intervention fait l&apos;objet d&apos;une analyse préalable des points critiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Paris 6e ?
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
