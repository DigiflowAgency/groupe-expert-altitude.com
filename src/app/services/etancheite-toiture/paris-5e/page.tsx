import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Paris 5e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en étanchéité de toiture terrasse sur Paris 5e, offrant des solutions professionnelles pour prot',
  keywords: 'etancheite toiture paris 5e, etancheite toit terrasse paris 5e, etancheite toiture terrasse paris 5e, reparation etancheite paris 5e, entreprise etancheite paris 5e, fuite toiture terrasse paris 5e',
};

export default function EtancheiteToitureParis5ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Paris 5e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en étanchéité de toiture terrasse sur Paris 5e, offrant des solutions professionnelles pour protéger efficacement votre patrimoine immobilier contre les infiltrations et les dégradations.</p>

        <h2>Nos services de étanchéité toiture terrasse a Paris 5e</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux problématiques complexes d&apos;isolation et de protection des surfaces horizontales exposées aux intempéries. Nous intervenons sur tous types de toitures terrasses, qu&apos;elles soient résidentielles ou professionnelles, en utilisant des techniques de pointe et des matériaux haute performance. Notre expertise nous permet de diagnostiquer précisément les zones fragilisées, de proposer des solutions sur-mesure et de réaliser une étanchéification durable qui résiste aux contraintes climatiques parisiennes. Chaque intervention est précédée d&apos;un diagnostic technique complet permettant d&apos;identifier les causes profondes des désordres et de proposer l&apos;intervention la plus adaptée et économique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos points forts : Une expertise de plus de 15 ans sur Paris 5e, une équipe de techniciens certifiés, des interventions rapides sous 48h, des matériaux garantis 10 ans, un diagnostic gratuit et précis, et une approche environnementale privilégiant des solutions durables et économes en énergie.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toiture terrasse varie entre 80€ et 250€ au m², selon la surface, la complexité des travaux et les matériaux utilisés. Pour un projet moyen de 30m², comptez un budget global entre 2 500€ et 7 500€. Un diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations lors de fortes pluies, décoloration des peintures, moisissures, ou écoulements anormaux. Un professionnel utilisera des techniques comme la thermographie infrarouge ou le test à l&apos;eau pour identifier précisément l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de vie d&apos;une étanchéité de toiture terrasse bien réalisée oscille entre 15 et 25 ans, avec un entretien régulier. Les facteurs déterminants sont la qualité des matériaux, la pose, l&apos;exposition aux intempéries et la maintenance. Un contrôle annuel est recommandé pour prolonger sa durabilité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Paris 5e ?
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
