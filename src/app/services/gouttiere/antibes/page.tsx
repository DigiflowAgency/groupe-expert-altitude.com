import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Antibes | Groupe Expert Altitude Com',
  description: 'Sur la Côte d&apos;Azur, le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Antibes. N',
  keywords: 'gouttiere antibes, pose gouttiere antibes, reparation gouttiere antibes, nettoyage gouttiere antibes, descente pluviale antibes, gouttiere bouchee antibes',
};

export default function GouttiereAntibesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Antibes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Sur la Côte d&apos;Azur, le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Antibes. Nous protégeons votre habitat contre les risques d&apos;infiltration et d&apos;humidité grâce à un service professionnel et sur-mesure.</p>

        <h2>Nos services de gouttières et descentes pluviales a Antibes</h2>
        <div className="space-y-4">
          <p>Nos experts en gouttières interviennent sur l&apos;ensemble des systèmes de collecte des eaux pluviales, en proposant une approche complète et personnalisée. Que ce soit pour une installation neuve, une réparation ou un nettoyage, nous garantissons une performance technique optimale adaptée aux spécificités architecturales des habitations antibloises. Notre équipe maîtrise tous les matériaux - zinc, aluminium, PVC - et s&apos;engage à réaliser des installations durables qui résistent aux conditions climatiques méditerranéennes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans sur Antibes et ses environs, 2) Un diagnostic technique précis avant toute intervention, 3) Des techniciens certifiés et équipés des dernières technologies, 4) Une garantie décennale sur tous nos travaux.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ du mètre linéaire selon le matériau et la complexité. Pour une maison moyenne à Antibes (environ 20 mètres linéaires), comptez un budget global entre 600€ et 1600€. Nous proposons systématiquement un devis gratuit et détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, commencez par retirer manuellement les feuilles et débris. Utilisez ensuite un furet métallique ou un jet haute pression. En cas de bouchon tenace, préférez l&apos;intervention d&apos;un professionnel pour éviter d&apos;endommager la structure.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons deux nettoyages complets par an : un au printemps après la chute des feuilles et un à l&apos;automne. Dans les zones très boisées d&apos;Antibes, une intervention supplémentaire peut être nécessaire pour garantir un écoulement optimal.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Antibes ?
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
