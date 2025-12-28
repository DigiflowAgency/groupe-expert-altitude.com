import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Couëron | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire zinguerie de référence à Couëron, vous propose des solutions professionnelles pour protéger et valoriser vos t',
  keywords: 'zinguerie couëron, travaux zinguerie couëron, toiture zinc couëron, zingueur couëron, reparation zinc couëron, zinco reflect couëron',
};

export default function ZinguerieCoueronPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Couëron</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire zinguerie de référence à Couëron, vous propose des solutions professionnelles pour protéger et valoriser vos toitures. Spécialistes des travaux de zinguerie, nous intervenons sur l&apos;ensemble de la métropole nantaise avec une expertise technique irréprochable.</p>

        <h2>Nos services de travaux de zinguerie a Couëron</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;intégralité des besoins en rénovation et installation de systèmes de gouttières, descentes et habillages de toiture. Notre équipe maîtrise parfaitement les techniques du zinc, garantissant une étanchéité optimale et une durabilité exceptionnelle. Nous utilisons uniquement des matériaux haute qualité, conformes aux normes professionnelles, et adaptons chaque intervention aux spécificités architecturales de votre bâtiment. Notre processus comprend un diagnostic précis, un devis détaillé, et une réalisation minutieuse par nos techniciens certifiés.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans à Couëron, 2) Des techniciens certifiés et formés aux dernières techniques, 3) Un engagement qualité garanti par un suivi personnalisé, 4) Des tarifs transparents et compétitifs. Nous sommes votre solution zinguerie complète et fiable.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité du chantier, les matériaux utilisés et l&apos;accessibilité. Chez Groupe Expert Altitude Com, nous proposons un devis gratuit et détaillé pour une transparence totale.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 80 ans. Sa durabilité exceptionnelle dépend de la qualité de l&apos;installation initiale, de l&apos;environnement et des conditions climatiques locales à Couëron.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification de l&apos;étanchéité et le contrôle des points de jonction. Nous recommandons une inspection professionnelle tous les 5 à 7 ans pour garantir sa longévité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Couëron ?
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
