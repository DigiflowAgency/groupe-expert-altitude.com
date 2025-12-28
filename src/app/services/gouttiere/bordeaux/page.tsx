import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Bordeaux | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Bordeaux. Avec plus de 15 ans ',
  keywords: 'gouttiere bordeaux, pose gouttiere bordeaux, reparation gouttiere bordeaux, nettoyage gouttiere bordeaux, descente pluviale bordeaux, gouttiere bouchee bordeaux',
};

export default function GouttiereBordeauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Bordeaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Bordeaux. Avec plus de 15 ans d&apos;expertise, nous protégeons efficacement les habitations bordelaises contre les risques d&apos;infiltration et de dégradation.</p>

        <h2>Nos services de gouttières et descentes pluviales a Bordeaux</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;installation, la réparation et l&apos;entretien complet pour les particuliers et professionnels de la métropole bordelaise. Nous utilisons uniquement des matériaux de haute qualité - aluminium, zinc et PVC - garantissant une durabilité exceptionnelle. Notre processus comprend un diagnostic précis, des recommandations personnalisées et une installation professionnelle, avec une attention méticuleuse aux spécificités architecturales de chaque bâtiment. Chaque intervention est réalisée avec des équipements dernière génération, assurant une précision millimétrique et une efficacité maximale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale bordelaise depuis 2008
✓ Techniciens certifiés et formés en continu
✓ Devis gratuit et transparent
✓ Interventions rapides (48h maximum)
✓ Garantie décennale sur nos installations
✓ Solutions sur-mesure adaptées à chaque configuration</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ au mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Un pavillon standard à Bordeaux nécessite généralement entre 10 et 20 mètres linéaires, pour un coût total oscillant entre 250€ et 900€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un jet d&apos;eau à haute pression, un furet de plombier ou un aspirateur industriel. Portez des gants, retirez manuellement les débris visibles, puis nettoyez en profondeur. En cas de difficulté, contactez un professionnel pour éviter tout dommage.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer ses gouttières deux fois par an : au printemps et à l&apos;automne. Dans la région bordelaise, avec son climat océanique, une vérification supplémentaire après des périodes de fortes pluies est conseillée pour prévenir tout risque d&apos;obstruction.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Bordeaux ?
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
