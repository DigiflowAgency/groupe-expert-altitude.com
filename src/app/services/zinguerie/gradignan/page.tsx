import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Gradignan | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Gradignan et dans toute la métropole bordelaise. Spécialistes des travaux de zingu',
  keywords: 'zinguerie gradignan, travaux zinguerie gradignan, toiture zinc gradignan, zingueur gradignan, reparation zinc gradignan, zinco reflect gradignan',
};

export default function ZinguerieGradignanPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Gradignan</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Gradignan et dans toute la métropole bordelaise. Spécialistes des travaux de zinguerie, nous intervenons sur tous types de toitures avec une expertise technique et un engagement qualité qui font notre réputation.</p>

        <h2>Nos services de travaux de zinguerie a Gradignan</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;ensemble des besoins en rénovation et installation de systèmes d&apos;évacuation des eaux. Notre équipe maîtrise parfaitement les techniques de pose et de réparation de gouttières, descentes, bandes et habillages en zinc. Nous utilisons uniquement des matériaux de haute qualité garantissant une durabilité exceptionnelle, avec des solutions adaptées à chaque configuration architecturale. Notre approche sur-mesure permet de répondre précisément aux contraintes techniques de votre toiture, en privilégiant l&apos;esthétique et la performance. Nos zingueurs certifiés interviennent avec un outillage professionnel pour des réalisations impeccables.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : une expertise de plus de 15 ans, des techniciens hautement qualifiés, un devis gratuit et détaillé, des matériaux premium, une intervention rapide sur Gradignan et ses environs, et une garantie décennale sur tous nos travaux. Nous sommes votre solution zinguerie complète et fiable.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, l&apos;accessibilité et les matériaux utilisés. Un diagnostic précis sur site permet d&apos;établir un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 80 ans. Sa durée de vie exceptionnelle dépend de la qualité de la pose, de l&apos;environnement et des conditions climatiques locales.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification de l&apos;étanchéité des joints et le traitement préventif contre les mousses et lichens. Un professionnel recommande un contrôle tous les 5 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Gradignan ?
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
