import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a La Seyne-sur-Mer | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse sur La Seyne-sur-Mer et ses environs. Spécialistes depuis pl',
  keywords: 'etancheite toiture la seyne-sur-mer, etancheite toit terrasse la seyne-sur-mer, etancheite toiture terrasse la seyne-sur-mer, reparation etancheite la seyne-sur-mer, entreprise etancheite la seyne-sur-mer, fuite toiture terrasse la seyne-sur-mer',
};

export default function EtancheiteToitureLaSeyneSurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a La Seyne-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse sur La Seyne-sur-Mer et ses environs. Spécialistes depuis plus de 15 ans, nous protégeons efficacement vos bâtiments contre les infiltrations d&apos;eau grâce à des solutions techniques innovantes et durables.</p>

        <h2>Nos services de étanchéité toiture terrasse a La Seyne-sur-Mer</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux problématiques spécifiques des habitations et locaux professionnels de la région. Nous intervenons avec une méthodologie précise : diagnostic technique complet, préparation de surface, application de membranes haute performance et contrôle final d&apos;imperméabilité. Nos techniques garantissent une protection optimale contre l&apos;humidité, les remontées capillaires et les dégradations structurelles. Chaque intervention est personnalisée, en fonction de la configuration du toit, des matériaux existants et des contraintes environnementales locales de La Seyne-sur-Mer.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale de plus de 15 ans
✓ Techniciens certifiés et formés aux dernières normes
✓ Diagnostic et devis gratuits sous 48h
✓ Interventions rapides et sur-mesure
✓ Garantie décennale sur tous nos travaux d&apos;étanchéité</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la surface, la complexité et les matériaux utilisés. Pour une terrasse moyenne de 30m², comptez un investissement entre 1500€ et 4500€. Un diagnostic préalable permettra un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations lors de fortes pluies, décoloration des peintures, moisissures ou boursoufflures. Un professionnel utilisera des techniques comme la caméra thermique ou le test à l&apos;eau pour identifier précisément l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans. La durée de vie dépend de plusieurs facteurs : qualité des matériaux, technique d&apos;application, exposition aux intempéries et entretien régulier. Un contrôle annuel est recommandé pour maintenir une protection optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a La Seyne-sur-Mer ?
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
