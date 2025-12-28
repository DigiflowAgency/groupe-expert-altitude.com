import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Carquefou | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Carquefou et ses environs. Nous p',
  keywords: 'gouttiere carquefou, pose gouttiere carquefou, reparation gouttiere carquefou, nettoyage gouttiere carquefou, descente pluviale carquefou, gouttiere bouchee carquefou',
};

export default function GouttiereCarquefouPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Carquefou</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Carquefou et ses environs. Nous protégeons votre habitat contre les risques d&apos;infiltration avec des solutions professionnelles et durables.</p>

        <h2>Nos services de gouttières et descentes pluviales a Carquefou</h2>
        <div className="space-y-4">
          <p>Nos experts en gouttières interviennent sur l&apos;ensemble des systèmes de collecte des eaux pluviales, en proposant une expertise complète adaptée à chaque configuration de toiture. Nous réalisons la pose, la réparation et le nettoyage de gouttières avec une précision technique garantissant une protection optimale de votre propriété. Notre équipe maîtrise tous les matériaux - zinc, PVC, aluminium - et s&apos;adapte aux spécificités architecturales de Carquefou. Chaque intervention commence par un diagnostic précis permettant de proposer la solution la plus économique et performante.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos points forts : 15 ans d&apos;expérience locale, techniciens certifiés, devis gratuit sous 48h, interventions rapides, garantie décennale. Nous intervenons sur Carquefou et tout le département avec un taux de satisfaction client de 98%. Notre engagement qualité fait la différence.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ par mètre linéaire selon le matériau et la complexité de l&apos;installation. Un diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis adapté à votre configuration.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un jet d&apos;eau à haute pression. Retirez manuellement les feuilles et débris, puis nettoyez avec un produit adapté. En cas de difficulté, notre équipe à Carquefou peut intervenir rapidement.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage complet des gouttières deux fois par an : au printemps et à l&apos;automne. Pour les zones très boisées, une intervention supplémentaire peut être nécessaire pour éviter les obstructions et les dégradations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Carquefou ?
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
