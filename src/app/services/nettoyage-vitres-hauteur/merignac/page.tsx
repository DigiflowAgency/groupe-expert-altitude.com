import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Mérignac | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Mérignac, offre des solutions professionnelles pour tous vos dé',
  keywords: 'nettoyage vitres hauteur mérignac, lavage vitres immeuble mérignac, nettoyage facade vitree mérignac, cordiste vitre mérignac, entreprise nettoyage vitres mérignac, nettoyage verriere mérignac',
};

export default function NettoyageVitresHauteurMerignacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Mérignac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Mérignac, offre des solutions professionnelles pour tous vos défis de propreté verticale. Nos experts cordistes transforment l&apos;entretien de vos façades vitrées en une prestation impeccable et sécurisée.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Mérignac</h2>
        <div className="space-y-4">
          <p>Nos services de nettoyage de vitres en hauteur représentent la solution ultime pour les immeubles, entreprises et bâtiments commerciaux de Mérignac. Nos techniciens hautement qualifiés utilisent des techniques de cordage professionnel pour atteindre les surfaces les plus complexes, garantissant un nettoyage précis et sans trace. Équipés de matériel haute performance et certifiés en techniques de travail en hauteur, nous intervenons sur tous types de structures : immeubles de bureaux, vérandas, facades vitrées industrielles. Notre processus comprend une évaluation préalable du site, un plan d&apos;intervention sécurisé et un nettoyage écologique utilisant des produits respectueux de l&apos;environnement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : techniciens certifiés IRATA, plus de 15 ans d&apos;expérience, assurance responsabilité civile professionnelle complète, interventions adaptées à chaque configuration architecturale. Nous garantissons un résultat impeccable, une sécurité maximale et une transparence totale dans nos prestations.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ le m², selon la hauteur, l&apos;accessibilité et la complexité de la surface. Pour un devis précis à Mérignac, nous proposons une estimation gratuite après diagnostic technique sur site.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;environnement : zones urbaines ou industrielles nécessitent un nettoyage plus fréquent. Pour les immeubles de Mérignac, nous conseillons un entretien semestriel pour maintenir une apparence impeccable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur sécurisé implique l&apos;utilisation de techniques de cordage spécialisées, des équipements de protection individuelle conformes aux normes NF EN, et le respect strict du protocole de sécurité IRATA. Nos techniciens sont formés annuellement aux dernières normes de sécurité professionnelle.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Mérignac ?
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
