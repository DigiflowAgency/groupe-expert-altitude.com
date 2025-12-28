import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Ollioules | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Ollioules et ses environs. Nou',
  keywords: 'gouttiere ollioules, pose gouttiere ollioules, reparation gouttiere ollioules, nettoyage gouttiere ollioules, descente pluviale ollioules, gouttiere bouchee ollioules',
};

export default function GouttiereOllioulesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Ollioules</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Ollioules et ses environs. Nous protégeons votre habitat contre les risques d&apos;infiltration avec des solutions sur-mesure adaptées au climat méditerranéen.</p>

        <h2>Nos services de gouttières et descentes pluviales a Ollioules</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité de vos besoins : installation, réparation, nettoyage et maintenance. Notre équipe technique, spécialisée dans la gestion des systèmes d&apos;évacuation des eaux pluviales, intervient avec un équipement professionnel pour garantir une protection optimale de votre bâtiment. Nous proposons des gouttières en aluminium, zinc et PVC, parfaitement adaptées aux spécificités architecturales d&apos;Ollioules. Chaque intervention fait l&apos;objet d&apos;un diagnostic précis et d&apos;un devis détaillé, avec un taux de satisfaction client de 98%. Nos techniciens certifiés interviennent rapidement et efficacement, en respectant les normes techniques les plus exigeantes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;expertise et la qualité. Nous proposons des interventions rapides sous 48h, un diagnostic technique gratuit, un SAV garanti, et des solutions personnalisées. Notre connaissance du terrain à Ollioules nous permet d&apos;intervenir avec une réactivité et une précision uniques. 15 ans d&apos;expérience dans le traitement des systèmes pluviaux vous assurent un service irréprochable.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ du mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Un devis précis sera établi après un diagnostic technique gratuit sur votre propriété à Ollioules.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un jet d&apos;eau à haute pression. Retirez manuellement les feuilles et débris, puis nettoyez avec un produit adapté. En cas de difficulté, notre équipe peut intervenir rapidement.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage complet de vos gouttières deux fois par an : au printemps et à l&apos;automne. Dans la région d&apos;Ollioules, avec sa végétation importante, un nettoyage supplémentaire peut être nécessaire pour éviter les obstructions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Ollioules ?
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
