import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Vallauris | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Vallauris et ses environs. Spécialistes reconnus, nous',
  keywords: 'etancheite toiture vallauris, etancheite toit terrasse vallauris, etancheite toiture terrasse vallauris, reparation etancheite vallauris, entreprise etancheite vallauris, fuite toiture terrasse vallauris',
};

export default function EtancheiteToitureVallaurisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Vallauris</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Vallauris et ses environs. Spécialistes reconnus, nous protégeons efficacement vos bâtiments contre les infiltrations d&apos;eau grâce à des solutions techniques innovantes adaptées au climat méditerranéen.</p>

        <h2>Nos services de étanchéité toiture terrasse a Vallauris</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse représente bien plus qu&apos;une simple intervention technique. Nous réalisons un diagnostic précis avant toute intervention, en analysant la structure, les matériaux et les spécificités de votre toiture. Notre équipe utilise des membranes d&apos;étanchéité haute performance, garantissant une protection optimale contre les infiltrations et les dégradations. Chaque chantier à Vallauris fait l&apos;objet d&apos;une approche personnalisée, avec des techniques adaptées (résines liquides, membranes bitumineuses ou synthétiques) selon la configuration du toit. Nos interventions respectent les normes DTU et intègrent systématiquement des tests d&apos;étanchéité précis.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens possèdent plus de 15 ans d&apos;expérience en étanchéité. Nous proposons une garantie décennale, un diagnostic gratuit et un suivi personnalisé. Notre taux de satisfaction client dépasse 95% sur les interventions d&apos;étanchéité de toiture terrasse dans la région.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la complexité du chantier, les matériaux utilisés et la surface à traiter. Pour un toit terrasse standard de 30m², comptez un budget global entre 1500€ et 4500€. Un devis personnalisé gratuit permet de définir précisément votre investissement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations lors de fortes pluies, zones de décoloration, moisissures ou boursoufflures sur les murs. Un professionnel utilisera des méthodes comme la thermographie infrarouge ou des tests à l&apos;eau pour localiser précisément l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée peut durer entre 15 et 25 ans. La durée de vie dépend de plusieurs facteurs : qualité des matériaux, conditions climatiques, entretien régulier et technique de pose. Un suivi annuel et des interventions préventives permettent de prolonger significativement cette durée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Vallauris ?
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
