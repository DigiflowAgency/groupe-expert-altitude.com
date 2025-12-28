import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Marseille | Groupe Expert Altitude Com',
  description: 'Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Marseille, offre des solutions professionnelles et sécurisées pour tou',
  keywords: 'nettoyage vitres hauteur marseille, lavage vitres immeuble marseille, nettoyage facade vitree marseille, cordiste vitre marseille, entreprise nettoyage vitres marseille, nettoyage verriere marseille',
};

export default function NettoyageVitresHauteurMarseillePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Marseille</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Marseille, offre des solutions professionnelles et sécurisées pour tous vos besoins de lavage de surfaces vitrées complexes. Nos techniques innovantes garantissent des résultats impeccables pour les immeubles, facades et verrières de la cité phocéenne.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Marseille</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes des professionnels marseillais. Nos techniciens cordistes hautement qualifiés utilisent des équipements de pointe pour traiter les surfaces vitrées les plus difficiles d&apos;accès. Nous intervenons sur tous types de bâtiments : immeubles résidentiels, bureaux, hôtels, établissements publics, avec une précision chirurgicale. Chaque intervention est précédée d&apos;un diagnostic technique personnalisé permettant d&apos;adapter notre approche aux spécificités architecturales de votre bâtiment. Notre engagement qualité se traduit par un nettoyage écologique, utilisant des produits respectueux de l&apos;environnement et conformes aux normes de sécurité les plus récentes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Expert Altitude Com, c&apos;est opter pour l&apos;excellence : 95% de satisfaction client, des techniciens certifiés, un matériel de dernière génération, une approche éco-responsable. Nous sommes assurés pour toute intervention et garantissons une transparence totale dans nos devis. Notre connaissance unique du territoire marseillais nous permet d&apos;intervenir rapidement et efficacement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par m², selon la complexité d&apos;accès, la hauteur et la surface totale. Un devis personnalisé gratuit vous permettra d&apos;obtenir un tarif précis adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition du bâtiment. Les zones très exposées aux embruns marins à Marseille nécessitent un nettoyage plus fréquent pour préserver la qualité des surfaces vitrées.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La sécurité est notre priorité absolue : nos cordistes sont équipés de harnais homologués, utilisent des techniques d&apos;escalade professionnelles, suivent des formations continues et respectent strictement les protocoles de sécurité OPPBTP. Chaque intervention fait l&apos;objet d&apos;une évaluation des risques préalable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Marseille ?
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
