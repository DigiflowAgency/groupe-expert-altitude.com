import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Drancy | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Drancy et ses environs. Protégez ',
  keywords: 'gouttiere drancy, pose gouttiere drancy, reparation gouttiere drancy, nettoyage gouttiere drancy, descente pluviale drancy, gouttiere bouchee drancy',
};

export default function GouttiereDrancyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Drancy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Drancy et ses environs. Protégez efficacement votre habitat contre les risques d&apos;infiltration grâce à notre expertise technique et notre service sur-mesure.</p>

        <h2>Nos services de gouttières et descentes pluviales a Drancy</h2>
        <div className="space-y-4">
          <p>Nos solutions professionnelles de gouttières couvrent l&apos;intégralité de vos besoins : installation, réparation et maintenance. Notre équipe qualifiée intervient sur tous types de bâtiments, des pavillons aux immeubles collectifs de Drancy. Nous utilisons uniquement des matériaux haute qualité comme l&apos;aluminium et le zinc, garantissant une durabilité minimale de 20 ans. Notre processus comprend un diagnostic précis, des recommandations personnalisées et une installation minutieuse respectant les normes techniques actuelles.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Plus de 15 ans d&apos;expérience en installation de gouttières
✓ Techniciens certifiés et formés en permanence
✓ Devis gratuit et sans engagement
✓ Interventions rapides sur Drancy et le département
✓ Garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ le mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Un pavillon standard de 100m² nécessite généralement entre 15 et 25 mètres linéaires, pour un budget total oscillant entre 450€ et 2000€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez d&apos;abord un jet d&apos;eau puissant. Ensuite, employez un câble plombier ou un furet pour déloger les débris. En cas d&apos;obstruction tenace, utilisez un produit déboucheur spécifique. Pour les interventions complexes, notre équipe de Drancy reste à votre disposition.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons deux nettoyages complets par an : au printemps et à l&apos;automne. Ces périodes correspondent aux chutes de feuilles et aux conditions météorologiques changeantes. Un nettoyage trimestriel est idéal pour les zones très exposées aux végétaux ou dans des environnements particulièrement encombrants.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Drancy ?
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
