import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Saint-Herblain | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Saint-Herblain, spécialiste des travaux de toiture et de protection contre les ',
  keywords: 'zinguerie saint-herblain, travaux zinguerie saint-herblain, toiture zinc saint-herblain, zingueur saint-herblain, reparation zinc saint-herblain, zinco reflect saint-herblain',
};

export default function ZinguerieSaintHerblainPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Saint-Herblain</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Saint-Herblain, spécialiste des travaux de toiture et de protection contre les infiltrations. Notre expertise technique garantit des solutions durables et esthétiques pour tous vos projets de zinguerie sur la métropole nantaise.</p>

        <h2>Nos services de travaux de zinguerie a Saint-Herblain</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;ensemble des besoins en protection et finition de toiture, avec une attention particulière portée à chaque détail technique. Notre équipe maîtrise parfaitement les techniques de pose et de rénovation de systèmes de zinguerie, en utilisant des matériaux de haute qualité comme le zinc Zinco Reflect, reconnu pour sa durabilité et sa résistance aux intempéries. Nous intervenons aussi bien sur des bâtiments résidentiels que professionnels à Saint-Herblain, en proposant des solutions sur-mesure adaptées à chaque configuration architecturale. Notre processus comprend un diagnostic précis, un devis détaillé et une réalisation professionnelle qui respecte les normes techniques les plus exigeantes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise technique certifiée avec plus de 15 ans d&apos;expérience
• Équipe de zingueurs qualifiés et formés en permanence
• Matériaux premium et techniques innovantes
• Intervention rapide et garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité du chantier, la qualité des matériaux et l&apos;accessibilité de la toiture. Pour un projet à Saint-Herblain, nous proposons un devis personnalisé après diagnostic précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Sa longévité exceptionnelle dépend de la qualité de pose, de l&apos;exposition aux intempéries et des entretiens réguliers effectués par des professionnels.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris végétaux, la vérification de l&apos;étanchéité des joints et le traitement préventif contre la corrosion. Nous recommandons un contrôle professionnel tous les 5 à 7 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Saint-Herblain ?
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
