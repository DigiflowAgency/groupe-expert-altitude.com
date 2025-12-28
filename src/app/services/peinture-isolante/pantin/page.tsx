import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Pantin | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions thermiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante à Pantin. Nous tran',
  keywords: 'peinture isolante pantin, peinture thermique pantin, peinture isolante toiture pantin, thermo reflect pantin, peinture reflechissante pantin, cool roof pantin',
};

export default function PeintureIsolantePantinPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Pantin</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions thermiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante à Pantin. Nous transformons vos bâtiments en véritables boucliers thermiques, réduisant jusqu&apos;à 30% vos coûts énergétiques.</p>

        <h2>Nos services de peinture isolante thermique a Pantin</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la technologie de pointe en matière d&apos;économies d&apos;énergie. Utilisant des formules innovantes comme Thermo Reflect, nous appliquons une peinture réfléchissante qui agit comme un bouclier thermique sur vos toitures, façades et murs. Notre processus débute par un diagnostic précis des surfaces à traiter à Pantin, suivi d&apos;une préparation minutieuse qui garantit une adhérence parfaite. Les pigments haute technologie permettent de réfléchir jusqu&apos;à 90% des rayons solaires, stabilisant la température intérieure et réduisant considérablement la consommation énergétique. Chaque intervention est personnalisée, avec des solutions adaptées aux spécificités de votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son expertise technique pointue. Nos techniciens sont certifiés et formés aux dernières technologies d&apos;isolation thermique. Nous garantissons une intervention rapide, propre et sans désagrément. Notre engagement qualité se traduit par des matériaux premium, une mise en œuvre professionnelle et des résultats garantis. De plus, nous proposons un suivi personnalisé et un conseil technique après intervention.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la complexité de l&apos;application et la surface traitée. Pour une toiture moyenne à Pantin, comptez environ 1500€ à 3000€ pour une intervention complète. Ce tarif inclut la préparation, l&apos;application et les matériaux haute performance.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est réellement efficace, avec des études démontrant jusqu&apos;à 35% de réduction des déperditions thermiques. Les peintures réfléchissantes comme Thermo Reflect créent une barrière qui limite les transferts de chaleur, régulant la température intérieure été comme hiver. Son efficacité dépend de la qualité du produit et de son application professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite plusieurs étapes : nettoyage et préparation de la surface, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis pose de la peinture en 2 à 3 couches croisées. Il est crucial de travailler par températures modérées et avec un outillage professionnel pour garantir un résultat optimal.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Pantin ?
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
