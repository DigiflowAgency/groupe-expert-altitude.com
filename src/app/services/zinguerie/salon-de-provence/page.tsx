import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Salon-de-Provence | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste en zinguerie à Salon-de-Provence, transforme vos projets de toiture avec une expertise technique irréprochabl',
  keywords: 'zinguerie salon-de-provence, travaux zinguerie salon-de-provence, toiture zinc salon-de-provence, zingueur salon-de-provence, reparation zinc salon-de-provence, zinco reflect salon-de-provence',
};

export default function ZinguerieSalonDeProvencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Salon-de-Provence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste en zinguerie à Salon-de-Provence, transforme vos projets de toiture avec une expertise technique irréprochable. Nous intervenons sur l&apos;ensemble du territoire provençal pour des solutions zinc durables et esthétiques.</p>

        <h2>Nos services de travaux de zinguerie a Salon-de-Provence</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la protection et l&apos;esthétique de votre habitat. Notre équipe de professionnels maîtrise parfaitement les techniques de pose, de réparation et d&apos;installation de systèmes de zinguerie adaptés à chaque configuration architecturale. Nous utilisons uniquement des matériaux de haute qualité garantissant une résistance optimale aux conditions climatiques de Salon-de-Provence. Notre processus comprend un diagnostic précis, une proposition technique détaillée et une mise en œuvre rigoureuse, avec une attention particulière aux finitions et à l&apos;étanchéité. Nos interventions couvrent les gouttières, les descentes d&apos;eau, les bavettes, les habillages de cheminées et tous les éléments nécessitant un travail de zinguerie.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique de plus de 15 ans en zinguerie 2) Des techniciens certifiés et formés aux dernières normes 3) Un devis personnalisé et transparent sans frais cachés 4) Une garantie décennale sur l&apos;ensemble de nos réalisations</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif moyen d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité du chantier, les matériaux utilisés et l&apos;accessibilité. Chez Groupe Expert Altitude Com, nous proposons des devis détaillés sans surprise, adaptés à votre budget et vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut facilement durer entre 50 et 80 ans. Sa longévité exceptionnelle, sa résistance à la corrosion et son faible coefficient de dilatation en font un matériau particulièrement performant pour les climats méditerranéens comme celui de Salon-de-Provence.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris végétaux, la vérification de l&apos;étanchéité des joints et le contrôle de l&apos;état général. Nous recommandons une inspection professionnelle tous les 5 à 7 ans pour garantir sa durabilité et prévenir tout risque de dégradation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Salon-de-Provence ?
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
