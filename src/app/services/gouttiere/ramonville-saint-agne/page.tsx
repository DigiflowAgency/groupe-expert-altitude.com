import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Ramonville-Saint-Agne | Groupe Expert Altitude Com',
  description: 'Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Ramonville-Saint-Agne et ses environs. S',
  keywords: 'gouttiere ramonville-saint-agne, pose gouttiere ramonville-saint-agne, reparation gouttiere ramonville-saint-agne, nettoyage gouttiere ramonville-saint-agne, descente pluviale ramonville-saint-agne, gouttiere bouchee ramonville-saint-agne',
};

export default function GouttiereRamonvilleSaintAgnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Ramonville-Saint-Agne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Ramonville-Saint-Agne et ses environs. Spécialistes depuis plus de 15 ans, nous protégeons efficacement votre habitat contre les risques d&apos;infiltration et de dégradation.</p>

        <h2>Nos services de gouttières et descentes pluviales a Ramonville-Saint-Agne</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins : installation, réparation, nettoyage et maintenance. Notre équipe qualifiée intervient sur tous types de bâtiments, résidentiels comme professionnels, en utilisant des matériaux haute qualité (zinc, aluminium, PVC) parfaitement adaptés au climat de la région toulousaine. Nous réalisons un diagnostic précis avant chaque intervention, garantissant une solution sur-mesure qui protège durablement votre patrimoine contre les intempéries. Notre approche technique permet de prévenir les risques d&apos;humidité et de préserver la structure de votre toiture à Ramonville-Saint-Agne.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos points forts : une expertise locale de proximité, un devis gratuit sous 48h, des techniciens certifiés, un matériel professionnel dernier cri, et une intervention rapide. Nous proposons des solutions techniques innovantes avec un rapport qualité-prix imbattable. 95% de nos clients nous recommandent à leur entourage.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ du mètre linéaire selon le matériau choisi. Un système complet pour une maison standard (100m²) coûte environ 800-1200€, installation comprise. Nos devis détaillés n&apos;ont jamais de frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un jet haute pression, un furet de plombier ou un aspirateur industriel. Portez des gants et une échelle stable. Si l&apos;obstruction persiste, contactez un professionnel pour éviter tout risque.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons deux nettoyages par an : au printemps et à l&apos;automne. Dans la région de Ramonville-Saint-Agne, avec la présence d&apos;arbres, un nettoyage supplémentaire peut être nécessaire, notamment après des périodes de forte végétation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Ramonville-Saint-Agne ?
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
