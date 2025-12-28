import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Marignane | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Marignane et ses environs. Spécialistes du ne',
  keywords: 'demoussage toiture marignane, traitement toiture marignane, nettoyage toiture marignane, antimousse toiture marignane, hydrofuge toiture marignane, entretien toiture marignane',
};

export default function TraitementToitureMarignanePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Marignane</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Marignane et ses environs. Spécialistes du nettoyage et de la protection des toitures depuis plus de 15 ans, nous garantissons un service professionnel qui préserve la durabilité de votre patrimoine immobilier.</p>

        <h2>Nos services de traitement et démoussage toiture a Marignane</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de Marignane, caractérisées par un climat méditerranéen propice au développement de mousses et lichens. Notre méthode exclusive combine un nettoyage haute précision et un traitement antimousse écologique, éliminant 98% des végétations parasitaires sans endommager vos tuiles. Notre équipe utilise des techniques respectueuses de l&apos;environnement, avec des produits certifiés, qui protègent durablement votre toiture contre l&apos;humidité et les infiltrations. Un traitement complet permet de restaurer l&apos;aspect esthétique de votre toiture tout en augmentant sa résistance aux agressions climatiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos atouts : Une expertise locale reconnue à Marignane, Un diagnostic technique gratuit avant intervention, Des techniciens certifiés et assurés, Des produits écologiques et haute performance, Une garantie de résultat de 5 ans sur nos traitements. Nous intervenons sur tous types de toitures : tuiles, ardoises, fibrociment, avec un engagement qualité total.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix moyen d&apos;un démoussage de toiture varie entre 15€ et 35€ au m², selon la complexité du chantier, l&apos;accessibilité et l&apos;état initial de la toiture. Pour une maison de 100m², comptez un budget global entre 1500€ et 3500€. Nous proposons un devis personnalisé gratuit après diagnostic précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur période pour un traitement antimousse se situe entre avril et octobre, avec une préférence pour le printemps. Les conditions idéales sont un temps sec et des températures entre 10°C et 25°C. Un traitement préventif tous les 3-5 ans permet de maintenir votre toiture en parfait état.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un séchage complet de la surface. Notre processus inclut : nettoyage haute pression, séchage, application d&apos;un traitement antimousse, puis hydrofugation avec un produit respirant qui protège sans créer de film étanche. Le produit est appliqué uniformément au pulvérisateur pour une protection optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Marignane ?
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
