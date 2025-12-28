import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Cannes | Groupe Expert Altitude Com',
  description: 'Spécialiste de la zinguerie sur la Côte d&apos;Azur, le Groupe Expert Altitude Com apporte des solutions techniques innovantes pour vos travaux de toiture à Can',
  keywords: 'zinguerie cannes, travaux zinguerie cannes, toiture zinc cannes, zingueur cannes, reparation zinc cannes, zinco reflect cannes',
};

export default function ZinguerieCannesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Cannes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste de la zinguerie sur la Côte d&apos;Azur, le Groupe Expert Altitude Com apporte des solutions techniques innovantes pour vos travaux de toiture à Cannes et ses environs. Notre expertise en zinguerie garantit la protection durable de votre patrimoine immobilier.</p>

        <h2>Nos services de travaux de zinguerie a Cannes</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la préservation structurelle de votre habitat. Notre équipe intervient sur l&apos;ensemble des systèmes de collecte et d&apos;évacuation des eaux : gouttières, descentes, bavettes, et habillages de toiture. À Cannes, nous maîtrisons les spécificités climatiques méditerranéennes qui impactent directement la longévité des installations. Notre processus démarre par un diagnostic précis, suivi d&apos;une proposition technique personnalisée utilisant des matériaux haute performance comme le zinc Quartz-Zinc® ou le zinco-reflect. Nous garantissons une étanchéité optimale et une résistance aux contraintes environnementales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 15 ans d&apos;expérience en zinguerie
- Interventions rapides sur Cannes et la région azuréenne
- Devis gratuit et transparent sans surprise
- Matériaux sélectionnés auprès de fabricants reconnus</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif moyen d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, l&apos;accessibilité et les matériaux utilisés. Un diagnostic précis nous permet de vous proposer un devis détaillé et compétitif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut facilement atteindre 70 à 100 ans de durée de vie. La qualité de la pose et la maintenance régulière sont des facteurs essentiels pour optimiser sa longévité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris végétaux, la vérification de l&apos;étanchéité des joints et le contrôle de l&apos;état général. Nous proposons des contrats de maintenance préventive adaptés à vos besoins.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Cannes ?
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
