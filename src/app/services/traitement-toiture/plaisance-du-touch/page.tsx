import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Plaisance-du-Touch | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour protéger et valoriser votre toiture à Plaisance-du-Touch. Spécialisés dans le traiteme',
  keywords: 'demoussage toiture plaisance-du-touch, traitement toiture plaisance-du-touch, nettoyage toiture plaisance-du-touch, antimousse toiture plaisance-du-touch, hydrofuge toiture plaisance-du-touch, entretien toiture plaisance-du-touch',
};

export default function TraitementToiturePlaisanceDuTouchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Plaisance-du-Touch</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour protéger et valoriser votre toiture à Plaisance-du-Touch. Spécialisés dans le traitement et démoussage de toiture, nous intervenons avec précision pour préserver la longévité et l&apos;esthétique de vos couvertures.</p>

        <h2>Nos services de traitement et démoussage toiture a Plaisance-du-Touch</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux défis spécifiques des habitations de la région. Nous utilisons des techniques professionnelles qui éliminent efficacement la mousse, les lichens et les algues qui détériorent vos tuiles. Notre processus comprend un diagnostic précis, un nettoyage haute pression respectueux des matériaux, puis l&apos;application d&apos;un traitement antimousse et hydrofuge de dernière génération. Notre expertise permet de traiter environ 80 m² par jour, avec une garantie d&apos;efficacité pendant 5 à 7 ans. Pour les habitants de Plaisance-du-Touch, nous adaptons nos interventions aux conditions climatiques locales, assurant une protection optimale contre l&apos;humidité et les agressions extérieures.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour la qualité et la fiabilité. Nos techniciens sont certifiés et formés aux dernières techniques de traitement. Nous utilisons uniquement des produits écologiques et homologués. Notre intervention inclut un devis gratuit, un diagnostic personnalisé et une intervention rapide. Avec plus de 15 ans d&apos;expérience, nous garantissons un service clé en main qui préserve la valeur de votre patrimoine immobilier.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un démoussage de toiture varie entre 15€ et 25€ par m², selon la complexité de l&apos;intervention, l&apos;état de la toiture et l&apos;accessibilité. Pour une maison moyenne de 100 m² à Plaisance-du-Touch, comptez un budget global entre 1500€ et 2500€. Ce tarif comprend le nettoyage, le traitement antimousse et l&apos;hydrofugation.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de réaliser un traitement antimousse tous les 5 à 7 ans, ou plus fréquemment si votre toiture est exposée au nord ou dans une zone humide. Les signes qui indiquent un besoin urgent : présence importante de mousse, infiltrations, tuiles noircies ou détériorées. La période idéale se situe entre avril et octobre, lors de conditions météorologiques stables.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après un démoussage, l&apos;application d&apos;un hydrofuge nécessite plusieurs étapes : séchage complet de la toiture, application par pulvérisation uniforme avec un produit adapté au type de matériau (tuiles terre cuite, ardoises), respecter un temps de séchage de 24h, et vérifier la bonne pénétration du produit. Un professionnel garantit une application optimale et durable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Plaisance-du-Touch ?
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
