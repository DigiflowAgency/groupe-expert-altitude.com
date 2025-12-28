import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Aubagne | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre spécialiste en zinguerie sur Aubagne, offrant des solutions techniques et durables pour protéger efficacement votre to',
  keywords: 'zinguerie aubagne, travaux zinguerie aubagne, toiture zinc aubagne, zingueur aubagne, reparation zinc aubagne, zinco reflect aubagne',
};

export default function ZinguerieAubagnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Aubagne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre spécialiste en zinguerie sur Aubagne, offrant des solutions techniques et durables pour protéger efficacement votre toiture. Nos experts interviennent avec précision sur l&apos;ensemble des travaux de zinguerie, garantissant une protection optimale contre les infiltrations.</p>

        <h2>Nos services de travaux de zinguerie a Aubagne</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la préservation de votre habitat, particulièrement dans la région d&apos;Aubagne où les conditions climatiques peuvent être exigeantes. Nos professionnels maîtrisent parfaitement la pose et la rénovation d&apos;équipements en zinc, en utilisant des techniques modernes et des matériaux haute performance. Nous réalisons des travaux complets incluant les gouttières, les bavettes, les descentes et les habillages de toiture, en respectant les normes techniques les plus strictes. Notre approche sur-mesure permet de répondre précisément aux besoins spécifiques de chaque bâtiment, avec une attention particulière à l&apos;esthétique et à la durabilité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos zingueurs bénéficient de plus de 15 ans d&apos;expérience, sont certifiés et équipés des dernières technologies. Nous proposons un diagnostic gratuit, des devis détaillés sans engagement et une garantie décennale sur nos interventions. Notre réactivité et notre proximité font de nous le partenaire idéal pour tous vos travaux de zinguerie.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie généralement entre 50€ et 120€ au m², selon la complexité du chantier, la qualité des matériaux et l&apos;accessibilité. Un diagnostic précis nous permet de vous proposer un devis personnalisé, sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans, ce qui en fait un matériau particulièrement durable et économique sur le long terme. Sa résistance aux intempéries et sa faible dilatation sont des atouts majeurs.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris végétaux, la vérification de l&apos;étanchéité des joints et le contrôle de l&apos;état général. Nous recommandons une inspection professionnelle tous les 5 à 7 ans pour garantir sa longévité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Aubagne ?
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
