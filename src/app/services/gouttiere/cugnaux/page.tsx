import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Cugnaux | Groupe Expert Altitude Com',
  description: 'Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Cugnaux et ses environs. Spécialistes de',
  keywords: 'gouttiere cugnaux, pose gouttiere cugnaux, reparation gouttiere cugnaux, nettoyage gouttiere cugnaux, descente pluviale cugnaux, gouttiere bouchee cugnaux',
};

export default function GouttiereCugnauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Cugnaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Cugnaux et ses environs. Spécialistes depuis plus de 15 ans, nous protégeons efficacement votre habitat contre les risques d&apos;infiltration et de dégradation.</p>

        <h2>Nos services de gouttières et descentes pluviales a Cugnaux</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins des propriétaires de Cugnaux : installation, réparation, nettoyage et maintenance. Nous travaillons uniquement avec des matériaux haute qualité comme l&apos;aluminium et le zinc, garantissant une durabilité minimale de 20 ans. Notre équipe technique réalise un diagnostic précis avant chaque intervention, permettant une solution sur-mesure adaptée à la configuration de votre toiture. Nous proposons des systèmes de gouttières parfaitement intégrés, avec une pose professionnelle qui respecte les normes techniques et esthétiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Expert Altitude Com, c&apos;est opter pour un service premium : techniciens certifiés, devis gratuit sous 48h, intervention rapide, garantie décennale. Nous intervenons sur Cugnaux avec un taux de satisfaction client de 98%. Notre engagement qualité et notre réactivité font notre différence.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ du mètre linéaire selon le matériau et la complexité de l&apos;installation. Un pavillon standard de 100m² nécessite généralement entre 150€ et 300€ de fourniture et pose.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un furet de plombier, un jet haute pression ou un aspirateur spécial. Commencez par retirer les feuilles/débris manuellement, puis nettoyez en profondeur. En cas de difficulté, contactez un professionnel pour éviter d&apos;endommager votre système.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières a minima deux fois par an : au printemps et à l&apos;automne. Dans les zones boisées de Cugnaux, nous conseillons trois nettoyages annuels pour prévenir l&apos;accumulation de végétaux et garantir un écoulement optimal.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Cugnaux ?
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
