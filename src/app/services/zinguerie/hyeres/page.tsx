import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Hyères | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Hyères, spécialiste des travaux de toiture et de protection contre les intempér',
  keywords: 'zinguerie hyères, travaux zinguerie hyères, toiture zinc hyères, zingueur hyères, reparation zinc hyères, zinco reflect hyères',
};

export default function ZinguerieHyeresPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Hyères</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Hyères, spécialiste des travaux de toiture et de protection contre les intempéries depuis plus de 15 ans. Nous intervenons sur l&apos;ensemble du Var pour des solutions techniques et durables en zinguerie.</p>

        <h2>Nos services de travaux de zinguerie a Hyères</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;intégralité des besoins en rénovation et protection de toiture. Nous réalisons des travaux précis et sur-mesure, en utilisant des techniques modernes et des matériaux haute qualité comme le zinc Zinco Reflect. Notre équipe maîtrise parfaitement les techniques de pose, de réparation et d&apos;étanchéité, garantissant une protection optimale contre les infiltrations et les dégradations. À Hyères, nous comprenons les spécificités climatiques locales et adaptons nos interventions en conséquence, avec une attention particulière à la durabilité et à l&apos;esthétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique certifiée avec plus de 15 ans d&apos;expérience
- Équipe de zingueurs qualifiés et formés aux dernières normes
- Devis gratuit et transparent sous 48h
- Matériaux premium et techniques innovantes
- Intervention rapide sur Hyères et ses environs</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, l&apos;accessibilité et les matériaux utilisés. Un diagnostic précis permet d&apos;établir un devis personnalisé adapté à votre projet spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc de qualité peut durer entre 50 et 80 ans avec un entretien régulier. Sa longévité dépend de la qualité de la pose, des conditions climatiques et du suivi technique annuel recommandé.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, le contrôle des joints et des fixations, et l&apos;élimination des mousses ou végétations. Nous recommandons une visite technique tous les 3-5 ans pour garantir sa parfaite conservation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Hyères ?
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
