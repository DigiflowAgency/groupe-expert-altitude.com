import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Six-Fours-les-Plages | Groupe Expert Altitude Com',
  description: 'Votre partenaire expert en gouttières et descentes pluviales sur Six-Fours-les-Plages, Groupe Expert Altitude Com protège votre habitat depuis plus de 15 a',
  keywords: 'gouttiere six-fours-les-plages, pose gouttiere six-fours-les-plages, reparation gouttiere six-fours-les-plages, nettoyage gouttiere six-fours-les-plages, descente pluviale six-fours-les-plages, gouttiere bouchee six-fours-les-plages',
};

export default function GouttiereSixFoursLesPlagesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Six-Fours-les-Plages</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre partenaire expert en gouttières et descentes pluviales sur Six-Fours-les-Plages, Groupe Expert Altitude Com protège votre habitat depuis plus de 15 ans. Nous intervenons rapidement pour tous vos besoins de pose, réparation et maintenance de systèmes d&apos;évacuation des eaux.</p>

        <h2>Nos services de gouttières et descentes pluviales a Six-Fours-les-Plages</h2>
        <div className="space-y-4">
          <p>Nos solutions sur mesure pour gouttières garantissent une protection optimale de votre propriété contre les risques d&apos;infiltration et de dégradation. Notre équipe technique maîtrise tous les types de systèmes, qu&apos;il s&apos;agisse de gouttières en zinc, PVC ou aluminium, parfaitement adaptées au climat méditerranéen de Six-Fours-les-Plages. Nous réalisons un diagnostic précis avant chaque intervention, en évaluant l&apos;état existant, les contraintes architecturales et les spécificités de votre toiture. Notre processus comprend un relevé technique, une proposition personnalisée et une installation professionnelle avec des matériaux haute durabilité, garantissant une évacuation efficace des eaux pluviales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à Six-Fours-les-Plages
- Techniciens certifiés et formés aux dernières normes
- Devis gratuit et transparent
- Matériaux de qualité avec garantie décennale
- Intervention rapide sous 48h
- Solutions sur-mesure adaptées à chaque habitat</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 50€ au mètre linéaire selon le matériau choisi. Pour une maison moyenne de 100m², comptez un budget global entre 800€ et 1500€, installation comprise. Nos devis détaillés permettent une transparence totale des coûts.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un tuyau haute pression. Commencez par retirer manuellement les feuilles et débris. Utilisez un produit désinfectant pour éliminer les mousses. En cas de difficulté, notre équipe propose un service de débouchage professionnel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons deux nettoyages par an : au printemps et à l&apos;automne. Dans la région de Six-Fours-les-Plages, avec la végétation locale, un nettoyage supplémentaire peut être nécessaire. Un entretien régulier permet de prévenir 80% des problèmes d&apos;infiltration et de prolonger la durée de vie de vos gouttières.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Six-Fours-les-Plages ?
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
