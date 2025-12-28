import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Draguignan | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Draguignan et dans tout le Var. Spécialistes des',
  keywords: 'demoussage toiture draguignan, traitement toiture draguignan, nettoyage toiture draguignan, antimousse toiture draguignan, hydrofuge toiture draguignan, entretien toiture draguignan',
};

export default function TraitementToitureDraguignanPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Draguignan</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Draguignan et dans tout le Var. Spécialistes des techniques de rénovation et protection des toitures, nous intervenons avec précision pour préserver la longévité et l&apos;esthétique de votre habitat.</p>

        <h2>Nos services de traitement et démoussage toiture a Draguignan</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations du sud de la France. Nous utilisons des techniques professionnelles qui éliminent efficacement les mousses, lichens et algues qui détériorent vos tuiles. Notre processus comprend un nettoyage haute pression respectueux des matériaux, suivi d&apos;un traitement antimousse haute performance qui protège durablement votre toiture contre les proliférations végétales. Nos produits écologiques garantissent une intervention sécurisée et respectueuse de l&apos;environnement, avec une efficacité prouvée pendant 5 à 7 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Avec plus de 15 ans d&apos;expérience à Draguignan, nous proposons un service sur-mesure. Nos techniciens sont certifiés et équipés des dernières technologies. Nous garantissons un diagnostic précis, un devis transparent et une intervention rapide. Notre engagement qualité se traduit par un suivi personnalisé et des solutions adaptées à chaque type de toiture.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 25€ au m², selon la complexité de la toiture, son accessibilité et son état. Pour une maison moyenne de 100m², comptez un budget entre 1500€ et 2500€. Un diagnostic gratuit vous permettra d&apos;obtenir un devis précis adapté à votre situation à Draguignan.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin septembre ou début octobre, avant les premières pluies automnales. Cette période permet de traiter préventivement les surfaces et de bloquer le développement des mousses durant l&apos;hiver. Un traitement tous les 5-6 ans est recommandé pour maintenir une protection optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un séchage complet de la surface. Nous utilisons des produits respirants à base de siloxane qui créent un bouclier invisible contre l&apos;humidité. L&apos;application se fait au pulvérisateur basse pression, en 2 couches croisées, garantissant une protection durable et une imperméabilisation efficace.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Draguignan ?
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
