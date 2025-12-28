import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Pantin | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Pantin et ses environs. Protégez ',
  keywords: 'gouttiere pantin, pose gouttiere pantin, reparation gouttiere pantin, nettoyage gouttiere pantin, descente pluviale pantin, gouttiere bouchee pantin',
};

export default function GouttierePantinPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Pantin</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Pantin et ses environs. Protégez efficacement votre habitat contre les risques d&apos;infiltration avec nos solutions sur-mesure adaptées à chaque configuration.</p>

        <h2>Nos services de gouttières et descentes pluviales a Pantin</h2>
        <div className="space-y-4">
          <p>Nos experts en gouttières interviennent sur l&apos;ensemble des problématiques d&apos;évacuation des eaux pluviales, garantissant une protection optimale de votre propriété. Nous proposons une gamme complète de services incluant la pose, la réparation et le nettoyage de gouttières, en utilisant des matériaux de haute qualité comme l&apos;aluminium, le zinc et le PVC. Notre processus d&apos;intervention débute par un diagnostic précis de votre système d&apos;évacuation, permettant d&apos;identifier les points faibles et de proposer des solutions techniques personnalisées. Chaque intervention est réalisée avec un équipement professionnel et une attention méticuleuse aux détails, assurant une étanchéité parfaite et une durabilité maximale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise locale de plus de 15 ans à Pantin
• Techniciens certifiés et formés en permanence
• Devis gratuit et transparent sans engagement
• Interventions rapides dans un délai de 48h
• Matériaux garantis et conformes aux normes en vigueur</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ au mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Un diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis adapté à votre configuration spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un jet d&apos;eau à haute pression. Retirez manuellement les feuilles et débris, puis utilisez un produit désinfectant. En cas de difficulté, notre équipe de Pantin reste à votre disposition pour une intervention professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières au minimum deux fois par an, idéalement au printemps et à l&apos;automne. Dans les zones à forte végétation, nous conseillons trois interventions annuelles pour prévenir tout risque d&apos;obstruction et de dégradation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Pantin ?
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
