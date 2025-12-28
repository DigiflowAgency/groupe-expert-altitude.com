import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Salon-de-Provence | Groupe Expert Altitude Com',
  description: 'Protégez votre patrimoine immobilier avec l&apos;expertise en étanchéité de toiture terrasse du Groupe Expert Altitude Com, votre partenaire de confiance à Salo',
  keywords: 'etancheite toiture salon-de-provence, etancheite toit terrasse salon-de-provence, etancheite toiture terrasse salon-de-provence, reparation etancheite salon-de-provence, entreprise etancheite salon-de-provence, fuite toiture terrasse salon-de-provence',
};

export default function EtancheiteToitureSalonDeProvencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Salon-de-Provence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Protégez votre patrimoine immobilier avec l&apos;expertise en étanchéité de toiture terrasse du Groupe Expert Altitude Com, votre partenaire de confiance à Salon-de-Provence. Nos solutions innovantes garantissent une protection durable contre les infiltrations et les dégradations climatiques.</p>

        <h2>Nos services de étanchéité toiture terrasse a Salon-de-Provence</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux exigences techniques les plus strictes, en proposant une intervention complète et personnalisée. Notre équipe qualifiée analyse précisément l&apos;état de votre toiture, identifie les zones sensibles et met en œuvre des techniques de rénovation adaptées. Nous utilisons uniquement des matériaux haute performance comme les membranes synthétiques EPDM et les résines polyuréthane, assurant une imperméabilité optimale. Sur Salon-de-Provence et ses environs, nous intervenons aussi bien sur les toitures commerciales que résidentielles, avec une moyenne de 95% de satisfaction client.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour une expertise locale incontournable. Nos techniciens bénéficient de plus de 15 ans d&apos;expérience en étanchéité, notre intervention est garantie 10 ans, et nous proposons un diagnostic gratuit. Nous sommes certifiés RGE et maîtrisons parfaitement les techniques d&apos;étanchéification les plus récentes.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la surface, l&apos;état initial et les matériaux choisis. Pour une terrasse moyenne de 30m², comptez un budget global entre 1500€ et 4500€, installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, recherchez des signes comme des taches d&apos;humidité sur les plafonds, des infiltrations lors de pluies, des zones de décoloration ou des moisissures. Un professionnel utilisera des tests d&apos;étanchéité précis comme la méthode de la caméra thermique ou le test à l&apos;eau.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans, avec un entretien régulier. Les facteurs déterminants sont la qualité des matériaux, la pose et les conditions climatiques locales à Salon-de-Provence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Salon-de-Provence ?
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
