import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Paris 6e | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions thermiques avec le Groupe Expert Altitude Com, votre partenaire spécialiste en peinture isolante therm',
  keywords: 'peinture isolante paris 6e, peinture thermique paris 6e, peinture isolante toiture paris 6e, thermo reflect paris 6e, peinture reflechissante paris 6e, cool roof paris 6e',
};

export default function PeintureIsolanteParis6ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Paris 6e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions thermiques avec le Groupe Expert Altitude Com, votre partenaire spécialiste en peinture isolante thermique à Paris 6e. Nous transformons vos toitures et murs en boucliers thermiques performants, alliant esthétique et efficacité énergétique.</p>

        <h2>Nos services de peinture isolante thermique a Paris 6e</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique révolutionne l&apos;isolation de votre patrimoine immobilier. Utilisant des technologies de pointe comme le Thermo Reflect, nous appliquons des revêtements réfléchissants qui peuvent réduire jusqu&apos;à 30% des déperditions thermiques. Notre expertise s&apos;étend des toitures aux façades parisiennes, avec une précision chirurgicale adaptée aux spécificités architecturales du 6e arrondissement. Chaque intervention commence par un diagnostic thermique précis, suivi d&apos;une préparation de surface méticuleuse et d&apos;une application professionnelle garantissant une protection durable et une performance énergétique optimale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos techniciens sont certifiés RGE, nos produits répondent aux normes environnementales les plus strictes. Nous proposons une garantie de 10 ans, un devis personnalisé sous 48h et une intervention rapide sur Paris 6e. Notre engagement : performance, professionnalisme et économies d&apos;énergie.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 50€ et 120€ au m², selon la complexité du support, la technologie utilisée et la surface à traiter. Pour un projet moyen à Paris 6e, comptez environ 80€/m² tout compris, installation et matériau.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent qu&apos;un revêtement réfléchissant comme Thermo Reflect peut réduire jusqu&apos;à 40% des transferts thermiques, diminuant significativement la consommation énergétique et améliorant le confort intérieur.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite 4 étapes : nettoyage approfondi, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis pose de 2 couches de peinture spécifique avec des outils professionnels. La préparation est cruciale pour garantir une isolation optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Paris 6e ?
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
