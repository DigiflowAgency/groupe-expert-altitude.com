import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Caluire-et-Cuire | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime en isolation thermique avec Groupe Expert Altitude Com, votre partenaire spécialiste en peinture isolante à Caluire-et-Cuire. ',
  keywords: 'peinture isolante caluire-et-cuire, peinture thermique caluire-et-cuire, peinture isolante toiture caluire-et-cuire, thermo reflect caluire-et-cuire, peinture reflechissante caluire-et-cuire, cool roof caluire-et-cuire',
};

export default function PeintureIsolanteCaluireEtCuirePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Caluire-et-Cuire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime en isolation thermique avec Groupe Expert Altitude Com, votre partenaire spécialiste en peinture isolante à Caluire-et-Cuire. Nous transformons vos espaces en havres de confort thermique grâce à des technologies innovantes de peinture réfléchissante.</p>

        <h2>Nos services de peinture isolante thermique a Caluire-et-Cuire</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la solution moderne et performante pour améliorer l&apos;efficacité énergétique de vos bâtiments. Nous utilisons des technologies de pointe comme le Thermo Reflect, une peinture réfléchissante capable de réduire jusqu&apos;à 80% de la chaleur absorbée par les surfaces extérieures. Notre processus débute par un diagnostic précis de votre toiture ou façade à Caluire-et-Cuire, suivi d&apos;une préparation minutieuse des surfaces. Nos techniciens appliquent ensuite une couche de peinture isolante qui agit comme un bouclier thermique, régulant la température intérieure et réduisant significativement vos dépenses énergétiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos équipes sont certifiées et formées aux dernières innovations en isolation thermique. Nous garantissons une intervention rapide, un devis personnalisé et des résultats mesurables. Notre engagement qualité se traduit par des économies immédiates et une valorisation de votre patrimoine immobilier.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 45€ au m², selon la complexité de l&apos;application et le type de surface. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 4500€, amortissable en 3 à 5 ans grâce aux économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent qu&apos;elle peut réduire jusqu&apos;à 30% des déperditions thermiques et abaisser la température intérieure de 4 à 7°C en période estivale. Son efficacité dépend de la qualité du produit et de son application professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite 4 étapes : nettoyage approfondi de la surface, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis pose de 2 couches de peinture Thermo Reflect avec un rouleau ou un pistolet spécialisé. La préparation et la technique sont cruciales pour garantir une isolation optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Caluire-et-Cuire ?
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
