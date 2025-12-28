import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Noisy-le-Grand | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Noisy-le-Grand et ses environs. Spécialistes de la pro',
  keywords: 'etancheite toiture noisy-le-grand, etancheite toit terrasse noisy-le-grand, etancheite toiture terrasse noisy-le-grand, reparation etancheite noisy-le-grand, entreprise etancheite noisy-le-grand, fuite toiture terrasse noisy-le-grand',
};

export default function EtancheiteToitureNoisyLeGrandPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Noisy-le-Grand</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Noisy-le-Grand et ses environs. Spécialistes de la protection contre les infiltrations, nous garantissons des solutions durables pour préserver l&apos;intégrité de votre bâtiment.</p>

        <h2>Nos services de étanchéité toiture terrasse a Noisy-le-Grand</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux défis spécifiques des constructions locales de Noisy-le-Grand. Notre approche technique commence par un diagnostic précis, utilisant des technologies de pointe pour identifier les zones vulnérables. Nous proposons des solutions personnalisées avec des membranes synthétiques haute performance, appliquées selon des techniques professionnelles qui assurent une protection optimale contre l&apos;humidité. Notre processus inclut un traitement multicouche qui renforce la résistance aux intempéries et prolonge significativement la durée de vie de votre toiture.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos experts maîtrisent parfaitement les techniques d&apos;étanchéité modernes. Nous proposons des interventions rapides sous 48h, avec un devis gratuit. Notre équipe certifiée intervient sur Noisy-le-Grand avec un matériel professionnel de dernière génération. 95% de nos clients recommandent nos services après intervention.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la complexité du chantier et les matériaux utilisés. Pour une surface moyenne de 30m², comptez un budget global entre 2 400€ et 7 500€, installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite incluent des traces d&apos;humidité sur les plafonds, des infiltrations lors de pluies, des décolorations suspectes, ou des zones de moisissures. Un professionnel détecte précisément l&apos;origine avec des tests d&apos;infiltrométrie et des caméras thermiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité professionnelle dure entre 15 et 25 ans, avec un entretien régulier. Nos solutions utilisent des membranes garanties 20 ans, offrant une protection durable contre les agressions climatiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Noisy-le-Grand ?
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
