import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Rillieux-la-Pape | Groupe Expert Altitude Com',
  description: 'Experts en zinguerie depuis plus de 15 ans, le Groupe Expert Altitude Com transforme chaque projet de toiture à Rillieux-la-Pape en solution durable et est',
  keywords: 'zinguerie rillieux-la-pape, travaux zinguerie rillieux-la-pape, toiture zinc rillieux-la-pape, zingueur rillieux-la-pape, reparation zinc rillieux-la-pape, zinco reflect rillieux-la-pape',
};

export default function ZinguerieRillieuxLaPapePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Rillieux-la-Pape</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Experts en zinguerie depuis plus de 15 ans, le Groupe Expert Altitude Com transforme chaque projet de toiture à Rillieux-la-Pape en solution durable et esthétique. Nos interventions sur mesure garantissent une protection optimale de votre habitat contre les intempéries.</p>

        <h2>Nos services de travaux de zinguerie a Rillieux-la-Pape</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial de la protection de votre toiture, assurant l&apos;étanchéité et l&apos;évacuation efficace des eaux pluviales. Notre équipe de professionnels maîtrise parfaitement les techniques de pose et de rénovation des éléments en zinc, depuis les gouttières jusqu&apos;aux habillages de cheminées. Nous utilisons uniquement des matériaux de haute qualité, résistants à la corrosion et adaptés aux conditions climatiques locales de la région lyonnaise. Notre processus d&apos;intervention comprend un diagnostic précis, un devis détaillé et une réalisation méticuleuse, avec une attention constante aux moindres détails techniques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour un service de zinguerie complet et fiable. Nos techniciens sont certifiés et disposent de plus de 15 ans d&apos;expérience. Nous proposons des garanties décennales, un suivi personnalisé et des interventions rapides sur Rillieux-la-Pape et ses environs. Notre engagement qualité se traduit par des solutions durables et un rapport qualité-prix imbattable.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, la hauteur du bâtiment et l&apos;état initial de la toiture. Pour une estimation précise, nous réalisons systématiquement un diagnostic gratuit sur site.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 80 ans. Sa durabilité dépend de la qualité de la pose, de l&apos;épaisseur du zinc utilisé et des conditions environnementales. Notre zinc Reflect garantit une longévité maximale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris végétaux, la vérification de l&apos;étanchéité des joints et le contrôle de l&apos;état général. Nous proposons des contrats d&apos;entretien préventif pour prolonger la durée de vie de vos installations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Rillieux-la-Pape ?
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
