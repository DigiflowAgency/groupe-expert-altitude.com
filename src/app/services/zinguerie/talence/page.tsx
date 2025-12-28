import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Talence | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire zinguerie de référence à Talence, vous propose des solutions professionnelles pour protéger et embellir vos to',
  keywords: 'zinguerie talence, travaux zinguerie talence, toiture zinc talence, zingueur talence, reparation zinc talence, zinco reflect talence',
};

export default function ZinguerieTalencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Talence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire zinguerie de référence à Talence, vous propose des solutions professionnelles pour protéger et embellir vos toitures. Spécialistes du zinc depuis plus de 15 ans, nous intervenons sur l&apos;ensemble de la métropole bordelaise avec un savoir-faire technique irréprochable.</p>

        <h2>Nos services de travaux de zinguerie a Talence</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la protection et la durabilité de votre habitat. Nos équipes hautement qualifiées réalisent des travaux complets incluant la pose, la rénovation et la réparation d&apos;éléments en zinc : gouttières, descentes d&apos;eau, habillages de cheminées et toitures. Nous utilisons uniquement des matériaux de haute qualité garantissant une résistance optimale aux intempéries. Notre processus d&apos;intervention débute par un diagnostic précis de votre structure, suivi d&apos;un devis détaillé et transparent. Chaque intervention est personnalisée, en respectant les normes techniques et esthétiques les plus exigeantes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise technique certifiée avec plus de 15 ans d&apos;expérience
✓ Équipe de zingueurs hautement qualifiés et formés en continu
✓ Matériaux premium et techniques d&apos;installation innovantes
✓ Intervention rapide sur Talence et ses environs
✓ Garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, la qualité des matériaux et l&apos;accessibilité du chantier. Un diagnostic précis nous permet de vous proposer un devis personnalisé et sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Sa durabilité exceptionnelle dépend de la qualité de la pose, de l&apos;épaisseur du zinc utilisé et de l&apos;entretien régulier. Notre zinc Zinco Reflect offre une durée de vie prolongée grâce à ses propriétés anti-corrosion.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris végétaux, la vérification de l&apos;étanchéité des joints et le contrôle de l&apos;état général. Nous recommandons une inspection professionnelle tous les 5 à 7 ans pour garantir sa longévité et ses performances.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Talence ?
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
