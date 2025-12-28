import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Muret | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Muret et ses environs. Spécialistes des travaux de zinguerie, nous intervenons ',
  keywords: 'zinguerie muret, travaux zinguerie muret, toiture zinc muret, zingueur muret, reparation zinc muret, zinco reflect muret',
};

export default function ZinguerieMuretPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Muret</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Muret et ses environs. Spécialistes des travaux de zinguerie, nous intervenons sur tous types de toitures avec une expertise technique et un engagement de qualité.</p>

        <h2>Nos services de travaux de zinguerie a Muret</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;intégralité des besoins en rénovation et installation de systèmes de collecte et d&apos;évacuation des eaux. Notre équipe maîtrise parfaitement les techniques de pose de gouttières, descentes d&apos;eau, bavettes et habillages en zinc, en garantissant une étanchéité optimale. Nous utilisons uniquement des matériaux haute qualité comme le zinc Zinco Reflect, reconnu pour sa durabilité et sa résistance aux intempéries. Chaque intervention à Muret est précédée d&apos;un diagnostic précis permettant une solution sur-mesure, avec un taux de satisfaction client de plus de 95%.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de zingueurs certifiés avec plus de 15 ans d&apos;expérience
- Devis gratuit et détaillé sous 48h
- Matériaux premium et techniques d&apos;installation conformes aux normes
- Intervention rapide sur Muret et tout le sud-toulousain</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif moyen d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, l&apos;accessibilité et les matériaux utilisés. Un diagnostic précis nous permet de vous proposer un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Sa longévité exceptionnelle dépend de la qualité de la pose, de l&apos;exposition et de l&apos;entretien régulier.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification de l&apos;étanchéité des joints et le traitement préventif contre les mousses et lichens.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Muret ?
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
