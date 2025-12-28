import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Ramonville-Saint-Agne | Groupe Expert Altitude Com',
  description: 'Besoin d\'un nettoyage vitres en hauteur a Ramonville-Saint-Agne ? Groupe Expert Altitude Com, specialiste depuis plus de 10 ans. Devis gratuit sous 24h.',
  keywords: 'nettoyage vitres hauteur ramonville-saint-agne, lavage vitres immeuble ramonville-saint-agne, nettoyage facade vitree ramonville-saint-agne, cordiste vitre ramonville-saint-agne, entreprise nettoyage vitres ramonville-saint-agne, nettoyage verriere ramonville-saint-agne',
};

export default function NettoyageVitresHauteurRamonvilleSaintAgnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Ramonville-Saint-Agne</h1>

      <section className="prose max-w-none mb-8">
        <h2>Nos services de nettoyage vitres en hauteur a Ramonville-Saint-Agne</h2>
        <p>
          Groupe Expert Altitude Com intervient a Ramonville-Saint-Agne et ses environs pour tous vos besoins en nettoyage vitres en hauteur.
          Nos experts qualifies vous accompagnent dans vos projets avec professionnalisme et efficacite.
        </p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Contactez-nous pour obtenir une reponse personnalisee a votre question.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Contactez-nous pour obtenir une reponse personnalisee a votre question.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Contactez-nous pour obtenir une reponse personnalisee a votre question.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Ramonville-Saint-Agne ?
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
