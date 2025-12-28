import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Nanterre | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Nanterre et ses environs. Spécialistes reconnus, no',
  keywords: 'etancheite toiture nanterre, etancheite toit terrasse nanterre, etancheite toiture terrasse nanterre, reparation etancheite nanterre, entreprise etancheite nanterre, fuite toiture terrasse nanterre',
};

export default function EtancheiteToitureNanterrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Nanterre</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Nanterre et ses environs. Spécialistes reconnus, nous protégeons vos bâtiments contre les infiltrations grâce à des solutions techniques sur-mesure adaptées à chaque configuration.</p>

        <h2>Nos services de étanchéité toiture terrasse a Nanterre</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux problématiques complexes d&apos;isolation et de protection des surfaces horizontales exposées. Nous intervenons sur tous types de toitures (béton, bois, métalliques) avec des techniques de pointe garantissant une imperméabilité totale. Notre process comprend un diagnostic précis, un nettoyage approfondi, la préparation du support et l&apos;application de membranes synthétiques haute résistance. 95% de nos interventions sur Nanterre et les Hauts-de-Seine bénéficient d&apos;une garantie décennale, témoignant de notre expertise technique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Équipe de techniciens certifiés avec plus de 15 ans d&apos;expérience
• Matériaux premium respectant les normes environnementales
• Diagnostic gratuit et devis détaillé sans engagement
• Interventions rapides sur Nanterre, délai moyen de 48h</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la surface, la complexité et les matériaux utilisés. Pour un appartement standard à Nanterre, comptez un budget global entre 3 000€ et 8 000€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite incluent des traces d&apos;humidité sur les plafonds, des infiltrations, des moisissures, des déformations ou des zones décolorées. Un test d&apos;étanchéité par nos experts permet de localiser précisément les points faibles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans. Nos solutions intègrent des membranes synthétiques garanties 10 ans, avec un entretien régulier permettant de prolonger significativement cette durée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Nanterre ?
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
