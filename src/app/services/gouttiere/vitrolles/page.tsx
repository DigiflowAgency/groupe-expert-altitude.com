import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Vitrolles | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Vitrolles et ses environs. Spé',
  keywords: 'gouttiere vitrolles, pose gouttiere vitrolles, reparation gouttiere vitrolles, nettoyage gouttiere vitrolles, descente pluviale vitrolles, gouttiere bouchee vitrolles',
};

export default function GouttiereVitrollesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Vitrolles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Vitrolles et ses environs. Spécialistes de la protection de votre habitat depuis plus de 15 ans, nous garantissons des solutions sur-mesure pour protéger efficacement votre toiture contre les intempéries.</p>

        <h2>Nos services de gouttières et descentes pluviales a Vitrolles</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins des propriétaires de Vitrolles : pose, réparation, nettoyage et maintenance. Notre équipe technique intervient avec du matériel haut de gamme, proposant des gouttières en aluminium, zinc ou PVC, parfaitement adaptées à chaque type d&apos;architecture. Nous réalisons un diagnostic précis avant toute intervention, évaluant la structure, les pentes et les contraintes spécifiques de votre toiture. Notre processus inclut un relevé technique, une proposition personnalisée et une installation garantissant une évacuation optimale des eaux pluviales. Chaque intervention est réalisée avec une précision millimétrique pour éviter les risques d&apos;infiltration et de dégradation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés, notre stock de matériaux est renouvelé régulièrement, et nous proposons une garantie de 10 ans sur nos installations. Nous intervenons rapidement sur Vitrolles, avec un délai moyen de 48h après votre première demande. Notre approche combine expertise technique et service client irréprochable.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ au mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Un devis précis sera établi après un diagnostic technique gratuit à votre domicile à Vitrolles.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un furet métallique ou un jet haute pression. Commencez par retirer les feuilles et débris manuellement, puis nettoyez en profondeur. En cas de difficulté, contactez un professionnel pour éviter d&apos;endommager la structure.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières deux fois par an : au printemps et à l&apos;automne. Dans les zones boisées de Vitrolles, une intervention supplémentaire peut être nécessaire pour prévenir les obstructions par les feuilles et les végétaux.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Vitrolles ?
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
