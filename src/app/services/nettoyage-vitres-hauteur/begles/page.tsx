import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Bègles | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Bègles, vous offre une expertise unique pour des surfaces vitré',
  keywords: 'nettoyage vitres hauteur bègles, lavage vitres immeuble bègles, nettoyage facade vitree bègles, cordiste vitre bègles, entreprise nettoyage vitres bègles, nettoyage verriere bègles',
};

export default function NettoyageVitresHauteurBeglesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Bègles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Bègles, vous offre une expertise unique pour des surfaces vitrées impeccables. Nos techniques professionnelles garantissent un résultat brillant et sécurisé pour tous vos bâtiments, des immeubles résidentiels aux locaux commerciaux.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Bègles</h2>
        <div className="space-y-4">
          <p>Nos services de nettoyage de vitres en hauteur représentent la solution ultime pour les propriétés de Bègles nécessitant un entretien professionnel. Nos techniciens cordistes hautement qualifiés utilisent des équipements de pointe pour nettoyer les facades vitrées complexes, en respectant les normes de sécurité les plus strictes. Chaque intervention est personnalisée, avec un diagnostic précis des surfaces à traiter et un nettoyage en profondeur qui préserve l&apos;intégrité de vos vitrages. Nous intervenons sur tous types de bâtiments, des immeubles de 3 étages aux grandes verrières industrielles, avec une efficacité et une précision remarquables.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre entreprise se démarque par son expertise technique unique. Nous possédons plus de 15 ans d&apos;expérience en nettoyage de vitres complexes, une équipe certifiée travaux en hauteur, et un taux de satisfaction client de 98%. Nos techniciens sont équipés des dernières technologies et suivent annuellement des formations de sécurité avancées. Nous garantissons un service rapide, précis et totalement sécurisé.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par m², selon la complexité d&apos;accès, la hauteur et le type de bâtiment. Pour un immeuble standard à Bègles, comptez environ 350-600€ pour un nettoyage complet des facades vitrées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;environnement. Les zones urbaines ou industrielles nécessitent un nettoyage plus fréquent, tandis que les zones résidentielles peuvent se contenter de 2 interventions annuelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage de vitres en hauteur requiert des équipements spécifiques : harnais de sécurité, systèmes antichute, cordes professionnelles homologuées. Nos techniciens sont certifiés IRATA et respectent scrupuleusement les protocoles de sécurité OPPBTP pour garantir une intervention sans risque.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Bègles ?
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
