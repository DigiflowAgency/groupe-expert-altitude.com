import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Vincennes | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire spécialisé en gouttières et descentes pluviales sur Vincennes et ses environs. Nous protégeons votre hab',
  keywords: 'gouttiere vincennes, pose gouttiere vincennes, reparation gouttiere vincennes, nettoyage gouttiere vincennes, descente pluviale vincennes, gouttiere bouchee vincennes',
};

export default function GouttiereVincennesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Vincennes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire spécialisé en gouttières et descentes pluviales sur Vincennes et ses environs. Nous protégeons votre habitat contre les risques d&apos;infiltration avec des solutions sur-mesure et une expertise technique reconnue.</p>

        <h2>Nos services de gouttières et descentes pluviales a Vincennes</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité de vos besoins : installation, réparation et maintenance. Nous intervenons sur tous types de bâtiments à Vincennes, des pavillons aux immeubles collectifs, en utilisant des matériaux haute qualité comme l&apos;aluminium, le zinc et le PVC. Notre équipe qualifiée réalise un diagnostic précis avant chaque intervention, garantissant une pose parfaitement adaptée à la configuration de votre toiture. Nous privilégions des techniques modernes qui assurent une évacuation optimale des eaux pluviales, prévenant ainsi les risques d&apos;humidité et de dégradation structurelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence réside dans notre approche professionnelle : techniciens certifiés, devis transparents, intervention rapide. Plus de 15 ans d&apos;expérience nous permettent de proposer des solutions durables. Nous sommes également engagés dans une démarche éco-responsable, en utilisant des matériaux recyclables et en optimisant le système d&apos;évacuation des eaux.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ du mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Un devis personnalisé vous permettra d&apos;obtenir un tarif précis adapté à votre configuration spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un décolmateur haute pression ou un câble flexible. Commencez par retirer manuellement les feuilles et débris, puis nettoyez à l&apos;eau sous pression. En cas de difficultés, notre équipe peut intervenir rapidement à Vincennes.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage complet de vos gouttières deux fois par an : au printemps et à l&apos;automne. Cette fréquence permet d&apos;éviter l&apos;accumulation de débris et de prévenir les risques de bouchage ou de corrosion.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Vincennes ?
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
