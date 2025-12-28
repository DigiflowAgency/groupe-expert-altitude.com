import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Vitrolles | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Vitrolles et ses environs. Spécialistes des travaux de toiture et de protecti',
  keywords: 'zinguerie vitrolles, travaux zinguerie vitrolles, toiture zinc vitrolles, zingueur vitrolles, reparation zinc vitrolles, zinco reflect vitrolles',
};

export default function ZinguerieVitrollesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Vitrolles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Vitrolles et ses environs. Spécialistes des travaux de toiture et de protection contre l&apos;eau, nous intervenons avec précision et expertise pour tous vos projets de zinguerie dans la région.</p>

        <h2>Nos services de travaux de zinguerie a Vitrolles</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la protection et la longévité de votre habitat. Nos techniciens hautement qualifiés réalisent des interventions complètes, depuis le diagnostic jusqu&apos;à la pose finale, en utilisant des techniques et matériaux de haute qualité. Nous proposons des solutions sur-mesure adaptées à chaque configuration architecturale, qu&apos;il s&apos;agisse de rénovation ou d&apos;installation neuve à Vitrolles. Notre approche technique garantit une étanchéité optimale et une résistance maximale aux intempéries, avec des matériaux comme le zinc Quartz-Zinc qui offre une durabilité exceptionnelle de plus de 80 ans. Chaque chantier fait l&apos;objet d&apos;un suivi personnalisé et d&apos;un conseil technique précis.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de zingueurs certifiés avec plus de 15 ans d&apos;expérience
- Interventions rapides sur Vitrolles et département 13
- Devis gratuit et détaillé sous 48h
- Matériaux premium et techniques certifiées
- Garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif moyen d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, l&apos;accessibilité et les matériaux utilisés. Chez Groupe Expert Altitude Com, nous proposons des tarifs compétitifs avec un rapport qualité-prix optimal.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 70 et 100 ans. La durée de vie dépend de la qualité de la pose, de l&apos;exposition aux intempéries et de l&apos;entretien régulier. Nos réalisations bénéficient d&apos;une garantie de 30 ans.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des points de fixation. Nous recommandons une inspection professionnelle tous les 5-7 ans pour prévenir tout risque de dégradation et maintenir l&apos;intégrité de votre toiture.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Vitrolles ?
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
