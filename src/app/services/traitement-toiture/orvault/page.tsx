import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Orvault | Groupe Expert Altitude Com',
  description: 'Expert Altitude Com est votre partenaire de référence pour le traitement et démoussage de toiture à Orvault et ses environs. Nos professionnels intervienne',
  keywords: 'demoussage toiture orvault, traitement toiture orvault, nettoyage toiture orvault, antimousse toiture orvault, hydrofuge toiture orvault, entretien toiture orvault',
};

export default function TraitementToitureOrvaultPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Orvault</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Expert Altitude Com est votre partenaire de référence pour le traitement et démoussage de toiture à Orvault et ses environs. Nos professionnels interviennent avec précision pour préserver la longévité et l&apos;esthétique de votre couverture, en garantissant un service de qualité adapté aux spécificités climatiques locales.</p>

        <h2>Nos services de traitement et démoussage toiture a Orvault</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture représente bien plus qu&apos;un simple nettoyage. Notre méthode professionnelle débute par un diagnostic précis de l&apos;état de votre couverture, identifiant les zones sensibles et les risques potentiels. Nous utilisons des techniques et produits écologiques qui éliminent efficacement la mousse, les lichens et les algues sans endommager vos tuiles. Notre traitement hydrofuge haute performance permet de protéger durablement votre toiture contre l&apos;humidité, les infiltrations et la prolifération de mousses. En moyenne, notre intervention prolonge la durée de vie de votre toiture de 10 à 15 ans, tout en préservant son aspect esthétique original.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son expertise technique unique à Orvault. Nos techniciens sont certifiés et disposent de plus de 15 ans d&apos;expérience. Nous proposons un devis gratuit et détaillé, un diagnostic précis avant intervention, des produits écologiques homologués, et une garantie de résultat de 3 ans. Notre approche personnalisée et notre engagement qualité font notre réputation.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 25€ par m², selon la complexité de la toiture, son accessibilité et son état. Pour une maison standard à Orvault de 100m², comptez un budget global entre 1500€ et 2500€. Un diagnostic préalable gratuit permet d&apos;affiner ce tarif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin septembre ou début octobre, après la période estivale et avant les premières gelées. Cette période permet un traitement optimal avec une efficacité maximale contre la prolifération des mousses pendant l&apos;hiver et le printemps.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;un hydrofuge nécessite un démoussage préalable impeccable. On utilise un pulvérisateur professionnel, en appliquant le produit uniformément par couches fines, par temps sec et température entre 10-20°C. Le séchage dure environ 24h, créant une barrière protectrice invisible contre l&apos;humidité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Orvault ?
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
