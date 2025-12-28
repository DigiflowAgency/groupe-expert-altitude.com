import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Talence | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence en étanchéité de toiture terrasse à Talence et dans toute la région bordelaise. Spécialiste',
  keywords: 'etancheite toiture talence, etancheite toit terrasse talence, etancheite toiture terrasse talence, reparation etancheite talence, entreprise etancheite talence, fuite toiture terrasse talence',
};

export default function EtancheiteToitureTalencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Talence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence en étanchéité de toiture terrasse à Talence et dans toute la région bordelaise. Spécialistes depuis plus de 15 ans, nous protégeons efficacement vos bâtiments contre les infiltrations d&apos;eau.</p>

        <h2>Nos services de étanchéité toiture terrasse a Talence</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux exigences les plus strictes de protection et de durabilité. Nous intervenons sur tous types de toitures terrasses, qu&apos;elles soient résidentielles ou professionnelles, en utilisant des techniques et matériaux de haute qualité. Notre diagnostic précis nous permet de déterminer la meilleure solution technique : résine polyuréthane, membrane PVC, asphalte ou système multicouche. Chaque intervention à Talence est personnalisée, garantissant une imperméabilisation optimale qui protège durablement votre patrimoine contre les risques d&apos;infiltration et de dégradation structurelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 15 ans d&apos;expérience
- Diagnostic technique gratuit et précis
- Interventions rapides sur Talence et l&apos;agglomération bordelaise
- Garantie décennale sur tous nos travaux
- Matériaux haute performance respectant les normes environnementales</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toiture terrasse varie entre 50€ et 150€ par m², selon la surface, la complexité et le type de matériau utilisé. Pour une terrasse moyenne de 30m², comptez un investissement global entre 1500€ et 4500€. Un diagnostic préalable gratuit permettra de définir un devis précis adapté à votre situation.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes suivants : traces d&apos;humidité sur les plafonds, moisissures, décoloration des murs, infiltrations lors de fortes pluies. Nos experts utilisent des techniques professionnelles comme la thermographie infrarouge et des tests d&apos;étanchéité pour localiser précisément l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée peut durer entre 15 et 25 ans. La durée dépend de la qualité des matériaux, de l&apos;installation et de l&apos;entretien régulier. Nos solutions garantissent une protection minimale de 15 ans, avec des options atteignant 25 ans grâce à nos techniques et matériaux premium.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Talence ?
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
