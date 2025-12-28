import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Orvault | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Orvault, offre des solutions professionnelles pour les immeuble',
  keywords: 'nettoyage vitres hauteur orvault, lavage vitres immeuble orvault, nettoyage facade vitree orvault, cordiste vitre orvault, entreprise nettoyage vitres orvault, nettoyage verriere orvault',
};

export default function NettoyageVitresHauteurOrvaultPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Orvault</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Orvault, offre des solutions professionnelles pour les immeubles, entreprises et particuliers. Nos experts cordistes transforment vos façades vitrées en surfaces éclatantes, garantissant propreté et sécurité.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Orvault</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes des bâtiments professionnels et résidentiels d&apos;Orvault. Nos techniciens hautement qualifiés utilisent des techniques de cordage professionnel permettant d&apos;intervenir sur des surfaces jusqu&apos;à 100 mètres de hauteur. Nous disposons d&apos;un équipement technique dernier cri, comprenant des harnais de sécurité homologués et des systèmes de nettoyage écologiques qui préservent l&apos;environnement. Chaque intervention est précédée d&apos;un diagnostic précis pour adapter notre approche, assurant un résultat impeccable et une efficacité maximale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : techniciens certifiés, matériel de pointe, respect des normes de sécurité, intervention rapide sur Orvault et ses environs. Nos 15 ans d&apos;expérience garantissent un service irréprochable, avec une moyenne de satisfaction client de 98%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par vitre selon la difficulté d&apos;accès, la hauteur et la surface. Pour un immeuble standard à Orvault, comptez environ 500€ à 1500€ pour un nettoyage complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition aux intempéries et la pollution. Les zones urbaines nécessitent généralement un nettoyage plus fréquent, idéalement au printemps et à l&apos;automne.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur impose des règles strictes : utilisation de harnais homologués, formation spécifique en techniques de cordage, vérification quotidienne du matériel, et respect du protocole de sécurité INRS. Seuls des professionnels certifiés peuvent réaliser ces interventions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Orvault ?
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
