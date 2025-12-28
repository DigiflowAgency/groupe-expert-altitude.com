import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Décines-Charpieu | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Décines-Charpieu et ses enviro',
  keywords: 'gouttiere décines-charpieu, pose gouttiere décines-charpieu, reparation gouttiere décines-charpieu, nettoyage gouttiere décines-charpieu, descente pluviale décines-charpieu, gouttiere bouchee décines-charpieu',
};

export default function GouttiereDecinesCharpieuPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Décines-Charpieu</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Décines-Charpieu et ses environs. Nous protégeons votre habitat contre les risques d&apos;infiltration avec des solutions sur-mesure et une expertise technique reconnue.</p>

        <h2>Nos services de gouttières et descentes pluviales a Décines-Charpieu</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité de vos besoins, depuis l&apos;installation jusqu&apos;à la maintenance préventive. Nous intervenons sur tous types de bâtiments - pavillons, immeubles, locaux professionnels - en proposant des solutions adaptées à chaque configuration. Notre équipe maîtrise parfaitement les techniques de pose, réparation et nettoyage, en utilisant des matériaux de haute qualité comme l&apos;aluminium, le zinc et le PVC. Chaque intervention est précédée d&apos;un diagnostic précis pour garantir une performance optimale et une protection durable contre les intempéries.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence ? Une expertise locale précise, un diagnostic technique gratuit, des interventions rapides à Décines-Charpieu, un devis transparent sans surprise, et plus de 15 ans d&apos;expérience dans la gestion des systèmes pluviaux. Nous garantissons une intervention sous 48h et un travail certifié par nos soins.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix moyen de pose d&apos;une gouttière varie entre 30€ et 80€ du mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Chez Groupe Expert Altitude Com, nous proposons un tarif dégressif pour les grandes surfaces et un devis personnalisé sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un furet manuel. Commencez par retirer les feuilles et débris visibles, puis nettoyez l&apos;intérieur avec un jet d&apos;eau sous pression. En cas de blocage persistant, contactez un professionnel pour éviter d&apos;endommager la gouttière.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage complet des gouttières deux fois par an : idéalement en avril (après l&apos;hiver) et en novembre (avant les fortes pluies). Pour les zones très boisées à Décines-Charpieu, un nettoyage trimestriel peut être nécessaire pour prévenir l&apos;accumulation de débris.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Décines-Charpieu ?
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
