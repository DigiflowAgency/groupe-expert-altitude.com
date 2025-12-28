import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Aubagne | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialiste du nettoyage de vitres en hauteur à Aubagne, apporte une solution professionnelle et sécurisée pou',
  keywords: 'nettoyage vitres hauteur aubagne, lavage vitres immeuble aubagne, nettoyage facade vitree aubagne, cordiste vitre aubagne, entreprise nettoyage vitres aubagne, nettoyage verriere aubagne',
};

export default function NettoyageVitresHauteurAubagnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Aubagne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialiste du nettoyage de vitres en hauteur à Aubagne, apporte une solution professionnelle et sécurisée pour tous vos besoins de lavage de surfaces vitrées complexes. Notre expertise technique garantit des résultats impeccables, que ce soit pour des immeubles, des facades ou des verrières.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Aubagne</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes des professionnels et particuliers d&apos;Aubagne et ses environs. Nos techniciens cordistes hautement qualifiés utilisent des techniques d&apos;escalade et des équipements de pointe pour nettoyer les surfaces vitrées les plus difficiles d&apos;accès. Nous intervenons sur tous types de bâtiments : immeubles résidentiels, bureaux, établissements industriels et commerciaux. Notre processus comprend une évaluation préalable des risques, un nettoyage minutieux avec des produits écologiques et un contrôle qualité systématique, garantissant une transparence et une brillance optimales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique de plus de 15 ans, 2) Des techniciens certifiés IRATA (référence internationale en travaux acrobatiques), 3) Un engagement sécurité total avec zéro accident depuis notre création, 4) Des tarifs transparents et compétitifs adaptés à chaque projet.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par m², selon l&apos;accessibilité, la hauteur et la complexité de la surface. Un devis personnalisé gratuit vous permettra d&apos;obtenir un tarif précis adapté à votre situation spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;environnement. Les zones urbaines ou industrielles nécessitent des nettoyages plus fréquents en raison de l&apos;accumulation plus rapide de salissures et de pollution atmosphérique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur sécurisé implique l&apos;utilisation de techniques de cordage professionnel, un équipement de protection individuelle complet, une formation spécifique et le respect strict des normes de sécurité AFNOR et OPPBTP. Nos techniciens sont équipés de harnais, cordes techniques et systèmes antichute homologués.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Aubagne ?
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
