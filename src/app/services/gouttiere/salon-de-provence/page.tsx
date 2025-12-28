import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Salon-de-Provence | Groupe Expert Altitude Com',
  description: 'Expert Altitude Com est votre partenaire spécialisé en gouttières et descentes pluviales sur Salon-de-Provence et ses environs. Nous protégeons votre habit',
  keywords: 'gouttiere salon-de-provence, pose gouttiere salon-de-provence, reparation gouttiere salon-de-provence, nettoyage gouttiere salon-de-provence, descente pluviale salon-de-provence, gouttiere bouchee salon-de-provence',
};

export default function GouttiereSalonDeProvencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Salon-de-Provence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Expert Altitude Com est votre partenaire spécialisé en gouttières et descentes pluviales sur Salon-de-Provence et ses environs. Nous protégeons votre habitat depuis plus de 15 ans avec des solutions techniques sur-mesure, adaptées au climat provençal.</p>

        <h2>Nos services de gouttières et descentes pluviales a Salon-de-Provence</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins : installation, réparation, nettoyage et maintenance. Nous intervenons sur tous types de bâtiments, qu&apos;il s&apos;agisse de maisons individuelles, copropriétés ou locaux professionnels. Notre équipe qualifiée utilise uniquement des matériaux haute résistance (zinc, aluminium, PVC) garantissant une durabilité minimale de 20 ans. Chaque intervention commence par un diagnostic précis, permettant de proposer la solution technique la plus économique et performante pour votre propriété à Salon-de-Provence.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos points forts : une expertise locale de plus de 15 ans, un devis gratuit sous 48h, des techniciens certifiés, des matériaux haut de gamme, et une intervention rapide sur Salon-de-Provence. Nous sommes également engagés dans une démarche éco-responsable, recyclant 100% des matériaux de récupération.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ au mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Un devis précis sera établi après diagnostic technique gratuit.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un furet métallique, nettoyez avec un jet haute pression, retirez manuellement les débris végétaux. En cas de difficulté, contactez un professionnel pour éviter d&apos;endommager la structure.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer ses gouttières deux fois par an : au printemps et à l&apos;automne. En zone boisée à Salon-de-Provence, nous conseillons un nettoyage trimestriel pour prévenir tout risque d&apos;obstruction.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Salon-de-Provence ?
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
