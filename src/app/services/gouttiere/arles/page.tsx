import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Arles | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour des solutions complètes de gouttières et descentes pluviales à Arles et ses environs. ',
  keywords: 'gouttiere arles, pose gouttiere arles, reparation gouttiere arles, nettoyage gouttiere arles, descente pluviale arles, gouttiere bouchee arles',
};

export default function GouttiereArlesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Arles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour des solutions complètes de gouttières et descentes pluviales à Arles et ses environs. Nous protégeons votre habitat contre les risques d&apos;infiltration grâce à notre expertise technique et notre connaissance précise des spécificités climatiques arlésienne.</p>

        <h2>Nos services de gouttières et descentes pluviales a Arles</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité de vos besoins, depuis l&apos;installation jusqu&apos;à la maintenance préventive. Nous intervenons sur tous types de bâtiments - maisons individuelles, immeubles, locaux professionnels - avec une attention particulière à l&apos;esthétique et à la performance technique. Notre équipe utilise uniquement des matériaux haute qualité comme l&apos;aluminium, le zinc et le PVC, garantissant une durabilité de 15 à 25 ans selon les modèles. Chaque intervention commence par un diagnostic précis, permettant de proposer une solution sur-mesure adaptée à la configuration de votre toiture et au contexte architectural arlésien.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés et formés aux dernières normes techniques
- Devis gratuit et transparent sous 48h
- Intervention rapide sur Arles et communes limitrophes
- Plus de 15 ans d&apos;expérience en gestion des systèmes pluviaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ au mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Un pavillon standard nécessite généralement entre 40 et 80 mètres linéaires, soit un budget total de 1000€ à 3600€ installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un furet métallique ou un jet haute pression. Commencez par retirer manuellement les feuilles et débris, puis nettoyez en profondeur. En cas de bouchon résistant, faites appel à un professionnel pour éviter d&apos;endommager la gouttière.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières deux fois par an : au printemps après la chute des bourgeons et à l&apos;automne après la chute des feuilles. Dans des zones très boisées comme certains quartiers d&apos;Arles, une intervention supplémentaire peut être nécessaire.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Arles ?
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
