import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a La Garde | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialiste du nettoyage de vitres en hauteur sur La Garde et ses environs, propose des solutions professionne',
  keywords: 'nettoyage vitres hauteur la garde, lavage vitres immeuble la garde, nettoyage facade vitree la garde, cordiste vitre la garde, entreprise nettoyage vitres la garde, nettoyage verriere la garde',
};

export default function NettoyageVitresHauteurLaGardePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a La Garde</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialiste du nettoyage de vitres en hauteur sur La Garde et ses environs, propose des solutions professionnelles et sécurisées pour tous vos besoins en nettoyage de surfaces vitrées complexes.</p>

        <h2>Nos services de nettoyage vitres en hauteur a La Garde</h2>
        <div className="space-y-4">
          <p>Notre expertise en nettoyage de vitres en hauteur répond aux exigences les plus strictes des professionnels et particuliers de La Garde. Nos techniciens cordistes hautement qualifiés utilisent des techniques d&apos;accès sur cordes permettant d&apos;intervenir sur les facades vitrées les plus difficiles d&apos;accès. Nous maîtrisons parfaitement les techniques de nettoyage des immeubles, vérandas et façades commerciales, garantissant un résultat impeccable et une transparence totale. Notre équipement technique ultramoderne nous permet d&apos;intervenir rapidement et efficacement, avec un taux de satisfaction client de plus de 95%.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Équipe de cordistes certifiés et expérimentés
✓ Matériel professionnel aux normes de sécurité les plus récentes
✓ Intervention rapide sur tout le secteur de La Garde
✓ Devis gratuit et personnalisé sous 24h
✓ Respect total des réglementations de sécurité en hauteur</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif de nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par m², selon la hauteur, l&apos;accessibilité et la complexité de l&apos;intervention. Un devis précis sera établi après un diagnostic technique sur site.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour un immeuble ou bâtiment professionnel, nous recommandons un nettoyage complet des vitres 2 à 4 fois par an, selon l&apos;exposition et l&apos;environnement. Les zones très exposées à la pollution peuvent nécessiter des interventions plus fréquentes.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nos techniciens utilisent un équipement de protection individuelle complet, des systèmes d&apos;ancrage certifiés, des cordes homologuées et suivent des protocoles stricts de sécurité conformes à la réglementation OPPBTP pour garantir des interventions 100% sécurisées.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a La Garde ?
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
