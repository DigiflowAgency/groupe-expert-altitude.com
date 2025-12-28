import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Draguignan | Groupe Expert Altitude Com',
  description: 'Spécialiste des gouttières et descentes pluviales sur Draguignan et ses environs, le Groupe Expert Altitude Com protège votre habitat depuis plus de 15 ans',
  keywords: 'gouttiere draguignan, pose gouttiere draguignan, reparation gouttiere draguignan, nettoyage gouttiere draguignan, descente pluviale draguignan, gouttiere bouchee draguignan',
};

export default function GouttiereDraguignanPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Draguignan</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste des gouttières et descentes pluviales sur Draguignan et ses environs, le Groupe Expert Altitude Com protège votre habitat depuis plus de 15 ans. Nous intervenons rapidement pour sécuriser et optimiser l&apos;évacuation des eaux de pluie sur tout le Var.</p>

        <h2>Nos services de gouttières et descentes pluviales a Draguignan</h2>
        <div className="space-y-4">
          <p>Nos solutions sur-mesure en gouttières répondent aux spécificités climatiques de Draguignan, caractérisées par des épisodes pluvieux intenses. Nous proposons une installation professionnelle qui garantit une évacuation optimale et durable des eaux de ruissellement. Notre équipe maîtrise tous les matériaux - zinc, aluminium, PVC - et s&apos;adapte à chaque configuration architecturale. Chaque intervention commence par un diagnostic précis, permettant de proposer la solution technique la plus adaptée à votre bâtiment, avec un taux de satisfaction client de 98%.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Techniciens certifiés et formés aux dernières normes techniques
• Devis gratuit et transparent sous 48h
• Intervention rapide sur Draguignan et le département
• Matériels et équipements de haute qualité garantissant une durabilité supérieure à 20 ans</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ du mètre linéaire selon le matériau choisi. Un pavillon standard de 100m² nécessite généralement 15-20 mètres linéaires, soit un budget total entre 375€ et 900€ installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un furet métallique, nettoyez avec un jet haute pression, retirez manuellement les débris végétaux. En cas de difficulté, privilégiez un professionnel pour éviter tout risque de détérioration.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage des gouttières est recommandé 2 fois par an - idéalement au printemps et à l&apos;automne. Dans la région de Draguignan, avec sa végétation dense, un contrôle supplémentaire peut être nécessaire après de fortes rafales de vent.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Draguignan ?
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
