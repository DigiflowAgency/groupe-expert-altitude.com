import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Paris 2e | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Paris 2e. Spécialistes reconnus dans la protection ',
  keywords: 'etancheite toiture paris 2e, etancheite toit terrasse paris 2e, etancheite toiture terrasse paris 2e, reparation etancheite paris 2e, entreprise etancheite paris 2e, fuite toiture terrasse paris 2e',
};

export default function EtancheiteToitureParis2ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Paris 2e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Paris 2e. Spécialistes reconnus dans la protection contre les infiltrations, nous intervenons rapidement pour sécuriser vos espaces et préserver votre patrimoine immobilier.</p>

        <h2>Nos services de étanchéité toiture terrasse a Paris 2e</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse représente la solution professionnelle et durable contre les risques d&apos;infiltration. Notre équipe technique réalise un diagnostic précis, identifiant chaque point faible et proposant une solution sur-mesure adaptée à la structure de votre bâtiment parisien. Nous utilisons uniquement des membranes d&apos;étanchéité haute performance, garantissant une protection maximale contre l&apos;humidité et les intempéries. Notre processus complet comprend le traitement des surfaces, l&apos;application de résines spécialisées et un contrôle qualité rigoureux pour assurer une étanchéité parfaite.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés avec plus de 15 ans d&apos;expérience dans le domaine. Nous proposons une garantie décennale, intervenons sous 48h à Paris 2e et réalisons des travaux avec un taux de satisfaction client de 98%. Notre approche personnalisée et nos solutions innovantes font la différence.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la surface, la complexité et les matériaux utilisés. Pour un appartement parisien moyen de 50m², comptez un investissement global entre 4 000€ et 12 500€. Un diagnostic préalable gratuit permettra de préciser le devis exact.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez les signes suivants : traces d&apos;humidité sur les plafonds, moisissures, décoloration des peintures, infiltrations lors de fortes pluies. Un professionnel utilisera des tests d&apos;étanchéité spécifiques comme la méthode du test à l&apos;eau ou la thermographie infrarouge pour localiser précisément les zones problématiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée a une durée de vie moyenne de 15 à 25 ans. La longévité dépend de la qualité des matériaux, de l&apos;application et de l&apos;entretien régulier. Nos solutions intègrent des membranes avec une garantie de 15 ans, offrant une protection durable contre les infiltrations et les dégradations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Paris 2e ?
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
