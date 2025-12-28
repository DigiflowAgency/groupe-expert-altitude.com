import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Rezé | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste en zinguerie à Rezé, vous accompagne dans tous vos travaux de toiture et d&apos;étanchéité. Nous intervenons sur l',
  keywords: 'zinguerie rezé, travaux zinguerie rezé, toiture zinc rezé, zingueur rezé, reparation zinc rezé, zinco reflect rezé',
};

export default function ZinguerieRezePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Rezé</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste en zinguerie à Rezé, vous accompagne dans tous vos travaux de toiture et d&apos;étanchéité. Nous intervenons sur l&apos;ensemble du territoire de la métropole nantaise avec une expertise technique irréprochable.</p>

        <h2>Nos services de travaux de zinguerie a Rezé</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial pour la protection et la longévité de votre habitat. Nos techniciens hautement qualifiés réalisent des interventions complètes, depuis la pose de gouttières jusqu&apos;à la rénovation de toitures zinc. Nous utilisons des matériaux de haute qualité garantissant une résistance optimale aux intempéries. Notre processus comprend un diagnostic précis, un devis détaillé et une intervention sur-mesure, avec une attention particulière portée à l&apos;étanchéité et à l&apos;esthétique de votre toiture. Chaque chantier à Rezé est traité avec professionnalisme, en respectant les normes techniques les plus exigeantes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans dans le domaine de la zinguerie, 2) Un personnel certifié et formé en permanence, 3) Des interventions rapides et précises, 4) Un engagement qualité avec garantie décennale sur nos travaux. Nous sommes votre partenaire de confiance pour tous vos projets de zinguerie.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, la hauteur du bâtiment et les matériaux utilisés. Pour un diagnostic précis et personnalisé, nous proposons un devis gratuit après expertise technique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc de qualité peut durer entre 50 et 80 ans, avec un entretien régulier. Sa durabilité exceptionnelle et sa résistance aux variations climatiques en font un matériau particulièrement performant et économique à long terme.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture zinc nécessite un nettoyage annuel, l&apos;élimination des débris végétaux, la vérification des joints et des points de raccordement. Nous recommandons une inspection professionnelle tous les 5 à 7 ans pour garantir son parfait état et prévenir tout risque de détérioration.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Rezé ?
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
