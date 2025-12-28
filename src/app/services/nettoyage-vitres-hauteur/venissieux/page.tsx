import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Vénissieux | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Vénissieux, offrant une expertise unique pour des façades impeccables et sécuri',
  keywords: 'nettoyage vitres hauteur vénissieux, lavage vitres immeuble vénissieux, nettoyage facade vitree vénissieux, cordiste vitre vénissieux, entreprise nettoyage vitres vénissieux, nettoyage verriere vénissieux',
};

export default function NettoyageVitresHauteurVenissieuxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Vénissieux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Vénissieux, offrant une expertise unique pour des façades impeccables et sécurisées. Nos techniques professionnelles transforment l&apos;entretien des surfaces vitrées en véritable performance technique.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Vénissieux</h2>
        <div className="space-y-4">
          <p>Spécialistes du nettoyage de vitres en hauteur, nous intervenons sur tous types de bâtiments à Vénissieux : immeubles, bureaux, copropriétés et sites industriels. Notre équipe de cordistes hautement qualifiés utilise des techniques d&apos;alpinisme industriel permettant un nettoyage précis et sans risque. Chaque intervention est personnalisée, avec un diagnostic technique préalable garantissant une propreté optimale et une protection maximale des surfaces vitrées. Nos équipements de pointe, conformes aux normes de sécurité les plus strictes, nous permettent d&apos;atteindre les zones les plus difficiles d&apos;accès.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Techniciens certifiés avec plus de 15 ans d&apos;expérience 
✓ Techniques d&apos;alpinisme industriel brevetées 
✓ Matériel high-tech dernière génération 
✓ Interventions 100% sécurisées 
✓ Devis gratuit sous 24h 
✓ Satisfaction client garantie à Vénissieux et ses environs</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ au m², selon l&apos;accessibilité et la hauteur. Pour un immeuble moyen à Vénissieux, comptez entre 500€ et 2500€ pour un nettoyage complet. Un devis personnalisé vous permettra d&apos;obtenir un tarif précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;environnement. Les zones urbaines ou industrielles nécessitent un nettoyage plus fréquent à cause de la pollution. Un entretien semestriel est généralement suffisant pour maintenir une apparence impeccable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Notre processus sécurisé inclut : équipement anti-chute homologué, formation continue en sécurité, vérification systématique du matériel, protocole d&apos;intervention strict, assurance responsabilité professionnelle. Nos cordistes sont certifiés IRATA et respectent scrupuleusement les normes de sécurité françaises.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Vénissieux ?
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
