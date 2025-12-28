import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Tournefeuille | Groupe Expert Altitude Com',
  description: 'Spécialiste de l&apos;étanchéité de toiture terrasse à Tournefeuille, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations',
  keywords: 'etancheite toiture tournefeuille, etancheite toit terrasse tournefeuille, etancheite toiture terrasse tournefeuille, reparation etancheite tournefeuille, entreprise etancheite tournefeuille, fuite toiture terrasse tournefeuille',
};

export default function EtancheiteToitureTournefeuillePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Tournefeuille</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste de l&apos;étanchéité de toiture terrasse à Tournefeuille, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations d&apos;eau. Nos solutions sur-mesure garantissent une protection durable et efficace pour tous vos bâtiments.</p>

        <h2>Nos services de étanchéité toiture terrasse a Tournefeuille</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux défis spécifiques des constructions locales de Tournefeuille et ses environs. Nous intervenons avec des techniques professionnelles utilisant des membranes synthétiques haute résistance, appliquées selon les normes techniques les plus exigeantes. Notre processus comprend un diagnostic précis, un nettoyage complet de la surface, la préparation du support et l&apos;application d&apos;un revêtement imperméable multicouche. Chaque intervention est personnalisée, tenant compte de la structure, de l&apos;exposition aux intempéries et des contraintes architecturales spécifiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir notre entreprise, c&apos;est opter pour l&apos;expertise : 15 ans d&apos;expérience, des techniciens certifiés, un diagnostic gratuit, une intervention rapide sur Tournefeuille. Nous proposons des solutions garanties 10 ans, avec un suivi personnalisé et un engagement qualité total. Notre approche technique et notre réactivité font notre différence.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la superficie, la complexité et les matériaux utilisés. Pour un projet moyen de 50m², comptez un investissement global entre 4 000€ et 12 500€. Un devis précis et gratuit est systématiquement proposé après diagnostic.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations, moisissures, décoloration des peintures. Utilisez un test à l&apos;eau ou faites appel à nos experts qui détectent les microfissures grâce à des techniques thermographiques et ultrasonores.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée peut durer entre 15 et 25 ans. Notre garantie décennale couvre les défauts d&apos;étanchéité. L&apos;entretien régulier et des interventions préventives permettent de prolonger significativement cette durée de vie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Tournefeuille ?
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
