import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Lyon | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour le traitement et démoussage de toiture à Lyon et ses environs. Spécialistes du nettoyage ',
  keywords: 'demoussage toiture lyon, traitement toiture lyon, nettoyage toiture lyon, antimousse toiture lyon, hydrofuge toiture lyon, entretien toiture lyon',
};

export default function TraitementToitureLyonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Lyon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour le traitement et démoussage de toiture à Lyon et ses environs. Spécialistes du nettoyage et de la protection des toitures, nous intervenons rapidement pour préserver la longévité et l&apos;esthétique de votre couverture.</p>

        <h2>Nos services de traitement et démoussage toiture a Lyon</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux défis spécifiques des habitations lyonnaises, exposées à des conditions climatiques variées. Notre équipe utilise des techniques professionnelles pour éliminer efficacement la mousse, les lichens et les algues qui détériorent votre toiture. Nous commençons par un diagnostic précis, suivi d&apos;un nettoyage haute pression respectueux de vos matériaux. Le traitement antimousse appliqué pénètre en profondeur pour prévenir tout nouveau développement, avec une garantie d&apos;efficacité de 3 à 5 ans. Notre intervention protège non seulement l&apos;aspect de votre toiture mais aussi sa structure, évitant des réparations coûteuses à long terme.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée avec plus de 15 ans d&apos;expérience à Lyon, nous garantissons : un devis gratuit sous 48h, des techniciens formés aux dernières normes, un traitement écologique sans produits agressifs, et une intervention rapide adaptée à chaque type de toiture. 95% de nos clients recommandent nos services.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 35€ au m², selon la complexité et l&apos;accessibilité de votre toiture. Un tarif moyen pour une maison lyonnaise de 100m² se situe autour de 2500€, incluant nettoyage et traitement préventif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin printemps ou début automne, avant les périodes d&apos;humidité intense. À Lyon, nous recommandons une intervention tous les 3-4 ans, ou dès que 20% de la surface est colonisée par la mousse.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;hydrofuge s&apos;applique par pulvérisation en 2-3 couches, après séchage complet. Nous utilisons des produits respectant les normes environnementales, qui créent un bouclier invisible protégeant votre toiture contre l&apos;humidité et les infiltrations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Lyon ?
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
