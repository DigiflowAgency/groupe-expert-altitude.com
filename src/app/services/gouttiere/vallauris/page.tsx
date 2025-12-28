import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Vallauris | Groupe Expert Altitude Com',
  description: 'Sur la Côte d&apos;Azur, le Groupe Expert Altitude Com protège votre habitat à Vallauris avec des solutions professionnelles de gouttières et descentes pluviale',
  keywords: 'gouttiere vallauris, pose gouttiere vallauris, reparation gouttiere vallauris, nettoyage gouttiere vallauris, descente pluviale vallauris, gouttiere bouchee vallauris',
};

export default function GouttiereVallaurisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Vallauris</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Sur la Côte d&apos;Azur, le Groupe Expert Altitude Com protège votre habitat à Vallauris avec des solutions professionnelles de gouttières et descentes pluviales. Nous sécurisons vos bâtiments contre les risques d&apos;infiltration grâce à un savoir-faire technique précis.</p>

        <h2>Nos services de gouttières et descentes pluviales a Vallauris</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins : installation, réparation, nettoyage et maintenance. Nous utilisons des matériaux haute résistance adaptés au climat méditerranéen de Vallauris, garantissant une protection durable contre les intempéries. Notre équipe réalise un diagnostic technique complet avant toute intervention, permettant d&apos;identifier les points faibles et de proposer des solutions sur-mesure. Nous travaillons avec des gouttières en aluminium, zinc et PVC, en respectant les normes techniques les plus exigeantes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence ? Un diagnostic précis, un devis transparent et un service clé en main. Nous intervenons sous 48h, proposons une garantie de 5 ans sur nos installations, et comptons plus de 15 ans d&apos;expérience sur la région. Nos techniciens sont certifiés et formés aux dernières technologies d&apos;étanchéité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ du mètre linéaire selon le matériau et la complexité de l&apos;installation. Un pavillon standard nécessite généralement 20 à 30 mètres linéaires, soit un budget global entre 500€ et 1350€ installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un furet métallique ou un jet haute pression. Commencez par retirer les feuilles et débris manuellement, puis nettoyez l&apos;intérieur avec un outil adapté. En cas de difficulté, contactez un professionnel pour éviter d&apos;endommager la gouttière.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons deux nettoyages par an : un au printemps après la période de chute de feuilles, et un à l&apos;automne avant l&apos;arrivée des pluies. Pour les zones très boisées de Vallauris, il est conseillé de vérifier vos gouttières jusqu&apos;à 3 fois par an.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Vallauris ?
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
