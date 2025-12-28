import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Aubervilliers | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialiste des gouttières et descentes pluviales à Aubervilliers, protège votre habitat contre les risques d&apos;',
  keywords: 'gouttiere aubervilliers, pose gouttiere aubervilliers, reparation gouttiere aubervilliers, nettoyage gouttiere aubervilliers, descente pluviale aubervilliers, gouttiere bouchee aubervilliers',
};

export default function GouttiereAubervilliersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Aubervilliers</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialiste des gouttières et descentes pluviales à Aubervilliers, protège votre habitat contre les risques d&apos;infiltration et de dégradation. Notre expertise locale vous garantit des solutions sur-mesure adaptées à l&apos;environnement urbain d&apos;Aubervilliers.</p>

        <h2>Nos services de gouttières et descentes pluviales a Aubervilliers</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité de vos besoins : installation, réparation, nettoyage et maintenance préventive. Nous utilisons uniquement des matériaux haute qualité comme l&apos;aluminium et le zinc, résistants aux conditions climatiques françaises. Notre équipe technique réalise un diagnostic précis avant chaque intervention, évaluant la structure, les fixations et l&apos;écoulement. Nous proposons des solutions personnalisées qui protègent durablement votre toiture contre l&apos;humidité et les infiltrations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Techniciens certifiés avec plus de 15 ans d&apos;expérience
• Devis gratuit sous 48h
• Interventions rapides sur Aubervilliers et communes limitrophes
• Matériel professionnel dernière génération
• Garantie décennale sur nos installations</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ au mètre linéaire selon le matériau choisi. Un pavillon standard nécessite généralement 20-30 mètres linéaires, soit un budget total entre 600€ et 2400€. Nos devis détaillés incluent main-d&apos;œuvre, matériaux et évacuation.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un furet métallique, nettoyez avec un jet haute pression, retirez manuellement les débris. En cas d&apos;obstruction complexe, contactez un professionnel pour éviter d&apos;endommager la structure.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons 2 nettoyages par an : au printemps et à l&apos;automne. Pour les zones avec beaucoup d&apos;arbres, prévoir un nettoyage supplémentaire. Un entretien régulier prévient 80% des problèmes d&apos;infiltration et prolonge la durée de vie de vos gouttières.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Aubervilliers ?
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
