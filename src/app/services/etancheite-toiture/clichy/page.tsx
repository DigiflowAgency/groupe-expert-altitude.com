import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Clichy | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en étanchéité de toiture terrasse à Clichy et dans toute la région parisienne. Nous protégeons',
  keywords: 'etancheite toiture clichy, etancheite toit terrasse clichy, etancheite toiture terrasse clichy, reparation etancheite clichy, entreprise etancheite clichy, fuite toiture terrasse clichy',
};

export default function EtancheiteToitureClichyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Clichy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en étanchéité de toiture terrasse à Clichy et dans toute la région parisienne. Nous protégeons efficacement vos bâtiments contre les infiltrations d&apos;eau grâce à notre expertise technique et nos solutions sur-mesure.</p>

        <h2>Nos services de étanchéité toiture terrasse a Clichy</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux problématiques spécifiques des immeubles et locaux professionnels de Clichy. Nous intervenons avec des techniques modernes et des matériaux haute performance comme les membranes synthétiques, les résines liquides et les systèmes d&apos;étanchéité multicouches. Notre diagnostic précis permet d&apos;identifier chaque point faible et de proposer une solution durable qui garantit une protection optimale contre les infiltrations. Notre équipe qualifiée réalise un travail minutieux, depuis le traitement des points singuliers jusqu&apos;à l&apos;application finale d&apos;un revêtement imperméable et résistant aux variations climatiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Plus de 15 ans d&apos;expertise en étanchéité à Clichy
✓ Équipe de techniciens certifiés et formés en continu
✓ Diagnostic technique gratuit et devis détaillé sous 48h
✓ Interventions rapides et solutions sur-mesure
✓ Garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la surface, la complexité technique et les matériaux utilisés. Pour un appartement ou un local professionnel à Clichy, comptez en moyenne entre 3 000€ et 8 000€ pour une rénovation complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes comme des traces d&apos;humidité sur les plafonds, des infiltrations, des moisissures ou des déformations. Un professionnel utilisera des méthodes comme la thermographie infrarouge ou le test à l&apos;eau pour localiser précisément l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans. La durée de vie dépend des matériaux utilisés, de la qualité de la pose et de l&apos;entretien régulier. Un diagnostic annuel permet de prolonger significativement la durabilité de votre toiture terrasse.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Clichy ?
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
