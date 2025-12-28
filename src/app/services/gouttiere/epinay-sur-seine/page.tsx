import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Épinay-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Épinay-sur-Seine. Nous protégeons',
  keywords: 'gouttiere épinay-sur-seine, pose gouttiere épinay-sur-seine, reparation gouttiere épinay-sur-seine, nettoyage gouttiere épinay-sur-seine, descente pluviale épinay-sur-seine, gouttiere bouchee épinay-sur-seine',
};

export default function GouttiereEpinaySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Épinay-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Épinay-sur-Seine. Nous protégeons votre habitat contre les risques d&apos;infiltration avec des solutions sur-mesure adaptées à l&apos;architecture de votre région.</p>

        <h2>Nos services de gouttières et descentes pluviales a Épinay-sur-Seine</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins : installation, réparation et maintenance. À Épinay-sur-Seine, nous intervenons sur tous types de bâtiments, qu&apos;il s&apos;agisse de maisons individuelles ou de copropriétés. Notre équipe qualifiée utilise des matériaux de haute qualité - zinc, aluminium, PVC - garantissant une durabilité minimale de 15 ans. Nous réalisons un diagnostic précis avant chaque intervention, évaluant la structure, les pentes et les spécificités de votre toiture pour proposer une solution technique optimale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés avec plus de 10 ans d&apos;expérience
- Devis gratuit et détaillé sous 48h
- Interventions rapides sur Épinay-sur-Seine et communes limitrophes
- Matériaux garantis et pose selon les normes NF</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ du mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Un pavillon standard nécessite généralement entre 10 et 15 mètres linéaires.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un dégorgeoir, retirez manuellement les débris, puis nettoyez à l&apos;eau sous pression. En cas de difficulté, contactez un professionnel pour éviter d&apos;endommager la structure.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage complet des gouttières deux fois par an : au printemps et à l&apos;automne. Dans les zones boisées d&apos;Épinay-sur-Seine, une intervention supplémentaire peut être nécessaire.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Épinay-sur-Seine ?
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
