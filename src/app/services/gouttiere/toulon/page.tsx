import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Toulon | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Toulon et ses environs. Spécialis',
  keywords: 'gouttiere toulon, pose gouttiere toulon, reparation gouttiere toulon, nettoyage gouttiere toulon, descente pluviale toulon, gouttiere bouchee toulon',
};

export default function GouttiereToulonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Toulon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Toulon et ses environs. Spécialistes de la protection de votre habitat depuis plus de 15 ans, nous garantissons des solutions sur-mesure qui protègent efficacement votre propriété contre les risques d&apos;infiltration.</p>

        <h2>Nos services de gouttières et descentes pluviales a Toulon</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins des propriétaires toulonnais : installation, réparation, nettoyage et maintenance préventive. Notre équipe technique intervient avec un équipement professionnel pour diagnostiquer précisément l&apos;état de vos systèmes d&apos;évacuation des eaux pluviales. Nous proposons des gouttières en aluminium, zinc et PVC, adaptées à chaque type d&apos;architecture et de climat méditerranéen. Notre process inclut un diagnostic technique complet, des recommandations personnalisées et une installation garantie, avec une attention particulière aux spécificités climatiques de la région.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale avec plus de 250 chantiers réalisés à Toulon 
✓ Techniciens certifiés et formés aux dernières normes 
✓ Devis gratuit et intervention sous 48h 
✓ Matériaux haute durabilité garantis 10 ans 
✓ Solutions sur-mesure adaptées à votre habitat</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ au mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Un pavillon standard de 100m² nécessite généralement entre 150€ et 350€ de fourniture et pose.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un dégorgeoir, un jet haute pression ou un aspirateur spécial. Portez des gants et sécurisez votre échelle. En cas de difficulté, contactez un professionnel pour éviter tout risque.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage des gouttières est recommandé 2 fois par an : au printemps et à l&apos;automne. En région toulonnaise, une intervention supplémentaire peut être nécessaire en raison des pins et végétation environnante.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Toulon ?
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
