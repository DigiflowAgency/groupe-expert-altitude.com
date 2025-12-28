import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Aulnay-sous-Bois | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse à Aulnay-sous-Bois. Spécialistes depuis plus de 15 ans, n',
  keywords: 'etancheite toiture aulnay-sous-bois, etancheite toit terrasse aulnay-sous-bois, etancheite toiture terrasse aulnay-sous-bois, reparation etancheite aulnay-sous-bois, entreprise etancheite aulnay-sous-bois, fuite toiture terrasse aulnay-sous-bois',
};

export default function EtancheiteToitureAulnaySousBoisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Aulnay-sous-Bois</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse à Aulnay-sous-Bois. Spécialistes depuis plus de 15 ans, nous protégeons efficacement vos bâtiments contre les infiltrations d&apos;eau et les dégradations structurelles.</p>

        <h2>Nos services de étanchéité toiture terrasse a Aulnay-sous-Bois</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux problématiques spécifiques des propriétés d&apos;Aulnay-sous-Bois. Nous intervenons sur tous types de surfaces : résidentielles, commerciales et industrielles. Notre processus débute par un diagnostic précis utilisant des techniques de détection infrarouge et d&apos;imagerie thermique. Nous sélectionnons ensuite les matériaux les plus adaptés - membranes synthétiques, résines polyuréthanes ou systèmes bitumineux - garantissant une protection optimale contre les intempéries. Notre équipe certifiée réalise une pose minutieuse, avec une attention particulière aux points singuliers comme les relevés, les évacuations et les jonctions.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos techniciens possèdent plus de 15 ans d&apos;expérience. Nous proposons une garantie décennale. Nos interventions sont rapides, précises et respectueuses des normes en vigueur. 95% de nos clients recommandent nos services après intervention.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la surface, l&apos;état actuel et les matériaux choisis. Pour une terrasse moyenne de 30m², comptez un budget global entre 2 400€ et 7 500€. Un diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite incluent des traces d&apos;humidité sur les plafonds, des moisissures, des déformations, des taches d&apos;eau ou des écoulements anormaux. Notre équipe utilise des détecteurs d&apos;humidité et des caméras thermiques pour localiser précisément l&apos;origine des infiltrations, même les plus discrètes.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans. La durée dépend des matériaux utilisés, de la qualité de la pose et de l&apos;entretien régulier. Nous recommandons une inspection annuelle pour maintenir une protection optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Aulnay-sous-Bois ?
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
