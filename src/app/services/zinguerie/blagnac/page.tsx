import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Blagnac | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Blagnac, spécialiste des travaux de toiture et de protection contre les intempérie',
  keywords: 'zinguerie blagnac, travaux zinguerie blagnac, toiture zinc blagnac, zingueur blagnac, reparation zinc blagnac, zinco reflect blagnac',
};

export default function ZinguerieBlagnacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Blagnac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Blagnac, spécialiste des travaux de toiture et de protection contre les intempéries. Nous intervenons sur l&apos;ensemble de la métropole toulousaine avec une expertise technique garantissant la qualité et la durabilité de vos installations.</p>

        <h2>Nos services de travaux de zinguerie a Blagnac</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;intégralité des besoins en protection et finition de toiture. Notre équipe de professionnels réalise des travaux sur-mesure, en utilisant des techniques et matériaux de haute qualité comme le zinc Zinco Reflect, reconnu pour sa résistance et son esthétique. Nous intervenons aussi bien sur des constructions neuves que sur des rénovations, en proposant un diagnostic précis et des solutions adaptées à chaque configuration architecturale. Notre process inclut un audit technique complet, un devis détaillé et une réalisation respectant les normes en vigueur, avec une attention particulière portée aux spécificités de l&apos;habitat à Blagnac et ses environs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans dans le domaine de la zinguerie, 2) Des techniciens certifiés et formés aux dernières innovations, 3) Un engagement qualité avec une garantie décennale sur nos travaux, 4) Un conseil personnalisé et transparent tout au long de votre projet.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité du chantier, les matériaux utilisés et l&apos;accessibilité. Pour un projet précis à Blagnac, nous recommandons un diagnostic sur place pour un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Sa longévité exceptionnelle dépend de la qualité de la pose, de l&apos;environnement et des conditions climatiques locales.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification de l&apos;étanchéité des raccords et le traitement préventif contre les mousses et lichens. Nous proposons des contrats de maintenance adaptés.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Blagnac ?
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
