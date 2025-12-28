import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Paris 3e | Groupe Expert Altitude Com',
  description: 'Spécialiste de l&apos;étanchéité de toiture terrasse à Paris 3e, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations et l',
  keywords: 'etancheite toiture paris 3e, etancheite toit terrasse paris 3e, etancheite toiture terrasse paris 3e, reparation etancheite paris 3e, entreprise etancheite paris 3e, fuite toiture terrasse paris 3e',
};

export default function EtancheiteToitureParis3ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Paris 3e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste de l&apos;étanchéité de toiture terrasse à Paris 3e, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations et les dégradations. Notre expertise technique garantit des solutions durables et sur mesure pour tous vos projets d&apos;étanchéité dans la capitale.</p>

        <h2>Nos services de étanchéité toiture terrasse a Paris 3e</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux exigences les plus strictes de protection et de performance. Nous intervenons sur tous types de surfaces, qu&apos;il s&apos;agisse d&apos;immeubles, de copropriétés ou de bâtiments tertiaires dans Paris 3e et ses environs. Notre méthode commence par un diagnostic précis, utilisant des technologies de pointe comme la thermographie infrarouge pour identifier les points faibles. Nous proposons ensuite un traitement personnalisé avec des membranes synthétiques haute résistance, appliquées selon les normes DTU 43, qui assurent une imperméabilité totale et une durabilité supérieure à 15 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : Une expertise de plus de 20 ans dans l&apos;étanchéité, Des techniciens certifiés et formés en continu, Une approche écologique avec des matériaux éco-responsables, Une garantie décennale sur tous nos travaux réalisés à Paris 3e.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la superficie, la complexité technique et les matériaux utilisés. Pour un projet moyen de 50m² à Paris 3e, comptez un investissement global entre 4 000€ et 12 500€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes comme des traces d&apos;humidité, des infiltrations, des moisissures ou des déformations du plafond. Nos experts utilisent la thermographie infrarouge et des tests d&apos;infiltrométrie pour localiser précisément les zones problématiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans. La durée de vie dépend de la qualité des matériaux, de l&apos;application et de l&apos;entretien régulier. Nos solutions garantissent une protection optimale pendant au moins 15 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Paris 3e ?
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
