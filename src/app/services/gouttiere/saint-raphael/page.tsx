import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Saint-Raphaël | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste en gouttières et descentes pluviales à Saint-Raphaël, protège votre habitat depuis plus de 15 ans contre les ',
  keywords: 'gouttiere saint-raphaël, pose gouttiere saint-raphaël, reparation gouttiere saint-raphaël, nettoyage gouttiere saint-raphaël, descente pluviale saint-raphaël, gouttiere bouchee saint-raphaël',
};

export default function GouttiereSaintRaphaelPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Saint-Raphaël</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste en gouttières et descentes pluviales à Saint-Raphaël, protège votre habitat depuis plus de 15 ans contre les risques d&apos;infiltration. Nous sommes les experts locaux qui garantissent une protection optimale de votre toiture dans le var.</p>

        <h2>Nos services de gouttières et descentes pluviales a Saint-Raphaël</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins sur Saint-Raphaël et ses environs. Nous proposons une installation professionnelle de systèmes de drainage adaptés à chaque configuration architecturale, en utilisant des matériaux haute résistance comme l&apos;aluminium et le zinc. Notre processus comprend un diagnostic précis, des recommandations personnalisées et une pose minutieuse, assurant une évacuation parfaite des eaux pluviales. Nos techniciens qualifiés interviennent rapidement pour prévenir les risques d&apos;humidité et de dégradation structurelle, avec une attention particulière aux spécificités climatiques de la région.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos avantages clés : intervention sous 48h, devis gratuit et détaillé, équipe certifiée avec plus de 15 ans d&apos;expérience, utilisation de matériaux garantis 10 ans, et une connaissance approfondie des normes techniques locales. Nous sommes votre partenaire fiable pour la protection de votre habitat.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 60€ au mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Un diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis adapté à votre configuration spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un jet d&apos;eau à haute pression. Retirez manuellement les feuilles et débris, puis nettoyez avec un produit adapté. En cas de difficulté, notre équipe à Saint-Raphaël reste à votre disposition pour une intervention professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières deux fois par an, idéalement au printemps et à l&apos;automne. Dans notre région méditerranéenne, une vigilance supplémentaire est conseillée en raison de la végétation dense qui peut rapidement les obstruer.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Saint-Raphaël ?
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
