import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a La Teste-de-Buch | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en gouttières et descentes pluviales sur La Teste-de-Buch et ses environs. Avec plus de 15 ans d',
  keywords: 'gouttiere la teste-de-buch, pose gouttiere la teste-de-buch, reparation gouttiere la teste-de-buch, nettoyage gouttiere la teste-de-buch, descente pluviale la teste-de-buch, gouttiere bouchee la teste-de-buch',
};

export default function GouttiereLaTesteDeBuchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a La Teste-de-Buch</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en gouttières et descentes pluviales sur La Teste-de-Buch et ses environs. Avec plus de 15 ans d&apos;expertise, nous protégeons efficacement les habitations contre les risques d&apos;infiltration et de dégradation.</p>

        <h2>Nos services de gouttières et descentes pluviales a La Teste-de-Buch</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins des propriétaires de La Teste-de-Buch : installation, réparation, nettoyage et maintenance. Nous utilisons uniquement des matériaux de haute qualité comme l&apos;aluminium et le zinc, garantissant une durabilité de 25 à 30 ans. Notre processus débute par un diagnostic précis de votre système de collecte des eaux pluviales, suivi d&apos;une recommandation technique personnalisée. Notre équipe intervient avec un outillage professionnel, assurant une pose parfaitement étanche et esthétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos avantages clés : intervention rapide sous 48h, techniciens certifiés, devis gratuit sans engagement, prix compétitifs, garantie décennale. 98% de nos clients recommandent nos services. Nous adaptons chaque solution à la spécificité architecturale de votre propriété, avec une attention particulière aux contraintes climatiques locales.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ du mètre linéaire selon le matériau choisi. Un pavillon standard nécessite généralement 20 à 30 mètres linéaires, pour un budget total entre 600€ et 2400€. Nos devis détaillés incluent la main-d&apos;œuvre, les matériaux et le transport.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un furet métallique flexible, un jet haute pression ou un aspirateur industriel. Portez des gants de protection et sécurisez votre échelle. Commencez par retirer manuellement les feuilles et débris, puis nettoyez en profondeur. En cas de difficulté, contactez un professionnel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage des gouttières est recommandé 2 à 3 fois par an, idéalement au printemps et à l&apos;automne. En zone boisée comme La Teste-de-Buch, nous conseillons un curage tous les 4 mois pour éviter l&apos;accumulation de feuilles et de mousse qui peuvent provoquer des obstructions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a La Teste-de-Buch ?
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
