import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Toulouse | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste du nettoyage de vitres en hauteur à Toulouse, transforme l&apos;entretien de vos surfaces vitrées en une opération',
  keywords: 'nettoyage vitres hauteur toulouse, lavage vitres immeuble toulouse, nettoyage facade vitree toulouse, cordiste vitre toulouse, entreprise nettoyage vitres toulouse, nettoyage verriere toulouse',
};

export default function NettoyageVitresHauteurToulousePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Toulouse</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste du nettoyage de vitres en hauteur à Toulouse, transforme l&apos;entretien de vos surfaces vitrées en une opération de précision et de sécurité. Nous intervenons sur tous types de bâtiments, des immeubles résidentiels aux complexes tertiaires de la métropole toulousaine.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Toulouse</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur représente la solution professionnelle et technique pour les bâtiments nécessitant une intervention spécialisée. Nos techniciens cordistes, formés aux techniques alpines, garantissent un nettoyage impeccable des façades vitrées, verrières et surfaces complexes. Équipés de matériel high-tech et de protocoles de sécurité rigoureux, nous intervenons avec une efficacité remarquable, réduisant les temps d&apos;intervention tout en assurant une qualité de nettoyage irréprochable. Notre expertise nous permet de traiter des hauteurs allant jusqu&apos;à 100 mètres, avec un taux de satisfaction client de 98%.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : des techniciens certifiés, un équipement professionnel de dernière génération, une assurance responsabilité civile complète et une approche environnementale responsable. Nous utilisons uniquement des produits écologiques et nos méthodes respectent les normes de sécurité les plus strictes. Notre connaissance approfondie du territoire toulousain nous permet d&apos;intervenir rapidement et efficacement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par mètre carré, selon la complexité de l&apos;intervention, la hauteur et l&apos;accessibilité. Pour un devis précis, nous recommandons un diagnostic sur site gratuit qui permettra d&apos;évaluer exactement vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;environnement et l&apos;exposition. Les immeubles en centre-ville de Toulouse, plus exposés à la pollution, nécessiteront probablement un nettoyage trimestriel pour maintenir une apparence impeccable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur sécurisé implique l&apos;utilisation de techniques de cordage professionnel, un équipement de protection individuelle complet, une formation IRATA/SFEREN et le respect strict des normes de sécurité NF EN 361. Nos techniciens sont des experts certifiés garantissant une intervention sans risque.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Toulouse ?
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
