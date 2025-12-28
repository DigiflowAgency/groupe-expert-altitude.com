import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Saint-Denis | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en gouttières et descentes pluviales à Saint-Denis et ses environs. Avec plus de 15 ans d&apos;expe',
  keywords: 'gouttiere saint-denis, pose gouttiere saint-denis, reparation gouttiere saint-denis, nettoyage gouttiere saint-denis, descente pluviale saint-denis, gouttiere bouchee saint-denis',
};

export default function GouttiereSaintDenisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Saint-Denis</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en gouttières et descentes pluviales à Saint-Denis et ses environs. Avec plus de 15 ans d&apos;expertise, nous protégeons efficacement les habitations contre les risques d&apos;infiltration et de dégradation.</p>

        <h2>Nos services de gouttières et descentes pluviales a Saint-Denis</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins des propriétaires de Saint-Denis : installation, réparation, nettoyage et maintenance préventive. Nous utilisons uniquement des matériaux de haute qualité comme l&apos;aluminium et le zinc, garantissant une durabilité exceptionnelle. Notre processus commence par un diagnostic précis de votre système d&apos;évacuation des eaux pluviales, suivi d&apos;une intervention sur-mesure. Nos techniciens qualifiés interviennent rapidement, avec un équipement professionnel permettant une installation parfaitement étanche et esthétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale reconnue à Saint-Denis depuis 2008
- Devis gratuit et personnalisé sous 48h
- Équipe de 12 techniciens certifiés
- Garantie décennale sur nos installations
- Matériaux aux normes environnementales</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La pose d&apos;une gouttière varie entre 30€ et 80€ au mètre linéaire, selon le matériau choisi (PVC, zinc, aluminium). Un pavillon standard nécessite généralement entre 20 et 40 mètres linéaires, pour un budget total oscillant entre 600€ et 3200€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un furet de plomberie, nettoyez manuellement avec un gant et un seau, vérifiez les coudes et descentes. En cas de problème complexe, faites appel à un professionnel pour éviter tout dommage.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage des gouttières est recommandé 2 fois par an : au printemps et à l&apos;automne. Dans les zones boisées de Saint-Denis, une intervention supplémentaire peut être nécessaire pour prévenir l&apos;accumulation de feuilles et débris.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Saint-Denis ?
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
