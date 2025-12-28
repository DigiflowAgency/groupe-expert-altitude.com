import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Mérignac | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de gouttières et descentes pluviales à Mérignac et ses environs. Spécial',
  keywords: 'gouttiere mérignac, pose gouttiere mérignac, reparation gouttiere mérignac, nettoyage gouttiere mérignac, descente pluviale mérignac, gouttiere bouchee mérignac',
};

export default function GouttiereMerignacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Mérignac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de gouttières et descentes pluviales à Mérignac et ses environs. Spécialistes de la protection de votre habitat depuis plus de 15 ans, nous garantissons des solutions durables contre les infiltrations et les dégradations.</p>

        <h2>Nos services de gouttières et descentes pluviales a Mérignac</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité de vos besoins : installation, réparation, nettoyage et maintenance. Notre équipe technique intervient sur tous types de bâtiments à Mérignac, en utilisant des matériaux haut de gamme comme l&apos;aluminium, le zinc et le PVC. Nous réalisons un diagnostic précis avant chaque intervention, mesurant l&apos;inclinaison et la capacité d&apos;évacuation pour optimiser le système de drainage. Nos techniciens certifiés posent chaque année plus de 500 mètres linéaires de gouttières, avec une précision millimétrique garantissant une évacuation efficace des eaux pluviales. Notre approche sur-mesure permet de protéger durablement votre toiture contre les risques d&apos;infiltration et de remontées d&apos;humidité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos avantages : un devis gratuit sous 48h, des techniciens formés et certifiés, des matériaux garantis 10 ans, un service après-vente réactif. Nous sommes également spécialisés dans les solutions écologiques de récupération d&apos;eau de pluie.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ du mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Un diagnostic précis sur site nous permet de vous proposer un devis détaillé et transparent, sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un jet d&apos;eau à haute pression. Retirez manuellement les feuilles et débris, puis nettoyez avec un produit adapté. En cas de difficulté, notre équipe propose un service de débouchage professionnel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières au minimum deux fois par an : au printemps et à l&apos;automne. Dans les zones boisées de Mérignac, nous conseillons trois interventions annuelles pour éviter l&apos;accumulation de feuilles et de mousse.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Mérignac ?
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
