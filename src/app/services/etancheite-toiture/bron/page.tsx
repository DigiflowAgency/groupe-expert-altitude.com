import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Bron | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Bron et ses environs. Spécialistes en protection contr',
  keywords: 'etancheite toiture bron, etancheite toit terrasse bron, etancheite toiture terrasse bron, reparation etancheite bron, entreprise etancheite bron, fuite toiture terrasse bron',
};

export default function EtancheiteToitureBronPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Bron</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Bron et ses environs. Spécialistes en protection contre les infiltrations, nous garantissons une solution sur mesure pour préserver l&apos;intégrité de votre bâtiment.</p>

        <h2>Nos services de étanchéité toiture terrasse a Bron</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse représente la solution ultime contre les risques d&apos;infiltration et de dégradation structurelle. Notre équipe technique intervient sur tous types de toitures terrasses, qu&apos;elles soient résidentielles ou professionnelles, en utilisant des techniques d&apos;application innovantes et des matériaux haute performance. Nous réalisons un diagnostic précis avant toute intervention, permettant d&apos;identifier les zones fragiles et de proposer un traitement adapté. Notre processus comprend le nettoyage complet de la surface, la préparation du support, l&apos;application de membranes d&apos;étanchéité et un contrôle qualité rigoureux garantissant une protection durable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés avec plus de 15 ans d&apos;expérience en étanchéité sur Bron. Nous proposons des garanties décennales, utilisons uniquement des matériaux certifiés et réalisons des interventions rapides et précises. Notre taux de satisfaction client dépasse les 95%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la complexité du chantier, les matériaux utilisés et la surface à traiter. Pour une terrasse moyenne de 30m², comptez un investissement global entre 1500€ et 4500€, installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes comme les traces d&apos;humidité sur les plafonds, les moisissures, les déformations de peinture ou les infiltrations lors de fortes pluies. Un professionnel utilisera des techniques comme la thermographie ou le test à l&apos;eau pour localiser précisément l&apos;origine de la fuite.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité installée par des professionnels peut durer entre 15 et 25 ans, avec un entretien régulier. Les facteurs déterminants sont la qualité des matériaux, la technique d&apos;installation et l&apos;exposition aux conditions climatiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Bron ?
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
