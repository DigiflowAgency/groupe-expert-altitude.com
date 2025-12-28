import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Colombes | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Colombes et dans les Hauts-de-Sei',
  keywords: 'gouttiere colombes, pose gouttiere colombes, reparation gouttiere colombes, nettoyage gouttiere colombes, descente pluviale colombes, gouttiere bouchee colombes',
};

export default function GouttiereColombesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Colombes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Colombes et dans les Hauts-de-Seine. Nous protégeons votre habitat contre les risques d&apos;infiltration grâce à notre expertise technique et notre intervention rapide.</p>

        <h2>Nos services de gouttières et descentes pluviales a Colombes</h2>
        <div className="space-y-4">
          <p>Nos solutions professionnelles de gouttières couvrent l&apos;intégralité de vos besoins : installation, réparation, nettoyage et maintenance. Nous intervenons sur tous types de bâtiments - maisons individuelles, copropriétés et locaux commerciaux - avec un diagnostic précis et personnalisé. Notre équipe utilise des matériaux haute qualité (zinc, aluminium, PVC) garantissant une durabilité jusqu&apos;à 30 ans. Chaque intervention commence par un état des lieux technique, permettant de proposer une solution sur-mesure adaptée à la configuration de votre toiture et au climat spécifique de Colombes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence : une expertise locale de 15 ans, des techniciens certifiés, un devis gratuit sous 48h, une intervention rapide et un service après-vente garanti. Nous sommes également engagés dans une démarche éco-responsable, en recyclant 95% de nos matériaux et en privilégiant des solutions durables.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ au mètre linéaire selon le matériau choisi. Un pavillon standard nécessite généralement 15-20 mètres linéaires, pour un budget total entre 450€ et 1600€. Nos devis détaillés incluent le matériel, la main-d&apos;œuvre et la pose.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un furet métallique ou un jet haute pression. Commencez par retirer manuellement les feuilles et débris, puis nettoyez avec un produit adapté. En cas de difficulté, notre équipe de Colombes intervient rapidement pour éviter tous risques d&apos;infiltration.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons deux nettoyages par an : au printemps et à l&apos;automne. À Colombes, avec la présence importante d&apos;arbres, un nettoyage supplémentaire peut être nécessaire. Un entretien régulier permet de prévenir 80% des problèmes d&apos;évacuation et de préserver la structure de votre toiture.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Colombes ?
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
