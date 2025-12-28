import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Istres | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre la chaleur avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Istres. Nous transformon',
  keywords: 'peinture isolante istres, peinture thermique istres, peinture isolante toiture istres, thermo reflect istres, peinture reflechissante istres, cool roof istres',
};

export default function PeintureIsolanteIstresPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Istres</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre la chaleur avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Istres. Nous transformons vos bâtiments en espaces confortables et économes en énergie grâce à nos techniques innovantes de thermo-réflexion.</p>

        <h2>Nos services de peinture isolante thermique a Istres</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la technologie de pointe en isolation énergétique pour les professionnels et particuliers d&apos;Istres et ses environs. Nous utilisons des peintures réfléchissantes de dernière génération comme Thermo Reflect, capables de réduire jusqu&apos;à 80% des apports thermiques sur les toitures et façades. Notre processus complet comprend un diagnostic thermique précis, le choix du produit adapté et une application professionnelle garantissant une performance optimale. Nos techniques permettent de diminuer jusqu&apos;à 30% des coûts de climatisation et de chauffage, tout en protégeant durablement vos surfaces contre les agressions climatiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Expertise locale à Istres depuis plus de 15 ans, Équipe de techniciens certifiés, Utilisation exclusive de produits écologiques et haute performance, Devis gratuit et personnalisé sous 48h, Garantie de résultat et intervention rapide</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la surface, l&apos;accessibilité et le type de support. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 6000€, rapidement rentabilisé par les économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace : elle réfléchit jusqu&apos;à 90% des rayons solaires, régule la température intérieure et réduit significativement les déperditions thermiques. Des études indépendantes confirment des économies énergétiques de 25 à 35% sur les bâtiments traités.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite plusieurs étapes : nettoyage et préparation de surface, réparation des éventuelles imperfections, application d&apos;un primaire d&apos;accrochage, puis deux couches de peinture thermo-réfléchissante avec un rouleau ou un pistorage professionnel. La préparation et la technique sont cruciales pour garantir une performance optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Istres ?
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
