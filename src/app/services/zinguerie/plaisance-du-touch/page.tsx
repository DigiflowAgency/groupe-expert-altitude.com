import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Plaisance-du-Touch | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Plaisance-du-Touch et ses environs. Spécialistes des travaux de toiture et de',
  keywords: 'zinguerie plaisance-du-touch, travaux zinguerie plaisance-du-touch, toiture zinc plaisance-du-touch, zingueur plaisance-du-touch, reparation zinc plaisance-du-touch, zinco reflect plaisance-du-touch',
};

export default function ZingueriePlaisanceDuTouchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Plaisance-du-Touch</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Plaisance-du-Touch et ses environs. Spécialistes des travaux de toiture et de protection contre les infiltrations, nous intervenons avec précision et expertise pour tous vos projets de zinguerie.</p>

        <h2>Nos services de travaux de zinguerie a Plaisance-du-Touch</h2>
        <div className="space-y-4">
          <p>La zinguerie constitue un élément essentiel de la protection de votre habitat, garantissant l&apos;étanchéité et la longévité de votre toiture. Notre équipe de professionnels maîtrise parfaitement les techniques de pose et de réparation des éléments en zinc, depuis les gouttières jusqu&apos;aux habillages de cheminées. Nous utilisons des matériaux haute qualité comme le zinco reflect, reconnu pour sa durabilité et sa résistance aux conditions climatiques. Notre processus d&apos;intervention comprend un diagnostic précis, un devis détaillé et une réalisation soignée, avec une attention particulière aux spécificités architecturales de chaque bâtiment à Plaisance-du-Touch.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Plus de 15 ans d&apos;expertise en zinguerie
✓ Techniciens certifiés et formés aux dernières normes
✓ Interventions rapides et sur-mesure
✓ Matériaux premium et techniques innovantes
✓ Garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux. Pour une toiture moyenne de 100m², comptez un budget global entre 5 000€ et 12 000€. Nos devis sont toujours transparents et détaillés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 80 ans. Sa durée de vie exceptionnelle dépend de la qualité de la pose, de l&apos;exposition et de l&apos;entretien régulier. Notre expertise garantit une installation optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des fixations. Nous recommandons une inspection professionnelle tous les 5-7 ans pour prévenir tout risque de dégradation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Plaisance-du-Touch ?
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
