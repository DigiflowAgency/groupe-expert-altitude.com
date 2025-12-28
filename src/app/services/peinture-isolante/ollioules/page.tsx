import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Ollioules | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions énergétiques avec notre peinture isolante thermique, spécialement conçue pour les habitations d&apos;Olliou',
  keywords: 'peinture isolante ollioules, peinture thermique ollioules, peinture isolante toiture ollioules, thermo reflect ollioules, peinture reflechissante ollioules, cool roof ollioules',
};

export default function PeintureIsolanteOllioulesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Ollioules</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions énergétiques avec notre peinture isolante thermique, spécialement conçue pour les habitations d&apos;Ollioules. Groupe Expert Altitude Com vous propose une technologie de pointe qui transforme vos murs et toitures en boucliers thermiques performants.</p>

        <h2>Nos services de peinture isolante thermique a Ollioules</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la solution moderne et écologique pour améliorer le confort énergétique de votre habitat à Ollioules. Nous utilisons des technologies innovantes comme Thermo Reflect, qui permet de réfléchir jusqu&apos;à 90% des rayonnements solaires. Notre processus d&apos;application professionnelle comprend une préparation minutieuse des surfaces, un diagnostic thermique précis et l&apos;utilisation de peintures hautement techniques qui réduisent jusqu&apos;à 35% des déperditions thermiques. Nos experts interviennent sur toitures, façades et murs intérieurs, garantissant une isolation optimale et durable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés RGE, notre matériel est de dernière génération et nous proposons une garantie de performance énergétique. Nous intervenons rapidement sur Ollioules et ses environs, avec un devis personnalisé et gratuit. Notre engagement qualité fait la différence.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 30€ et 70€ au m², selon la complexité du support et la technologie utilisée. Pour une toiture moyenne de 100m², comptez un investissement global entre 3000€ et 7000€, rapidement rentabilisé par les économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent qu&apos;elle peut réduire jusqu&apos;à 15°C la température intérieure en été et améliorer l&apos;isolation de 20 à 35% toute l&apos;année. Son efficacité dépend de la qualité du produit et de son application professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite plusieurs étapes : nettoyage haute pression, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis 2 couches de peinture spéciale avec des outils professionnels. Notre équipe maîtrise parfaitement ce processus technique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Ollioules ?
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
