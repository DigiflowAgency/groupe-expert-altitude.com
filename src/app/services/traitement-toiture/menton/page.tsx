import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Menton | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Menton et ses environs. Spécialistes des toiture',
  keywords: 'demoussage toiture menton, traitement toiture menton, nettoyage toiture menton, antimousse toiture menton, hydrofuge toiture menton, entretien toiture menton',
};

export default function TraitementToitureMentonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Menton</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Menton et ses environs. Spécialistes des toitures des Alpes-Maritimes, nous protégeons votre habitat contre l&apos;humidité et la prolifération de mousse grâce à notre expertise technique.</p>

        <h2>Nos services de traitement et démoussage toiture a Menton</h2>
        <div className="space-y-4">
          <p>Le démoussage de toiture est essentiel pour préserver la longévité et l&apos;esthétique de votre couverture. Dans la région mentonnaise, l&apos;humidité et le climat méditerranéen favorisent la croissance rapide des mousses et lichens, qui peuvent dégrader vos tuiles et ardoises. Notre processus complet commence par un diagnostic précis de votre toiture, suivi d&apos;un nettoyage haute pression respectueux des matériaux. Nous éliminons méticuleusement les végétaux parasites puis appliquons un traitement antimousse haute performance qui protège durablement votre toiture contre les futures infiltrations. Nos techniques garantissent une intervention propre, efficace et sans risque pour votre habitat.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour un service sur-mesure. Nos techniciens sont formés aux dernières techniques de traitement, nous utilisons des produits écologiques homologués, et nous proposons une garantie de 5 ans sur nos interventions. Notre connaissance spécifique des toitures de Menton et du département nous permet d&apos;adapter précisément nos solutions à vos besoins.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 30€ au m², selon la complexité de la toiture, son accessibilité et son état. Pour une maison moyenne de 100m² à Menton, comptez un budget global entre 1500€ et 3000€. Un devis personnalisé gratuit vous permettra d&apos;avoir un tarif exact.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin septembre ou début octobre, après l&apos;été. À Menton, ce période permet de préparer votre toiture avant les potentielles pluies automnales. Un traitement tous les 3-5 ans est recommandé pour maintenir une protection optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un séchage complet de la surface. Nous utilisons un produit spécial pulvérisé uniformément, qui forme un film invisible protecteur. L&apos;opération doit être réalisée par des professionnels pour garantir une étanchéité parfaite et durable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Menton ?
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
