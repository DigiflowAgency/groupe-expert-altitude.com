import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Paris 4e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire référence en étanchéité de toiture terrasse sur Paris 4e, spécialiste des solutions durables contre les inf',
  keywords: 'etancheite toiture paris 4e, etancheite toit terrasse paris 4e, etancheite toiture terrasse paris 4e, reparation etancheite paris 4e, entreprise etancheite paris 4e, fuite toiture terrasse paris 4e',
};

export default function EtancheiteToitureParis4ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Paris 4e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire référence en étanchéité de toiture terrasse sur Paris 4e, spécialiste des solutions durables contre les infiltrations et les désordres structurels. Nous intervenons rapidement et efficacement pour protéger votre patrimoine immobilier avec une expertise technique irréprochable.</p>

        <h2>Nos services de étanchéité toiture terrasse a Paris 4e</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse représente une solution complète et sur-mesure pour les propriétaires parisiens confrontés aux problématiques d&apos;infiltrations. Notre méthode d&apos;intervention commence par un diagnostic précis utilisant des technologies de détection avancées, permettant de cartographier les zones potentiellement fragiles. Nous utilisons uniquement des matériaux haute performance comme les membranes synthétiques EPDM ou les résines polymères, garantissant une protection optimale contre l&apos;eau et les agressions climatiques. Notre équipe technique intervient avec un équipement professionnel, traitant chaque surface avec une attention méticuleuse, en respectant les normes techniques les plus exigeantes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale de plus de 15 ans à Paris 4e 
✓ Diagnostics gratuits et devis détaillés sous 48h 
✓ Garantie décennale sur tous nos travaux 
✓ Techniques d&apos;intervention minimisant les nuisances 
✓ Solutions personnalisées adaptées à chaque configuration de toiture terrasse</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la complexité des travaux, la surface et les matériaux choisis. Pour un appartement parisien moyen de 30m², comptez un budget global entre 2 500€ et 6 000€ TTC, incluant diagnostic, matériaux et main-d&apos;œuvre.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez les signes suivants : traces d&apos;humidité sur les plafonds, moisissures, décoloration des peintures, infiltrations lors de fortes pluies. Un professionnel utilisera une caméra thermique et un test d&apos;étanchéité à l&apos;eau pour localiser précisément l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels à Paris 4e peut durer entre 15 et 25 ans, avec un entretien régulier. Les facteurs déterminants sont la qualité des matériaux, la technique d&apos;application et l&apos;exposition aux conditions climatiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Paris 4e ?
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
