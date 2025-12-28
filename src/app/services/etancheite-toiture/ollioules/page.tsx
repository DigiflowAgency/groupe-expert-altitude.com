import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Ollioules | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste en étanchéité de toiture terrasse à Ollioules, garantit une protection optimale contre les infiltrations et l',
  keywords: 'etancheite toiture ollioules, etancheite toit terrasse ollioules, etancheite toiture terrasse ollioules, reparation etancheite ollioules, entreprise etancheite ollioules, fuite toiture terrasse ollioules',
};

export default function EtancheiteToitureOllioulesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Ollioules</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste en étanchéité de toiture terrasse à Ollioules, garantit une protection optimale contre les infiltrations et les dégradations. Nous intervenons rapidement sur l&apos;ensemble du Var pour sécuriser et préserver votre patrimoine immobilier.</p>

        <h2>Nos services de étanchéité toiture terrasse a Ollioules</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse représente une solution technique complète et sur-mesure pour protéger votre bâtiment contre les risques d&apos;infiltration. Notre équipe d&apos;experts réalise un diagnostic précis avant d&apos;appliquer des membranes d&apos;étanchéité haute performance, adaptées à chaque configuration architecturale. Nous utilisons des techniques modernes comme les résines polymères et les revêtements synthétiques qui assurent une protection durable de 15 à 25 ans. Sur Ollioules et ses environs, nous intervenons aussi bien sur les toitures résidentielles que professionnelles, avec une attention particulière portée à la qualité des matériaux et du travail.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique de plus de 15 ans dans l&apos;étanchéité de toiture
- Équipe certifiée et formée aux dernières technologies
- Diagnostic gratuit et devis détaillé sous 48h
- Interventions rapides et précises sur Ollioules et le Var</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la surface, la complexité et les matériaux choisis. Pour un appartement standard de 50m², comptez un budget global entre 2 500€ et 7 500€. Nos devis sont toujours transparents et détaillés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes comme les traces d&apos;humidité, les moisissures, les déformations du plafond ou les infiltrations. Nos experts utilisent des caméras thermiques et des tests d&apos;infiltrométrie pour localiser précisément les zones problématiques avec une précision de 95%.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans. La durée dépend des matériaux utilisés, de la qualité de la pose et de l&apos;entretien régulier. Nous proposons des garanties décennales pour vous assurer une tranquillité totale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Ollioules ?
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
