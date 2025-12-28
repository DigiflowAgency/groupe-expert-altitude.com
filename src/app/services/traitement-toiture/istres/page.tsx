import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Istres | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Istres et ses environs. Spécialistes du nettoyag',
  keywords: 'demoussage toiture istres, traitement toiture istres, nettoyage toiture istres, antimousse toiture istres, hydrofuge toiture istres, entretien toiture istres',
};

export default function TraitementToitureIstresPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Istres</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Istres et ses environs. Spécialistes du nettoyage et de la protection des toitures, nous intervenons rapidement pour préserver la longévité et l&apos;esthétique de votre couverture.</p>

        <h2>Nos services de traitement et démoussage toiture a Istres</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations d&apos;Istres, soumises à un climat méditerranéen propice au développement des mousses et lichens. Notre équipe technique procède d&apos;abord à un diagnostic précis, évaluant l&apos;état de votre toiture et les zones nécessitant une intervention. Nous utilisons des techniques professionnelles et des produits écologiques qui éliminent efficacement les mousses sans endommager les matériaux. Notre traitement comprend un nettoyage haute précision, un traitement antimousse et une application d&apos;hydrofuge qui protège durablement votre toiture contre l&apos;humidité et les agressions extérieures.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec plus de 15 ans d&apos;expérience à Istres
- Techniciens certifiés et équipements professionnels
- Produits respectueux de l&apos;environnement
- Devis gratuit et intervention rapide
- Garantie satisfaction de 3 ans sur nos traitements</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 30€ par m², selon la complexité de la toiture, son accessibilité et le niveau d&apos;encrassement. Un diagnostic préalable permet un devis précis sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est généralement fin d&apos;été ou début d&apos;automne. Ces périodes offrent des conditions météorologiques optimales : température douce, faible humidité, permettant un séchage et une pénétration efficaces des produits.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;hydrofuge nécessite un nettoyage complet, un séchage total de la surface, puis l&apos;utilisation d&apos;un produit adapté à votre type de toiture (tuiles, ardoises) appliqué uniformément au pulvérisateur ou au rouleau, en respectant les conditions météorologiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Istres ?
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
