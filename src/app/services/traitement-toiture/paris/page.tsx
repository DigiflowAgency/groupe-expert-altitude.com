import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Paris | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en traitement et démoussage de toiture à Paris et en région parisienne. Nos experts interviennen',
  keywords: 'demoussage toiture paris, traitement toiture paris, nettoyage toiture paris, antimousse toiture paris, hydrofuge toiture paris, entretien toiture paris',
};

export default function TraitementToitureParisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Paris</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en traitement et démoussage de toiture à Paris et en région parisienne. Nos experts interviennent rapidement pour protéger et restaurer la qualité de vos couvertures avec une expertise technique reconnue.</p>

        <h2>Nos services de traitement et démoussage toiture a Paris</h2>
        <div className="space-y-4">
          <p>Le démoussage de toiture est un service essentiel pour préserver la longévité et l&apos;esthétique de votre habitat. Notre méthode professionnelle commence par un diagnostic précis de l&apos;état de votre toiture, identifiant les zones sensibles à la prolifération de mousse et de lichens. Nous utilisons des produits écologiques et haute performance qui éliminent efficacement les mousses tout en respectant l&apos;intégrité de vos matériaux de couverture. Notre traitement comprend un nettoyage approfondi, un traitement antimousse et une application d&apos;hydrofuge qui protège durablement contre les infiltrations et les développements biologiques. Chaque intervention est personnalisée selon la nature de votre toiture (tuiles, ardoises, zinc) et ses spécificités.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est garantir un service de qualité supérieure. Nos techniciens sont certifiés et disposent de plus de 15 ans d&apos;expérience dans le traitement des toitures parisiennes. Nous proposons un diagnostic gratuit, des tarifs transparents, et intervenons avec un équipement de sécurité professionnel. Notre engagement qualité se traduit par une garantie de 5 ans sur nos traitements.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage de toiture varie entre 15€ et 35€ au m², selon la complexité de l&apos;intervention, l&apos;accessibilité et l&apos;état initial de la toiture. Un pavillon standard de 100m² représente un budget moyen de 1500€ à 2500€. Nous proposons un devis personnalisé et gratuit après expertise sur site à Paris.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour réaliser un traitement antimousse est généralement à l&apos;automne ou au début du printemps, soit entre septembre et avril. Ces périodes offrent des conditions climatiques optimales : températures modérées et faible humidité, permettant un séchage et une pénétration efficaces des produits de traitement.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après un démoussage, l&apos;application d&apos;un hydrofuge nécessite plusieurs étapes : un nettoyage complet, un séchage total de la surface, puis l&apos;application au rouleau ou par pulvérisation d&apos;un produit hydrofuge spécifique. La pose doit être uniforme, en respectant les conditions de température (entre 10°C et 25°C) et sans risque de pluie dans les 48h suivantes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Paris ?
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
