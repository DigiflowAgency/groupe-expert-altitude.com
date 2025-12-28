import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Colombes | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Colombes, spécialiste des travaux de toiture et d&apos;étanchéité. Forts de plus de ',
  keywords: 'zinguerie colombes, travaux zinguerie colombes, toiture zinc colombes, zingueur colombes, reparation zinc colombes, zinco reflect colombes',
};

export default function ZinguerieColombesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Colombes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Colombes, spécialiste des travaux de toiture et d&apos;étanchéité. Forts de plus de 15 ans d&apos;expérience, nous intervenons sur l&apos;ensemble des projets de zinguerie avec une expertise technique irréprochable.</p>

        <h2>Nos services de travaux de zinguerie a Colombes</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;intégralité des besoins en rénovation et protection de toiture. Nous réalisons des travaux complets incluant la pose de gouttières, l&apos;habillage de souches, les bavettes, les raccords et les finitions en zinc. Notre approche technique privilégie le zinco reflect, un matériau hautement durable et esthétique qui garantit une protection optimale contre les infiltrations. Chaque intervention à Colombes est précédée d&apos;un diagnostic précis permettant de proposer une solution sur-mesure adaptée à la configuration spécifique de votre toiture.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 15 ans d&apos;expérience
- Devis gratuit et détaillé sous 48h
- Matériaux de haute qualité et techniques innovantes
- Interventions rapides et précises sur Colombes et ses environs
- Garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux. Pour une toiture standard à Colombes, comptez environ 80€/m² incluant matériaux et main-d&apos;œuvre. Un diagnostic préalable permettra un chiffrage précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc de qualité peut durer entre 50 et 80 ans, avec un entretien régulier. Sa durabilité dépend de la qualité de la pose, de l&apos;exposition et de la maintenance. Nos réalisations bénéficient d&apos;une garantie décennale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des raccords. Nous recommandons une inspection professionnelle tous les 5 ans pour prévenir tout risque de dégradation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Colombes ?
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
