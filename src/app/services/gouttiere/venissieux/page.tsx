import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Vénissieux | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé dans l&apos;installation et la maintenance de gouttières sur Vénissieux et ses environs. Nous protége',
  keywords: 'gouttiere vénissieux, pose gouttiere vénissieux, reparation gouttiere vénissieux, nettoyage gouttiere vénissieux, descente pluviale vénissieux, gouttiere bouchee vénissieux',
};

export default function GouttiereVenissieuxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Vénissieux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé dans l&apos;installation et la maintenance de gouttières sur Vénissieux et ses environs. Nous protégeons votre habitat contre les risques d&apos;infiltration grâce à des solutions sur-mesure de descentes pluviales adaptées à chaque type de bâtiment.</p>

        <h2>Nos services de gouttières et descentes pluviales a Vénissieux</h2>
        <div className="space-y-4">
          <p>Nos experts en gouttières interviennent sur l&apos;ensemble des systèmes de collecte des eaux pluviales, garantissant une protection optimale de votre propriété. Nous proposons une gamme complète incluant la pose, la réparation et le nettoyage de gouttières, en utilisant des matériaux haute qualité comme l&apos;aluminium, le zinc et le PVC. Notre processus débute par un diagnostic précis de votre toiture, permettant de définir la solution technique la plus performante. À Vénissieux, nous intervenons rapidement pour prévenir les risques d&apos;humidité et de dégradation structurelle, avec une moyenne de 98% de satisfaction client.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique de plus de 15 ans, 2) Des techniciens certifiés et formés en permanence, 3) Un devis gratuit et détaillé sous 48h, 4) Une intervention rapide et propre, respectant les normes environnementales et de sécurité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ du mètre linéaire selon le matériau choisi. Un devis personnalisé vous permettra d&apos;obtenir un tarif précis adapté à votre configuration spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un jet d&apos;eau à haute pression. Retirez manuellement les feuilles et débris, puis nettoyez avec un produit adapté. En cas de difficulté, notre équipe intervient rapidement à Vénissieux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer ses gouttières au minimum deux fois par an, idéalement au printemps et à l&apos;automne. Dans les zones très boisées, nous conseillons jusqu&apos;à 3-4 nettoyages annuels pour garantir un écoulement optimal.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Vénissieux ?
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
