import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a L\'Haÿ-les-Roses | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse à L&apos;Haÿ-les-Roses et ses environs. Spécialistes depuis plus ',
  keywords: 'etancheite toiture l'haÿ-les-roses, etancheite toit terrasse l'haÿ-les-roses, etancheite toiture terrasse l'haÿ-les-roses, reparation etancheite l'haÿ-les-roses, entreprise etancheite l'haÿ-les-roses, fuite toiture terrasse l'haÿ-les-roses',
};

export default function EtancheiteToitureLHayLesRosesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a L'Haÿ-les-Roses</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse à L&apos;Haÿ-les-Roses et ses environs. Spécialistes depuis plus de 15 ans, nous protégeons efficacement vos bâtiments contre les infiltrations et les dégradations climatiques.</p>

        <h2>Nos services de étanchéité toiture terrasse a L'Haÿ-les-Roses</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux exigences techniques les plus strictes. Nous intervenons sur tous types de surfaces : résidentielles, commerciales et industrielles à L&apos;Haÿ-les-Roses. Notre approche commence par un diagnostic précis utilisant des techniques de pointe comme la thermographie et la détection électronique des zones fragilisées. Nos techniciens mettent en œuvre des membranes synthétiques haute performance, garantissant une protection durable contre l&apos;eau et l&apos;humidité. Chaque intervention est personnalisée, avec des solutions adaptées à la structure et à l&apos;environnement spécifique de votre toiture terrasse.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à L&apos;Haÿ-les-Roses
- Équipe de 12 techniciens certifiés
- Garantie décennale sur nos interventions
- Devis gratuit et diagnostic complet
- Matériaux de haute qualité sélectionnés rigoureusement
- Interventions rapides et professionnelles</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ par m², selon la complexité des travaux, les matériaux utilisés et l&apos;état initial de la surface. Un diagnostic précis permet d&apos;établir un devis détaillé et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations lors de fortes pluies, zones de décoloration, moisissures ou déformations. Un professionnel utilisera des techniques comme la thermographie infrarouge pour localiser précisément les points faibles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée a une durée de vie moyenne de 15 à 25 ans. La longévité dépend de la qualité des matériaux, de l&apos;installation et de l&apos;entretien régulier. Nos interventions sont garanties et suivies de maintenances préventives.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a L'Haÿ-les-Roses ?
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
