import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Marseille | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste en gouttières et descentes pluviales à Marseille, protège votre habitat contre les risques d&apos;infiltration et ',
  keywords: 'gouttiere marseille, pose gouttiere marseille, reparation gouttiere marseille, nettoyage gouttiere marseille, descente pluviale marseille, gouttiere bouchee marseille',
};

export default function GouttiereMarseillePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Marseille</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste en gouttières et descentes pluviales à Marseille, protège votre habitat contre les risques d&apos;infiltration et de dégradation. Nous intervenons sur toute la métropole marseillaise avec des solutions sur-mesure adaptées à l&apos;architecture méditerranéenne.</p>

        <h2>Nos services de gouttières et descentes pluviales a Marseille</h2>
        <div className="space-y-4">
          <p>Nos experts en gouttières proposent un service complet de pose, réparation et maintenance. Chaque intervention commence par un diagnostic précis de votre système d&apos;évacuation des eaux pluviales, en tenant compte des spécificités architecturales marseillaises. Nous utilisons uniquement des matériaux haute qualité - zinc, aluminium, PVC - garantissant une durabilité optimale de 20 à 30 ans. Notre processus inclut un relevé technique, un devis personnalisé et une installation professionnelle qui respecte les normes techniques françaises. Plus de 95% de nos clients témoignent d&apos;une amélioration significative de la protection de leur habitation après notre intervention.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée avec plus de 15 ans d&apos;expérience à Marseille, nous proposons : 1) Un diagnostic gratuit avant intervention, 2) Des techniciens formés et assurés, 3) Des matériaux garantis 10 ans, 4) Une intervention rapide sous 48h, 5) Un service après-vente réactif.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ le mètre linéaire selon le matériau choisi. Un devis précis sera établi après un diagnostic complet de votre toiture, incluant les spécificités de votre habitat marseillais.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir, un jet d&apos;eau haute pression ou un aspirateur industriel. En cas de difficulté, contactez nos professionnels qui interviendront avec du matériel spécialisé.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons 2 nettoyages par an à Marseille : un au printemps et un à l&apos;automne, en raison des feuilles et des conditions climatiques méditerranéennes qui peuvent rapidement obstruer vos gouttières.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Marseille ?
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
