import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Gradignan | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour le traitement et démoussage de toiture à Gradignan et ses environs. Spécialistes depuis p',
  keywords: 'demoussage toiture gradignan, traitement toiture gradignan, nettoyage toiture gradignan, antimousse toiture gradignan, hydrofuge toiture gradignan, entretien toiture gradignan',
};

export default function TraitementToitureGradignanPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Gradignan</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour le traitement et démoussage de toiture à Gradignan et ses environs. Spécialistes depuis plus de 15 ans, nous protégeons et valorisons votre patrimoine immobilier grâce à des techniques innovantes et écoresponsables.</p>

        <h2>Nos services de traitement et démoussage toiture a Gradignan</h2>
        <div className="space-y-4">
          <p>Le démoussage de toiture est un service essentiel pour préserver l&apos;intégrité et l&apos;esthétique de votre habitat. À Gradignan, nos experts interviennent méticuleusement pour éliminer la mousse, les lichens et les algues qui fragilisent vos tuiles et ardoises. Notre processus complet comprend un nettoyage haute pression à basse pression, un traitement antimousse professionnel et une application d&apos;hydrofuge protecteur qui garantit une résistance optimale aux intempéries. Chaque intervention est personnalisée selon le type de toiture, avec un diagnostic précis et des solutions adaptées qui prolongent la durée de vie de votre couverture de 10 à 15 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos techniciens sont certifiés, notre matériel est aux normes et nos produits respectent l&apos;environnement. Nous proposons un devis gratuit sous 48h, une intervention rapide et une garantie de résultat de 3 ans. Notre connaissance approfondie des toitures de la région bordelaise nous permet d&apos;intervenir avec une précision chirurgicale.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 35€ le m², selon la complexité de la toiture, son accessibilité et son état. Pour une maison moyenne à Gradignan (environ 100m²), comptez entre 1500€ et 3500€. Un diagnostic préalable gratuit permet un devis précis sans mauvaise surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin avril ou début septembre, périodes où l&apos;humidité et la température sont idéales. À Gradignan, notre climat océanique nécessite un traitement tous les 3 à 5 ans. Il est crucial d&apos;intervenir avant que la mousse ne devienne trop envahissante pour éviter des dégradations structurelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;hydrofuge se fait en 3 étapes : nettoyage complet, séchage total de la surface, puis application au pulvérisateur d&apos;un produit adapté à votre type de toiture. Notre équipe utilise des hydrofuges haute performance qui créent un bouclier invisible contre l&apos;humidité tout en laissant la toiture respirer naturellement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Gradignan ?
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
