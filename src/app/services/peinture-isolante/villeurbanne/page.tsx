import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Villeurbanne | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre la déperdition énergétique avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Villeurb',
  keywords: 'peinture isolante villeurbanne, peinture thermique villeurbanne, peinture isolante toiture villeurbanne, thermo reflect villeurbanne, peinture reflechissante villeurbanne, cool roof villeurbanne',
};

export default function PeintureIsolanteVilleurbannePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Villeurbanne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre la déperdition énergétique avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Villeurbanne. Nos solutions innovantes transforment vos toitures et murs en boucliers thermiques performants et économiques.</p>

        <h2>Nos services de peinture isolante thermique a Villeurbanne</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la technologie de pointe en isolation énergétique. Utilisant des formules haute technologie comme Thermo Reflect, nous appliquons des revêtements réfléchissants qui peuvent réduire jusqu&apos;à 30% des déperditions thermiques. Notre processus débute par un diagnostic précis de votre bâtiment à Villeurbanne, permettant une application sur mesure adaptée à chaque surface. Les peintures que nous proposons offrent une double protection : thermique et imperméabilité, garantissant une durabilité exceptionnelle contre les variations climatiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Notre équipe certifiée maîtrise parfaitement les techniques de cool roof et de peinture isolante. Nous proposons des garanties jusqu&apos;à 10 ans, utilisons uniquement des matériaux écologiques et notre intervention réduit en moyenne de 25% les factures énergétiques. Notre expertise locale à Villeurbanne nous permet une intervention rapide et personnalisée.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la complexité de la surface et la technologie utilisée. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 6000€, rapidement amorti par les économies énergétiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent qu&apos;elle peut réduire jusqu&apos;à 40% de la chaleur absorbée, régulant significativement la température intérieure. Sa technologie réfléchissante renvoie les rayons solaires, limitant la surchauffe et améliorant le confort thermique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante nécessite plusieurs étapes : nettoyage approfondi de la surface, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis pose de 2 à 3 couches de peinture avec des outils professionnels. La préparation et la technique sont essentielles pour garantir une isolation optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Villeurbanne ?
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
