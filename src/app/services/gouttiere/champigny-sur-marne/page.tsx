import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Champigny-sur-Marne | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Champigny-sur-Marne. Spécialistes',
  keywords: 'gouttiere champigny-sur-marne, pose gouttiere champigny-sur-marne, reparation gouttiere champigny-sur-marne, nettoyage gouttiere champigny-sur-marne, descente pluviale champigny-sur-marne, gouttiere bouchee champigny-sur-marne',
};

export default function GouttiereChampignySurMarnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Champigny-sur-Marne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Champigny-sur-Marne. Spécialistes de la protection de votre habitat, nous intervenons rapidement pour garantir l&apos;intégrité de votre toiture et de votre bâtiment.</p>

        <h2>Nos services de gouttières et descentes pluviales a Champigny-sur-Marne</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins des propriétaires de Champigny-sur-Marne et ses environs. Nous proposons une installation précise et durable, utilisant des matériaux de haute qualité comme l&apos;aluminium et le zinc, résistants aux conditions climatiques locales. Notre équipe technique réalise un diagnostic complet avant toute intervention, mesurant précisément les linéaires et les pentes pour une évacuation optimale des eaux pluviales. Chaque projet est personnalisé, avec des solutions adaptées à l&apos;architecture de votre maison, garantissant une protection efficace contre les infiltrations et l&apos;humidité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à Champigny-sur-Marne
- Techniciens certifiés et formés aux dernières normes
- Devis gratuit et transparent sous 48h
- Interventions rapides et sur-mesure
- Matériaux garantis 10 ans</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ du mètre linéaire selon le matériau choisi. Un PVC sera moins cher qu&apos;un zinc. Pour une maison moyenne de 100m², comptez entre 800€ et 2500€ installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un furet métallique, nettoyez avec un jet haute pression, retirez manuellement les débris végétaux. En cas de difficulté, notre équipe intervient rapidement pour un débouchage professionnel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage des gouttières est recommandé 2 fois par an, idéalement au printemps et à l&apos;automne. Dans des zones très arborées de Champigny-sur-Marne, nous conseillons jusqu&apos;à 3 interventions annuelles pour prévenir tout risque d&apos;obstruction.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Champigny-sur-Marne ?
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
