import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Toulon | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence en étanchéité de toiture terrasse à Toulon et dans tout le Var. Spécialistes depuis plus de',
  keywords: 'etancheite toiture toulon, etancheite toit terrasse toulon, etancheite toiture terrasse toulon, reparation etancheite toulon, entreprise etancheite toulon, fuite toiture terrasse toulon',
};

export default function EtancheiteToitureToulonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Toulon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence en étanchéité de toiture terrasse à Toulon et dans tout le Var. Spécialistes depuis plus de 15 ans, nous protégeons efficacement vos bâtiments contre les infiltrations et les dégradations climatiques.</p>

        <h2>Nos services de étanchéité toiture terrasse a Toulon</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux exigences techniques les plus strictes. Nous intervenons sur tous types de structures, qu&apos;il s&apos;agisse de bâtiments résidentiels, commerciaux ou industriels à Toulon. Notre méthode exclusive combine un diagnostic précis, des matériaux haute performance et une application professionnelle garantissant une protection optimale contre l&apos;eau. Chaque intervention commence par un état des lieux complet permettant d&apos;identifier les points faibles et de proposer une solution sur-mesure. Nous utilisons uniquement des membranes d&apos;étanchéité certifiées, résistantes aux UV et aux variations climatiques méditerranéennes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à Toulon
- Équipe de techniciens certifiés et formés en continu
- Garantie décennale sur tous nos travaux
- Devis gratuit et transparents sans engagement
- Solutions personnalisées adaptées à chaque configuration de toit</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la surface, la complexité et les matériaux choisis. Pour une terrasse moyenne de 30m², comptez un investissement global entre 1500€ et 4500€. Un diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite incluent des traces d&apos;humidité sur les plafonds, des infiltrations, des zones de décoloration, des moisissures ou des gonflements. Un professionnel détectera également les microfissures, les zones d&apos;affaissement et les points de jonction fragilisés grâce à des techniques comme la thermographie infrarouge.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans. La durée dépend de plusieurs facteurs : qualité des matériaux, technique de pose, exposition aux intempéries et entretien régulier. Nos solutions intègrent des garanties décennales pour vous assurer une tranquillité totale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Toulon ?
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
