import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Arles | Groupe Expert Altitude Com',
  description: 'Spécialiste en zinguerie à Arles depuis plus de 15 ans, le Groupe Expert Altitude Com transforme et protège vos toitures avec une expertise technique inéga',
  keywords: 'zinguerie arles, travaux zinguerie arles, toiture zinc arles, zingueur arles, reparation zinc arles, zinco reflect arles',
};

export default function ZinguerieArlesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Arles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste en zinguerie à Arles depuis plus de 15 ans, le Groupe Expert Altitude Com transforme et protège vos toitures avec une expertise technique inégalée. Nos solutions sur-mesure en zinguerie garantissent la longévité et l&apos;esthétique de vos bâtiments dans toute la région arlésienne.</p>

        <h2>Nos services de travaux de zinguerie a Arles</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la protection et l&apos;étanchéité de votre toiture. Notre équipe de professionnels intervient sur l&apos;ensemble des travaux de zinguerie, depuis l&apos;installation jusqu&apos;à la rénovation, en utilisant des techniques et matériaux de haute qualité. Nous proposons des solutions complètes incluant la pose de gouttières, bavettes, chéneaux et habillages en zinc, adaptés à chaque configuration architecturale. Notre approche technique privilégie le zinc Zinco Reflect, un matériau innovant offrant une durabilité exceptionnelle et une excellente résistance aux conditions climatiques méditerranéennes. Chaque intervention est précédée d&apos;un diagnostic précis pour garantir une prestation sur-mesure et optimale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale de plus de 15 ans à Arles
✓ Techniciens certifiés et formés aux dernières normes
✓ Devis gratuit et transparent sous 48h
✓ Matériaux premium et techniques innovantes
✓ Intervention rapide sur tout le département des Bouches-du-Rhône</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux. Pour une toiture moyenne de 50m², comptez un budget global entre 2 500€ et 6 000€. Nos devis détaillés incluent la main-d&apos;œuvre, les matériaux et garantissent une transparence totale.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Sa durée de vie dépend de plusieurs facteurs : qualité de la pose, exposition aux intempéries et entretien régulier. Le zinc offre une durabilité exceptionnelle comparé à d&apos;autres matériaux de couverture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification de l&apos;étanchéité des joints et le traitement préventif contre les mousses. Nous recommandons une inspection professionnelle tous les 5-7 ans pour maintenir ses performances et sa longévité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Arles ?
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
