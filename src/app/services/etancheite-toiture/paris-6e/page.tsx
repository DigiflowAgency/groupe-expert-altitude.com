import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Paris 6e | Groupe Expert Altitude Com',
  description: 'Spécialiste de l&apos;étanchéité toiture terrasse à Paris 6e, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations et les ',
  keywords: 'etancheite toiture paris 6e, etancheite toit terrasse paris 6e, etancheite toiture terrasse paris 6e, reparation etancheite paris 6e, entreprise etancheite paris 6e, fuite toiture terrasse paris 6e',
};

export default function EtancheiteToitureParis6ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Paris 6e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste de l&apos;étanchéité toiture terrasse à Paris 6e, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations et les dégradations. Notre expertise technique garantit des solutions durables pour sécuriser vos toitures dans le cœur historique parisien.</p>

        <h2>Nos services de étanchéité toiture terrasse a Paris 6e</h2>
        <div className="space-y-4">
          <p>L&apos;étanchéité de toiture terrasse représente un enjeu crucial pour la préservation de votre bâtiment. Notre méthode exclusive combine diagnostic précis et techniques de pointe pour résoudre tous les problèmes d&apos;infiltration. Nous intervenons sur tous types de surfaces : béton, zinc, membrane synthétique, avec une attention particulière aux spécificités architecturales parisiennes. Notre processus comprend une évaluation complète, un traitement personnalisé et une application rigoureuse des matériaux les plus performants, offrant une protection optimale contre l&apos;humidité et les intempéries.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence en étanchéité. Nos techniciens certifiés possèdent plus de 15 ans d&apos;expérience. Nous proposons une garantie décennale, un diagnostic gratuit et des interventions rapides sur Paris 6e. Notre approche sur-mesure et nos solutions innovantes font de nous le partenaire de confiance pour protéger votre patrimoine.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la complexité des travaux, la surface et les matériaux utilisés. Un diagnostic précalable permet d&apos;établir un devis détaillé et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations, moisissures, décoloration des peintures ou matériaux gondolés. Un professionnel utilisera des tests d&apos;étanchéité et une caméra thermique pour localiser précisément l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans, avec un entretien régulier. La durée de vie dépend des matériaux utilisés, de la qualité de la pose et des conditions climatiques locales.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Paris 6e ?
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
