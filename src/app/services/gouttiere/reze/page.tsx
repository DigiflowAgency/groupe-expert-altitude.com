import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Rezé | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour tous vos travaux de gouttières et descentes pluviales à Rezé et ses environs. Nous protég',
  keywords: 'gouttiere rezé, pose gouttiere rezé, reparation gouttiere rezé, nettoyage gouttiere rezé, descente pluviale rezé, gouttiere bouchee rezé',
};

export default function GouttiereRezePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Rezé</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour tous vos travaux de gouttières et descentes pluviales à Rezé et ses environs. Nous protégeons votre habitat contre les risques d&apos;infiltration avec des solutions sur-mesure et une expertise technique irréprochable.</p>

        <h2>Nos services de gouttières et descentes pluviales a Rezé</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité de vos besoins : installation, réparation, nettoyage et entretien. Notre équipe de professionnels qualifiés intervient sur tous types de bâtiments, qu&apos;il s&apos;agisse de pavillons, immeubles ou locaux commerciaux. Nous utilisons uniquement des matériaux de haute qualité - zinc, aluminium, PVC - garantissant une durabilité maximale et une parfaite étanchéité. Notre processus d&apos;intervention débute par un diagnostic précis, permettant d&apos;identifier vos besoins spécifiques et de proposer la solution technique la plus adaptée. Chaque installation est réalisée avec une précision millimétrique, en respectant les normes techniques et esthétiques les plus exigeantes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Pourquoi nous choisir ? Notre différence réside dans notre expertise locale à Rezé, notre réactivité (intervention sous 48h), notre devis gratuit et détaillé, et notre garantie décennale. 95% de nos clients nous recommandent, preuve de notre engagement qualité. Nos techniciens sont formés annuellement aux dernières techniques d&apos;installation et de réparation.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ au mètre linéaire selon le matériau choisi. Un pavillon standard de 100m² nécessite environ 20-25 mètres linéaires. Nous proposons un devis personnalisé après diagnostic précis, sans frais et sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un jet d&apos;eau à haute pression. Retirez manuellement les feuilles et débris. En cas de bouchon tenace, utilisez un produit désembouant spécifique. Pour les interventions complexes, notre équipe est à votre disposition.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières deux fois par an : au printemps et à l&apos;automne. Dans les zones boisées de Rezé, nous conseillons un nettoyage trimestriel pour éviter l&apos;accumulation de feuilles et de mousse qui peuvent provoquer des obstructions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Rezé ?
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
