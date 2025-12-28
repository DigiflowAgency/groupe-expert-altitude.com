import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a L\'Haÿ-les-Roses | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à L&apos;Haÿ-les-Roses, en proposant des solutions professionnelles et sécurisées pour',
  keywords: 'nettoyage vitres hauteur l'haÿ-les-roses, lavage vitres immeuble l'haÿ-les-roses, nettoyage facade vitree l'haÿ-les-roses, cordiste vitre l'haÿ-les-roses, entreprise nettoyage vitres l'haÿ-les-roses, nettoyage verriere l'haÿ-les-roses',
};

export default function NettoyageVitresHauteurLHayLesRosesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a L'Haÿ-les-Roses</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à L&apos;Haÿ-les-Roses, en proposant des solutions professionnelles et sécurisées pour tous vos bâtiments. Nos experts cordistes transforment vos facades vitrées en surfaces cristallines, avec une précision chirurgicale et un engagement total.</p>

        <h2>Nos services de nettoyage vitres en hauteur a L'Haÿ-les-Roses</h2>
        <div className="space-y-4">
          <p>Nos services de nettoyage de vitres en hauteur sont spécialement conçus pour répondre aux exigences techniques des immeubles et bâtiments tertiaires de L&apos;Haÿ-les-Roses. Nos techniciens hautement qualifiés utilisent des techniques de cordage professionnel permettant d&apos;atteindre les surfaces les plus difficiles d&apos;accès. Chaque intervention est précédée d&apos;une analyse complète des risques et des caractéristiques architecturales, garantissant une prestation sur-mesure. Nos équipements de dernière génération, combinés à une expertise de plus de 15 ans, nous permettent de traiter des surfaces allant de 50 à 5000 m² avec une efficacité remarquable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Certifications professionnelles en nettoyage de hauteur
✓ Équipements aux normes de sécurité européennes
✓ Intervention rapide sur L&apos;Haÿ-les-Roses et communes limitrophes
✓ Devis gratuit et personnalisé sous 24h
✓ 98% de satisfaction client garantie</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ le m², selon l&apos;accessibilité, la hauteur et la complexité de la surface. Pour un immeuble standard à L&apos;Haÿ-les-Roses, comptez environ 750€ à 1500€ pour un nettoyage complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition du bâtiment. Les immeubles en centre-ville ou exposés aux pollutions nécessitent un nettoyage plus fréquent, tandis que les bâtiments moins exposés peuvent se contenter de deux interventions annuelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur sécurisé implique l&apos;utilisation de systèmes antichute, de harnais homologués, de cordes techniques et le respect strict des normes INRS. Nos techniciens suivent annuellement des formations de sécurité et disposent des certifications requises pour intervenir en toute sécurité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a L'Haÿ-les-Roses ?
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
