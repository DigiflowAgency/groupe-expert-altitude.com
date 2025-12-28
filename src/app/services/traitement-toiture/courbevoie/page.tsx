import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Courbevoie | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Courbevoie et ses environs. Spécialistes du n',
  keywords: 'demoussage toiture courbevoie, traitement toiture courbevoie, nettoyage toiture courbevoie, antimousse toiture courbevoie, hydrofuge toiture courbevoie, entretien toiture courbevoie',
};

export default function TraitementToitureCourbevoiePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Courbevoie</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Courbevoie et ses environs. Spécialistes du nettoyage et de la protection des toitures, nous intervenons rapidement pour préserver la longévité et l&apos;esthétique de votre patrimoine immobilier.</p>

        <h2>Nos services de traitement et démoussage toiture a Courbevoie</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de la région parisienne. Nos techniciens hautement qualifiés utilisent des techniques professionnelles pour éliminer intégralement la mousse, les lichens et les algues qui détériorent vos tuiles et ardoises. Nous réalisons un diagnostic précis avant toute intervention, évaluant l&apos;état de votre toiture et les traitements nécessaires. Notre processus comprend un nettoyage haute précision, un traitement antimousse écologique et une application d&apos;hydrofuge de protection qui garantit une résistance optimale aux intempéries pendant 7 à 10 ans. À Courbevoie, où l&apos;humidité peut rapidement dégrader les toitures, notre expertise fait la différence.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour la qualité et la fiabilité. Nos avantages clés : des techniciens certifiés, un matériel professionnel dernière génération, des produits écologiques et sans danger, un devis gratuit sous 48h, une intervention rapide sur Courbevoie et ses alentours, et une garantie de résultat de 3 ans sur nos traitements.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 35€ au m², selon la complexité de la toiture, son accessibilité et son état. Pour une maison moyenne de 100m², comptez un budget entre 1500€ et 3500€. Un diagnostic précis gratuit vous permettra d&apos;obtenir un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est généralement fin printemps ou début automne, quand les températures sont douces (entre 10°C et 25°C). Idéalement tous les 5-7 ans, ou dès que vous observez les premiers signes de développement de mousse. À Courbevoie, le climat humide nécessite une vigilance particulière.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;hydrofuge se fait en 3 étapes : nettoyage complet de la surface, séchage total, puis pulvérisation uniformes du produit hydrofuge avec un matériel professionnel. Le produit doit être appliqué par temps sec, avec une température entre 10°C et 25°C, et nécessite 24h de séchage complet.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Courbevoie ?
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
