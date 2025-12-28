import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Blagnac | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Blagnac et ses environs. Spéci',
  keywords: 'gouttiere blagnac, pose gouttiere blagnac, reparation gouttiere blagnac, nettoyage gouttiere blagnac, descente pluviale blagnac, gouttiere bouchee blagnac',
};

export default function GouttiereBlagnacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Blagnac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Blagnac et ses environs. Spécialistes de la protection de votre habitat, nous intervenons avec précision et expertise pour garantir une gestion optimale des eaux de pluie.</p>

        <h2>Nos services de gouttières et descentes pluviales a Blagnac</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins des propriétaires de Blagnac et de la région toulousaine. Nous proposons une intervention complète comprenant la pose, la réparation et l&apos;entretien de vos systèmes de collecte des eaux pluviales. Notre équipe qualifiée utilise des matériaux de haute qualité - aluminium, zinc, PVC - parfaitement adaptés aux conditions climatiques locales. Chaque intervention est précédée d&apos;un diagnostic technique précis pour identifier les points faibles et proposer la solution la plus efficace. Nous garantissons une étanchéité totale et une protection durable contre les infiltrations d&apos;eau.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos techniciens sont certifiés et formés aux dernières normes techniques. Nous intervenons sous 48h après votre appel, avec un devis gratuit et détaillé. Notre connaissance parfaite du terrain blagnais nous permet de proposer des solutions sur-mesure. De plus, nous proposons une garantie de 5 ans sur tous nos travaux de pose et réparation de gouttières.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ au mètre linéaire selon le matériau choisi. Pour une maison moyenne à Blagnac (environ 15-20 mètres), comptez un budget global entre 450€ et 1600€. Les facteurs influençant le prix incluent le type de matériau, la complexité de l&apos;installation et l&apos;accessibilité.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un nettoyeur haute pression ou un furet métallique. Commencez par retirer manuellement les feuilles et débris. Utilisez un produit désinfectant pour éliminer les mousses. En cas de bouchon résistant, contactez un professionnel pour éviter d&apos;endommager la gouttière.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières deux fois par an : au printemps et à l&apos;automne. Dans des zones très boisées comme certains quartiers de Blagnac, une intervention supplémentaire peut être nécessaire. Un nettoyage régulier permet d&apos;éviter les engorgements et les dégradations structurelles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Blagnac ?
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
