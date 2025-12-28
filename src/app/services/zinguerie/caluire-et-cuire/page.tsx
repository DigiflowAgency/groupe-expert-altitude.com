import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Caluire-et-Cuire | Groupe Expert Altitude Com',
  description: 'Spécialiste en zinguerie à Caluire-et-Cuire, le Groupe Expert Altitude Com transforme vos projets de toiture avec un savoir-faire précis et une expertise t',
  keywords: 'zinguerie caluire-et-cuire, travaux zinguerie caluire-et-cuire, toiture zinc caluire-et-cuire, zingueur caluire-et-cuire, reparation zinc caluire-et-cuire, zinco reflect caluire-et-cuire',
};

export default function ZinguerieCaluireEtCuirePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Caluire-et-Cuire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste en zinguerie à Caluire-et-Cuire, le Groupe Expert Altitude Com transforme vos projets de toiture avec un savoir-faire précis et une expertise technique inégalée. Nos solutions sur-mesure garantissent la protection et l&apos;esthétique de votre habitat dans la métropole lyonnaise.</p>

        <h2>Nos services de travaux de zinguerie a Caluire-et-Cuire</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la préservation structurelle de votre toiture. Notre équipe intervient sur l&apos;ensemble des travaux de zinguerie, depuis l&apos;installation de gouttières jusqu&apos;à la rénovation complète des systèmes d&apos;évacuation. Nous utilisons des matériaux haute qualité comme le zinc Zinco Reflect, reconnu pour sa durabilité et sa résistance aux intempéries. Chaque intervention est précédée d&apos;un diagnostic technique précis, permettant d&apos;identifier les points faibles et de proposer une solution adaptée. Notre processus comprend un relevé méticuleux, un devis détaillé et une exécution professionnelle, avec une attention particulière aux spécificités architecturales de Caluire-et-Cuire.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence réside dans notre expertise technique pointue, notre réactivité et notre engagement qualité. Plus de 15 ans d&apos;expérience nous permettent de garantir des interventions impeccables. Nous proposons un suivi personnalisé, des délais courts et une transparence totale sur les coûts. Notre certification nous distingue des artisans traditionnels.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux. Pour une toiture moyenne de 50m², comptez un budget global entre 2500€ et 6000€. Nos devis détaillés n&apos;incluent aucun frais caché.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 70 ans. Sa durée de vie exceptionnelle dépend de la qualité de pose, de l&apos;exposition et de l&apos;entretien régulier. Nos réalisations bénéficient d&apos;une garantie décennale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des points de fixation. Nous recommandons une inspection professionnelle tous les 5 ans pour prévenir tout risque de détérioration.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Caluire-et-Cuire ?
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
