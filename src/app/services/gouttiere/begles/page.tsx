import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Bègles | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialiste des gouttières et descentes pluviales à Bègles et ses environs. Nous protégeons votre habitat cont',
  keywords: 'gouttiere bègles, pose gouttiere bègles, reparation gouttiere bègles, nettoyage gouttiere bègles, descente pluviale bègles, gouttiere bouchee bègles',
};

export default function GouttiereBeglesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Bègles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialiste des gouttières et descentes pluviales à Bègles et ses environs. Nous protégeons votre habitat contre les risques d&apos;infiltration et d&apos;humidité grâce à des solutions techniques sur-mesure adaptées à chaque configuration de toiture.</p>

        <h2>Nos services de gouttières et descentes pluviales a Bègles</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins des particuliers et professionnels de Bègles : installation, réparation, nettoyage et maintenance préventive. Notre équipe technique intervient avec du matériel haut de gamme, proposant des gouttières en zinc, aluminium ou PVC, parfaitement intégrées à votre architecture. Nous réalisons un diagnostic précis avant toute intervention, garantissant une évacuation optimale des eaux pluviales et préservant l&apos;intégrité de votre bâtiment. Nos techniciens certifiés maîtrisent tous les systèmes de descentes pluviales, avec une moyenne de 95% de satisfaction client.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;expertise et la qualité. Nous intervenons sous 48h, proposons un devis gratuit, utilisons des matériaux certifiés NF, et disposons d&apos;une assurance décennale. Notre connaissance approfondie des spécificités climatiques de la région bordelaise nous permet de proposer des solutions durables et performantes.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ au mètre linéaire selon le matériau choisi. Un linéaire standard de 10 mètres coûtera donc entre 300€ et 800€, installation comprise. Les gouttières en aluminium restent le meilleur compromis qualité-prix.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un furet métallique. Commencez par retirer les feuilles et débris manuellement, puis nettoyez à l&apos;aide d&apos;un jet d&apos;eau sous pression. En cas de bouchon résistant, utilisez un produit désoxydant spécifique ou contactez un professionnel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer ses gouttières au minimum deux fois par an : au printemps et à l&apos;automne. Dans les zones boisées de Bègles, une intervention trimestrielle peut être nécessaire pour éviter l&apos;accumulation de feuilles et de mousse.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Bègles ?
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
