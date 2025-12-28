import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Asnières-sur-Seine | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions énergétiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Asniè',
  keywords: 'peinture isolante asnières-sur-seine, peinture thermique asnières-sur-seine, peinture isolante toiture asnières-sur-seine, thermo reflect asnières-sur-seine, peinture reflechissante asnières-sur-seine, cool roof asnières-sur-seine',
};

export default function PeintureIsolanteAsnieresSurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Asnières-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions énergétiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Asnières-sur-Seine. Nos solutions innovantes transforment vos bâtiments en véritables boucliers thermiques, garantissant un confort optimal toute l&apos;année.</p>

        <h2>Nos services de peinture isolante thermique a Asnières-sur-Seine</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la technologie de pointe en isolation énergétique. Utilisant des formules haute performance comme le Thermo Reflect, nous appliquons des revêtements spécialement conçus pour réfléchir jusqu&apos;à 90% des rayons solaires. Sur les toitures d&apos;Asnières-sur-Seine, notre technique cool roof permet de réduire jusqu&apos;à 30% des coûts de climatisation. Chaque intervention commence par un diagnostic précis des surfaces, suivi d&apos;une préparation minutieuse qui assure une adhérence parfaite et une durabilité exceptionnelle. Notre équipe maîtrise les techniques d&apos;application sur tous types de supports : tuiles, tôles, béton, garantissant une protection thermique maximale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos atouts différenciants : une expertise locale de plus de 15 ans, des techniciens certifiés, des produits écologiques répondant aux normes RT2020, et un engagement qualité total. Nous proposons un diagnostic thermique gratuit, des solutions personnalisées et une garantie de performance énergétique. Notre approche sur-mesure fait de nous le partenaire de référence en isolation thermique à Asnières-sur-Seine.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la complexité du support, la technologie utilisée et la surface à traiter. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 6000€, amortissable en 3 à 5 ans grâce aux économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent qu&apos;elle peut réduire jusqu&apos;à 40% des déperditions thermiques, stabiliser la température intérieure et diminuer la consommation énergétique. La technologie réfléchissante bloque les rayonnements solaires, créant un bouclier thermique performant.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante nécessite 4 étapes : nettoyage approfondi du support, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis pose de 2 couches de peinture Thermo Reflect avec un rouleau spécial ou par projection. La préparation et la technique d&apos;application sont cruciales pour garantir une performance optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Asnières-sur-Seine ?
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
