import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a La Garde | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à La Garde et ses environs. Nous pr',
  keywords: 'gouttiere la garde, pose gouttiere la garde, reparation gouttiere la garde, nettoyage gouttiere la garde, descente pluviale la garde, gouttiere bouchee la garde',
};

export default function GouttiereLaGardePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a La Garde</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à La Garde et ses environs. Nous protégeons votre habitat contre les risques d&apos;infiltration avec des solutions professionnelles et durables.</p>

        <h2>Nos services de gouttières et descentes pluviales a La Garde</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins : installation, réparation et maintenance. Nous intervenons sur tous types de bâtiments, des maisons individuelles aux immeubles collectifs de La Garde. Notre équipe technique utilise des matériaux haute qualité (zinc, aluminium, PVC) garantissant une protection optimale contre les intempéries. Chaque intervention est précédée d&apos;un diagnostic précis pour proposer la solution technique la plus adaptée à votre configuration.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Experts locaux avec 15 ans d&apos;expérience sur La Garde et le Var
- Devis gratuit sous 48h
- Interventions rapides et sur-mesure
- Techniciens certifiés et assurés
- Matériaux aux normes environnementales</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ du mètre linéaire selon le matériau choisi. Un pavillon standard nécessite généralement entre 30 et 50 mètres linéaires, pour un budget total oscillant entre 900€ et 4000€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un furet métallique, nettoyez avec un jet haute pression, retirez manuellement les débris. En cas de difficulté, contactez un professionnel pour éviter d&apos;endommager la gouttière.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières 2 fois par an : au printemps et à l&apos;automne. Dans les zones très boisées de La Garde, nous conseillons jusqu&apos;à 3 nettoyages annuels pour prévenir les obstructions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a La Garde ?
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
