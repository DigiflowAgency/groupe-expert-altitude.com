import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Sanary-sur-Mer | Groupe Expert Altitude Com',
  description: 'Experts en étanchéité de toiture terrasse, le Groupe Expert Altitude Com protège votre patrimoine immobilier à Sanary-sur-Mer depuis plus de 15 ans. Nos so',
  keywords: 'etancheite toiture sanary-sur-mer, etancheite toit terrasse sanary-sur-mer, etancheite toiture terrasse sanary-sur-mer, reparation etancheite sanary-sur-mer, entreprise etancheite sanary-sur-mer, fuite toiture terrasse sanary-sur-mer',
};

export default function EtancheiteToitureSanarySurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Sanary-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Experts en étanchéité de toiture terrasse, le Groupe Expert Altitude Com protège votre patrimoine immobilier à Sanary-sur-Mer depuis plus de 15 ans. Nos solutions sur mesure garantissent une protection optimale contre les infiltrations et les dégradations, en préservant la durabilité de vos infrastructures.</p>

        <h2>Nos services de étanchéité toiture terrasse a Sanary-sur-Mer</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse représente bien plus qu&apos;une simple intervention technique. Nous réalisons un diagnostic précis avant toute intervention, en analysant chaque structure avec des outils de dernière génération. Notre processus comprend le traitement des microfissures, l&apos;application de membranes haute performance et un contrôle qualité rigoureux. Nos techniciens qualifiés interviennent sur Sanary-sur-Mer et ses environs, en utilisant des techniques respectueuses de l&apos;environnement et des normes les plus exigeantes. Chaque chantier bénéficie d&apos;une approche personnalisée, adaptée aux spécificités architecturales et climatiques de votre toiture terrasse.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à Sanary-sur-Mer
- Équipe certifiée et formations continues
- Garantie décennale sur nos interventions
- Matériaux professionnels de haute qualité
- Devis gratuit et transparent
- Intervention rapide sous 48h</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toiture terrasse varie entre 80€ et 250€ au m², selon la surface, les matériaux et la complexité des travaux. Un diagnostic précalable permet d&apos;établir un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez les signes comme les traces d&apos;humidité, les moisissures, les déformations du plafond ou les infiltrations. Un professionnel utilisera des techniques comme la thermographie ou le test à l&apos;eau pour identifier précisément l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans, avec un entretien régulier. La durée dépend des matériaux utilisés, de l&apos;exposition aux intempéries et de la qualité de la pose initiale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Sanary-sur-Mer ?
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
