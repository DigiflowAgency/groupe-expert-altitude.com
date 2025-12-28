import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Carquefou | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions énergétiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Carqu',
  keywords: 'peinture isolante carquefou, peinture thermique carquefou, peinture isolante toiture carquefou, thermo reflect carquefou, peinture reflechissante carquefou, cool roof carquefou',
};

export default function PeintureIsolanteCarquefouPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Carquefou</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions énergétiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Carquefou. Nos solutions innovantes transforment vos bâtiments en véritables boucliers thermiques, garantissant un confort optimal et des économies significatives.</p>

        <h2>Nos services de peinture isolante thermique a Carquefou</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la technologie de pointe en isolation énergétique pour les professionnels et particuliers de la région nantaise. Utilisant des formules hautement performantes comme le Thermo Reflect, nous appliquons des revêtements réfléchissants qui peuvent réduire jusqu&apos;à 30% des coûts de climatisation et de chauffage. Notre processus débute par un diagnostic précis de votre bâtiment à Carquefou, suivi d&apos;une préparation de surface méticuleuse et d&apos;une application professionnelle qui assure une protection durable contre les variations thermiques. Chaque intervention est personnalisée, en tenant compte des spécificités architecturales et environnementales de votre propriété.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés et formés aux dernières innovations en peinture isolante. Nous garantissons une intervention rapide, un devis transparent et des résultats mesurables. Notre engagement qualité se traduit par des produits écologiques, une application précise et un suivi personnalisé qui font de nous le leader local en solutions thermiques.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 50€ au m², selon la complexité de la surface et le type de revêtement. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 5000€, rapidement rentabilisé par les économies énergétiques générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent qu&apos;un revêtement réfléchissant comme le Thermo Reflect peut réduire la température de surface jusqu&apos;à 20°C et diminuer la consommation énergétique de 30%. Son efficacité dépend de la qualité du produit, de son application et de l&apos;expertise du professionnel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite plusieurs étapes : nettoyage approfondi de la surface, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis pose de 2 à 3 couches de peinture avec des outils professionnels. La préparation et les conditions météorologiques sont cruciales pour garantir une isolation optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Carquefou ?
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
