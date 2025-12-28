import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Paris 7e | Groupe Expert Altitude Com',
  description: 'Experts en gouttières et descentes pluviales, le Groupe Expert Altitude Com protège votre habitat parisien avec un savoir-faire précis. Spécialistes référe',
  keywords: 'gouttiere paris 7e, pose gouttiere paris 7e, reparation gouttiere paris 7e, nettoyage gouttiere paris 7e, descente pluviale paris 7e, gouttiere bouchee paris 7e',
};

export default function GouttiereParis7ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Paris 7e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Experts en gouttières et descentes pluviales, le Groupe Expert Altitude Com protège votre habitat parisien avec un savoir-faire précis. Spécialistes référents dans le 7e arrondissement, nous garantissons des solutions durables pour évacuer efficacement les eaux de pluie.</p>

        <h2>Nos services de gouttières et descentes pluviales a Paris 7e</h2>
        <div className="space-y-4">
          <p>Nos interventions sur gouttières couvrent l&apos;intégralité des besoins : installation, réparation et maintenance. Nous utilisons des matériaux haute qualité (zinc, aluminium, PVC) adaptés à chaque configuration architecturale parisienne. Notre équipe technique réalise un diagnostic complet avant toute intervention, évaluant l&apos;état de vos descentes pluviales et proposant des solutions sur-mesure. Nos techniciens maîtrisent les spécificités des immeubles du 7e arrondissement, garantissant une pose précise et esthétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans dans le traitement des gouttières parisiennes
- Interventions rapides sous 48h
- Techniciens certifiés et assurés
- Devis gratuit et transparent
- Solutions personnalisées respectant l&apos;architecture historique parisienne</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ du mètre linéaire, selon le matériau et la complexité de l&apos;installation. Pour un pavillon parisien standard du 7e, comptez environ 500-1200€ pour une installation complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un dégorgeoir, retirez manuellement les feuilles/débris, nettoyez avec un jet d&apos;eau à pression modérée. En cas de difficultés, contactez un professionnel pour éviter d&apos;endommager la structure.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons 2 nettoyages par an : idéalement en octobre après la chute des feuilles, et au printemps. Pour les zones très arborées de Paris, un nettoyage trimestriel peut être nécessaire.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Paris 7e ?
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
