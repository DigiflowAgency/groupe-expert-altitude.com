import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Arles | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Arles et ses environs. Spécialistes des solutions d',
  keywords: 'etancheite toiture arles, etancheite toit terrasse arles, etancheite toiture terrasse arles, reparation etancheite arles, entreprise etancheite arles, fuite toiture terrasse arles',
};

export default function EtancheiteToitureArlesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Arles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Arles et ses environs. Spécialistes des solutions de protection contre les infiltrations, nous garantissons la longévité et la performance de vos toitures dans le climat provençal exigeant.</p>

        <h2>Nos services de étanchéité toiture terrasse a Arles</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux défis spécifiques des bâtiments à Arles, en proposant des solutions techniques sur-mesure. Nous intervenons avec des membranes haute performance adaptées aux variations thermiques méditerranéennes, utilisant des techniques d&apos;application innovantes qui assurent une protection durable contre les infiltrations. Notre processus comprend un diagnostic précis, un nettoyage approfondi de la surface, la préparation du support et l&apos;application de systèmes d&apos;étanchéité multicouches certifiés. Chaque intervention est réalisée par des techniciens hautement qualifiés, avec des matériaux sélectionnés pour leur résistance et leur durabilité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nous nous distinguons par notre expertise technique, notre connaissance approfondie des spécificités locales et notre engagement qualité. Notre équipe dispose de plus de 15 ans d&apos;expérience, un taux de satisfaction client de 98% et une intervention rapide sous 48h. Nous proposons des garanties décennales et un suivi personnalisé, faisant de nous le partenaire idéal pour la protection de votre patrimoine immobilier.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la surface, la complexité des travaux et les matériaux utilisés. Pour une terrasse moyenne de 30m², comptez un investissement global entre 1500€ et 4500€, incluant diagnostic, matériaux et main-d&apos;œuvre.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez les signes comme des traces d&apos;humidité sur les plafonds, des infiltrations, des moisissures ou des décolorations. Des tests d&apos;étanchéité avec mise en eau permettent de localiser précisément les zones problématiques. Un diagnostic professionnel reste la méthode la plus fiable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans, avec un entretien régulier. Les facteurs déterminants sont la qualité des matériaux, la technique d&apos;application et l&apos;exposition aux conditions climatiques locales à Arles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Arles ?
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
