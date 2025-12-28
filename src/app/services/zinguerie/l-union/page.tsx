import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a L\'Union | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance en zinguerie sur L&apos;Union et ses environs. Spécialistes des travaux de toiture et de protect',
  keywords: 'zinguerie l'union, travaux zinguerie l'union, toiture zinc l'union, zingueur l'union, reparation zinc l'union, zinco reflect l'union',
};

export default function ZinguerieLUnionPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a L'Union</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance en zinguerie sur L&apos;Union et ses environs. Spécialistes des travaux de toiture et de protection contre l&apos;eau, nous intervenons avec précision et expertise pour tous vos projets de zinguerie.</p>

        <h2>Nos services de travaux de zinguerie a L'Union</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la protection et l&apos;étanchéité de votre habitat. Nos techniciens hautement qualifiés réalisent des interventions complètes, depuis la pose de gouttières jusqu&apos;à la rénovation de toitures en zinc. Nous utilisons des techniques modernes et des matériaux de haute qualité, garantissant une durabilité maximale. Chaque chantier à L&apos;Union est étudié individuellement, avec une attention méticuleuse aux spécificités architecturales locales. Notre approche combine technicité et esthétique, assurant des solutions sur-mesure qui protègent durablement votre patrimoine immobilier.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à L&apos;Union
- Équipe certifiée et formée aux dernières techniques
- Devis gratuit et transparent
- Interventions rapides et précises
- Matériaux garantis et normes qualité respectées</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux. Pour une toiture moyenne de 50m², comptez un investissement global entre 2500€ et 6000€. Nos devis détaillés vous permettront une estimation précise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 70 ans. Sa résistance aux intempéries et sa faible dilatation en font un matériau particulièrement durable, avec une durée de vie supérieure à l&apos;ardoise ou aux tuiles traditionnelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris végétaux et une vérification de l&apos;étanchéité. Nous recommandons une inspection professionnelle tous les 5 à 7 ans pour prévenir tout risque de corrosion ou de déformation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a L'Union ?
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
