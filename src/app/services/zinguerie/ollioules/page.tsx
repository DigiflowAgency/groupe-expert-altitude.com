import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Ollioules | Groupe Expert Altitude Com',
  description: 'Spécialiste de la zinguerie à Ollioules depuis plus de 15 ans, le Groupe Expert Altitude Com vous propose des solutions techniques et durables pour protége',
  keywords: 'zinguerie ollioules, travaux zinguerie ollioules, toiture zinc ollioules, zingueur ollioules, reparation zinc ollioules, zinco reflect ollioules',
};

export default function ZinguerieOllioulesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Ollioules</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste de la zinguerie à Ollioules depuis plus de 15 ans, le Groupe Expert Altitude Com vous propose des solutions techniques et durables pour protéger efficacement votre toiture. Notre expertise en travaux de zinguerie répond aux exigences des propriétaires les plus attentifs à la qualité et à la longévité de leur habitat.</p>

        <h2>Nos services de travaux de zinguerie a Ollioules</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la préservation de votre patrimoine immobilier. Nos interventions à Ollioules et ses environs couvrent l&apos;intégralité des prestations : installation, rénovation et réparation de gouttières, descentes d&apos;eau, habillages de cheminées et tous systèmes de collecte et évacuation des eaux pluviales. Notre équipe utilise uniquement des matériaux haute qualité comme le zinc Quartz-Zinc, garantissant une résistance exceptionnelle aux intempéries. Chaque chantier fait l&apos;objet d&apos;un diagnostic précis, permettant une intervention sur-mesure adaptée à la configuration de votre toiture. Nos zingueurs professionnels maîtrisent parfaitement les techniques modernes et les normes techniques les plus récentes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale confirmée à Ollioules depuis 2008
- Équipe de 6 zingueurs certifiés et expérimentés
- Devis gratuit et détaillé sous 48h
- Matériaux premium et techniques innovantes
- Garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie généralement entre 50€ et 120€ au m², selon la complexité du chantier, les matériaux utilisés et l&apos;accessibilité. Pour une estimation précise à Ollioules, nous recommandons un diagnostic personnalisé qui prendra en compte les spécificités de votre toiture.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Sa durabilité exceptionnelle dépend de la qualité de la pose, de l&apos;exposition aux intempéries et des traitements de surface réalisés. Notre zinc Quartz-Zinc offre une protection optimale contre la corrosion et les variations climatiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris végétaux, la vérification de l&apos;étanchéité des joints et le contrôle de l&apos;état général. Nous proposons des contrats de maintenance préventive qui garantissent la longévité de vos installations de zinguerie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Ollioules ?
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
