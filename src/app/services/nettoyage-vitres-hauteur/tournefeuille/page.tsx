import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Tournefeuille | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Tournefeuille, en proposant des solutions professionnelles et sécurisées pour t',
  keywords: 'nettoyage vitres hauteur tournefeuille, lavage vitres immeuble tournefeuille, nettoyage facade vitree tournefeuille, cordiste vitre tournefeuille, entreprise nettoyage vitres tournefeuille, nettoyage verriere tournefeuille',
};

export default function NettoyageVitresHauteurTournefeuillePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Tournefeuille</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Tournefeuille, en proposant des solutions professionnelles et sécurisées pour tous vos bâtiments. Nos techniciens cordistes transforment l&apos;entretien de vos surfaces vitrées en une prestation impeccable et sans risque.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Tournefeuille</h2>
        <div className="space-y-4">
          <p>Spécialisés dans le nettoyage de vitres en hauteur, nous intervenons sur tous types de bâtiments à Tournefeuille et ses environs. Notre équipe de cordistes hautement qualifiés utilise des techniques d&apos;escalade professionnelle pour atteindre les surfaces les plus complexes, garantissant un nettoyage total et précis. Nous disposons d&apos;équipements homologués et de techniques innovantes permettant de traiter les facades vitrées, vérandas et immeubles de grande hauteur avec une efficacité remarquable. Notre process intègre une évaluation préalable des risques, un nettoyage écologique et un contrôle qualité systématique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Chez Groupe Expert Altitude Com, nous nous distinguons par notre expertise technique, notre engagement sécuritaire et notre professionnalisme. Nos cordistes sont certifiés, notre matériel est aux normes et nous proposons une garantie satisfaction. Avec plus de 15 ans d&apos;expérience, nous intervenons sur des chantiers complexes en toute tranquillité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ le m², selon l&apos;accessibilité, la hauteur et la complexité de la surface. Pour un devis précis, nous réalisons systématiquement un diagnostic gratuit sur site à Tournefeuille.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;environnement. Les zones urbaines ou industrielles nécessitent un nettoyage plus fréquent en raison de l&apos;accumulation de pollution et de particules.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nos experts utilisent des techniques de cordage professionnel, des harnais de sécurité homologués, et suivent des protocoles stricts de prévention des risques. Chaque intervention fait l&apos;objet d&apos;une évaluation précise des conditions de sécurité avant démarrage.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Tournefeuille ?
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
