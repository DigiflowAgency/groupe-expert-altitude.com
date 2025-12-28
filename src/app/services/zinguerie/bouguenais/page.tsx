import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Bouguenais | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance en zinguerie sur Bouguenais et ses environs. Spécialistes des travaux de toiture et de prot',
  keywords: 'zinguerie bouguenais, travaux zinguerie bouguenais, toiture zinc bouguenais, zingueur bouguenais, reparation zinc bouguenais, zinco reflect bouguenais',
};

export default function ZinguerieBouguenaisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Bouguenais</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance en zinguerie sur Bouguenais et ses environs. Spécialistes des travaux de toiture et de protection contre l&apos;eau, nous intervenons avec précision pour sécuriser et valoriser votre patrimoine immobilier.</p>

        <h2>Nos services de travaux de zinguerie a Bouguenais</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;ensemble des besoins en protection et finition de toiture. Nous réalisons des installations complètes de zinguerie utilisant des techniques et matériaux de haute qualité, garantissant une étanchéité parfaite et une durabilité exceptionnelle. Notre équipe maîtrise tous les types de systèmes : gouttières, descentes d&apos;eau, bavettes, habillages de cheminées et noues. Sur Bouguenais, nous adaptons chaque intervention aux spécificités architecturales locales, en privilégiant des solutions techniques innovantes et esthétiques. Notre approche combine expertise technique et souci du détail, pour des réalisations qui allient performance et élégance.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Équipe certifiée avec plus de 15 ans d&apos;expérience
• Interventions rapides et sur-mesure
• Devis gratuit et transparent
• Matériaux sélectionnés auprès de fournisseurs français
• Garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité du chantier, les matériaux utilisés et l&apos;accessibilité. Un diagnostic précis nous permet de vous proposer un devis détaillé et sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Sa durée de vie dépend de la qualité de la pose, de l&apos;épaisseur du zinc utilisé et de l&apos;exposition aux intempéries.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris végétaux, la vérification de l&apos;étanchéité des joints et le contrôle de l&apos;état général. Nous recommandons une inspection professionnelle tous les 5 à 7 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Bouguenais ?
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
