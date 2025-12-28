import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Bondy | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en gouttières et descentes pluviales à Bondy et dans toute la région parisienne. Nous protégeons',
  keywords: 'gouttiere bondy, pose gouttiere bondy, reparation gouttiere bondy, nettoyage gouttiere bondy, descente pluviale bondy, gouttiere bouchee bondy',
};

export default function GouttiereBondyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Bondy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en gouttières et descentes pluviales à Bondy et dans toute la région parisienne. Nous protégeons efficacement votre habitat contre les risques d&apos;infiltration et de dommages structurels grâce à des solutions techniques sur-mesure.</p>

        <h2>Nos services de gouttières et descentes pluviales a Bondy</h2>
        <div className="space-y-4">
          <p>Nos experts en gouttières interviennent sur l&apos;ensemble des problématiques liées à l&apos;évacuation des eaux pluviales. Nous proposons une gamme complète de services incluant l&apos;installation, la réparation et le nettoyage de gouttières pour les particuliers et professionnels de Bondy. Notre approche technique privilégie des matériaux haute durabilité comme l&apos;aluminium et le zinc, garantissant une protection optimale de votre bâtiment contre l&apos;humidité. Chaque intervention est précédée d&apos;un diagnostic précis permettant d&apos;identifier les points faibles et de proposer la solution technique la plus adaptée à votre configuration.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence repose sur trois piliers essentiels : expertise technique certifiée, intervention rapide sous 48h et transparence tarifaire. Nos techniciens sont formés aux dernières normes réglementaires, notre stock de matériel nous permet d&apos;intervenir immédiatement, et nos devis sont détaillés sans frais cachés. Nous intervenons sur Bondy avec une connaissance précise des spécificités locales d&apos;habitat.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ le mètre linéaire selon le matériau choisi (PVC, zinc, aluminium) et la complexité de l&apos;installation. Un pavillon standard nécessite généralement entre 10 et 15 mètres linéaires, soit un budget total oscillant entre 300€ et 1200€ installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un débourbeur manuel ou un furet métallique. Commencez par retirer les feuilles et débris manuellement, puis utilisez un jet d&apos;eau sous pression. En cas de bouchon persistant, insérez délicatement un furet en progressant par sections pour éviter d&apos;endommager la gouttière.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer ses gouttières a minima deux fois par an : au printemps après la chute des bourgeons et à l&apos;automne après la chute des feuilles. Dans les zones très boisées de Bondy, nous conseillons jusqu&apos;à 3 à 4 nettoyages annuels pour garantir un écoulement optimal.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Bondy ?
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
