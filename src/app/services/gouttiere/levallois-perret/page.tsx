import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Levallois-Perret | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Levallois-Perret. Avec plus de 15',
  keywords: 'gouttiere levallois-perret, pose gouttiere levallois-perret, reparation gouttiere levallois-perret, nettoyage gouttiere levallois-perret, descente pluviale levallois-perret, gouttiere bouchee levallois-perret',
};

export default function GouttiereLevalloisPerretPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Levallois-Perret</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Levallois-Perret. Avec plus de 15 ans d&apos;expérience, nous protégeons efficacement les bâtiments contre les risques d&apos;infiltration et de dommages structurels.</p>

        <h2>Nos services de gouttières et descentes pluviales a Levallois-Perret</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;installation, la réparation et l&apos;entretien complet pour les particuliers et professionnels de Levallois-Perret. Notre équipe technique hautement qualifiée utilise des matériaux premium en aluminium, zinc et PVC, garantissant une durabilité optimale. Nous réalisons un diagnostic précis avant chaque intervention, proposant des solutions sur-mesure adaptées à la configuration de votre toiture. Notre processus inclut un relevé technique détaillé, une préparation méticuleuse et une pose selon les normes techniques les plus strictes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Experts certifiés avec plus de 500 installations réussies
✓ Devis gratuit et précis sous 48h
✓ Intervention rapide sur Levallois-Perret et communes limitrophes
✓ Garantie décennale sur tous nos travaux
✓ Matériaux haute qualité et techniques d&apos;installation innovantes</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix moyen de pose d&apos;une gouttière varie entre 30€ et 80€ au mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Un diagnostic précis nous permet de vous proposer un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un jet d&apos;eau sous pression. Retirez manuellement les débris, puis nettoyez avec un produit adapté. En cas de difficulté, notre équipe intervient rapidement à Levallois-Perret.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage complet des gouttières deux fois par an : au printemps et à l&apos;automne. Cette fréquence permet d&apos;éviter l&apos;accumulation de feuilles, mousse et prévenir les obstructions potentielles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Levallois-Perret ?
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
