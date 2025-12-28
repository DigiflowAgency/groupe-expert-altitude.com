import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a L\'Haÿ-les-Roses | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à L&apos;Haÿ-les-Roses et ses environs. ',
  keywords: 'gouttiere l'haÿ-les-roses, pose gouttiere l'haÿ-les-roses, reparation gouttiere l'haÿ-les-roses, nettoyage gouttiere l'haÿ-les-roses, descente pluviale l'haÿ-les-roses, gouttiere bouchee l'haÿ-les-roses',
};

export default function GouttiereLHayLesRosesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a L'Haÿ-les-Roses</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à L&apos;Haÿ-les-Roses et ses environs. Nous protégeons votre habitat contre les risques d&apos;infiltration et de dégradation avec un savoir-faire technique et une expertise reconnue dans le Val-de-Marne.</p>

        <h2>Nos services de gouttières et descentes pluviales a L'Haÿ-les-Roses</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières et descentes pluviales couvrent l&apos;intégralité des besoins de protection de votre habitat. Nous intervenons sur l&apos;installation, la réparation et l&apos;entretien de systèmes complets, en utilisant uniquement des matériaux de haute qualité comme l&apos;aluminium, le zinc et le PVC. Notre équipe technique réalise un diagnostic précis avant chaque intervention, garantissant une solution sur-mesure adaptée à l&apos;architecture de votre propriété à L&apos;Haÿ-les-Roses. Nous prenons en compte les spécificités climatiques locales pour proposer des installations durables et performantes, avec une attention particulière à l&apos;étanchéité et à l&apos;évacuation optimale des eaux pluviales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés et formés aux dernières normes réglementaires. Nous proposons des devis transparents sans frais cachés, un délai d&apos;intervention rapide de 48h et une garantie décennale sur nos installations. Notre engagement qualité fait de nous le partenaire de référence pour la protection de votre habitat.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ au mètre linéaire selon les matériaux et la complexité de l&apos;installation. Un pavillon standard de 100m² nécessite environ 20 à 30 mètres linéaires, pour un budget total entre 500€ et 1350€ TTC, installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un furet. Commencez par retirer les feuilles et débris manuellement avec des gants. Utilisez un jet d&apos;eau à haute pression pour éliminer les obstructions légères. En cas de bouchage persistant, faites appel à un professionnel pour éviter d&apos;endommager votre système.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières au minimum deux fois par an : au printemps après la chute des bourgeons et à l&apos;automne après la chute des feuilles. Dans des zones très boisées de L&apos;Haÿ-les-Roses, nous conseillons jusqu&apos;à 3 à 4 nettoyages annuels pour prévenir tout risque d&apos;obstruction.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a L'Haÿ-les-Roses ?
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
