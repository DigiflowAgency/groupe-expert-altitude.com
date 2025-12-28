import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a La Seyne-sur-Mer | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour la gestion professionnelle des gouttières et descentes pluviales sur La Seyne-sur-Mer et ',
  keywords: 'gouttiere la seyne-sur-mer, pose gouttiere la seyne-sur-mer, reparation gouttiere la seyne-sur-mer, nettoyage gouttiere la seyne-sur-mer, descente pluviale la seyne-sur-mer, gouttiere bouchee la seyne-sur-mer',
};

export default function GouttiereLaSeyneSurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a La Seyne-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour la gestion professionnelle des gouttières et descentes pluviales sur La Seyne-sur-Mer et ses environs. Spécialistes depuis plus de 15 ans, nous protégeons votre habitat contre les risques d&apos;infiltration et de dégradation avec un savoir-faire précis et des solutions sur-mesure.</p>

        <h2>Nos services de gouttières et descentes pluviales a La Seyne-sur-Mer</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins : installation, réparation, nettoyage et entretien. Nous intervenons sur tous types de bâtiments, résidentiels et professionnels, en utilisant des matériaux haut de gamme comme l&apos;aluminium, le zinc et le PVC. Notre équipe technique réalise un diagnostic complet avant toute intervention, garantissant une solution adaptée à la configuration spécifique de votre toiture. Sur La Seyne-sur-Mer, nous comprenons les contraintes climatiques locales qui nécessitent une attention particulière à l&apos;évacuation des eaux pluviales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale de plus de 15 ans
✓ Techniciens certifiés et formés en continu
✓ Devis gratuit et précis sous 48h
✓ Matériaux de qualité avec garantie
✓ Intervention rapide sur La Seyne-sur-Mer et communes limitrophes</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ par mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Un diagnostic préalable nous permet de vous proposer un devis détaillé et transparent, sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un débourbeur manuel ou un jet d&apos;eau à pression modérée. Portez des gants et retirez manuellement les débris. En cas de blocage persistant, faites appel à un professionnel pour éviter d&apos;endommager la gouttière.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage complet des gouttières deux fois par an : au printemps et à l&apos;automne. Dans des zones boisées de La Seyne-sur-Mer, une intervention supplémentaire peut être nécessaire pour prévenir l&apos;accumulation de feuilles et de débris.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a La Seyne-sur-Mer ?
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
