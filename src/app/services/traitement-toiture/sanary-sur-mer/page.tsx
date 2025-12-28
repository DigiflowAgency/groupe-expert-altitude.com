import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Sanary-sur-Mer | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Sanary-sur-Mer et ses environs. Spécialistes ',
  keywords: 'demoussage toiture sanary-sur-mer, traitement toiture sanary-sur-mer, nettoyage toiture sanary-sur-mer, antimousse toiture sanary-sur-mer, hydrofuge toiture sanary-sur-mer, entretien toiture sanary-sur-mer',
};

export default function TraitementToitureSanarySurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Sanary-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Sanary-sur-Mer et ses environs. Spécialistes du nettoyage et de la protection des toitures depuis plus de 15 ans, nous intervenons rapidement pour préserver la qualité et la longévité de votre patrimoine immobilier.</p>

        <h2>Nos services de traitement et démoussage toiture a Sanary-sur-Mer</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de la région. Nous utilisons des techniques professionnelles qui éliminent efficacement la mousse, les lichens et les algues qui détériorent vos tuiles. Notre processus comprend un nettoyage haute pression respectueux des matériaux, suivi d&apos;un traitement antimousse longue durée qui protège votre toiture contre les futures proliférations. Nos techniciens hautement qualifiés évaluent chaque toiture individuellement pour proposer une solution sur-mesure adaptée à son exposition et à sa composition.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale reconnue à Sanary-sur-Mer
- Équipe certifiée et assurée
- Traitement écologique sans produits nocifs
- Devis gratuit et sans engagement
- Intervention rapide dans un délai de 72h
- Garantie de résultat pendant 3 ans</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 30€ au m², selon la complexité de l&apos;intervention, l&apos;accessibilité et l&apos;état de votre toiture. Pour une maison moyenne de 100m², comptez un budget global entre 1500€ et 3000€ incluant nettoyage et traitement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin avril ou début octobre. Ces périodes correspondent aux conditions climatiques optimales : température modérée, humidité contrôlée, permettant une application et une pénétration parfaites du produit.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un séchage complet de la surface. Notre protocole inclut un nettoyage, un traitement antimicrobien, puis l&apos;application d&apos;un hydrofuge respirant qui protège sans imperméabiliser totalement la toiture, garantissant ainsi sa durabilité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Sanary-sur-Mer ?
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
