import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Bègles | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Bègles, spécialiste des travaux de toiture et de couverture zinc. Nous interven',
  keywords: 'zinguerie bègles, travaux zinguerie bègles, toiture zinc bègles, zingueur bègles, reparation zinc bègles, zinco reflect bègles',
};

export default function ZinguerieBeglesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Bègles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Bègles, spécialiste des travaux de toiture et de couverture zinc. Nous intervenons sur l&apos;ensemble de la métropole bordelaise avec une expertise technique et un engagement qualité reconnus.</p>

        <h2>Nos services de travaux de zinguerie a Bègles</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;intégralité des besoins en travaux de protection et d&apos;étanchéité. Nous réalisons des installations neuves, des rénovations complètes et des réparations sur mesure, en utilisant uniquement des matériaux haute performance. Notre approche technique privilégie le zinc Quartz-Zinc, garantissant une durabilité exceptionnelle et une résistance aux conditions climatiques locales. Nos zingueurs professionnels maîtrisent parfaitement les techniques de façonnage, de soudure et de pose, assurant une finition irréprochable et une étanchéité totale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : un savoir-faire certifié avec plus de 15 ans d&apos;expérience, des techniciens formés aux dernières normes réglementaires, un devis gratuit et détaillé sous 48h, une intervention rapide sur Bègles et ses environs, et une garantie décennale sur tous nos travaux de zinguerie.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, l&apos;accessibilité et les matériaux utilisés. Pour une estimation précise, nous réalisons systématiquement un diagnostic technique gratuit sur votre site à Bègles.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 70 et 100 ans. La durée de vie dépend de la qualité de la pose, de l&apos;exposition aux intempéries et des traitements de surface réalisés.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture zinc nécessite un nettoyage annuel, l&apos;élimination des mousses et végétations, la vérification des joints et des points de fixation. Nous recommandons un diagnostic professionnel tous les 10 ans pour prévenir tout risque de détérioration.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Bègles ?
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
