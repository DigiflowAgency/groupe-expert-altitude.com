import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Paris 7e | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Paris 7e, spécialiste des travaux de toiture et de rénovation de systèmes ',
  keywords: 'zinguerie paris 7e, travaux zinguerie paris 7e, toiture zinc paris 7e, zingueur paris 7e, reparation zinc paris 7e, zinco reflect paris 7e',
};

export default function ZinguerieParis7ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Paris 7e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Paris 7e, spécialiste des travaux de toiture et de rénovation de systèmes d&apos;évacuation. Nous intervenons avec précision et expertise dans tout l&apos;arrondissement pour protéger durablement votre patrimoine immobilier.</p>

        <h2>Nos services de travaux de zinguerie a Paris 7e</h2>
        <div className="space-y-4">
          <p>Nos prestations de zinguerie couvrent l&apos;ensemble des besoins techniques et esthétiques pour les habitations et bâtiments professionnels. Nous réalisons des travaux complets incluant la pose, la réparation et le remplacement des éléments en zinc : gouttières, descentes d&apos;eau, bavettes, habillages de cheminées et toitures. Notre équipe maîtrise parfaitement les techniques de zinco reflect et utilise uniquement des matériaux haute qualité garantissant une durabilité maximale. Chaque intervention est précédée d&apos;un diagnostic technique précis pour proposer la solution la plus adaptée à votre configuration.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Plus de 15 ans d&apos;expertise sur Paris 7e
✓ Équipe de zingueurs certifiés et formés aux dernières normes
✓ Devis gratuit et transparents
✓ Interventions rapides et sur-mesure
✓ Garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux. Pour une toiture moyenne de 50m², comptez un budget global entre 2500€ et 6000€ incluant matériaux et main-d&apos;œuvre.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Sa durée de vie dépend de la qualité de la pose, de l&apos;exposition et de l&apos;entretien régulier.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, le contrôle des joints et des fixations, et le traitement préventif contre les mousses et salissures. Nous recommandons une visite technique tous les 5 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Paris 7e ?
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
