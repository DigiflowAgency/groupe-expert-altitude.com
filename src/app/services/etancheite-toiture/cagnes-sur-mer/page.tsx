import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Cagnes-sur-Mer | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de confiance en étanchéité de toiture terrasse à Cagnes-sur-Mer, protège efficacement votre patrimoine immobil',
  keywords: 'etancheite toiture cagnes-sur-mer, etancheite toit terrasse cagnes-sur-mer, etancheite toiture terrasse cagnes-sur-mer, reparation etancheite cagnes-sur-mer, entreprise etancheite cagnes-sur-mer, fuite toiture terrasse cagnes-sur-mer',
};

export default function EtancheiteToitureCagnesSurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Cagnes-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de confiance en étanchéité de toiture terrasse à Cagnes-sur-Mer, protège efficacement votre patrimoine immobilier contre les infiltrations. Spécialistes reconnus sur la Côte d&apos;Azur, nous intervenons avec précision pour garantir l&apos;imperméabilité de vos toitures.</p>

        <h2>Nos services de étanchéité toiture terrasse a Cagnes-sur-Mer</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux défis spécifiques de l&apos;habitat méditerranéen, exposé à des conditions climatiques variées. Notre expertise technique nous permet de diagnostiquer précisément les zones vulnérables et d&apos;appliquer des solutions sur-mesure. Nous utilisons uniquement des membranes d&apos;étanchéité haute performance, résistantes aux UV et aux variations thermiques, garantissant une protection durable. Notre processus comprend un diagnostic complet, un nettoyage approfondi, la préparation du support et l&apos;application de systèmes d&apos;étanchéité adaptés, avec un contrôle qualité rigoureux après intervention.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : une expertise de 15 ans sur Cagnes-sur-Mer, des techniciens certifiés, des interventions rapides sous 48h, des matériaux de haute qualité normés, une garantie décennale, et des solutions personnalisées respectant les spécificités architecturales locales.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la surface, l&apos;état du support et la complexité technique. Pour un appartement standard à Cagnes-sur-Mer, comptez un investissement moyen de 3 500€ à 6 000€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez les signes suivants : traces d&apos;humidité sur plafonds, infiltrations lors de pluies, décoloration des peintures, moisissures, ou zones de stagnation d&apos;eau. Un diagnostic professionnel avec caméra thermique permet une détection précise et non invasive.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité professionnelle dure entre 15 et 25 ans, avec un entretien régulier. Nos solutions utilisent des membranes garanties 10 ans, avec possibilité d&apos;extensions selon les matériaux et les conditions d&apos;application.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Cagnes-sur-Mer ?
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
