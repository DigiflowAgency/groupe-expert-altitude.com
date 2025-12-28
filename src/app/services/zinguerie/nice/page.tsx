import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Nice | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire référence en zinguerie sur la région niçoise, proposant des solutions techniques innovantes pour protéger e',
  keywords: 'zinguerie nice, travaux zinguerie nice, toiture zinc nice, zingueur nice, reparation zinc nice, zinco reflect nice',
};

export default function ZinguerieNicePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Nice</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire référence en zinguerie sur la région niçoise, proposant des solutions techniques innovantes pour protéger et valoriser vos toitures. Spécialistes des travaux de zinguerie à Nice, nous intervenons avec précision et expertise sur l&apos;ensemble des projets urbains et résidentiels.</p>

        <h2>Nos services de travaux de zinguerie a Nice</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la protection et l&apos;étanchéité des toitures, et notre équipe maîtrise parfaitement tous les aspects techniques de cette discipline. Nos interventions couvrent l&apos;installation, la rénovation et la maintenance de systèmes de zinguerie, en utilisant des matériaux haute qualité comme le zinc Quartz-Zinc et les techniques Zinco Reflect. Nos techniciens hautement qualifiés réalisent un diagnostic précis avant chaque intervention, garantissant une solution sur-mesure adaptée à la configuration spécifique de votre toiture. Nous proposons une approche complète qui intègre l&apos;étude technique, la préparation, la réalisation et le suivi, avec un engagement de résultat et de durabilité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique : notre équipe cumule plus de 25 ans d&apos;expérience en zinguerie. Nous sommes certifiés RGE et intervenons exclusivement avec des matériaux normés. Notre approche transparente inclut un devis détaillé sans surprise, un délai d&apos;intervention rapide de 72h et une garantie décennale sur tous nos travaux. Nos références à Nice témoignent de notre expertise reconnue.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité du chantier, la qualité des matériaux et l&apos;accessibilité. Pour un projet standard à Nice, comptez environ 80€/m² incluant main-d&apos;œuvre et fournitures. Un diagnostic précis permettra d&apos;établir un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Sa durée de vie dépend de plusieurs facteurs : qualité de pose, exposition aux intempéries, entretien régulier. Le zinc développe naturellement une patine protectrice qui le rend particulièrement résistant.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris végétaux, la vérification des joints et des points de fixation. Évitez les produits abrasifs, préférez un lavage à l&apos;eau claire et un traitement anti-mousse tous les 3-4 ans. Un professionnel recommande une inspection détaillée tous les 10 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Nice ?
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
