import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Paris 9e | Groupe Expert Altitude Com',
  description: 'Situé au cœur de Paris 9e, le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales. Nous',
  keywords: 'gouttiere paris 9e, pose gouttiere paris 9e, reparation gouttiere paris 9e, nettoyage gouttiere paris 9e, descente pluviale paris 9e, gouttiere bouchee paris 9e',
};

export default function GouttiereParis9ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Paris 9e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Situé au cœur de Paris 9e, le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales. Nous protégeons votre habitat contre les risques d&apos;infiltration avec des solutions sur-mesure et une expertise technique irréprochable.</p>

        <h2>Nos services de gouttières et descentes pluviales a Paris 9e</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité de vos besoins : installation, réparation et maintenance. Nous intervenons sur tous types de bâtiments, des immeubles haussmanniens du 9e arrondissement aux pavillons modernes. Notre équipe qualifiée utilise uniquement des matériaux de haute qualité (zinc, aluminium, PVC) garantissant une durabilité maximale. Chaque intervention commence par un diagnostic précis, permettant d&apos;identifier les points faibles et de proposer une solution technique adaptée. Nous respectons scrupuleusement les normes techniques et esthétiques, assurant une protection optimale contre les eaux pluviales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Plus de 15 ans d&apos;expertise à Paris 9e
✓ Techniciens certifiés et formés en continu
✓ Devis gratuit et transparent
✓ Interventions rapides sous 48h
✓ Garantie décennale sur tous nos travaux
✓ Matériels et techniques dernière génération</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ du mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Pour un pavillon standard à Paris 9e, comptez entre 600€ et 1500€ pour une installation complète. Nous proposons systématiquement un devis détaillé sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un furet métallique ou un jet haute pression. Commencez par retirer les débris visibles, puis nettoyez l&apos;intérieur avec un outil adapté. En cas de difficulté, contactez un professionnel pour éviter d&apos;endommager la gouttière.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières deux fois par an : au printemps et à l&apos;automne. Dans les zones très arborées de Paris 9e, une intervention supplémentaire peut être nécessaire. Un nettoyage régulier permet d&apos;éviter les engorgements et les dégradations structurelles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Paris 9e ?
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
