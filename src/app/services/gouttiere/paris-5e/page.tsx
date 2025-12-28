import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Paris 5e | Groupe Expert Altitude Com',
  description: 'Spécialistes des gouttières et descentes pluviales, le Groupe Expert Altitude Com protège votre habitat parisien contre les risques d&apos;infiltration. Install',
  keywords: 'gouttiere paris 5e, pose gouttiere paris 5e, reparation gouttiere paris 5e, nettoyage gouttiere paris 5e, descente pluviale paris 5e, gouttiere bouchee paris 5e',
};

export default function GouttiereParis5ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Paris 5e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialistes des gouttières et descentes pluviales, le Groupe Expert Altitude Com protège votre habitat parisien contre les risques d&apos;infiltration. Installateurs et réparateurs experts, nous intervenons sur tout le 5e arrondissement avec une précision chirurgicale et un professionnalisme reconnu.</p>

        <h2>Nos services de gouttières et descentes pluviales a Paris 5e</h2>
        <div className="space-y-4">
          <p>Nos solutions complètes de gouttières couvrent l&apos;intégralité des besoins des propriétaires parisiens. Nous réalisons des installations sur-mesure, adaptées à l&apos;architecture unique du 5e arrondissement, en utilisant des matériaux haute résistance comme l&apos;aluminium et le zinc. Notre processus débute par un diagnostic précis, incluant une analyse de la structure du bâtiment et des spécificités pluviométriques locales. Nos techniciens qualifiés garantissent une pose parfaitement étanche, avec un alignement millimétré pour optimiser l&apos;écoulement des eaux et prévenir tout risque de stagnation ou de corrosion.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Plus de 15 ans d&apos;expérience exclusive sur Paris
✓ Interventions garanties sous 48h
✓ Devis gratuit et sans engagement
✓ Équipe certifiée et assurée
✓ Solutions techniques innovantes adaptées à chaque configuration architecturale</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ du mètre linéaire selon les matériaux et la complexité d&apos;installation. Pour un pavillon parisien standard du 5e, comptez environ 600-1200€ pour une installation complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un furet métallique ou un jet haute pression. Commencez par retirer manuellement les feuilles et débris, puis nettoyez avec un produit désinfectant. En cas de blocage persistant, contactez un professionnel pour éviter d&apos;endommager la structure.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons 2 nettoyages complets par an : idéalement en avril (après l&apos;hiver) et en novembre (avant les fortes pluies). Dans le 5e arrondissement, avec sa végétation urbaine dense, un nettoyage trimestriel peut être nécessaire pour garantir un écoulement optimal.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Paris 5e ?
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
