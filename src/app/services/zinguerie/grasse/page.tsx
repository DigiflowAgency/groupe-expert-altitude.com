import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Grasse | Groupe Expert Altitude Com',
  description: 'Spécialiste des travaux de zinguerie sur Grasse et ses environs, le Groupe Expert Altitude Com offre des solutions techniques innovantes pour protéger et v',
  keywords: 'zinguerie grasse, travaux zinguerie grasse, toiture zinc grasse, zingueur grasse, reparation zinc grasse, zinco reflect grasse',
};

export default function ZinguerieGrassePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Grasse</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste des travaux de zinguerie sur Grasse et ses environs, le Groupe Expert Altitude Com offre des solutions techniques innovantes pour protéger et valoriser vos toitures. Notre expertise dans le traitement du zinc garantit des réalisations durables et esthétiques pour les particuliers et professionnels de la région grassoise.</p>

        <h2>Nos services de travaux de zinguerie a Grasse</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément essentiel de la protection de votre habitat contre les infiltrations et les dégradations climatiques. Notre équipe de professionnels intervient sur l&apos;ensemble des ouvrages en zinc : gouttières, descentes d&apos;eau, bavettes, habillages de cheminées et toitures. Nous utilisons uniquement des matériaux de haute qualité, conformes aux normes NF, qui résistent parfaitement aux conditions météorologiques méditerranéennes. Notre processus d&apos;intervention comprend un diagnostic précis, une proposition technique détaillée et une réalisation méticuleuse, avec une attention particulière à l&apos;étanchéité et à l&apos;esthétique de vos installations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 15 ans d&apos;expérience sur Grasse
- Devis gratuit et personnalisé sous 48h
- Matériaux premium garantissant une durabilité de 30 à 50 ans
- Intervention rapide et respect des délais
- Techniques de pose conformes aux réglementations en vigueur</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 150€ au m², selon la complexité des travaux, la qualité des matériaux et l&apos;accessibilité du chantier. Pour une estimation précise, nous recommandons un diagnostic sur place qui permettra de définir le devis exact.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 100 ans. La durée de vie dépend de plusieurs facteurs : qualité de la pose, épaisseur du zinc, exposition aux intempéries et entretien régulier. Notre zinc Reflect offre une garantie de 50 ans.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris végétaux, la vérification de l&apos;étanchéité des joints et le contrôle de l&apos;état général. Nous proposons des contrats de maintenance préventive pour prolonger la durée de vie de vos installations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Grasse ?
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
