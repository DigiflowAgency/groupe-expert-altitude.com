import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Le Cannet | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture sur Le Cannet et ses environs. Spécialistes du net',
  keywords: 'demoussage toiture le cannet, traitement toiture le cannet, nettoyage toiture le cannet, antimousse toiture le cannet, hydrofuge toiture le cannet, entretien toiture le cannet',
};

export default function TraitementToitureLeCannetPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Le Cannet</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture sur Le Cannet et ses environs. Spécialistes du nettoyage et de la protection des toitures, nous garantissons une intervention professionnelle qui préservera la longévité et l&apos;esthétique de votre habitat.</p>

        <h2>Nos services de traitement et démoussage toiture a Le Cannet</h2>
        <div className="space-y-4">
          <p>Le démoussage de toiture est une étape cruciale pour maintenir l&apos;intégrité de votre couverture. Notre méthode exclusive permet d&apos;éliminer efficacement les mousses, lichens et salissures qui détériorent vos tuiles. Nous utilisons des produits écologiques et haute performance, adaptés à chaque type de toiture. Notre processus comprend un diagnostic précis, un nettoyage haute pression respectueux des matériaux, puis l&apos;application d&apos;un traitement antimousse et hydrofuge. Cette approche globale protège votre toiture contre l&apos;humidité, les infiltrations et assure une durabilité accrue de jusqu&apos;à 10 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale sur Le Cannet avec plus de 15 ans d&apos;expérience
- Techniciens certifiés et équipements professionnels
- Devis gratuit et personnalisé sous 48h
- Garantie satisfaction et intervention écologique</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 30€ au m², selon la complexité de la toiture, son état et son accessibilité. Pour une maison moyenne de 100m² sur Le Cannet, comptez un budget entre 1500€ et 3000€, incluant nettoyage et traitement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Idéalement, réalisez un traitement antimousse tous les 5-7 ans, ou dès que vous observez les premiers signes de prolifération. Les périodes optimales sont le printemps et l&apos;automne, avec des températures entre 10°C et 25°C pour une application efficace.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, appliquez l&apos;hydrofuge à l&apos;aide d&apos;un pulvérisateur professionnel, en couche uniforme et fine. Respectez un séchage de 24h, travaillez par journée sans pluie et par température entre 15-20°C pour une absorption optimale du produit.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Le Cannet ?
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
