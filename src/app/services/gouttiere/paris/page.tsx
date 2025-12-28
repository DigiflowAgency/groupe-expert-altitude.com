import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Paris | Groupe Expert Altitude Com',
  description: 'Expert Altitude Com, votre spécialiste en gouttières et descentes pluviales à Paris, protège votre habitat contre les risques d&apos;infiltration depuis plus de',
  keywords: 'gouttiere paris, pose gouttiere paris, reparation gouttiere paris, nettoyage gouttiere paris, descente pluviale paris, gouttiere bouchee paris',
};

export default function GouttiereParisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Paris</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Expert Altitude Com, votre spécialiste en gouttières et descentes pluviales à Paris, protège votre habitat contre les risques d&apos;infiltration depuis plus de 15 ans. Nous intervenons sur l&apos;ensemble de la région parisienne pour garantir la performance et la longévité de vos systèmes d&apos;évacuation des eaux pluviales.</p>

        <h2>Nos services de gouttières et descentes pluviales a Paris</h2>
        <div className="space-y-4">
          <p>Nos solutions complètes de gouttières couvrent l&apos;installation, la réparation et l&apos;entretien pour tous types de bâtiments parisiens. Notre équipe technique qualifiée réalise un diagnostic précis avant chaque intervention, en évaluant la structure, les matériaux et les spécificités architecturales. Nous proposons des gouttières sur-mesure en zinc, aluminium ou PVC, parfaitement adaptées aux contraintes urbaines parisiennes. Notre processus inclut un relevé métrique précis, une pose professionnelle avec des fixations garantissant une étanchéité maximale et un test complet de ruissellement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Expert Altitude Com, c&apos;est opter pour : une expertise technique reconnue, des techniciens certifiés, un devis gratuit sous 48h, des matériaux haute durabilité, une intervention rapide sur Paris et sa proche banlieue, et une garantie décennale sur nos installations. Nos 95% de clients satisfaits témoignent de notre engagement qualité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ par mètre linéaire selon le matériau et la complexité d&apos;installation. Pour une maison parisienne moyenne de 10 mètres linéaires, comptez un budget global entre 400€ et 800€, installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un dégorgeoir, retirez manuellement les débris, nettoyez avec un jet d&apos;eau haute pression. En cas de bouchon persistant, utilisez un furet métallique. Portez des gants et sécurisez votre échelle. Pour les cas complexes, faites appel à un professionnel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage des gouttières est recommandé 2 fois par an : au printemps et à l&apos;automne. Dans l&apos;environnement parisien avec beaucoup de végétation, une vérification trimestrielle est conseillée pour prévenir l&apos;accumulation de feuilles et de débris.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Paris ?
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
