import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Saint-Sébastien-sur-Loire | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Saint-Sébastien-sur-Loire et ses environs. Spécialistes des travaux de toitur',
  keywords: 'zinguerie saint-sébastien-sur-loire, travaux zinguerie saint-sébastien-sur-loire, toiture zinc saint-sébastien-sur-loire, zingueur saint-sébastien-sur-loire, reparation zinc saint-sébastien-sur-loire, zinco reflect saint-sébastien-sur-loire',
};

export default function ZinguerieSaintSebastienSurLoirePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Saint-Sébastien-sur-Loire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Saint-Sébastien-sur-Loire et ses environs. Spécialistes des travaux de toiture et de protection contre les infiltrations, nous intervenons avec précision et expertise pour garantir la longévité de vos installations.</p>

        <h2>Nos services de travaux de zinguerie a Saint-Sébastien-sur-Loire</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;ensemble des besoins en protection et finition de toiture. Nous réalisons des travaux complets, depuis la pose de gouttières jusqu&apos;à l&apos;habillage de chéneaux, en utilisant des techniques et matériaux de haute qualité. Notre équipe maîtrise parfaitement le zinc Reflect, un matériau innovant offrant une durabilité exceptionnelle et une résistance aux conditions climatiques variées. Chaque intervention est précédée d&apos;un diagnostic technique précis pour identifier les zones sensibles et proposer la solution la plus adaptée à votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans, 2) Des techniciens certifiés et formés aux dernières normes, 3) Un devis gratuit et détaillé sous 48h, 4) Des matériaux garantis et une intervention respectueuse de l&apos;environnement. Nous intervenons sur Saint-Sébastien-sur-Loire avec réactivité et professionnalisme.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, l&apos;accessibilité et les matériaux utilisés. Pour une estimation précise, nous recommandons un diagnostic sur site qui permettra de définir un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 80 ans. Sa durée de vie dépend de la qualité de la pose, de l&apos;exposition aux intempéries et des traitements de protection réguliers.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris végétaux, la vérification de l&apos;étanchéité des joints et le traitement préventif contre la corrosion. Nous proposons des contrats de maintenance adaptés à vos besoins.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Saint-Sébastien-sur-Loire ?
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
