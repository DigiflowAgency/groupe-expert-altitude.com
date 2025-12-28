import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Colomiers | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Colomiers et sa région. Spécialistes des travaux de toiture et de protecti',
  keywords: 'zinguerie colomiers, travaux zinguerie colomiers, toiture zinc colomiers, zingueur colomiers, reparation zinc colomiers, zinco reflect colomiers',
};

export default function ZinguerieColomiersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Colomiers</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Colomiers et sa région. Spécialistes des travaux de toiture et de protection contre les infiltrations, nous intervenons avec précision et expertise depuis plus de 15 ans dans tout le Sud-Ouest.</p>

        <h2>Nos services de travaux de zinguerie a Colomiers</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la préservation et la longévité de votre habitat. Nos équipes qualifiées réalisent des interventions complètes, depuis la pose de gouttières jusqu&apos;à la réfection totale des systèmes d&apos;évacuation des eaux. Nous travaillons uniquement avec des matériaux haute qualité comme le zinc Zinco Reflect, garantissant une durabilité exceptionnelle et une résistance aux conditions climatiques de la région toulousaine. Notre processus inclut un diagnostic technique précis, un devis détaillé et une intervention sur-mesure adaptée à chaque configuration de toiture. Nos techniciens maîtrisent les techniques modernes de zinguerie, assurant une étanchéité parfaite et une esthétique irréprochable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale avec une connaissance approfondie des spécificités architecturales de Colomiers, 2) Un personnel certifié et formé en continu, 3) Des délais d&apos;intervention rapides, généralement sous 72h, 4) Une garantie décennale sur tous nos travaux de zinguerie.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif moyen d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux. Pour une intervention standard à Colomiers, comptez environ 80€/m² incluant matériaux et main-d&apos;œuvre. Un diagnostic préalable gratuit permet d&apos;affiner ce tarif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 70 ans. Sa durée de vie exceptionnelle dépend de la qualité de la pose, de l&apos;exposition et de l&apos;entretien régulier. Notre zinc Zinco Reflect offre une durabilité supérieure grâce à ses propriétés anti-corrosion.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris végétaux, la vérification des joints et des points de fixation. Nous recommandons une inspection professionnelle tous les 5 ans pour prévenir tout risque de dégradation et maintenir les performances du système.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Colomiers ?
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
