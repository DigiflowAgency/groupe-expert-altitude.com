import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Cenon | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Cenon, vous propose des solutions professionnelles et sécurisée',
  keywords: 'nettoyage vitres hauteur cenon, lavage vitres immeuble cenon, nettoyage facade vitree cenon, cordiste vitre cenon, entreprise nettoyage vitres cenon, nettoyage verriere cenon',
};

export default function NettoyageVitresHauteurCenonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Cenon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Cenon, vous propose des solutions professionnelles et sécurisées pour tous vos bâtiments. Nos experts cordistes transforment vos façades vitrées en surfaces éclatantes, avec une précision et un professionnalisme inégalés.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Cenon</h2>
        <div className="space-y-4">
          <p>Nos services de nettoyage de vitres en hauteur représentent la solution ultime pour les immeubles, entreprises et bâtiments commerciaux de Cenon. Nos techniciens hautement qualifiés utilisent des techniques de cordage professionnel permettant d&apos;atteindre les surfaces les plus complexes, garantissant un nettoyage impeccable sans risque. Équipés de matériel haute technologie et d&apos;une formation rigoureuse en sécurité, nous intervenons sur tous types de structures, des vérandas aux immeubles de plusieurs étages. Notre processus comprend une évaluation préalable, un nettoyage respectueux des surfaces et un contrôle qualité systématique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée possède plus de 15 ans d&apos;expérience, nous sommes assurés pour toute intervention, nos tarifs sont transparents et compétitifs, et nous utilisons uniquement des produits écologiques. Nos interventions sont rapides, précises et totalement sécurisées.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par m², selon la difficulté d&apos;accès, la hauteur et la surface totale. Un devis personnalisé gratuit vous permettra d&apos;obtenir un tarif précis adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition et l&apos;environnement. Les zones urbaines ou industrielles nécessitent un nettoyage plus fréquent, tandis que les zones résidentielles peuvent se contenter de 2 interventions annuelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La sécurité est notre priorité absolue : nos cordistes sont certifiés IRATA, utilisent un équipement aux normes CE, suivent des protocoles stricts de prévention des risques et sont équipés de systèmes antichute homologués. Chaque intervention fait l&apos;objet d&apos;une analyse de risques préalable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Cenon ?
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
