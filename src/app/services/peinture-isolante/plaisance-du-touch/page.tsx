import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Plaisance-du-Touch | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions thermiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Plaisan',
  keywords: 'peinture isolante plaisance-du-touch, peinture thermique plaisance-du-touch, peinture isolante toiture plaisance-du-touch, thermo reflect plaisance-du-touch, peinture reflechissante plaisance-du-touch, cool roof plaisance-du-touch',
};

export default function PeintureIsolantePlaisanceDuTouchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Plaisance-du-Touch</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions thermiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Plaisance-du-Touch. Nos solutions innovantes transforment vos bâtiments en véritables boucliers thermiques, garantissant un confort optimal et des économies d&apos;énergie significatives.</p>

        <h2>Nos services de peinture isolante thermique a Plaisance-du-Touch</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la technologie de pointe en isolation. Nous utilisons des produits haute performance comme Thermo Reflect, qui réfléchit jusqu&apos;à 85% des rayonnements solaires, créant une barrière thermique exceptionnelle. Notre équipe d&apos;experts intervient sur tous types de surfaces - toitures, façades, murs intérieurs - avec une précision chirurgicale. Chaque projet à Plaisance-du-Touch bénéficie d&apos;un diagnostic personnalisé, permettant d&apos;optimiser l&apos;application et l&apos;efficacité thermique. Nos peintures isolantes réduisent en moyenne de 30% les déperditions énergétiques, transformant votre bâtiment en un espace économe et confortable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Notre certification RGE garantit un travail conforme aux normes environnementales. Nous maîtrisons parfaitement les techniques de cool roof et de peinture réfléchissante. Notre équipe dispose de plus de 15 ans d&apos;expérience dans l&apos;isolation thermique. Nous proposons une garantie de performance et un suivi personnalisé post-intervention.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la complexité de la surface, le type de support et la technologie utilisée. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 6000€, rapidement rentabilisé par les économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent qu&apos;elle peut réduire jusqu&apos;à 40% des transferts thermiques, stabiliser la température intérieure et diminuer la consommation énergétique. Sa performance dépend de la qualité du produit, de son application et de la préparation du support.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite plusieurs étapes : nettoyage approfondi, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis pose de 2 à 3 couches de peinture Thermo Reflect avec un rouleau spécifique ou par projection. Un séchage de 24h entre chaque couche est recommandé.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Plaisance-du-Touch ?
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
