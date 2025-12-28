import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Ramonville-Saint-Agne | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse à Ramonville-Saint-Agne et ses environs. Spécialistes rec',
  keywords: 'etancheite toiture ramonville-saint-agne, etancheite toit terrasse ramonville-saint-agne, etancheite toiture terrasse ramonville-saint-agne, reparation etancheite ramonville-saint-agne, entreprise etancheite ramonville-saint-agne, fuite toiture terrasse ramonville-saint-agne',
};

export default function EtancheiteToitureRamonvilleSaintAgnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Ramonville-Saint-Agne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse à Ramonville-Saint-Agne et ses environs. Spécialistes reconnus, nous protégeons vos bâtiments contre les infiltrations avec des solutions techniques sur-mesure et une expertise pointue.</p>

        <h2>Nos services de étanchéité toiture terrasse a Ramonville-Saint-Agne</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux problématiques complexes d&apos;isolation et de protection des surfaces horizontales exposées. Nous intervenons sur tous types de structures, qu&apos;il s&apos;agisse de bâtiments résidentiels, commerciaux ou industriels à Ramonville-Saint-Agne. Notre méthode exclusive combine un diagnostic précis, des matériaux haute performance et une application rigoureuse, garantissant une imperméabilité totale et durable. Nos techniciens utilisent des techniques modernes comme les résines polymères, les membranes synthétiques et les systèmes multicouches pour assurer une protection optimale contre les infiltrations et les dégradations climatiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise technique de plus de 15 ans dans l&apos;étanchéité 
• Équipe certifiée et formée aux dernières normes 
• Diagnostic gratuit et devis détaillé sous 48h 
• Solutions garanties 10 ans 
• Intervention rapide sur Ramonville-Saint-Agne et toute la Haute-Garonne</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la surface, la complexité et les matériaux utilisés. Pour un projet moyen de 50m², comptez un investissement global entre 2 500€ et 7 500€. Un diagnostic précis permettra d&apos;affiner ce budget.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite incluent des traces d&apos;humidité sur les plafonds, des moisissures, des déformations, des écoulements anormaux ou des zones de stagnation d&apos;eau. Un professionnel détectera précisément l&apos;origine via des tests d&apos;infiltration et une inspection thermographique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité professionnelle dure entre 15 et 25 ans. Notre garantie décennale et l&apos;utilisation de matériaux premium assurent une protection prolongée. L&apos;entretien régulier et les interventions préventives sont essentielles pour maintenir cette longévité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Ramonville-Saint-Agne ?
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
