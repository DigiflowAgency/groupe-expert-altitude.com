import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Nice | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et le démoussage de toiture à Nice et dans toute la région azuréenne. Sp',
  keywords: 'demoussage toiture nice, traitement toiture nice, nettoyage toiture nice, antimousse toiture nice, hydrofuge toiture nice, entretien toiture nice',
};

export default function TraitementToitureNicePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Nice</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et le démoussage de toiture à Nice et dans toute la région azuréenne. Spécialistes du nettoyage et de la protection des toitures, nous garantissons une intervention professionnelle qui préserve la longévité et l&apos;esthétique de votre patrimoine immobilier.</p>

        <h2>Nos services de traitement et démoussage toiture a Nice</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux défis spécifiques des habitations niçoises, soumises à des conditions climatiques variées. Notre processus complet commence par un diagnostic précis de l&apos;état de votre toiture, suivi d&apos;un nettoyage haute précision qui élimine mousses, lichens et salissures sans endommager les matériaux. Nous utilisons des techniques et produits écologiques qui protègent à la fois votre toiture et l&apos;environnement. Notre traitement antimousse haute performance assure une protection durable contre les proliférations végétales, avec une efficacité garantie pendant 5 à 7 ans. Chaque intervention est personnalisée, tenant compte des spécificités de votre toiture et des conditions locales de Nice.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée maîtrise parfaitement les techniques de traitement de toiture, nous disposons d&apos;un agrément professionnel, nos interventions sont assurées et nous proposons un devis gratuit et détaillé. Nos techniciens sont équipés des dernières technologies et respectent les normes de sécurité les plus strictes.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage de toiture varie entre 15€ et 35€ au m², selon la complexité de l&apos;intervention, l&apos;accessibilité et l&apos;état initial de la toiture. Un diagnostic précis sur site permet d&apos;établir un devis personnalisé sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est généralement à l&apos;automne ou au début du printemps, avant les périodes d&apos;humidité intense. À Nice, nous recommandons une intervention tous les 5 à 7 ans, ou dès que les premières proliférations végétales apparaissent.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après le démoussage, l&apos;application d&apos;un hydrofuge se fait en 3 étapes : nettoyage complet de la surface, application d&apos;un produit de traitement spécifique au type de matériau (tuiles, ardoises), et finition par un hydrofuge respirant qui protège sans obstruer les micropores.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Nice ?
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
