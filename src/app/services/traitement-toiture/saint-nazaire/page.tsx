import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Saint-Nazaire | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste du traitement et démoussage de toiture à Saint-Nazaire, protège et valorise votre patrimoine immobilier avec ',
  keywords: 'demoussage toiture saint-nazaire, traitement toiture saint-nazaire, nettoyage toiture saint-nazaire, antimousse toiture saint-nazaire, hydrofuge toiture saint-nazaire, entretien toiture saint-nazaire',
};

export default function TraitementToitureSaintNazairePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Saint-Nazaire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste du traitement et démoussage de toiture à Saint-Nazaire, protège et valorise votre patrimoine immobilier avec des solutions techniques innovantes. Nous intervenons sur l&apos;ensemble des toitures de la région, en garantissant une prestation professionnelle et durable.</p>

        <h2>Nos services de traitement et démoussage toiture a Saint-Nazaire</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de Saint-Nazaire et sa région. Notre équipe hautement qualifiée utilise des techniques professionnelles pour éliminer la mousse, les lichens et les algues qui détériorent votre couverture. Nous réalisons un diagnostic précis avant intervention, permettant un traitement personnalisé adapté à la nature de votre toiture. Notre processus comprend un nettoyage haute précision, l&apos;application d&apos;un traitement antimousse certifié et un traitement hydrofuge qui protège durablement votre toiture contre l&apos;humidité et les agressions extérieures.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à Saint-Nazaire
- Techniciens certifiés et formés aux dernières normes
- Produits écologiques et homologués
- Devis gratuit et sans engagement
- Garantie de résultat pendant 5 ans
- Intervention rapide sur l&apos;ensemble du territoire nazairien</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix moyen du démoussage varie entre 15€ et 35€ au m², selon la complexité de la toiture, son état et son accessibilité. Un diagnostic précis nous permet de vous proposer un tarif personnalisé et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur période pour un traitement antimousse se situe entre avril et septembre, lors de conditions météorologiques sèches. Un traitement tous les 3 à 5 ans est recommandé pour maintenir l&apos;intégrité de votre toiture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un séchage complet de la surface. Nous utilisons un produit spécifique pulvérisé uniformément, qui pénètre et protège les tuiles tout en conservant leur aspect naturel.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Saint-Nazaire ?
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
