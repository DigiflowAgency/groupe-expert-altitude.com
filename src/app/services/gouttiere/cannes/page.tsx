import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Cannes | Groupe Expert Altitude Com',
  description: 'Sur la Côte d&apos;Azur, Groupe Expert Altitude Com est votre partenaire spécialiste en gouttières et descentes pluviales à Cannes. Nous protégeons votre habita',
  keywords: 'gouttiere cannes, pose gouttiere cannes, reparation gouttiere cannes, nettoyage gouttiere cannes, descente pluviale cannes, gouttiere bouchee cannes',
};

export default function GouttiereCannesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Cannes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Sur la Côte d&apos;Azur, Groupe Expert Altitude Com est votre partenaire spécialiste en gouttières et descentes pluviales à Cannes. Nous protégeons votre habitat contre les intempéries avec des solutions sur-mesure adaptées au climat méditerranéen.</p>

        <h2>Nos services de gouttières et descentes pluviales a Cannes</h2>
        <div className="space-y-4">
          <p>Nos experts interviennent sur l&apos;ensemble des systèmes de collecte des eaux pluviales, depuis l&apos;installation jusqu&apos;à la maintenance préventive. À Cannes et ses environs, nous proposons des gouttières en aluminium, zinc et PVC, garantissant une durabilité maximale face aux conditions climatiques locales. Notre processus débute par un diagnostic précis de votre toiture, suivi d&apos;une recommandation technique personnalisée. Nos équipes qualifiées assurent une pose professionnelle, avec une attention méticuleuse aux points de jonction et à l&apos;étanchéité, minimisant les risques d&apos;infiltration et de dégradation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée avec plus de 15 ans d&apos;expérience sur la région cannoise. Nos techniciens sont formés aux dernières normes techniques. Devis gratuit et transparent. Intervention rapide sous 48h. Nous garantissons tous nos travaux pendant 5 ans, offrant une tranquillité d&apos;esprit totale aux propriétaires.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ par mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Un pavillon standard de 100m² nécessite généralement entre 150 et 250 mètres linéaires, pour un budget total oscillant entre 4 500€ et 20 000€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un furet métallique ou un jet haute pression. Commencez par retirer les feuilles et débris manuellement, puis nettoyez l&apos;intérieur avec un outil adapté. En cas de blocage persistant, contactez un professionnel pour éviter d&apos;endommager votre système.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons deux nettoyages complets par an : un au printemps et un à l&apos;automne. Sur la région cannoise, où la végétation est dense, une inspection supplémentaire après de fortes pluies est conseillée pour prévenir tout engorgement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Cannes ?
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
