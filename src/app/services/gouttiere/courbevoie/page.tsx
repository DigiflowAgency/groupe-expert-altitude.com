import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Courbevoie | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Courbevoie et ses environs. Sp',
  keywords: 'gouttiere courbevoie, pose gouttiere courbevoie, reparation gouttiere courbevoie, nettoyage gouttiere courbevoie, descente pluviale courbevoie, gouttiere bouchee courbevoie',
};

export default function GouttiereCourbevoiePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Courbevoie</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Courbevoie et ses environs. Spécialistes depuis plus de 15 ans, nous protégeons efficacement votre habitat contre les risques d&apos;infiltration et de dégradation.</p>

        <h2>Nos services de gouttières et descentes pluviales a Courbevoie</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins des propriétaires de Courbevoie : installation, réparation, nettoyage et maintenance préventive. Notre équipe technique hautement qualifiée utilise des matériaux premium (zinc, aluminium, PVC) garantissant une durabilité maximale. Nous réalisons un diagnostic précis avant chaque intervention, analysant la configuration de votre toiture et les spécificités de votre bâtiment. Notre processus inclut un relevé technique détaillé, la préparation sur-mesure des gouttières et une pose professionnelle avec des fixations adaptées à chaque type de support.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique : nos techniciens sont certifiés, notre intervention est garantie 5 ans, nous proposons un devis gratuit sous 48h et nos prix sont transparents. Nous intervenons rapidement sur Courbevoie et tout le département des Hauts-de-Seine, avec un taux de satisfaction client de 98%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ au mètre linéaire selon le matériau choisi. Un pavillon standard de 100m² nécessite environ 15-20 mètres linéaires, pour un budget total entre 450€ et 1600€. Nous proposons systématiquement un devis détaillé et personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un furet métallique, un jet haute pression ou un aspirateur spécial. Commencez par retirer les feuilles et débris manuellement, puis nettoyez avec un produit désinfectant. En cas de difficulté, contactez un professionnel pour éviter d&apos;endommager la gouttière.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer ses gouttières 2 fois par an : au printemps après la fonte des neiges et à l&apos;automne après la chute des feuilles. Pour les zones très boisées, nous conseillons un nettoyage trimestriel pour prévenir l&apos;obstruction et les risques de corrosion.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Courbevoie ?
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
