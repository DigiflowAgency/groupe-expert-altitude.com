import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Vallauris | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Vallauris et ses environs. Spécialistes des s',
  keywords: 'demoussage toiture vallauris, traitement toiture vallauris, nettoyage toiture vallauris, antimousse toiture vallauris, hydrofuge toiture vallauris, entretien toiture vallauris',
};

export default function TraitementToitureVallaurisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Vallauris</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Vallauris et ses environs. Spécialistes des solutions de rénovation et protection, nous intervenons sur mesure pour préserver la longévité et l&apos;esthétique de votre toiture.</p>

        <h2>Nos services de traitement et démoussage toiture a Vallauris</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de Vallauris, exposées à un climat méditerranéen propice au développement des mousses et lichens. Notre équipe technique utilise des techniques professionnelles qui éliminent intégralement les végétaux sans endommager vos tuiles. Nous réalisons un diagnostic précis avant intervention, avec un nettoyage haute pression adapté à chaque type de matériau. Notre traitement antimousse nouvelle génération offre une protection durable de 5 à 7 ans, limitant la prolifération des micro-organismes et protégeant votre toiture contre l&apos;humidité et les infiltrations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre expertise se distingue par : 1) Un diagnostic technique personnalisé, 2) Des produits écologiques homologués, 3) Une intervention rapide et propre, 4) Une garantie de résultat de 3 ans. Chaque année, nous traitons plus de 200 toitures sur la région de Vallauris avec un taux de satisfaction client de 98%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix moyen du démoussage varie entre 15€ et 25€ au m², selon la complexité de la toiture, son accessibilité et le niveau d&apos;encrassement. Pour une maison de 100m², comptez un budget global entre 1500€ et 2500€, incluant le nettoyage et le traitement préventif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin septembre ou début octobre, après la période estivale et avant les premières pluies. Cette période permet une application optimale du produit et une protection hivernale efficace contre l&apos;humidité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite : 1) Un séchage complet de la toiture, 2) Une préparation de surface sans résidus, 3) Une application par temps sec à l&apos;aide d&apos;un pulvérisateur professionnel, 4) Respecter un temps de séchage de 24h avant toute exposition à l&apos;humidité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Vallauris ?
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
