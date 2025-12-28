import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Saint-Sébastien-sur-Loire | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre spécialiste en gouttières et descentes pluviales à Saint-Sébastien-sur-Loire, protégeant votre habitat depuis plus de ',
  keywords: 'gouttiere saint-sébastien-sur-loire, pose gouttiere saint-sébastien-sur-loire, reparation gouttiere saint-sébastien-sur-loire, nettoyage gouttiere saint-sébastien-sur-loire, descente pluviale saint-sébastien-sur-loire, gouttiere bouchee saint-sébastien-sur-loire',
};

export default function GouttiereSaintSebastienSurLoirePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Saint-Sébastien-sur-Loire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre spécialiste en gouttières et descentes pluviales à Saint-Sébastien-sur-Loire, protégeant votre habitat depuis plus de 15 ans. Nous intervenons sur l&apos;ensemble des systèmes d&apos;évacuation des eaux pluviales avec une expertise technique et un engagement de qualité.</p>

        <h2>Nos services de gouttières et descentes pluviales a Saint-Sébastien-sur-Loire</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins des propriétaires de Saint-Sébastien-sur-Loire : installation, réparation, nettoyage et maintenance. Nous utilisons uniquement des matériaux haute résistance comme l&apos;aluminium et le zinc, garantissant une durabilité minimale de 20 ans. Notre processus débute par un diagnostic précis, permettant d&apos;identifier les points faibles de votre système d&apos;évacuation. Nos techniciens qualifiés réalisent ensuite une pose sur-mesure, avec une attention méticuleuse aux angles et fixations pour éviter tout risque de fuite.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 15 ans d&apos;expérience locale
- Devis gratuit et transparent sous 48h
- Interventions rapides, dans un délai maximum de 72h
- Garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ au mètre linéaire selon le matériau et la complexité de l&apos;installation. Pour une maison standard de 100m², comptez un budget global entre 800€ et 1500€, installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un jet d&apos;eau à haute pression. Retirez manuellement les feuilles et débris, puis nettoyez avec un produit désinfectant. En cas de difficulté, faites appel à un professionnel pour éviter tout dommage.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons deux nettoyages par an : un au printemps et un à l&apos;automne. Pour les zones très boisées de Saint-Sébastien-sur-Loire, un nettoyage supplémentaire peut être nécessaire pour prévenir l&apos;accumulation de feuilles et de mousse.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Saint-Sébastien-sur-Loire ?
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
