import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Blagnac | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste du nettoyage de vitres en hauteur à Blagnac, transforme l&apos;entretien de vos façades vitrées en une opération d',
  keywords: 'nettoyage vitres hauteur blagnac, lavage vitres immeuble blagnac, nettoyage facade vitree blagnac, cordiste vitre blagnac, entreprise nettoyage vitres blagnac, nettoyage verriere blagnac',
};

export default function NettoyageVitresHauteurBlagnacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Blagnac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste du nettoyage de vitres en hauteur à Blagnac, transforme l&apos;entretien de vos façades vitrées en une opération de précision et de sécurité. Nous intervenons sur les bâtiments les plus complexes de l&apos;agglomération toulousaine avec une expertise technique inégalée.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Blagnac</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes des professionnels et des syndics à Blagnac. Nos techniciens cordistes hautement qualifiés utilisent des techniques d&apos;escalade professionnelle pour atteindre les surfaces vitrées les plus difficiles d&apos;accès. Nous disposons d&apos;un équipement technique dernier cri permettant un nettoyage impeccable sans risque structural pour vos bâtiments. Notre processus inclut un diagnostic préalable, un nettoyage avec des produits écologiques et une finition sans trace, garantissant une transparence cristalline et une brillance remarquable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Certification en travaux verticaux avec plus de 15 ans d&apos;expérience
- Équipe de 8 cordistes experts spécialisés en nettoyage de façades
- Matériel aux normes de sécurité européennes
- Intervention rapide sur Blagnac et son agglomération
- Devis gratuit et personnalisé sous 24h</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ le m², selon l&apos;accessibilité et la hauteur. Pour un immeuble standard à Blagnac, comptez environ 800€ à 2500€ pour un nettoyage complet, avec un devis précis après diagnostic sur site.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition aux intempéries et à la pollution. Les immeubles en centre-ville ou près d&apos;axes routiers nécessitent un nettoyage plus fréquent, idéalement tous les 4 mois.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur implique des techniques de cordage professionnel, des harnais de sécurité homologués, des points d&apos;ancrage vérifiés et une formation continue aux risques. Nos techniciens sont équipés de systèmes antichute et suivent un protocole strict de sécurité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Blagnac ?
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
