import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Noisy-le-Grand | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions énergétiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Noisy',
  keywords: 'peinture isolante noisy-le-grand, peinture thermique noisy-le-grand, peinture isolante toiture noisy-le-grand, thermo reflect noisy-le-grand, peinture reflechissante noisy-le-grand, cool roof noisy-le-grand',
};

export default function PeintureIsolanteNoisyLeGrandPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Noisy-le-Grand</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions énergétiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Noisy-le-Grand. Nous transformons vos bâtiments en véritables boucliers thermiques, garantissant un confort optimal et des économies significatives.</p>

        <h2>Nos services de peinture isolante thermique a Noisy-le-Grand</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la technologie de pointe en matière d&apos;isolation et de protection thermique. Nos experts utilisent des techniques innovantes comme le Thermo Reflect, une peinture réfléchissante qui peut réduire jusqu&apos;à 30% des déperditions calorifiques. Pour les toitures de Noisy-le-Grand, nous proposons des solutions spécifiques qui protègent contre les variations de température extrêmes. Notre processus comprend un diagnostic précis, une préparation méticuleuse des surfaces et l&apos;application de produits hautement performants qui améliorent significativement l&apos;efficacité énergétique de votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec plus de 15 ans d&apos;expérience à Noisy-le-Grand
- Produits certifiés avec garantie de performance thermique
- Équipe technique hautement qualifiée et formée aux dernières technologies
- Devis personnalisé et gratuit sous 48h
- Respect des normes environnementales et énergétiques</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la surface, la complexité et le type de support. Pour une toiture moyenne de 100m², comptez un investissement entre 2500€ et 6000€, rapidement amorti par les économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est très efficace : elle peut réduire jusqu&apos;à 35% des déperditions thermiques, améliorer le confort intérieur et diminuer la consommation énergétique. Les technologies comme Thermo Reflect réfléchissent jusqu&apos;à 90% des rayons solaires, créant un effet bouclier thermique remarquable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite : un nettoyage approfondi, une réparation des éventuels défauts, un primaire d&apos;accrochage, puis l&apos;application de 2 couches de peinture spéciale avec des outils professionnels. La préparation et la technique sont essentielles pour garantir une isolation optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Noisy-le-Grand ?
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
