import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Couëron | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse à Couëron et ses environs. Spécialistes reconnus, nous pr',
  keywords: 'etancheite toiture couëron, etancheite toit terrasse couëron, etancheite toiture terrasse couëron, reparation etancheite couëron, entreprise etancheite couëron, fuite toiture terrasse couëron',
};

export default function EtancheiteToitureCoueronPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Couëron</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse à Couëron et ses environs. Spécialistes reconnus, nous protégeons vos bâtiments contre les infiltrations avec une expertise technique inégalée dans la région nantaise.</p>

        <h2>Nos services de étanchéité toiture terrasse a Couëron</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux exigences les plus strictes de protection immobilière. Notre processus commence par un diagnostic précis, réalisé par nos techniciens hautement qualifiés, qui identifient chaque point faible potentiel. Nous utilisons uniquement des matériaux haute performance comme les membranes synthétiques EPDM et les résines polyuréthanes, garantissant une protection durable contre les infiltrations. Sur Couëron, nous adaptons chaque intervention aux spécificités architecturales locales, avec une moyenne de 95% de satisfaction client et des solutions durables qui protègent votre patrimoine pendant plus de 15 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos avantages clés : intervention rapide sous 48h, techniciens certifiés, devis gratuit et détaillé, garantie décennale, et une connaissance approfondie des problématiques d&apos;étanchéité spécifiques à la région nantaise. Plus de 15 ans d&apos;expertise au service des professionnels et particuliers.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toiture terrasse varie entre 50€ et 150€ au m², selon la complexité du chantier, les matériaux utilisés et l&apos;état initial de votre toiture. Un diagnostic précis nous permet de vous proposer un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes comme les traces d&apos;humidité sur les plafonds, les moisissures, les déformations ou écoulements anormaux. Un professionnel utilisera des techniques comme la thermographie infrarouge ou des tests d&apos;étanchéité spécifiques pour localiser précisément l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans. La durée dépend des matériaux utilisés, de la qualité de la pose et de l&apos;entretien régulier. Nos solutions intègrent des garanties décennales pour votre tranquillité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Couëron ?
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
