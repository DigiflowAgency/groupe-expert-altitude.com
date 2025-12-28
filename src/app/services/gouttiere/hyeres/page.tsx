import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Hyères | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste en gouttières et descentes pluviales à Hyères, protège votre habitat contre les risques d&apos;infiltration. Nous ',
  keywords: 'gouttiere hyères, pose gouttiere hyères, reparation gouttiere hyères, nettoyage gouttiere hyères, descente pluviale hyères, gouttiere bouchee hyères',
};

export default function GouttiereHyeresPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Hyères</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste en gouttières et descentes pluviales à Hyères, protège votre habitat contre les risques d&apos;infiltration. Nous intervenons sur toute la région varoise avec des solutions sur-mesure pour préserver la structure et l&apos;esthétique de votre maison.</p>

        <h2>Nos services de gouttières et descentes pluviales a Hyères</h2>
        <div className="space-y-4">
          <p>Nos experts en gouttières proposent un service complet allant de l&apos;installation à la maintenance. Chaque intervention est précédée d&apos;un diagnostic technique précis pour identifier vos besoins spécifiques. Nous utilisons des matériaux haute qualité (zinc, aluminium, PVC) parfaitement adaptés au climat méditerranéen de Hyères. Notre processus inclut un relevé technique, une proposition personnalisée, et une installation garantissant une évacuation optimale des eaux pluviales. Nos techniciens certifiés interviennent avec un équipement professionnel, assurant une pose rapide et un résultat impeccable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à Hyères
- Techniciens certifiés et formés en continu
- Devis gratuit et transparent sous 48h
- Matériaux garantis 10 ans
- Intervention rapide et sur-mesure
- SAV et maintenance préventive</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ du mètre linéaire selon le matériau choisi. Un pavillon standard de 100m² nécessite environ 20-25 mètres linéaires, soit un budget global entre 500€ et 1125€ installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un tuyau haute pression. Retirez manuellement les feuilles et débris, puis rincez à l&apos;eau. En cas de bouchon tenace, utilisez un produit désinfectant adapté ou faites appel à un professionnel pour éviter tout dommage.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons deux nettoyages par an : un au printemps après la période de chute de feuilles, et un à l&apos;automne avant l&apos;arrivée des pluies. Pour les zones très boisées à Hyères, un nettoyage trimestriel peut être nécessaire pour garantir un écoulement optimal.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Hyères ?
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
