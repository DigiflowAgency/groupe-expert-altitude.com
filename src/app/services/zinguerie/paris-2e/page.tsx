import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Paris 2e | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence sur Paris 2e, spécialiste des travaux de toiture et de protection contre les infi',
  keywords: 'zinguerie paris 2e, travaux zinguerie paris 2e, toiture zinc paris 2e, zingueur paris 2e, reparation zinc paris 2e, zinco reflect paris 2e',
};

export default function ZinguerieParis2ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Paris 2e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence sur Paris 2e, spécialiste des travaux de toiture et de protection contre les infiltrations. Notre expertise technique garantit des solutions durables et esthétiques pour protéger efficacement votre patrimoine immobilier.</p>

        <h2>Nos services de travaux de zinguerie a Paris 2e</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;intégralité des besoins en rénovation et protection de toiture. Nous intervenons sur tous types de bâtiments à Paris 2e, en proposant des solutions sur-mesure en zinc haute qualité. Notre équipe maîtrise parfaitement les techniques de pose, de soudure et de raccordement, en respectant les normes techniques les plus exigeantes. Nous utilisons uniquement des matériaux certifiés, résistants à la corrosion et offrant une durabilité exceptionnelle. Notre approche combinant technicité et précision nous permet de réaliser des travaux de zinguerie parfaitement étanches et esthétiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise technique de plus de 15 ans à Paris
✓ Équipe de zingueurs certifiés et formés en permanence
✓ Devis précis et transparent sans frais cachés
✓ Interventions rapides dans le 2e arrondissement
✓ Garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité du chantier, l&apos;accessibilité et les matériaux utilisés. Pour une estimation précise, notre équipe réalise systématiquement un diagnostic gratuit sur site.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 80 ans. Sa durée de vie dépend de la qualité de la pose, de l&apos;exposition aux intempéries et des conditions d&apos;entretien régulier.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des raccords. Nous recommandons une inspection professionnelle tous les 5 à 7 ans pour garantir sa longévité et sa performance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Paris 2e ?
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
