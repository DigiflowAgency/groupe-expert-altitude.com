import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Menton | Groupe Expert Altitude Com',
  description: 'Sur la Côte d&apos;Azur, le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Menton. No',
  keywords: 'gouttiere menton, pose gouttiere menton, reparation gouttiere menton, nettoyage gouttiere menton, descente pluviale menton, gouttiere bouchee menton',
};

export default function GouttiereMentonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Menton</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Sur la Côte d&apos;Azur, le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Menton. Nos solutions sur-mesure protègent efficacement votre habitat des caprices météorologiques méditerranéens.</p>

        <h2>Nos services de gouttières et descentes pluviales a Menton</h2>
        <div className="space-y-4">
          <p>Nos experts en gouttières interviennent sur l&apos;ensemble des systèmes de collecte des eaux pluviales, avec une expertise pointue adaptée à l&apos;architecture mentonnaise. Nous proposons une gamme complète incluant l&apos;installation, la réparation et l&apos;entretien de gouttières en aluminium, PVC et zinc, parfaitement compatibles avec les conditions climatiques locales. Notre processus démarre par un diagnostic précis de votre installation, suivi d&apos;une intervention technique utilisant les dernières technologies. Chaque intervention est personnalisée, garantissant une protection optimale contre les infiltrations et les dégradations potentielles.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Avec plus de 15 ans d&apos;expérience sur Menton et sa région, nous garantissons : 1) Une intervention rapide sous 48h, 2) Un devis gratuit et détaillé, 3) Des techniciens certifiés et équipés, 4) Une approche écologique et durable, privilégiant des matériaux haute qualité avec un taux de recyclabilité de 90%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ au mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Un diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis adapté à votre configuration.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un furet métallique, nettoyez avec un jet haute pression à faible débit, et portez des gants de protection. En cas de difficulté, notre équipe intervient rapidement pour un débouchage professionnel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage complet de vos gouttières deux fois par an : au printemps et à l&apos;automne. Dans la région mentonnaise, un curage supplémentaire peut être nécessaire en raison de la végétation environnante.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Menton ?
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
