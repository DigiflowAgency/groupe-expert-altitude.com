import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Marignane | Groupe Expert Altitude Com',
  description: 'Expert Altitude Com est votre partenaire de référence en gouttières et descentes pluviales sur Marignane et ses environs. Nous protégeons votre habitat con',
  keywords: 'gouttiere marignane, pose gouttiere marignane, reparation gouttiere marignane, nettoyage gouttiere marignane, descente pluviale marignane, gouttiere bouchee marignane',
};

export default function GouttiereMarignanePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Marignane</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Expert Altitude Com est votre partenaire de référence en gouttières et descentes pluviales sur Marignane et ses environs. Nous protégeons votre habitat contre les risques d&apos;infiltration avec des solutions sur-mesure adaptées au climat méditerranéen.</p>

        <h2>Nos services de gouttières et descentes pluviales a Marignane</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité de vos besoins : installation, réparation et maintenance. À Marignane, nous comprenons les contraintes climatiques spécifiques qui nécessitent des équipements de drainage performants. Notre équipe qualifiée intervient avec du matériel haut de gamme, proposant des gouttières en zinc, aluminium ou PVC, parfaitement intégrées à votre architecture. Nous réalisons un diagnostic précis avant chaque intervention, garantissant une pose optimale et une évacuation efficace des eaux pluviales. Nos techniciens maîtrisent les techniques les plus récentes pour assurer une protection durable de votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Expert Altitude Com, c&apos;est opter pour la qualité et la fiabilité. Nos 15 ans d&apos;expérience nous permettent d&apos;offrir un service clé en main. Nous possédons tous les agréments nécessaires, intervenons sous 48h et proposons une garantie de 5 ans sur nos installations. Notre équipe est formée en continu aux dernières normes techniques et environnementales.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ le mètre linéaire selon le matériau choisi. Un devis personnalisé gratuit vous sera systématiquement proposé après un diagnostic précis de votre toiture.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un furet flexible, nettoyez avec un jet d&apos;eau sous pression et retirez manuellement les débris. En cas de difficulté, notre équipe peut intervenir rapidement à Marignane.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières deux fois par an : au printemps et à l&apos;automne. Dans notre région, une inspection supplémentaire après les périodes de fortes pluies est conseillée pour prévenir tout risque d&apos;obstruction.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Marignane ?
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
