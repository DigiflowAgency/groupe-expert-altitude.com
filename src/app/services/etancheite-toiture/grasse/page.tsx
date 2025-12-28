import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Grasse | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Grasse et dans toute la région. Spécialistes depuis pl',
  keywords: 'etancheite toiture grasse, etancheite toit terrasse grasse, etancheite toiture terrasse grasse, reparation etancheite grasse, entreprise etancheite grasse, fuite toiture terrasse grasse',
};

export default function EtancheiteToitureGrassePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Grasse</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Grasse et dans toute la région. Spécialistes depuis plus de 15 ans, nous protégeons votre bâtiment contre les infiltrations grâce à des solutions techniques d&apos;avant-garde.</p>

        <h2>Nos services de étanchéité toiture terrasse a Grasse</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux exigences les plus strictes de protection et de durabilité. Nous intervenons sur tous types de surfaces - résidentielles, commerciales et industrielles - avec une méthodologie précise. Notre diagnostic commence par une inspection complète qui permet d&apos;identifier les zones sensibles et les potentielles sources d&apos;infiltration. Nous utilisons uniquement des matériaux haute performance comme les membranes PVC, les résines polyuréthanes et les systèmes bitumineux multicouches, garantissant une étanchéité optimale. Notre équipe certifiée maîtrise parfaitement les techniques modernes d&apos;application, avec un taux de réussite de 98% sur les chantiers réalisés à Grasse et ses environs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont formés annuellement aux dernières normes d&apos;étanchéité. Nous proposons une garantie décennale, un devis gratuit sous 48h et un accompagnement personnalisé. Notre connaissance fine des spécificités climatiques locales nous permet de proposer des solutions sur-mesure parfaitement adaptées.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 70€ et 250€ au m², selon la surface, la complexité technique et les matériaux utilisés. Pour un projet moyen de 50m², comptez un investissement global entre 3 500€ et 12 500€. Un diagnostic précis permettra d&apos;affiner ce budget.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations lors de fortes pluies, décoloration des murs, moisissures. Un professionnel utilisera des techniques comme la thermographie infrarouge ou le test à l&apos;eau pour localiser précisément l&apos;origine de la fuite.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité professionnelle dure entre 15 et 25 ans, avec un entretien régulier. Les facteurs déterminants sont la qualité des matériaux, la technicité de la pose et l&apos;exposition aux conditions climatiques. Un contrôle annuel est recommandé pour prolonger sa durée de vie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Grasse ?
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
