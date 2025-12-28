import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Fréjus | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Fréjus. Spécialistes de la protec',
  keywords: 'gouttiere fréjus, pose gouttiere fréjus, reparation gouttiere fréjus, nettoyage gouttiere fréjus, descente pluviale fréjus, gouttiere bouchee fréjus',
};

export default function GouttiereFrejusPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Fréjus</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Fréjus. Spécialistes de la protection de votre habitat contre les intempéries, nous intervenons rapidement et efficacement sur l&apos;ensemble du territoire varois.</p>

        <h2>Nos services de gouttières et descentes pluviales a Fréjus</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins de protection et de maintenance de votre habitat. Nous proposons une installation sur-mesure, adaptée à chaque type de toiture et de configuration architecturale. Notre équipe qualifiée utilise uniquement des matériaux de haute qualité - aluminium, zinc, PVC - garantissant une durabilité maximale de 20 à 30 ans. Chaque intervention comprend un diagnostic précis, un devis transparent et une mise en œuvre professionnelle, avec une attention particulière aux spécificités climatiques de Fréjus et sa région.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés et disposent de plus de 15 ans d&apos;expérience. Nous garantissons un délai d&apos;intervention de 48h, un service après-vente impeccable et des solutions 100% personnalisées. Notre engagement qualité se traduit par des installations durables et une protection optimale de votre patrimoine.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ du mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Un devis gratuit vous permettra d&apos;obtenir un tarif précis adapté à votre configuration spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un jet d&apos;eau à haute pression. Retirez manuellement les feuilles et débris, puis utilisez un produit désinfectant. En cas de difficulté, notre équipe à Fréjus peut intervenir rapidement.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières deux fois par an : au printemps et à l&apos;automne. Dans des zones très boisées, nous conseillons jusqu&apos;à 3 nettoyages annuels pour prévenir tout risque d&apos;obstruction ou de dommage.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Fréjus ?
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
